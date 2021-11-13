const { Router } = require("express");
const { voicesController } = require("../controllers/voices.controller");

const router = Router();

router.get("/", voicesController.getVoices);
router.get("/fetch", voicesController.fetchVoices);

module.exports = router;
