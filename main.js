window.addEventListener('scroll', onScroll)

function onScroll(){
    showNavOnScroll()
    showBackToButtonOnScroll()
}
function showNavOnScroll(){
    const elemento = document.getElementById("navigation");
    if (scrollY>40.79999923706055){
        elemento.classList.add("scroll");
    }else{
        elemento.classList.remove("scroll");
    }
}
function showBackToButtonOnScroll(){
    const elemento = document.getElementById("back-to-top");
    if (scrollY>500){
        elemento.classList.add("show");
    }else{
        elemento.classList.remove("show");
    }
}
function openMenu(){
    document.body.classList.add('menu-expanded')
}
function closeMenu(){
    document.body.classList.remove('menu-expanded')
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
#services .cabecario,
#services .card,
#about,
#about header,
#about .tela .content`);
