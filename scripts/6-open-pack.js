import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0x969f6c9475D1E555F5d2759ABbEFf80f9ab47f47';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}