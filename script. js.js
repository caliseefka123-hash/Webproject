document.getElementById("calculateBtn").addEventListener("click", calculateResult);

function calculateResult() {
    let name = document.getElementById("name").value;
    let math = document.getElementById("math").value;
    let english = document.getElementById("english").value;
    let science = document.getElementById("science").value;
    let resultDiv = document.getElementById("result");

    // Input Validation
    if (name === "" || math === "" || english === "" || science === "") {
        resultDiv.innerHTML = "❌ Please fill all fields";
        resultDiv.style.color = "red";
        return;
    }

    math = Number(math);
    english = Number(english);
    science = Number(science);

    if (math < 0 || english < 0 || science < 0 || math > 100 || english > 100 || science > 100) {
        resultDiv.innerHTML = "❌ Marks must be between 0 and 100";
        resultDiv.style.color = "red";
        return;
    }

    let subjects = [math, english, science]; // Array usage
    let total = 0;

    for (let mark of subjects) {
        total += mark;
    }

    let average = total / subjects.length;
    let grade = "";

    if (average >= 80) {
        grade = "A";
    } else if (average >= 60) {
        grade = "B";
    } else if (average >= 50) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    resultDiv.style.color = "green";
    resultDiv.innerHTML = `
        Student: ${name} <br>
        Total: ${total} <br>
        Average: ${average.toFixed(2)} <br>
        Grade: ${grade}
    `;
}
