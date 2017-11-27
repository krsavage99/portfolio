//Js functions go here
var fadeTime = 300

function close(company) {
	$('.modal-' + company).fadeOut(fadeTime)
	$('body').removeClass('no-scroll')
	setTimeout(function() {
		$('.modal-' + company).scrollTop(0)
	}, fadeTime - 50)
}
$('.close-ptc').click(function(e) {
	close('ptc')
})

$('.close-olin').click(function(e) {
	close('olin')
})

$('.modal-ptc').click(function() {
	close('ptc')
})

$('.modal-olin').click(function() {
	close('olin')
})

$('.modal-content-ptc').click(function(e) {
	e.stopPropagation()
})

$('.modal-content-olin').click(function(e) {
	e.stopPropagation()
})

$('#open-ptc').click(function(e) {
	e.preventDefault()
	$('.modal-ptc').fadeIn(fadeTime)
	$('body').addClass('no-scroll')
})

$('#open-olin').click(function(e) {
	e.preventDefault()
	$('.modal-olin').fadeIn(fadeTime)
	$('body').addClass('no-scroll')
})
