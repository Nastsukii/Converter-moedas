let convertButton = document.querySelector('.convert-button')
let currencySelect = document.querySelector('.currency-select')

function convertValues() {
    let inputCurrencyValue = document.querySelector('.input-currency').value
    let currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    let currencyValueconverted = document.querySelector('.currency-value')

    console.log(currencySelect.value)

    let dolarToday = 5.2
    let euroToday = 6.2
    let libraToday = 6.6
    let bitcoinToday = 50000

    if(currencySelect.value == 'dolar'){
        currencyValueconverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }
    if(currencySelect.value == 'libra'){
        currencyValueconverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday)
    }
    if(currencySelect.value == 'bitcoin'){
        currencyValueconverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue / bitcoinToday)
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
    if(currencySelect.value == 'libra'){
        currencyName.innerHTML = 'Libra'
        currencyImage.src = './assets/libra 1.png'
    }
    if(currencySelect.value == 'bitcoin'){
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = './assets/bitcoin .png'
    }

    convertValues()
}

currencySelect.addEventListener('change',changeCurrency )
convertButton.addEventListener('click', convertValues)

