const { Schema, model } = require ("mongoose");
const { type } = require("os");
const { boolean } = require("webidl-conversions");

const projectSchema = new Schema(
  {
    title: {
      type: String
    },
    resume: {
      type: String
    },
    description: {
      type: String
    },
    category: {
      type: String,
      enum: ["Web Development", "UX/UI"]
    },
    skills: {
      type: [String]
    },
    linkWeb: {
      type: String
    },
    linkGit: {
      type: String
    },
    img: {
      type: String
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

const Project = model("Project", projectSchema);

module.exports = Project;