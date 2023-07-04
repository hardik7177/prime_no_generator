import express from "express"; 
import { Create_Data, Get_All_Data , Get_Data_By_Email , Delete_Data   } from "../controllers/functions.js";


const router = express.Router();

router.post("/" , Create_Data );
router.get("/" , Get_All_Data);
router.get("/:url" , Get_Data_By_Email );
router.delete( "/:url" , Delete_Data );


 export default router;