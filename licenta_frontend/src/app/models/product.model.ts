import { Review} from "./review.model"

export interface Product {
  id:number
  image: string
  stock: number
  category: string
  price: number
  warranty: number
  name: string
}
export interface Keyboard extends Product {
  reviews: Review[]
  brand: string
  type: string
  color: string
  numberKeys: boolean
  technology: string
  size: string
  weight: number
  keyboardInterface: string
  soSystems: string
  palmRest: boolean
  characteristics: string
  lighting: boolean
  layout: string
  other: string
}
export interface HardDisk extends Product {
  reviews: Review[]
  series: string
  interfaceType: string
  typeHdd: string
  capacity: number
  buffer: number
  speed: number
  other: string
}
export interface Headset extends Product {
  reviews: Review[]
  brand: string
  technology: string
  sound: string
  type: string
  sensitivity: string
  response: string
  microphoneNoiseCancelling: boolean
  compatibility: string
  connectivity: string
  light: boolean
  other: string
}
export interface Motherboard extends Product {
  reviews: Review[]
  format: string
  processorSocket: string
  memoryType: string
  numberOfSlots: number
  audioChipset: string
  integratedNetworkcard: string
  integratedVideocard: string
  sataNumber: number
  ssdNumber: number
  other: string
}
export interface Monitor extends Product {
  reviews: Review[]
  brand: string
  diagonal: number
  resolution: string
  responseTime: number
  refreshRate: number
  technology: string
  color: string
  aspectRatio: string
  ports: string
  other: string
}
export interface Mouse extends Product {
  reviews: Review[]
  brand: string
  technology: string
  mouseInterface: string
  sensorType: string
  maximumResolution: number
  numberButtons: number
  scrollWheel: number
  color: string
  size: string
  weight: number
  supportedOs: string
  other: string
}
export interface Processor extends Product {
  reviews: Review[]
  producer: string
  model: string
  socket: string
  core: string
  series: string
  numberOfCores: number
  numberOfThreads: number
  frequency: number
  frequencyMax: number
  cache: number
  tdpMax: number
  other: string
}
export interface VideoCard extends Product {
  reviews: Review[]
  type: string
  producer: string
  family: string
  model: string
  series: string
  memoryType: string
  memorySize: number
  busMemory: number
  other: string
}
export interface Ssd extends Product {
  reviews: Review[]
  typeSsd: string
  series: string
  formFactor: string
  interfaceType: string
  nvmeSupport: boolean
  capacity: number
  maxReading: number
  maxWrite: number
  other: string
}
export interface RamMemory extends Product {
  reviews: Review[]
  series: string
  type: string
  capacity: number
  frequency: number
  lighting: boolean
  color: string
  other: string
}
