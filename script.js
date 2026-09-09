function answerQuestion(){ 

    let input = document.getElementById("question"); 
    let question = input.value.trim(); 

    if(question === ""){ 
        return; 
    } 

    let chatbox = document.getElementById("chatbox"); 

    chatbox.innerHTML += `
        <div class="user-message">
            ${question}
        </div>
    `; 

    let reply = getBotResponse(question); 

    chatbox.innerHTML += `
        <div class="bot-message">
            ${reply}
        </div>
    `; 

    input.value = ""; 

    chatbox.scrollTop = chatbox.scrollHeight; 
}

document.addEventListener("keypress", function(e){ 
    if(e.key === "Enter"){ 
        answerQuestion(); 
    } 
});