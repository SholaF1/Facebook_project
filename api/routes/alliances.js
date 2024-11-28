const express = require("express");
const router = express.Router();

const { AllianceController } = require("../controllers/alliances");

router.post("/", AllianceController.requestAlliance)
router.post("/:id/cancel", AllianceController.withdrawAllianceRequest)
router.get("/:id/receivedRequests", AllianceController.viewReceivedRequests)

module.exports = router;