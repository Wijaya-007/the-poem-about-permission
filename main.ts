import { mkdirSync, writeFileSync } from "node:fs";

const poem = `You stand outside the unlocked shed,
cap twisted in both hands,
waiting for a nod to lift the latch
that never had a lock.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");

// The competition requires 1 to 280 Unicode code points, not only whitespace.
const chars = [...poem].length;
if (chars < 1 || chars > 280) {
  throw new Error(`poem is ${chars} characters, outside the 1-280 limit`);
}
console.log(`wrote /output/entry.txt (${chars} characters)`);
