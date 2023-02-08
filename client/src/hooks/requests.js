const API_URL = "http://localhost:8080/api";

async function httpGetPlanets() {
  const path = `${API_URL}/planets`;
  const response = await fetch(path);
  console.log("httpGetPlanets success!");
  return response.json();
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and ret urn as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
