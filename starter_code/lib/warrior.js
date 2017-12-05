var RIGHT_KEY = 39;

function Warrior(canvas, image, ctx, x, y) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.warriorImage = new Image();
  this.warriorImage.src = image;
  this.warriorImage.isReady = false;
  this.warriorImage.onload = (function() {
    this.warriorImage.isReady = true;
    this.warriorImage.frameIndex = 1;
    this.warriorImage.scale = 1.6;
    this.warriorImage.cFrames = 14;
    this.warriorImage.rFrames = 14;
    this.warriorImage.frameWidth = this.warriorImage.width / this.warriorImage.cFrames;
    this.warriorImage.frameHeight = this.warriorImage.height / this.warriorImage.rFrames;
    this.width = this.warriorImage.frameWidth * this.warriorImage.scale;
    this.height = this.warriorImage.frameHeight * this.warriorImage.scale;
  }).bind(this);
  this.x = x;
  this.y = y;
  this.width = 30;
  this.height = 30;
  this.isDown = false;
}

Warrior.prototype.goDown = function() {
  if (this.y < 310) {
    this.y += 5;
    this.ctx.drawImage(
      this.warriorImage,
      this.warriorImage.frameIndex * this.warriorImage.frameWidth,
      416,
      this.warriorImage.frameWidth,
      this.warriorImage.frameHeight,
      this.x,
      this.y - 50,
      this.width,
      this.height
    )
  } else {
    this.isDown = true
  }

}

Warrior.prototype.moveWarriorRigth = function() {
  this.x += 2
}

Warrior.prototype.draw = function() {
  this.ctx.drawImage(
    this.warriorImage,
    this.warriorImage.frameIndex * this.warriorImage.frameWidth,
    0,
    this.warriorImage.frameWidth,
    this.warriorImage.frameHeight,
    this.x,
    this.y,
    this.width,
    this.height
  )
  this.goDown()
  // if(this.y < 300){
  // this.y += 0.3
}







// function Warrior(canvas, image, ctx, x) {
//   this.canvas = canvas;
//   this.ctx = ctx;
//   this.warriorImage = new Image();
//   this.warriorImage.src = image;
//   this.warriorImage.isReady = false;
//   this.warriorImage.onload = (function() {
//     this.warriorImage.isReady = true;
//     this.warriorImage.frameIndex = 0;
//     this.warriorImage.scale = 1.4;
//     this.warriorImage.cFrames = 14;
//     this.warriorImage.rFrames = 14;
//     this.warriorImage.frameWidth = this.warriorImage.width / this.warriorImage.cFrames;
//     this.warriorImage.frameHeight = this.warriorImage.height / this.warriorImage.rFrames;
//     this.width = this.warriorImage.frameWidth * this.warriorImage.scale;
//     this.height = this.warriorImage.frameHeight * this.warriorImage.scale;
//   }).bind(this);
//
//   this.x = x;
//   this.y = 330;
// }
//
// Warrior.prototype.isReady = function() {
//   return this.warriorImage.isReady;
// }
//
// Warrior.prototype.draw = function() {
//   if (this.isReady) {
//     this.ctx.drawImage(
//       this.warriorImage,
//       this.warriorImage.frameIndex * this.warriorImage.frameWidth,
//       this.warriorImage,
//       this.warriorImage.frameWidth,
//       this.warriorImage.frameHeight,
//       this.x,
//       this.y,
//       this.width,
//       this.height
//     )
//     console.log(this.warriorImage.height)
//     if (this.y < 330) {
//       this.y += 1
//     }
//   }
// }
