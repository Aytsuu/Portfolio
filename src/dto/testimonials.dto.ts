interface props {
  testimonial: string;
  name: string;
  company: string;
  imageURI: string;
}

export const testimonials: props[] = [
  {
    testimonial: "Paolo Araneta is a strong full-stack developer with standout programming skills across backend Python and frontend React + TypeScript. On the backend, he writes clean, reliable Python services with solid API design, clear data modeling, and practical attention to performance and security. On the frontend, he delivers polished, maintainable interfaces in React, using TypeScript thoughtfully to keep codebases scalable and bug-resistant. Paolo communicates clearly, ships consistently, and takes ownership from implementation to deployment—I’d confidently recommend him for any role needing a dependable, high-impact software engineer.",
    name: "Bell S. Campanilla, Ph.D",
    company: "Cebu Technological University - Main Campus",
    imageURI: "/assets/testimonials/bell.jpg"
  },
  {
    testimonial:
      "Paolo Araneta is a dedicated and hardworking individual who approaches every task with determination and focus. His resilience allows him to navigate challenges with grace, turning obstacles into opportunities for growth. As a natural leader, Paolo inspires those around him through his vision, integrity, and ability to motivate his team toward shared goals. He combines strong problem-solving skills with a compassionate approach, ensuring that both objectives and people are valued. Paolo’s commitment, perseverance, and leadership make him a reliable and influential figure, capable of achieving success while fostering a positive and productive environment for everyone he works with.",
    name: "Suzette B. Bacus, Ph.D",
    company: "Cebu Technological University - Main Campus",
    imageURI: "/assets/testimonials/suzette.png",
  },
]; 

export const testimonialsHomePage: props[] = testimonials.slice(0, 3)