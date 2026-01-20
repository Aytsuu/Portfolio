interface props {
  testimonial: string;
  name: string;
  company: string;
  imageURI: string;
}

export const testimonials: props[] = [
  {
    testimonial:
      "Paolo consistently demonstrates remarkable perseverance and determination in his academic pursuits. When faced with challenging or unfamiliar tasks, he approaches them with resilience and resourcefulness. He actively seeks out ways to understand complex concepts, explores innovative solutions, and invests significant effort to master the material. His willingness to move beyond his comfort zone is a testament to his unwavering commitment to continuous improvement.  What truly sets Paolo apart is his strong analytical and problem-solving skills. He can logically break down difficult technical problems into bite-sized pieces and arrive at efficient solutions. His logical manner and attention to detail would make him equally suited to theoretical and practical IT.  Moreover, Paolo possesses an outstanding attitude toward learning. He listens attentively to feedback, accepts constructive criticism with humility, and consistently applies recommendations for improvement. His desire to learn and true enthusiasm for academic and professional development makes him an excellent mentor to his peers.  Overall, Paolo Araneta is a diligent, motivated and skilled student who has good prospects in IT field. I highly recommend him for any academic, technical or professional position and I am sure that he will thrive, and achieve productivity wherever he is with it. ",
    name: "Narcisan S. Galamiton, Ph.D",
    company: "Cebu Technological University - Main Campus",
    imageURI: "/assets/testimonials/narcisan.jpg",
  },
  {
    testimonial:
      "Paolo Araneta is a strong full-stack developer with standout programming skills across backend Python and frontend React + TypeScript. On the backend, he writes clean, reliable Python services with solid API design, clear data modeling, and practical attention to performance and security. On the frontend, he delivers polished, maintainable interfaces in React, using TypeScript thoughtfully to keep codebases scalable and bug-resistant. Paolo communicates clearly, ships consistently, and takes ownership from implementation to deployment—I’d confidently recommend him for any role needing a dependable, high-impact software engineer.",
    name: "Bell S. Campanilla, Ph.D",
    company: "Cebu Technological University - Main Campus",
    imageURI: "/assets/testimonials/bell.jpg",
  },
  {
    testimonial:
      "Paolo Araneta is a dedicated and hardworking individual who approaches every task with determination and focus. His resilience allows him to navigate challenges with grace, turning obstacles into opportunities for growth. As a natural leader, Paolo inspires those around him through his vision, integrity, and ability to motivate his team toward shared goals. He combines strong problem-solving skills with a compassionate approach, ensuring that both objectives and people are valued. Paolo’s commitment, perseverance, and leadership make him a reliable and influential figure, capable of achieving success while fostering a positive and productive environment for everyone he works with.",
    name: "Suzette B. Bacus, Ph.D",
    company: "Cebu Technological University - Main Campus",
    imageURI: "/assets/testimonials/suzette.png",
  },
];

export const testimonialsHomePage: props[] = testimonials.slice(0, 3);
