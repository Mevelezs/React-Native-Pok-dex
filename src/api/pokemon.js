import { API_HOST } from '../utils/constants'

export async function getPokemonsApi() {

  try {

    const url = `${API_HOST}/pokemon?limit=20&offset=0`
    const response = await fetch(url)
    const data = await response.json()
    return data.results
  } catch (error) {
     throw Error(error) 
  }
}

export async function getPokemonDetailByUrlApi(url) {
  
  const response = await fetch(url)
    .then(resp => resp.json())
    .then(data => data)
    .catch((error) => { throw new Error(error) });
  
  return response;
}
