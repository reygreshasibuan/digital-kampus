'use strict';

function calculateTotalSks() {
  const sksCells = document.querySelectorAll('[data-sks]');
  let total = 0;

  sksCells.forEach((cell) => {
    const sks = Number.parseInt(cell.dataset.sks, 10);
    if (Number.isFinite(sks) && sks >= 0) total += sks;
  });

  const courseCount = sksCells.length;
  const totalSks = document.getElementById('total-sks');
  const summarySks = document.getElementById('summary-sks');
  const totalCourses = document.getElementById('total-courses');

  if (totalSks) totalSks.textContent = String(total);
  if (summarySks) summarySks.textContent = String(total);
  if (totalCourses) totalCourses.textContent = String(courseCount);
}

function setGeneratedDate() {
  const dateElement = document.getElementById('generated-date');
  if (!dateElement) return;

  const now = new Date();
  const formattedDate = new Intl.DateTimeFormat('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric'
  }).format(now);
  dateElement.textContent = `Dokumen simulasi dibuat pada ${formattedDate}.`;
}

function initializeKrsPage() {
  calculateTotalSks();
  setGeneratedDate();

  const printButton = document.getElementById('print-krs');
  if (printButton) {
    printButton.addEventListener('click', () => window.print());
  }
}

document.addEventListener('DOMContentLoaded', initializeKrsPage);
