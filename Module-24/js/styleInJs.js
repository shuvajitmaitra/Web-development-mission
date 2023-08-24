const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid black';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.padding = '20px';
    section.style.backgroundColor = 'lightgreen';

}

const header = document.getElementById('header-container');
header.style.color = 'red';
header.style.textAlign = 'center';

header.classList.add('yellow-bg');