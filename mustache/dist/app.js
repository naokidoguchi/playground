$(function() {
    var hoge = '{{name}}';
    var html = Mustache.to_html(template, {
          "response": {
            "name": "くまお"
        }
    });
  });
