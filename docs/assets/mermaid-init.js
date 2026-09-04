document.addEventListener("DOMContentLoaded", () => {
  const renderMermaid = () => {
    if (typeof mermaid === "undefined") return;

    document.querySelectorAll("pre code.language-mermaid").forEach((code) => {
      const pre = code.parentElement;
      if (!pre || pre.dataset.mermaidProcessed === "true") return;

      const wrapper = document.createElement("div");
      wrapper.className = "mermaid";
      wrapper.textContent = code.textContent;
      pre.dataset.mermaidProcessed = "true";
      pre.replaceWith(wrapper);
    });

    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "neutral",
      flowchart: { useMaxWidth: true, htmlLabels: true },
      mindmap: { useMaxWidth: true }
    });

    mermaid.run({ querySelector: ".mermaid" });
  };

  renderMermaid();
});
