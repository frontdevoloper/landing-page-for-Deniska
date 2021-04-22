const menuLinks = document.querySelectorAll('.header__link[data-goto]');

if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockVAlue = gotoBlock.getBoundingClientRect().top + pageYOffset;

         window.scrollTo({
            top: gotoBlockVAlue,
            behavior: "smooth"
         });

         e.preventDefault();
      }
   }
}