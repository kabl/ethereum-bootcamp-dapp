import Web3 from 'web3';
import abi from './messageBoard.abi';

var web3 = new Web3(window.ethereum || "ws://localhost:8545");
var defaultAddress = null;
var contractInstance = null;
var eventCounter = 0;

window.ethereum.enable().then(function (addresses) {
    defaultAddress = addresses[0];
    console.log("Your Address:", defaultAddress);
});

var blockchain = {
    init(address) {
        console.log("Smart contract address:", address);
        contractInstance = new web3.eth.Contract(abi, address, {
            from: defaultAddress, // default senders address
            gasPrice: '20000000000' // default gas price in wei (20 GWei)
        });

       // contractInstance.events.allEvents(eventCallback);
    },

    async writeData(message) {
        console.log("Write Data:", message);
        await contractInstance.methods.setMessage(message).send();
    },

    async readData() {
        console.log("Read data");
        var message = await contractInstance.methods.getMessage().call();
        return message;
    },

    eventCallback(error, result) {
        if (error) console.error("error:", error)
        if (result) {
            var from = result.returnValues.from;
            var event = result.event;
            var msg = result.returnValues[1];
            var message = "EventNbr: " + eventCounter++ + ", from: " + from + ", event: " + event + ", msg: " + msg;
            console.log(message);
            // showMessage(message);
        }
    },
}

export default blockchain;