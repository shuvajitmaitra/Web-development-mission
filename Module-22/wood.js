function woodCalculation(chairRequires, tableRequires, bedRequires) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = perChairWood * chairRequires;
    const tableWood = perTableWood * tableRequires;
    const bedWood = perBedWood * bedRequires;
    const totalRequires = chairWood + tableWood + bedWood;

    return totalRequires;
}

const woodRequires = woodCalculation(1, 1, 1);

console.log('Total wood needed: ', woodRequires, 'cft');
