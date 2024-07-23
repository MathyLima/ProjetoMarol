let closedBar = false;


function abreFechaSideBar(){
    if (closedBar === false) {
        closeBar();
        closedBar = true;
    } else {
        openNav();
        closedBar = false;
    }
}

function openNav() {
    let sidebarOpen = document.getElementById('sideBarClosed');
    sidebarOpen.style.display='none'
    let sideBar = document.getElementById('sideBar')
    sideBar.style.width='20%'
    let sideBarOpen = document.getElementById('sideBarOpen');
    sideBarOpen.style.display='flex'
}

function closeBar() {
    let sidebarClosed = document.getElementById('sideBarClosed');
    sidebarClosed.style.display='flex'
    let sideBar = document.getElementById('sideBar')
    sideBar.style.width='5%'
    let sideBarOpen = document.getElementById('sideBarOpen');
    sideBarOpen.style.display='none'
}
