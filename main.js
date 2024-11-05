const boxes = document.querySelectorAll(".box");

let startX = 0;
let startY = 0;
let currentBox =undefined;
let index = 1;

boxes.forEach(function (box) {
  box.addEventListener("mousedown", function (e) {
    currentBox = e.currentTarget;

    currentBox.style.zIndex = index;
    index++;
    
    startX = e.clientX - currentBox.offsetLeft;
    startY = e.clientY - currentBox.offsetTop;

    document.addEventListener("mousemove", mouseMove );
    document.addEventListener("mouseup", mouseUp)
  });
});

function mouseMove(e) {
    currentBox.style.left = `${e.clientX - startX}px`;
    currentBox.style.top = `${e.clientY - startY}px`;
  }

  function mouseUp(){
    document.removeEventListener("mousemove", mouseMove)
  }