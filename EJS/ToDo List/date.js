module.exports.getDate = getDate;

function getDate() {
  let today = new Date(); // new date object (node.js)
  let currentDay = today.getDay();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "short",
  };

  let day = today.toLocaleDateString("en-US", options);

  return day;
}

module.exports.getDay = getDay;

function getDate() {
  let today = new Date(); // new date object (node.js)
  let currentDay = today.getDay();

  let options = {
    weekday: "long",
  };

  let day = today.toLocaleDateString("en-US", options);

  return day;
}
