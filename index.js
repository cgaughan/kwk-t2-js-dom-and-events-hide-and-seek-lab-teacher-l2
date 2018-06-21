function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector("div.target")
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = Number.parseInt((i + 1).toString());
  }
}

function deepestChild () {
  const lastDiv = document.querySelector("div#grand-node")
  for (let x = 0; x < lastDiv.length - 1; x++) {
    lastDiv[x].innerHTML = (i + 1).toString();
  }
}
