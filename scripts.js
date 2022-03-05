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

//let month = document.getElementById('month').value
//let yr = document.getElementById('year').value


//Function to get the day of the week from dates
function dayOfTheWeek(){
    validateYear()
    validateDay()
    validateMonth()
    var DD = parseInt(document.getElementById('day').value)
    var MM = parseInt(document.getElementById('month').value)
    var year = document.getElementById('year').value

    
    var CC = parseInt(year.substring(0,2)) //Extract 19 from 1976 i.e century digits
    var YY = parseInt(year.substring(2,4)) //Extract 76 from 1976 i.e year digits
    
    console.log(typeof DD, DD)
    console.log(typeof MM, MM)
    console.log(typeof CC, CC)
    console.log(typeof YY, YY)
    console.log(DD,MM,CC,YY)

    var weekDay = parseInt(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7)
    /*var a = (CC/4) - 2*CC-1
    var b = parseInt(a) + (5*YY/4)
    var c = parseInt(b) + (26*(MM+1)/10)
    var d = parseInt(c) + DD

    var weekDay = d%7*/
    console.log(weekDay)

    if (weekDay === 0){
        day = "Sunday"
        return day;
    }else if(weekDay === 1){
        day = "Monday";
        return day;
    }else if(weekDay === 2){
        day = "Tuesday";
        return day;
    }else if(weekDay === 3){
        day = "Wednesday";
        return day;
    }else if(weekDay === 4){
        day = "Thursday";
        return day;
    }else if(weekDay === 5){
        day = "Friday";
        return day;
    }else if(weekDay === 6){
        day = "Saturday"
        return day;
    }else {
        day = "We are out of days of the week!!!"
        return day;
    }
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
    let maleNameList = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    let femaleNameList = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    
    if (gender==='male' && weekDay==='Sunday'){
        var userName = maleNameList[0]
        response = `Your Akan name is ${userName}!! &#128512;`
        document.getElementById('display-name').innerHTML = response
    }else if(gender==='male' && weekDay==='Monday'){
        var userName = maleNameList[1]
        response = `Your Akan name is ${userName}!! &#128512;`
        document.getElementById('display-name').innerHTML = response
    }else if(gender==='male' && weekDay==='Tuesday'){
        var userName = maleNameList[2]
        response = `Your Akan name is ${userName}!! &#128512;`
        document.getElementById('display-name').innerHTML = response
    }else if(gender==='male' && weekDay==='Wednesday'){
        var userName = maleNameList[3]
        response = `Your Akan name is ${userName}!! &#128512;`
        document.getElementById('display-name').innerHTML = response
    }else if(gender==='male' && weekDay==='Thursday'){
        var userName = maleNameList[4]
        response = `Your Akan name is ${userName}!! &#128512;`
        document.getElementById('display-name').innerHTML = response
    }else if(gender==='male' && weekDay==='Friday'){
        var userName = maleNameList[5] 
        response = `Your Akan name is ${userName}!! &#128512;`
        document.getElementById('display-name').innerHTML = response
    }else if(gender==='male' && weekDay==='Saturday'){
        var userName = maleNameList[6]
        response = `Your Akan name is ${userName}!! &#128512;`
        document.getElementById('display-name').innerHTML = response
    }else if(gender==='female' && weekDay==='Sunday'){
        var userName = femaleNameList[0]
        response = `Your Akan name is ${userName}!!&#128512;`
        document.getElementById('display-name').innerHTML = response
    }else if(gender==='female' && weekDay==='Monday'){
        var userName = femaleNameList[1]
        response = `Your Akan name is ${userName}!! &#128512;`
        document.getElementById('display-name').innerHTML = response
    }else if(gender==='female' && weekDay==='Tuesday'){
        var userName = femaleNameList[2]
        response = `Your Akan name is ${userName}!! &#128512;`
        document.getElementById('display-name').innerHTML = response
    }else if(gender==='female' && weekDay==='Wednesday'){
        var userName = femaleNameList[3]
        response = `Your Akan name is ${userName}!! &#128512;`
        document.getElementById('display-name').innerHTML = response
    }else if(gender==='female' && weekDay==='Thursday'){
        var userName = femaleNameList[4]
        response = `Your Akan name is ${userName}!! &#128512;`
        document.getElementById('display-name').innerHTML = response
    }else if(gender==='female' && weekDay==='Friday'){
        var userName = femaleNameList[5]
        response = `Your Akan name is ${userName}!! &#128512;`
        document.getElementById('display-name').innerHTML = response
    }else if(gender==='female' && weekDay==='Saturday'){
        var userName = femaleNameList[6]
        response = `Your Akan name is ${userName}!! &#128512;`
        document.getElementById('display-name').innerHTML = response
    }else{
        var userName = alert('Data entered is invalid, please try again.')
        hideForm.style.display = "block";
    }
    console.log(gender, weekDay)
}

