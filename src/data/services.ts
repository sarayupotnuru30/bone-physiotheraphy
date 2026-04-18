import orthoImg from "@/assets/services/ortho-care.jpg";
import heroPhysio from "@/assets/services/hero-physio.jpg";
import sportsImg from "@/assets/services/sports-rehab.jpg";
import neuroImg from "@/assets/services/neuro-rehab.jpg";
import strokeRecovery from "@/assets/services/stroke-recovery.jpg";
import spinalCord from "@/assets/services/spinal-cord.jpg";
import balence from "@/assets/services/balence.webp";
import postSurgery from "@/assets/services/post-surgery.jpg";
import ligament from "@/assets/services/ligament.webp";
import muscleTears from "@/assets/services/muscle-tears.webp";
import jointInjuries from "@/assets/services/joint-injuries.jpg";
import performance from "@/assets/services/performance.jpg";
import arthritis from "@/assets/services/arthritis.jpg";
import mobility from "@/assets/services/mobility.webp";
import balenceTraining from "@/assets/services/balence-training.jpg";
import chronicPain from "@/assets/services/chronic-pain.jpg";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  category: string;
  intro: string;
  highlights: string[];
  approach: string[];
  closing: string;
};

export const categories = [
  "Orthopaedic & Musculoskeletal Care",
  "Neurological Rehabilitation",
  "Sports Rehabilitation",
  "Elderly & Wellness Care",
] as const;

