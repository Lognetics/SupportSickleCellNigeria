/* ============================================================
   SSCN — central site content / data
   ============================================================ */

export const site = {
  name: "Support Sickle Cell Nigeria",
  shortName: "SSCN",
  tagline:
    "Supporting lives through awareness, healthcare, advocacy, education, and community across Nigeria.",
  email: "hello@supportsicklecell.ng",
  phone: "+234 800 000 0000",
  emergency: "+234 911 000 0000",
  whatsapp: "+234 800 000 0000",
  address: "Plot 12, Health Way, Central Business District, Abuja, Nigeria",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  },
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Understanding Sickle Cell", href: "/understanding-sickle-cell" },
  { label: "Programs", href: "/programs" },
  { label: "Get Support", href: "/get-support" },
  { label: "Events", href: "/events" },
  { label: "Blood Donation", href: "/blood-donation" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Resources", href: "/resources" },
  { label: "Stories of Hope", href: "/stories" },
  { label: "Shop", href: "/shop" },
  { label: "Partners", href: "/partners" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

/* Primary links shown directly in the desktop bar; the rest go in "More" */
export const primaryNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Understanding SCD", href: "/understanding-sickle-cell" },
  { label: "Programs", href: "/programs" },
  { label: "Get Support", href: "/get-support" },
  { label: "Events", href: "/events" },
  { label: "Volunteer", href: "/volunteer" },
];

export const moreNav: NavLink[] = [
  { label: "Blood Donation", href: "/blood-donation" },
  { label: "Resources", href: "/resources" },
  { label: "Stories of Hope", href: "/stories" },
  { label: "Shop", href: "/shop" },
  { label: "Partners", href: "/partners" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 20000, suffix: "+", label: "Lives Reached" },
  { value: 500, suffix: "+", label: "Blood Donors" },
  { value: 36, suffix: " States", label: "Community Outreach" },
  { value: 100, suffix: "+", label: "Active Volunteers" },
  { value: 50, suffix: "+", label: "Partner Hospitals" },
  { value: 3, suffix: "M+", label: "Campaign Reach" },
];

export const whatWeDo = [
  { icon: "stethoscope", title: "Healthcare Support", text: "Subsidised treatment, medication access and hospital partnerships for warriors." },
  { icon: "book", title: "Education", text: "Demystifying sickle cell for schools, communities and families nationwide." },
  { icon: "megaphone", title: "Awareness Campaigns", text: "State-wide drives that reach millions with life-saving information." },
  { icon: "droplet", title: "Blood Donation Drives", text: "Mobilising voluntary donors to keep blood banks stocked for crises." },
  { icon: "scale", title: "Advocacy", text: "Pushing for policy reform and a national sickle cell strategy." },
  { icon: "flask", title: "Research Support", text: "Funding Nigerian-led research into better, affordable treatment." },
  { icon: "heart", title: "Emergency Assistance", text: "Rapid relief for warriors in crisis when every minute matters." },
  { icon: "users", title: "Community Development", text: "Support groups and safe spaces in all 36 states and the FCT." },
  { icon: "spark", title: "Youth Empowerment", text: "Scholarships, mentoring and skills for young warriors." },
  { icon: "dna", title: "Genotype Awareness", text: "Know-your-genotype and pre-marital counselling programs." },
];

export type Program = {
  slug: string;
  title: string;
  summary: string;
  eligibility: string;
  objectives: string[];
  tag: string;
};

export const programs: Program[] = [
  {
    slug: "healthcare-support",
    title: "Healthcare Support",
    summary: "Subsidised consultations, lab tests and medication for registered warriors through our partner hospitals.",
    eligibility: "Registered SSCN beneficiaries with confirmed SS/SC diagnosis.",
    objectives: ["Reduce out-of-pocket treatment costs", "Improve routine care adherence", "Cut avoidable crisis admissions"],
    tag: "Healthcare",
  },
  {
    slug: "medication-assistance",
    title: "Medication Assistance",
    summary: "Access to hydroxyurea, folic acid, antimalarials and pain management essentials at little or no cost.",
    eligibility: "Low-income warriors referred by a partner clinician.",
    objectives: ["Guarantee continuity of essential medicines", "Promote hydroxyurea uptake", "Prevent treatment gaps"],
    tag: "Healthcare",
  },
  {
    slug: "school-outreach",
    title: "School Outreach",
    summary: "Interactive sessions teaching students about genotype, inheritance and compassion for warriors.",
    eligibility: "Primary, secondary and tertiary institutions nationwide.",
    objectives: ["Reach 500 schools yearly", "Normalise genotype testing", "End stigma among young people"],
    tag: "Education",
  },
  {
    slug: "community-awareness",
    title: "Community Awareness",
    summary: "Market squares, places of worship and town halls — meeting communities where they are with the facts.",
    eligibility: "Open to all communities; partner with us to host a drive.",
    objectives: ["Reach millions with accurate information", "Drive genotype testing demand", "Recruit local advocates"],
    tag: "Awareness",
  },
  {
    slug: "youth-programs",
    title: "Youth Programs",
    summary: "Mentorship, skills training and peer support built around and led by young warriors.",
    eligibility: "Warriors and allies aged 13–30.",
    objectives: ["Build confidence and leadership", "Create economic opportunity", "Grow a warrior network"],
    tag: "Empowerment",
  },
  {
    slug: "womens-health",
    title: "Women's Health",
    summary: "Safe pregnancy guidance, reproductive counselling and maternal support for women living with SCD.",
    eligibility: "Women warriors and partners planning a family.",
    objectives: ["Safer pregnancies", "Informed family planning", "Reduce maternal risk"],
    tag: "Healthcare",
  },
  {
    slug: "family-counselling",
    title: "Family Counselling",
    summary: "Genetic and emotional counselling for couples and families navigating sickle cell.",
    eligibility: "Couples, parents and families — pre and post diagnosis.",
    objectives: ["Informed reproductive choices", "Stronger family coping", "Reduce new SS births"],
    tag: "Counselling",
  },
  {
    slug: "nutrition-programs",
    title: "Nutrition Programs",
    summary: "Practical nutrition plans and food support that help warriors stay strong and crisis-free.",
    eligibility: "Registered beneficiaries, prioritising children.",
    objectives: ["Improve daily nutrition", "Support healthy growth", "Reduce crisis frequency"],
    tag: "Healthcare",
  },
  {
    slug: "financial-support",
    title: "Financial Support",
    summary: "Emergency funds for treatment, transport and crisis care for families under strain.",
    eligibility: "Means-tested; referred warriors in financial hardship.",
    objectives: ["Remove cost barriers to care", "Prevent treatment abandonment", "Stabilise families in crisis"],
    tag: "Relief",
  },
  {
    slug: "research-grants",
    title: "Research Grants",
    summary: "Seed funding for Nigerian researchers advancing affordable sickle cell treatment and care.",
    eligibility: "Accredited researchers and institutions.",
    objectives: ["Fund local innovation", "Build the evidence base", "Translate research into care"],
    tag: "Research",
  },
  {
    slug: "emergency-relief",
    title: "Emergency Relief",
    summary: "Rapid-response support — blood, medication and admission cover — during life-threatening crises.",
    eligibility: "Any warrior in an active medical emergency.",
    objectives: ["24/7 crisis response", "Fast access to blood", "Save lives"],
    tag: "Relief",
  },
  {
    slug: "scholarships",
    title: "Educational Scholarship",
    summary: "Tuition and learning support so a sickle cell diagnosis never ends a child's education.",
    eligibility: "School-age warriors with strong academic promise or need.",
    objectives: ["Keep warriors in school", "Fund tuition & materials", "Unlock potential"],
    tag: "Empowerment",
  },
];

export type EventItem = {
  title: string;
  date: string;
  location: string;
  category: string;
  summary: string;
  past?: boolean;
};

export const events: EventItem[] = [
  { title: "Walk for Sickle Cell", date: "Sat, 19 Sep 2026", location: "Millennium Park, Abuja", category: "Walkathon", summary: "A family-friendly 5km walk uniting warriors, families and allies for awareness." },
  { title: "Free Genotype Testing Drive", date: "Sat, 11 Jul 2026", location: "Lagos & Ibadan", category: "Health", summary: "Free, confidential genotype testing with on-site counselling." },
  { title: "Medical Outreach — Kano", date: "Sun, 26 Jul 2026", location: "Kano State", category: "Outreach", summary: "Free consultations, screening and medication for underserved communities." },
  { title: "School Awareness Tour", date: "Aug 2026", location: "Nationwide", category: "Education", summary: "Reaching 100 schools with genotype and inheritance education." },
  { title: "World Sickle Cell Day", date: "Fri, 19 Jun 2026", location: "All 36 States + FCT", category: "Campaign", summary: "Our flagship day of action, advocacy and celebration of warriors.", past: true },
  { title: "Corporate Blood Donation Campaign", date: "Thu, 14 May 2026", location: "Victoria Island, Lagos", category: "Blood Drive", summary: "Partner companies pledged 500+ units to keep blood banks stocked.", past: true },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  { quote: "SSCN covered my son's medication when we had nothing left. Today he is back in school and thriving.", name: "Mrs. Amaka O.", role: "Parent — Enugu" },
  { quote: "I am a warrior, not a victim. The youth program gave me a community and the confidence to lead.", name: "Tunde A.", role: "Warrior & Volunteer — Lagos" },
  { quote: "Their school outreach changed how my students see genotype testing. It is genuinely saving futures.", name: "Mr. Bello I.", role: "Teacher — Kaduna" },
  { quote: "As a haematologist I have seen SSCN's outreach bring care to communities the system forgets.", name: "Dr. Chidinma E.", role: "Haematologist — Abuja" },
  { quote: "Partnering with SSCN on blood drives has been one of our most meaningful CSR commitments.", name: "Grace M.", role: "CSR Lead, Partner Company" },
];

export const partners = [
  "Federal Ministry of Health",
  "National Blood Service",
  "University College Hospital",
  "Lagos University Teaching Hospital",
  "Nigerian Red Cross",
  "WHO Nigeria",
  "Rotary International",
  "Sickle Cell Foundation",
];

export type Story = {
  slug: string;
  name: string;
  role: string;
  excerpt: string;
  category: string;
};

export const stories: Story[] = [
  { slug: "amaras-comeback", name: "Amara's Comeback", role: "Warrior, 24", excerpt: "Diagnosed at three, Amara is now a final-year medical student determined to treat the disease she lives with.", category: "Survivor" },
  { slug: "a-fathers-promise", name: "A Father's Promise", role: "Parent", excerpt: "After losing one child, Mr. Okoro turned grief into a mission to get every couple tested before marriage.", category: "Family" },
  { slug: "the-volunteer-doctor", name: "The Volunteer Doctor", role: "Haematologist", excerpt: "Dr. Eze gives one weekend a month to rural outreach — and it changed how he sees medicine.", category: "Doctor" },
  { slug: "from-patient-to-advocate", name: "From Patient to Advocate", role: "Warrior, 31", excerpt: "Chronic crises could not stop Ngozi from becoming one of Nigeria's loudest voices for warriors.", category: "Survivor" },
  { slug: "the-blood-that-saved-me", name: "The Blood That Saved Me", role: "Warrior, 19", excerpt: "A stranger's donation kept Samuel alive through his worst crisis. Now he recruits donors.", category: "Survivor" },
  { slug: "raising-a-warrior", name: "Raising a Warrior", role: "Parent", excerpt: "How one mother built a routine of care, nutrition and joy around her daughter's diagnosis.", category: "Family" },
];

export const news = [
  { slug: "national-genotype-week", title: "SSCN launches National Genotype Awareness Week", date: "12 Jun 2026", category: "Organization News", excerpt: "A week of free testing and counselling across all six geopolitical zones." },
  { slug: "hydroxyurea-access", title: "New partnership expands hydroxyurea access for warriors", date: "28 May 2026", category: "Medical News", excerpt: "Thousands more warriors will access this life-changing medicine at subsidised cost." },
  { slug: "blood-drive-record", title: "Corporate blood drive sets a new record in Lagos", date: "15 May 2026", category: "Events", excerpt: "Over 500 units pledged in a single day by SSCN partner companies." },
  { slug: "research-grant-2026", title: "2026 research grants awarded to three Nigerian teams", date: "30 Apr 2026", category: "Research", excerpt: "Funding affordable pain-management and early-diagnosis innovations." },
];

export const shopItems = [
  { name: "Warrior Awareness T-Shirt", price: "₦7,500", category: "Apparel", tag: "Bestseller" },
  { name: "SSCN Branded Cap", price: "₦4,000", category: "Apparel" },
  { name: "Awareness Wristband (Pack of 5)", price: "₦2,500", category: "Accessories" },
  { name: '"Hope" Ceramic Mug', price: "₦3,500", category: "Lifestyle" },
  { name: "Understanding Sickle Cell — Handbook", price: "₦5,000", category: "Books", tag: "New" },
  { name: "Awareness Pin Set", price: "₦1,800", category: "Accessories" },
  { name: "Sticker Pack", price: "₦1,200", category: "Accessories" },
  { name: "Sponsor-a-Child Gift Card", price: "₦25,000", category: "Donation", tag: "Gives back" },
];

export const donationTiers = [
  { amount: "₦5,000", impact: "Provides a month of folic acid for a warrior in care." },
  { amount: "₦15,000", impact: "Covers a full genotype test and counselling session for a couple." },
  { amount: "₦50,000", impact: "Funds emergency medication during a crisis admission." },
  { amount: "₦150,000", impact: "Sponsors a child's healthcare for a full term." },
];

export const faqs = [
  { q: "What is Support Sickle Cell Nigeria (SSCN)?", a: "SSCN is a national non-profit creating awareness, supporting warriors and families, funding research, and advocating for better sickle cell care across all 36 states and the FCT." },
  { q: "How do I register as a beneficiary?", a: "Visit the Get Support page and complete the patient registration form. Our team reviews every request and follows up with next steps and referrals." },
  { q: "Is genotype testing really necessary before marriage?", a: "Yes. Knowing both partners' genotypes is the single most effective way to prevent new cases of sickle cell. We offer free testing drives and pre-marital counselling." },
  { q: "How are donations used?", a: "Donations fund healthcare support, medication, emergency relief, awareness campaigns and research. We publish annual reports for full financial transparency." },
  { q: "Can I donate blood through SSCN?", a: "Absolutely. Check the Blood Donation page for upcoming drives and donor eligibility, or register your interest and we'll connect you to the nearest centre." },
  { q: "How can my company partner with SSCN?", a: "We welcome corporate partners for blood drives, sponsorships and CSR initiatives. Reach out via the Partners page to start a conversation." },
  { q: "Do you operate outside major cities?", a: "Yes. Through state representatives and outreach teams we serve urban and rural communities nationwide." },
  { q: "How can I volunteer?", a: "Visit the Volunteer page to choose a role — medical, student, corporate, event or community advocate — and complete the registration form." },
];
