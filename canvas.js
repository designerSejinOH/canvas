var canvas = document.querySelector('canvas');
//canvas라는 변수를 선택자로 만들기
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//html에서 이 캔버스의 윈도우 설정값을 받아오는 코드
//창사이즈에 따른 값 변화

var c = canvas.getContext('2d');

c.imageSmoothingEnabled = false;
//c.fillStyle = 'rgba(255,0,0,0.5)';
//c.fillRect(100, 100, 100, 100);
//c.fillStyle = 'rgba(0,255,0,0.5)';
//c.fillRect(400, 100, 100, 100);
//c.fillStyle = 'rgba(0,0,255,0.5)';
//c.fillRect(300, 300, 100, 100);
//
console.log(canvas);
//콘솔에 캔버스 속성 표시
//
////Line
//c.beginPath();
//c.moveTo(50, 300);
//c.lineTo(300, 100);
//c.lineTo(400, 300);
//c.strokeStyle = 'rgba(100,200,100,255)';
//c.stroke();
//
////Arc / Circle
////c.beginPath();
////c.arc(300, 300, 30, 0, Math.PI * 2, false);
////c.strokeStyle = 'blue';
////c.stroke();
//
//for (var i = 0; i < 100; i++) {
//	var x  = Math.random()*window.innerWidth;
//	var y = Math.random()*window.innerHeight;
//	c.beginPath();
//	c.arc(x, y, 30, 0, Math.PI * 2, false);
//	c.strokeStyle = 'blue';
//	c.stroke();
//}


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
