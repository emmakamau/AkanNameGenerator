
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

/*
Male Names
Sunday:Kwasi Monday:Kwadwo Tuesday:Kwabena Wednesday:Kwaku Thursday:Yaw Friday:Kofi Saturday:Kwame

Female Name
Sunday:Akosua Monday:Adwoa Tuesday:Abenaa Wednesday:Akua Thursday:Yaa Friday:Afua Saturday:Ama
 */

function akanName(){
    let gender = userGender()
    let weekDay = dayOfTheWeek()

    let maleNameList = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    let femaleNameList = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    
    if (gender==='male' && weekDay==='Sunday'){
        var userName = maleNameList[0]
        response = `Your Akan name is ${userName}!!`
        document.getElementById('display-name').innerHTML = response
        console.log(userName)
    }else if(gender==='male' && weekDay==='Monday'){
        var userName = maleNameList[1]
        response = `Your Akan name is ${userName}!!`
        document.getElementById('display-name').innerHTML = response
        console.log(userName)
    }else if(gender==='male' && weekDay==='Tuesday'){
        var userName = maleNameList[2]
        response = `Your Akan name is ${userName}!!`
        document.getElementById('display-name').innerHTML = response
        console.log(userName)
    }else if(gender==='male' && weekDay==='Wednesday'){
        var userName = maleNameList[3]
        response = `Your Akan name is ${userName}!!`
        document.getElementById('display-name').innerHTML = response
        console.log(userName)
    }else if(gender==='male' && weekDay==='Thursday'){
        var userName = maleNameList[4]
        response = `Your Akan name is ${userName}!!`
        document.getElementById('display-name').innerHTML = response
        console.log(userName)
    }else if(gender==='male' && weekDay==='Friday'){
        var userName = maleNameList[5]
        response = `Your Akan name is ${userName}!!`
        document.getElementById('display-name').innerHTML = response
        console.log(userName)
    }else if(gender==='male' && weekDay==='Saturday'){
        var userName = maleNameList[6]
        response = `Your Akan name is ${userName}!!`
        document.getElementById('display-name').innerHTML = response
        console.log(userName)
    }else if(gender==='female' && weekDay==='Sunday'){
        var userName = femaleNameList[0]
        response = `Your Akan name is ${userName}!!`
        document.getElementById('display-name').innerHTML = response
        console.log(userName)
    }else if(gender==='female' && weekDay==='Monday'){
        var userName = femaleNameList[1]
        response = `Your Akan name is ${userName}!!`
        document.getElementById('display-name').innerHTML = response
        console.log(userName)
    }else if(gender==='female' && weekDay==='Tuesday'){
        var userName = femaleNameList[2]
        response = `Your Akan name is ${userName}!!`
        document.getElementById('display-name').innerHTML = response
        console.log(userName)
    }else if(gender==='female' && weekDay==='Wednesday'){
        var userName = femaleNameList[3]
        response = `Your Akan name is ${userName}!!`
        document.getElementById('display-name').innerHTML = response
        console.log(userName)
    }else if(gender==='female' && weekDay==='Thursday'){
        var userName = femaleNameList[4]
        response = `Your Akan name is ${userName}!!`
        document.getElementById('display-name').innerHTML = response
        console.log(userName)
    }else if(gender==='female' && weekDay==='Friday'){
        var userName = femaleNameList[5]
        response = `Your Akan name is ${userName}!!`
        document.getElementById('display-name').innerHTML = response
        console.log(userName)
    }else if(gender==='female' && weekDay==='Saturday'){
        var userName = femaleNameList[6]
        response = `Your Akan name is ${userName}!!`
        document.getElementById('display-name').innerHTML = response
        console.log(userName)
    }else{
        var userName = alert('Data entered is invalid, please try again.')
    }
    console.log(gender, weekDay)
}
