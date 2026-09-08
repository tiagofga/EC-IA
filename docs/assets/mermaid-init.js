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
          primaryColor: "#2563eb",
          primaryTextColor: "#f8fafc",
          primaryBorderColor: "#93c5fd",
          lineColor: "#93c5fd",
          secondaryColor: "#059669",
          secondaryTextColor: "#ecfdf5",
          tertiaryColor: "#d97706",
          tertiaryTextColor: "#fff7ed",
          background: "#171d25",
          mainBkg: "#2563eb",
          secondBkg: "#059669",
          tertiaryBkg: "#d97706",
          nodeBkg: "#1d4ed8",
          nodeBorder: "#bfdbfe",
          clusterBkg: "#202833",
          clusterBorder: "#64748b",
          edgeLabelBackground: "#171d25",
          textColor: "#f8fafc",
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

  const padSvgViewBox = (diagram) => {
    const svg = diagram.querySelector("svg");
    if (!svg) return;

    const padding = 48;
    const viewBox = svg.getAttribute("viewBox");

    if (viewBox) {
      const values = viewBox.trim().split(/\s+/).map(Number);
      if (values.length === 4 && values.every(Number.isFinite)) {
        const [x, y, width, height] = values;
        svg.setAttribute(
          "viewBox",
          `${x - padding} ${y - padding} ${width + padding * 2} ${height + padding * 2}`
        );
      }
    }

    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    svg.style.overflow = "visible";
    svg.style.maxWidth = "100%";
    svg.style.height = "auto";
  };

  const renderDiagrams = async (theme) => {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "base",
      flowchart: { useMaxWidth: true, htmlLabels: false },
      mindmap: { useMaxWidth: true, padding: 24 },
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
        padSvgViewBox(diagram);
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
