sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
  return UIComponent.extend("ui.bootstrap.Component", {
    metadata: {
      rootView: {
        viewName: "ui.bootstrap.view.App",
        type: "XML",
        id: "app",
      },
    },
  });
});
