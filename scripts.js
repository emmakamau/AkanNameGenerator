//Functions to validate data
function validateDay(){
    let day = parseInt(document.getElementById('day').value)
    let dayError;

    if(isNaN(day) || day<=0 || day>31){
        dayError = "Day can only be from 1 to 31"
        document.getElementById('day-error').innerHTML = dayError
        return dayError
    }
};

function validateMonth(){
    let month = parseInt(document.getElementById('month').value)
    let monthError;

    if(isNaN(month) || month<=0 || month>12){
        monthError = "There are only 12 months in a year."
        document.getElementById('month-error').innerHTML = monthError
    }
};

function validateYear(){
    let year = document.getElementById('year').value
    let yearError
    
    if(year.length > 4 || isNaN(year)){
        yearError = "Invalid input."
        document.getElementById('year-error').innerHTML = yearError
    }
};


//Function to get the day of the week from dates
function dayOfTheWeek(){
    validateDay()
    validateMonth()
    validateYear()
    var DD = document.getElementById('day').value
    var MM = document.getElementById('month').value - 1
    var year = document.getElementById('year').value

    var dateOfBirth = new Date(year, MM, DD)
    let day = dateOfBirth.getDay()
    console.log(day)
    return day;
}

//Function to get the gender

function userGender(){
    let male = document.getElementById('male').checked
    let female = document.getElementById('female').checked
    let genderError
    if( male === true){
        var gender = "male"
        return gender;
    }else if(female === true){
        var gender = "female"
        return gender;
    }else{
        genderError="Please select a gender"
        document.getElementById('gender-error').innerHTML = genderError
    }
}

//Function to retrieve the Akan name
function akanName(){
    //Hide form when the Akan name is displayed
    var hideForm = document.getElementById('akan-form')
    if (hideForm.style.display === "none") {
        hideForm.style.display = "block";
      } else {
        hideForm.style.display = "none";
      }

    //Check gender and weekday to get the Akan name
    let gender = userGender()
    let weekDay = dayOfTheWeek()
    let week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let maleNameList = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    let femaleNameList = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

    if(gender==='male'){
        var userName = maleNameList[weekDay]
        var birthDay = week[weekDay]
        response = `Your were born on a ${birthDay} and your Akan name is ${userName}!!`
        document.getElementById('display-name').innerHTML = response
    }else if(gender==='female'){
        var userName = femaleNameList[weekDay]
        var birthDay = week[weekDay]
        response = `Your were born on a ${birthDay} and your Akan name is ${userName}!!`
        document.getElementById('display-name').innerHTML = response
    }else{
        alert("The form is missing some data!")
        hideForm.style.display = "block";
    }
    console.log(gender, weekDay)
}

