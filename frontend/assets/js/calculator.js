const form = document.getElementById("calculatorForm");

form.addEventListener("submit",
    function (event) {
        event.preventDefault();

        const form = event.target;

        const resultCalculate = document.getElementById("resultCalculate");

        const firstNumber = parseInt(form.buttonNumberOne.value);
        const secondNumber = parseInt(form.buttonNumberTwo.value);

        let result = 0;

        switch (form.operation.value.toString()) {
            case '/':
                result = firstNumber / secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            default:
                break;
        }

        resultCalculate.textContent = result;

        resultCalculate.removeAttribute("hidden");
    }
);