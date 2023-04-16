const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click',function() {
        alert('I was clicked!');
    })
}
