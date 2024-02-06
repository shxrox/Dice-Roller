function rollDice() {
    const numOfDice = document.getElementById("numofdice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImg = document.getElementById("diceImg");
    
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="img/${value}.png">`);
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImg.innerHTML = images.join('');
}
