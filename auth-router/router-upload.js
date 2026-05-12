import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router();


// STORAGE
const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + "-" + file.originalname;

    cb(null, uniqueName);
  },

});


// FILE FILTER
const fileFilter = (req, file, cb) => {

  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/webp"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only images allowed"), false);
  }

};


// MULTER
const upload = multer({
  storage,
  fileFilter,
});


// ROUTE
router.post(
  "/register",

  upload.fields([
    { name: "img", maxCount: 1 },
    { name: "transactionImg", maxCount: 1 },
  ]),

  async (req, res) => {
    try {

      // TEXT DATA
      const {
        name,
        email,
        password,
        phone,
        role,
        bio,
      } = req.body;

      // SKILLS
      const skills = JSON.parse(req.body.skills);

      // IMAGES
      const profileImage =
        req.files.img?.[0]?.filename;

      const transactionImage =
        req.files.transactionImg?.[0]?.filename;

      // SAVE TO DATABASE
      const newUser = {
        name,
        email,
        password,
        phone,
        role,
        bio,
        skills,
        profileImage,
        transactionImage,
      };

      console.log(newUser);

      res.status(201).json({
        message: "Registration successful",
        user: newUser,
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message: "Server Error",
      });

    }
  }
);

export default router;