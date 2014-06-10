(function ($){
if(($('footer').offset().top + $('footer').height()) < window.innerHeight){
	$('footer').css('position','absolute');
}

$.each($('ul.navbar-nav li a'),function( index, value ) {
  if($(value).attr('href')===window.page){$(value).parent().addClass('active')}
})

$('a.navbar-brand').attr('href','index.html')

})(jQuery)