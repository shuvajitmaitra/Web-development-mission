function average(assignment1, assignment2, assignment3){
    const average = (assignment1 + assignment2 + assignment3)/3;
    return average;
}

const assignment1Marks = 60;
const assignment2Marks = 56;
const assignment3Marks = 58;

const totalAverage = average(assignment1Marks, assignment2Marks, assignment3Marks);

console.log('average mark paici: ', totalAverage);
