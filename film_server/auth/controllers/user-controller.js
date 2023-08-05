const userService = require('../service/user-service');
const mailService = require('../service/mail-service');
const userModel = require('../models/user-model');
const roleModel = require('../models/Role-model')
const{validationResult} = require('express-validator');
const ApiError = require('../exception/api-error');

class UserController {
    async registration(req, res ,next){
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            const {email, password} = req.body;
            const userData = await userService.registration(email,password);
            res.cookie('refreshToken',userData.refreshToken,{maxAge:30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        }catch (e){
            next(e);
        }
    }

    async login(req,res,next){
        try{
            const {email, password} = req.body;
            const userData = await userService.login(email, password);
            res.cookie('refreshToken',userData.refreshToken,{maxAge:30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        }catch (e){
            next(e);
        }
    }

    async logout(req, res ,next){
        try{
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        }catch (e){
            next(e);
        }
    }


    async activate(req, res ,next){
        try{
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            return res.redirect("https://ya.ru/")
        }catch (e){
            next(e);
        }
    }


    async refresh(req, res ,next){
        try{
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken',userData.refreshToken,{maxAge:30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        }catch (e){
            next(e);
        }
    }


    async getUser(req, res ,next){
        try{
            const users = await userService.getAllUsers();
            return res.json(users);
        }catch (e){
            next(e);
        }
    }

}

module.exports = new UserController();