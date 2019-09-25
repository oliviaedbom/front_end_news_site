export default async function () {
  const response = await fetch('/api/v1/articles');
  const responseJSON = await response.json();
  return responseJSON.articles;
}
