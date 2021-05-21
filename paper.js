class paper
{
     constructor(x,y,r)
        {
            var options={
                isStatic:false,
                restitution:0.3,
                friction:0.5,
                density:1.2
    
          }
            this.x=x;
            this.y=y;
            this.r=r;
            this.papernWidth=width;
            this.paperHeight=height;
            this.image =loadImage("paper.png");
            
            this.body =Bodies.circle(x,y,r,options)
            World.add(world, this.body);
        }
        display()	
        {
            var paperpos=this.body.position;

            push()
            translate(paperpos.x,paperpos.y);
            rectMode(CENTER);
            fill(255,0,255);
        ellipseMode(radius);
        circle(this.body.position.x,this.body.position.y,this.radius);
        pop()
        }
 }
    