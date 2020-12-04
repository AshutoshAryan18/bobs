class Rope {
    constructor(body1,body2,offsetx,offsety){
        this.offsetx=x
        this.offsety=y

        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:offsetX,y:offsetY}
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)

    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height);
    }
}