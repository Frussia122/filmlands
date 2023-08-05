const tokenModel = require('../models/token-model');
const ApiError = require('../exception/api-error');
const tokenService = require('../service/token-service')

module.exports = function(roles) {
    return function(req, res, next) {
        try {
            const authorizationHeader = req.headers.authorization;
            if(!authorizationHeader){
                return next(ApiError.UnauthorizedError());
            }
            const accessToken = authorizationHeader.split(' ')[1];
            if (!accessToken){
                return next(ApiError.UnauthorizedError());
            }
           const {role: userRoles} = tokenService.validateAccessToken(accessToken);
           console.log(userRoles);
           let hasRole = false;
           userRoles.forEach(role => {
            if(roles.includes(role)){
                hasRole = true;
            }
           })
           if(!hasRole){
            return next(ApiError.UnauthorizedError());
            }
            
            next();
        }catch(e) {
            return next(ApiError.UnauthorizedError());
        }
    
    }}