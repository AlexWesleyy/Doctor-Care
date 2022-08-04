function onScroll(){
    const elemento = document.getElementById("navigation");
    if (scrollY>40.79999923706055){
        elemento.classList.add("scroll");
    }else{
        elemento.classList.remove("scroll");
    }
}
function openMenu(){
    document.body.classList.add('menu-expanded')
}
function closeMenu(){
    document.body.classList.remove('menu-expanded')
}
