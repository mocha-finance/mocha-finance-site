const Mocha = artifacts.require("Mocha");

module.exports = async function(deployer, networks, accounts) {
  await deployer.deploy(Mocha);
};
