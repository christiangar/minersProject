var RIGHT_KEY = 39;
var A_KEY = 65;
var SHIFT_KEY = 65;

function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.canvas.width = 800;
  this.canvas.height = 900;
  this.ctx = this.canvas.getContext('2d');
  this.background1 = new Background("canvas", this.ctx, 0, 0);
  this.miner1 = new Miner("canvas", 'images/miner.png', this.ctx, 170, 32, 0);
  this.bar1 = new PowerBar("canvas", this.ctx, 60, 60, 250, 70, 240);
  this.background2 = new Background("canvas", this.ctx, 400, 400);
  this.miner2 = new Miner("canvas", 'images/miner.png', this.ctx, 550, 192, 128);
  this.bar2 = new PowerBar("canvas", this.ctx, 450, 650, 650, 460, 600);
  document.onkeydown = this.onKeyDown.bind(this);
  document.onkeyup = this.onKeyUp.bind(this);
  this.collision1 = false;
  this.collision2 = false;
  this.myBirds = [];
  setInterval(this.addBird.bind(this), Math.floor(Math.random() * (9000 - 4000)) + 4000);
  this.cloud = new Cloud("canvas", 'images/clouds.png', this.ctx, 350)
  this.hasMiner1Won = false;
  this.hasMiner2Won = false;
}

Game.prototype.addBird = function() {
  this.myBirds.push(new Bird("canvas", 'images/bird.png', this.ctx, Math.floor(Math.random() * (220 - 120)) + 120))
}

Game.prototype.clearBg = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.collisionObjectsLeft = function() {
  if ((this.bar1.xline > (this.bar1.xAutomaticline - 5)) &&
    (this.bar1.xline < (this.bar1.xAutomaticline + 20))) {
    this.collision1 = true;
    this.miner1.goDown();
    this.background1.changeBackground();
  } else {
    this.collision1 = false;
  }
}

Game.prototype.collisionObjectsRight = function() {
  if ((this.bar2.xline > (this.bar2.xAutomaticline - 5)) &&
    (this.bar2.xline < (this.bar2.xAutomaticline + 20))) {
    this.collision2 = true;
    this.miner2.goDown();
    this.background2.changeBackground();
  } else {
    this.collision2 = false;
  }
}

Game.prototype.onKeyDown = function(event) {
  if (event.keyCode === A_KEY) {
    this.miner1.isMining = true;
    this.bar1.isMoving = true;
  }
  if (event.keyCode === RIGHT_KEY) {
    this.miner2.isMining = true;
    this.bar2.isMoving = true;
  }

};

Game.prototype.onKeyUp = function(event) {
  if (event.keyCode === A_KEY) {
    this.miner1.isMining = false;
    this.bar1.isMoving = false;
    this.collisionObjectsLeft();
  }
  if (event.keyCode === RIGHT_KEY) {
    this.miner2.isMining = false;
    this.bar2.isMoving = false;
    this.collisionObjectsRight();
  }
}

Game.prototype.draw = function() {
  this.clear()
  this.background1.draw();
  this.background2.draw();
  this.miner1.draw();
  this.miner2.draw();
  var lastBird = this.myBirds.length - 1;
  if (this.myBirds[lastBird] != undefined) {
    this.myBirds[lastBird].draw();
  }
  if ((this.hasMiner1Won === false) && (
      this.hasMiner2Won === false)) {
    this.bar1.draw();
    this.bar2.draw();
    var lastBird = this.myBirds.length - 1;
    if (this.myBirds[lastBird] != undefined) {
      this.myBirds[lastBird].draw();
    }
    if (this.miner1.findings === 3) {
      this.coin = new Coin("canvas", this.ctx, 145);
      this.thinking = new Thinking("canvas", this.ctx, 190);
      this.warrior1 = new Warrior('canvas', 'images/gokuuniformsprite.png', this.ctx, 140, -5000)
      this.warrior2 = new Warrior('canvas', 'images/gokuuniformsprite.png', this.ctx, 595, -7000)
      this.warrior1.draw();
      this.coin.draw();
      this.thinking.draw();
      this.hasMiner1Won = true;
    } else if (this.miner2.findings === 3) {
      this.coin = new Coin("canvas", this.ctx, 590);
      this.warrior1 = new Warrior('canvas', 'images/gokuuniformsprite.png', this.ctx,140, -7000)
      this.warrior2 = new Warrior('canvas', 'images/gokuuniformsprite.png', this.ctx,595, -5000)
      this.thinking = new Thinking("canvas", this.ctx, 650);
      this.warrior1.draw();
      this.coin.draw();
      this.thinking.draw();
      this.hasMiner2Won = true;
    }
  } else {
    if(this.warrior1.isDown === false){
    this.cloud.draw();
    this.coin.draw();
    this.warrior1.draw();
    this.warrior2.draw();
    }
    else {
    this.cloud.draw();
    this.warrior1.draw();
    this.warrior2.draw();
    }
  }

}
