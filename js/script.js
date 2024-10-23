// Open, close navigation menu
function openCloseNav(){

    var menu = document.getElementById("nav_menu");

    // navigation menu is close
    if (menu.style.transform == 'translateX(0%)'){
        // Open navigation menu
        menu.style.transform = 'translateX(100%)';
    } else {
        // Close navigation menu
        menu.style.transform = 'translateX(0%)';
    }
}

// Open, close sub menu
// function openCloseSubMenu(){
//     var subMenu = document.getElementById("sub_menu");

//     // navigation menu is close
//     if (subMenu.style.transform == 'translateY(0%)'){
//         // Open navigation menu
//         subMenu.style.transform = 'translateY(100%)';
//     } else {
//         // Close navigation menu
//         subMenu.style.transform = 'translateY(0%)';
//     }
// }

function openCloseSubMenu(){
    var subMenu = document.getElementById("sub_menu");

    // navigation menu is close
    if (subMenu.style.display == 'none'){
        // Open navigation menu
        subMenu.style.display = 'block';
    } else {
        // Close navigation menu
        subMenu.style.display = 'none';
    }
}