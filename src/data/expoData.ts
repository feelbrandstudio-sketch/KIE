export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  stars: number;
  text: string;
}

export interface SupportingAssociation {
  id: string;
  name: string;
  subtitle?: string;
  logo: string;
}

export interface SectorItem {
  id: string;
  title: string;
  icon: string;
  description?: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  filePath?: string;
  fileUrl?: string;
  fileName?: string;
  size: string;
  icon?: string;
  downloadsCount?: number;
}

export const EXPO_DETAILS = {
  name: "Kolhapur Industrial Expo 2027",
  tagline: "Western Maharashtra's Premier Machine Tools, Engineering & Foundry Expo",
  subtitle: "At the Heart of Western Maharashtra's Manufacturing Ecosystem",
  dates: "28 Feb, 1 & 2 March 2027",
  venueName: "Merry Weather Ground",
  venueAddress: "Merry Weather Ground, Warna Colony, Nagala Park, Kolhapur, Maharashtra - 416003",
  phone: "+91 95450 02006",
  phoneDisplay: "+91 95450 02006",
  phone1: "+91 95450 02006",
  phone2: "+91 98220 12345",
  email: "info@kolhapurexpo.com",
  email1: "info@kolhapurexpo.com",
  email2: "sales@kolhapurexpo.com",
  officeAddress: "Office No. E-802, Richmond Park, Rahatani, Pune, Maharashtra - 411017",
  whatsappUrl: "https://wa.me/919545002006?text=Hi,%20I%20visited%20Kolhapur%20Industrial%20Expo%20website%20and%20want%20to%20know%20more.",
  organizer: "VisionEdge Group",
  developedBy: "Feelbrand.in",
  stats: [
    { label: "EXPECTED EXHIBITORS", value: "300+", icon: "bi-shop-window" },
    { label: "EXPECTED TRADE VISITORS", value: "40,000+", icon: "bi-people-fill" },
    { label: "PRODUCTS & TECHNOLOGIES", value: "1000+", icon: "bi-gear-fill" },
    { label: "SUPPORTING ASSOCIATIONS", value: "20+", icon: "bi-shield-check" }
  ]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Mr. Ganesh Hirve",
    role: "Divisional Manager – West Region",
    company: "TAL Manufacturing Solutions Ltd.",
    stars: 5,
    text: "With the right media campaign and advertisement, the organisers attracted industrial visitors not only from Kolhapur but also from Sangli, Satara, Belgaum, Hubli, Dharwad, Goa, Ratnagiri and Pune. We generated several business enquiries, executed orders during the exhibition and even sold our display machinery. We are happy to participate in Kolhapur Industrial Expo."
  },
  {
    id: "t2",
    name: "Mr. Sunil Mahadik",
    role: "Director – Finance",
    company: "ifm Electronic India Pvt. Ltd.",
    stars: 5,
    text: "Visitor footfall was beyond our expectations and we received an excellent response during the exhibition. We congratulate the organisers for successfully arranging the event and had already confirmed our participation for their upcoming exhibitions. An industrial exhibition of this scale was truly required in the region."
  },
  {
    id: "t3",
    name: "Mr. Vinay D. Patil",
    role: "General Manager – Marketing",
    company: "Electronica Mechatronic Systems (I) Pvt. Ltd.",
    stars: 5,
    text: "Kolhapur Industrial Expo proved to be an excellent platform to explore the growing engineering market of the Kolhapur region for machine tools and metrology products."
  },
  {
    id: "t4",
    name: "Mr. P. N. Shinde",
    role: "Senior Manager – Sales (Maharashtra)",
    company: "Marshall Machines Pvt. Ltd.",
    stars: 4,
    text: "Industrial visitor footfall was tremendous and we received a large number of quality enquiries from Kolhapur, Sangli, Satara, Belgaum, Hubli, Dharwad and Goa. We will surely participate in forthcoming exhibitions."
  },
  {
    id: "t5",
    name: "Mr. Mandesh Kadam",
    role: "Branch Head (Kolhapur)",
    company: "Powerica LTD.",
    stars: 5,
    text: "KIE is western Maharashtra’s biggest Industrial Expo; wherein major corporate groups have participated & benefitted. Decision makers of Menon & Menon Ltd, Menon Piston, Zanvar Group, Ghatge Patil Industries, Manugraph, and Kirloskar Oil Engines visited the Expo. It’s a great show!"
  },
  {
    id: "t6",
    name: "Mr. Sunil Natekar",
    role: "Manager – Sales & Marketing, Compressed Air Division",
    company: "Godrej & Boyce Mfg. Co. Ltd.",
    stars: 5,
    text: "The exhibition was professionally organised and will definitely help us improve our business in this region. We appreciate the organisers' efforts and look forward to a long-term association."
  },
  {
    id: "t7",
    name: "Mr. Shreyansh Hippargi",
    role: "Regional Sales Manager (West)",
    company: "Renishaw Metrology Systems Ltd.",
    stars: 5,
    text: "The Media planning & Promotion is done extensively. Hoardings and banners are seen in the entire city & surrounding M.I.D.C.s, pulling quality crowd from Kolhapur, Satara, Sangli, Belgaum, Hubli, Dharwad & Pune."
  },
  {
    id: "t8",
    name: "Mr. Ismail S. Monin",
    role: "Manager - HR",
    company: "Vedant Equipment Sales & Services (Dealer of Atlas Copco Compressor)",
    stars: 4,
    text: "We are witnessing quality industrial visitors & we have already done a tremendous number of bookings at the venue itself. The arrangement by the organizers is done in a very professional way."
  },
  {
    id: "t9",
    name: "Mr. Harshavardhan Ghatge",
    role: "CEO",
    company: "Spark Engineers (Dealer Of Premium Transmissions LTD.)",
    stars: 5,
    text: "The visitor’s flow is tremendous. We have witnessed visitors from the entire Western belt up to Belgaum, Hubli & Goa. We are very happy with arrangements done at the Expo."
  }
];

