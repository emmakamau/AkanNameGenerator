
//Function to get the day of the week from dates
function dayOfTheWeek(){

    var DD = document.getElementById('day').value
    var MM = document.getElementById('month').value
    var year = document.getElementById('year').value

    var CC = parseInt(year.substring(0,2)) //Extract 19 from 1976 i.e century digits
    var YY = parseInt(year.substring(2,4)) //Extract 76 from 1976 i.e year digits

    var weekDay = parseInt(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7)

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
        day = "What the hell just happened!!!"
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

function akanName(){
    let gender = userGender()
    let weekDay = dayOfTheWeek()
    console.log(gender, weekDay)
}
