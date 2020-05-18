const Token20 = artifacts.require("Token20.sol");
const ICOToken = artifacts.require("./ICOToken.sol");

module.exports = function(deployer) {
  deployer.deploy(Token20,100000).then(function(){
    return deployer.deploy(ICOToken,Token20.address)
  })
};
