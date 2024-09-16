
import { writeFileSync } from 'fs'

// Get the package obejct and change the name
import pkg from './package.json' with { type: 'json' }
pkg.name = '@projectdata/msal-node'

// Update package.json with the udpated name
writeFileSync('./package.json', JSON.stringify(pkg, undefined, 2))
