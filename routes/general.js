import express from "express";
import {
  getUser,
  getPropertiesList,
  getProperties,
  storeProperties,
  updateProperties,
  destroyProperties,
} from "../controllers/general.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/user/:id", getUser);

router.get("/show-properties-list", getPropertiesList);
router.get("/show-properties/:id", getProperties);
router.post("/store-properties", upload.single("image"), storeProperties);
router.post("/update-properties", updateProperties);
router.post("/delete-properties", destroyProperties);

export default router;
