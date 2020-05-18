pragma solidity 0.6.8;

import "./Token20.sol";
contract ICOToken
{
   
   address payable internal owner;
   Token20 public contractInstance;
   uint public tokenSold;
   uint public tokenPrice = 1000000000000000000;

   constructor(Token20 _token20) public
   {

   		owner = payable(msg.sender);
   		contractInstance = _token20;

   }

    event Sell(address indexed _buyer , uint _tokenAmount);

    function multiply(uint x, uint y) internal pure returns (uint z) 
    {
        require(y == 0 || (z = x * y) / y == x);
    }

    function BuyToken(uint _tokenAmount) payable public
    {
 	   require(msg.value == multiply(tokenPrice,_tokenAmount));
 	   require(contractInstance.balanceOf(address(this))>=_tokenAmount);
 	   tokenSold += _tokenAmount;
 	   emit Sell(msg.sender,_tokenAmount);
       
    }

    function transfers() public
    {
    	require(msg.sender == owner);
      require(contractInstance.transfer(owner,contractInstance.balanceOf(address(this))));
    	owner.transfer(address(this).balance);

    }

    





    

}