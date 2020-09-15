var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'clerk naive chunk title business dog boat party polar foster crowd pluck';
var address = "0xcDe5D806BC748A04f955E78357Bc1A00c59cFc1F"
module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        },
        ropsten: {
            provider: function() {
                return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/bfe1a01620f94859800bf2f29b5fbe1b")
            },
            network_id: 3,
            gas: 3012388,
            from: address,
            gasPrice: 30000000000
        }
    }
};
