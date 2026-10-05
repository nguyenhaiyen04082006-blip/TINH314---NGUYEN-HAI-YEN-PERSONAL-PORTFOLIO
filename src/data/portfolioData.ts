/**
 * Nguyễn Hải Yến - Portfolio Data & Content
 * Extracted directly from Foreign Trade University (FTU K63) Canva presentation
 * Content curated with Blue Turquoise Sea & Sky theme
 */

export interface StudentProfile {
  name: string;
  vietnameseName: string;
  title: string;
  university: string;
  faculty: string;
  major: string;
  cohort: string;
  classGroup: string;
  phone: string;
  universityEmail: string;
  personalEmail: string;
  favouriteQuote: string;
  quoteAuthor: string;
  selfAssessment: string[];
  peerAssessment: string[];
}

export const PROFILE_DATA: StudentProfile = {
  name: "Nguyen Hai Yen",
  vietnameseName: "Nguyễn Hải Yến",
  title: "Third-Year International Business Economics Scholar",
  university: "Foreign Trade University (FTU Hanoi)",
  faculty: "Faculty of International Economics",
  major: "International Business Economics",
  cohort: "K63 (2024 - 2028)",
  classGroup: "English 06",
  phone: "0399599486",
  universityEmail: "k63.2412150330@ftu.edu.vn",
  personalEmail: "nguyenhaiyen04082006@gmail.com",
  favouriteQuote: "A journey of a thousand miles begins with a single step.",
  quoteAuthor: "Lao Tzu",
  selfAssessment: [
    "Accountable",
    "Honest",
    "Independent",
    "Strategic",
  ],
  peerAssessment: [
    "Generous",
    "Sociable",
    "Mentally supportive",
    "Reliable teammate",
  ],
};

export interface IELTSScore {
  overall: number;
  listening: number;
  reading: number;
  speaking: number;
  writing: number;
  cefrLevel: string;
  certifiedDate: string;
}

export const IELTS_CREDENTIALS: IELTSScore = {
  overall: 8.0,
  listening: 8.5,
  reading: 9.0,
  speaking: 6.5,
  writing: 7.5,
  cefrLevel: "C1 / Advanced Proficient",
  certifiedDate: "Academic Stream",
};

export interface AgriculturalExport {
  id: string;
  name: string;
  vietnameseName: string;
  category: "Agricultural" | "Seafood" | "Specialty";
  globalRank: string;
  regions: string;
  description: string;
  logisticsNeed: string;
}

