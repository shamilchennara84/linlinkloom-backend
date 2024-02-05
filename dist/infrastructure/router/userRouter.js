"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../../providers/controllers");
const multer_1 = require("../config/multer");
const userAuth_1 = require("../middleware/userAuth");
const userRouter = express_1.default.Router();
userRouter.post("/register", (req, res) => controllers_1.uController.userRegister(req, res));
userRouter.post("/validateOtp", (req, res) => controllers_1.uController.validateUserOTP(req, res));
userRouter.post("/login", (req, res) => controllers_1.uController.userLogin(req, res));
// userRouter.post("/resendOtp", uController.resendOTP);
userRouter.put("/update/:userId", userAuth_1.userAuth, (req, res) => controllers_1.uController.updateProfile(req, res));
userRouter.patch("/update/profileimage/:userId", userAuth_1.userAuth, multer_1.upload.single("image"), (req, res) => controllers_1.uController.updateUserProfileDp(req, res));
userRouter.patch("/remove/profileimage/:userId", userAuth_1.userAuth, (req, res) => controllers_1.uController.removeUserProfileDp(req, res));
// userRouter.post("/addPost", upload.single("Image"), (req, res) =>postController.savePost(req, res)
exports.default = userRouter;
