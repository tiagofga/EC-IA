document.addEventListener("DOMContentLoaded", async () => {
  if (typeof mermaid === "undefined") return;

  const normalizeMermaidSource = (source) =>
    source
      .replace(/<br\s*\/?>/gi, " - ")
      .replace(/\u00a0/g, " ")
      // Mermaid flowcharts are sensitive to punctuation such as (), + and *
      // inside unquoted node and edge labels. Quote those labels before parsing.
      .replace(/\[([^\]\n]*[()+*][^\]\n]*)\]/g, (_, label) => `["${label.replace(/"/g, "'")}"]`)
      .replace(/\|([^|\n]*[()+*][^|\n]*)\|/g, (_, label) => `|"${label.replace(/"/g, "'")}"|`)
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
          fontFamily: "Arial, Helvetica, sans-serif"
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
          fontFamily: "Arial, Helvetica, sans-serif"
        };

  const fitSvgToContent = (diagram) => {
    const svg = diagram.querySelector("svg");
    if (!svg) return;

    const content = svg.querySelector("g") || svg;
    let box;

    try {
      box = content.getBBox();
    } catch (error) {
      console.warn("Não foi possível medir o SVG Mermaid:", error);
    }

    if (box && box.width > 0 && box.height > 0) {
      const padding = Math.max(48, Math.min(96, Math.max(box.width, box.height) * 0.06));
      svg.setAttribute(
        "viewBox",
        `${box.x - padding} ${box.y - padding} ${box.width + padding * 2} ${box.height + padding * 2}`
      );
    }

    svg.removeAttribute("width");
    svg.removeAttribute("height");
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    svg.style.overflow = "visible";
  };

  const renderDiagrams = async (theme) => {
    // Mermaid measures text while computing node dimensions. Waiting for fonts
    // avoids nodes being sized with fallback metrics and clipped afterwards.
    if (document.fonts?.ready) {
      await document.fonts.ready;
    }

    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "base",
      flowchart: { useMaxWidth: true, htmlLabels: false, padding: 28 },
      mindmap: { useMaxWidth: true, padding: 48 },
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
        await new Promise((resolve) => requestAnimationFrame(resolve));
        fitSvgToContent(diagram);
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
