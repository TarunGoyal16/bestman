class Drops{
    constructor(x,y){
        var option={
            friction:0.1
        }
    
        this.rain= Bodies.circle(x,y,5,option)
        this.radius=3
        World.add(world,this.rain)

    }
    display(){
        ellipseMode(RADIUS)
        fill("yellow")
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius)
    }

    updateRain(){
        if(this.rain.position.y>600){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }
    

}