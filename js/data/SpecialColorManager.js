export const materialTypes = {
  LIGHT: 20,
  UNTRACKEDLIGHT: 19,
  METAL: 3,
  GLASS: 2,
};

export class SpecialColorManager {
  specialColors = {};

  #getColorKey(color) {
    return `${color.red},${color.green},${color.blue}`;
  }

  addSpecialColor(color, hitType) {
    this.specialColors[this.#getColorKey(color)] = hitType;
  }

  addColors(type, colors) {
    colors.forEach((color) => {
      this.addSpecialColor(color, type);
    });
  }
}
