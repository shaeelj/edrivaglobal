export type Destination = {
  slug: string;
  name: string;
  flag: string;
  image: string;
  description: string;
  cities: string[];
  fields: string[];
};

export const destinations: Destination[] = [
  { slug: "germany", name: "Germany", flag: "DE", image: "/images/germany.webp", description: "Research-led universities, vibrant student cities and a strong culture of innovation.", cities: ["Berlin", "Munich", "Hamburg"], fields: ["Engineering", "Computer Science", "Business"] },
  { slug: "italy", name: "Italy", flag: "IT", image: "/images/italy.webp", description: "Historic institutions, creative excellence and a distinctive European student experience.", cities: ["Milan", "Bologna", "Rome"], fields: ["Design", "Architecture", "Business"] },
  { slug: "uk", name: "United Kingdom", flag: "GB", image: "/images/uk.webp", description: "Globally recognised degrees with diverse courses and international academic communities.", cities: ["London", "Manchester", "Edinburgh"], fields: ["Business", "Law", "Data Science"] },
  { slug: "usa", name: "United States", flag: "US", image: "/images/usa.webp", description: "Flexible study paths, extensive research opportunities and dynamic campus life.", cities: ["Boston", "New York", "Chicago"], fields: ["Technology", "Finance", "Sciences"] },
  { slug: "canada", name: "Canada", flag: "CA", image: "/images/canada.webp", description: "Welcoming campuses, applied learning and respected qualifications across disciplines.", cities: ["Toronto", "Vancouver", "Montreal"], fields: ["Computing", "Healthcare", "Management"] },
  { slug: "australia", name: "Australia", flag: "AU", image: "/images/australia.webp", description: "World-class education in energetic, multicultural cities close to nature.", cities: ["Sydney", "Melbourne", "Brisbane"], fields: ["Engineering", "Public Health", "Business"] },
  { slug: "netherlands", name: "Netherlands", flag: "NL", image: "/images/netherlands.webp", description: "Innovative teaching, English-taught options and collaborative international classrooms.", cities: ["Amsterdam", "Rotterdam", "Delft"], fields: ["Sustainability", "Design", "Economics"] },
  { slug: "france", name: "France", flag: "FR", image: "/images/france.webp", description: "Academic heritage, leading business schools and a rich cultural perspective.", cities: ["Paris", "Lyon", "Toulouse"], fields: ["Luxury Management", "Engineering", "Arts"] },
];
