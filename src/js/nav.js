// Open, close navigation menu
function openCloseNav() {

    var menu = document.getElementById("nav_menu");

    // navigation menu is closed
    if (menu.style.transform == 'translateX(0px)' | menu.style.transform == "") {
        // Open navigation menu
        menu.style.transform = 'translateX(350px)';
    } else {
        // Close navigation menu
        menu.style.transform = 'translateX(0px)';
    }
}