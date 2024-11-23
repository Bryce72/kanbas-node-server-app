import Database from "../Database/index.js";

// Enroll a user in a course
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  const newEnrollment = { _id: Date.now(), user: userId, course: courseId };
  enrollments.push(newEnrollment);
  return newEnrollment;
}

// Unenroll a user from a course
export function unenrollUserFromCourse(enrollmentId) {
  const { enrollments } = Database;
  const index = enrollments.findIndex((enrollment) => enrollment._id === parseInt(enrollmentId));
  if (index === -1) {
    throw new Error("Enrollment not found");
  }
  enrollments.splice(index, 1);
}

// Get all enrollments
export function getAllEnrollments() {
  return Database.enrollments;
}

// Get enrollments for a specific user
export function getEnrollmentsByUser(userId) {
  const { enrollments } = Database;
  return enrollments.filter((enrollment) => enrollment.user === userId);
}

// Get enrollments for a specific course
export function getEnrollmentsByCourse(courseId) {
  const { enrollments } = Database;
  return enrollments.filter((enrollment) => enrollment.course === courseId);
}
