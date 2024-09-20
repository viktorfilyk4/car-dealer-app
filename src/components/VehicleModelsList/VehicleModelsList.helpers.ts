export function constructGetModelsApiUrl(makeId: string, year: string) {
  const url = process.env.GET_MODELS_API_URL;
  return url.replace('{makeId}', makeId).replace('{year}', year);
}
