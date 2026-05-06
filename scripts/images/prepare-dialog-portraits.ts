import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const SOURCE_DIR = '/home/medet/Pictures/ahmetson/dialogs'
const OUTPUT_DIR = '/home/medet/ara/cascadefund/public/images/ahmetson/dialog'
const MAX_HEIGHT = 500
const SUPPORTED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tiff', '.bmp', '.gif'])

function slugifyFileStem(stem: string): string {
  return stem
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

async function listInputImages(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => SUPPORTED_EXTENSIONS.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))
}

function applyGalaxyCartoonLook(input: sharp.Sharp): sharp.Sharp {
  return input
    .resize({ height: MAX_HEIGHT, withoutEnlargement: true })
    .normalise()
    .modulate({ saturation: 1.3, brightness: 1.04, hue: 218 })
    .sharpen({ sigma: 1.1, m1: 1.1, m2: 2.2, x1: 2, y2: 10, y3: 20 })
    .median(1)
    .gamma(1.12)
}

async function processOneImage(fileName: string, index: number): Promise<string> {
  const sourcePath = path.join(SOURCE_DIR, fileName)
  const baseName = slugifyFileStem(path.parse(fileName).name) || 'dialog-image'
  const outputName = `${String(index + 1).padStart(2, '0')}-${baseName}.webp`
  const outputPath = path.join(OUTPUT_DIR, outputName)

  const sourceBuffer = await fs.readFile(sourcePath)
  const stylized = applyGalaxyCartoonLook(sharp(sourceBuffer))
  await stylized.webp({ quality: 86, effort: 5 }).toFile(outputPath)
  return outputName
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true })
  const files = await listInputImages(SOURCE_DIR)
  if (files.length === 0) {
    console.log(`No supported images found in ${SOURCE_DIR}`)
    return
  }

  let processed = 0
  let skipped = 0
  const written: string[] = []

  for (const [index, fileName] of files.entries()) {
    try {
      const outputName = await processOneImage(fileName, index)
      processed += 1
      written.push(outputName)
      console.log(`processed: ${fileName} -> ${outputName}`)
    } catch (error) {
      skipped += 1
      const message = error instanceof Error ? error.message : String(error)
      console.warn(`skipped: ${fileName} (${message})`)
    }
  }

  console.log('\nDialog portrait pipeline finished.')
  console.log(`processed: ${processed}`)
  console.log(`skipped: ${skipped}`)
  console.log(`written to: ${OUTPUT_DIR}`)
  if (written.length > 0) {
    console.log('output files:')
    for (const name of written) {
      console.log(`- ${name}`)
    }
  }
}

main().catch((error) => {
  console.error('Dialog portrait pipeline failed.')
  console.error(error)
  process.exitCode = 1
})
