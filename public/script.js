
const menu_btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

let ans = false;

const display = () => {
    if (ans)
    {
        menu_btn.classList.remove('open');
        menu.classList.add('hidden');
        ans = false;
    }    
    else    
    {
        menu_btn.classList.add('open');
        menu.classList.remove('hidden');
        ans = true;
    }
}



menu_btn.addEventListener('click', display);