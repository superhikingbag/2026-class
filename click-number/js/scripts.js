// Function to generate random color
function getRandomColor(){
    var colors = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6BCB77', '#FF8C42', '#A8E6CF', '#FF6B9D', '#C780FA', '#FFA07A', '#87CEEB', '#F7B731', '#5F27CD'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Function to generate random size
function getRandomSize(){
    return 40 + Math.floor(Math.random() * 80); // Size between 40px and 120px
}

// Create buttons
var buttons = [];
for(var num=20;num > 0;num--){
var elm= document.createElement("button");
    elm.innerHTML = num;
    elm.setAttribute("id",num);
    elm.setAttribute("class","circle");
    var function_name="remove("+ num +")";
    elm.setAttribute("onclick",function_name);
    document.getElementById("main").appendChild(elm);
    buttons.push(elm);

    // Set random size
    var size = getRandomSize();
    elm.style.width = size + "px";
    elm.style.height = size + "px";
    elm.style.borderRadius = (size/2) + "px";
    elm.style.fontSize = (size * 0.4) + "px";
    elm.style.lineHeight = size + "px";

    // Set random color
    elm.style.backgroundColor = getRandomColor();

    // Set random position
    var left_pos = 10;
    var top_pos = 100;

    left_pos=left_pos+Math.floor(Math.random()*400);
    top_pos=top_pos+Math.floor(Math.random()*600);

    elm.style.left =""+ left_pos + "px";
    elm.style.top =""+ top_pos + "px";
}

// Function to rearrange numbers based on elapsed time
function rearrangeNumbers(){
    for(var i=0; i<buttons.length; i++){
        var elm = buttons[i];
        var left_pos = 10 + Math.floor(Math.random()*400);
        var top_pos = 100 + Math.floor(Math.random()*600);
        elm.style.left = left_pos + "px";
        elm.style.top = top_pos + "px";
    }
}

// Rearrange numbers every 5 seconds
var rearrangeInterval = setInterval(rearrangeNumbers, 5000);

var next=1
document.remove =function(id){
    if(id===next){
   document.getElementById("main").removeChild(document.getElementById(id));
   // Remove from buttons array
   buttons = buttons.filter(btn => btn.id != id);
   next=next+1;
   // Stop rearranging when all buttons are removed
   if(buttons.length === 0){
       clearInterval(rearrangeInterval);
   }
    }
}