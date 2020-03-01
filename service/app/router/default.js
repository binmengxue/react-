module.exports = app => {
  const { router, controller } = app;
  router.get("/default/index", controller.default.home.index);
  router.get("/default/getArticeList", controller.default.home.getArticleList);
  router.get(
    "/default/getArticleById/:id",
    controller.default.home.getArticleById
  );
  router.get("/default/getTypeInfo", controller.default.home.getTypeInfo);
  router.get("/default/getListId/:id", controller.default.home.getListId);
};
