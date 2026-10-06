// Atualiza o ano do copyright automaticamente (o HTML tem um valor de reserva).
(function () {
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();