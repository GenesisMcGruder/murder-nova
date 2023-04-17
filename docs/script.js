const input = document.getElementById('button');
function addingEventListener(input) {
    input.addEventListener('click',function() {
        alert('I was clicked!');
    })
}

addingEventListener(input)

const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);