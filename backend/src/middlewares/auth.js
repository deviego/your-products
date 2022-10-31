import  Jwt from "jsonwebtoken";
import authConfig from "../config/auth"
import {promisify} from 'util'


export default async (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).json({error: 'Token was not provided aqui'}) 
    }

    const [ ,token] = authHeader.split(' ')

    try {
        const decode = await promisify(Jwt.verify)(token, authConfig.secret)

        req.userId = decode.id
        return next()
        
    } catch (error) {
        console.log('error',error.message)
        return res.status(401).json({error: "invalid token"})
    }
    
    
}