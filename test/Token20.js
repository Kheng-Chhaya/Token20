// const Token20 = artifacts.require("./Token20.sol");

// contract("Token20",function(accounts){
//     var instance;
//     it("testing name totalSupply and balance of the token owner",function(){
//         return Token20.deployed().then(function(ins){
//             instance = ins;
//             return instance.name()
//         }).then(function(name){
//             assert.equal(name,"Token20","Not correct name");
//             return instance.symbol();
//         }).then(function(symbol){
//             assert.equal(symbol,"TK20","Not correct symbol");
//             return instance.balanceOf(accounts[0]);
//         }).then(function(balance){
//             assert.equal(balance.toNumber(),10000,"Not correct balance");
//         })
//     });

//     it("testing transfer function...",function(){
//       return Token20.deployed().then(function(ins){
//           instance = ins;
//           return instance.transfer.call(accounts[0],10000000);
//       }).then(assert.fail).catch(function(error){
//           assert(error.message.indexOf('revert')>=0,"Message is reverted..");
//           return instance.transfer(accounts[1],5,{from:accounts[0]});
//       }).then(function(receipt){
//           assert.equal(receipt.logs.length,1,"triggers one event");
//           assert.equal(receipt.logs[0].event,'Transfer',"must be Transfer event");
//           assert.equal(receipt.logs[0].args._sender,accounts[0],"must be from account one");
//           assert.equal(receipt.logs[0].args._receiver,accounts[1],'account one is must be a receiver');
//           assert.equal(receipt.logs[0].args._value,5,'5 token must be sent');
//           return instance.balanceOf(accounts[1]);
//      }).then(function(balance){
//          assert.equal(balance.toNumber(),5);
//          return instance.balanceOf(accounts[0])
//      }).then(function(balance){
//          assert.equal(balance.toNumber(),9995)
//          return instance.transfer.call(accounts[0],5,{from:accounts[1]});
//      }).then(function(success){
//          assert.equal(success,true)
//      })
//     });

//     it("Testing approve function..",()=>{
//         return Token20.deployed().then(function(ins){
//             instance = ins;
//             return instance.approve(accounts[2],5,{from:accounts[0]});
//         }).then(function(receipt){
//             return instance.allowance(accounts[0],accounts[2]);

//         }).then(function(balance){
//             assert.equal(balance.toNumber(),5,"Not equal 5");
//             return instance.transferFrom(accounts[0],accounts[3],1000000,{from:accounts[2]});
//         }).then(assert.fail).catch(function(error){
//             assert(error.message.indexOf('revert')>=0,"require the owner balance enough");
//             return instance.transferFrom(accounts[0],accounts[3],6,{from:accounts[2]});
//         }).then(assert.fail).catch(function(error){
//             assert(error.message.indexOf('revert')>=0,"need allowance is enough");
//             return instance.transferFrom(accounts[0],accounts[3],5,{from:accounts[2]});
//         }).then(function(receipt){
//             assert.equal(receipt.logs.length,1,'trigger event');
//             assert.equal(receipt.logs[0].event,'Transfer',"Tansfer triggers");
//             assert.equal(receipt.logs[0].args._sender,accounts[0],"from account one");
//             assert.equal(receipt.logs[0].args._receiver,accounts[3],"to account three");
//             assert.equal(receipt.logs[0].args._value,5,'sent 5 token');
//             return instance.balanceOf(accounts[2]);
//         }).then(function(balance){
//             assert.equal(balance,0,"not equal 0");
//             return instance.allowance(accounts[0],accounts[2]);
//         }).then(function(balance){
//             assert.equal(balance,0,"not equal 0");
//             return instance.balanceOf(accounts[3]);
//         }).then(function(balance){
//             assert.equal(balance,5,"not equall 5");
//         })

//     })

    
// })