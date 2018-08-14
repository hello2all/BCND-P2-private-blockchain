const {Blockchain, Block} = require('./simpleChain');
const bc = new Blockchain();

// set blockchain construction constant parameters
const timeGap = 100;
const blockAmount = 10;

console.log('====build a blockchain... with random number as block data...====')
var counter = 0;
var intervalId = setInterval(() => {
    let block = new Block(Math.random().toString());
    bc.addBlock(block);
    if (++counter === blockAmount - 1) {
        clearInterval(intervalId);
        console.log('generation complete!')
    }
}, timeGap);


setTimeout(() => {
    console.log('====test adding new block====')
    // get the block height
    bc.getBlockHeight()
    .then(res => {
        blockHeight = res;
        console.log('Current block height: ', res);
    });

    // get a random block in blockchain
    bc.addBlock(new Block('this is a new block'));

}, timeGap * blockAmount + timeGap * 5);


setTimeout(() => {
    console.log('====test getting block====')
    // get block
    bc.getBlock(Math.floor(Math.random() * blockAmount) + 1)
    .then(res => {
        console.log('radom block in the chain:');
        console.log(res);
    });

}, timeGap * blockAmount + timeGap * 10);


setTimeout(() => {
    console.log('====test validating a single block====')
    // validate block
    bc.validateBlock(blockHeight)
    .then(res => console.log('validation result: ', res));
}, timeGap * blockAmount + timeGap * 15);


setTimeout(() => {
    console.log('====validate whole chain====')
    // validate chain
    bc.validateChain()
    .then(res => console.log('error log: ', res));
}, timeGap * blockAmount + timeGap * 20);

setTimeout(() => {
    console.log('====print out the blockchain===')
    let heights = [];
    bc.getBlockHeight()
    .then(currentBlockHeight => {
      for (var i = 1; i <= currentBlockHeight; i++) {
        heights.push(i);
      }
        return Promise.all(heights.map(height => {
            return bc.getBlock(height);
      }));
    })
    .then(blocks => console.log(blocks))

}, timeGap * blockAmount + timeGap * 30);

