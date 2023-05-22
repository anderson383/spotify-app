export const formatearNumero = (num:number) => {
  if (num >= 1000) {
    const unidades = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
    const exponente = Math.floor(Math.log10(Math.abs(num)) / 3);
    const valorFormateado = (num / Math.pow(1000, exponente)).toFixed(1);

    return valorFormateado + unidades[exponente - 1];
  }

  return num.toString();
};

