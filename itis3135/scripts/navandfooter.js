/*$(function () 
{
  $("#header").load("header.html");
});
$(function () 
{
  $("#footer").load("footer.html");
});*/
$(function () {
var includes = $('[data-include]')
$.each(includes, function () {
  var file = 'components/' + $(this).data('header') + 'header.html'
  $(this).load(file)
})
})