
import { writeFileSync } from 'fs'

import pkg from './package.json' with { type: 'json' }

const { GITHUB_RUN_NUMBER } = process.env

pkg.name = '@projectdata-io/msal-node'
pkg.version = `${pkg.version}.${GITHUB_RUN_NUMBER}`

writeFileSync('./package.json', JSON.stringify(pkg, undefined, 2))
