const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProducts,
  deleteProduct,
  getSingleProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleWare/auth");
const router = express.Router();

router.route("/products").get(getAllProducts);
router
  .route("/admin/products/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router
  .route("/admin/products/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProducts)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)
  .get(getSingleProduct);

router.route("/product/:id").get(getSingleProduct);
router.route("/review").put(isAuthenticatedUser, createProductReview);
router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
