function gemsToDiamond(first, second, third) {
    if (typeof first !== 'number' || typeof second !== 'number' || typeof third !== 'number') {
        return "please provide number"
    }
    else if (first <= 0 || second <= 0 || third <= 0) {
        return "please provide number"
    }
    else if (first % 1 != 0 || second % 1 != 0 || third % 1 != 0) {
        return "please provide number"
    }
    const firstGems = 21 * first;
    const secondGems = 32 * second;
    const thirdGems = 43 * third;
    let totalGems = firstGems + secondGems + thirdGems;
    if (totalGems <= 2000) {
        return totalGems;

    }
    else {
        const result = totalGems - 2000;
        return result;
    }
}
console.log(gemsToDiamond(100, 5, 1));
