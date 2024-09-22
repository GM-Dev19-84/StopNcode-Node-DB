import mongoose from "mongoose";
//import { MongoClient } from "mongodb";
import {Maglie} from "../models/collection-maglie";
import {Felpe}  from "../models/collection-felpe";
import {Scarpe} from "../models/collection-scarpe";







//***************************************************  metodi  ********************************************/// */

// ************************************************   MAGLIE  *************************************************************

export const addMaglie = async (titolo:string,sottoTitolo:string,descrizione:string,taglia:string,prezzo:number,colore:string) => {


   

      try {
             await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, {dbName:"shop"});///"amazon"

               const maglie = new Maglie()

               maglie.titolo = titolo;
               maglie.sottoTitolo = sottoTitolo;
               maglie.descrizione = descrizione;
                
               maglie.taglia = taglia;
               maglie.prezzo = prezzo;
               maglie.colore = colore;

              return await maglie.save();



      } catch (error) {
        console.log(error);
      }finally{
            await mongoose.disconnect();
      }





      
}

///---------------------------------------------------------------------------------------------------------

export const getMaglie = async () => {

    try {
           await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, {dbName:"shop"});

         return await  Maglie.find();           



    } catch (error) {
      console.log(error);
    }finally{
          await mongoose.disconnect();
    }
}
///---------------------------------------------------------------------------------------------------------
export const getMaglieByID = async (id:string) => {

    try {
           await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, {dbName:"shop"});

         return await  Maglie.findById(id);           



    } catch (error) {
      console.log(error);
    }finally{
          await mongoose.disconnect();
    }
}
///---------------------------------------------------------------------------------------------------------



export const deleteMaglieByID = async (id:string) => {

    try {
           await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, {dbName:"shop"});

         return await  Maglie.findByIdAndDelete(id);           



    } catch (error) {
      console.log(error);
    }finally{
          await mongoose.disconnect();
    }
}
///---------------------------------------------------------------------------------------------------------
export const UPdateMaglieByID = async (id:string,titolo:string,sottoTitolo:string,descrizione:string,taglia:string,prezzo:number,quantita:number,colore:string ) => {

  try {
         await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, {dbName:"shop"});


          let Cat = new Maglie();
         Cat.titolo = titolo;
         Cat.sottoTitolo = sottoTitolo;
         Cat.descrizione = descrizione;
         
         Cat.taglia = taglia;
         Cat.prezzo = prezzo;
         Cat.quantita =quantita;
         Cat.colore = colore;  

       return await  Maglie.findByIdAndUpdate(id ,Cat.updateOne({titolo,sottoTitolo,descrizione,taglia,prezzo,quantita,colore})); 
             



  } catch (error) {
    console.log(error);
  }finally{
        await mongoose.disconnect();
  }
}


//*************************************    FELPE    **********************************************************




export const addFelpe = async (titolo:string,sottoTitolo:string,descrizione:string,taglia:string,prezzo:number,colore:string) => {


   

  try {
         await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, {dbName:"shop"});///"amazon"

           const felpe = new Felpe()

           felpe.titolo = titolo;
           felpe.sottoTitolo = sottoTitolo;
           felpe.descrizione = descrizione;
            
           felpe.taglia = taglia;
           felpe.prezzo = prezzo;
           felpe.colore = colore;

          return await felpe.save();



  } catch (error) {
    console.log(error);
  }finally{
        await mongoose.disconnect();
  }





  
}

///---------------------------------------------------------------------------------------------------------

export const getFelpe = async () => {

try {
       await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, {dbName:"shop"});

     return await  Felpe.find();           



} catch (error) {
  console.log(error);
}finally{
      await mongoose.disconnect();
}
}
///---------------------------------------------------------------------------------------------------------
export const getFelpeByID = async (id:string) => {

try {
       await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, {dbName:"shop"});

     return await  Felpe.findById(id);           



} catch (error) {
  console.log(error);
}finally{
      await mongoose.disconnect();
}
}
///---------------------------------------------------------------------------------------------------------



export const deleteFelpeByID = async (id:string) => {

try {
       await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, {dbName:"shop"});

     return await  Felpe.findByIdAndDelete(id);           



} catch (error) {
  console.log(error);
}finally{
      await mongoose.disconnect();
}
}
///---------------------------------------------------------------------------------------------------------
export const UPdateFelpeByID = async (id:string,titolo:string,sottoTitolo:string,descrizione:string,taglia:string,prezzo:number,quantita:number,colore:string ) => {

try {
     await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, {dbName:"shop"});


     const felpe = new Felpe()

     felpe.titolo = titolo;
     felpe.sottoTitolo = sottoTitolo;
     felpe.descrizione = descrizione;
      
     felpe.taglia = taglia;
     felpe.prezzo = prezzo;
     felpe.colore = colore;

   return await  Felpe.findByIdAndUpdate(id ,felpe.updateOne({titolo,sottoTitolo,descrizione,taglia,prezzo,quantita,colore})); 
         



} catch (error) {
console.log(error);
}finally{
    await mongoose.disconnect();
}
}

//************************************    SHOES   *********************************************** */

export const addSCARPE = async (titolo:string,sottoTitolo:string,descrizione:string,taglia:string,prezzo:number,colore:string) => {


   

  try {
    await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, {dbName:"shop"});///"amazon"

           const scarpe = new Scarpe()

           scarpe.titolo = titolo;
           scarpe.sottoTitolo = sottoTitolo;
           scarpe.descrizione = descrizione;
            
           scarpe.taglia = taglia;
           scarpe.prezzo = prezzo;
           scarpe.colore = colore;

          return await  scarpe.save();



  } catch (error) {
    console.log(error);
  }finally{
        await mongoose.disconnect();
  }





  
}
/*
///---------------------------------------------------------------------------------------------------------

export const getSCARPE = async () => {

try {
       await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, {dbName:"shop"});

     return await Scarpe.find();           



} catch (error) {
  console.log(error);
}finally{
      await mongoose.disconnect();
}
}
///---------------------------------------------------------------------------------------------------------
export const getSCARPEByID = async (id:string) => {

try {
       await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, {dbName:"shop"});

     return await  Scarpe.findById(id);           



} catch (error) {
  console.log(error);
}finally{
      await mongoose.disconnect();
}
}
///---------------------------------------------------------------------------------------------------------



export const deleteSCARPEByID = async (id:string) => {

try {
       await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, {dbName:"shop"});

     return await  Scarpe.findByIdAndDelete(id);           



} catch (error) {
  console.log(error);
}finally{
      await mongoose.disconnect();
}
}
///---------------------------------------------------------------------------------------------------------
export const UPdateSCARPEByID = async (id:string,titolo:string,sottoTitolo:string,descrizione:string,taglia:string,prezzo:number,quantita:number,colore:string ) => {

try {
     await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING!, {dbName:"shop"});


     const scarpe = new Scarpe()

     scarpe.titolo = titolo;
     scarpe.sottoTitolo = sottoTitolo;
      scarpe.descrizione = descrizione;
      
      scarpe.taglia = taglia;
      scarpe.prezzo = prezzo;
      scarpe.colore = colore;

   return await  Scarpe.findByIdAndUpdate(id ,scarpe.updateOne({titolo,sottoTitolo,descrizione,taglia,prezzo,quantita,colore})); 
         



} catch (error) {
console.log(error);
}finally{
    await mongoose.disconnect();
}
} */


