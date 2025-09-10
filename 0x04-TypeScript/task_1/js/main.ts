interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  contract: boolean;
};

const teacher: Teacher = {
  firstName: 'Opeyemi',
  lastName: 'Ajiabde',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher);


