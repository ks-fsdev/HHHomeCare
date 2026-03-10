import HomeDisplay from "@/app/components/HomeDisplay";
import { connectDB } from "../../lib/db";
import AuthForm from "../components/AuthForm";

export default async function Home() {
  // * connecting to db
  await connectDB();

  return (
    <main>
      <HomeDisplay />
    </main>
  );
}
