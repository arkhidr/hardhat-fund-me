const { deployments, ethers, getNamedAccounts } = require("hardhat")
describe("FundMe", function () {
    let fundMe
    beforeEach(async function () {
        const { deployer } = await getNamedAccounts()
        await deployments.fixture(["all"])
        fundMe = await ethers.getContract("FundMe")
    })
    describe("constructor", function () {})
})
