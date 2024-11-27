
const archivos = {
  'Génesis': 'genesis1.html',
  'Éxodo': 'exodo1.html',
  'Levítico': 'levitico1.html',
  'Números': 'numeros1.html',
  'Deuteronomio': 'deuteronomio1.html',
  'Josué': 'joshua1.html',
  'Jueces': 'jueces1.html',
  'Rut': 'ruth1.html',
  '1 Samuel': '1samuel1.html',
  '2 Samuel': '2samuel1.html',
  '1 Reyes': '1reyes1.html',
  '2 Reyes': '2reyes1.html',
  '1 Crónicas': '1cronicas1.html',
  '2 Crónicas': '2cronicas1.html',
  'Esdras': 'esdras1.html',
  'Nehemías': 'nehemias1.html',
  'Ester': 'ester1.html',
  'Job': 'job1.html',
  'Salmos': 'salmos1.html',
  'Proverbios': 'proverbios1.html',
  'Eclesiastés': 'eclesiastes1.html',
  'Cantares': 'cantares1.html',
  'Isaías': 'isaias1.html',
  'Jeremías': 'jeremias1.html',
  'Lamentaciones': 'lamentaciones1.html',
  'Ezequiel': 'ezequiel1.html',
  'Daniel': 'daniel1.html',
  'Oseas': 'oseas1.html',
  'Joel': 'joel1.html',
  'Amós': 'amos1.html',
  'Abdías': 'abadias1.html',
  'Jonás': 'jonas1.html',
  'Miqueas': 'miqueas1.html',
  'Nahúm': 'nahum1.html',
  'Habacuc': 'habacuc1.html',
  'Sofonías': 'sofonias1.html',
  'Ageo': 'ageo1.html',
  'Zacarías': 'zacarias1.html',
  'Malaquías': 'malaquias1.html',
  'Mateo': 'mateo1.html',
  'Marcos': 'marcos1.html',
  'Lucas': 'lucas1.html',
  'Juan': 'juan1.html',
  'Hechos': 'hechos1.html',
  'Romanos': 'romanos1.html',
  '1 Corintios': '1corintios1.html',
  '2 Corintios': '2corintios1.html',
  'Gálatas': 'galatas1.html',
  'Efesios': 'efesios1.html',
  'Filipenses': 'filipenses1.html',
  'Colosenses': 'colosenses1.html',
  '1 Tesalonicenses': '1tesalonicenses1.html',
  '2 Tesalonicenses': '2tesalonicenses1.html',
  '1 Timoteo': '1timoteo1.html',
  '2 Timoteo': '2timoteo1.html',
  'Tito': 'tito1.html',
  'Filemón': 'filemon1.html',
  'Hebreos': 'hebreos1.html',
  'Santiago': 'santiago1.html',
  '1 Pedro': '1pedro1.html',
  '2 Pedro': '2pedro1.html',
  '1 Juan': '1juan1.html',
  '2 Juan': '2juan1.html',
  '3 Juan': '3juan1.html',
  'Judas': 'judas1.html',
  'Apocalipsis': 'apocalipsis1.html'
};

const menu = document.getElementById('menu');

menu.addEventListener('change', function() {
  const valorSeleccionado = menu.value;
  const archivo = archivos[valorSeleccionado];
  window.location.href = archivo;
});

});