export const SUPPORTING_ASSOCIATIONS: SupportingAssociation[] = [
  { id: "sa-1", name: "EEPC India", subtitle: "Set-up by Ministry of Commerce and Industry, Govt of India", logo: "/assets/images/sup-asso-1.png" },
  { id: "sa-2", name: "Gokul Shirgaon Manufacturers Association (GSMA)", subtitle: "Kolhapur", logo: "/assets/images/sup-asso-2.png" },
  { id: "sa-3", name: "Manufacturers Association of Kagal & Hatkanangale (MAKH)", subtitle: "Kagal Five Star MIDC", logo: "/assets/images/sup-asso-3.png" },
  { id: "sa-4", name: "Ichalkaranji Engineering Association", subtitle: "Ichalkaranji", logo: "/assets/images/sup-asso-4.png" },
  { id: "sa-5", name: "The Belgaum Chamber Of Commerce & Industries", subtitle: "Belgaum", logo: "/assets/images/sup-asso-5.png" },
  { id: "sa-6", name: "Manufacturers Association Of Satara", subtitle: "Satara", logo: "/assets/images/sup-asso-6.png" },
  { id: "sa-7", name: "Karad Industrial Manufacturers Association", subtitle: "Karad", logo: "/assets/images/sup-asso-7.png" },
  { id: "sa-8", name: "Krishna Valley Chamber of Industries & Commerce", subtitle: "Sangli-Miraj", logo: "/assets/images/sup-asso-8.png" },
  { id: "sa-9", name: "Vasantdada Industrial Estate Co-op Society Ltd.", subtitle: "Sangli", logo: "/assets/images/sup-asso-9.png" },
  { id: "sa-10", name: "Pimpri Chinchwad Small Industries Association", subtitle: "PCMC Pune", logo: "/assets/images/sup-asso-10.png" },
  { id: "sa-11", name: "Ranjangaon Industrial Association (RIA)", subtitle: "Pune", logo: "/assets/images/sup-asso-11.png" },
  { id: "sa-12", name: "Jejuri Industrial Manufacturers Association", subtitle: "Pune", logo: "/assets/images/sup-asso-12.png" },
  { id: "sa-13", name: "Baramati Chamber of Commerce & Industries", subtitle: "Baramati", logo: "/assets/images/sup-asso-13.png" },
  { id: "sa-14", name: "Globe Business Future", subtitle: "Business Chamber", logo: "/assets/images/sup-asso-14.png" }
];

