"use client";

import { useState } from "react";

export default function CharacterCreate() {

  const [name, setName] = useState("");
  const [gender, setGender] = useState("Unknown");
  const [occupation, setOccupation] = useState("Knight");
  const [magic, setMagic] = useState("Nature Magic");
  const [message, setMessage] = useState("");

  function createCharacter() {

    const bannedNames = [
      "elfaria",
      "elfaria willows",
      "elfaria fleur de willows"
    ];

    if (bannedNames.includes(name.toLowerCase().trim())) {
      setMessage(
        "That name belongs to the Warden of the Whispering Willows. Choose another name."
      );
      return;
    }

    const tag =
      Math.random()
        .toString(36)
        .substring(2, 7)
        .toUpperCase();

    setMessage(
      `Welcome ${name}#${tag}. Your journey in Lunaries begins.`
    );
  }


  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        Create Your Traveler
      </h1>


      <div className="space-y-4 max-w-md">


        <input
          placeholder="Traveler Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="w-full p-3 rounded bg-slate-800"
        />


        <select
          value={gender}
          onChange={(e)=>setGender(e.target.value)}
          className="w-full p-3 rounded bg-slate-800"
        >
          <option>Female</option>
          <option>Male</option>
          <option>Other</option>
        </select>



        <select
          value={occupation}
          onChange={(e)=>setOccupation(e.target.value)}
          className="w-full p-3 rounded bg-slate-800"
        >
          <option>Knight</option>
          <option>Scholar</option>
          <option>Ranger</option>
          <option>Alchemist</option>
          <option>Traveler</option>
        </select>



        <select
          value={magic}
          onChange={(e)=>setMagic(e.target.value)}
          className="w-full p-3 rounded bg-slate-800"
        >
          <option>Nature Magic</option>
          <option>Flame Magic</option>
          <option>Frost Magic</option>
          <option>Shadow Magic</option>
          <option>Celestial Magic</option>
        </select>



       <a
  href="/chapter1"
  className="bg-blue-600 px-6 py-3 rounded-lg"
>
  Begin My Story
</a>


        <p className="text-lg mt-4">
          {message}
        </p>


      </div>

    </main>
  );
}