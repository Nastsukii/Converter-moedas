let convertButton = document.querySelector('.convert-button')
let currencySelect = document.querySelector('.currency-select')

async function convertValues() {
    let inputCurrencyValue = document.querySelector('.input-currency').value
    let currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    let currencyValueconverted = document.querySelector('.currency-value')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())
    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const bitcoinToday = data.BTCBRL.high
    const libraToday = 6.19

    console.log(currencySelect.value)

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

