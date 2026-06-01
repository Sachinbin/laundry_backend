const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
  },
  service: {
    type: String,
    required: true,
    enum: ['Normal Iron', 'Steam Iron', 'Dry Cleaning']
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  due: {
    type: Date, 
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending'
  },

  
  tower: {
    type: String,
    required: true
  },
  flat: {
    type: String,
    required: true
  },
  totalAmount:{
    type:Number,
    default:0,
  }

}, {
  timestamps: true
});

orderSchema.pre("save",function(){
    return this.totalAmount = this.amount*this.items;
})


let OrderModel = mongoose.model('Order', orderSchema);;
module.exports = OrderModel;