/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

exports.products = onRequest({ cors: true },
    async (request, response) => {
    logger.info("Hello logs!", {structuredData: true});
    try {
            const collectionName = `products`; // get the collection name from the query string
            const snapshot = await db.collection(collectionName).get();
            const results = [];
            snapshot.forEach(doc => {
                let id = doc.id;
                let data = doc.data();
                results.push({ id, ...data });
            });
            response.status(200).send(results);
        } catch (error) {
            console.log(error);
            response.status(500).send(error);
        }
});
