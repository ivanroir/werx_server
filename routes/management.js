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
router.get("/show/:id", showUser);
router.post("/store", upload.single("image"), storeUser);
router.post("/update", updateUser);
router.post("/delete", destroyUser);

router.get("/show-cda-list", getCDAList);
router.get("/show-cda/:id", getCDA);
router.post("/store-cda", upload.array("file[]"), storeCDA);
router.post("/update-cda", updateCDA);
router.post("/delete-cda", destroyCDA);

export default router;
