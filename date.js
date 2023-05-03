//jshint esversion:6
exports.getDate = function() {
    
const today = new Date();

const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
};

return today.toLocaleString("en-US", options);

}