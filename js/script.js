{

    const calculateResult = (currency, amount) => {
        const EUR = 4.75;
        const HUF = 1.17;
        const CZK = 0.19;

        switch (currency) {
            case "EUR":
                return amount / EUR;

            case "HUF":
                return amount / HUF;

            case "CZK":
                return amount / CZK;
        }
    };

    const updateResult = (currency, amount, result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    }

    const formSubmit = (event) => {
        event.preventDefault();


        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const currency = currencyElement.value;
        const amount = +amountElement.value;

        const result = calculateResult(currency, amount);

        updateResult(currency, amount, result);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", formSubmit);
    };

    init();
}

