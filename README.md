# kml.ts
KML Parser, typed.

## Not production-ready

## Usage
```ts
import { parse } from "https://esm.sh/gh/gnlow/kml.ts/mod.ts"
```
```ts
using file = await Deno.open("./your.kml")
const document = parse(file)
console.log(document)
```
```ts
const file = await Deno.readTextFile("./your.kml")
const document = parse(file)
console.log(document)
```
