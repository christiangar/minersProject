function Thinking (canvas, ctx, x){
  this.canvas = canvas;
  this.ctx = ctx;
  this.thinkingImage = new Image();
  this.thinkingImage.src = "images/thinkingplayer1.png";
  this.thinkingImage.isReady = false;
  this.thinkingImage.onload = (function() {
    this.thinkingImage.isReady = true;
  }).bind(this);
  this.x = x;
  this.y = 580;
  this.width = 300;
  this.height =180;
}

Thinking.prototype.draw = function() {
    this.ctx.drawImage(
      this.thinkingImage,
      this.x,
      this.y,
      this.width,
      this.height
    )
    if(this.y > 330){
    this.y -= 1
  }
}
