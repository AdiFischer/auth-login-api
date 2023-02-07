import Jwt from "jsonwebtoken";
import { secretKey } from "../secrets.js";

export function isUserReallyUser(req, res, next) {
    const token = req.headers.authorization
    //verify and decode in 1 step
    const decodedToken = Jwt.verify(token, secretKey)
    //now check that the uid they r req to patch is the 1 in their token
    const requestedUid = req.params.uid
    if (decodedToken.uid !== requestedUid) {
        //what the h?
        res.status(401).send({ message: 'Not authorized' })
        return
        //does not go pass that- not authorized-close the door on them
    }
    //all is good .... go on in...
    req.decoded = decodedToken
    next()
}