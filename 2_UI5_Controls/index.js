new sap.m.Button({
  text: "Click me to get a popup",
  press: () => {
    alert("Button is clicked");
  },
}).placeAt("content");
