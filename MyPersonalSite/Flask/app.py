from datetime import date
from urllib import request
from flask import Flask, render_template, request
import datetime

app = Flask(__name__)
global studentOrganisationDetails
studentOrganisationDetails = {}
# Assign default 5 values to studentOrganisationDetails for Application  3.


@app.get('/')
def index():
    # Complete this function to get current date and time assign this value to currentDate, display this data on index.html

    return render_template('index.html', currentDate=datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))


@app.get('/form')
def displayNumberPage():
    # Complete this function to display form.html page
    return render_template('form.html')


@app.route('/result', methods=['POST'])
def checkNumber():
    # Get Number from form and display message according to number
    # Display "Number {Number} is even" if given number is even on result.html page
    # Display "Number {Number} is odd" if given number is odd on result.html page
    # Display "No number provided" if value is null or blank on result.html page
    # Display "Provided input is not an integer!" if value is not a number on result.html page
    global number
    number = int(request.form['number'])

    # Write your to code here to check whether number is even or odd and render result.html page
    if (number % 2) == 0:
        return render_template('result.html', iseven ="{0} is Even".format(number))
    elif (number % 2) !=0:
        return render_template('result.html', iseven ="{0} is Odd".format(number))
    else:
        return render_template('result.html', iseven ="{0} this is not an integer".format(number))

@app.get('/studentForm')
def displayStudentForm():
    # Complete this function to display studentFrom.html page
    return render_template('studentForm.html')


@app.route('/StudentDetails', methods=['POST'])
def displayRegistrationPage():
    # Get student name and organisation from form.
    studentName = request.form['name']
    org = request.form['organizations']
    global studentOrganisationDetails
    if studentName not in studentOrganisationDetails.keys():
        studentOrganisationDetails[studentName] = org
    # Append this value to studentOrganisationDetails
    return render_template('StudentDetails.html', studentOrganisationDetails = studentOrganisationDetails)
    # Display studentDetails.html with all students and organisations
