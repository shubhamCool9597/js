var $current;
var $info;
var Events = function() {}
Events.prototype = {
  constructor: Events,
  currentKey: function(e) {

    var isFirst = false;
    var a = $('.single');
    var b = $('.info >.information');
    for (var i = 0; i < a.length; i++) {
      if ($(a[i]).css('background-color') == "rgb(255, 255, 0)") {
        isFirst = false;
        $current = $(a[i]);
        $info = $(b[i]);
        break;
      } else {
        isFirst = true;
        $current = $('.comment>.single').first();
        $info = $('.info>.information').first();
      }
    }
    if (e.keyCode == 40) {
      e.preventDefault();
      var $nextDiv;

      if ($current.next().length == 0) {
        isFirst = true;
        $current.css('background-color', '');
        $current = $nextDiv = $('.comment>.single').first().css('background-color', 'yellow');
      }
      if (!isFirst) {
        $nextDiv = $current.next();
        $current.css('background-color', '');
        $nextDiv.css('background-color', 'yellow');
        $current = $nextDiv;
        $('#inputText').val($.trim($current.text()));
        $('.result').val('');
      } else {
        $current.css('background-color', 'yellow');
        $('#inputText').val($.trim($current.text()));
        $('.result').val('');
      }
    }

    if (e.keyCode == 38) {
      e.preventDefault();
      var $nextDiv;
      if ($current.prev().length == 0) {
        isFirst = true;
        $current.css('background-color', '');
        $current = $nextDiv = $('.comment>.single').last().css('background-color', 'yellow');

      }
      if (!isFirst) {
        $nextDiv = $current.prev();
        e.preventDefault();
        $current.css('background-color', '');
        $nextDiv.css('background-color', 'yellow');

        $current = $nextDiv;
        $('#inputText').val($.trim($current.text()));
        $('.result').val('');
      } else {

        $current.css('background-color', 'yellow');
        $('#inputText').val($.trim($current.text()));
        $('.result').val('');
      }
    }

    if (e.keyCode == 9) {
      $('#inputText').val($.trim($current.text()));
      $('.result').val('');

    }


  },
  enterKey: function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      $('#inputText').val($.trim($current.text()));
      $('.comment').css('display', 'none');
      // $info.text();
      $('.info1>.information').html($info.text());
      // $('.info1>.information').html($info.text());
      $('.info1').css('display', 'block');




    };
  },
  highlight: function(k) {
    //console.log($('.comment>.single').text());
    var z;
    $('.comment>.single').each(function() {
      console.log(k);
      z = $(this).text().replace(RegExp(k, "g"), '<b>' + k + '</b>');
      $(this).html(z)
    });



  },
  mouseHighlight: function() {
    $(".comment>.single").mouseover(function() {

      $(".comment>.single").css('background-color', '');
      $(this).css('background-color', 'yellow');
      $(this).on('click', function() {

        $('#inputText').val($.trim($(this).text()));
        $('.result').val('');
        $(this).css('background-color', '');


        // console.log($(this).text());
      })


    });
    $(".comment>.single").mouseout(function() {
      $(".comment>.single").css('background-color', '');
    });
  }
}
