const express = require("express");
const app = express();

const port = 5005;

app.get("/api/hello", (req, res) => {
  res.send({
    message: "Hello :)",
  });
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Api server is running on port ${port}`);
});
