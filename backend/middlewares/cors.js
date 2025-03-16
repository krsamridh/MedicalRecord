const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: false,
  optionSuccessStatus: 200,
};

module.exports = cors(corsOptions);
