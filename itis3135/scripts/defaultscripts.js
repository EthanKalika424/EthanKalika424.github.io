function scriptTest()
{
    alert("My script is running!");
}
function TimeAndDate()
{
    var current = new Date();
    var monthNumber = current.getMonth() + 1;
    var day = current.getDay();
    var year = current.getFullYear();  
    var date = current.getDate();
    var hour = current.getHours();
    var minute = current.getMinutes();
    var dayOrNight;

    var monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var dayOfTheWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

    if(hour >= 12)
    {
        hour %= 12;
        dayOrNight = "pm";
    }
    else
    {
        dayOrNight = "am";
    }

    let fullTimeDate = "Today is " + hour + ":" + minute + dayOrNight + " on " + dayOfTheWeek[day] + ", " + date + " " + monthName[monthNumber] + " " + year;
    document.getElementById("timeoutput").innerHTML = fullTimeDate;
}
function welcome()
{
    let name = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;
    let fullWelcome = "The Emerald Kinkajou welcome's you, " + name + "! We're glad you are doing " + feeling + "!";
    document.getElementById("welcomeoutput").innerHTML = fullWelcome;
}
function websiteperstore()
{
    var amountofwebsite = prompt("Enter the number of websites that you want!"); 
    amountofwebsite = parseFloat(amountofwebsite); 
    var amountofcompanies = prompt("Enter the number of companies the websites are for!"); 
    amountofcompanies = parseFloat(amountofcompanies); 
    var amount = amountofwebsite/amountofcompanies; 
    amount = parseInt(amount); 
    alert("Websites per company is = " + amount); 
}