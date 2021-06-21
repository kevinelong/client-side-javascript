document.addEventListener("DOMContentLoaded",()=>{
    let fruit = ["apple","orange","cherry"];
    let select = document.createElement("select");
    for(let i = 0; i < fruit.length; i++){
        let option = document.createElement("option");
        option.innerHTML = fruit[i];
        select.appendChild(option);
    }
    document.body.appendChild(select);

    let input = document.createElement("input");
    input.setAttribute("id","text");
    document.body.appendChild(input);

    let button = document.createElement("button");
    button.innerHTML = "Add Fruit";
    button.addEventListener("click",()=>{
        let option = document.createElement("option");
        option.innerHTML = input.value;
        select.appendChild(option);
    });
    document.body.appendChild(button);
});