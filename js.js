window.onload = function () {
    var obat = document.getElementById("bat")
    var oball = document.getElementById("ball")
    var ogame =document.getElementById("game-area")
    var ocore=document.getElementById("core")
    var time=50
var index=0
var level=0


    //  if (knock(oball,obat)){

    //  }
    creatnode(21);
    var obricks = document.getElementsByClassName("brick")

    timer = null;
    var speedX = Math.random() * 5 + 7;
    var speedY = Math.random() * 5 + 7;
if(localStorage.getItem("time")){
    var b= localStorage.getItem("level")
    var olv=document.getElementById("level")

    
    olv.innerHTML=b
    
    time=localStorage.getItem("time");
    var a=localStorage.getItem("score")
    ocore.innerHTML=localStorage.getItem("score")
}
else{
    var olv=document.getElementById("level")

    time=50;
    ocore.innerHTML=index;
    olv.innerHTML=level


}
    timer = setInterval(function () {
        var l1 = oball.offsetLeft
        var l2 = oball.offsetTop

        if (knock(oball, obat)) {
            speedY *= -1
        }
         

        
        for (var i=0;i<obricks.length;i++ ){
            
          if(knock(obricks[i],oball)){
            remove(obricks[i],ogame)
          
            
            index++
        

            if(index>19){

                score= ocore.innerHTML 
                localStorage.setItem("score",score)
                time=time-3;
               if(localStorage.getItem("time")){
                   level=1+Number(localStorage.getItem("level"))
               }
               else{
                   level++
               }
                localStorage.setItem("level",level)
                localStorage.setItem("time",time)
                window.location.reload()

            }
            else{
                if(a){
                    ocore.innerHTML=index*100+ Number(a) 
                }
                else{
                    ocore.innerHTML=index*100
                }
            }
           

            
        }
    }

        if (l1 < 0 || l1 >= 470) {

            speedX *= -1
        }
        else {
            speedX = speedX
        }
        if (l2 < 50) {
            speedY *= -1;
        }
        else {
            speedY = speedY
        }

        if (l2 > 770) {
            localStorage.removeItem("time")
            localStorage.removeItem("level")
            localStorage.removeItem("score")
            clearInterval(timer)
            alert("game over ")
        }
        oball.style.left = oball.offsetLeft + speedX + 'px';

        oball.style.top = oball.offsetTop + speedY + 'px';

    }, time);



    drag(obat)
    console.log(randomColor())

}
function drag(node) {
    node.onmousedown = function (ev) {
        var e = ev || window.event

        var offsetX = e.clientX - node.offsetLeft;

        document.onmousemove = function (ev) {
            var e = ev || window.event;

            var l = (e.clientX - offsetX)
            if (l < 0) {
                l = 0
            }
            if (l > 400) {
                l = 400
            }


            node.style.left = l + 'px';
            console.log()
        }

    }
    document.onmouseup = function () {
        document.onmousemove = null;
    }
}
function knock(node1, node2) {
    var l1 = node1.offsetLeft;
    var r1 = node1.offsetLeft + node1.offsetWidth;
    var t1 = node1.offsetTop;
    var b1 = node1.offsetTop + node1.offsetHeight;

    var l2 = node2.offsetLeft;
    var r2 = node2.offsetLeft + node2.offsetWidth;
    var t2 = node2.offsetTop;
    var b2 = node2.offsetTop + node2.offsetHeight;

    if (l2 >= r1 || r2 <= l1 || t2 >= b1 || b2 <= t1) {
        return false;
    } else {
        return true;
    }

}
function creatnode(num) {
    var ogame = document.getElementById("game-area");

    for (var i = 0; i < num; i++) {
        var divs = document.createElement("div")
        ogame.appendChild(divs);
        divs.className = "brick";
        var obricks = document.getElementsByClassName("brick")
        for (var i = 0; i < obricks.length; i++) {
            console.log(i)
            obricks[i].style.width = "100px"
            obricks[i].style.height = "60px"
            obricks[i].style.float = "left"
            obricks[i].style.backgroundColor = randomColor()
            
           
       
        }}
        var obricks = document.getElementsByClassName("brick");
        for(var i = 0; i < obricks.length; i++){
            obricks[i].style.left = obricks[i].offsetLeft + 'px';
            obricks[i].style.top = obricks[i].offsetTop + 'px';
        }

        for(var i = 0; i < obricks.length; i++){
            obricks[i].style.position = 'absolute';
        }



    
}

function randomColor() {

    var a = 256 * Math.random();
    var b = 256 * Math.random();
    var c = 256 * Math.random();
    var str = `rgba(${256 * Math.random()},${b},${c})`


    return str
}
function remove(node,node2){
    
    node2.removeChild(node)
}