class Player {
    constructor(){
        this.name=null;
        this.distance=0;
        this.index=0;
    }
    getCount(){
        var playerCountRef = database.ref("playerCount").on("value",function(data){
        playerCount = data.val()
})
    }
    updateCount(count){
        database.ref("/").update({playerCount:count})
    }
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
})
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref("players").on("value",(data)=>{
            allPlayers = data.val()
        })

    }
}

