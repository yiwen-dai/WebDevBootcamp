exports.getDate = function () {
  let today = new Date(); // new date object (node.js)
  let currentDay = today.getDay();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "short",
  };

  return today.toLocaleDateString("en-US", options);
};

exports.getDay = function () {
  let today = new Date(); // new date object (node.js)
  let currentDay = today.getDay();

  let options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
};
