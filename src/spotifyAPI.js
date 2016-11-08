const endpoint = "https://api.spotify.com/v1/";

function getUserProfile(username) {
  return fetch(endpoint + 'users/' + username)
    .then((response) => {
      return response.json();
    });
}

const api = {
  getUserProfile: getUserProfile
}

export default api;
