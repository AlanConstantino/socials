const btcAddress  = document.getElementById('btc');
const dogeAddress = document.getElementById('doge');
const ethAddress  = document.getElementById('eth');
const xmrAddress  = document.getElementById('xmr');
const usdcAddress = document.getElementById('usdc');

const cryptoAddresses = [btcAddress, dogeAddress, ethAddress, xmrAddress, usdcAddress];
cryptoAddresses.forEach(address => {
    address.addEventListener('click', () => {
        navigator.clipboard.writeText(address.innerText).then(() => {
            console.log('successfully copied to clipboard'); 
        }, (err) => {
            console.log(`error occured: ${err}`);
        });
    })
});