//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

interface Erc20 {
    function approve(address, uint256) external returns (bool);

    function transfer(address, uint256) external returns (bool);

    function transferFrom(
        address,
        address,
        uint256
    ) external returns (bool);

    function balanceOf(address) external view returns (uint256);
}

contract Wallet {
    address _owner;
    address[] _guradians;
    address[] allowedWithdrawalAddresses;

    constructor(
        address owner,
        address[] memory guradians
    ) {
        _owner = owner;
        _guradians = guradians;
        allowedWithdrawalAddresses.push(_owner);
    }

    function addAllowedWithdrawalAddress(address withdrawalAddress) external returns (bool success) {
      require(msg.sender == _owner, "Restricted action!");
      require(!isAddressAllowed(withdrawalAddress), "Address already allowed");

      allowedWithdrawalAddresses.push(withdrawalAddress);
      return true;
    }

    function isAddressAllowed(address withdrawalAddress) private view returns (bool allowed) {
      for(uint i=0; i<allowedWithdrawalAddresses.length; i++) {
        if(allowedWithdrawalAddresses[i] == withdrawalAddress) {
          return true;
        }
      }
      return false;
    }
}
