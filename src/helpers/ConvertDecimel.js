export function ConvertDecimel(number) {
  
  const numberString = number?.toString();
  
  
  const decimalIndex = numberString?.indexOf('.');
  
  
  if (decimalIndex !== -1 && decimalIndex < numberString?.length - 1) {
    
    return numberString?.slice(0, decimalIndex + 2);
  }
  
  
  return numberString;
}


