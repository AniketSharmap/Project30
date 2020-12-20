class Polygon {
  constructor(x, y, width, height) 
  {
      var options =
      {
         isStatic: false,
          restitution :0.8
      }
      this.polygon = Bodies.rectangle(x, y, width, height, options)
      
      this.width = width;
      this.height = height;
      this.image = loadImage("sketch/polygon.png");
      World.add(world,this.polygon);

  }
display()
{
  var pos = this.polygon.position;
  push()
  translate(this.polygon.position.x,this.polygon.position.y)
  imageMode(CENTER);
  image(0 ,0, this.width, this.height);
  pop()
}
};