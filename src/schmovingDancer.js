var SchmovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.addClass('schmoving-dancer');
  this.x = ($('body').width() - 40) * Math.random() + 20;
  this.y = ($('body').height() - 40) * Math.random() + 20;
  this.dir = 2 * Math.PI * Math.random();
  this.speed = 1;
  this.frameStep();
};
SchmovingDancer.prototype = Object.create(Dancer.prototype);
SchmovingDancer.prototype.constructor = SchmovingDancer;
SchmovingDancer.prototype.frameStep = function() {
  this.x += (this.speed * Math.cos(this.dir));
  this.y += (this.speed * Math.sin(this.dir));
  if (this.x > $('body').width() - 20) {
    this.x -= $('body').width() - 40;
  } else if (this.x < 20) {
    this.x += $('body').width() - 40;
  }
  if (this.y > $('body').height() - 20) {
    this.y -= $('body').height() - 40;
  } else if (this.y < 20) {
    this.y += $('body').height() - 40;
  }
  var styleSettings = {
    top: this.y,
    left: this.x
  };
  this.$node.css(styleSettings);
  setTimeout(this.frameStep.bind(this), 1);
};
SchmovingDancer.prototype.danceMove = function() {
  this.dir = ((2 * Math.PI * Math.random()) + this.dir) / 2;
};