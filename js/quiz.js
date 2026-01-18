function corrigerQuiz(form) {
    let score = 0;

    if (form.q1[0].checked) score++;
    if (form.q2[1].checked) score++;
    if (form.q3[0].checked) score++;
    if (form.q4[1].checked) score++;
    if (form.q5[0].checked) score++;
    if (form.q6[1].checked) score++;
    if (form.q7[1].checked) score++;
    if (form.q8[1].checked) score++;
    if (form.q9[1].checked) score++;
    if (form.q10[2].checked) score++;

    const bonnesReponses = [
        "HyperText Markup Language",
        "Styliser les pages web",
        "Un langage de programmation",
        "<a>",
        "<img>",
        "Cascading Style Sheets",
        "Dans le navigateur",
        ".html",
        "<h1>",
        "CSS"
    ];

    let resultText = "Votre note : " + score + " / 10\n\n";
    resultText += "Bonnes réponses :\n";

    for (let i = 1; i <= bonnesReponses.length; i++) {
        resultText += i + ". " + bonnesReponses[i] + "\n";
    }

    document.getElementById("resultatQuiz").value = resultText;
}
