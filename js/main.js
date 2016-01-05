var player = 1;

function clickBox(box) {
    if (player ==1) {
    document.getElementById(box).value = "X";
    document.getElementById(box).disabled = "disabled";
    player -=1;
    winner();
 } else {
    document.getElementById(box).value = "O";
    document.getElementById(box).disabled = "disabled";
    player +=1;
    winner();
 }
}

function winner (){
    if(document.getElementById("box1").value === "X" &&
        document.getElementById("box2").value === "X" &&
        document.getElementById("box3").value === "X") 
        {alert("Player 1 WINS!");
    } if(document.getElementById("box4").value === "X" &&
        document.getElementById("box5").value === "X" &&
        document.getElementById("box6").value === "X") 
        {alert("Player 1 WINS!");
    } if(document.getElementById("box7").value === "X" &&
        document.getElementById("box8").value === "X" &&
        document.getElementById("box9").value === "X") 
        {alert("Player 1 WINS!");
    } if(document.getElementById("box1").value === "X" &&
        document.getElementById("box4").value === "X" &&
        document.getElementById("box7").value === "X") 
        {alert("Player 1 WINS!");
    } if(document.getElementById("box2").value === "X" &&
        document.getElementById("box5").value === "X" &&
        document.getElementById("box8").value === "X") 
        {alert("Player 1 WINS!");
    } if(document.getElementById("box3").value === "X" &&
        document.getElementById("box6").value === "X" &&
        document.getElementById("box9").value === "X") 
        {alert("Player 1 WINS!");
    } if(document.getElementById("box1").value === "X" &&
        document.getElementById("box5").value === "X" &&
        document.getElementById("box9").value === "X") 
        {alert("Player 1 WINS!");
    } if(document.getElementById("box3").value === "X" &&
        document.getElementById("box5").value === "X" &&
        document.getElementById("box7").value === "X") 
        {alert("Player 1 WINS!");
    } if(document.getElementById("box1").value === "O" &&
        document.getElementById("box2").value === "O" &&
        document.getElementById("box3").value === "O") 
        {alert("Player 2 WINS!");
    } if(document.getElementById("box4").value === "O" &&
        document.getElementById("box5").value === "O" &&
        document.getElementById("box6").value === "O") 
        {alert("Player 2 WINS!");
    } if(document.getElementById("box7").value === "O" &&
        document.getElementById("box8").value === "O" &&
        document.getElementById("box9").value === "O") 
        {alert("Player 2 WINS!");
    } if(document.getElementById("box1").value === "O" &&
        document.getElementById("box4").value === "O" &&
        document.getElementById("box7").value === "O") 
        {alert("Player 2 WINS!");
    } if(document.getElementById("box2").value === "O" &&
        document.getElementById("box5").value === "O" &&
        document.getElementById("box8").value === "O") 
        {alert("Player 2 WINS!");
    } if(document.getElementById("box3").value === "O" &&
        document.getElementById("box6").value === "O" &&
        document.getElementById("box9").value === "O") 
        {alert("Player 2 WINS!");
    } if(document.getElementById("box1").value === "O" &&
        document.getElementById("box5").value === "O" &&
        document.getElementById("box9").value === "O") 
        {alert("Player 2 WINS!");
    } if(document.getElementById("box3").value === "O" &&
        document.getElementById("box5").value === "O" &&
        document.getElementById("box7").value === "O") 
        {alert("Player 2 WINS!");
    }

}
