var CollatzDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.addClass('collatz-dancer');
  this.x = Math.round(left);
  this.y = Math.round(top);
  this.targetX = this.x;
  this.targetY = this.y;
  this.frameStep();
};
CollatzDancer.prototype = Object.create(Dancer.prototype);
CollatzDancer.prototype.constructor = CollatzDancer;
CollatzDancer.prototype.frameStep = function() {
  this.x = ((7 * this.x + this.targetX) / 8);
  this.y = ((7 * this.y + this.targetY) / 8);
  if (Math.abs(this.x - this.targetX) <= 1 && Math.abs(this.y - this.targetY) <= 1) {
    this.collatz();
  }
  var styleSettings = {
    top: this.y,
    left: this.x
  };
  this.$node.css(styleSettings);
  setTimeout(this.frameStep.bind(this), 1);
};
CollatzDancer.prototype.collatz = function() {
  if (this.targetX % 2 === 0) {
    this.targetX /= 2;
  } else {
    this.targetX = 3 * this.targetX + 1;
  }
  if (this.targetY % 2 === 0) {
    this.targetY /= 2;
  } else {
    this.targetY = 3 * this.targetY + 1;
  }
  if ((this.targetX === 1)) {
    this.targetX = Math.round(($('body').width() - 40) * Math.random() + 20);
  }
  if ((this.targetY === 1)) {
    this.targetY = Math.round(($('body').height() - 40) * Math.random() + 20);
  }
};