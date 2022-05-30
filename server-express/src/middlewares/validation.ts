import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export function questionValidation(req: Request, res: Response, next: NextFunction){
  const QuestionSchema = Joi.object().keys({
    title: Joi.string().required(),
    text: Joi.string().allow(null, "").default(""),
    scope: Joi.string().allow(null, "").default(""),
    date: Joi.date(),
  })
  const { error } = QuestionSchema.validate(req.body);

  if(error){
    res.status(422).json({
      message: `Invalid request ${error.message}`,
      data: req.body
    })
  } else {
    next();
  }
}