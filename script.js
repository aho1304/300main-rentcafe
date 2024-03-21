document.addEventListener("scroll", () => {
    var bodyScroll = window.scrollY,
        navbar = document.querySelector('.navbar.change'),
        logo = document.querySelector('.navbar.change .logo'),
        floorplan = document.getElementById('floorplan-gallery');

    if( bodyScroll > 300 ){ 
        navbar.classList.add("nav-scroll");
        if(!floorplan) {
            logo.classList.remove('wht');
            logo.classList.add('blk');
        } else {
            logo.classList.remove('wht');
            logo.classList.add('blk');
        }
    } else{
        navbar.classList.remove("nav-scroll");
        if(!floorplan) {
            logo.classList.remove('blk');
            logo.classList.add('wht');
        } else {
            logo.classList.remove('wht');
            logo.classList.add('blk');
        }
    }
})

function toggleHAnnounce(){
    var announce = document.getElementById('announce');
    announce.classList.toggle('d-none');
    var nav = document.querySelector('.cus');
    nav.classList.toggle('mobile_collapsed');
}