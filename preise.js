/* =====================================================================
   PREISLISTE – nur diese Datei bearbeiten, um Preise zu ändern!
   ---------------------------------------------------------------------
   So geht's:
   1. Diese Datei mit einem Texteditor öffnen (z. B. Editor / Notepad).
   2. Jahr und Preise unten ändern. Nur den Text zwischen den
      Anführungszeichen "..." anpassen.
   3. Speichern und die Datei auf den Webserver hochladen. Fertig.

   Neue Zeile hinzufügen: eine bestehende Zeile { ... }, kopieren
   und darunter einfügen. Das Komma am Zeilenende nicht vergessen.
   ===================================================================== */

const PREISJAHR = "2026";

const PREISHINWEIS = "Alle Preise sind unverbindlich. Endgültige Preise nach Absprache.";

const PREISE = [
  {
    gruppe: "Behandlungen",
    eintraege: [
      { name: "Krankengymnastik",    kuerzel: "KG",  dauer: "20–25 min", preis: "34,50 €" },
      { name: "Krankengymnastik",    kuerzel: "KG",  dauer: "45–50 min", preis: "69,00 €" },
      { name: "Manuelle Therapie",   kuerzel: "MT",  dauer: "20–25 min", preis: "38,00 €" },
      { name: "Manuelle Therapie",   kuerzel: "MT",  dauer: "45–50 min", preis: "76,00 €" },
      { name: "Klassische Massage",  kuerzel: "KMT", dauer: "20–25 min", preis: "30,50 €" },
      { name: "Klassische Massage",  kuerzel: "KMT", dauer: "45–50 min", preis: "61,00 €" },
      { name: "Bindegewebsmassage",  kuerzel: "BGM", dauer: "20–25 min", preis: "31,50 €" },
      { name: "Bindegewebsmassage",  kuerzel: "BGM", dauer: "45–50 min", preis: "63,00 €" },
    ],
  },
  {
    gruppe: "Zusatzleistungen",
    eintraege: [
      { name: "Kryotherapie (Kälte)", kuerzel: "",   dauer: "ca. 5 min",  preis: "12,00 €" },
      { name: "Heiße Rolle",          kuerzel: "HR", dauer: "ca. 10 min", preis: "14,00 €" },
      { name: "Hausbesuch",           kuerzel: "HB", dauer: "",           preis: "25,00 €" },
    ],
  },
  {
    gruppe: "Kurse in kleinen Gruppen",
    eintraege: [
      { name: "Wirbelsäulengymnastik", kuerzel: "", dauer: "50 min", preis: "11,00 €" },
      { name: "Beckenbodengymnastik",  kuerzel: "", dauer: "50 min", preis: "11,00 €" },
    ],
  },
];
