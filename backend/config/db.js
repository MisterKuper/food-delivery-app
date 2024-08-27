import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kolishenkoroman:35537310@cluster0.0caax.mongodb.net/food-delivery-app').then(() => console.log('DB Connected'));
}