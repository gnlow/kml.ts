import { generate } from "https://esm.sh/ts-to-zod@3.15.0"

const out = generate({
    sourceText: await Deno.readTextFile("./src/types.ts")
}).getZodSchemasFile("../src/types.ts")
.replace(`"zod"`, `"https://esm.sh/zod@3.24.3"`)

await Deno.writeTextFile("./dist/zod.ts", out)
