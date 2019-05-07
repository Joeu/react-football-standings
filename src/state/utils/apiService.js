const BASE_URL = 'http://api.football-data.org/v2';

const headers = {
  'X-Auth-Token': '<YOUR API KEY>',
  "Content-Type": "text/plain"
}

export const fetchCompetition = (id) =>
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