export type Program = {
  id: number;
  title: string;
  country: string;
  qualification: string;
  field: string;
  budget: string;
  intake: string;
  englishTest: string;
};

export const programs: Program[] = [
  { id: 1, title: "MSc Data Science", country: "United Kingdom", qualification: "Bachelor's", field: "Computing", budget: "£15k–£25k", intake: "September", englishTest: "Completed" },
  { id: 2, title: "MSc Mechanical Engineering", country: "Germany", qualification: "Bachelor's", field: "Engineering", budget: "Under £15k", intake: "October", englishTest: "Planning" },
  { id: 3, title: "BBA International Business", country: "Canada", qualification: "High School", field: "Business", budget: "£15k–£25k", intake: "January", englishTest: "Completed" },
  { id: 4, title: "Master of Public Health", country: "Australia", qualification: "Bachelor's", field: "Healthcare", budget: "£25k+", intake: "February", englishTest: "Completed" },
  { id: 5, title: "MA Fashion & Luxury", country: "Italy", qualification: "Bachelor's", field: "Design", budget: "£15k–£25k", intake: "September", englishTest: "Not started" },
];
