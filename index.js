function getFirstSelector(selector) {
  return document.querySelector(selector)[0];
}

function nestedTarget() {
  return document.getElementById("nested").querySelector("div.target")
}