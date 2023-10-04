
export const compareTo = (palabra: string, buscardor: string) => {
  const palabraB = palabra.toLowerCase().trim()
  const buscardorB = buscardor.toLowerCase().trim()
  return palabraB.includes(buscardorB)
};