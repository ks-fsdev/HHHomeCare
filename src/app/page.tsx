import HomeDisplay from "@/app/components/HomeDisplay";
import { connectDB } from "../lib/db";
import InputField from "./components/Input";

export default async function Home() {
  // * connecting to db
  await connectDB();

  return (
    <main>
      <HomeDisplay />
    </main>
  );
}
