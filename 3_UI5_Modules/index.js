sap.ui.define(["sap/m/Button"], function (Button) {
  new Button({
    text: "Click me to get a popup",
    press: () => {
      alert("Button is clicked");
    },
  }).placeAt("content");
});
