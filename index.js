
// Code your solution here
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// initialize the variable totalBatteries to the result of calling the reduce() method on the batteryBatches array
// the reduce() method takes two arguments: a callback function and an initial value for the accumulator
// the callback function takes two arguments: the accumulator and the current value being processed
// in this case, we're simply adding the current value to the accumulator.
// the second argument to reduce() is an initial value for the accumulator, which we've set to 0
// when we call reduce() on the batteryBatches array with this callback function and initial value, it will iterate over each element of the array and add it to the accumulator, which starts at 0. 
// the final value of the accumulator will be the sum of all the elements in the array, which we assign to the variable totalBatteries.