const truffleAssert = require("truffle-assertions");

const Wallet = artifacts.require("Wallet");

contract("Wallet", (accounts) => {
  const [owner, address1, address2] = accounts;

  beforeEach(async function () {
    this.wallet = await Wallet.new(owner, [address1]);
  });

  it('does not allow non-guardian to add withdrawal address', async function() {
    await truffleAssert.reverts(this.wallet.addAllowedWithdrawalAddress.sendTransaction(address2, {from: address2}), "Restricted action!");
    const allowed = await this.wallet.isAddressAllowed.call(address2, {from: owner});
    assert.equal(false, allowed, "should not have been allowed");
  });

  it('allows owner to add withdrawal address', async function() {
    await this.wallet.addAllowedWithdrawalAddress.sendTransaction(address2, {from: owner});
    const allowed = await this.wallet.isAddressAllowed.call(address2, {from: owner});
    assert.equal(true, allowed, "should have been allowed");
  });
});