// Paper requirement 
function paperRequirements(one, two, three) {
    if (typeof one !== 'number' || typeof two !== 'number' || typeof three !== 'number') {
        return 'Please Provide a number';
    }

    const totalPageRequirement = (one * 100) + (two * 200) + (three * 300);
    return totalPageRequirement;

}

console.log(paperRequirements(1, 1, 1));
