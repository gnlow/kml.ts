export interface Folder {
    name: string
    Folder?: Folder[]
    Placemark?: Placemark[]
}

export interface Placemark {
    name:         string
    styleUrl:     string
    Region?:      Region
    LineString?:  LineString
    open?:        string
    "@id"?:       string
    description?: string
    LookAt?:      LookAt
    Point?:       Point
}

export interface LineString {
    tessellate:  string
    coordinates: string
}

export interface Region {
    LatLonAltBox: LatLonAltBox
    Lod:          Lod
}

export interface LatLonAltBox {
    north:       string
    south:       string
    east:        string
    west:        string
    minAltitude: string
    maxAltitude: string
}

export interface Lod {
    minLodPixels:  string
    maxLodPixels:  string
    minFadeExtent: string
    maxFadeExtent: string
}

export interface LookAt {
    longitude: string
    latitude:  string
    altitude:  string
    heading:   string
    tilt:      string
    range:     string
}

export interface Point {
    coordinates: string
}

export interface Document {
    name:        string
    description: string
    Style:       Style[]
    StyleMap:    StyleMap[]
    Folder:      Folder[]
}

export interface Style {
    "@id":       string
    IconStyle?:  IconStyle
    LabelStyle?: LabelStyle
    LineStyle:   LineStyle
}

export interface IconStyle {
    color?: string
    scale:  string
    Icon:   Icon
}

export interface Icon {
    href: string
}

export interface LabelStyle {
    color?: string
    scale:  string
}

export interface LineStyle {
    color: string
    width: string
}

export interface StyleMap {
    "@id": string
    Pair:  Pair[]
}

export interface Pair {
    key:      "highlight" | "normal"
    styleUrl: string
}
