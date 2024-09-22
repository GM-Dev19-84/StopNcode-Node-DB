import { config } from "dotenv";
config();//import della stringa  del key mongo env

import * as orm from "./database/DB-orm";






//***************************** */ FELPE ******************************************************************************//

const insertORM_FELPE = async () =>{
  //struttura dati--->  ("titolo","sottoTitolo","descrizione","taglia",prezzo,"colore"))
 
 
   //console.log(await orm.insertCategoria("T-shirt","Maniche-corte","cotone 100%","xS-s",12.00,"Nero,verde,blue"))
    //console.log(await orm.insertCategoria("T-shirt","Maniche-corte","cotone 100%","-M-L-XL",18.00,"Nero,verde,blue"))
    //console.log(await orm.insertCategoria("Scarpe","Nike","Traspiranti","40-40.5-41-42-44",58.00,"Nero,verde,blue"))
    console.log(await orm.addFelpe("Felpe","CappuccioOOOKKKKK2","Made-UK","-M-L-XL",18.00,"Nero"))
 }
 //insertORM_FELPE()
 
 //----------------------------------------------------------------------------------------//
 const getORM_FELPE = async () =>{
     
       console.log(await orm.getMaglie())
   }
 // getORM_FELPE()
 //----------------------------------------------------------------------------------------//
  const getID_ORM_FELPE = async () =>{
 
       console.log(await orm.getMaglieByID(""))
   }
  // getID_ORM_FELPE()
 
 //----------------------------------------------------------------------------------------//
 
   
   const deleteID_ORM_FELPE = async () =>{
 
     console.log(await orm. deleteMaglieByID("66e6e27475ce8ef0322066a9"))
 }
 //deleteID_ORM_FELPE()
 //----------------------------------------------------------------------------------------//
 
 
 const UP_DATE_ID_ORM_FELPE = async () =>{
 
     //console.log(await orm. UPdateCategoriaByID("66e6e27475ce8ef0322066a9","nome","taglie",20,99,"colore"))
     console.log(await orm.UPdateMaglieByID("66e6e69fa204bc3ecd63f7e5","Felpaccia","Cappuccio-NO","MadeCINA","S-M-L-XL",28.00,50,"Nero,verde,blue"))
 }
 //UP_DATE_ID_ORM_FELPE()

//************************************* */       FINE FELPE  ******************************************************************//

//MAGLIE //
/***************************************  maglie     **************************************** */
const insertORM_MAGLIE = async () =>{
 //struttura dati--->  ("titolo","sottoTitolo","descrizione","taglia",prezzo,"colore"))


  //console.log(await orm.insertCategoria("T-shirt","Maniche-corte","cotone 100%","xS-s",12.00,"Nero,verde,blue"))
   //console.log(await orm.insertCategoria("T-shirt","Maniche-corte","cotone 100%","-M-L-XL",18.00,"Nero,verde,blue"))
   //console.log(await orm.insertCategoria("Scarpe","Nike","Traspiranti","40-40.5-41-42-44",58.00,"Nero,verde,blue"))
   console.log(await orm.addMaglie("Maglie","Cappuccio3","MadeNINJA","-M-L-XL",18.00,"Nero"))
}
//insertORM_MAGLIE()

//----------------------------------------------------------------------------------------//
const getORM_MAGLIE = async () =>{
    
      console.log(await orm.getMaglie())
  }
// getORM_MAGLIE()
//----------------------------------------------------------------------------------------//
 const getID_ORM_MAGLIE = async () =>{

      console.log(await orm.getMaglieByID(""))
  }
 // getID_ORM_MAGLIE()

//----------------------------------------------------------------------------------------//

  
  const deleteID_ORM_MAGLIE = async () =>{

    console.log(await orm. deleteMaglieByID("66e6e27475ce8ef0322066a9"))
}
//deleteID_ORM_MAGLIE()
//----------------------------------------------------------------------------------------//


const UP_DATE_ID_ORM_MAGLIE = async () =>{

    //console.log(await orm. UPdateCategoriaByID("66e6e27475ce8ef0322066a9","nome","taglie",20,99,"colore"))
    console.log(await orm.UPdateMaglieByID("66e6e69fa204bc3ecd63f7e5","Felpaccia","Cappuccio-NO","MadeCINA","S-M-L-XL",28.00,50,"Nero,verde,blue"))
}
//UP_DATE_ID_ORM_MAGLIE()

//***********************                FINE MAGLIE ********************************************************************** */





//**************** SCARPE ************************** */


const insertORM_SCARPE = async () =>{
  //struttura dati--->  ("titolo","sottoTitolo","descrizione","taglia",prezzo,"colore"))
 
 
   //console.log(await orm.insertCategoria("T-shirt","Maniche-corte","cotone 100%","xS-s",12.00,"Nero,verde,blue"))
    //console.log(await orm.insertCategoria("T-shirt","Maniche-corte","cotone 100%","-M-L-XL",18.00,"Nero,verde,blue"))
    //console.log(await orm.insertCategoria("Scarpe","Nike","Traspiranti","40-40.5-41-42-44",58.00,"Nero,verde,blue"))
   console.log(await orm.addSCARPE("Nike","Joordan","Made-UK","40-41-42-43-44-",108.00,"Nero-bianche-rosse"))
 }
 insertORM_SCARPE()
 /* 
 //----------------------------------------------------------------------------------------//
 const getORM_SCARPE = async () =>{
     
       console.log(await orm.getSCARPE())
   }
 // getORM_SCARPE()
 //----------------------------------------------------------------------------------------//
  const getID_ORM_SCARPE = async () =>{
 
       console.log(await orm.getSCARPEByID(""))
   }
  // getID_ORM_SCARPE()
 
 //----------------------------------------------------------------------------------------//
 
   
   const deleteID_ORM_SCARPE = async () =>{
 
     console.log(await orm. deleteSCARPEByID("66e6e27475ce8ef0322066a9"))
 }
 //deleteID_ORM_SCARPE()
 //----------------------------------------------------------------------------------------//
 
 
 const UP_DATE_ID_ORM_SCARPE = async () =>{
 
     //console.log(await orm. UPdateCategoriaByID("66e6e27475ce8ef0322066a9","nome","taglie",20,99,"colore"))
     console.log(await orm.UPdateMaglieByID("66e6e69fa204bc3ecd63f7e5","Felpaccia","Cappuccio-NO","MadeCINA","S-M-L-XL",28.00,50,"Nero,verde,blue"))
 }
 //UP_DATE_ID_ORM_SCARPE() */
console.log(process.env.MONGO_ATLAS_CONNECTION_STRING)

