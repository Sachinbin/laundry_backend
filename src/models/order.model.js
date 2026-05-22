const { default: mongoose } = require("mongoose");

let orderSchema = new mongoose.Schema(
    {
        customerName: {
            type: String,
            trim: true
        },
        clothes: [
            {
                name: {
                    type:String,
                    enum: ['saree', "T-shirt", 'other'],
                    default: "other"

                },
                amountPerCloth: {
                    type: Number,
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                }
            }
        ],
        totalExpense: {
            type: String,
            default: 0
        }
    }, {
    timestamps: true
}
)

orderSchema.pre("save",function (){
    let total = 0;
    this.clothes.forEach((item)=>{
        return total +=item.amountPerCloth*item.quantity
    })

    this.totalExpense = total
})

let OrderModel = mongoose.model('oredrs', orderSchema);
module.exports = OrderModel;