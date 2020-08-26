async function get_TRX_ZLF(){
    const response =await fetch('https://nolexserver.com/api/v1/tickers?ticker_id=ZLF_TRX');
    const data = await response.json();
    const price_ZLF = data.last_price;
    document.getElementById('ZLF').textContent = price_ZLF;
};

async function get_ZLF_INR(){
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://api.wazirx.com/api/v2/tickers'
    const response =await fetch(proxyUrl + targetUrl);
    const data = await response.json();
    const price_INR = data.trxinr.last;
    document.getElementById('INR').textContent = price_INR;
    };

get_TRX_ZLF();
get_ZLF_INR();