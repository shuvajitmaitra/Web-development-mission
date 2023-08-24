let total = 0;
function handleCLikBtn(target) {
    const itemList = document.getElementById('selected-items');
    const item = target.parentNode.childNodes[1].innerText;
    const list = document.createElement("li");

    list.innerText = item;
    // if () {
    // }
    itemList.appendChild(list);

    const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
    total = parseInt(total) + parseInt(price);
    document.getElementById('total').innerText = total;
}