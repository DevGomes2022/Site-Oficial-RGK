function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}

function carrinhoShow(){
    let menuMobile = document.querySelector('.carrinho-menu');
    if (menuMobile.classList.contains('open-carrinho')) {
        menuMobile.classList.remove('open-carrinho');
    } else {
        menuMobile.classList.add('open-carrinho');
    }
}