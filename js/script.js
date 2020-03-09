$(document).ready(function() {
  // SLIDER DEPOIMENTOS
  $(".testimonials-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    items: 1
  });
  // SLIDER CLIENTES
  $(".clients-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    items: 6,
    responsive: {
      767: {
        items: 5
      }
    }
  });

  /**Animação do Menu */
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");
  const menu = document.querySelector(".js-menu");
  const menuSpan = document.createElement("span");
  menuSpan.classList.add("highlight");
  menu.appendChild(menuSpan);

  window.addEventListener("load", () => {
    setTimeout(() => {
      activeHighlight();
    }, 200);
  });

  /**Define a posição e a largura do span Highlight */
  function highlightLink(link) {
    /* Remove a classe ativo dos links */
    linksInternos.forEach(item => {
      item.classList.remove("ativo");
    });

    const linkWidth = link.getBoundingClientRect().width;
    const linkPosX = link.getBoundingClientRect().x;
    const linkPosY = link.getBoundingClientRect().y;

    menuSpan.setAttribute(
      "style",
      `width:${linkWidth}px; top:${linkPosY}px; left:${linkPosX}px;`
    );

    /*Adicona a classe ativo no link atual */
    link.classList.add("ativo");
  }

  /**Ativa o Highlight */
  function activeHighlight() {
    const sections = document.querySelectorAll(".js-scroll");

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const link = document.querySelector(`.js-menu a[href^='#${section.id}']`);
      if (sectionTop <= 0 && sectionTop >= -window.innerHeight) {
        highlightLink(link);
      }
    });
  }

  window.addEventListener("scroll", activeHighlight);

  function initScrollSuave() {
    if (linksInternos.length) {
      function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);

        activeHighlight();

        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

      linksInternos.forEach(link => {
        link.addEventListener("click", scrollToSection);
      });
    }
  }
  initScrollSuave();

  function initMenuFixed() {
    window.addEventListener("scroll", menuFixo);

    function menuFixo() {
      const header = document.querySelector(".header");
      const navBrand = document.querySelector(".navbar-brand");
      if (window.scrollY > 0) {
        header.classList.add(`header_fixed`);
        navBrand.classList.add("navbar-brand_top");
      } else {
        header.classList.remove(`header_fixed`);
        navBrand.classList.remove("navbar-brand_top");
      }
    }
    menuFixo();
  }
  initMenuFixed();
});
