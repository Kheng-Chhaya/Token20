const Token20 = artifacts.require("Token20.sol");

module.exports = function(deployer) {
  deployer.deploy(Token20,10000);
};
