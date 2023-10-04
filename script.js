const btn = document.querySelector("button");

let flag = 0;

btn.addEventListener("click", function () {
  if (flag == 0) {
    btn.innerHTML = "Following";
    btn.style.backgroundColor = "#fff";
    btn.style.color = "black";
    flag = 1;
  } else {
    btn.innerHTML = "Follow";
    btn.style.backgroundColor = "rgb(88, 88, 255)";
    btn.style.color = "white";
    flag = 0;
  }
});
