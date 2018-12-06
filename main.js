const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(index,data,previousHash = ''){
        this.index = index;
        this.date = new Date();
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.createHash();
    }
    createHash(){
        return SHA256(this.index + this.date + this.data).toString();
    }
}

class  BlockChain{
    constructor(genesis){
        this.chain = [this.createFirstBlock(genesis)];
    }
    createFirstBlock(genesis){
        return new Block(0,genesis);
    }
    getLastBlock(){
        return this.chain[this.chain.length-1];
    }

    addBlock(data){
        let pervioBlock = this.getLastBlock();
        let block = new Block(pervioBlock.index+1,data,pervioBlock.hash)
        this.chain.push(block);
    }
}


let naniCoin = new BlockChain('info genesis');

//block = new Block(0,'kyo');
//console.log(JSON.stringify(naniCoin.chain,null,2));

naniCoin.addBlock('kyo bloque 2');
naniCoin.addBlock('kyo bloque 3');
naniCoin.addBlock(`{
    "index": 0,"date": "2018-12-06T17:35:52.846Z","data": "info genesis","previousHash": "","hash": "70542744003f7a4251dea342764eece0312e7f3c2fda6956ee095bda7296c267"
  }`);

console.log(JSON.stringify(naniCoin.chain,null,2));

