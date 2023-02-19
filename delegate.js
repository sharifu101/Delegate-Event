// delete
const items = document.getElementsByClassName('item');
for (const item of items) {
    item.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    });
}
// Addd
document.getElementById('add-item').addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = 'Brand New Item';
    const parent = document.getElementById('item-container');
    parent.appendChild(li);
})