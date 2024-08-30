// ייבוא ספריית ה-Data Studio Community Component
const dscc = require('@google/dscc');

// פונקציה לרינדור הויזואליזציה
function drawViz() {
  // הטמעת iframe של Google Sheets
  document.body.innerHTML = `
    <iframe src="https://docs.google.com/spreadsheets/d/16WJdARU4dnAHCv1fodfcZ69QAGX1aWN4mUo1qG6Z8p4/edit?rm=minimal" style="width: 100%; height: 100%; border: none;"></iframe>
  `;
}

// קריאה לפונקציה כשנטען דף חדש
dscc.subscribeToData(drawViz);
