pragma solidity ^0.4.24;

import "./zombieownership.sol";

contract CryptoZombies is ZombieOwnership {

  /// @title Self-destraction
  /// @dev At least for testing purpose...
  function kill() public onlyOwner {
    selfdestruct(owner());
  }
}
