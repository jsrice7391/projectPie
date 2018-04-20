const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    links: [],
    workers: []
  },
  { timestamps: { createdAt: "created_at" } }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;




