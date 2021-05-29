let box = document.querySelector(".share-box");
let as = box.querySelectorAll("a");
console.log(box);
// console.log(img);
// box.addEventListener("click", (info) => console.log(info));
for (let i = 0; i < 5; i++) {
  let img = as[i].querySelector("img");
  let src = img.src;

  let p = src.indexOf("/static");
  let q = src.indexOf(".png");
  src = src.slice(p, q);
  console.log(src);
  as[i].addEventListener("mouseover", () => (img.src = `${src}_hover.png`));
  as[i].addEventListener("mouseleave", () => (img.src = src + ".png"));
}
