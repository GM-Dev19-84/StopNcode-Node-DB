import mongoose from "mongoose";




//schema
interface ICatMaglie{
    titolo:string,
    sottoTitolo?: string,
    taglia: string,
    prezzo: number,
    quantita:number,
    colore:string,
    descrizione?:string,
    dataCreazione: Date,
    attiva:boolean
}


const maglieSchema = new mongoose.Schema<ICatMaglie>({

    //regole:
      titolo: { type:String,required: true},
      sottoTitolo: {type: String },
      taglia:{type:String,required:true},
      prezzo:{type:Number,required:true},
      quantita:{type:Number},
      colore:{type:String,required:true},
      descrizione:{type:String},
      dataCreazione:{type:Date,default: Date.now()},



});
export const Maglie = mongoose.model<ICatMaglie>("Maglie",maglieSchema,"Maglie");//collection maglie

  