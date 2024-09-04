const mapPizzaSize = {
  20: "Small",
  30: "Medium",
  40: "Big",
} as const;

const mapPizzaType = {
  1: "Traditional",
  2: "Thin",
} as const;

const pizzaSizes = Object.entries(mapPizzaSize).map(([name, value]) => ({
  name,
  value,
}));
