const router = require('express').Router();
const checkAuth = require('../middleware/check-auth');
const MemberController = require('./../controllers/member')

router.post('/signup', MemberController.memberSignup);

router.post('/signin', MemberController.memberSignin);

router.delete("/:memberId", MemberController.memberDelete);

module.exports = router;