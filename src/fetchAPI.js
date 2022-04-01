export default async function getCurrency() {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const result = await fetch(url);
  const data = await result.json();

  return data;
}
