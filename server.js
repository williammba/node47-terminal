import express from "express";

const app = express();

app.get("/scan", (req, res) => {
  res.json({ result: "NO CLEAN BET" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running");
});
