const menuButton=document.getElementById('menu');
const sidebar=document.getElementById('sidebar');


 if (menuButton && sidebar) {
function toggleSidebar(){
    sidebar.classList.toggle('close');
}
}
else {
        console.error('Sidebar or menu button not found!');
    }