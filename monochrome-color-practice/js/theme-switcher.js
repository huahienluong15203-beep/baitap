const paletteButtons = document.querySelectorAll("[data-palette-button]");
const paletteName = document.getElementById("palette-name");
const shadeLabels = document.querySelectorAll("[data-shade]");

const palettes = {
  blue: {
    name: "Bảng màu xanh dương",
    shades: [
      "#00ADEE",
      "#00B2EF",
      "#39BDF2",
      "#00BFF2",
      "#53C8F4",
      "#70D0F5",
      "#8DD7F7",
      "#AADFF9",
      "#C6E9FA",
    ],
  },
  violet: {
    name: "Bảng màu tím violet",
    shades: [
      "#7047D7",
      "#8058DF",
      "#9069E6",
      "#A17AED",
      "#AF8BF0",
      "#BE9DF3",
      "#CEAFF6",
      "#DDC8F9",
      "#EEE2FC",
    ],
  },
};

function selectPalette(name) {
  const palette = palettes[name];

  if (!palette) {
    return;
  }

  document.documentElement.dataset.palette = name;
  paletteName.textContent = palette.name;

  paletteButtons.forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.paletteButton === name),
    );
  });

  shadeLabels.forEach((label, index) => {
    label.textContent = palette.shades[index];
  });
}

paletteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectPalette(button.dataset.paletteButton);
  });
});
