function alertUser()
{
    var num = prompt("The Emerald Kinkajou would like you to enter a number between 1-11 to tell you the polygon with that many sides you entered");
    validateNum(num);
}
function validateNum(_num)
{
    if(isNaN(_num)){
        alert("Sorry! Invalid number entry. Please type between 1-11!");
        alertUser();
    }
    else
    {
        number = Math.trunc(_guess);
        if(number > 11 || number < 1)
        {
            alert("Sorry! Invalid number entry. Please type between 1-11!");
            alertUser();
        }
        else
        {
            getShape(number);
        }
    }
}
function getShape(sides)
{
    var polygonList = new Array(
        "Monogon", 
        "Bigon", 
        "Triangle", 
        "Quadrilateral", 
        "Pentagon", 
        "Hexagon", 
        "Heptagon", 
        "Octagon",
        "Nonagon",
        "Decagon",
        "Undecagon"  
    );
    
    var message = "A polygon with " + sides + " sides is called a " + polygonList[sides - 1] + ".";

    document.getElementById("polyName").innerHTML = message;
}