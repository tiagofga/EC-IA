document.addEventListener("DOMContentLoaded", async () => {
  if (typeof mermaid === "undefined") return;

  const normalizeMermaidSource = (source) =>
    source
      .replace(/<br\s*\/?>/gi, " - ")
      .replace(/\u00a0/g, " ")
      .trim();

  const isDark =
    document.documentElement.dataset.theme === "dark" ||
    document.body.dataset.theme === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches;

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
    theme: "base",
    flowchart: { useMaxWidth: true, htmlLabels: false },
    mindmap: { useMaxWidth: true },
    themeVariables: isDark
      ? {
          primaryColor: "#2f6fed",
          primaryTextColor: "#f5f7fb",
          primaryBorderColor: "#7aa2ff",
          lineColor: "#8fb3ff",
          secondaryColor: "#1e9e6a",
          tertiaryColor: "#d79b00",
          background: "#0f172a",
          mainBkg: "#1e293b",
          secondBkg: "#173b2f",
          tertiaryBkg: "#4a3b08",
          nodeBkg: "#1e293b",
          nodeBorder: "#7aa2ff",
          clusterBkg: "#111827",
          clusterBorder: "#475569",
          edgeLabelBackground: "#0f172a",
          textColor: "#e5e7eb",
          fontFamily: "Inter, Arial, sans-serif"
        }
      : {
          primaryColor: "#dbeafe",
          primaryTextColor: "#0f172a",
          primaryBorderColor: "#2563eb",
          lineColor: "#2563eb",
          secondaryColor: "#dcfce7",
          tertiaryColor: "#fef3c7",
          background: "#ffffff",
          mainBkg: "#eff6ff",
          secondBkg: "#ecfdf5",
          tertiaryBkg: "#fffbeb",
          nodeBkg: "#ffffff",
          nodeBorder: "#2563eb",
          clusterBkg: "#f8fafc",
          clusterBorder: "#94a3b8",
          edgeLabelBackground: "#ffffff",
          textColor: "#0f172a",
          fontFamily: "Inter, Arial, sans-serif"
        }
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