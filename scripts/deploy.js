
async function main() {
  const [deployer, trustOwner] = await ethers.getSigners();
  const Charity = await ethers.getContractFactory("Charity");
  const charity = await Charity.deploy();
  console.log("Charity deployed to:", charity.target);
  const totalSupply = await charity.totalSupply();
  console.log("Total supply:", totalSupply);

  const Donation = await ethers.getContractFactory("Donation");
  const donation = await Donation.deploy(charity.target, trustOwner.address, 3);
  console.log("Donation deployed to:", donation.target);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
