
   

const superbowlWin = (record) => { [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2015", result: "W"},
   ]
    const season = record.find((season) => season.result === 'W');
    if (season != undefined) {
      return season.year;
    } else {
      return season;
    }
  };