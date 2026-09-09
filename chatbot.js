function getBotResponse(question){

    question = question.toLowerCase().trim();

    // Exact question
    if(answers[question]){
        return answers[question];
    }

    // Find matching keyword
    for(let key in answers){

        if(question.includes(key)){
            return answers[key];
        }

    }

    return `Sorry! 😔 I don't have an answer for this question yet.
You can ask me about DBMS, OOPS, Java or Python.
You can also ask about exams and placement.
Try another question! 😊`;
}