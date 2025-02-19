const User = require("../models/User");

const updateDetails = async (req, res) => {
  const { userId } = req;
  const updates = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    let message = "";

    if (updates.personal_details) {
      user.personal_details = {
        ...user.personal_details,
        ...updates.personal_details,
      };
      message = "User personal details updated successfully";
    }

    if (updates.experience) {
      user.experience = updates.experience;
      message = "User experience updated successfully";
    }

    if (updates.projects) {
      user.projects = updates.projects;
      message = "User projects updated successfully";
    }

    if (!message) {
      return res.status(400).json({ message: "No fields to update" });
    }

    await user.save();

    res.status(200).json({ message, user });
  } catch (error) {
    console.error("Error updating user details:", error);

    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation error", errors: error.errors });
    }

    if (error.code === 11000) {
      return res.status(400).json({
        message: "Duplicate key error",
        field: Object.keys(error.keyPattern)[0],
      });
    }

    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteProject = async (req, res) => {
  const { userId, projectId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const project = User.project.id(projectId);

    if (!project) {
      return res.status(400).json({
        message: "Project not found",
      });
    }

    user.projects.pull(projectId);

    await user.save();

    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  updateDetails,
  deleteProject,
};
