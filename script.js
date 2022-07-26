let title = document.querySelector(".title");
let turn = "x";
let content = document.querySelector(".content");
let contentSq = content.querySelectorAll(".squere");
let win;
function winner() {
  for (let i = 0; i < contentSq.length; i++) {
    if (
      contentSq[0].innerHTML == contentSq[1].innerHTML &&
      contentSq[1].innerHTML == contentSq[2].innerHTML &&
      contentSq[0].innerHTML != ""
    ) {
      contentSq[0].style.backgroundColor = "black";
      contentSq[1].style.backgroundColor = "black";
      contentSq[2].style.backgroundColor = "black";
      title.innerHTML = win + " is Winner";
      contentSq[i].setAttribute("disabled", "true");
    } else if (
      contentSq[3].innerHTML == contentSq[4].innerHTML &&
      contentSq[4].innerHTML == contentSq[5].innerHTML &&
      contentSq[3].innerHTML != ""
    ) {
      contentSq[3].style.backgroundColor = "black";
      contentSq[4].style.backgroundColor = "black";
      contentSq[5].style.backgroundColor = "black";
      title.innerHTML = win + " is Winner";
      contentSq[i].setAttribute("disabled", "true");
    } else if (
      contentSq[6].innerHTML == contentSq[7].innerHTML &&
      contentSq[7].innerHTML == contentSq[8].innerHTML &&
      contentSq[6].innerHTML != ""
    ) {
      contentSq[6].style.backgroundColor = "black";
      contentSq[7].style.backgroundColor = "black";
      contentSq[8].style.backgroundColor = "black";
      title.innerHTML = win + " is Winner";
      contentSq[i].setAttribute("disabled", "true");
    } else if (
      contentSq[0].innerHTML == contentSq[4].innerHTML &&
      contentSq[4].innerHTML == contentSq[8].innerHTML &&
      contentSq[0].innerHTML != ""
    ) {
      contentSq[0].style.backgroundColor = "black";
      contentSq[4].style.backgroundColor = "black";
      contentSq[8].style.backgroundColor = "black";
      title.innerHTML = win + " is Winner";
      contentSq[i].setAttribute("disabled", "true");
    } else if (
      contentSq[2].innerHTML == contentSq[4].innerHTML &&
      contentSq[4].innerHTML == contentSq[6].innerHTML &&
      contentSq[2].innerHTML != ""
    ) {
      contentSq[2].style.backgroundColor = "black";
      contentSq[4].style.backgroundColor = "black";
      contentSq[6].style.backgroundColor = "black";
      title.innerHTML = win + " is Winner";
      contentSq[i].setAttribute("disabled", "true");
    }
  }
}

for (let i = 0; i < contentSq.length; i++) {
  contentSq[i].addEventListener("click", function () {
    if (turn === "x" && this.innerHTML == "") {
      this.innerHTML = "X";
      turn = "o";
      title.innerHTML = "o";
    } else if (turn === "o" && this.innerHTML == "") {
      this.innerHTML = "O";
      turn = "x";
      title.innerHTML = "x";
    }
    win = this.innerHTML;
    winner();
  });
}
