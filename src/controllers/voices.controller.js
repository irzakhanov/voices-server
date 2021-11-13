const Voice = require("../models/Voice.model");
const axios = require("axios");

module.exports.voicesController = {
  fetchVoices: async (req, res) => {
    try {
      const voicesDb = await Voice.find();

      const response = await axios.get(process.env.API);

      const voices = response.data.filter((item) => !voicesDb.some((e) => e.id === item.id));

      await Voice.create(voices);

      return res.json({ message: "Данные успешно полученны и сохранены в базе данных" });
    } catch (error) {
      console.log(error.toString());
      return res.status(400).json({ message: "Server error", error });
    }
  },
  getVoices: async (req, res) => {
    try {
      const voices = await Voice.find();

      return res.json(voices);
    } catch (error) {
      console.log(error.toString());
      return res.status(400).json({ message: "Server error", error });
    }
  },
};
