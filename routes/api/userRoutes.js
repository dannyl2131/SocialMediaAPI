const router = require('express').Router();
const {
     getUsers,
     getUser, 
     createUser, 
     updateUser, 
     deleteUser} = require('../../controllers/userController');

// router.route('/').get(getUsers).post(createUser);
router.get('/users', (req, res) => {
     res.json({message: "api route hit"})
 })

// router.get('/api/users', (req, res) => {
//      console.log('get request received')
//      res.status(200).json({message: 'Get route hit'})
// });
router.post('/', createUser);

router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);
// TODO add POST route to add a new frined to a user's friend list /api/users/:userid/friends/:friendid

// TODO add DELETE route to remove a friend from a user's friend list /api/users/:userid/friends/:friendid
module.exports = router;