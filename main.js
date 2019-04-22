document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("add").onclick = () => {
        var input = document.getElementById("new-todo").value;
        if (input == "") {
            alert("no input")
        }
        else {
            add_element(input, undefined);
        }
    }

    if (!("i" in localStorage)) {
        localStorage.setItem("i", 0);
    }


for (const key in localStorage) {
    if (parseInt(key)) {
        add_element(localStorage[key], key)
    }
}

});

function add_element(input, register) {
    const new_el = document.createElement('li');
    if (!register) {
        i = parseInt(localStorage["i"]);
        new_el.dataset.id = i;
        localStorage.setItem(i, input);
        i++;
        localStorage["i"] = i;
    }
    else {
        new_el.dataset.id = register;
    }
    new_el.innerHTML = input;
    document.getElementById("todo-list").appendChild(new_el);
    const new_span = document.createElement('span');
    new_el.appendChild(new_span);
    new_span.className = "delete";
    new_span.innerHTML = "x";
    new_span.onclick = () => {
        new_span.parentNode.style.display = "none";
        localStorage.removeItem(new_span.parentNode.dataset.id);
    }
}