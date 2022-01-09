const EthPriceOracle = artifacts.require('EthPriceOracle')

module.exports = function (deployer) {
  deployer.deploy(EthPriceOracle, '0x289aa39012ab1cb8f722bc469c25a380b681addb')  // via caller priv. key
}
