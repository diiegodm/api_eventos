const router = require("express").Router();

router.use("/client", require("./api/client.router"))

module.exports = router