function scriptTest()
{
    alert("My script is running!");
}
function timeAndDate()
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