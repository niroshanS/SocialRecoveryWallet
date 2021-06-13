const truffleAssert = require("truffle-assertions");

const Wallet = artifacts.require("Wallet");

contract("Wallet", (accounts) => {
  const [owner, address1, address2] = accounts;

  beforeEach(async function () {
    this.wallet = await Wallet.new(owner, [address1]);
  });

  it('only allows owner to add guardian', async function() {
    await truffleAssert.reverts(this.wallet.addAllowedWithdrawalAddress.sendTransaction(address2, {from: address2}), "Restricted action!");
  });
});