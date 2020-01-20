pragma solidity ^0.5.11;

contract MessageBoard {
    string private _message;

    event newMessage(address indexed from, string message);

    function setMessage(string memory message) public returns (bool) {
        _message = message;
        emit newMessage(msg.sender, message);
        return true;
    }

    function getMessage() public view returns (string memory) {
        return _message;
    }
}
