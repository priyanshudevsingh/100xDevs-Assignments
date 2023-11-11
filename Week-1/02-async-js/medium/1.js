const fs = require("fs");

let data;
fs.readFile("1a.txt", "utf8", function reading(err, data) {
  if (err) console.log(err);
  else {
    data = data.replace(/\s+/g, " ");

    fs.writeFile("1a.txt", data, "utf8", function writing(err) {
      if (err) console.log(err);
      else console.log("written");
    });
  }
});
