import { connectDB } from "./lib/db";

export default async function Home() {
  // * connecting to db
  await connectDB();

  return (
    <main className="p-10">
      <h1>Page is live...</h1>
    </main>
  );
}
