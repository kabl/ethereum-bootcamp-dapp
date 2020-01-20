const MessageBoard = artifacts.require("./MessageBoard.sol");

module.exports = function (deployer, network) {
    deployer.then(async () => {
        if (network === "development") {
            const instance = await deployer.deploy(MessageBoard);
            console.log("MessageBoard Contract: " + instance.address);
        } else if (network === "rinkeby") {
            const instance = await deployer.deploy(MessageBoard);
            console.log("MessageBoard Contract: " + instance.address);
        } else {
            console.log("Network is not yet configured. Network:", network);
        }
    });
};
