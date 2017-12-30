// Web Service
module.exports.WEB_SERVICE_PROTOCOL = "http://";
const port = 8080;
module.exports.PORT = port;
const webServiceURI = "http://localhost:8080";
module.exports.WEB_SERVICE_URI = webServiceURI;
const eeServiceURI = `http://localhost:${port}`;
module.exports.EE_SERVICE_URI = eeServiceURI;
const localURI = "http://localhost";
module.exports.LOCAL_URI = localURI;
module.exports.ALLOWED_ORIGINS = [localURI, eeServiceURI, webServiceURI];

module.exports.ABOUT = "Simple express service";
