document.addEventListener("DOMContentLoaded", async () => {
  if (typeof mermaid === "undefined") return;

  const normalizeMermaidSource = (source) =>
    source
      .replace(/<br\s*\/?>/gi, " - ")
      .replace(/\u00a0/g, " ")
      .trim();

  const diagrams = [];

  document.querySelectorAll("pre code.language-mermaid").forEach((code) => {
    const pre = code.parentElement;
    if (!pre || pre.dataset.mermaidProcessed === "true") return;

    const wrapper = document.createElement("div");
    wrapper.className = "mermaid";
    wrapper.dataset.mermaidSource = normalizeMermaidSource(code.textContent || "");
    wrapper.textContent = wrapper.dataset.mermaidSource;

    pre.dataset.mermaidProcessed = "true";
    pre.replaceWith(wrapper);
    diagrams.push(wrapper);
  });

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "strict",
    theme: "neutral",
    flowchart: { useMaxWidth: true, htmlLabels: false },
    mindmap: { useMaxWidth: true }
  });

  for (const diagram of diagrams) {
    const source = diagram.dataset.mermaidSource || "";

    try {
      await mermaid.parse(source);
      await mermaid.run({ nodes: [diagram] });
    } catch (error) {
      console.error("Falha ao renderizar diagrama Mermaid:", error, source);
      diagram.classList.add("mermaid-error");
      diagram.textContent =
        "Diagrama temporariamente indisponível. Consulte o conteúdo textual desta seção.";
    }
  }
});