export const CLIENT_LOGOS = [
  "/assets/images/logos/client1.jpg",
  "/assets/images/logos/client2.jpg",
  "/assets/images/logos/client3.jpg",
  "/assets/images/logos/client4.jpg",
  "/assets/images/logos/client5.jpg",
  "/assets/images/logos/client6.jpg",
  "/assets/images/logos/client7.jpg",
  "/assets/images/logos/client8.jpg",
  "/assets/images/logos/client9.jpg",
  "/assets/images/logos/client10.jpg",
  "/assets/images/logos/client11.jpg",
  "/assets/images/logos/client12.jpg",
  "/assets/images/logos/client13.jpg",
  "/assets/images/logos/client14.jpg"
];

export const EXHIBITOR_BRAND_LOGOS = [
  "/assets/images/logos/exhibitor_b1.jpg",
  "/assets/images/logos/exhibitor_b2.jpg",
  "/assets/images/logos/exhibitor_b3.jpg",
  "/assets/images/logos/exhibitor_b4.jpg",
  "/assets/images/logos/exhibitor_b5.jpg",
  "/assets/images/logos/exhibitor_b6.jpg",
  "/assets/images/logos/exhibitor_b7.jpg",
  "/assets/images/logos/exhibitor_b8.jpg",
  "/assets/images/logos/exhibitor_b9.jpg",
  "/assets/images/logos/exhibitor_b10.jpg",
  "/assets/images/logos/exhibitor_b11.jpg",
  "/assets/images/logos/exhibitor_b12.jpg",
  "/assets/images/logos/exhibitor_b13.jpg",
  "/assets/images/logos/exhibitor_b14.jpg",
  "/assets/images/logos/exhibitor_b15.jpg",
  "/assets/images/logos/exhibitor_b16.jpg",
  "/assets/images/logos/exhibitor_b17.jpg",
  "/assets/images/logos/exhibitor_b18.jpg",
  "/assets/images/logos/exhibitor_b19.jpg",
  "/assets/images/logos/exhibitor_b20.jpg",
  "/assets/images/logos/exhibitor_b21.jpg",
  "/assets/images/logos/exhibitor_b22.jpg",
  "/assets/images/logos/exhibitor_b23.jpg",
  "/assets/images/logos/exhibitor_b24.jpg",
  "/assets/images/logos/exhibitor_b25.jpg"
];

export const MEDIA_LOGOS = [
  "/assets/images/logos/media_b1.jpg",
  "/assets/images/logos/media_b2.jpg",
  "/assets/images/logos/media_b3.jpg",
  "/assets/images/logos/media_b4.jpg",
  "/assets/images/logos/media_b5.jpg",
  "/assets/images/logos/media_b6.jpg",
  "/assets/images/logos/media_b7.jpg"
];

