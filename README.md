# 🚧👷🏽‍♀️Under construction👷🏽‍♀️🚧

# A Mobile Social Recovery Wallet
An attempt at a social recovery wallet. This is still very much a WIP and I really don't know what I'm doing right now.

## How to run
Follow these instructions to ensure your dev environment is setup properly: https://reactnative.dev/docs/environment-setup

This also assumes that you have a local blockchain running such as https://trufflesuite.com/ganache/

Check out the project and run

 `npm install`

 For ios you'll also need to do

```
cd ios
pod install
```

Next compile the wallet contract via `solc contracts/wallet.sol` this should compile the contract to a json file in the `build/contracts` folder. See this doc on how to install solc: https://docs.soliditylang.org/en/v0.8.10/installing-solidity.html

Then in a separate terminal navigate to the project dir and run

`npx react-native start`

Then in the original terminal run

`npx react-native run-ios` or `npx react-native run-android` (I haven't actually tried it with Android yet 😅)

## How to test
To test the contract code run:

`npx truffle test` or `yarn truffle test`

# Current status
Currently this has basic wallet functionality. This will change in the future to actually be a social recovery wallet implemented on a L2.

## Setup
<img src="./demo/setup.gif" width="40%" height="40%"/>


## Basic Functionality
![](./demo/basic-function.gif)




