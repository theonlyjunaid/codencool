// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "../../middleware/mongoose";
import Referral from "../../model/Referral";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        console.log(req.body);
        const {
            name,
            email,
            Category,
            SubCategory,
            CompanyName,
            CompanyLocation,
            Github,
            Linkedin,
            Portfolio
         } = req.body;
            try {
                const referral = new Referral({
                    name: name,
                    email: email,
                    category: Category,
                    subCategory: SubCategory,
                    companyName: CompanyName,
                    companyLocation: CompanyLocation,
                    github: Github,
                    linkedin: Linkedin,
                    portfolio: Portfolio

                });
                const newReferral = await referral.save();
                console.log(newReferral);
                res.status(200).json({success:true,message:"Referral added successfully"});
            } catch (error) {
                res.status(400).json({success:false, message: error.message });
            }
    }
    else {
        res.status(400).json({ message: 'This method is not allowed' });
    }
}

export default connectDB(handler);