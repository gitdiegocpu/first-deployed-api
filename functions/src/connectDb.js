import { initializeApp, cert  } from "firebase-admin/app";
import { getFirestore } from 'firebase-admin/firestore'
import { creds } from '../creds.js'

initializeApp({
    credentials: cert(creds),
})

const db = getFirestore()

export default db