window.onload = function () {
    document.getElementById("add_salary").onclick = addSalary;
    document.getElementById("display_results").onclick = displayResults;
    document.getElementById("display_salary").onclick = displaySalary;
    document.getElementById("employee").focus();
};

var employee = [];
var salary = [];

function addSalary() {   

    var enteredSalary = parseFloat(document.getElementById("salary").value);
    var enteredName = document.getElementById("employee").value;

    if (enteredSalary === "") 
    {
        alert("Please enter a valid salary");
        enteredSalary = ""; 
        document.getElementById("employee").focus();
    }
    else 
    {
        
        enteredSalary = parseFloat(enteredSalary);
        alert(enteredSalary);
        employee.push(enteredName);
        salary.push(enteredSalary);
        document.getElementById("salary").value = "";
        document.getElementById("employee").focus();
    }

}
function displayResults() {

    var average = 0;
    var sum = 0;
    var employeehn;
    var maxNum;

    for (i = 0; i <= salary.length; i++) {
        sum += salary[i];
    }
    average = (sum / salary.length);
    alert("Average Salary: $" + average);

    for (i = 0; i <= salary.length; i++) {
        if (salary[i] > maxNum) {
            maxNum = salary[i]; 
            employeehn = i; 
        }
    }

    document.getElementById("results").innerHTML = "Average salary is $" + average + ". The highest salary is " + employeehn + "'s, at $" + maxNum;

}