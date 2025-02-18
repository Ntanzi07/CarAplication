export async function fatchCars() {
  const headers = {
    'x-rapidapi-key': '38d7d57e18msh3a939f46c2d9dc2p1af752jsn4285d219e65f',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
    headers: headers,
  });

  const result = await response.json();
  
  return result;
}