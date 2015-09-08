Bert = {
 defaults: {
  animated: true,
  // Accepts: true or false.
  animationSpeed: 300,
  // Accepts: integer value in milliseconds.
  // Note: this value needs to match the speed of the CSS transition-duration
  // property on the .bert-alert.animated class. If it doesn't, Bert will freak out.
  autoHide: false,
  // Accepts: true or false.
  dismissable: true,
  // Accepts: true or false.
  hideDelay: 3500,
  // Accepts: integer value in milliseconds.
  style: "growl-top-right",
  // Accepts: fixed-top, fixed-bottom, growl-top-left, growl-top-right,
  // growl-bottom-left, growl-bottom-right.
  type: "default"
  // Accepts: default, success, info, warning, danger.
 }
}