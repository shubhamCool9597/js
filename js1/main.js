var events = new Events();
var ui = new Ui(events);
var api = new Api(ui);
$('.loading').css('display', 'none');

$('#inputText').keydown(function(e) {

  if (e.keyCode == 9) {
    e.preventDefault();
    $('.info1').css('display', 'none');
    $('.loading').css('display', 'none');
    ui.keyarrow(e);
    // console.log('bin1');
  } else if (e.which == 38 || e.which == 40) {
    e.preventDefault();
    $('.loading').css('display', 'none');

  } else {

    return true;
  }
});
$('#inputText').on('keyup', function(e) {
  var m = $('#inputText').val();
  $('.comment').css('display', 'block');
  $('.info').css('display', 'none');

  if (e.keyCode == 38 || e.keyCode == 40) {
    e.preventDefault();
    $('.info1').css('display', 'none');
    $('.loading').css('display', 'none');


    ui.keyarrow(e);
  } else if (e.keyCode == 13) {
    e.preventDefault();
    $('.comment').css('display', 'none');
    $('.info').css('display', 'none');
    $('.info1>.information').css('display', 'block');
    $('.result').val('');
    ui.enterKey(e);
  } else if (e.keyCode == 9) {
    return false;
  } else if (e.keyCode == 8) {

    $('.info').css('display', 'none');
    $('.info1>.information').css('display', 'none');
    $('.result').val('');
    $('.loading').css('display', 'none');
    $('.comment').css('display', 'none');

  } else {
    $('.info1').css('display', 'none');
    api.searchResult(m, e);


    // console.log(ui.hint.val());
  }




});
