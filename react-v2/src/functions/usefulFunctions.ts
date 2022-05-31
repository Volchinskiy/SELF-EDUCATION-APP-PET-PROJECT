export function addThreeDots(str: string, maxLength: number = 16){
  if(str.length > maxLength){
    let stringWithDots = str.split("");
    stringWithDots.length = maxLength;
    stringWithDots.push("...");
    return stringWithDots.join("");
  }

  return str;
}