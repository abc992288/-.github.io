var user = prompt("剪刀，石頭，布");
var computer = Math.random();
if (computer<0.33){
    computer = "剪刀";
}
else if(computer<=0.67){
    computer = "石頭";
}
else{
    computer = "布";
}
if(computer==user){
    alert("TIE");
}
else if(computer=="剪刀"){
    if(user=="石頭"){
        alert("WIN");
    }
    else if(user=="布"){
        alert("LOSS");
    }
}
else if(computer=="布"){
    if(user=="石頭"){
        alert("LOSS");
    }
    else if(user=="剪刀"){
        alert("WIN");
    }
}
else{
    if(user=="剪刀"){
        alert("LOSS");
    }
    else if(user=="布"){
        alert("WIN");
}
}

    