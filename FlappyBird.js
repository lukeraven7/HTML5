var mainState = {
    preload: function() {
        
    }
    
    create: function() {
    
    }
    
    update: function() {
        
    }
}
var game = newPhaser.Game(400,490);

game.state.add('main', mainState);

game.state.start('main');