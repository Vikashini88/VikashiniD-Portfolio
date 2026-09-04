  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });

  // Back to Top
  // const backToTop = document.getElementById("backToTop");

  // window.addEventListener("scroll", () => {
  //   if (window.scrollY > 400) {
  //     backToTop.classList.add("show");
  //   } else {
  //     backToTop.classList.remove("show");
  //   }
  // });

  // backToTop.addEventListener("click", () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   });
  // });
  console.log("vikashiniD-Portfolio script.js loaded successfully.");