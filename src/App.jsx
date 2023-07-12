import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://cdfrzipdmoxiyqnpnquv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkZnJ6aXBkbW94aXlxbnBucXV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwNzU4MjYsImV4cCI6MjAwNDY1MTgyNn0.Z-bpN4tSmre9xKXdtZZQ6CiynjRrn_OeQt-YP5G--po");

function App() {
  const [city, setCity] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
    getCity();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("city").select();
    setCity(data);
  }
  async function getCity() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <>
    <ul>
      {city.map((city) => (
        <li key={city.name}>{city.name}</li>
      ))}
    </ul>
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
    
    </>
  );
}

export default App;