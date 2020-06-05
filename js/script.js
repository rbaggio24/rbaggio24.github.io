function calcAmount() {
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const address = document.querySelector('#address').value.trim();
    const comment = document.querySelector('#comment').value.trim();
    let price = 1200;
    let extra = document.querySelector('input[type="radio"]:checked');
    let sauce = document.querySelector('#sauce');
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);

    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if (amountNumber < 1) {
        alert("Na ne szórakozz!");
    } else if (!name) {
        alert("A név megadása kötelező");
    } else {
        let message = document.querySelector("#message");
        let amount = parseInt(amountInput.value) * price + parseInt(extra.value) * parseInt(amountInput.value) + parseInt(sauce.value) * parseInt(amountInput.value);
        showAmount.innerHTML = amount;
    }
}