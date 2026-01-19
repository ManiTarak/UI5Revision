sap.ui.define(
  ["sap/ui/core/ComponentContainer"],
  function (ComponentContainer) {
    new ComponentContainer({
      name: "ui.bootstrap",
      settings: {
        id: "ui.bootstrap",
      },
      async: true,
    }).placeAt("content");
  }
);
