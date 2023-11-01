const SPACING_UNIT_ENUM = {
  PX: "px",
  CM: "cm",
  MM: "mm",
  IN: "in",
  PT: "pt",
  PC: "pc",
  EM: "em",
  EX: "ex",
  PERCENT: "%",
  FT: "ft",
  M: "m",
};

const LAYER_TYPE_ENUM = {
  TEXT: "text",
  IMAGE: "image",
  BRAND: "brand",
  SHAPE: "shape",
};

const LAYER_SHAPE_ENUM = {
  SQUARE: "square",
  CIRCLE: "circle",
  TRIANGLE: "triangle",
  RECTANGLE: "rectangle",
  ELLIPSE: "ellipse",
};

const LAYER_STATUS_ENUM = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCEEDED: "succeeded",
  FAILED: "failed",
  SUCCESS: "success",
};

export {
  SPACING_UNIT_ENUM,
  LAYER_TYPE_ENUM,
  LAYER_SHAPE_ENUM,
  LAYER_STATUS_ENUM,
};
