const Rhino = artifacts.require("Rhino")
const Zoo = artifacts.require("Zoo")

module.exports = async function (callback) {
    const accounts = await new web3.eth.getAccounts()
    const rhino = await Rhino.deployed()
    const zoo = await Zoo.deployed()

    balanceRhinoBeforeAccounts0 = await rhino.balanceOf(accounts[0])
    balanceRhinoBeforeZoo = await rhino.balanceOf(zoo.address)
    console.log("*** Rhino Token ***")
    console.log(
        "Balance Rhino Before accounts[0] " +
        web3.utils.fromWei(balanceRhinoBeforeAccounts0.toString())
    )
    console.log(
        "Balance Rhino Before Rhino Farm " +
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
        "Balance Zoo Before Rhino Farm " +
        web3.utils.fromWei(balanceZooBeforeZoo.toString())
    )

    console.log("Call Withdraw Function")
    await zoo.withdraw(web3.utils.toWei("100", "ether"))

    console.log("*** Rhino Token ***")
    balanceRhinoAfterAccounts0 = await rhino.balanceOf(accounts[0])
    balanceRhinoAfterZoo = await rhino.balanceOf(zoo.address)
    console.log(
        "Balance Rhino After accounts[0] " +
        web3.utils.fromWei(balanceRhinoAfterAccounts0.toString())
    )
    console.log(
        "Balance Rhino After Rhino Farm " +
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
        "Balance Zoo After Rhino Farm " +
        web3.utils.fromWei(balanceZooAfterZoo.toString())
    )
    callback()
}