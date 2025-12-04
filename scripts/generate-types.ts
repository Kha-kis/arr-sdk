import openapiTS, { astToString } from 'openapi-typescript'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const specs = [
  {
    name: 'sonarr',
    url: 'https://raw.githubusercontent.com/Sonarr/Sonarr/develop/src/Sonarr.Api.V3/openapi.json'
  },
  {
    name: 'radarr',
    url: 'https://raw.githubusercontent.com/Radarr/Radarr/develop/src/Radarr.Api.V3/openapi.json'
  },
  {
    name: 'prowlarr',
    url: 'https://raw.githubusercontent.com/Prowlarr/Prowlarr/develop/src/Prowlarr.Api.V1/openapi.json'
  }
]

async function generate() {
  console.log('Generating types from OpenAPI specs...\n')

  for (const spec of specs) {
    console.log(`Fetching ${spec.name} OpenAPI spec from ${spec.url}...`)

    try {
      const ast = await openapiTS(new URL(spec.url), {
        exportType: true,
        alphabetize: true,
        pathParamsAsTypes: false
      })

      const output = astToString(ast)
      const outputPath = path.join(__dirname, '..', 'src', spec.name, 'generated-types.ts')

      await fs.writeFile(outputPath, output, 'utf-8')
      console.log(`✓ Generated ${spec.name} types at ${outputPath}\n`)
    } catch (error) {
      console.error(`✗ Failed to generate ${spec.name} types:`, error)
      process.exit(1)
    }
  }

  console.log('All types generated successfully!')
}

generate()
