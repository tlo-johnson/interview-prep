// https://leetcode.com/problems/walking-robot-simulation-ii/

// February 21, 2023. Failed Attempt

const directions = [
  { name: 'East', step: [1, 0] },
  { name: 'North', step: [0, 1] },
  { name: 'West', step: [-1, 0] },
  { name: 'South', step: [0, -1] }
];

var Robot = function(width, height) {
  this.width = width;
  this.height = height;
  this.posx = 0;
  this.posy = 0;
  this.direction = 0;
};

Robot.prototype.step = function(num){
  num %= ((this.width - 1) + (this.height - 1)) * 2;
  if (num === 0)
    this.direction = 3;

  while (num > 0){
    const initial = { posx: this.posx, posy: this.posy };
    const { step: [x, y] } = directions[this.direction];
    this.posx += x;
    this.posy += y;

    if (this.posx !== this.width && this.posx !== -1
      && this.posy !== this.height && this.posy !== -1) {
      num--;
      continue;
    }

    this.posx = initial.posx;
    this.posy = initial.posy;
    this.direction = (this.direction + 1) % 4;
  }
};

Robot.prototype.getPos = function() {
  return [this.posx, this.posy];
};

Robot.prototype.getDir = function() {
  return directions[this.direction].name;
};

const robot = new Robot(4, 5);
robot.step(44);
robot.step(19);
robot.step(8);
robot.step(36);
console.log(robot.getPos());
console.log(robot.getDir());
