var TwirlingDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.addClass('twirling-dancer');
  var $dizzyDancer = $('<img src="../images/pukeface.png"></img>');
  $dizzyDancer.appendTo(this.$node);
  this.danceMove();
};
TwirlingDancer.prototype = Object.create(Dancer.prototype);
TwirlingDancer.prototype.constructor = TwirlingDancer;

TwirlingDancer.prototype.danceMove = function() {
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.show();

};