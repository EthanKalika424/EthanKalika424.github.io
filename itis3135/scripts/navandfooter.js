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
  var file = 'views/' + $(this).data('include') + 'header.html'
  $(this).load(file)
})
})