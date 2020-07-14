// If we don’t sleep enough, we accumulate sleep debt. 
// In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.
// The program will determine the actual and ideal hours of sleep for each night of the last week.
// Finally, it will calculate, in hours, how far you are from your weekly sleep goal.

const getSleepHours = day => {
    if(day === 'monday'){
        return 8;
    } else if(day === 'tuesday'){
        return 8;
    } else if(day === 'wednesday'){
        return 8;
    } else if(day === 'thursday'){
        return 8;
    } else if(day === 'friday'){
        return 8;
    } else if(day === 'saturday'){
        return 8;
    } else {
        return 8;
    }
}

// console.log(getSleepHours('tuesday'));

const getActualSleepHours = () => {
    let dayArr = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
    let total = 0;
    for(let i = 0; i < dayArr.length;i++){
        hours = getSleepHours(dayArr[i]);
        total += hours;
    }
    return total;
}

// console.log(getActualSleepHours());

const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7 ;
}

console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week

console.log(getIdealSleepHours()); // if idealHours is 8, should print 56


const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours){
        console.log(`${actualSleepHours} hours, Perfect Amount of Sleep`);
    }else if(actualSleepHours >= idealSleepHours){
        console.log(`${actualSleepHours} hours , User get more sleep than needed`);
    }else {
        console.log(`${actualSleepHours} hours ,User should get some rest`);
    }
}

calculateSleepDebt() 
