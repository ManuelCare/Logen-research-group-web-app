import { useEffect } from "react";

export default function About() {
  useEffect(()=>{
    document.title = "Sobre Nosotros"
  }
  );
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Sobre Nosotros</h2>
      </main>
    );
}