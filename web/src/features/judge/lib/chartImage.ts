/** 書き出す画像の地の色。グラフの線は濃い色なので、白地に重ねる */
const BACKGROUND_COLOR = '#ffffff'

/**
 * グラフの canvas を、地の色を塗った PNG の data URL にする
 * @param source - グラフを描いた canvas
 * @returns PNG の data URL
 *
 * @remarks
 * canvas をそのまま書き出すと地が透明になり、暗い画面に貼ったときに線が見えなくなる。
 * 同じ大きさの canvas に白を塗ってから重ねて写す
 */
export const toChartImageUrl = (source: HTMLCanvasElement): string => {
  const output = document.createElement('canvas')
  output.width = source.width
  output.height = source.height
  const context = output.getContext('2d')
  if (!context) return source.toDataURL('image/png')
  context.fillStyle = BACKGROUND_COLOR
  context.fillRect(0, 0, output.width, output.height)
  context.drawImage(source, 0, 0)
  return output.toDataURL('image/png')
}

/**
 * 画像の data URL を、ファイルとして保存させる
 * @param dataUrl - 画像の data URL
 * @param fileName - 保存するときのファイル名
 */
export const downloadImage = (dataUrl: string, fileName: string) => {
  const link = document.createElement('a')
  link.href = dataUrl
  link.download = fileName
  link.click()
}
