function saveName() {
  let input = document.getElementById("input-name");
  let name = input.value;
  localStorage.name = name;
  window.location.reload();
}

function changeColor() {
  let input = document.getElementById("input-color");
  let color = input.value;
  document.body.style.background = color;
}

let counter = 1;

window.setInterval(() => {
  const img = document.querySelector("#kitty-image");
  
  if(counter % 2 === 1) {
    img.style.animation = "spin-reverse 5s linear infinite";
  } else {
    img.style.animation = "spin 5s linear infinite";
  }
  counter++;
}, 5000);