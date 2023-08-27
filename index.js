const { parse } = require("csv-parse");
const fs = require("fs");

// const results = [];
const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_prad"] < 1.6
  );
}

fs.createReadStream("kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    //   results.push(data);
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data);
    }
  })
  .on("end", () => {
    console.log("err");
  })
  .on("end", () => {
    // console.log("results", results);
    console.log(habitablePlanets)
    console.log("done");
  });
