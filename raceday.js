let raceNumber = Math.floor(Math.random() * 1000);

let registered = true;

let runnerAge = Math.round(Math.random()*60);
// let runnerAge = 18

if(registered && runnerAge > 18){
    raceNumber += 1000;
}

if(registered===true && runnerAge > 18){
    console.log(`${raceNumber} starts at 9.30 am`);
} else if (registered === false && runnerAge > 18){
    console.log(`${raceNumber} starts at 11.00 am`);
} else if ( (registered === true || registered === false) &&  runnerAge < 18){
    console.log(`${raceNumber} starts at 12.30 pm`);
} else {
    console.log(`You are ${runnerAge} , please see registration desk`);
}

