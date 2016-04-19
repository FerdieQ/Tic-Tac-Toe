var player = 1;

function switchTurn(){
    if (document.turn ==="X"){
        document.turn ==="O";
    } else {
        document.turn ==="X";
    };
    setMessage("Player "+ document.turn + " turn");
};

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
 };
};



function winner (){
    if(document.getElementById("box1").value == "X" &&
        document.getElementById("box2").value == "X" &&
        document.getElementById("box3").value == "X") {
            alert("Player X WINS!");
            reset();
    } if (document.getElementById("box4").value === "X" &&
        document.getElementById("box5").value === "X" &&
        document.getElementById("box6").value === "X") {
            alert("Player X WINS!");
            reset();
    } if(document.getElementById("box7").value === "X" &&
        document.getElementById("box8").value === "X" &&
        document.getElementById("box9").value === "X") {
            alert("Player X WINS!");
            reset();
    } if(document.getElementById("box1").value === "X" &&
        document.getElementById("box4").value === "X" &&
        document.getElementById("box7").value === "X") {
            alert("Player X WINS!");
            reset();
    } if(document.getElementById("box2").value === "X" &&
        document.getElementById("box5").value === "X" &&
        document.getElementById("box8").value === "X") {
            alert("Player X WINS!");
            reset();
    } if(document.getElementById("box3").value === "X" &&
        document.getElementById("box6").value === "X" &&
        document.getElementById("box9").value === "X") {
            alert("Player X WINS!");
            reset();
    } if(document.getElementById("box1").value === "X" &&
        document.getElementById("box5").value === "X" &&
        document.getElementById("box9").value === "X") {
            alert("Player X WINS!");
            reset();
    } if(document.getElementById("box3").value === "X" &&
        document.getElementById("box5").value === "X" &&
        document.getElementById("box7").value === "X") {
            alert("Player X WINS!");
            reset();
    } if(document.getElementById("box1").value === "O" &&
        document.getElementById("box2").value === "O" &&
        document.getElementById("box3").value === "O") {
            alert("Player O WINS!");
            reset();
    } if(document.getElementById("box4").value === "O" &&
        document.getElementById("box5").value === "O" &&
        document.getElementById("box6").value === "O") {
            alert("Player O WINS!");
            reset();
    } if(document.getElementById("box7").value === "O" &&
        document.getElementById("box8").value === "O" &&
        document.getElementById("box9").value === "O") {
            alert("Player O WINS!");
            reset();
    } if(document.getElementById("box1").value === "O" &&
        document.getElementById("box4").value === "O" &&
        document.getElementById("box7").value === "O") {
            alert("Player O WINS!");
            reset();
    } if(document.getElementById("box2").value === "O" &&
        document.getElementById("box5").value === "O" &&
        document.getElementById("box8").value === "O") {
            alert("Player O WINS!");
            reset();
    } if(document.getElementById("box3").value === "O" &&
        document.getElementById("box6").value === "O" &&
        document.getElementById("box9").value === "O") {
            alert("Player O WINS!");
            reset();
    } if(document.getElementById("box1").value === "O" &&
        document.getElementById("box5").value === "O" &&
        document.getElementById("box9").value === "O") {
            alert("Player O WINS!");
            reset();
    } if(document.getElementById("box3").value === "O" &&
        document.getElementById("box5").value === "O" &&
        document.getElementById("box7").value === "O") {
            alert("Player O WINS!");
            reset();
    };
};

function reset(){
    document.getElementById("box1").value = "";
    document.getElementById("box2").value = "";
    document.getElementById("box3").value = "";
    document.getElementById("box4").value = "";
    document.getElementById("box5").value = "";
    document.getElementById("box6").value = "";
    document.getElementById("box7").value = "";
    document.getElementById("box8").value = "";
    document.getElementById("box9").value = "";
    document.getElementById("box1").disabled = "";
    document.getElementById("box2").disabled = "";
    document.getElementById("box3").disabled = "";
    document.getElementById("box4").disabled = "";
    document.getElementById("box5").disabled = "";
    document.getElementById("box6").disabled = "";
    document.getElementById("box7").disabled = "";
    document.getElementById("box8").disabled = "";
    document.getElementById("box9").disabled = "";
};
