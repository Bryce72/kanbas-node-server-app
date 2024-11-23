import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  // Get all assignments
  app.get("/api/assignments", (req, res) => {
    const assignments = dao.findAllAssignments();
    res.send(assignments);
  });

  // Create a new assignment
  app.post("/api/assignments", (req, res) => {
    const newAssignment = dao.createAssignment(req.body);
    res.send(newAssignment);
  });

  // Update an assignment
  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const updatedAssignment = dao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(updatedAssignment);
  });

  // Delete an assignment
  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const status = dao.deleteAssignment(assignmentId);
    res.send(status);
  });

  // Get assignments for a specific course
  app.get("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const assignments = dao.findAssignmentsForCourse(courseId); // Assuming a method like this exists
    res.json(assignments);
  });

  // Create an assignment for a specific course
  app.post("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const assignment = {
      ...req.body,
      course: courseId,
    };
    const newAssignment = dao.createAssignment(assignment);
    res.send(newAssignment);
  });
}