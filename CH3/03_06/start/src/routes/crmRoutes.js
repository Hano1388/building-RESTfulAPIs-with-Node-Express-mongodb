import { addNewContact, getContacts, getContactWithID } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts)

    // POST endpoint
    .post(addNewContact);

    app.route('/contact/:contactId')
    // GET request for a specific contact
    .get(getContactWithID)
    // PUT request
    .put((req, res) =>
    res.send('PUT request successfull!!!'))
    // DELETE request
    .delete((req, res) =>
    res.send('DELETE request successfull!!!'));
}

export default routes;
