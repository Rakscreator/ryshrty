player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;

player1_score = 0;
player2_score = 0;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;

question_turn = "player1";
answer_turn = "player2";

function send(){
    number_1 = document.getElementById("no1").value;
    number_2 = document.getElementById("no2").value;
    
    console.log("The numbers are: "+ number_1 +","+ number_2 );


    question = "<h4 id='question'> Q. "+number_1+"+"+number_2+"</h4>";
    input = "<br>Answer: <input id='answer' type='number' placeholder='Type your Answer'>";
    button = "<br><br><button onclick='check()' class='btn btn-info'>Check</button>";
    row = question + input + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("no1").value = "";
    document.getElementById("no2").value = "";
}


function check(){
    answer = document.getElementById("answer");
    actual_ans = number_1 + number_2
    if(actual_ans == answer){
        if(answer_turn == "player1"){
            player1_score += 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }else{
            player2_score += 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        
    }else{
        
    }
    if(answer_turn == "player1"){
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn : "+ player2_name;
    }else{
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn : "+ player1_name;
    }
    if(question_turn == "player1"){
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn : "+ player2_name;
    }else{
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn : "+ player1_name;
    }
    document.getElementById("output").innerHTML = "";
}