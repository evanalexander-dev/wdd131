const table = document.getElementById('reportsTableBody');
const searchParams = new URLSearchParams(window.location.search);

let reports = JSON.parse(localStorage.getItem('reports')) || [];

reports.forEach(addTableRow);

addReport();

function setStorage() {
  localStorage.setItem('reports', JSON.stringify(reports));
}

function addReport() {
  let report = {
    id: crypto.randomUUID(),
    fname: searchParams.get('fname') || '',
    lname: searchParams.get('lname') || '',
    email: searchParams.get('email') || '',
    severity: searchParams.get('severity') || '',
    title: searchParams.get('title') || '',
    description: searchParams.get('desc') || '',
    date: new Date().toISOString().split('T')[0]
  };

  if (reports.map(x => x.title).includes(report.title) || report.title === '') {
    return;
  }

  reports.push(report);
  setStorage();
  addTableRow(report);
}

function delReport(id) {
  let tr = document.getElementById(id);
  table.removeChild(tr);
  reports = reports.filter(x => x.id !== id);
  setStorage();
}

function addTableRow(report) {
  let tr = document.createElement('tr');
  let title = document.createElement('td');
  let date = document.createElement('td');
  let del = document.createElement('td');
  tr.id = report.id;
  title.innerHTML = report.title;
  date.innerHTML = report.date;
  let delButton = document.createElement('button');
  delButton.innerText = 'Delete';
  delButton.addEventListener('click',() => delReport(report.id));
  del.appendChild(delButton);
  tr.appendChild(title);
  tr.appendChild(date);
  tr.appendChild(del);
  table.appendChild(tr);
}
