//import dependencies
const { Schema, model } = require("mongoose");
//only schema and model are needed from mongoose

//create schema data
const PizzaSchema = new Schema({
  //name of pizza
  pizzaName: {
    type: String,
  },
  //name of user that created the pizza
  createdBy: {
    type: String,
  },
  //timestamp of when pizza was created
  createdAt: {
    type: Date,
    default: Date.now,
  },
  //pizza's suggested size
  size: {
    type: String,
    default: "Large",
  },
  //pizza's topping
  toppings: [],
});
//timestamp of any updates to the pizza's data
const Pizza = model("Pizza", PizzaSchema);

//export the Pizza model
module.exports = Pizza;
