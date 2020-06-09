function calcAmount() {
    let price = 1900;
    let amountNumber = parseInt(document.querySelector("input[name='amount-input']").value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    showSumPrice(price, amountNumber);
    validateData(amountNumber);
};

function showSumPrice(price, amountNumber) {
    let extra = document.querySelector('input[type="radio"]:checked');
    document.querySelector("span.show-amount").innerHTML = addTakeAway(parseInt(amountNumber) * (price + parseInt(extra.value) + parseInt(sauce.value)));
};

function addTakeAway(total) {
    return (total < 5000) ? total += 500 : total;
};

function validateData(amountNumber) {
    const name = document.querySelector("input[name='name']").value.trim();
    const email = document.querySelector('#email').value.trim();
    const address = document.querySelector('#address').value.trim();
    const comment = document.querySelector('#comment').value.trim();
    if (!name) {
        alert("A név megadása kötelező");
    } else if ((!email) || (email.indexOf('@') < 0)) {
        alert("Invalid email");
    } else if (address.length < 10) {
        alert("írj már be egy normális címet");
    } else if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if (amountNumber < 1) {
        alert("Na ne szórakozz!");
    } else {
        let message = document.querySelector("#message");
        return message;
    }
};