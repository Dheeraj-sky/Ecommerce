
const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async() => {
	try {
		const conn = await mongoose.connect(process.env.DATABASE, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
     
		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
	} catch(error) {
		console.log(`error: ${error.message}`);
		// console.log(error);
		process.exit();
	}
};
module.exports = connectDB;