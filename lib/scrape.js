(async () => {
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));

  const items = document.querySelectorAll(".cmp-visualizer__options-item");

  const viewer = document.querySelector("webcom-360-exterior-viewer-model");
  const viewElement = viewer?.shadowRoot?.querySelector("webcom-360-view-element");
  const canvas = viewElement?.shadowRoot?.querySelector("canvas");

  if (!canvas) {
    console.error("Canvas tidak ditemukan");
    return;
  }

  console.log("Total warna:", items.length);

  function realClick(el) {
    ["pointerdown", "mousedown", "mouseup", "click"].forEach(type => {
      el.dispatchEvent(
        new MouseEvent(type, {
          bubbles: true,
          cancelable: true,
          view: window
        })
      );
    });
  }

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const btn = item.querySelector("button");

    if (!btn) {
      console.warn("Button tidak ditemukan", item);
      continue;
    }

    // klik REAL (bukan .click())
    realClick(btn);

    // tunggu visualizer update
    await sleep(3000);

    // DEBUG: cek attribute options berubah
    console.log(
      "Active options:",
      viewer.getAttribute("options")
    );

    const colorName =
      btn.dataset?.optionCode ||
      btn.getAttribute("aria-label") ||
      `color-${i + 1}`;

    const dataURL = canvas.toDataURL("image/png");

    const a = document.createElement("a");
    a.href = dataURL;
    a.download = `${colorName}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();

    console.log("Saved:", colorName);
  }
})();
