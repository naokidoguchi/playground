$(function() {

  if($.cookie('name')) {
    $('#cookieShow').text($.cookie('name'));
  }

  $('#save').click(function() {
    $.cookie('name', $('#name').val(), { expires: 1 });
  });

});
