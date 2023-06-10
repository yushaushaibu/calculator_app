const form = document.getElementById("calc_form");
const output = document.getElementById("output");
const operand_btns = document.querySelectorAll("button[data-type=operand]");

let is_operator = false;

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

// Loop over operand buttons with click event that displays button number
operand_btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (output.value === "0") {
            output.value = e.target.value;
        } else if (is_operator) {
            is_operator = false;
            output.value = e.target.value;
        } else if (output.value.includes(".")) {
            output.value = output.value + "" + e.target.value.replace(".", "");
        } else {
            output.value = output.value + "" + e.target.value;
        }
    });
});