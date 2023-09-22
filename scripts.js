const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const display = document.getElementById("display");

const block = document.getElementById("block");

const btn = document.getElementById("btn");

let dot1Top = 0;
let dot2Top = 0;

let dot1Left = 0;
let dot2Right = 0;

document.addEventListener("keyup", (e) => {
  switch (e.key) {
    // one player
    case "ArrowUp":
      dot1Top -= 5;
      dot1.style.top = dot1Top + "px";
      break;

    case "ArrowDown":
      dot1Top += 5;
      dot1.style.top = dot1Top + "px";
      break;

    case "ArrowLeft":
      dot1Left -= 5;
      dot1.style.left = dot1Left + "px";
      break;

    case "ArrowRight":
      dot1Left += 5;
      dot1.style.left = dot1Left + "px";
      break;

    // two player
    case "w":
      dot2Top -= 5;
      dot2.style.top = dot2Top + "px";
      break;

    case "s":
      dot2Top += 5;
      dot2.style.top = dot2Top + "px";
      break;

    case "d":
      dot2Right -= 5;
      dot2.style.right = dot2Right + "px";
      break;

    case "a":
      dot2Right += 5;
      dot2.style.right = dot2Right + "px";
      break;
  }
});

const Apple = () => {
  const apple = document.createElement("div");
  apple.style.width = "50px";
  apple.style.height = "50px";
  apple.style.border = "3px solid red";

  const displayWidth = display.clientWidth;
  const displayHeight = display.clientHeight;

  const randomLeft = Math.random() * displayWidth;
  const randomTop = Math.random() * displayHeight;

  apple.style.left = randomLeft + "px";
  apple.style.top = randomTop + "px";

  block.appendChild(apple);
};

btn.addEventListener("click", Apple);
