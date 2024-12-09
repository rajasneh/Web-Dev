const mongoose=require("mongoose");
const{Schema}=mongoose;

main()
    .then(() => console.log("Connection sucessful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
}

const orderSchema=new Schema({
   item:String,
   price:Number
});

const customerSchema=new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order"
        },
    ],
});


customerSchema.post("findOneAndDelete",async (customer) => {
    if(customer && customer.orders.length){
        await Order.deleteMany({_id: {$in: customer.orders}   })
    }
    console.log("Post middlewares");
});

const Order=mongoose.model("Order",orderSchema);
const Customer=mongoose.model("Customer",customerSchema);

const findCustomer=async () => {
   
    let result=await Customer.find({}).populate("orders");
    console.log(result[0]);
}; 
// findCustomer();


const addCust=async () => {
    let newCust= new Customer({
        name:"Harsh Raj"
    });


    let newOrder=new Order({
        item:"Ice cream",
        price:80,
    });
    newCust.orders.push(newOrder);
    await newOrder.save();
    await newCust.save();
}

const delCust=async () => {
    let data=await Customer.findByIdAndDelete("6756d82d5503bb6bfb1c604f");
    console.log(data);
}
delCust();
// addCust();

// const addOrders=async() =>{
//     let res=await Order.insertMany([
//         {item: "Samosa",price:12},
//         {item:"Chips",price:10},
//         {item:"Chocolate",price:40}
//     ]);
//     console.log(res);
// };
// addOrders();

