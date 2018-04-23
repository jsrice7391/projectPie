const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    client: {type: String, required: true},
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    pm: {type: String, required: true},
    acd: {type: String, required: true},
    ae: {type: String, required: true},
    sd: {type: String, required: true},
    ed: {type: String, required: true},
    links: [],
    workers: []
  },
  { timestamps: { createdAt: "created_at" } }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;

