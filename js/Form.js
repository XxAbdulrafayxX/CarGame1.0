class Form{
    constructor(){}
    
    display(){
        //h2 means headung #2
        var title = createElement('h2');
        title.html("CAR RACING GAME");
        title.position(130,0);

    
        // input is where you put what you are writing inside the name box

    var input = createInput("Name");
    var button = createButton('Play');
    
    input.position(130, 160);
    button.position(250, 200);

    button.mousePressed(function(){
      input.hide();
      button.hide();

      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      greeting.position(130, 160)
    });

  }
}