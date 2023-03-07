import { useEffect } from "react";

export default function Contact() {
  useEffect(()=>{
    document.title = "Contacto"
  }
  );
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Contacto</h2>
      </main>
    );
}