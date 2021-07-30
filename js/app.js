window.addEventListener('load', () => {
   const hamburger = document.querySelector('.hamburger-menu a.hamburger-icon');
   const close = document.querySelector('.close-menu a.close-icon');
   const menubar = document.querySelector('.menu-phone');

   hamburger.addEventListener('click', (e) => {
      menubar.style.right = '0%';
   });

   close.addEventListener('click', (e) => {
      menubar.style.right = '100%';
   });

   function progressBarFill() {
      const progressBars = document.querySelectorAll(
         '.skills .skills-content .skills-content-wrapper .skills-content-progressbar span'
      );

      progressBars.forEach((bar) => {
         const percentage = +bar.dataset.percentage;
         bar.style.width = percentage + '%';
      });
   }

   let skillsSection = document.querySelector('.skills');

   const sectionObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
         progressBarFill();
      }
   });

   sectionObserver.observe(skillsSection);
});
