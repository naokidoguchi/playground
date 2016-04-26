$(function() {
  $.get('template1.html', function(template) {
    var rendered = Mustache.render(template, {
      msg1: "テンプレート１を読み込んでます"
    }
  );
    $('#target1').html(rendered);
  });
  $.get('template2.html', function(template) {
    var rendered = Mustache.render(template, {
      msg2: "テンプレート２を読み込んでます"
    }
  );
    $('#target2').html('');
    for(var i = 1; i < 10; i++) {
      $('#target2').append('<li>' + rendered + '</li>');
    }
  });
});
