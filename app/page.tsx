export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">
        Whispers of the Willow
      </h1>

      <p className="text-xl text-slate-300 mb-8">
        The Cursed Warden
      </p>

      <a
        href="/create"
        className="bg-blue-600 px-6 py-3 rounded-lg"
      >
        Begin Journey
      </a>

    </main>
  );
}