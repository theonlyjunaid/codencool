// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "../../middleware/mongoose";
import User from "../../model/User";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        console.log(req.body);

        const {
            name,
            email,
            password,
            role,
            Category,
            SubCategory,
            CompanyName,
            CompanyLocation,
            Linkedin
        } = req.body;
        if(!name || !email || !password || !role){
            res.status(400).json({ success: false, message: "Please fill all the fields" });
        }
        else{
            let user = await User.findOne({ email: email });
            if (user) {
                res.status(400).json({ success: false, message: 'User already exists' });
            } else {  
        try {
            const user = new User({
                name: name,
                email: email,
                password: password,
                role: role,
                category: Category,
                subCategory: SubCategory,
                companyName: CompanyName,
                companyLocation: CompanyLocation,
                linkedin: Linkedin

            });
            const userData = await user.save();
            console.log(userData);
            res.status(200).json({ success: true, message: "Account Created SuccessFully" });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    }
    }
    else {
        res.status(400).json({ message: 'This method is not allowed' });
    }
}

export default connectDB(handler);