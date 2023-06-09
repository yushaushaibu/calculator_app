const form = document.getElementById("calc_form");
const output = document.getElementById("output");
const operand_btns = document.querySelectorAll("button[data-type=operand]");
const operator_btns = document.querySelectorAll("button[data-type=operator]");

let is_operator = false;
let equation = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

function removeActive() {
    operator_btns.forEach(btn => {
        btn.classList.remove("active")
    });
};

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

// Loop over operators with click events that operate on operands
operator_btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        removeActive();
        e.currentTarget.classList.add("active");

        switch (e.target.value) {
            case "%":
                output.value = parseFloat(output.value) / 100;
                break;
            case "invert":
                output.value = parseFloat(output) * -1;
                break;
            case "=":
                equation.push(output.value);
                output.value = eval(equation.join(""));
                equation = [];
                break;
            default:
                let last_item = equation[equation.length - 1];
                if (["/", "*", "+", "-"].includes(last_item) && is_operator) {
                    equation.pop();
                    equation.push(e.target.value);
                } else {
                    equation.push(output.value);
                    equation.push(e.target.value);
                }
                is_operator = true;
                break;
        }
    });
});