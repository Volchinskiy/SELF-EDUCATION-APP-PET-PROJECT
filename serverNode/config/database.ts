import config from "config";
import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI: string = config.get("mongoURI");
    await connect(mongoURI);
    // tslint:disable-next-line: no-console
    console.log("MongoDB Connected...");
  } catch (err: any) {
    // tslint:disable-next-line: no-console
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;