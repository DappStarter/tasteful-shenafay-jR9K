require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remind home grace indoor flower sentence'; 
let testAccounts = [
"0x6f25dfd555533f1431b3a05fb030698fac66b5a41f95fc6696062c31aa866394",
"0xaec813f620ec10058abdd99567eeeb46f77be02263f054412b46748b515d589a",
"0x91ba220d41988fdc7bb1784c9f7a45ab985d240ebc1d20983766ce7ab6041fa0",
"0x9151396284cb80114a30a122809e1cb6a40b306399c5515f024a648ba2de9c6e",
"0x9db80cfb2221063c6b567676b80bd256fa810419ffbacf0309f4f93753fd3a64",
"0x785254d63a24eb875fba5044eca57760cbe75c5570a134f4fe87948643fdf729",
"0xf91b757688c91fe0529b124a7f1c50906ef03288c26f00fbca24e33db0b0ef9c",
"0x897f75b2a37c9a317d84b63aa53043140631f534559169739cbef87e0f685718",
"0x8cedeedf6cf07b64e16d02e74082838f4f729b556f9593a9106e26b2e845bc2c",
"0xf6035ec3b3959e2dd3358d4f6c33a115ad53e1e2ccda88b4063abcf0bfe0b745"
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

