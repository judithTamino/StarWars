export const getCharacterId = (url:string) => {
  // const match = url.match(/\/people\/(\d+)\//);
  const id = url.replace(/^\D+/g, ''); 
  return id;
}