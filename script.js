const form = document.getElementById("calc_form");
const output = document.getElementById("output");
const operand_btn = document.querySelectorAll("button[data-type=operand]");

let is_operator = false;

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

// loop over operand buttons with click event
operand_btn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        console.log(btn.innerHTML)
    })
})