
// 1. The Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Created two students with explicit typing
const student1: Student = {
  firstName: "Opeyemi",
  lastName: "Ajibade",
  age: 25,
  location: "Lagos",
};

const student2: Student = {
  firstName: "David",
  lastName: "Hunter",
  age: 30,
  location: "Abuja",
};

// 3. Created an array of students (typed)
const studentsList: Student[] = [student1, student2];

// 4. Rendered a table using Vanilla JavaScript
const table: HTMLTableElement = document.createElement("table");
const tableBody: HTMLTableSectionElement = document.createElement("tbody");

// Added rows for each student
studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement("tr");

  // First Name cell
  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  // Location cell
  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  tableBody.appendChild(row);
});

// Appended table to DOM
table.appendChild(tableBody);
document.body.appendChild(table);
