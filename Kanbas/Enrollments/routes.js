import express from "express";
import {
  enrollUserInCourse,
  unenrollUserFromCourse,
  getAllEnrollments,
} from "./dao.js";

const router = express.Router();

// Get all enrollments
router.get("/enrollments", (req, res) => {
  try {
    const enrollments = getAllEnrollments();
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Enroll a user in a course
router.post("/enrollments", (req, res) => {
  const { userId, courseId } = req.body;
  if (!userId || !courseId) {
    return res.status(400).json({ error: "userId and courseId are required" });
  }
  try {
    const enrollment = enrollUserInCourse(userId, courseId);
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Unenroll a user from a course
router.delete("/enrollments/:id", (req, res) => {
  const { id } = req.params;
  try {
    unenrollUserFromCourse(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

export default router;

