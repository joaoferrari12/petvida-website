(function(d){
	
	const $nav = d.querySelector('nav');
	const $btn = d.querySelector('.btn-menu');	
	$btn.addEventListener('click', function(){		
		$nav.classList.toggle('show');		
	});	
	
})(document);