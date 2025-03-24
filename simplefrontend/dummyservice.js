// Endpunkt für die Dummy Abfragen
const dummyEndpunkt = "http://localhost:8080/dummies"

// Wartet, bis das DOM komplett geladen ist
document.addEventListener("DOMContentLoaded", () => {
  // Referenzen auf DOM-Elemente
  const tableBody = document.querySelector("#dummyTable tbody");
  const dummyForm = document.getElementById("dummyForm");
  const getDataButton = document.getElementById("getData");

  // Event Listener fürs GET (Button-Klick)
  getDataButton.addEventListener("click", loadDummyData);

  // Event Listener fürs POST (Formular-Submit)
  dummyForm.addEventListener("submit", postDummy);

  /**
   * Lädt die Dummy-Daten per GET vom Server und aktualisiert die Tabelle.
   */
  function loadDummyData() {
    // fetch ruft die REST-Schnittstelle auf
    fetch(dummyEndpunkt)
      .then((response) => {
        // Antwort wird geprüft, ob sie fehlerfrei ist
        if (!response.ok) {
          throw new Error(`Serverfehler: ${response.statusText}`);
        }
        // Falls okay, die Antwort als JSON parsen
        return response.json();
      })
      .then((data) => {
        // Tabelle vorbereiten: alte Zeilen löschen
        tableBody.innerHTML = "";

        // Neue Zeilen mit den Daten erstellen
        data.forEach((item) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.age}</td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch((error) => {
        // Fehler bei fetch auffangen
        console.error("Fehler beim Abrufen der Daten:", error);
      });
  }

  /**
   * POSTet neue Dummy-Daten per Formular an /dummies.
   * @param {Event} event - das Submit-Event des Formulars
   */
  async function postDummy(event) {
    event.preventDefault(); // Verhindert das Standard-Formularverhalten (Seitenreload)

    // Werte aus dem Formular ermitteln
    const name = document.getElementById("dummyName").value.trim();
    const age = document.getElementById("dummyAge").value.trim();

    try {
      // fetch-Aufruf zum Senden der Daten
      const response = await fetch(dummyEndpunkt, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          age: parseInt(age, 10),
        }),
      });

      // Fehler abfangen, wenn der Server nicht OK zurückgibt
      if (!response.ok) {
        throw new Error(`Serverfehler: ${response.statusText}`);
      }

      // Erfolgsbestätigung ausgeben (z.B. in der Konsole)
      console.log("Dummy erfolgreich hinzugefügt!");

      // Formularfelder zurücksetzen
      dummyForm.reset();

      // Tabelle neu laden, um auch das neu erstellte Dummy-Objekt anzuzeigen
      loadDummyData();
    } catch (error) {
      console.error("Fehler beim Senden der Dummy-Daten:", error);
    }
  }

  
});
