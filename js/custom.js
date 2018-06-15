
let factDiv = document.getElementById('fact');
factDiv.style.display = 'none';
let numberInput = document.getElementById('numberInput');
let factText = document.getElementById('factText');

numberInput.addEventListener('input', fetchFact);

function fetchFact()
{
    let numberInputValue = numberInput.value;

    fetch('http://numbersapi.com/'+numberInputValue)
    .then(response => response.text())
    .then(data => {
        if(numberInputValue!=''){
            factDiv.style.display = 'block';
            factText.innerText = data;

        }
    })
    .catch(err => console.log(err));

}

