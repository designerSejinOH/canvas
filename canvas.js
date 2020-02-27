var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

c.imageSmoothingEnabled = false;
console.log(canvas);
function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function () {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = 'rgba(0,0,255,0.7)';
		c.stroke();
		c.fillStyle = 'rgba(10,10,10,0.9)';
		c.fill(); 
	}
	this.update = function () {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}
}

var circleArray = [];
//init
for (var i = 0; i < 100; i++) {
	var x = radius+Math.random() * (innerWidth - radius*2);
	var y = radius+Math.random() * (innerHeight - radius*2);
	var dx = (Math.random() - 0.5);
	var dy = (Math.random() - 0.5);
	var radius = 50*Math.random();
	circleArray.push(new Circle(x,y,dx,dy,radius));
	//	var circle = new Circle(200, 200, 3, 3, 30);
}

console.log(circleArray);
//draw
function animate() {
	requestAnimationFrame(animate);
//	c.clearRect(0, 0, innerWidth, innerHeight);
	//background원리 
for(var i = 0; i<circleArray.length; i++){
	//	circle.update();
	circleArray[i].update();
}
}

animate();
