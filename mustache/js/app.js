$(function() {
  $.ajax({
    url: '/api/twitter/home_timeline.json',
    dataType: 'json'
  }).then(function (response) {
    var template = $('#tweet-component-template').html(),
        rendered = Mustache.render(template, {
      tweets: response
    });
    $('.js-tweet-component').html(rendered);
  });
});
