// interest formula s.i = prt/100;
// s.i = simple interest;
// p = principle amount;
// r = rate of interest out of 100%;
// t = time period;

// Simple Interest Calculation
function getInterest(p, r, t) {
    const myInterest = (p * r * t) / 100;
    return myInterest;
}

const givenPrinciple = 15000; // your real amount which you will invest
const givenRate = 10; // rate of interest out of 100%
const givenTime = 2; // years
const simpleInterest = getInterest(givenPrinciple, givenRate, givenTime);
console.log('My interest amount is', simpleInterest, 'taka!!!');



