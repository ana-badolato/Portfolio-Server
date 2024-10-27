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
    Category: {
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
  }
)