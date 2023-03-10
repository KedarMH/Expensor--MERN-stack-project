import { Router } from "express";
import UserApi from "./UserApi.js"
import AuthApi from "./AuthApi.js"
import TransactionsApi from "./TransactionsApi.js"
import passport from "passport";

const router = Router();

router.use('/transaction', passport.authenticate('jwt', { session: false }), TransactionsApi);
router.use('/auth', AuthApi);
router.use('/user', UserApi)

export default router;