import { RequestHandler } from "express";
import { ZodError, ZodType, z } from "zod";
import { UserAttributes } from "../interfaces/user.interface";

const schemaObj = z.object({
  body: z.object({}),
  query: z.object({}),
  params: z.object({}),
});

export const validateUserSignUp = (schema: ZodType<UserAttributes>): RequestHandler => async (req, res, next) => {
  try {
    schemaObj.parse({
      body: req.body,
      query: req.query,
      params: req.params
    });

    await schema.parseAsync(req.body);
    next();

  } catch (error: any) {
    if (error instanceof ZodError) {
      const theExpectedErrorMessage = error.errors.map((error) => error.message);

      return res.status(400).json({
        message: theExpectedErrorMessage[0]
      })
    }
    res.status(500).json({
      message: error.message,
      status: "Zod Failure"
    })
  }
};