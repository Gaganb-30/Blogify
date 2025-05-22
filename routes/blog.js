const { Router } = require("express");
const {
  handleAddNewBlog,
  createNewBlog,
  upload,
  handleGetBlog,
  handleCreateNewComment,
} = require("../controllers/blog");

const router = Router();

router.get("/add-new", handleAddNewBlog);

router.post("/", upload.single("coverImage"), createNewBlog);

router.get("/:id", handleGetBlog);

router.post("/comment/:blogId", handleCreateNewComment);

module.exports = router;
