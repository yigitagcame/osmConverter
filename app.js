const Server = require('./server');
const serverPort = 3000;

// Http Server
Server.listen(serverPort, () => {
  console.log(`Task app listening at http://localhost:${serverPort}`);
});
