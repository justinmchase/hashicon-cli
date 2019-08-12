import { createCanvas } from 'canvas'
import hashicon from 'hashicon'
const icon = hashicon('0xdc53525847b67a9e32d80066202d5744c86ae500', { createCanvas })
const url = icon.toDataURL()
console.log(url)
