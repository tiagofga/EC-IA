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

  const themeVariables = (theme) =>
    theme === "dark"
      ? {
          primaryColor: "#274c77",
          primaryTextColor: "#f8fafc",
          primaryBorderColor: "#7db7ff",
          lineColor: "#8ec5ff",
          secondaryColor: "#237a57",
          secondaryTextColor: "#f8fafc",
          tertiaryColor: "#8a6518",
          tertiaryTextColor: "#fff7db",
          background: "#171d25",
          mainBkg: "#274c77",
          secondBkg: "#237a57",
          tertiaryBkg: "#8a6518",
          nodeBkg: "#274c77",
          nodeBorder: "#7db7ff",
          clusterBkg: "#202833",
          clusterBorder: "#52606f",
          edgeLabelBackground: "#171d25",
          textColor: "#f1f5f9",
          fontFamily: "Inter, Arial, sans-serif"
        }
      : {
          primaryColor: "#dbeafe",
          primaryTextColor: "#172033",
          primaryBorderColor: "#2563eb",
          lineColor: "#3b82f6",
          secondaryColor: "#dcfce7",
          secondaryTextColor: "#14532d",
          tertiaryColor: "#fef3c7",
          tertiaryTextColor: "#713f12",
          background: "#ffffff",
          mainBkg: "#dbeafe",
          secondBkg: "#dcfce7",
          tertiaryBkg: "#fef3c7",
          nodeBkg: "#eff6ff",
          nodeBorder: "#2563eb",
          clusterBkg: "#f8fafc",
          clusterBorder: "#94a3b8",
          edgeLabelBackground: "#ffffff",
          textColor: "#172033",
          fontFamily: "Inter, Arial, sans-serif"
        };

  const renderDiagrams = async (theme) => {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "base",
      flowchart: { useMaxWidth: true, htmlLabels: false },
      mindmap: { useMaxWidth: true },
      themeVariables: themeVariables(theme)
    });

    for (const diagram of diagrams) {
      const source = diagram.dataset.mermaidSource || "";

      try {
        diagram.classList.remove("mermaid-error");
        diagram.removeAttribute("data-processed");
        diagram.textContent = source;
        await mermaid.parse(source);
        await mermaid.run({ nodes: [diagram] });
      } catch (error) {
        console.error("Falha ao renderizar diagrama Mermaid:", error, source);
        diagram.classList.add("mermaid-error");
        diagram.textContent =
          "Diagrama temporariamente indisponível. Consulte o conteúdo textual desta seção.";
      }
    }
  };

  const currentTheme = () =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light";

  await renderDiagrams(currentTheme());

  document.addEventListener("ecia-theme-change", (event) => {
    const theme = event.detail?.theme === "dark" ? "dark" : "light";
    renderDiagrams(theme);
  });
});
