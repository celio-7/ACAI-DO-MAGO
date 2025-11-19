
(function () {
  const $ = (s, o = document) => o.querySelector(s);
  const $$ = (s, o = document) => Array.from(o.querySelectorAll(s));

  document.addEventListener("DOMContentLoaded", () => {
    
    const botaoHero = document.querySelector('a.btn[href="#produtos"]') || $(".btn");
    const tituloHero = document.querySelector(".products h1") || $("h1");

    if (botaoHero && tituloHero){
      botaoHero.onclick = function () {
        tituloHero.innerHTML = " 🧙🏻‍♂ Nossos Produtos te encantaram ??";
        tituloHero.style.color = "#D9E24C";
      };
    }

    const imagensCards = $$("#produtos .card .pic img");
    imagensCards.forEach((img) => {
      img.style.transition = "transform .2s ease, opacity .2s ease, filter .2s ease, border-color .2s ease";
      img.onmouseover = function () {
        img.style.opacity = "0.9";
        img.style.transform = "scale(1.06)";
        img.style.filter = "drop-shadow(0 10px 24px rgba(0,0,0,.25))";
        img.style.border = "3px solid #D9E24C";
        img.style.borderRadius = "18px";
      };
      img.onmouseout = function () {
        img.style.opacity = "1";
        img.style.transform = "scale(1)";
        img.style.filter = "none";
        img.style.border = "none";
      };
    });
  });
})();

// Interação adicional: botão "voltar ao topo"
document.addEventListener("DOMContentLoaded", function () {
  var btnTop = document.getElementById("back-to-top");
  if (!btnTop) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      btnTop.classList.add("visivel");
    } else {
      btnTop.classList.remove("visivel");
    }
  });

  btnTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
