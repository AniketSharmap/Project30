class Block3 
{
    constructor(x, y, width, height) 
    {
        var options =
        {
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display()
    {
        console.log(this.body.speed);
        if(this.body.speed < 3)
        {
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            fill("blue");
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
        }
        else
        {
            World.remove(world,this.body);
            push();
            this.visibility = this.visibility - 5;
            tint(255,this.visibility)
            pop();
        }
    }
};