// test/SocialFi.js
const { expect } = require("chai");

describe("SocialFiGame", function () {
  it("Should create a profile", async function () {
    const SocialFi = await ethers.getContractFactory("SocialFiGame");
    const socialFi = await SocialFi.deploy();
    
    await socialFi.createProfile("Alice");
    expect(await socialFi.users(await ethers.provider.getSigner(0).getAddress())).to.exist;
  });
});