export const EXHIBITOR_SECTORS: SectorItem[] = [
  { id: "s1", title: "Machine Tools, CNC & Manufacturing Technologies", icon: "/assets/images/Machine-Tools.png" },
  { id: "s2", title: "Auto Components & Precision Engineering", icon: "/assets/images/Components.png" },
  { id: "s3", title: "Tooling, Dies, Moulds & Cutting Tools", icon: "/assets/images/tools.png" },
  { id: "s4", title: "Automation, Robotics & Smart Manufacturing", icon: "/assets/images/Automation.png" },
  { id: "s5", title: "Foundry, Casting & Metalworking", icon: "/assets/images/casting.png" },
  { id: "s6", title: "Moulding, Core Making & Sand Technology", icon: "/assets/images/moulding.png" },
  { id: "s7", title: "Foundry Furnaces, Melting & Metallurgical Technologies", icon: "/assets/images/furnaces.png" },
  { id: "s8", title: "Welding, Fabrication, Heat Treatment & Surface Engineering", icon: "/assets/images/Welding.png" },
  { id: "s9", title: "Hydraulics, Pneumatics & Air Compressors", icon: "/assets/images/hydraulic.png" },
  { id: "s10", title: "Industrial Electricals, Electronics & Control Systems", icon: "/assets/images/electric-panel.png" },
  { id: "s11", title: "Metrology, Testing & Quality Control Instruments", icon: "/assets/images/Testing.png" },
  { id: "s12", title: "Material Handling, Logistics & Warehousing", icon: "/assets/images/Warehousing.png" },
  { id: "s13", title: "Industrial Software, CAD / CAM & Smart Manufacturing", icon: "/assets/images/Industrial-Software.png" },
  { id: "s14", title: "Additive Manufacturing & 3D Printing", icon: "/assets/images/3D-Printing.png" },
  { id: "s15", title: "Laser Cutting, Sheet Metal Working & Marking Systems", icon: "/assets/images/technology.png" },
  { id: "s16", title: "Electric Motors, Drives, Pumps & Valves", icon: "/assets/images/Motors.png" },
  { id: "s17", title: "Plant Engineering, Industrial Safety & Environment", icon: "/assets/images/Infrastructure.png" },
  { id: "s18", title: "Industrial Lubricants, Oils & Chemicals", icon: "/assets/images/directors.png" },
  { id: "s19", title: "Sugar & Process Machinery Engineering", icon: "/assets/images/Sugar.png" },
  { id: "s20", title: "Agricultural Machinery & Farm Implements", icon: "/assets/images/seeder.png" },
  { id: "s21", title: "Textile Machinery & Precision Spares", icon: "/assets/images/Textile.png" },
  { id: "s22", title: "Industrial Fasteners, Bearings & Hardware", icon: "/assets/images/mechanical.png" }
];

export const VISITOR_INDUSTRIES = [
  "Foundry, Casting, Forging & Metalworking",
  "Engineering & Manufacturing",
  "Automotive, EV & Auto Components",
  "Precision Engineering & Machining",
  "Agricultural Machinery & Implements",
  "Sugar Industries & Process Industries",
  "Construction & Infrastructure Equipment",
  "Textile & Allied Engineering Industries",
  "OEMs, Tier 1 & Tier 2 Ancillary Industries",
  "Government Departments, PSUs & Railways",
  "Academia, Technical & R&D Institutions",
  "Industrial Automation, Robotics & Smart Plants"
];

export const VISITOR_DESIGNATIONS = [
  "Managing Directors, CEOs, Promoters & Owners",
  "Plant, Factory & Operations Heads",
  "Purchase, Sourcing & Procurement Heads",
  "Production, Quality, Tool Room & Maintenance Engineers",
  "Design, R&D, Projects & Process Engineers",
  "Senior Executives from OEMs, MNCs & MSMEs",
  "Dealers, Distributors, Channel Partners & Traders",
  "Consultants, Industrialists & Government Officials"
];

