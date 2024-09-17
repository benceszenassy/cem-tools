import customElements from "./custom-elements.json" with { type: "json" };
import { generateVueWrappers } from "./dist/index.cjs";
import { rmSync } from "fs";

rmSync("./generated", { recursive: true, force: true });

generateVueWrappers(customElements, {
  outdir: "./generated",
});
