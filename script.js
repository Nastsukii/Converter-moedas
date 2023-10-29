let convertButton = document.querySelector('.convert-button')
let currencySelect = document.querySelector('.currency-select')

function convertValues() {
    let inputCurrencyValue = document.querySelector('.input-currency').value
    let currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    let currencyValueconverted = document.querySelector('.currency-value')

    console.log(currencySelect.value)

    let dolarToday = 5.2
    let euroToday = 6.2
    

    if(currencySelect.value == 'dolar'){
        currencyValueconverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == 'euro'){
        currencyValueconverted.innerHTML = new Intl.NumberFormat('de-De', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)
}

function changeCurrency(){
    let currencyName = document.getElementById('currency-name')
    let currencyImage = document.querySelector('.currency-img')
    
    if(currencySelect.value == 'dolar'){
        currencyName.innerHTML = 'Dólar Americano'
        currencyImage.src = './assets/estados-unidos (1) 1.png'
    }
    if(currencySelect.value == 'euro'){
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }

    convertValues()
}

currencySelect.addEventListener('change',changeCurrency )
convertButton.addEventListener('click', convertValues)

