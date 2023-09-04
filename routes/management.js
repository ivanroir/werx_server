import express from "express";
import index, {
  showUser,
  storeUser,
  updateUser,
  destroyUser,
  getCDAList,
  getCDA,
  storeCDA,
  updateCDA,
  destroyCDA
} from "../controllers/management.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/", index);
router.post("/show", showUser);
router.post("/store", upload.single("image"), storeUser);
router.post("/update", updateUser);
router.post("/delete", destroyUser);

router.get("/show-cda-list", getCDAList);
router.post("/show-cda", getCDA);
router.post("/store-cda", upload.array("file"), storeCDA);
router.post("/update-cda", updateCDA);
router.post("/delete-cda", destroyCDA);

export default router;
