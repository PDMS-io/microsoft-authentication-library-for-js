
import { writeFileSync } from 'fs'

import pkg from './package.json' with { type: 'json' }
pkg.name = '@projectdata/msal-node'
writeFileSync('./package.json', JSON.stringify(pkg, undefined, 2))
