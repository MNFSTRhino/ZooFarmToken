const Rhino = artifacts.require("Rhino")
const Zoo = artifacts.require("Zoo")

module.exports = async function (callback) {
    const accounts = await new web3.eth.getAccounts()
    const rhino = await Rhino.deployed()
    const zoo = await Zoo.deployed()

    const allowanceBefore = await rhino.allowance(
        accounts[0],
        zoo.address
    )
    console.log(
        "Amount of Rhino that Zoo is allowed to transfer on our behalf Before: " +
        allowanceBefore.toString()
    )

    await rhino.approve(zoo.address, web3.utils.toWei("100", "ether"))

    const allowanceAfter = await rhino.allowance(accounts[0], zoo.address)
    console.log(
        "Amount of Rhino that Zoo is allowed to transfer on our behalf After: " +
        allowanceAfter.toString()
    )

    balanceRhinoBeforeAccounts0 = await rhino.balanceOf(accounts[0])
    balanceRhinoBeforeZoo = await rhino.balanceOf(zoo.address)
    console.log("*** Rhino Token ***")
    console.log(
        "Balance Rhino Before accounts[0] " +
        web3.utils.fromWei(balanceRhinoBeforeAccounts0.toString())
    )
    console.log(
        "Balance Rhino Before Zoo Farm" +
        web3.utils.fromWei(balanceRhinoBeforeZoo.toString())
    )

    console.log("*** Zoo Token ***")
    balanceZooBeforeAccounts0 = await zoo.balanceOf(accounts[0])
    balanceZooBeforeZoo = await zoo.balanceOf(zoo.address)
    console.log(
        "Balance Zoo Before accounts[0] " +
        web3.utils.fromWei(balanceZooBeforeAccounts0.toString())
    )
    console.log(
        "Balance Zoo before Zoo Farm " +
        web3.utils.fromWei(balanceZooBeforeZoo.toString())
    )
    console.log("Call Deposit Function")
    await zoo.deposit(web3.utils.toWei("100", "ether"))
    console.log("*** Rhino Token ***")
    balanceRhinoAfterAccounts0 = await rhino.balanceOf(accounts[0])
    balanceRhinoAfterZoo = await rhino.balanceOf(zoo.address)
    console.log(
        "Balance Rhino After accounts[0] " +
        web3.utils.fromWei(balanceRhinoAfterAccounts0.toString())
    )
    console.log(
        "Balance Rhino After Zoo Farm " +
        web3.utils.fromWei(balanceRhinoAfterZoo.toString())
    )

    console.log("*** Zoo Token ***")
    balanceZooAfterAccounts0 = await zoo.balanceOf(accounts[0])
    balanceZooAfterZoo = await zoo.balanceOf(zoo.address)
    console.log(
        "Balance Zoo After accounts[0] " +
        web3.utils.fromWei(balanceZooAfterAccounts0.toString())
    )
    console.log(
        "Balance Zoo After Zoo Farm " +
        web3.utils.fromWei(balanceZooAfterZoo.toString())
    )

    callback()
}