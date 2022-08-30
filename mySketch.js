var colors="4464ad-a4b0f5-f58f29-7d4600-466995-564787-dbcbd8-f2fdff-9ad4d6-101935-eafdf8-e5e9ec-ddcad9-d1b1cb-7c616c-c1aba6-533b4d-f564a9-faa4bd-fae3c6-bbdbb4-fcf0cc-4392f1-ece8ef-e3ebff-e7f0ff-dc493a-".split("-").map(a=>"#"+a)
var robots=[]


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	for(var x=0;x<width+200;x+=220){
		for(var y=0;y<height;y+=150){
			robots.push(new Robot({
				p:createVector(x,y)
			}))
		}
	}
	
	// robots.push(new Robot({
	// 	p:createVector(width/1.5,height/2)
	// }))
	
	
}

function draw() {
	
	
	background("#8D6E63")
	robots.forEach(robot=>robot.update())
	robots.forEach(robot=>robot.draw())
	// textAlign(LEFT);
	// fill(255)
	// textSize(20)
	// text(mouseX+" , "+mouseY,mouseX,mouseY);
}