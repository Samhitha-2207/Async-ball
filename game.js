class Game {
constructor(){}

getState(){
    var gameStateRef = database.ref("gameState").on("value",function(data){
    gameState = data.val()
    })
}

update(state){
    database.ref("/").update({
        gameState:state
    })
}

start(){
    if(gameState === 0){
        form = new Form()
        form.display()

        player = new Player()
        player.getCount()
        
    }
}

play(){
    form.hide()
    textSize(30);
    text("GAME START",120,200);
    Player.getPlayerInfo()

    if(allPlayers!==undefined){
    var displayPosition = 130;

    for(var plr in allPlayers){
        displayPosition = displayPosition+20;
        textSize(15);
        text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition);
}
    }

    if(keyIsDown("UP_ARROW") && player.index!==null){
        player.distance +=50;
        player.update()
    }
}
}