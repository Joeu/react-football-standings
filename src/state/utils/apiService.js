const BASE_URL = 'http://api.football-data.org/v2';

const headers = {
  'X-Auth-Token': 'e364a6902a4c4600b9d7b1258927b42d',
  "Content-Type": "text/plain"
}

export const fetchCompetition = (id, year) =>
  fetch(`${BASE_URL}/competitions/${id}/standings`,
    {
      method: 'GET',
      headers: headers
    }
  )
    .then(res => res.json())
    .then(resJson => {
      return resJson;
    })
    .catch(error => {
      console.warn(error)
    });