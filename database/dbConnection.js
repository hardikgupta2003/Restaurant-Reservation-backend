import mongoose from "mongoose"

export const dbConnection = () => {
  mongoose.connect(process.env.MONGODB_URL,
    {
        dbName:"FlavourFusion"
    }
  )
  .then(()=>{
    console.log("DataBase connected successfully")

  })
  .catch((err)=>{
    console.log(err);
    console.log("DataBase connection failed")
    process.exit(1)
  })
}
