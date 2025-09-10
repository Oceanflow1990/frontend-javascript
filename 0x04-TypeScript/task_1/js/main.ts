// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // can only be set at initialization
  readonly lastName: string;  // can only be set at initialization
  fullTimeEmployee: boolean;  // always required
  yearsOfExperience?: number; // optional
  location: string;           // always required
  [key: string]: any;         // allows extra properties like "contract"
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,  // extra property allowed
};

console.log(teacher3);
