const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.utils.parseEther("0.001");

  const DanceMiladyDance = await hre.ethers.getContractFactory("DanceMiladyDance");
  const danceMiladyDance = await DanceMiladyDance.deploy();

  await danceMiladyDance.deployed();

  console.log(
    `Lock with ${ethers.utils.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${danceMiladyDance.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
