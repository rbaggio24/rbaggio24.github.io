function calcAmount() {
    let price = 1200;
    let extra = document.querySelector('input[type="radio"]:checked');
    let sauce = document.querySelector('#sauce');
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amount = parseInt(amountInput.value) * price + parseInt(extra.value) + parseInt(sauce.value);
    showAmount.innerHTML = amount;
}