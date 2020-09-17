import Joi from 'joi';

const LOGIN_SCHEMA = Joi.object().keys({
    email: Joi.string().max(100).required(),
    password: Joi.string().min(8).max(30).required()
  });
  
  export function validateUserCreation(req, res, next) {
    try {
      Joi.assert(req.body, CREATE_USER_SCHEMA);
  
      next();
    } catch (err) {
      next(err);
    }
  }
  
  export function validateLogin(req, res, next) {
    try {
      Joi.assert(req.body, LOGIN_SCHEMA);
  
      next();
    } catch (err) {
      next(err);
    }
  }