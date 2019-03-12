let g = 1;

function setup(){
  createCanvas(640,480)
  frameRate(30);
  angleMode(DEGREES);
  //rectMode(CENTER)

  a = new box(100,100,100,20,10,100);
  b = new box(10,120,50,10,5,50);
  c = new box(10,180,30,10,5,30);
  a.run();
}

function draw(){
  background(224)

  a.run();
  b.run();
  c.run();
}

class box {
  constructor(x,y,height,width,offsetX=0,offsetY=0,r=0){
    this.origin = createVector(x,y)
    this.pos = createVector(x,y)
    this.height = height;
    this.width = width;
    this.rotation = r;
    this.offset = createVector(offsetX,offsetY);
    //this.display();
    //console.log("New Box")

    this.display();
  }
}

box.prototype.run = function(){
  this.update(1)
  this.display();

}

box.prototype.update = function(rotation){
  this.rotation = (this.rotation+rotation)%360;
  //let r = createVector(sin(this.rotation),-1-cos(this.rotation*10)).mult(this.height/2);
  //this.pos = this.origin.sub(r);
  console.log(sin(90));
}

box.prototype.display = function(){
  push();
  //translate(-this.offset.x,-this.offset.y);
  //circle(this.pos.x + this.width, this.pos.y + this.height/2,20)
  //translate(this.pos.x + this.width, this.pos.y + this.height/2);
  rotate(this.rotation);
  rect(-this.offset.x,-this.offset.y,this.width,this.height);
  pop();
}

box.prototype.addParent = function(parent,joint,jPhysics){
  this.parent = parent;
  parent.addChild(this);
  this.reachParent();
  this.joint = joint;
  this.joinPhysics = jPhysics;
}

box.prototype.addChild = function(child){
  this.childs.push(child);
}

box.prototype.reachParent = function(){
  this.pos.x = this.joint.x;
  this.pos.y = this.joint.y;
  ``
}
