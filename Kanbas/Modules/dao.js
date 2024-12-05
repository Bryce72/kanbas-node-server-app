import Database from "../Database/index.js";

export function updateModule(moduleId, moduleUpdates) {
    const { modules } = Database;
    const module = modules.find((module) => module._id === moduleId);
    Object.assign(module, moduleUpdates);
    return module;
}


export function deleteModule(moduleId) {
    return model.deleteOne({ _id: moduleId });
}


export function createModule(module) {
    delete module._id
    return model.create(module);
}



export function findModulesForCourse(courseId) {
    return model.find({ course: courseId });
}
