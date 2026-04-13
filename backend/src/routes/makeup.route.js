import { Router } from "express";
import { getAllMakeup, getMakeupById, createMakeup, updateMakeup, deleteMakeup } from "../controllers/makeup.controller.js";

const router = Router();

router.get('/makeup', getAllMakeup);
router.get('/makeup/:id', getMakeupById);
router.post('/makeup', createMakeup);
router.put('/makeup/:id', updateMakeup);
router.delete('/makeup/:id', deleteMakeup);

export default router;