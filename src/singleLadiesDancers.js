var SingleLadiesDancers = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.addClass('single-ladies-dancers');
  var $singleLadies = $('<img src="../images/singleladies.gif"></img>');
  $singleLadies.appendTo(this.$node);
  this.danceMove();
};
SingleLadiesDancers.prototype = Object.create(Dancer.prototype);
SingleLadiesDancers.prototype.constructor = SingleLadiesDancers;

SingleLadiesDancers.prototype.danceMove = function() {
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.show();

};