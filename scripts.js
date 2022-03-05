/*

Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
 where;
 CC - is the century digits. For example 1989 has CC = 19
 YY - is the Year digits (1989 has YY = 89)
 MM -  is the Month
 DD - is the Day of the month 
 mod - is the modulus function ( % )

 0 -Sun, 1-Mon, 2-Tue ,3-Wed , 4-Thur , 5-Fri , 6-Sat

*/

function dayOfTheWeek(){

    var DD = document.getElementById('day').value
    var MM = document.getElementById('month').value
    var year = document.getElementById('year').value

    var CC = parseInt(year.substring(0,2)) //Extract 19 from 1976 i.e century digits
    var YY = parseInt(year.substring(2,4)) //Extract 76 from 1976 i.e year digits

    var weekDay = parseInt(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7)

    if (weekDay === 0){
        day = "Sunday";
    }else if(weekDay === 1){
        day = "Monday";
    }else if(weekDay === 2){
        day = "Tuesday";
    }else if(weekDay === 3){
        day = "Wednesday";
    }else if(weekDay === 4){
        day = "Thursday";
    }else if(weekDay === 5){
        day = "Friday";
    }else if(weekDay === 6){
        day = "Saturday"
    }else {
        day = "What the hell just happened!!!"
    }

    console.log(year, weekDay)
    console.log(day)
}

function genderMale(){
    var male = document.getElementById('male').value
    return male
}

function genderFemale(){
    var female = document.getElementById('female').value
    return female
}