export const DOWNLOADS_LIST: DownloadItem[] = [
  {
    id: "d1",
    title: "KIE 2027 Official Brochure",
    subtitle: "Complete event profile, regional highlights, floor layout & exhibitor breakdown",
    description: "Complete event profile, regional highlights, floor layout & exhibitor breakdown",
    fileUrl: "/brochure.pdf",
    filePath: "/brochure.pdf",
    fileName: "brochure.pdf",
    size: "9.5 MB",
    icon: "/assets/images/brochure.png",
    downloadsCount: 1420
  },
  {
    id: "d2",
    title: "Stall Booking Form",
    subtitle: "Space application form, stall contract, rate card and payment schedule",
    description: "Space application form, stall contract, rate card and payment schedule",
    fileUrl: "/KIE_Booking_Form.pdf",
    filePath: "/KIE_Booking_Form.pdf",
    fileName: "KIE_Booking_Form.pdf",
    size: "3.6 MB",
    icon: "/assets/images/register.png",
    downloadsCount: 980
  },
  {
    id: "d3",
    title: "Sponsorship Opportunities Kit",
    subtitle: "Platinum, Gold, Silver branding, badge lanyard, entrance arch & media packages",
    description: "Platinum, Gold, Silver branding, badge lanyard, entrance arch & media packages",
    fileUrl: "/KIE_Booking_Form.pdf",
    filePath: "/KIE_Booking_Form.pdf",
    fileName: "KIE_Booking_Form.pdf",
    size: "3.6 MB",
    icon: "/assets/images/register.png",
    downloadsCount: 650
  },
  {
    id: "d4",
    title: "Exhibitors Manual",
    subtitle: "Technical guidelines, possession schedule, power sanction & stall fabrication rules",
    description: "Technical guidelines, possession schedule, power sanction & stall fabrication rules",
    fileUrl: "/KIE_Booking_Form.pdf",
    filePath: "/KIE_Booking_Form.pdf",
    fileName: "KIE_Booking_Form.pdf",
    size: "3.6 MB",
    icon: "/assets/images/booth.png",
    downloadsCount: 520
  },
  {
    id: "d5",
    title: "Official KIE Vector Logo Kit",
    subtitle: "High-resolution print and web logo files in CMYK and RGB color formats",
    description: "High-resolution print and web logo files in CMYK and RGB color formats",
    fileUrl: "/KIL-Logo.pdf",
    filePath: "/KIL-Logo.pdf",
    fileName: "KIL-Logo.pdf",
    size: "227 KB",
    icon: "/assets/images/logo.png",
    downloadsCount: 890
  }
];

export const OFFICIAL_DOWNLOADS = DOWNLOADS_LIST;

export const GALLERY_ITEMS = [
  { id: "g1", title: "Inauguration Ceremony & Dignitaries", year: 2027, category: "inauguration", src: "/assets/images/hero-1.jpg" },
  { id: "g2", title: "Heavy CNC Machinery in Live Demo", year: 2027, category: "machinery", src: "/assets/images/hero-2.jpg" },
  { id: "g3", title: "B2B Buyer-Seller Business Meetings", year: 2027, category: "networking", src: "/assets/images/hero-3.jpg" },
  { id: "g4", title: "Foundry & Casting Display Pavilion", year: 2027, category: "machinery", src: "/assets/images/hero-4.jpg" },
  { id: "g5", title: "Packed Exhibition Hall & Visitor Footfall", year: 2027, category: "stalls", src: "/assets/images/hero-5.jpg" },
  { id: "g6", title: "High-Precision Tooling & Laser Systems", year: 2027, category: "machinery", src: "/assets/images/ab-kie/abkie-cnc.jpg" },
  { id: "g7", title: "Furnace & Sand Testing Technologies", year: 2027, category: "machinery", src: "/assets/images/ab-kie/abkie-foundry.jpg" },
  { id: "g8", title: "Technical Conference & Seminars", year: 2027, category: "conference", src: "/assets/images/ab-kie/abkie-visitors.jpg" },
  { id: "g9", title: "Smart Automation & Robotics Booths", year: 2028, category: "machinery", src: "/assets/images/img.jpg" },
  { id: "g10", title: "Industrial Delegation & Buyer Visits", year: 2028, category: "networking", src: "/assets/images/home-about.jpg" },
  { id: "g11", title: "Modern Octanorm Shell Scheme Stalls", year: 2029, category: "stalls", src: "/assets/images/stall.jpg" },
  { id: "g12", title: "Bare Space Custom Fabricated Stalls", year: 2029, category: "stalls", src: "/assets/images/spaces.jpg" }
];
