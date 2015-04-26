describe('Game', function() {

  var game;

  beforeEach(function () {
    game = new Game();
  }); 

  it('can roll a gutter game', function() {

    rollMany(0,20);
    expect(game.score()).toEqual(0);

  });

  it('can roll a game on ones', function() {

    rollMany(1,20);
    expect(game.score()).toEqual(20);

  });

  it('can roll a spare', function() {
    
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(0, 17);
    expect(game.score()).toEqual(16);

  });


  var rollMany = function(pins, times){

    for (i = 0; i < times; i++) {
      game.roll(pins);
    }

  };

});