export const services: Service[] = [
  // Orthopaedic
  {
    slug: "fractures-bone-injuries",
    title: "Fractures & Bone Injuries",
    shortDescription: "Expert treatment and rehabilitation for all types of fractures and bone trauma.",
    image: orthoImg,
    category: "Orthopaedic & Musculoskeletal Care",
    intro:
      "From minor cracks to complex fractures, we ensure proper healing and alignment through evidence-based orthopaedic care designed to restore strength and full function.",
    highlights: [
      "Accurate diagnosis using clinical assessment",
      "Pain management with non-invasive techniques",
      "Personalized physiotherapy and rehabilitation",
      "Strength and mobility training to prevent recurrence",
    ],
    approach: [
      "Thorough clinical assessment of the injury site",
      "Customized rehabilitation plan to restore alignment and strength",
      "Progressive mobility and weight-bearing exercises",
      "Education on lifestyle and bone-health habits",
    ],
    closing:
      "Our goal is to help you heal completely, regain confidence, and return to a pain-free, active life.",
  },
  {
    slug: "joint-disorders",
    title: "Joint Disorders",
    shortDescription: "Specialized care for arthritis, joint stiffness, and degenerative conditions.",
    image: heroPhysio,
    category: "Orthopaedic & Musculoskeletal Care",
    intro:
      "We treat the full spectrum of joint disorders — including arthritis, stiffness, inflammation, and degeneration — with a patient-centered approach that combines advanced techniques with personalized care.",
    highlights: [
      "Comprehensive joint assessment",
      "Inflammation and pain control",
      "Mobility restoration programs",
      "Long-term joint-health education",
    ],
    approach: [
      "Evidence-based diagnosis of the affected joints",
      "Therapeutic techniques to reduce stiffness and swelling",
      "Tailored strength and flexibility programs",
      "Lifestyle guidance for joint preservation",
    ],
    closing:
      "Restore comfortable, confident movement with a treatment plan built around your daily life.",
  },
  {
    slug: "muscle-soft-tissue-injuries",
    title: "Muscle & Soft Tissue Injuries",
    shortDescription: "Targeted therapy for sprains, strains, and soft tissue damage.",
    image: sportsImg,
    category: "Orthopaedic & Musculoskeletal Care",
    intro:
      "Sprains, strains, ligament tears, tendon injuries, and frozen shoulder respond best to early, targeted intervention. We deliver focused therapy that accelerates healing and prevents re-injury.",
    highlights: [
      "Soft tissue mobilization and manual therapy",
      "Therapeutic exercises for tissue remodeling",
      "Pain and inflammation management",
      "Progressive return-to-activity plans",
    ],
    approach: [
      "Detailed physical assessment of the injured tissue",
      "Pain reduction with non-invasive modalities",
      "Graduated strengthening and stretching",
      "Re-education for safe movement patterns",
    ],
    closing:
      "Get back to the movements you love, supported by a recovery plan tailored to your tissue type and lifestyle.",
  },
  {
    slug: "back-neck-pain",
    title: "Back & Neck Pain",
    shortDescription: "Evidence-based treatment for chronic and acute spinal conditions.",
    image: neuroImg,
    category: "Orthopaedic & Musculoskeletal Care",
    intro:
      "Whether your pain is caused by posture issues, lower back strain, disc problems, or injury, we use proven techniques to relieve symptoms and address the root cause.",
    highlights: [
      "Postural and ergonomic assessment",
      "Manual therapy for the spine",
      "Core stabilization training",
      "Lifestyle guidance for long-term relief",
    ],
    approach: [
      "Identifying the underlying cause of pain",
      "Targeted therapy to reduce nerve and muscle irritation",
      "Spine-strengthening and flexibility exercises",
      "Workplace and home ergonomic recommendations",
    ],
    closing:
      "Move freely again with a structured plan that calms pain today and protects your spine for the future.",
  },

  // Neurological
  {
    slug: "stroke-recovery",
    title: "Stroke Recovery",
    shortDescription: "Comprehensive rehabilitation programs to regain function after stroke.",
    image: strokeRecovery,
    category: "Neurological Rehabilitation",
    intro:
      "Focused rehabilitation to improve movement, speech, balance, and daily functioning after a stroke. Our holistic, patient-focused model supports every stage of recovery.",
    highlights: [
      "Restoring motor skills and coordination",
      "Improving muscle strength and flexibility",
      "Enhancing speech and cognitive function",
      "Re-learning daily activities like walking and self-care",
    ],
    approach: [
      "Detailed neurological assessment",
      "Customized therapy plan tailored to recovery goals",
      "Neuro-physiotherapy techniques to retrain the brain",
      "Functional training for independence",
    ],
    closing:
      "With the right care and consistency, meaningful recovery from stroke is possible — we'll guide you every step of the way.",
  },
  {
    slug: "spinal-cord-injuries",
    title: "Spinal Cord Injuries",
    shortDescription: "Specialized therapy for spinal cord injury recovery and mobility.",
    image: spinalCord,
    category: "Neurological Rehabilitation",
    intro:
      "We help patients regain strength, mobility, and independence after spinal cord injury through structured, compassionate, and goal-oriented rehabilitation.",
    highlights: [
      "Strength and endurance building",
      "Mobility and transfer training",
      "Prevention of secondary complications",
      "Family-inclusive care planning",
    ],
    approach: [
      "Comprehensive assessment of functional ability",
      "Custom plan focused on independence and safety",
      "Progressive mobility and assistive-device training",
      "Long-term support for life beyond rehab",
    ],
    closing:
      "Together we'll work toward maximum independence, dignity, and quality of life.",
  },
  {
    slug: "balance-coordination",
    title: "Balance & Coordination",
    shortDescription: "Targeted exercises to improve balance, prevent falls, and restore coordination.",
    image: balence,
    category: "Neurological Rehabilitation",
    intro:
      "Dizziness, instability, and fall risk can dramatically reduce confidence. Our balance and coordination programs are designed to restore safe, steady movement.",
    highlights: [
      "Balance and gait analysis",
      "Vestibular and proprioceptive training",
      "Fall-prevention strategies",
      "Confidence-building functional exercises",
    ],
    approach: [
      "Detailed balance and coordination assessment",
      "Progressive training across stable and dynamic surfaces",
      "Real-world functional integration",
      "Home program and lifestyle guidance",
    ],
    closing:
      "Move with confidence again and reduce your risk of falls with science-backed, individualized training.",
  },
  {
    slug: "post-neurosurgical-rehab",
    title: "Post-Surgery Rehab",
    shortDescription: "Guided recovery programs after neurological surgeries.",
    image: postSurgery,
    category: "Neurological Rehabilitation",
    intro:
      "Recovery after brain or spine surgery requires expert guidance. Our structured programs reduce complications and help you safely return to daily life.",
    highlights: [
      "Reducing pain and swelling",
      "Restoring movement and flexibility",
      "Rebuilding muscle strength",
      "Improving balance and coordination",
    ],
    approach: [
      "Coordinated post-surgical assessment",
      "Stage-by-stage rehabilitation milestones",
      "Safe progression to daily activities",
      "Long-term recovery and prevention support",
    ],
    closing:
      "We'll help you regain function safely and confidently, with care designed around your surgical recovery.",
  },

  // Sports
  {
    slug: "ligament-injuries",
    title: "Ligament Injuries",
    shortDescription: "ACL, MCL, and other ligament injury treatment and recovery programs.",
    image: ligament,
    category: "Sports Rehabilitation",
    intro:
      "From ACL and PCL tears to other ligament injuries, our science-based rehabilitation gets athletes and active individuals back to full performance — safely.",
    highlights: [
      "Pain and inflammation management",
      "Sport-specific rehabilitation",
      "Strength and conditioning programs",
      "Return-to-sport testing",
    ],
    approach: [
      "Thorough injury assessment and diagnosis",
      "Stage-based recovery aligned with tissue healing",
      "Biomechanical analysis to correct movement",
      "Progressive return to your sport",
    ],
    closing:
      "Recover stronger and protect against re-injury with a plan built for your sport and goals.",
  },
  {
    slug: "muscle-tears",
    title: "Muscle Tears",
    shortDescription: "Fast-track recovery for muscle tears with targeted rehabilitation.",
    image: muscleTears,
    category: "Sports Rehabilitation",
    intro:
      "Common in high-impact and repetitive sports, muscle strains and tears need precise care to heal fully without compromising performance.",
    highlights: [
      "Targeted soft-tissue therapy",
      "Progressive loading protocols",
      "Flexibility and mobility training",
      "Performance-focused return plan",
    ],
    approach: [
      "Identifying the grade and location of the tear",
      "Pain control and tissue healing support",
      "Graduated strengthening and lengthening",
      "Sport-specific functional drills",
    ],
    closing:
      "Heal correctly the first time and return to action stronger than before.",
  },
  {
    slug: "joint-injuries",
    title: "Joint Injuries",
    shortDescription: "Expert care for sports-related joint injuries and dislocations.",
    image: jointInjuries,
    category: "Sports Rehabilitation",
    intro:
      "Shoulder, knee, ankle, and hip injuries require specialized rehab. We restore stability, control, and the explosive movement your sport demands.",
    highlights: [
      "Joint stability and proprioception training",
      "Sport-specific strength programs",
      "Movement-pattern correction",
      "Injury-prevention education",
    ],
    approach: [
      "Detailed joint assessment and movement screen",
      "Phase-based rehabilitation milestones",
      "Functional and agility-based progression",
      "Return-to-play readiness testing",
    ],
    closing:
      "Get back to your peak with confidence — and the tools to stay injury-free.",
  },
  {
    slug: "performance-training",
    title: "Performance Training",
    shortDescription: "Physiotherapy-guided performance enhancement and injury prevention.",
    image: performance,
    category: "Sports Rehabilitation",
    intro:
      "Beyond recovery, we help you reach your full athletic potential — improving strength, speed, agility, and endurance while keeping you injury-free.",
    highlights: [
      "Strength, speed, and agility development",
      "Coordination and balance enhancement",
      "Endurance and stamina training",
      "Movement optimization for your sport",
    ],
    approach: [
      "Performance and biomechanical screening",
      "Custom programming based on your sport",
      "Periodized training for sustained gains",
      "Recovery and prehab integration",
    ],
    closing:
      "Take your performance to the next level with physiotherapy-backed training built around your goals.",
  },

  // Elderly
  {
    slug: "arthritis-care",
    title: "Arthritis Care",
    shortDescription: "Gentle, effective management of arthritis symptoms and mobility.",
    image: arthritis,
    category: "Elderly & Wellness Care",
    intro:
      "Reduce pain and improve joint function with gentle, effective therapies designed for comfort, safety, and long-term mobility.",
    highlights: [
      "Pain management with non-invasive therapies",
      "Joint-protection strategies",
      "Strength and flexibility exercises",
      "Lifestyle and wellness guidance",
    ],
    approach: [
      "Comprehensive assessment of joint involvement",
      "Personalized exercise program for daily ease",
      "Education on activity pacing and joint protection",
      "Family-inclusive support and care planning",
    ],
    closing:
      "Live more comfortably and stay active with a plan designed for healthy, confident aging.",
  },
  {
    slug: "mobility-improvement",
    title: "Mobility Improvement",
    shortDescription: "Programs designed to maintain and improve independence in daily activities.",
    image: mobility,
    category: "Elderly & Wellness Care",
    intro:
      "Our mobility programs help seniors stay active and independent — improving walking, posture, and confidence in everyday movement.",
    highlights: [
      "Improved walking ability and posture",
      "Coordination and movement confidence",
      "Support for sitting, standing, stairs",
      "Reduced risk of falls and injuries",
    ],
    approach: [
      "Detailed mobility and gait assessment",
      "Personalized strength and flexibility plan",
      "Progressive functional training",
      "Home-based exercises and lifestyle support",
    ],
    closing:
      "Stay active, confident, and independent — with care that adapts to your pace.",
  },
  {
    slug: "balance-training",
    title: "Balance Training",
    shortDescription: "Fall prevention and balance improvement exercises for seniors.",
    image: balenceTraining,
    category: "Elderly & Wellness Care",
    intro:
      "Falls are a leading cause of injury in seniors. Our balance and gait training builds stability, confidence, and safer mobility.",
    highlights: [
      "Comprehensive balance and gait assessment",
      "Fall-prevention strategies",
      "Strength training for stabilizing muscles",
      "Confidence-building functional exercises",
    ],
    approach: [
      "Identifying personal fall-risk factors",
      "Structured, progressive balance program",
      "Real-world movement integration",
      "Family education and home-safety tips",
    ],
    closing:
      "Walk with steadier confidence and significantly reduce your risk of falls.",
  },
  {
    slug: "chronic-pain-management",
    title: "Chronic Pain Management",
    shortDescription: "Long-term pain relief strategies combining therapy and lifestyle guidance.",
    image: chronicPain,
    category: "Elderly & Wellness Care",
    intro:
      "Chronic pain affects every part of daily life. We combine evidence-based therapy with lifestyle guidance to deliver lasting relief and renewed function.",
    highlights: [
      "Non-invasive pain management techniques",
      "Personalized exercise and movement plans",
      "Mind-body wellness strategies",
      "Long-term prevention and self-care",
    ],
    approach: [
      "Comprehensive pain and lifestyle assessment",
      "Multimodal therapy plan tailored to you",
      "Gradual reactivation and conditioning",
      "Ongoing coaching for sustainable relief",
    ],
    closing:
      "Reclaim your daily life with a compassionate, long-term approach to pain that goes beyond symptom relief.",
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const getServicesByCategory = (cat: string) => services.filter((s) => s.category === cat);
