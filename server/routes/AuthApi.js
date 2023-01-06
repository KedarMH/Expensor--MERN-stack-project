import { Router } from "express";
const router = Router();

router.post('/register', (req, res) => {

    res.json({ 'message': "user is created" })
})

export default router;