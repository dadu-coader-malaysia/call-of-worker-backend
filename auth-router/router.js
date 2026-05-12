const express = require('express');
const controller = require('./controller');


const router = express.Router();
router.route('/register').post(controller.register);
router.route('/login').post(controller.login);
router.route('/logout').post(controller.logout);
router.route('/newpost').post(controller.newPost);


router.route('/deleteprofile').delete(controller.deleteProfile);
router.route('/deletepost').delete(controller.deletePost);
router.route('/deleteworker').delete(controller.deleteWorker);


router.route('/home').get(controller.home);
router.route('/post').get(controller.post);
router.route('/profile').get(controller.profile);
router.route('/workers').get(controller.workers);  
router.route('/services').get(controller.services);
router.route('/contact').get(controller.contact);
router.route('/about').get(controller.about);
router.route('/dev').get(controller.dev);


router.route('/updateprofile').put(controller.updateProfile);
router.route('/about').put(controller.about);
router.route('/services').put(controller.services);
router.route('/contact').put(controller.contact);
router.route('/home').put(controller.home);
router.route('/post').put(controller.post);
router.route('/profile').put(controller.profile);
router.route('/workers').put(controller.workers);

router.route('/dev').post(controller.dev);




module.exports = router;
