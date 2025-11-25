sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageBox"],
  function (Controller, MessageBox) {
    return Controller.extend("ui.bootstrap.controller.App", {
      pressMeEventHandlerFunction: function (oEvent) {
        MessageBox.show("Button is pressed");
      },
    });
  }
);
