class Form {
    constructor(){
        this.title = createElement("h2")
        
        this.input = createInput("Name")

        this.button = createButton("Play")

        this.greeting = createElement("h3")
    }  
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
        this.title.position(130,0)
        this.title.html("CAR RACING GAME")

        this.input.position(130,160)
        this.button.position(130,200)

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            this.title.hide()

            player.name = this.input.value()
            playerCount = playerCount+1
            player.update()
            player.updateCount(playerCount)
            
            this.greeting.html("Hello"+player.name)
            this.greeting.position(130,160)
        })
    }
}