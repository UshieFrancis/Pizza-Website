let menuList = document.getElementById('menuList');
menuList.style.maxHeight= '0px';
function togglemenu(){
    if(menuList.style.maxHeight == '0px')
    {
        menuList.style.maxHeight = '230px'
    }
    else
    {
        menuList.style.maxHeight = '0px'
    }
}

// window.onscroll = function() {myFunction()};
  
//     var navbar = document.getElementById("navbar");
//     var sticky = navbar.offsetTop;
  
//     /* Function to stick the nav bar */
//     function myFunction() {
//         if (window.pageYOffset >= sticky) {
//             navbar.classList.add("sticky")
//         }
//         else {
//             navbar.classList.remove("sticky");
//         }
//     }