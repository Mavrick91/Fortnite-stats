export function formatNumber(num) {
  if (!num || isNaN(num)) return '0'

  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function translateMode(mode) {
  switch (mode) {
    case 'p2':
      return 'Solo'
    case 'p9':
      return 'Squad'
    case 'p10':
      return 'Duo'
    default:
      return 'Solo'
  }
}
