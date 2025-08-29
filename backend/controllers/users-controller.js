// controllers/usersController.js
import userService from "../services/users-service.js";
import { responseFormat } from "../utils/helper.js";

const usersController = {
  // GET /users
  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res
        .status(200)
        .json(responseFormat("success", users, "All users fetched"));
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // GET /users/:id
  async getUserById(req, res) {
    try {
      const user = await userService.getUserById(parseInt(req.params.id));
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }
      res
        .status(200)
        .json(responseFormat("success", user, "User fetched by id"));
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // GET /users/email/:email
  async getUserByEmail(req, res) {
    try {
      const { email } = req.params;
      const user = await userService.getUserByEmail(email);
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }
      res
        .status(200)
        .json(responseFormat("success", user, "User fetched by email"));
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // POST /users
  async createUser(req, res) {
    try {
      const newUser = await userService.createUser(req.body, req.user?.id);
      res.status(201).json(responseFormat("success", newUser, "User created"));
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // PUT /users/:id
  async updateUser(req, res) {
    try {
      const updatedUser = await userService.updateUser(
        parseInt(req.params.id),
        req.body,
        req.user?.id
      );
      res
        .status(200)
        .json(responseFormat("success", updatedUser, "User updated"));
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // DELETE /users/:id
  async deleteUser(req, res) {
    try {
      const deletedUser = await userService.deleteUser(
        parseInt(req.params.id),
        req.user?.id
      );
      res
        .status(200)
        .json(responseFormat("success", deletedUser, "User deleted"));
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

export default usersController;