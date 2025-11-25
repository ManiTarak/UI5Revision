sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/resource/ResourceModel"],
  function (UIComponent, ResourceModel) {
    return UIComponent.extend("ui.bootstrap.Component", {
      metadata: {
        rootView: {
          viewName: "ui.bootstrap.view.App",
          type: "XML",
          id: "app",
        },
      },
      init: function () {
        UIComponent.prototype.init.apply(this, arguments);
        let i18nModel = new ResourceModel({
          bundleName: "ui.bootstrap.i18n.i18n",
        });
        this.setModel(i18nModel, "i18n");
      },
    });
  }
);
