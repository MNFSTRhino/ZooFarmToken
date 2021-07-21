const Rhino = artifacts.require("Rhino")
const Zoo = artifacts.require("Zoo")

module.exports = async function (deployer, network, accounts) {
    //Deploy Rhino
    await deployer.deploy(Rhino)
    const rhino = await Rhino.deployed()

    await deployer.deploy(Zoo, rhino.address)
    const zoo = await Zoo.deployed()
}