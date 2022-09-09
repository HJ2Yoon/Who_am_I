const bg_holder = document.querySelector(".bg-holder");
bg_holder.addEventListener("mousemove", parallax);
function parallax(e) {
  bg_holder.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('speed');
    
    const x = (window.innerWidth - e.pageX * speed)/100;

    layer.style.transform = `translateX(${x}px)`;
  })
}