export const VIETNAM_EXPORTS: AgriculturalExport[] = [
  {
    id: "rice",
    name: "Premium Rice (ST25 & Jasmine)",
    vietnameseName: "Gạo đặc sản",
    category: "Agricultural",
    globalRank: "Top 2 Global Exporter",
    regions: "Mekong Delta (An Giang, Dong Thap, Soc Trang)",
    description: "World-renowned aromatic ST25 and fragrant Jasmine rice feeding hundreds of millions across Asia, Europe, and Africa.",
    logisticsNeed: "Bulk dry cargo vessels, moisture-controlled grain silos, streamlined port phytosanitary clearances."
  },
  {
    id: "coffee",
    name: "Robusta & Specialty Arabica Coffee",
    vietnameseName: "Cà phê Tây Nguyên",
    category: "Agricultural",
    globalRank: "Top 2 Global Exporter (#1 Robusta)",
    regions: "Central Highlands (Dak Lak, Lam Dong, Gia Lai)",
    description: "Rich volcanic soil yielding bold Robusta beans and exquisite high-elevation Arabica exported to over 80 countries.",
    logisticsNeed: "Temperature-balanced containerization, multi-modal rail-to-port corridors to Cai Mep - Thi Vai."
  },
  {
    id: "shrimp",
    name: "Black Tiger & Whiteleg Shrimp",
    vietnameseName: "Tôm sú & Tôm thẻ chân trắng",
    category: "Seafood",
    globalRank: "Top 3 Global Seafood Exporter",
    regions: "Ca Mau, Bac Lieu, Soc Trang Coastal Belts",
    description: "High-value sustainable brackish aquaculture prized in Japanese, EU, and North American culinary markets.",
    logisticsNeed: "Uninterrupted -18°C cold chain transport, rapid reefer container staging, stringent traceability compliance."
  },
  {
    id: "pangasius",
    name: "Pangasius Catfish (Tra & Basa)",
    vietnameseName: "Cá Tra & Cá Basa",
    category: "Seafood",
    globalRank: "#1 Global Producer & Exporter",
    regions: "Tien Giang, Dong Thap, Can Tho Freshwater Basins",
    description: "Nutritious white-fish fillets farmed in the pristine waters of the Mekong river, serving affordable protein globally.",
    logisticsNeed: "Deep-freeze maritime reefer shipping, ISO-certified cold storage facilities near deep-water maritime hubs."
  },
  {
    id: "pepper_cashew",
    name: "Black Pepper & Cashew Nuts",
    vietnameseName: "Hồ tiêu & Hạt điều",
    category: "Agricultural",
    globalRank: "#1 Global Exporter for Both Commodities",
    regions: "Binh Phuoc, Dong Nai, Dak Nong",
    description: "Fragrant spices and nutrient-dense cashews dominating global supermarket shelves with unmatched flavor profiles.",
    logisticsNeed: "Fumigation-certified maritime storage, vacuum packing logistics to prevent oxidation during cross-ocean transit."
  }
];

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  period: string;
  role: string;
  impactMetric: string;
  description: string;
  keyContributions: string[];
  toolsAndMethods: string[];
  testimonials: {
    student: string;
    score: string;
    comment: string;
  }[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "ielts-slayers",
    title: "IELTS SLAYERS",
    tagline: "Empowering 30+ university & high school students to surpass their target IELTS band scores",
    period: "2023 - Present",
    role: "Founder, Lead Academic Coach & Curriculum Designer",
    impactMetric: "30+ Students Guided · 100% Target Met · Avg +1.2 Band Gain",
    description: "A tailored English mentorship initiative born out of a passion to bridge educational gaps and help Vietnamese students achieve international academic mobility. Combining personalized writing feedback with intensive speaking simulations to build real fluency.",
    keyContributions: [
      "Designed systematic 8-week writing task response templates for Task 1 data analytics and Task 2 argumentative essays.",
      "Conducted 1-on-1 speaking coaching sessions focusing on lexical resource, natural pronunciation, and discourse markers.",
      "Provided in-depth line-by-line diagnostic feedback within 24 hours for over 450 essay submissions.",
      "Fostered a psychologically safe, high-encouragement peer learning environment where students overcame anxiety."
    ],
    toolsAndMethods: [
      "Cambridge English Corpus Analysis",
      "Band 8.0+ Lexical Vaults",
      "Structured Mock Oral Examinations",
      "Goal-Tracking Analytic Rubrics"
    ],
    testimonials: [
      {
        student: "Minh Anh",
        score: "Achieved Band 7.5 (Target 6.5)",
        comment: "Yến's constructive writing breakdown helped me identify logical leaps in Task 2 that I was making for months. Her guidance gave me the score needed for my FTU scholarship!"
      },
      {
        student: "Hoang Nam",
        score: "Achieved Band 7.0 (Target 6.5)",
        comment: "Before joining IELTS Slayers, Speaking was my biggest fear. Yến practiced mock tests with me every weekend until I felt completely confident conversing with the native examiner."
      },
      {
        student: "Thao My",
        score: "Achieved Band 8.0 (Target 7.5)",
        comment: "Learning from an 8.0 mentor who is empathetic and meticulous makes all the difference. She breaks down difficult questions with strategic clarity."
      }
    ]
  },
  {
    id: "agri-logistics-case",
    title: "Vietnam Cold-Chain Agri-Export Optimization",
    tagline: "Academic research simulation on post-harvest cold supply chain resilience for tropical fruit exports",
    period: "Foreign Trade University Academic Coursework",
    role: "Lead Researcher & Presenter",
    impactMetric: "Grade A+ (Faculty Honor)",
    description: "Investigated post-harvest losses in dragon fruit and passion fruit export corridors from Southern Vietnam to Northeast Asian markets. Formulated multimodal transport routing using Cai Mep - Thi Vai deep-water port to shave 36 hours off transit time.",
    keyContributions: [
      "Modeled refrigerated container (reefer) temperature maintenance protocols across highway transfer stages.",
      "Calculated total landed cost efficiency comparing conventional breakbulk vs modern intermodal container lines.",
      "Presented findings to FTU faculty panel emphasizing farmer collective bargaining and cold hub cooperatives."
    ],
    toolsAndMethods: [
      "Incoterms 2020 Compliance",
      "Logistics Freight Calculation",
      "Cold Chain Sensor Tracking Analysis",
      "Export Documentation Workflows"
    ],
    testimonials: []
  }
];

export const CAREER_ROADMAP = [
  {
    step: "01",
    phase: "Current Focus: Academic Excellence",
    timing: "2024 - 2027",
    institution: "Foreign Trade University (FTU Hanoi)",
    objective: "Master International Business Economics with distinction. Deepen comprehension of international trade policies, maritime law, and supply chain fundamentals.",
    skillsGained: "Macroeconomic forecasting, Incoterms, cross-border commercial contracts, customs tariffs."
  },
  {
    step: "02",
    phase: "Industry Practice: Frontline Logistics & Trade",
    timing: "2027 - 2029 (2-3 Years)",
    institution: "Leading International Freight Forwarding & Supply Chain Hubs in Vietnam",
    objective: "Devote 2-3 years to hands-on logistics management, port operations, and cold-chain supply chains. Directly work with agricultural cooperatives to streamline export protocols.",
    skillsGained: "Reefer container scheduling, sea-freight booking, terminal operations, trade compliance, supplier negotiations."
  },
  {
    step: "03",
    phase: "Global Expertise: Master's Degree Abroad",
    timing: "2029 - 2031",
    institution: "Top Maritime Logistics & Global Trade Institute Abroad (Europe / Singapore)",
    objective: "Pursue a specialized Master of Science in Maritime Economics & Supply Chain Management to acquire state-of-the-art technological and digital supply chain systems.",
    skillsGained: "Smart port automation, green maritime corridors, AI in supply chain optimization, international maritime arbitration."
  },
  {
    step: "04",
    phase: "National Contribution: Elevating Vietnamese Farmers",
    timing: "2031 & Beyond",
    institution: "Vietnam National Trade & Agri-Export Infrastructure",
    objective: "Return to Vietnam equipped with global expertise to architect sustainable, high-yield export networks that connect remote Vietnamese farmers directly to premium worldwide markets.",
    skillsGained: "National logistics policy advocacy, cold-chain modernization, brand building for Vietnamese agricultural heritage."
  }
];
