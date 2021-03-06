import { Router, Request, Response, NextFunction } from "express";
import questionController from "../../controllers/question.controller";
// import { questionValidation } from "../../middlewares/validation";

const questionRouter: Router = Router();
questionRouter.get("/", questionController.getAllQuestionData.bind(questionController));
// questionRouter.post("/", questionController.addQuestion.bind(questionController));
// questionRouter.put("/:id", questionController.changeQuestion.bind(questionController));
// questionRouter.delete("/:id", questionController.deleteQuestion.bind(questionController));
questionRouter.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

export default questionRouter;