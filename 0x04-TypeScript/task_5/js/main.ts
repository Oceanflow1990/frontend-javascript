// task_5/js/main.ts

// Define MajorCredits interface
interface MajorCredits {
  credits: number;
  // Unique brand to distinguish it from MinorCredits
  brand: "major";
}

// Define MinorCredits interface
interface MinorCredits {
  credits: number;
  // Unique brand to distinguish it from MajorCredits
  brand: "minor";
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major"
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor"
  };
}

// Example usage (optional for testing)
const major1: MajorCredits = { credits: 3, brand: "major" };
const major2: MajorCredits = { credits: 4, brand: "major" };
console.log("Sum of MajorCredits:", sumMajorCredits(major1, major2));

const minor1: MinorCredits = { credits: 2, brand: "minor" };
const minor2: MinorCredits = { credits: 5, brand: "minor" };
console.log("Sum of MinorCredits:", sumMinorCredits(minor1, minor2));
