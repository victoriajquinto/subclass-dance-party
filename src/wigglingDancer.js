var WigglingDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.addClass('wiggling-dancer');
  this.danceMove();
};
WigglingDancer.prototype = Object.create(Dancer.prototype);
WigglingDancer.prototype.constructor = WigglingDancer;

WigglingDancer.prototype.danceMove = function() {
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.show();

};