import express from "express";

const app = express();

app.use(express.json());

const notes = [];

app.post("/api/notes", (req, res) => {
  const data = req.body;
  notes.push(data);
  res.status(201).json({
    message: "note created succesfully",
    note: data,
  });
});

app.get("/api/notes", (req, res) => {
  req.status(200).json({
    message: "notes fetched succesfully",
    note: notes,
  });
});

app.delete("/api/notes/:index", (req, res) => {
  const index = req.params.index;
  notes.splice(index, 1);
  res.status(200).json({
    message: "note deleted succesfully",
  });
});

app.patch("/api/notes/:index", (req, res) => {
  const index = req.params.index;
  const { description } = req.body;
  notes[index].description = description;

  res.status(200).json({
    message: "note upadted succesfully",
    note: notes[index],
  });
});

app.listen(3000, () => {
  console.log("server is running");
});
