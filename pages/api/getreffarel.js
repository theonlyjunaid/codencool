// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "../../middleware/mongoose";
import Referral from "../../model/Referral";

const handler = async (req, res) => {
    let reffer = await Referral.find()
    res.status(200).json({"name":"hola",reffer});

}

export default connectDB(handler);