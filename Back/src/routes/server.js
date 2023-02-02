const http = require("http");
const port = 3001;
const characters = require("../utils/data");

const error = (res) => {
  res.writeHead(404, { "Content-type": "text/plain" });
  res.end("Route not found");
};

http.createServer(function (req, res) {
    const allurl = req.url.split("/");
    console.log(allurl);
    const id = Number(allurl.pop());
    const url = allurl.join("/");
    if (url === "/rickandmorty/character") {
      const character = characters.find((e) => e.id === id);
      if (character) {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify(characters));
      } else {
        error(res);
      }
    } else if (req.url === "/rickandmorty/characters") {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(characters));
    } else {
      error(res);
    }
  })
  .listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
