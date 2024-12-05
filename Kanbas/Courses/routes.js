import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";

export default function CourseRoutes(app) {




app.post("/api/courses", async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
});
 


app.put("/api/courses/:courseId", async (req, res) => {
  const { courseId } = req.params;
  const courseUpdates = req.body;
  const status = await dao.updateCourse(courseId, courseUpdates);
  res.send(status);
});

app.delete("/api/courses/:courseId", async (req, res) => {
  const { courseId } = req.params;
  const status = await dao.deleteCourse(courseId);
  res.send(status);
});


app.post("/api/courses/:courseId/modules", async (req, res) => {
  const { courseId } = req.params;
  const module = {
    ...req.body,
    course: courseId,
  };
  const newModule = await modulesDao.createModule(module);
  res.send(newModule);
});



app.get("/api/courses/:courseId/modules", async (req, res) => {
  const { courseId } = req.params;
  const modules = await modulesDao.findModulesForCourse(courseId);
  res.json(modules);
});




}




