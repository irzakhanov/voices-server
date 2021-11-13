const { Router } = require("express");

const router = Router();

router.use("/voices", require("./voices.route"));

module.exports = router;
