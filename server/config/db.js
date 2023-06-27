import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const connectDB = async () => {
	try {
		console.log('MONGO_URI', process.env.MONGO_URI)
		const connection = await mongoose.connect("mongodb+srv://brok3turtl3:Ace861-Fry049@cluster0.16wmlsu.mongodb.net/?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
		console.log(`MongoDB is connected to: ${connection.connection.host}`);
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
};

export default connectDB