
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('./api', apiRoutes);

const {
    getUsers,
    getUser, 
    createUser, 
    updateUser, 
    deleteUser} = require('../controllers/userController');



router.route('/users').get(getUsers).post(createUser);
router.route('/users/:userId').get(getUser).put(updateUser).delete(deleteUser);
module.exports = router;