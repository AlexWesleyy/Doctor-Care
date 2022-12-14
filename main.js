window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}
function showNavOnScroll(){
    const elemento = document.getElementById("navigation");
    if (scrollY>40.79999923706055){
        elemento.classList.add("scroll");
    }else{
        elemento.classList.remove("scroll");
    }
}
function showBackToTopButtonOnScroll() {
    if(scrollY > 400) {
      backToTopButton.classList.add("show")
    }else{
      backToTopButton.classList.remove("show")
    }
  }
  
  function openMenu() {
    document.body.classList.add("menu-expanded")
  }
  
  function closeMenu() {
    document.body.classList.remove("menu-expanded")
  }
  
  ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
  }).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content`)