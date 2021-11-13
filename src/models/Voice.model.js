const { model, Schema } = require("mongoose");

const voiceSchema = {
  language: String,
  providerLanguage: String,
  name: String,
  id: {
    type: String,
    unique: true,
  },
  sex: String,
  provider: String,
  flags: [String],
};

module.exports = model("Voice", voiceSchema);
