document.getElementById('generatePdf').addEventListener('click', function () {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF('p', 'mm', 'a4');

  const curriculoElement = document.getElementById('curriculo');
  if (curriculoElement) {
      pdf.html(curriculoElement, {
          callback: function (pdf) {
              pdf.save("curriculo.pdf");
          },
          x: 10,
          y: 10,
          width: 180 
      });
  } else {
      console.error("Elemento 'curriculo' não encontrado!");
  }
});