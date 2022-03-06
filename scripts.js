//Functions to validate data
function validateDay(){
    let day = parseInt(document.getElementById('day').value)
    let dayError;

    if(isNaN(day) || day<=0 || day>31){
        dayError = "Day can only be from 1 to 31"
        document.getElementById('day-error').innerHTML = dayError
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
    
    if(year.length > 4){
        yearError = "Invalid input!"
        document.getElementById('year-error').innerHTML = yearError
    }else if(year === 0){
        yearError = "Year cannot be empty"
        document.getElementById('year-error').innerHTML = yearError
    }
};


//Function to get the day of the week from dates
function dayOfTheWeek(){
    var DD = document.getElementById('day').value
    var MM = document.getElementById('month').value - 1
    var year = document.getElementById('year').value

    //console.log(DD, MM, year)
    var dateOfBirth = new Date(year, MM, DD)
    let day = dateOfBirth.getDay()
    return day;
}

//Function to get the gender

function userGender(){
    let male = document.getElementById('male').checked
    if( male === true){
        var gender = "male"
        return gender;
    }else{
        var gender = "female"
        return gender;
    }
}

//Function to retrieve the Akan name

/*
Male Names
Sunday:Kwasi Monday:Kwadwo Tuesday:Kwabena Wednesday:Kwaku Thursday:Yaw Friday:Kofi Saturday:Kwame

Female Name
Sunday:Akosua Monday:Adwoa Tuesday:Abenaa Wednesday:Akua Thursday:Yaa Friday:Afua Saturday:Ama
 */

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
    }else{
        var userName = femaleNameList[weekDay]
        var birthDay = week[weekDay]
        response = `Your were born on a ${birthDay} and your Akan name is ${userName}!!`
        document.getElementById('display-name').innerHTML = response
    }
    console.log(gender, weekDay)
}

