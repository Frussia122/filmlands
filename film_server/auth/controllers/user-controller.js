const userService = require('../service/user-service');
const UserService = require('../service/user-service')

class UserController {
    async registration(req, res ,next){
        try{
            const {email, password} = req.body;
            const userData = await userService.registration(email,password);
            res.cookie('refreshTokem',userData.refreshToken,{maxAge:30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        }catch (e){
            console.log(e);
        }
    }

    async login(req, res ,next){
        try{

        }catch (e){
            
        }
    }

    async logout(req, res ,next){
        try{

        }catch (e){
            
        }
    }


    async activate(req, res ,next){
        try{

        }catch (e){
            
        }
    }


    async refresh(req, res ,next){
        try{

        }catch (e){
            
        }
    }


    async getUser(req, res ,next){
        try{
            res.json(['123','456']);
        }catch (e){
            
        }
    }

}

module.exports = new UserController();