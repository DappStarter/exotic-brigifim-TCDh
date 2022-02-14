require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy raise situate coconut harvest crew forget gate'; 
let testAccounts = [
"0xaffe3abf8af984bab356fb76936066bd541329a2b4301c4c54f99ffe1d201023",
"0x1cdc1c8e57fc9c0c1c0cdb3280c89dbcf37b861a65e0ac97e96b03aa3706f62c",
"0xaba7831e005ff79f9e35bb1faf5eeb86ce03e5279a229bbbe04101a11a223a8a",
"0x2a63db6622bb9eb63d4730e967e40513ca0f2696a3d9922afa6d787c29f21214",
"0xb59f832837c66d2a7cc884b4dff543ad8a482391a361ec7b7e1352db4f07e653",
"0x02e85b34199f85d5032cd900a9f2a2658ff632ec90cfac87e13b898b88092ba5",
"0xdc897646f02eab2b7b36216a165dfda5baf443e0aac96fb483f9916e7a7e418a",
"0xc566ed0b0b0ecddbf5cb4beceae9ce6b5b605a6487e36d1dfa9b03d42f5e1f0e",
"0xadc6fe6075d34227ff2392b1a59ce97da229cb07154d55a163b53c0f20f939ee",
"0x2861f55aa8a987aac7a197149dc0c426416f06fc6125c0383cf53b65d025db99"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

