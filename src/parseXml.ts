// deno-lint-ignore-file no-explicit-any

import { parse } from "https://esm.sh/jsr/@libs/xml@6.0.4"

const flatten =
(name: string) =>
(value: any) => {
    if (value[name]) {
        let { [name]: folder, ...rest } = value
        if (!Array.isArray(folder)) {
            folder = [folder]
        }
        return {
            ...rest,
            [name]: folder,
        }
    }
    return value
}

export const parseXml =
(xml: Parameters<typeof parse>[0]) => {
    const json = parse(xml)
    const jsonStr = JSON.stringify(json)

    return JSON.parse(jsonStr, (_key, value) => {
        value = flatten("Folder")(value)
        value = flatten("Placemark")(value)
        return value
    })
}
