
/*smooth scrolling */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();		
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth' 
		});
	});
});

			
	/*parallax */
let parallax= document.querySelector('.parallax') ; 

function scrollParallax(){
	let scrollTop =document.documentElement.scrollTop;
	parallax.style.backgroundPosition=" 0 " + scrollTop * -0.3 + "px" ;
}

window.addEventListener('scroll',scrollParallax);


        /* menu fixed */
animacion = document.querySelector ('#ontop');
posicion = animacion.offsetTop ;
        
window.addEventListener('scroll', function(){
        scroll = window.pageYOffset ;
        
        if(scroll > posicion ){
                	animacion.style.position = 'fixed';
			        animacion.style.top = '0';
			        animacion.style.width = '100vw';	      
			        animacion.className = " navbar navbar-expand-lg navbar-light text-dark shadow-lg";								
                }else{
                          animacion.style.position = 'relative';
			                animacion.style.width = '100vw';			                
			                animacion.className = "navbar navbar-expand-lg navbar-light text-dark shadow-lg";								
                }
});


















