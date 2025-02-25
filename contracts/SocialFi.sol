// contracts/SocialFi.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract SocialFiGame {
    struct User {
        string name;
        address[] friends;
        uint256 score;
    }

    mapping(address => User) public users;
    mapping(address => mapping(address => bool)) public friendRequests;

    event FriendRequestSent(address indexed from, address indexed to);
    
    function createProfile(string memory _name) external {
        require(bytes(_name).length > 0, "Name required");
        users[msg.sender].name = _name;
    }

    function sendFriendRequest(address _to) external {
        require(_to != msg.sender, "Cannot add self");
        friendRequests[msg.sender][_to] = true;
        emit FriendRequestSent(msg.sender, _to);
    }
}