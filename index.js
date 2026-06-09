import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("How have you been doing?");
});

app.get("/health", (req, res) => {
  res.send("OK");
});

app.use("not-found", (req, res) => {
  res.status(404).send("Not Found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

