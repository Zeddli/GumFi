// scripts/deploy.js
async function main() {
    const SocialFi = await ethers.getContractFactory("SocialFiGame");
    const socialFi = await SocialFi.deploy();
    console.log("Contract deployed to:", socialFi.address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });