const express = require('express');
const router = express.Router();

router.use("/users", require("./api_routes/user.routes"));
router.use("/curso", require("./api_routes/curso.routes"));

module.exports = router;