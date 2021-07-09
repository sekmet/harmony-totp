
const HarmonyClient = require("../../lib/harmony_client");

describe("Library test", (accounts) => {
  it("checks for name available", async () => {
    var client = new HarmonyClient("https://api.s3.b.hmny.io", "0x4fb1C434101ced0773a3bc77D541B3465023639f");
    var available = await client.isNameAvailable("hashmesan000.crazy.one", 31536000);
    console.log("Available?", available);
    return true;
  });

  it("checks transaction details", async () => {
    var client = new HarmonyClient("https://api.s3.b.hmny.io", "0x4fb1C434101ced0773a3bc77D541B3465023639f","https://explorer.pops.one:8888");
    console.log(await client.getTransactionDecoded("0x2159a9e542c48d37db0c1ffa7d59f95298f392b692a94832f87be47012fd3f02"))
    console.log(await client.getTransactionsByAccount("one13qv5p9ug7s0xpkrfc2y2gj30mr8llqr8z66yad"))
    return true;
  })

  it("checks transaction details", async () => {
    var client = new HarmonyClient("https://api.s3.b.hmny.io", "0x4fb1C434101ced0773a3bc77D541B3465023639f","https://explorer.pops.one:8888");
    console.log(await client.getPublicResolver())
  });
});
