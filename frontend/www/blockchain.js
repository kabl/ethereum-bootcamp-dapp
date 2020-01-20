var web3 = new Web3(window.ethereum || "ws://localhost:8545");
var defaultAddress = null;
var contractInstance = null;
var eventCounter = 0;

window.ethereum.enable().then(function (addresses) {
    defaultAddress = addresses[0];
    console.log("Your Address:", defaultAddress);
});

init = function () {
    var address = document.getElementById('contractAddress').value;
    console.log("Smart contract address:", address);
    contractInstance = new web3.eth.Contract(ABI, address, {
        from: defaultAddress, // default senders address
        gasPrice: '20000000000' // default gas price in wei (20 GWei)
    });

    contractInstance.events.allEvents(eventCallback);
}

writeData = function () {
    var message = document.getElementById('message').value;
    console.log("Write Data:", message);
    //     var erc20 = await blockchain.getERC20Instance(erc20address);
    // await contractInstance.methods.setMessage(message).send();

    contractInstance.methods.setMessage(message).send().then(function (receipt) {
        console.log(receipt);
    });
}

readData = async function() {
    console.log("Read data");
    var message = await contractInstance.methods.getMessage().call();
    document.getElementById('message').value = message;
}

clearText = function () {
    document.getElementById('message').value = "";
}

eventCallback = function (error, result) {
    if (error) console.error("error:", error)
    if (result) {
        var from = result.returnValues.from;
        var event = result.event;
        var msg = result.returnValues[1];
        var message = "EventNbr: " + eventCounter++ + ", from: " + from + ", event: " + event + ", msg: " + msg;
        showMessage(message);
    }
}

showMessage = function (message) {
    console.log(message);
    var node = document.createElement("div");
    node.className = "alert alert-success";
    var textnode = document.createTextNode(message);
    node.appendChild(textnode);
    var list = document.getElementById("events");
    list.insertBefore(node, list.childNodes[0]);
}


// async readData(tokenaddress) {
//     var coinbase = await web3.eth.getCoinbase();
//     var erc20Instance = await blockchain.getERC20Instance(tokenaddress);
//     var balance = await erc20Instance.methods.balanceOf(coinbase).call();
//     return erc20;
// };