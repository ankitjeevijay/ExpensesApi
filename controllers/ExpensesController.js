const ExpenseModel = require('../models/Expense')
class ExpensesController {

    static Create = async (req,res)=>{
        try{
            const {title, amount, date} = req.body
            const result = new ExpenseModel({
                title:title,
                amount:amount,
                date:date
            })
           await result.save();
           res.status(201).json({
            success:true,
            result
           })

        }catch(error){
            console.log(error)
        }
    }
    static Display = async(req,res)=>{
        try{
            const data = await ExpenseModel.find()
            res.status(200).json({
                data
            })

        }catch(error){
            console.log(error)
        }
    }

}
module.exports = ExpensesController