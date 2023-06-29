const mongoose = require('mongoose')
// define schema 
const expenseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
},{timestamps:true})
const Expense = mongoose.model('expense',expenseSchema)

module.exports = Expense
