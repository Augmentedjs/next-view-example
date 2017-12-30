const cluster = require("cluster");
const http = require("http");
const CONSTANTS = require("./constants.js");

// Code to run if we're in the master process
if (cluster.isMaster) {
  // Count the machine's CPUs
  const cpuCount = require("os").cpus().length;
  let i = 0;

  // Create a worker for each CPU
  for (i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }

  // Listen for dying workers
  cluster.on("exit", (worker) => {
    // Replace the dead worker
    console.log(`Worker ${worker.id} died :(`);
    cluster.fork();
  });
} else {
  const express = require("express");
  const bodyParser = require("body-parser");
  const path = require("path");

  const CONSTANTS = require("./constants.js");
  const allowedOrigins = [CONSTANTS.WEB_SERVICE_URI, CONSTANTS.EE_SERVICE_URI];

  const app = express();

  app.use(bodyParser.json()); // support json encoded bodies
  app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

  // For CORS
  app.use( (req, res, next) => {
    // Website you wish to allow to connect
    const origin = req.headers.origin;
    if (CONSTANTS.ALLOWED_ORIGINS.indexOf(origin) > -1){
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
    //res.setHeader("Access-Control-Allow-Origin", CONSTANTS.WEB_SERVICE_URI);

    // Request methods you wish to allow
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "Authorization,X-Requested-With,content-type,access-control-allow-methods,access-control-allow-origin");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Pass to next layer of middleware
    next();
  });

  app.use("/", express.static(path.join(__dirname, "public")))

  /* REST API */

  app.get("/about", (req, res) => {
    res.status(200).send(CONSTANTS.ABOUT);
  });

  app.listen(CONSTANTS.PORT, () => {
    console.log(`${CONSTANTS.ABOUT} listening at port ${CONSTANTS.PORT}`);
  });
  //end cluster worker
};
