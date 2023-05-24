var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.addClass('moving-dancer');
};
MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.danceMove = function() {
  this.x = ($('body').width() - 40) * Math.random() + 20;
  this.y = ($('body').height() - 40) * Math.random() + 20;
  var styleSettings = {
    top: this.y,
    left: this.x
  };
  for (var f = 0; f < window.dancers.length; f++) {
    if (window.dancers[f].x !== undefined && window.dancers[f] !== this) {
      if (Math.sqrt(Math.pow(this.x - window.dancers[f].x, 2) + Math.pow(this.y - window.dancers[f].y, 2)) < 50) {
        this.$node.css('border', '20px solid white');
        break;
      } else {
        this.$node.css('border', '20px solid blue');
      }
    }
  }
  this.$node.css(styleSettings);

};