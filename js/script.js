// Open, close navigation menu
function openCloseNav(){

    var menu = document.getElementById("nav_menu");

    // navigation menu is closed
    if (menu.style.transform == 'translateX(0%)'){
        // Open navigation menu
        menu.style.transform = 'translateX(100%)';
    } else {
        // Close navigation menu
        menu.style.transform = 'translateX(0%)';
    }
}