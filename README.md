# Blockchain ND Project 2 - Private Blockchain

## Introduction

This project implemented a private blockchain with persistence achieved utilizing leveldb. The core implementation is provided in `simpleChain.js`, which defines the `Blockchain` class as well as the `Block` class.

`Blockchain` class has the following member functions:

- `addBlock`, adds a new block into the blockchain
- `getBlockHeight`, get the current height of the blockchain
- `getBlock`, get a single block
- `validateBlock`, validate a single block
- `validateChain`, validate the whole blockchain

## Testing

A automated testing script is provided to illustrate the functionalities of the core implementation. It will go through all of the member functions of `Blockchain` class and output the results.

### Usage

```shell
npm install
node test.js
```
### Sample Output

```
====build a blockchain... with random number as block data...====
generation complete!
====test adding new block====
Current block height:  10
====test getting block====
radom block in the chain:
{ hash: '68552989059593d72bfb1048222d36c318e2aa2e80588fe173a5b5145a943932',
  height: 6,
  body: '0.9694765128917937',
  time: '1534265216',
  previousBlockHash: 'c7115351789164191ca7763db8a2516c1064a6c45941a81acf572f9080c8d523' }
====test validating a single block====
validation result:  true
====validate whole chain====
Block 1 has correct hash
Block 2 has correct previousHash
Block 2 has correct hash
Block 3 has correct previousHash
Block 3 has correct hash
Block 4 has correct previousHash
Block 4 has correct hash
Block 5 has correct previousHash
Block 5 has correct hash
Block 6 has correct previousHash
Block 6 has correct hash
Block 7 has correct previousHash
Block 7 has correct hash
Block 8 has correct previousHash
Block 8 has correct hash
Block 9 has correct previousHash
Block 9 has correct hash
Block 10 has correct previousHash
Block 10 has correct hash
Block 11 has correct previousHash
Block 11 has correct hash
error log:  []
====print out the blockchain===
[ { hash: '420a20fbe0725a50316687adbb13fd578210fe34e36263cd48e3451b40281cd0',
    height: 1,
    body: 'First block in the chain - Genesis block',
    time: '1534265216',
    previousBlockHash: '' },
  { hash: '800c4f85e2c419f5eb56038f0bb7bc8f73e6a2da6aa8f0d654564577b0dd9322',
    height: 2,
    body: '0.09922929460758922',
    time: '1534265216',
    previousBlockHash: '420a20fbe0725a50316687adbb13fd578210fe34e36263cd48e3451b40281cd0' },
  { hash: '80d0e08524eaed03eb3d583ba7cf69391d6717d96ec407d35dd2ce88049313fd',
    height: 3,
    body: '0.31172302985708056',
    time: '1534265216',
    previousBlockHash: '800c4f85e2c419f5eb56038f0bb7bc8f73e6a2da6aa8f0d654564577b0dd9322' },
  { hash: 'b4e94547088c68a6672f421265d52025e0c9590c6d90a812aedad3efe77f2e25',
    height: 4,
    body: '0.02153564880716785',
    time: '1534265216',
    previousBlockHash: '80d0e08524eaed03eb3d583ba7cf69391d6717d96ec407d35dd2ce88049313fd' },
  { hash: 'c7115351789164191ca7763db8a2516c1064a6c45941a81acf572f9080c8d523',
    height: 5,
    body: '0.5414310893126995',
    time: '1534265216',
    previousBlockHash: 'b4e94547088c68a6672f421265d52025e0c9590c6d90a812aedad3efe77f2e25' },
  { hash: '68552989059593d72bfb1048222d36c318e2aa2e80588fe173a5b5145a943932',
    height: 6,
    body: '0.9694765128917937',
    time: '1534265216',
    previousBlockHash: 'c7115351789164191ca7763db8a2516c1064a6c45941a81acf572f9080c8d523' },
  { hash: 'e020dfd9e158d0015d94556c809dc275ccd15c055a57b9ed03a867f1e013baa0',
    height: 7,
    body: '0.37345708193826943',
    time: '1534265217',
    previousBlockHash: '68552989059593d72bfb1048222d36c318e2aa2e80588fe173a5b5145a943932' },
  { hash: '170f0163cc68302108bca2d3dade1b193b2e605ff9100148fb8d0fe7dfcaff1b',
    height: 8,
    body: '0.46592464330480077',
    time: '1534265217',
    previousBlockHash: 'e020dfd9e158d0015d94556c809dc275ccd15c055a57b9ed03a867f1e013baa0' },
  { hash: '7da4e2cd0e252f26ffe0ded4b8ffc05a85c79000f4ad71c8156b11aa089b5856',
    height: 9,
    body: '0.2488912212648906',
    time: '1534265217',
    previousBlockHash: '170f0163cc68302108bca2d3dade1b193b2e605ff9100148fb8d0fe7dfcaff1b' },
  { hash: 'aeb93ed19aade49d77d34089393aff4c685e61dedcb7f5bce5efc5ead1601d29',
    height: 10,
    body: '0.6205452256777373',
    time: '1534265217',
    previousBlockHash: '7da4e2cd0e252f26ffe0ded4b8ffc05a85c79000f4ad71c8156b11aa089b5856' },
  { hash: '36240c7453887714320d1f643de48e9eb5a707a905ec7b9efc3a78bf483c0286',
    height: 11,
    body: 'this is a new block',
    time: '1534265217',
    previousBlockHash: 'aeb93ed19aade49d77d34089393aff4c685e61dedcb7f5bce5efc5ead1601d29' } ]
```

## Misc

The content in `levelSandbox.js` has been integrated into simpleChain.js, thus being removed.