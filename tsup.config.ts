import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'sonarr/index': 'src/sonarr/index.ts',
    'radarr/index': 'src/radarr/index.ts',
    'prowlarr/index': 'src/prowlarr/index.ts',
    'lidarr/index': 'src/lidarr/index.ts',
    'readarr/index': 'src/readarr/index.ts'
  },
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  splitting: false,
  treeshake: true,
  target: 'es2022',
  outDir: 'dist'
})
