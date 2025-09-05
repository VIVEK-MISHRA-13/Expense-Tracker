const User = require('../models/User');
const Income = require('../models/Income');

// Add Income source 
exports.addIncome = async (req,res)=>{
    const userId = req.user.id;
    try{
        const {icon,source,amount,date} = req.body;

        // Validation: Check for missing fields
        if(!source || !amount || !date){
            return res.status(400).json({
                message:"All fields are required"
            })
        }

        const newIncome = new Income({
            userId,
            icon,
            source,
            amount,
            date: new Date(date)
        });

        await newIncome.save();
        res.status(200).json(newIncome);

    }catch(err){
        res.status(500).json({message:"Server Error"});
    }

}

// Get all Income source 
exports.getAllIncome = async (req,res)=>{

}

// Add Income source 
exports.deleteIncome = async (req,res)=>{

}

// Download Income source 
exports.downloadIncomeExcel = async (req,res)=>{

}
