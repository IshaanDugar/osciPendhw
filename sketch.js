const {Engine, World, Bodies, Constraint} = Matter;

var engine, world;

var bob1, string1, base1;

function setup() {
createCanvas(900, 900);

engine = Engine.create();
world = engine.world;

bob1 = new Bob(100, 200, 100, 100);

string1 = new Str(bob1.body, {x:450, y:100});

}

function draw() {
  background(0, 0, 100);

  Engine.update(engine);

  //bob = ellipse(400, 600, 100, 100);

  base = rect(200, 100, 500, 10);

  string1.display();
  bob1.display();

  fill("green")
  textSize(20)
  text("Press SPACE for positioning the bob.     Press ENTER to stop the oscillation", 100, 70)

}

function keyPressed(){
  if(keyCode === 32){
    //bob1.mousePos();
    string1.mouseAttach(bob1.body, {x:mouseX, y:mouseY});
  }
}

function keyPressed1(){
  if(keyCode === 13){
  bob1.enter();
  }

}