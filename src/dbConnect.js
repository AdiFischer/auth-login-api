import { initializeApp, cert ,getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore"
import secrets from "../secrets.js";

export default function dbConnect() {
    if(!getApps().length) { //r we connected? not-empty[]we wanna connect return the connection to fistore
        initializeApp({
            credential: cert(secrets)
        })
    }
    return getFirestore()
}