const boton_top = document.getElementById("btn-back-to-top");


const scrollFunction = () => {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    boton_top.classList.remove("hidden");
  } else {
    boton_top.classList.add("hidden");
  }
};
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// When the user clicks on the button, scroll to the top of the document
boton_top.addEventListener("click", backToTop);

window.addEventListener("scroll", scrollFunction);
