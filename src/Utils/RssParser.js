export async function parseURL(link){
    let response = await fetch(link, {mode:'no-cors'})
    let res = await response.json()
    return res
  }
