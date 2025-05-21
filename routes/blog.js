const { Router } = require("express");
const {
  handleAddNewBlog,
  createNewBlog,
  upload,
} = require("../controllers/blog");

const router = Router();

router.get("/add-new", handleAddNewBlog);

router.post("/", upload.single("coverImage"), createNewBlog);

module.exports = router;
