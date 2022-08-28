  function hideNav() {
    document.getElementById('nav').style.display = "none";
    document.getElementById('main').style.width = "100%";
    document.getElementById('show__nav').style.display = "flex";
   }

   function showNav() {
    document.getElementById('nav').style.display = "flex";
    document.getElementById('main').style.width = "calc(100vw - 350px)";
    document.getElementById('show__nav').style.display = "none";

   }
  
  document.getElementById('hide__nav').addEventListener('click', hideNav);
  document.getElementById('show__nav').addEventListener('click', showNav);
