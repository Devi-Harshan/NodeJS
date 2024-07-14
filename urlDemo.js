import url, { URLSearchParams } from "url";

const urlString = "https://www.google.com/search?q=hello+world";
const urlObj = new URL(urlString);
console.log(urlObj);
console.log(urlObj.pathname);

//format()
console.log(url.format(urlObj));

//import.meta.url
console.log(import.meta.url);

//fileURLtoPath()
console.log(url.fileURLToPath(import.meta.url));

const params = new URLSearchParams(urlObj.search);
console.log("Params", params);
console.log("Params", params.get("q"));
params.append("limit", "5");
params.delete("limit");
console.log(params);
