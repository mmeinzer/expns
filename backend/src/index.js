require("dotenv").config({ path: "variables.env" });
const cookieParser = require("cookie-parser");
const createServer = require("./createServer");

const server = createServer();

server.express.use(cookieParser());

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  details => {
    console.log(details);
  }
);
