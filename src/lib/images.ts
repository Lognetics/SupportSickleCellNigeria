/* ============================================================
   SSCN — stock image manifest
   All photos depict Black / Nigerian / African people and are
   sourced from Pexels (free for commercial use). Each URL was
   curl-verified (HTTP 200). Swap freely for SSCN's own photography.
   ============================================================ */

export type ImageRef = { src: string; alt: string };

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400`;

export const img = {
  heroCommunity: {
    src: px(33749805),
    alt: "Warm gathering of a Nigerian community outdoors",
  },
  familySmiling: {
    src: px(7114418),
    alt: "Happy Nigerian family with parents and children smiling together",
  },
  doctorPatient: {
    src: px(6303643),
    alt: "Black doctor discussing care with a woman patient in a clinic",
  },
  childSmiling: {
    src: px(30930809),
    alt: "Joyful young Nigerian child smiling",
  },
  bloodDonation: {
    src: px(12193090),
    alt: "A donor's arm during the blood donation process",
  },
  students: {
    src: px(34162714),
    alt: "Nigerian students learning together in a classroom",
  },
  youthGroup: {
    src: px(30798911),
    alt: "Group of stylish young Nigerian adults standing together",
  },
  volunteers: {
    src: px(7475129),
    alt: "Volunteers in matching shirts working together in the community",
  },
  counselling: {
    src: px(30688913),
    alt: "Two people in a supportive conversation",
  },
  nurse: {
    src: px(6098004),
    alt: "A Nigerian nurse in healthcare uniform",
  },
  eventCrowd: {
    src: px(34329972),
    alt: "Crowd at a vibrant outdoor event in Lagos, Nigeria",
  },
  motherChild: {
    src: px(33890111),
    alt: "A Nigerian mother tenderly embracing her baby",
  },
  teamMeeting: {
    src: px(3869649),
    alt: "A team collaborating in an office meeting",
  },
  pregnantWoman: {
    src: px(18824568),
    alt: "A pregnant Nigerian woman with a young child",
  },
  labResearch: {
    src: px(3825434),
    alt: "A researcher conducting an experiment in a laboratory",
  },
  celebration: {
    src: px(30803489),
    alt: "Joyful traditional Nigerian celebration in cultural attire",
  },
  founder: {
    src: px(7446948),
    alt: "Barr. Eyo Ugo, Founder & President of Support Sickle Cell Nigeria",
  },
  portrait1: { src: px(33569519), alt: "Smiling Nigerian woman, portrait" },
  portrait2: { src: px(5908558), alt: "Friendly Nigerian man, portrait" },
  portrait3: { src: px(12672215), alt: "Smiling woman wearing a headwrap, portrait" },
  portrait4: { src: px(30544173), alt: "Portrait of a Nigerian man" },
  portrait5: { src: px(9593307), alt: "Young woman with a joyful smile, portrait" },
  portrait6: { src: px(6077664), alt: "Confident businessman smiling, portrait" },
} as const satisfies Record<string, ImageRef>;

export type ImageKey = keyof typeof img;

/** Portrait pool for team / story avatars. */
export const portraits: ImageRef[] = [
  img.portrait1,
  img.portrait2,
  img.portrait3,
  img.portrait4,
  img.portrait5,
  img.portrait6,
];

/** Per-program imagery (keyed by program slug). */
export const programImages: Record<string, ImageRef> = {
  "healthcare-support": img.doctorPatient,
  "medication-assistance": img.nurse,
  "school-outreach": img.students,
  "community-awareness": img.eventCrowd,
  "youth-programs": img.youthGroup,
  "womens-health": img.pregnantWoman,
  "family-counselling": img.familySmiling,
  "nutrition-programs": img.motherChild,
  "financial-support": img.counselling,
  "research-grants": img.labResearch,
  "emergency-relief": img.bloodDonation,
  scholarships: img.childSmiling,
};

/** Per-news imagery (keyed by news slug). */
export const newsImages: Record<string, ImageRef> = {
  "national-genotype-week": img.celebration,
  "hydroxyurea-access": img.nurse,
  "blood-drive-record": img.bloodDonation,
  "research-grant-2026": img.labResearch,
};

/** A general themed pool for misc card grids (events, resources, etc.). */
export const photoPool: ImageRef[] = [
  img.doctorPatient,
  img.eventCrowd,
  img.bloodDonation,
  img.students,
  img.volunteers,
  img.celebration,
  img.familySmiling,
  img.youthGroup,
  img.nurse,
  img.motherChild,
  img.counselling,
  img.teamMeeting,
];

/** Deterministic pick from the pool by index (wraps around). */
export const poolAt = (i: number): ImageRef => photoPool[i % photoPool.length];

/** Fallback-safe lookups. */
export const programImage = (slug: string): ImageRef =>
  programImages[slug] ?? img.doctorPatient;
export const newsImage = (slug: string): ImageRef =>
  newsImages[slug] ?? img.celebration;
