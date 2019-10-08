
function aggiungi(tabella) {
var table = document.getElementById("tabella");
var row = table.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
cell1.innerHTML = "<br><div class='form-group'><center><label for='Nome'>Nome</label><center><br><input type='Nome' placeholder='Inserisci qui'/></div>";
cell2.innerHTML = "<br><div class='form-group'><center><label for='Cognome'>Cognome</label><center><br><input type='Cognome' placeholder='Inserisci qui'/></div>";
cell3.innerHTML ="<br><div class='form-group'><center><label for='Data'>Data di nascita</label><center><br><input type='GG' placeholder='GG' style='width:50px'>-<input type='MM'placeholder='MM' style='width:50px'>-<input type='AAAA'placeholder='AAAA' style='width:50px'></div>";
}



