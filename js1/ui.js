var Ui = function(events) {
  this.input = $('#inputText');
  this.hint = $('.result');
  this.comment = $('.comment');
  this.single = $('.single');
  this.result = $('.comment>.single');
  this.info = $('.info');
  this.events = events;
}
Ui.prototype = {

  constructor: Ui,
  divAppend: function(data) {
    var _this = this;
    var div = $("<div>", {
      "class": "single",
      "text": data.toLowerCase()
    });
    _this.comment.append(div);
  },
  infoAppend: function(data) {
    var _this = this;
    // console.log('bingo');

    var div1 = $("<div>", {
      "class": "information",
      "text": data.toLowerCase()
    });
    _this.info.append(div1);


  },
  keyarrow: function(e) {
    e.preventDefault();
    var _this = this;
    this.events.currentKey(e);


  },
  enterKey: function(e) {
    this.events.enterKey(e);
  },
  tabKey: function(e) {
    this.events.tabKey(e);
  },
  wordHighlight: function(m) {
    this.events.highlight(m)
  },
  mouse: function() {
    this.events.mouseHighlight();
  },

  removeChild: function() {
    var _this = this;
    _this.comment.empty();
  },
  removeInfo: function() {
    var _this = this;
    _this.info.empty();
  }
};
