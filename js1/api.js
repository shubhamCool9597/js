var Api = function(ui) {
  this.ui = ui;
}
Api.prototype = {
  constructor: Api,
  searchResult: function(keyword, e) {
    var _this = this;
    if (keyword) {
      // console.log(keyword);
      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + keyword + "&format=json&callback=?";
      $.ajax({
        method: 'GET',
        url: url,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function(data) {

          _this.ui.removeChild();
          _this.ui.removeInfo();
          if (data[1].length == 0) {
            $('.loading').css('display', 'none');
          }
          $(_this.ui.hint).val(data[1][1].toLowerCase());
          // console.log($(_this.ui.hint).val());

          for (var i = 0; i < data[1].length; i++) {
            if (i == 9) {
              break;
            }
            // console.log(data[1].length)
            _this.ui.divAppend(data[1][i + 1]);
            _this.ui.infoAppend(data[2][i + 1]);


          }
          _this.ui.wordHighlight(keyword);
          _this.ui.mouse();
        }


      })
    }
  }
};
