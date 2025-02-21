import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export async function generatePDF() {
  const payslipElement = document.getElementById("payslip-content");

  if (!payslipElement) return;

  const canvas = await html2canvas(payslipElement, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  
  // Open PDF in a new tab
  const pdfBlob = pdf.output("blob");
  const pdfUrl = URL.createObjectURL(pdfBlob);
  window.open(pdfUrl);
}
