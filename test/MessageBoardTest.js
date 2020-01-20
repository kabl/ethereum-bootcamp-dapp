var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var MessageBoard = artifacts.require("./MessageBoard.sol");

contract("MessageBoardTest", accounts => {
  var owner = accounts[0];
  var user1 = accounts[1];
  var user2 = accounts[2];

  it("set and get", async function() {
    var instance = await MessageBoard.new();

    const amount = "1000000000000000000";
    await instance.setMessage("Hello World"); // 18 decimals..

    var msg = (await instance.getMessage()).toString();

    assert.equal(msg, "Hello World");
  });
});
