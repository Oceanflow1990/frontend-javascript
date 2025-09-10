interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;

} 

const Student1: Student = {
    firstName: "Ope",
    lastName: "Yemi",
    age: 20,
    location: "Lagos"

};

const Student2: Student = {
    firstName: "Aji",
    lastName: "Bade",
    age: 38,
    location: "London"

}

const studentsList: Student[] = [Student1, Student2];

const table = document.createElement("table");
const tableBody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);