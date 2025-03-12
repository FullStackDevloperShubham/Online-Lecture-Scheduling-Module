import express from "express";
import {
  getInstructors,
  addInstructor,
  updateInstructor,
} from "../controllers/instructorController.js";

const router = express.Router();

router.get("/", getInstructors);
router.post("/", addInstructor);
router.put("/:id", updateInstructor);

export default router;
