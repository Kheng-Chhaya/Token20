const ICOToken = artifacts.require('./ICOToken.sol');
const Token20 = artifacts.require("./Token20.sol");


contract("ICOToken",function(accounts)
{
    var ICOTokenInstance;
    var Token20Instance;
    var tokenPrice = 1000000000000000;
    it("getting Token20 Instance",function()
    {
    	return Token20.deployed().then(function(ins){
    		Token20Instance = ins;
    		return Token20Instance.address;
    	}).then(function(address){
    		assert.notEqual(address,0,"But it is 0");
    	})
    })

    it("testing payable function",function()
    {
        return ICOToken.deployed().then(function(ins){
            ICOTokenInstance = ins;
            return ICOTokenInstance.address;
        }).then(function(address){
            assert.notEqual(address,0,"Not equal 0");
        	return ICOTokenInstance.contractInstance()
        }).then(function(address){
        	assert.equal(address,Token20Instance.address,"It is not equal");
        })
    })

    it("testing buy token...",function(){
    	return Token20Instance.transfer(ICOTokenInstance.address,50000).then(function(tx){
    		return Token20Instance.balanceOf(ICOTokenInstance.address);
    	}).then(function(balanceOf){
    		assert.equal(balanceOf.toNumber(),50000);
    		var contract = new web3.eth.Contract([
    {
      "inputs": [
        {
          "internalType": "contract Token20",
          "name": "_token20",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_buyer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_tokenAmount",
          "type": "uint256"
        }
      ],
      "name": "Sell",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "contractInstance",
      "outputs": [
        {
          "internalType": "contract Token20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "tokenPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "tokenSold",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenAmount",
          "type": "uint256"
        }
      ],
      "name": "BuyToken",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [],
      "name": "transfers",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],"0x9fe5e6558537a7aC9fB413971f61F8f720789657");

    		return contract.methods.BuyToken(1);


    	}).then(function(tx){
    			var contract = new web3.eth.Contract([
    {
      "inputs": [
        {
          "internalType": "contract Token20",
          "name": "_token20",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_buyer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_tokenAmount",
          "type": "uint256"
        }
      ],
      "name": "Sell",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "contractInstance",
      "outputs": [
        {
          "internalType": "contract Token20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "tokenPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "tokenSold",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenAmount",
          "type": "uint256"
        }
      ],
      "name": "BuyToken",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [],
      "name": "transfers",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],"0x9fe5e6558537a7aC9fB413971f61F8f720789657");
    		return contract.methods.transfers();
    	})

    })


    

    

    


});