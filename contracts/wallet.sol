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
    address[] _guardians;
    address[] _allowedWithdrawalAddresses;

    modifier isOwner() {
        require(msg.sender == _owner, 'Restricted action!');
        _;
    }

    constructor(address owner, address[] memory guradians) {
        _owner = owner;
        _guardians = guradians;
        _allowedWithdrawalAddresses.push(_owner);
    }

    function addAllowedWithdrawalAddress(address withdrawalAddress)
        external
        isOwner()
        returns (bool success)
    {
        require(
            !_isAddressAllowed(withdrawalAddress),
            'Address already allowed'
        );

        _allowedWithdrawalAddresses.push(withdrawalAddress);
        return true;
    }

    // For security reasons only the owner can see who the guardians are
    function getGuardians()
        external
        view
        isOwner()
        returns (address[] memory guardians)
    {
        return _guardians;
    }

    function addGuardian(address newGuardian)
        external
        isOwner()
        returns (bool success)
    {
        _guardians.push(newGuardian);

        return true;
    }

    function isAddressAllowed(address withdrawalAddress)
        external
        view
        returns (bool allowed)
    {
        return _isAddressAllowed(withdrawalAddress);
    }

    function _isAddressAllowed(address withdrawalAddress)
        private
        view
        returns (bool allowed)
    {
        for (uint256 i = 0; i < _allowedWithdrawalAddresses.length; i++) {
            if (_allowedWithdrawalAddresses[i] == withdrawalAddress) {
                return true;
            }
        }
        return false;
    }
}
