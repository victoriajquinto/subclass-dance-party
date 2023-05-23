var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<span class="dancer movingDancer"></span>');
  console.log('movingDancer was pressed');
  //this.$node.toggle();
};
MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.danceMove = function() {
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var x = ($('body').width() - 40) * Math.random() + 20;
  var y = ($('body').height() - 40) * Math.random() + 20;
  var styleSettings = {
    top: y,
    left: x
  };
  this.$node.css(styleSettings);

};