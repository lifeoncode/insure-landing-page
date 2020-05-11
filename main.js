

window.addEventListener('DOMContentLoaded', init);



function init(){
    const [menu, open, close] = [document.querySelector('nav'), document.querySelector('#open-menu'), document.querySelector('#close-menu')];

    open.addEventListener('click', (e) => {
        open.classList.add('hide');
        close.classList.remove('hide');
        
        menu.classList.add('show-menu');

        setTimeout(() => {
            menu.style.top = '50px';
            menu.classList.remove('show-menu');
        }, 500);
    })

    close.addEventListener('click', hideMenu);

    function hideMenu(e){
        close.classList.add('hide');
        open.classList.remove('hide')
        
        menu.classList.add('hide-menu');

        setTimeout(() => {
            menu.style.top = '-100vh';
            menu.classList.remove('hide-menu');
        }, 500);
    }




    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', hideMenu);
    })
}