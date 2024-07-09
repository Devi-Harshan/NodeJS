import fs from "fs";
/* //readFile() callback
fs.readFile("./test.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//readFileSync -Synchronous version
const data = fs.readFileSync("./test.txt", "utf8");
console.log(data);
 */
/* //readFile -Promise
fs.readFile("./test.txt","utf8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err)); */

//readFile() -async/await
const readFile = async () => {
  try {
    const data = fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

readFile();
