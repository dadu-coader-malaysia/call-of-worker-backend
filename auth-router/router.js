const express = require('express');
const controller = require('../controllers/controllers');


const router = express.Router();
//Post routes register, login and logout, newpost
router.route('/register').post(controller.register);
router.route('/login').post(controller.login);
router.route('/logout').post(controller.logout);


router.route('/subscription')
.post(controller.subscription)
.put(controller.subscription)
.delete(controller.subscription)
.get(controller.subscription);


router.route('/home')
.get(controller.home)
.post(controller.home)
.put(controller.home)
.delete(controller.home);


router.route('/post')
.get(controller.post)
.post(controller.post)
.put(controller.post)
.delete(controller.post);


router.route('/profile')
.get(controller.profile)
.put(controller.profile)
.delete(controller.profile)
.post(controller.profile);


router.route('/workers')
.get(controller.workers)
.post(controller.workers)
.put(controller.workers)
.delete(controller.workers);


router.route('/services')
.get(controller.services)
.put(controller.services)
.delete(controller.services)
.post(controller.services);


router.route('/contact')
.get(controller.contact)
.put(controller.contact)
.delete(controller.contact)
.post(controller.contact);


router.route('/about')
.get(controller.about)
.put(controller.about)
.delete(controller.about)
.post(controller.about);


router.route('/dev').get(controller.dev);






module.exports = router;
