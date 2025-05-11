export const getCharacterId = (url:string) => {
  const id = url.replace(/^\D+/g, ''); 
  return id;
}