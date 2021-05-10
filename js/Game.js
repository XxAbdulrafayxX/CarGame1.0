class Game{
    constructor(){}



    getState(){
        var gameStateRef = database.ref('gameState');
        //creates a reader/sensor/listener which keeps listening to the gameState value from the database
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        // the / is where the gameState values are stored
        database.ref('/').update({
            gameState: state
        })
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }


}

