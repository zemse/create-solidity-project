pragma solidity ^0.5.11;

contract SimpleStorage {
    string _value;

    event ValueChanged(address indexed author, string oldValue, string newValue);

    constructor(string memory value) public {
        emit ValueChanged(msg.sender, _value, value);
        _value = value;
    }

    function getValue() view public returns (string memory) {
        return _value;
    }

    function setValue(string memory value) public {
        emit ValueChanged(msg.sender, _value, value);
        _value = value;
    }
}
