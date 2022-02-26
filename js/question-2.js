// Question 2

// I could not make this work so I gave up

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=ad1708f6b266417a94eae30acbecdd43";

async function funcName() {
  const response = await fetch(url);

  const result = await response.json();

  const stuff = result.all;

  for (let i = 0; i < stuff.length; i++) {
    console.log(stuff[i].name);
  }
}

funcName();