sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
  XMLView.create({
    viewName: "ui.bootstrap.view.App",
  }).then(function (oView) {
    oView.placeAt("content");
  });
});
