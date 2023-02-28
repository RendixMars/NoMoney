let dice = {
    sides: 6,
    roll: function () {
      let randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
}

function printNum(num) {
    let placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = num;
}

let button = document.getElementById('')