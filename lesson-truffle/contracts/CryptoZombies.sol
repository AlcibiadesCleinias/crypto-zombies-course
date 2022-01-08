pragma solidity ^0.4.24;

import "./zombieownership.sol";

/// @title ZombieOwnership with Self-destraction
/// @dev At least for testing purpose...
contract CryptoZombies is ZombieOwnership {

  function kill() public onlyOwner {
    selfdestruct(owner());
  }
}
