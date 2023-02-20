export function click()
{
    let navbar = document.querySelector('.header .navbar');
    let menu = document.querySelector('#menu-btn');
    let cart = document.querySelector('.cart-items-container');
    
    menu.onclick = () =>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }

    document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.add('active');}

    document.querySelector('#close-form').onclick = () =>{
    cart.classList.remove('active');}
}
