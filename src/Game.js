var Game = function() {

  this.rolls = [];

};

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Game.prototype.score = function() {
  
  var total = 0;
  var i = 0;

  for (f = 0; f < 10; f++) {
    if (this.rolls[i] + this.rolls[i + 1] == 10) {
      total += this.rolls[i] += this.rolls[i + 1] += this.rolls[i + 2];
      i += 2;

    } else {
      total += this.rolls[i] += this.rolls[i + 1];
      i += 2;
    }
    
  }

  return total;
};
