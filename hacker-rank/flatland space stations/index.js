// Complete the flatlandSpaceStations function below.
// n = number of cities
// c = an array of cities with space stations

// eg. n = 3 means there are 3 cities. c[1] means that city 1 has a space station. The cities are 0, 1, 2.
// distance = 1km which is the subtractive value between cities difference between city 1 and 2 is 1, 0 and 1 is 1, and 2 and 0 is 2.

// return maxiumum distance
function flatlandSpaceStations(n, c) {
  let maxDistance = 0;
  let numberOfCities = n;
  let citiesWithStations = c;
  let distanceOfCityFromStation = [];

  for(let k = 0; k < n; k++) {
    distanceOfCityFromStation.push(0);
  }

  // find the difference of each city to the nearest space station;

  console.log('thisHappened', maxDistance);
  return maxDistance;
}