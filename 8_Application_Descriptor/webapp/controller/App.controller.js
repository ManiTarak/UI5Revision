sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageBox"],
  function (Controller, MessageBox) {
    return Controller.extend("ui.bootstrap.controller.App", {
      pressMeEventHandlerFunction: function (oEvent) {
        let oBundle = this.getOwnerComponent()
          .getModel("i18n")
          .getResourceBundle();

        MessageBox.show(
          oBundle.getText("msg_text", [
            " This will show arguments in i18n arguments",
          ])
        );
      },
    });
  }
);
