const Rhino = artifacts.require("Rhino")
const Zoo = artifacts.require("Zoo")

module.exports = async function (callback) {
    rhino = await Rhino.deployed()
    zoo = await Zoo.deployed()
    balance = await rhino.balanceOf(zoo.address)
    console.log(web3.utils.fromWei(balance.toString()))
    callback()
}