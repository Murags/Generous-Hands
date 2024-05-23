const nav = document.getElementById("nav");

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 50){
        nav.classList.add('solid');
        nav.classList.remove('transparent')
    }else{
        nav.classList.add('transparent');
        nav.classList.remove('solid')
    }
});

// Initialize with transparent navbar
document.addEventListener('DOMContentLoaded', function() {
    nav.classList.add('transparent');
  });

