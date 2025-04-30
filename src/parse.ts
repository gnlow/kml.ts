import { parseXml } from "./parseXml.ts"
import { Document } from "./types.ts"
import { documentSchema } from "../dist/zod.ts"

export const parse =
(xml: Parameters<typeof parseXml>[0]) => {
    const json = parseXml(xml)
    return documentSchema.parse(json.kml.Document) as Document
}
