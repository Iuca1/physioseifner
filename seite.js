// Kleine Helfer für die Seite. Die Preise selbst stehen in preise.js.

// Preisliste aus preise.js aufbauen
(function () {
  var ziel = document.getElementById("preisliste");
  if (!ziel || typeof PREISE === "undefined") return;

  document.getElementById("preisjahr").textContent = PREISJAHR;
  document.getElementById("preishinweis").textContent = PREISHINWEIS;

  var html = "";
  PREISE.forEach(function (gruppe) {
    html += '<table class="prices"><caption>' + gruppe.gruppe + "</caption><tbody>";
    var vorher = "";
    gruppe.eintraege.forEach(function (e) {
      var neu = e.name !== vorher;
      html += '<tr class="' + (neu ? "first" : "cont") + '">' +
        '<th scope="row">' + (neu ? e.name + (e.kuerzel ? ' <span class="abbr">' + e.kuerzel + "</span>" : "") : "") + "</th>" +
        '<td class="dur">' + (e.dauer || "") + "</td>" +
        '<td class="price">' + e.preis + "</td></tr>";
      vorher = e.name;
    });
    html += "</tbody></table>";
  });
  ziel.innerHTML = html;
})();

// Heutigen Tag bei den Öffnungszeiten hervorheben
(function () {
  var heute = document.querySelector('.hours tr[data-day="' + new Date().getDay() + '"]');
  if (heute) heute.classList.add("today");
})();

// Jahreszahl im Fußbereich automatisch aktualisieren
document.querySelectorAll(".jahr").forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// Menü auf dem Handy auf- und zuklappen
(function () {
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");
  if (!btn || !nav) return;
  btn.addEventListener("click", function () {
    var offen = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", offen);
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
})();
