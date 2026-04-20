export interface GlossaryEntry {
  id: string;
  term: string;
  devanagari?: string;
  transliteration: string;
  definition: string;
  root?: string;
  vedantaMeaning?: string;
  relatedTerms?: string[];
  tags?: string[];
  aliases?: string[];
}

export const glossary: GlossaryEntry[] = [
  {
    id: "a",
    term: "a",
    transliteration: "a",
    definition:
      "an before vowels. The negative particle not; sense of: absence, inadequacy, difference, diminution, impropriety, opposition, likeness.",
  },
  {
    id: "abhasa",
    term: "abhāsa",
    transliteration: "abhāsa",
    definition:
      "Resemblance, likeness, light; false appearance, fallacy, erroneous argument.",
    relatedTerms: ["abhāsanam"],
  },
  {
    id: "abhasanam",
    term: "abhāsanam",
    transliteration: "abhāsanam",
    definition:
      "Making apparent or clear, illuminating.",
    relatedTerms: ["abhāsa"],
  },
  {
    id: "abhavah",
    term: "abhāvaḥ",
    transliteration: "abhāvaḥ",
    definition:
      "The state of non-existence; total absence.",
    relatedTerms: ["bhavaḥ", "svabhāvaḥ"],
  },
  {
    id: "abhayadanam",
    term: "abhayadānam",
    transliteration: "abhayadānam",
    definition:
      "Giving a promise, assurance, or guarantee of safety or protection.",
  },
  {
    id: "abhayam",
    term: "abhayam",
    transliteration: "abhayam",
    definition:
      "Absence or removal of fear.",
    tags: ["fearlessness", "safety", "courage", "protection", "security"],
  },
  {
    id: "abheda",
    term: "abheda",
    transliteration: "abheda",
    definition:
      "Identity; absence of difference.",
    tags: ["non-difference", "identity", "oneness", "unity", "non-duality"],
  },
  {
    id: "abhedabhavana",
    term: "abhedabhāvanā",
    transliteration: "abhedabhāvanā",
    definition:
      "Idea of non-duality (between brahman and self).",
    relatedTerms: ["brahman"],
  },
  {
    id: "abhidha",
    term: "abhidhā",
    transliteration: "abhidhā",
    definition:
      "To say, speak, tell; mention; passive abhidhīyate is called, is said to be.",
    relatedTerms: ["abhidhānam"],
  },
  {
    id: "abhidhanam",
    term: "abhidhānam",
    transliteration: "abhidhānam",
    definition:
      "Name; dictionary.",
    relatedTerms: ["abhidhā"],
  },
  {
    id: "abhidheyam",
    term: "abhidheyam",
    transliteration: "abhidheyam",
    definition:
      "What is named; meaning, sense.",
  },
  {
    id: "abhihita",
    term: "abhihita",
    transliteration: "abhihita",
    definition:
      "Asserted, predicated; mentioned, said, addressed; placed upon.",
  },
  {
    id: "abhilapah",
    term: "abhilāpaḥ",
    transliteration: "abhilāpaḥ",
    definition:
      "Expression; word; speech.",
  },
  {
    id: "abhimana",
    term: "abhimāna",
    transliteration: "abhimāna",
    definition:
      "Identification with a position which is not an intrinsic part of oneself; pride.",
  },
  {
    id: "abhimani",
    term: "abhimānī",
    transliteration: "abhimānī",
    definition:
      "The one who identifies with the physical body.",
  },
  {
    id: "abhinayah",
    term: "abhinayaḥ",
    transliteration: "abhinayaḥ",
    definition:
      "Body language; theatrical action, dramatic representation.",
  },
  {
    id: "abhinivesah",
    term: "abhiniveśaḥ",
    transliteration: "abhiniveśaḥ",
    definition:
      "Commitment, attachment, devotion; resolution, perseverance.",
  },
  {
    id: "abhinna",
    term: "abhinna",
    transliteration: "abhinna",
    definition:
      "Undivided, whole, unaffected, not changed, unbroken.",
    relatedTerms: ["bhinna"],
  },
  {
    id: "abhipravrtta",
    term: "abhipravrtta",
    transliteration: "abhipravrtta",
    definition:
      "Engaged or occupied in (with locative); occurring.",
  },
  {
    id: "abhiprayah",
    term: "abhiprāyaḥ",
    transliteration: "abhiprāyaḥ",
    definition:
      "Contention, intention, meaning, implied sense, relation.",
  },
  {
    id: "abhisandhanam",
    term: "abhisandhānam",
    transliteration: "abhisandhānam",
    definition:
      "Speech; promise; deception; false statement; intention, commitment.",
  },
  {
    id: "abhisandhih",
    term: "abhisandhiḥ",
    transliteration: "abhisandhiḥ",
    definition:
      "Speech; intention; deception; implied sense; belief.",
  },
  {
    id: "abhisekah",
    term: "abhiṣekaḥ",
    transliteration: "abhiṣekaḥ",
    definition:
      "Ritual sprinkling, bathing; coronation.",
  },
  {
    id: "abhisnehah",
    term: "abhisnehaḥ",
    transliteration: "abhisnehaḥ",
    definition:
      "Extreme attachment, possessiveness.",
  },
  {
    id: "abhita",
    term: "abhita",
    transliteration: "abhita",
    definition:
      "Not subject to negation; unimpeached.",
  },
  {
    id: "abhivyakta",
    term: "abhivyakta",
    transliteration: "abhivyakta",
    definition:
      "Manifested; revealed.",
  },
  {
    id: "abhivyaktih",
    term: "abhivyaktiḥ",
    transliteration: "abhivyaktiḥ",
    definition:
      "Declaration; display; revelation; manifestation of a cause as an effect.",
  },
  {
    id: "abhivyanjanam",
    term: "abhivyañjanam",
    transliteration: "abhivyañjanam",
    definition:
      "Manifesting; revealing.",
  },
  {
    id: "abhuta",
    term: "abhūta",
    transliteration: "abhūta",
    definition:
      "Non-existent, what is not or has not been, not true or real.",
    relatedTerms: ["bhūta"],
  },
  {
    id: "abhyantara",
    term: "abhyantara",
    transliteration: "abhyantara",
    definition:
      "Interior, internal; being included in.",
  },
  {
    id: "abhyasah",
    term: "abhyāsaḥ",
    transliteration: "abhyāsaḥ",
    definition:
      "Repeated practice.",
  },
  {
    id: "abhyasta",
    term: "abhyasta",
    transliteration: "abhyasta",
    definition:
      "Repeated, frequently practiced; accustomed to; learned.",
  },
  {
    id: "abhyudaya",
    term: "abhyudaya",
    transliteration: "abhyudaya",
    definition:
      "Accomplishment of a desired object; celebration; rise; prosperity.",
  },
  {
    id: "abhyupagamah",
    term: "abhyupagamaḥ",
    transliteration: "abhyupagamaḥ",
    definition:
      "Acceptance, admitting; approach, arrival.",
  },
  {
    id: "acaks",
    term: "ācakṣ",
    transliteration: "ācakṣ",
    definition:
      "To speak, announce, declare, relate; ācakṣate",
  },
  {
    id: "acala",
    term: "acala",
    transliteration: "acala",
    definition:
      "Unmoving, steady.",
    relatedTerms: ["cala"],
  },
  {
    id: "acamanam",
    term: "ācamanam",
    transliteration: "ācamanam",
    definition:
      "Sipping water from the palm of the hand before religious ceremonies and before meals.",
  },
  {
    id: "acarah",
    term: "ācāraḥ",
    transliteration: "ācāraḥ",
    definition:
      "Conduct, behavior; response to the world.",
  },
  {
    id: "acaranam",
    term: "ācaraṇam",
    transliteration: "ācaraṇam",
    definition:
      "Conduct, behavior; practising, doing.",
  },
  {
    id: "acaryah",
    term: "ācāryaḥ",
    transliteration: "ācāryaḥ",
    definition:
      "A teacher.",
  },
  {
    id: "acchadanam",
    term: "acchādanam",
    transliteration: "acchādanam",
    definition:
      "Clothes; covering, sheath.",
  },
  {
    id: "acetas",
    term: "acetas",
    transliteration: "acetas",
    definition:
      "Without revival; inanimate.",
  },
  {
    id: "acintya",
    term: "acintya",
    transliteration: "acintya",
    definition:
      "Not available for objectification.",
  },
  {
    id: "acyutah",
    term: "acyutaḥ",
    transliteration: "acyutaḥ",
    definition:
      "A name for Vishnu; not fallen, firm, fixed; imperishable, permanent.",
  },
  {
    id: "ad",
    term: "ad",
    transliteration: "ad",
    definition:
      "To eat. atti",
  },
  {
    id: "adambhitvam",
    term: "adambhitvam",
    transliteration: "adambhitvam",
    definition:
      "Free from hypocrisy; free from deceit and self-deceit; genuineness.",
  },
  {
    id: "adarah",
    term: "ādaraḥ",
    transliteration: "ādaraḥ",
    definition:
      "Respect; attention; beginning; effort.",
  },
  {
    id: "adbhutam",
    term: "adbhutam",
    transliteration: "adbhutam",
    definition:
      "Increase; a wonder, unexpected occurrence.",
  },
  {
    id: "adesah",
    term: "ādeśaḥ",
    transliteration: "ādeśaḥ",
    definition:
      "Substitute, replacement; instruction, teaching; order; advice; illustration; command, rule.",
  },
  {
    id: "adhama",
    term: "adhama",
    transliteration: "adhama",
    definition:
      "Lowest.",
  },
  {
    id: "adhamaguruh",
    term: "adhamaguruh",
    transliteration: "adhamaguruh",
    definition:
      "A teacher who is established in the self but does not have teaching skills.",
  },
  {
    id: "adhanam",
    term: "adhānam",
    transliteration: "adhānam",
    definition:
      "Keeping the sacred fire; performing; imparting moral instruction.",
  },
  {
    id: "adhara",
    term: "adhara",
    transliteration: "adhara",
    definition:
      "Lower (lit. not held up), low.",
    root: "not held up",
  },
  {
    id: "adharmah",
    term: "adharmaḥ",
    transliteration: "adharmaḥ",
    definition:
      "Improper action.",
  },
  {
    id: "adheya",
    term: "ādheya",
    transliteration: "ādheya",
    definition:
      "To be attributed; to be held; to be placed.",
  },
  {
    id: "adhibhautika",
    term: "ādhibhautika",
    transliteration: "ādhibhautika",
    definition:
      "Caused by earthly events; relating to natural causes.",
  },
  {
    id: "adhidaivika",
    term: "ādhidaivika",
    transliteration: "ādhidaivika",
    definition:
      "Relating to destiny; caused by fate.",
  },
  {
    id: "adhigamah",
    term: "adhigamaḥ",
    transliteration: "adhigamaḥ",
    definition:
      "Mastery, knowledge; acquisition, gain.",
  },
  {
    id: "adhigata",
    term: "adhigata",
    transliteration: "adhigata",
    definition:
      "Studied; known; acquired.",
  },
  {
    id: "adhika",
    term: "adhika",
    transliteration: "adhika",
    definition:
      "More, additional, greater.",
    relatedTerms: ["adhikāraḥ", "adhikārī"],
  },
  {
    id: "adhikarah",
    term: "adhikāraḥ",
    transliteration: "adhikāraḥ",
    definition:
      "Choice; authority; position; effort; context; beginning; watching over; a word or sūtra carried over into the following sūtras.",
    relatedTerms: ["adhika"],
  },
  {
    id: "adhikaranam",
    term: "adhikaraṇam",
    transliteration: "adhikaraṇam",
    definition:
      "Agreement; grammatical relation; location; topic; chapter, section; the sense of the locative case; placing at the head, appointing.",
  },
  {
    id: "adhikari",
    term: "adhikārī",
    transliteration: "adhikārī",
    definition:
      "One qualified for self-knowledge.",
    relatedTerms: ["adhika"],
  },
  {
    id: "adhikrta",
    term: "adhikṛta",
    transliteration: "adhikṛta",
    definition:
      "Authorized; one who has authorized qualifications.",
  },
  {
    id: "adhikrtya",
    term: "adhikṛtya",
    transliteration: "adhikṛtya",
    definition:
      "ind. With reference to, regarding; aiming at, alluding to, referring to.",
  },
  {
    id: "adhikyam",
    term: "adhikyam",
    transliteration: "adhikyam",
    definition:
      "Abundance; preponderance; excess.",
  },
  {
    id: "adhimatram",
    term: "adhimātram",
    transliteration: "adhimātram",
    definition:
      "Beyond measure.",
  },
  {
    id: "adhisthanam",
    term: "adhiṣṭhānam",
    transliteration: "adhiṣṭhānam",
    definition:
      "The substance of which something is made; basis.",
  },
  {
    id: "adhisthananyatvam",
    term: "adhiṣṭhānānyatvam",
    transliteration: "adhiṣṭhānānyatvam",
    definition:
      "Not enjoying the status of being other than the substance.",
  },
  {
    id: "adhita",
    term: "adhīta",
    transliteration: "adhīta",
    definition:
      "Studied, learned.",
  },
  {
    id: "adhuna",
    term: "adhunā",
    transliteration: "adhunā",
    definition:
      "ind. Now, at this time.",
  },
  {
    id: "adhvaryuh",
    term: "adhvaryuḥ",
    transliteration: "adhvaryuḥ",
    definition:
      "An officiating priest along with hotṛ, udgātṛ, and brahman.",
    relatedTerms: ["brahman", "udgātṛ", "hotṛ"],
  },
  {
    id: "adhyaharah",
    term: "adhyāhāraḥ",
    transliteration: "adhyāhāraḥ",
    definition:
      "A mode of interpreting a sentence by supplying extra words; inferring.",
  },
  {
    id: "adhyaksa",
    term: "adhyakṣa",
    transliteration: "adhyakṣa",
    definition:
      "Perceptible to the senses, visible.",
    relatedTerms: ["adhyakṣaram"],
  },
  {
    id: "adhyaksaram",
    term: "adhyakṣaram",
    transliteration: "adhyakṣaram",
    definition:
      "The syllable om; above all syllables.",
    relatedTerms: ["adhyakṣa"],
  },
  {
    id: "adhyapanam",
    term: "adhyāpanam",
    transliteration: "adhyāpanam",
    definition:
      "Teaching, instruction - especially of Veda.",
  },
  {
    id: "adhyaropah",
    term: "adhyāropaḥ",
    transliteration: "adhyāropaḥ",
    definition:
      "Superimposition; attributing the properties of a thing to another; erroneous knowledge.",
  },
  {
    id: "adhyasa",
    term: "adhyāsa",
    devanagari: "अध्यास",
    transliteration: "adhyāsa",
    definition:
      "Superimposition; the projection of attributes of one thing onto another.",
    root: "adhi + √as — to throw upon",
    vedantaMeaning:
      "The mutual superimposition of the Self and the not-Self. Śaṅkara opens the Brahmasūtra-bhāṣya by identifying adhyāsa as the root cause of saṃsāra — mistaking the body-mind for ātmā and ātmā for the body-mind.",
    relatedTerms: ["avidyā", "mithyā", "viveka"],
    tags: ["superimposition", "projection", "error", "confusion", "misidentification", "ignorance"],
  },
  {
    id: "adhyasah",
    term: "adhyāsaḥ",
    transliteration: "adhyāsaḥ",
    definition:
      "Imposition; false attribution.",
    relatedTerms: ["adhyāsa"],
  },
  {
    id: "adhyasanam",
    term: "adhyāsanam",
    transliteration: "adhyāsanam",
    definition:
      "Identification of two things in such a manner that one is completely absorbed into the other; final conclusion.",
    relatedTerms: ["adhyāsa"],
  },
  {
    id: "adhyasika",
    term: "adhyāsika",
    transliteration: "adhyāsika",
    definition:
      "Caused by adhyāsa (i.e. by attributing the nature and properties of one thing to another).",
    relatedTerms: ["adhyāsa"],
  },
  {
    id: "adhyasta",
    term: "adhyasta",
    transliteration: "adhyasta",
    definition:
      "Attributed; wrongly ascribed; placed upon.",
  },
  {
    id: "adhyatma",
    term: "adhyātma",
    transliteration: "adhyātma",
    definition:
      "Belonging to self. adhyātmatvam ind. Concerning self.",
  },
  {
    id: "adhyatmika",
    term: "ādhyātmika",
    transliteration: "ādhyātmika",
    definition:
      "Belonging to the person; concerning an individual.",
  },
  {
    id: "adhyavasayah",
    term: "adhyavasāyaḥ",
    transliteration: "adhyavasāyaḥ",
    definition:
      "Determination; perseverance; effort; exertion; resolution, resolve.",
  },
  {
    id: "adhyayah",
    term: "adhyāyaḥ",
    transliteration: "adhyāyaḥ",
    definition:
      "Chapter; study; student of the Vedas.",
  },
  {
    id: "adhyayanam",
    term: "adhyayanam",
    transliteration: "adhyayanam",
    definition:
      "Study of the Veda; learning; from adī to study adhyetavyaḥ adhyāpayati.",
    root: "adī to study",
    relatedTerms: ["ādi"],
  },
  {
    id: "adi",
    term: "ādi",
    transliteration: "ādi",
    definition:
      "First, primary, principal; in comp. - beginning with; ādih Beginning; cause, at the end of compound - beginning with, 'et cetera,' and so on.",
  },
  {
    id: "adimat",
    term: "ādimat",
    transliteration: "ādimat",
    definition:
      "Having a beginning.",
  },
  {
    id: "aditi",
    term: "aditi",
    transliteration: "aditi",
    definition:
      "Free; boundless, unlimited; whole.",
  },
  {
    id: "adityah",
    term: "ādityaḥ",
    transliteration: "ādityaḥ",
    definition:
      "The sun; the solar deity.",
  },
  {
    id: "adrsta",
    term: "adṛṣṭa",
    transliteration: "adṛṣṭa",
    definition:
      "Unseen (karmic results).",
    relatedTerms: ["dṛṣṭa"],
  },
  {
    id: "advaita",
    term: "advaita",
    transliteration: "advaita",
    definition:
      "Non-dual; without a second; without fear.",
    vedantaMeaning:
      "The teaching that Brahman alone is real and there is no second entity apart from it. Advaita does not deny the empirical world but reveals that the world has no independent reality separate from Brahman. The mahāvākya 'tat tvam asi' directly reveals this non-duality — that the essential nature of the individual (tvam) is identical with the whole (tat).",
    relatedTerms: ["brahman"],
  },
  {
    id: "advaya",
    term: "advaya",
    transliteration: "advaya",
    definition:
      "Not two; unique; undivided.",
  },
  {
    id: "advitiya",
    term: "advitīya",
    transliteration: "advitīya",
    definition:
      "Without a second; matchless.",
    relatedTerms: ["dvitīya"],
  },
  {
    id: "adya",
    term: "ādya",
    transliteration: "ādya",
    definition:
      "First; primitive; being at the head; foremost; immediately preceding.",
  },
  {
    id: "adyanta",
    term: "ādyanta",
    transliteration: "ādyanta",
    definition:
      "Having beginning and end.",
  },
  {
    id: "agamah",
    term: "āgamaḥ",
    transliteration: "āgamaḥ",
    definition:
      "Sacred text; śāstram, śrutiḥ; coming; arrival.",
    relatedTerms: ["śāstram", "śrutiḥ"],
  },
  {
    id: "agantuka",
    term: "āgantuka",
    transliteration: "āgantuka",
    definition:
      "Event, coming, arriving; incidental, accidental.",
  },
  {
    id: "agnih",
    term: "agniḥ",
    transliteration: "agniḥ",
    definition:
      "Fire; the deity of fire.",
  },
  {
    id: "agnihotram",
    term: "agnihotram",
    transliteration: "agnihotram",
    definition:
      "Maintaining and offering to the sacred fire; oblation to Agni; both obligatory and optional ritual.",
  },
  {
    id: "agocara",
    term: "agocara",
    transliteration: "agocara",
    definition:
      "Not available for perception or inference; beyond the power of words.",
    relatedTerms: ["gocara"],
  },
  {
    id: "agotra",
    term: "agotra",
    transliteration: "agotra",
    definition:
      "Unconnected; without any lineage.",
  },
  {
    id: "agra",
    term: "agra",
    transliteration: "agra",
    definition:
      "First, foremost, best; pre-eminent; excessive, surplus.",
    relatedTerms: ["jāgrat"],
  },
  {
    id: "agrahah",
    term: "agrahaḥ",
    transliteration: "agrahaḥ",
    definition:
      "Seizing, taking; strong attachment.",
  },
  {
    id: "agrahanam",
    term: "agrahaṇam",
    transliteration: "agrahaṇam",
    definition:
      "Not grasping, non-comprehension.",
  },
  {
    id: "agriya",
    term: "agrīya",
    transliteration: "agrīya",
    definition:
      "Foremost, best, excellent.",
  },
  {
    id: "ahankarah",
    term: "ahaṅkāraḥ",
    transliteration: "ahaṅkāraḥ",
    definition:
      "Sense of self; self-image; ego.",
    vedantaMeaning:
      "The I-notion — the function of the antaḥkaraṇam that claims ownership and doership: 'I am the doer, I am the knower, this is mine.' Ahaṅkāra is the mechanism by which the limitless ātmā appears to be a particular individual. It is not the self but a thought-form (vṛtti) that attributes the qualities of the body-mind to ātmā and the qualities of ātmā to the body-mind — this is adhyāsa.",
    relatedTerms: ["manas", "buddhiḥ", "cittam", "antaḥkaraṇam"],
    tags: ["ego", "self-image", "identity", "I-sense", "individuality"],
  },
  {
    id: "ahavaniya",
    term: "āhavanīya",
    transliteration: "āhavanīya",
    definition:
      "One of the three fires burning at a sacrifice; a consecrated fire.",
  },
  {
    id: "ahimsa",
    term: "ahiṃsā",
    transliteration: "ahiṃsā",
    definition:
      "Abstaining from killing or harming others in thought, word, or deed.",
    tags: ["non-violence", "peace", "compassion", "harmlessness", "non-injury"],
  },
  {
    id: "ahutih",
    term: "āhutiḥ",
    transliteration: "āhutiḥ",
    definition:
      "Offering; oblation.",
  },
  {
    id: "aicchika",
    term: "aicchika",
    transliteration: "aicchika",
    definition:
      "Optional, voluntary.",
  },
  {
    id: "aihika",
    term: "aihika",
    transliteration: "aihika",
    definition:
      "Of this world or place, secular, worldly.",
  },
  {
    id: "aiksata",
    term: "aikṣata",
    transliteration: "aikṣata",
    definition:
      "It saw -- from from root īkṣ.",
    root: "īkṣ",
  },
  {
    id: "aikyam",
    term: "aikyam",
    transliteration: "aikyam",
    definition:
      "Oneness; unity; identity.",
  },
  {
    id: "aisvaryam",
    term: "aiśvaryam",
    transliteration: "aiśvaryam",
    definition:
      "Overlordship; power; wealth; one of six bhāgas.",
  },
  {
    id: "aitadatmyam",
    term: "aitadātmyam",
    transliteration: "aitadātmyam",
    definition:
      "The state of having this property or peculiarity.",
  },
  {
    id: "ajah",
    term: "ajaḥ",
    transliteration: "ajaḥ",
    definition:
      "Unborn.",
  },
  {
    id: "ajahallaksana",
    term: "ajahallakṣaṇā",
    transliteration: "ajahallakṣaṇā",
    definition:
      "Implication where the primary or original sense of a word does not disappear.",
  },
  {
    id: "ajam",
    term: "ajam",
    transliteration: "ajam",
    definition:
      "Not born, unborn.",
  },
  {
    id: "ajati",
    term: "ajāti",
    transliteration: "ajāti",
    definition:
      "Eternal, not produced, not born.",
  },
  {
    id: "ajaya",
    term: "ajaya",
    transliteration: "ajaya",
    definition:
      "Invincible, unconquerable.",
  },
  {
    id: "ajna",
    term: "ājñā",
    transliteration: "ājñā",
    definition:
      "Order, command.",
    aliases: ["adnya"],
  },
  {
    id: "ajnata",
    term: "ajñāta",
    transliteration: "ajñāta",
    definition:
      "Unknown; unexpected.",
    aliases: ["adnyata"],
  },
  {
    id: "ajyam",
    term: "ājyam",
    transliteration: "ājyam",
    definition:
      "Clarified butter.",
  },
  {
    id: "akam",
    term: "akam",
    transliteration: "akam",
    definition:
      "Problem; sorrow, duḥkham.",
    relatedTerms: ["duḥkham"],
  },
  {
    id: "akamahata",
    term: "ākāmahata",
    transliteration: "ākāmahata",
    definition:
      "Free from desire; not afflicted by desire; calm.",
  },
  {
    id: "akanksa",
    term: "ākāṅkṣā",
    transliteration: "ākāṅkṣā",
    definition:
      "Expectancy; desiring; looking at; intention.",
  },
  {
    id: "akarah",
    term: "ākāraḥ",
    transliteration: "ākāraḥ",
    definition:
      "Form; appearance; expression.",
  },
  {
    id: "akarpanyam",
    term: "ākārpanyam",
    transliteration: "ākārpanyam",
    definition:
      "Immaterial; non-productive.",
  },
  {
    id: "akarta",
    term: "akartā",
    transliteration: "akartā",
    definition:
      "The non-doer; jñānamuktaḥ, jñānī.",
    relatedTerms: ["jñānī"],
  },
  {
    id: "akarya",
    term: "akārya",
    transliteration: "akārya",
    definition:
      "Improper; not fit to be done.",
    relatedTerms: ["kārya"],
  },
  {
    id: "akasah",
    term: "ākāśaḥ",
    transliteration: "ākāśaḥ",
    definition:
      "Space.",
  },
  {
    id: "akasmat",
    term: "akasmāt",
    transliteration: "akasmāt",
    definition:
      "ind. Suddenly; without cause.",
  },
  {
    id: "akathya",
    term: "akathya",
    transliteration: "akathya",
    definition:
      "Not told, cannot be expressed in words, not fit to be mentioned.",
  },
  {
    id: "akhanda",
    term: "akhaṇḍa",
    transliteration: "akhaṇḍa",
    definition:
      "Division free; whole, complete.",
  },
  {
    id: "akhila",
    term: "akhila",
    transliteration: "akhila",
    definition:
      "Whole, entire, complete.",
  },
  {
    id: "akhya",
    term: "ākhyā",
    transliteration: "ākhyā",
    definition:
      "Name; appearance.",
    relatedTerms: ["ākhyānam", "ākhyāyikā"],
  },
  {
    id: "akhyanam",
    term: "ākhyānam",
    transliteration: "ākhyānam",
    definition:
      "Story; communication.",
    relatedTerms: ["ākhyā"],
  },
  {
    id: "akhyayika",
    term: "ākhyāyikā",
    transliteration: "ākhyāyikā",
    definition:
      "Narrative story.",
    relatedTerms: ["ākhyā"],
  },
  {
    id: "akrtih",
    term: "ākṛtiḥ",
    transliteration: "ākṛtiḥ",
    definition:
      "Form, shape, appearance.",
  },
  {
    id: "aksam",
    term: "akṣam",
    transliteration: "akṣam",
    definition:
      "A organ of sense.",
  },
  {
    id: "aksara",
    term: "akṣara",
    transliteration: "akṣara",
    definition:
      "Indestructible; undying; imperishable; immutable.",
    relatedTerms: ["akṣaram"],
  },
  {
    id: "aksaram",
    term: "akṣaram",
    transliteration: "akṣaram",
    definition:
      "A letter of the alphabet; syllable.",
    relatedTerms: ["akṣara"],
  },
  {
    id: "aksaya",
    term: "akṣaya",
    transliteration: "akṣaya",
    definition:
      "Imperishable; undecaying.",
  },
  {
    id: "aksepah",
    term: "ākṣepaḥ",
    transliteration: "ākṣepaḥ",
    definition:
      "Objection; doubt; throwing off; censure, blame.",
  },
  {
    id: "aksini",
    term: "akṣiṇī",
    transliteration: "akṣiṇī",
    definition:
      "The eye; one who sees.",
  },
  {
    id: "aksita",
    term: "akṣita",
    transliteration: "akṣita",
    definition:
      "Permanent; undecaying; unfailing.",
    relatedTerms: ["śīta", "lakṣita"],
  },
  {
    id: "alam",
    term: "alam",
    transliteration: "alam",
    definition:
      "ind. Enough.",
    relatedTerms: ["chalam"],
  },
  {
    id: "alambanam",
    term: "ālambanam",
    transliteration: "ālambanam",
    definition:
      "Symbol; support; something loaded with something else.",
  },
  {
    id: "alambuddhih",
    term: "ālambuddhiḥ",
    transliteration: "ālambuddhiḥ",
    definition:
      "False notion; sense of satisfaction.",
  },
  {
    id: "alankarah",
    term: "alaṅkāraḥ",
    transliteration: "alaṅkāraḥ",
    definition:
      "Decoration, ornament; act of decorating.",
  },
  {
    id: "alata",
    term: "ālāta",
    transliteration: "ālāta",
    definition:
      "Fire-brand, torch.",
  },
  {
    id: "alocanam",
    term: "ālocanam",
    transliteration: "ālocanam",
    definition:
      "Inquiry; analysis; perceiving.",
  },
  {
    id: "alokah",
    term: "ālokaḥ",
    transliteration: "ālokaḥ",
    definition:
      "Light; seeing; appearance.",
  },
  {
    id: "alpa",
    term: "alpa",
    transliteration: "alpa",
    definition:
      "Small, little.",
  },
  {
    id: "aluptasakti",
    term: "aluptaśakti",
    transliteration: "aluptaśakti",
    definition:
      "Unblinking, always awake.",
  },
  {
    id: "amanibhava",
    term: "amānibhāva",
    transliteration: "amānibhāva",
    definition:
      "Free from mind being seen as an impediment to self-knowledge.",
  },
  {
    id: "amanitvam",
    term: "amānitvam",
    transliteration: "amānitvam",
    definition:
      "Absence of pride and arrogance.",
  },
  {
    id: "amantranam",
    term: "āmantraṇam",
    transliteration: "āmantraṇam",
    definition:
      "Permission; calling out.",
  },
  {
    id: "amara",
    term: "amara",
    transliteration: "amara",
    definition:
      "Imperishable, undying.",
  },
  {
    id: "amarakosah",
    term: "amarakośaḥ",
    transliteration: "amarakośaḥ",
    definition:
      "Name of the most popular Sanskrit lexicon.",
  },
  {
    id: "amita",
    term: "amita",
    transliteration: "amita",
    definition:
      "Immeasurable, boundless.",
    relatedTerms: ["mita"],
  },
  {
    id: "amnayah",
    term: "āmnāyaḥ",
    transliteration: "āmnāyaḥ",
    definition:
      "Advice; instruction; sacred tradition; sacred texts; study.",
  },
  {
    id: "amrtam",
    term: "amṛtam",
    transliteration: "amṛtam",
    definition:
      "Nectar of immortality; immortality.",
  },
  {
    id: "amrtatvam",
    term: "amṛtatvam",
    transliteration: "amṛtatvam",
    definition:
      "Immortality; mokṣeḥ.",
  },
  {
    id: "amsah",
    term: "amśaḥ",
    transliteration: "amśaḥ",
    definition:
      "Share, part, portion; member; aspect.",
  },
  {
    id: "amsuh",
    term: "amśuḥ",
    transliteration: "amśuḥ",
    definition:
      "A ray, beam of light; the sun; a small or minute particle.",
  },
  {
    id: "amurta",
    term: "amūrta",
    transliteration: "amūrta",
    definition:
      "Formless, indescribable; subtle.",
  },
  {
    id: "amusmika",
    term: "amūṣmika",
    transliteration: "amūṣmika",
    definition:
      "Belonging to the next or other world.",
  },
  {
    id: "amutra",
    term: "amutra",
    transliteration: "amutra",
    definition:
      "ind. In that place; in the next world; there (in what has been said before).",
  },
  {
    id: "anabhisvangah",
    term: "anabhiṣvaṅgaḥ",
    transliteration: "anabhiṣvaṅgaḥ",
    definition:
      "Absence of extreme attachment.",
  },
  {
    id: "anadhigata",
    term: "anādhigata",
    transliteration: "anādhigata",
    definition:
      "That which cannot be arrived at by perception and inference.",
  },
  {
    id: "anadi",
    term: "anādi",
    transliteration: "anādi",
    definition:
      "Without beginning (e.g. jñānaḥ, līlānā, cidātmā, avidyā, taccitoḥ yogaḥ).",
    relatedTerms: ["avidyā", "yogaḥ"],
    tags: ["beginningless", "eternal", "timeless", "infinite"],
  },
  {
    id: "analah",
    term: "analaḥ",
    transliteration: "analaḥ",
    definition:
      "Fire.",
  },
  {
    id: "analam",
    term: "analam",
    transliteration: "analam",
    definition:
      "Never enough.",
  },
  {
    id: "anamaka",
    term: "anāmaka",
    transliteration: "anāmaka",
    definition:
      "Nameless, infamous.",
  },
  {
    id: "anamaya",
    term: "anāmaya",
    transliteration: "anāmaya",
    definition:
      "Free from affliction; healthy.",
    relatedTerms: ["nāma"],
  },
  {
    id: "anandabhuh",
    term: "ānandabhuḥ",
    transliteration: "ānandabhuḥ",
    definition:
      "A description of ātmā as sleeper; the enjoyer of svarūpa, of self.",
    relatedTerms: ["ātmā"],
  },
  {
    id: "anandah",
    term: "ānandaḥ",
    transliteration: "ānandaḥ",
    definition:
      "The true nature of happiness; wholeness; mantaḥ.",
    relatedTerms: ["brahman", "ātmā", "sat"],
    tags: ["happiness", "bliss", "joy", "wholeness", "fullness", "completeness"],
  },
  {
    id: "anandamayah",
    term: "ānandamayaḥ",
    transliteration: "ānandamayaḥ",
    definition:
      "Nothing but knowledge; saturation of degrees of happiness.",
  },
  {
    id: "anandamayakosah",
    term: "ānandamayakośaḥ",
    transliteration: "ānandamayakośaḥ",
    definition:
      "The causal body; abiding in ignorance.",
  },
  {
    id: "anandana",
    term: "ānandana",
    transliteration: "ānandana",
    definition:
      "Pleasing, delighting.",
  },
  {
    id: "ananta",
    term: "ananta",
    transliteration: "ananta",
    definition:
      "Limitless, eternal, endless, boundless, infinite. anantam Limitless wholeness.",
    relatedTerms: ["anantara", "anantaram", "ānantaryam"],
    tags: ["limitless", "infinite", "eternal", "endless", "boundless", "wholeness"],
  },
  {
    id: "anantara",
    term: "anantara",
    transliteration: "anantara",
    definition:
      "Immediately adjoining; limitless; having no interior space.",
    relatedTerms: ["ananta", "anantaram"],
  },
  {
    id: "anantaram",
    term: "anantaram",
    transliteration: "anantaram",
    definition:
      "After.",
    relatedTerms: ["ananta", "anantara"],
  },
  {
    id: "anantaryam",
    term: "ānantaryam",
    transliteration: "ānantaryam",
    definition:
      "Immediate succession, sequence; after which.",
    relatedTerms: ["ananta"],
  },
  {
    id: "ananya",
    term: "ananya",
    transliteration: "ananya",
    definition:
      "Not different; identical; not other than.",
  },
  {
    id: "anapanna",
    term: "anāpanna",
    transliteration: "anāpanna",
    definition:
      "Not gained, not gone to; unafflicted.",
  },
  {
    id: "anapeta",
    term: "anapeta",
    transliteration: "anapeta",
    definition:
      "Not deviating from, not leaving, not devoid of.",
  },
  {
    id: "anarthah",
    term: "anarthaḥ",
    transliteration: "anarthaḥ",
    definition:
      "Problem; useless object; misfortune; meaninglessness; nonsense.",
  },
  {
    id: "anarthakyam",
    term: "anarthakyam",
    transliteration: "anarthakyam",
    definition:
      "Uselessness, unprofitableness; impropriety.",
  },
  {
    id: "anatha",
    term: "anātha",
    transliteration: "anātha",
    definition:
      "Unsupported; parentless; helpless; having no master.",
  },
  {
    id: "anatma",
    term: "anātmā",
    devanagari: "अनात्मा",
    transliteration: "anātmā",
    definition:
      "All that is other than self; all objects of consciousness.",
    root: "an (not) + ātmā",
    vedantaMeaning:
      "The body, senses, mind, and all objects of experience. Anātmā is mithyā — it has no independent existence apart from ātmā. Discrimination between ātmā and anātmā is the foundation of viveka.",
    relatedTerms: ["ātmā", "viveka", "mithyā"],
    tags: ["not-self", "body", "mind", "objects", "world", "inert"],
  },
  {
    id: "anavadhanam",
    term: "anavadhānam",
    transliteration: "anavadhānam",
    definition:
      "Inattention, inadvertence, carelessness.",
  },
  {
    id: "anavadya",
    term: "anavadya",
    transliteration: "anavadya",
    definition:
      "Faultless, blameless.",
  },
  {
    id: "anavastha",
    term: "anavasthā",
    transliteration: "anavasthā",
    definition:
      "Infinite regression; absence of conclusion; without resting place.",
  },
  {
    id: "anayasah",
    term: "anāyāsaḥ",
    transliteration: "anāyāsaḥ",
    definition:
      "Ease, facility, absence of difficulty.",
  },
  {
    id: "andah",
    term: "aṇḍaḥ",
    transliteration: "aṇḍaḥ",
    definition:
      "Egg.",
  },
  {
    id: "andaja",
    term: "aṇḍaja",
    transliteration: "aṇḍaja",
    definition:
      "Born from an egg.",
  },
  {
    id: "andha",
    term: "andha",
    transliteration: "andha",
    definition:
      "Blind.",
  },
  {
    id: "andhakarah",
    term: "andhakāraḥ",
    transliteration: "andhakāraḥ",
    definition:
      "Darkness; ignorance.",
  },
  {
    id: "aneka",
    term: "aneka",
    transliteration: "aneka",
    definition:
      "Various; many.",
  },
  {
    id: "angam",
    term: "aṅgam",
    transliteration: "aṅgam",
    definition:
      "The body; a limb; portion.",
  },
  {
    id: "angi",
    term: "aṅgī",
    transliteration: "aṅgī",
    definition:
      "That which has parts or attachments or limbs.",
  },
  {
    id: "anidra",
    term: "anidrā",
    transliteration: "anidrā",
    definition:
      "Sleepless, awake.",
  },
  {
    id: "animitta",
    term: "animitta",
    transliteration: "animitta",
    definition:
      "Causeless, groundless.",
  },
  {
    id: "anirdharita",
    term: "anirdhārita",
    transliteration: "anirdhārita",
    definition:
      "Not determined or ascertained.",
  },
  {
    id: "anirvacaniya",
    term: "anirvacanīya",
    transliteration: "anirvacanīya",
    definition:
      "Cannot be taken either as satyam or as tuccham; understood by implication only; that which cannot be defined.",
    relatedTerms: ["satyam"],
  },
  {
    id: "anisa",
    term: "aniṣā",
    transliteration: "aniṣā",
    definition:
      "Helplessness.",
    relatedTerms: ["upaniṣad"],
  },
  {
    id: "anista",
    term: "aniṣṭa",
    transliteration: "aniṣṭa",
    definition:
      "Unwished, undesirable, disagreeable; unlucky; misfortune.",
  },
  {
    id: "anistha",
    term: "aniṣṭha",
    transliteration: "aniṣṭha",
    definition:
      "Subtle, unsteady.",
    relatedTerms: ["niṣṭhā"],
  },
  {
    id: "anitya",
    term: "anitya",
    transliteration: "anitya",
    definition:
      "Limited; time bound; impermanent.",
    relatedTerms: ["nitya"],
  },
  {
    id: "aniyata",
    term: "aniyata",
    transliteration: "aniyata",
    definition:
      "Causeless, indefinite; not fixed, uncertain; unrestricted.",
  },
  {
    id: "ankurah",
    term: "aṅkuraḥ",
    transliteration: "aṅkuraḥ",
    definition:
      "Sprout.",
  },
  {
    id: "ankusah",
    term: "aṅkuśaḥ",
    transliteration: "aṅkuśaḥ",
    definition:
      "Inhibiting factor, restraint, governor; hook.",
  },
  {
    id: "annadah",
    term: "annādaḥ",
    transliteration: "annādaḥ",
    definition:
      "The one who eats, eater.",
  },
  {
    id: "annam",
    term: "annam",
    transliteration: "annam",
    definition:
      "Food (bhakṣyam-masticated, Moṣyam-drunk, lehyam-licked, coṣyam-sucked).",
  },
  {
    id: "annamayakosah",
    term: "annamayakośaḥ",
    transliteration: "annamayakośaḥ",
    definition:
      "Food modification sheath; physical body.",
  },
  {
    id: "anrtam",
    term: "anṛtam",
    transliteration: "anṛtam",
    definition:
      "Falsehood; untruth; deception.",
  },
  {
    id: "antah",
    term: "antaḥ",
    transliteration: "antaḥ",
    definition:
      "End, limit, boundary, border, edge.",
    relatedTerms: ["antaḥkaraṇam"],
  },
  {
    id: "antahkaranam",
    term: "antaḥkaraṇam",
    transliteration: "antaḥkaraṇam",
    definition:
      "The mind; the instrument inside.",
    vedantaMeaning:
      "The inner instrument — the total mind with its four functions: manas (deliberation and doubt), buddhiḥ (determination and decision), ahaṅkāra (I-sense), and cittam (memory). The antaḥkaraṇam is inert (jaḍa) by nature but appears conscious due to the reflection of ātmā in it (cidābhāsa). It is the upādhi (limiting adjunct) that makes the limitless ātmā appear as a limited jīva.",
    relatedTerms: ["manas", "buddhiḥ", "ahaṅkāraḥ", "cittam"],
    tags: ["mind", "inner instrument", "psyche", "mental"],
  },
  {
    id: "antar",
    term: "antar",
    transliteration: "antar",
    definition:
      "ind. Used as a prefix to verbs and regarded as a preposition. Between; in the middle; inside; into.",
    relatedTerms: ["antara", "antaraṅga", "antargata", "antaryāmī", "antarāyaḥ"],
  },
  {
    id: "antara",
    term: "antara",
    transliteration: "antara",
    definition:
      "Being the inside; interior; closely connected; related.",
    relatedTerms: ["antar", "antaraṅga", "antarāyaḥ"],
  },
  {
    id: "antaranga",
    term: "antaraṅga",
    transliteration: "antaraṅga",
    definition:
      "Internal; inward.",
    relatedTerms: ["antar", "antara"],
  },
  {
    id: "antarayah",
    term: "antarāyaḥ",
    transliteration: "antarāyaḥ",
    definition:
      "also antarāyaḥ Obstacle, hindrance, interference.",
    relatedTerms: ["antar", "antara"],
  },
  {
    id: "antargata",
    term: "antargata",
    transliteration: "antargata",
    definition:
      "Included; gone into; belonging to.",
    relatedTerms: ["antar"],
  },
  {
    id: "antariksam",
    term: "antarikṣam",
    transliteration: "antarikṣam",
    definition:
      "Space; sky; between heaven and earth.",
  },
  {
    id: "antaryami",
    term: "antaryāmī",
    transliteration: "antaryāmī",
    definition:
      "That which regulates from inside; brahmātmā.",
    relatedTerms: ["antar"],
  },
  {
    id: "antevasi",
    term: "antevāsī",
    transliteration: "antevāsī",
    definition:
      "A Vedic pupil in residence with his guru.",
  },
  {
    id: "antika",
    term: "antika",
    transliteration: "antika",
    definition:
      "Near; close; lasting, as far as; reaching to the end of.",
    relatedTerms: ["ṭīkā"],
  },
  {
    id: "antima",
    term: "antima",
    transliteration: "antima",
    definition:
      "Immediately following; final.",
  },
  {
    id: "antya",
    term: "antya",
    transliteration: "antya",
    definition:
      "Lowest; perishable, transitory; last, final; immediately following (in compound).",
  },
  {
    id: "anu",
    term: "anu",
    transliteration: "anu",
    definition:
      "Either used with nouns to form adverbial compounds, or as a prefix to verbs. After, behind; being indicated by; with; by reason of.",
  },
  {
    id: "anubandhah",
    term: "anubandhah",
    transliteration: "anubandhah",
    definition:
      "Binding or fastening on; hindrance; attachment; unbroken sequence; result; connection to the śāstram; an adjunct.",
    relatedTerms: ["śāstram"],
  },
  {
    id: "anubhati",
    term: "anubhāti",
    transliteration: "anubhāti",
    definition:
      "Shines after; reflects only.",
  },
  {
    id: "anubhavah",
    term: "anubhavaḥ",
    transliteration: "anubhavaḥ",
    definition:
      "Experience; immediate recognition; pure caitanyaḥ; direct perception.",
  },
  {
    id: "anubhutih",
    term: "anubhūtiḥ",
    transliteration: "anubhūtiḥ",
    definition:
      "Perception; unqualified experience; immediate recognition; knowledge; consciousness.",
    relatedTerms: ["bhūtiḥ"],
  },
  {
    id: "anubodhah",
    term: "anubodhaḥ",
    transliteration: "anubodhaḥ",
    definition:
      "Recollection.",
  },
  {
    id: "anudatta",
    term: "anudātta",
    transliteration: "anudātta",
    definition:
      "The low or not raised tone in chanting; having neutral accent.",
  },
  {
    id: "anugamah",
    term: "anugamaḥ",
    transliteration: "anugamaḥ",
    definition:
      "Comprehending; grasping; following; imitating.",
  },
  {
    id: "anugata",
    term: "anugata",
    transliteration: "anugata",
    definition:
      "Following; corresponding with; present. anugataḥ Presence.",
  },
  {
    id: "anugrahah",
    term: "anugrahaḥ",
    transliteration: "anugrahaḥ",
    definition:
      "Acceptance; chance; kindness; help.",
  },
  {
    id: "anujna",
    term: "anujñā",
    transliteration: "anujñā",
    definition:
      "Consent; sanction; permission; command.",
    aliases: ["anudnya"],
  },
  {
    id: "anukula",
    term: "anukūla",
    transliteration: "anukūla",
    definition:
      "Favorable; agreeable; friendly; pleasing.",
  },
  {
    id: "anulomya",
    term: "anulomya",
    transliteration: "anulomya",
    definition:
      "In the direction of the hair, produced in natural or direct order, proper arrangement.",
  },
  {
    id: "anuma",
    term: "anumā",
    transliteration: "anumā",
    definition:
      "3A. 2P. To infer. anumīyate It is inferred.",
    relatedTerms: ["anumānam", "anumātra"],
  },
  {
    id: "anumanam",
    term: "anumānam",
    transliteration: "anumānam",
    definition:
      "Inference - a pramāṇam.",
    vedantaMeaning:
      "Knowledge gained by reasoning from what is perceived to what is not directly perceived, based on a known invariable relationship (vyāpti). For example, inferring fire from smoke. While useful in worldly and philosophical reasoning, anumānam cannot independently reveal ātmā, since the self is the very basis of all inference and cannot be its own object.",
    relatedTerms: ["pramāṇam"],
  },
  {
    id: "anumatra",
    term: "anumātra",
    transliteration: "anumātra",
    definition:
      "Determination; conclusion.",
    relatedTerms: ["anumā"],
  },
  {
    id: "anumeya",
    term: "anumeya",
    transliteration: "anumeya",
    definition:
      "Inferable, to be inferred.",
  },
  {
    id: "anumrtih",
    term: "anumṛtiḥ",
    transliteration: "anumṛtiḥ",
    definition:
      "Compliance; similarity.",
  },
  {
    id: "anupalabdhih",
    term: "anupalabdhiḥ",
    transliteration: "anupalabdhiḥ",
    definition:
      "Means of knowing that which is non-existent - a pramāṇam; non-recognition.",
    vedantaMeaning:
      "Non-apprehension — the pramāṇam that reveals the absence of something. One knows the pot is not on the table by looking and not seeing it. In Vedānta, this is relevant because mokṣa is understood as the absence of bondage (bandha-abhāva), not the gaining of something new. The recognition that there is no bondage is itself liberation.",
    relatedTerms: ["pramāṇam"],
  },
  {
    id: "anupapanna",
    term: "anupapanna",
    transliteration: "anupapanna",
    definition:
      "Inapplicable; improper; irrelevant.",
  },
  {
    id: "anupapattih",
    term: "anupapattiḥ",
    transliteration: "anupapattiḥ",
    definition:
      "Failing to be, inapplicability, untenability, inconclusive reasoning; impossible.",
  },
  {
    id: "anupravi",
    term: "anupravi",
    transliteration: "anupravi",
    definition:
      "To enter into; join; to accommodate, adapt oneself; to follow in entering.",
  },
  {
    id: "anuragah",
    term: "anurāgaḥ",
    transliteration: "anurāgaḥ",
    definition:
      "Devotion, attachment, affection, loyalty.",
  },
  {
    id: "anurupa",
    term: "anurūpa",
    transliteration: "anurūpa",
    definition:
      "Like; suitable; according to.",
  },
  {
    id: "anusandhanam",
    term: "anusandhānam",
    transliteration: "anusandhānam",
    definition:
      "Inquiry; examination; śravanam mananam nididhyāsanam; equipping with the necessary materials.",
    relatedTerms: ["nididhyāsanam", "śravaṇam", "mananam"],
  },
  {
    id: "anusaranam",
    term: "anusāraṇam",
    transliteration: "anusāraṇam",
    definition:
      "Following, going after, seeking; conformity to, accordance with, consequence of.",
  },
  {
    id: "anusasanam",
    term: "anuśāsanam",
    transliteration: "anuśāsanam",
    definition:
      "Command; direction; rule; advice; instruction.",
  },
  {
    id: "anusayah",
    term: "anuśayaḥ",
    transliteration: "anuśayaḥ",
    definition:
      "Regret; sorrow; anger.",
  },
  {
    id: "anusmrtih",
    term: "anusmṛtiḥ",
    transliteration: "anusmṛtiḥ",
    definition:
      "Recollection, remembering, thinking of.",
  },
  {
    id: "anusthanam",
    term: "anuṣṭhānam",
    transliteration: "anuṣṭhānam",
    definition:
      "Practice of religious austerities; performance; accomplishment; course of conduct.",
  },
  {
    id: "anustheya",
    term: "anuṣṭheya",
    transliteration: "anuṣṭheya",
    definition:
      "To be performed; followed.",
  },
  {
    id: "anustubh",
    term: "anuṣṭubh",
    transliteration: "anuṣṭubh",
    definition:
      "Metre with eight syllables per quarter - common in the Bhagavadgītā.",
  },
  {
    id: "anusyuta",
    term: "anusyūta",
    transliteration: "anusyūta",
    definition:
      "Imminent; linked to; woven together closely.",
  },
  {
    id: "anutpatti",
    term: "anutpatti",
    transliteration: "anutpatti",
    definition:
      "Non-production; without birth; failure.",
  },
  {
    id: "anuvadah",
    term: "anuvādaḥ",
    transliteration: "anuvādaḥ",
    definition:
      "Repetition of what is already mentioned; illustration; restatement.",
  },
  {
    id: "anuvakah",
    term: "anuvākaḥ",
    transliteration: "anuvākaḥ",
    definition:
      "A statement in the brāhmaṇas illustrating the mantras; a section or chapter of the Vedas.",
  },
  {
    id: "anuviddha",
    term: "anuviddha",
    transliteration: "anuviddha",
    definition:
      "Connected with, relating to; filled with; mixed with.",
  },
  {
    id: "anuvitta",
    term: "anuvitta",
    transliteration: "anuvitta",
    definition:
      "Found, obtained.",
  },
  {
    id: "anuvrtta",
    term: "anuvṛtta",
    transliteration: "anuvṛtta",
    definition:
      "Concurrent; conforming; uninterrupted.",
  },
  {
    id: "anuvrttih",
    term: "anuvṛttiḥ",
    transliteration: "anuvṛttiḥ",
    definition:
      "Continuation; following the example of; conformity; taking up; approval; in grammar -- being supplied or repeated in a following rule, continued influence of a preceding rule.",
  },
  {
    id: "anvayah",
    term: "anvayaḥ",
    transliteration: "anvayaḥ",
    definition:
      "Logical connection of cause and effect; invariable concomitance; connection; the natural order or connection of words in a sentence, construing grammatical order or relation.",
  },
  {
    id: "anvayavat",
    term: "anvayavat",
    transliteration: "anvayavat",
    definition:
      "Having connection or attributes.",
  },
  {
    id: "anvayavyatirekah",
    term: "anvayavyatirekaḥ",
    transliteration: "anvayavyatirekaḥ",
    definition:
      "Co-presence co-absence; logical differentiation; positive and negative assertion.",
  },
  {
    id: "anvesanam",
    term: "anveṣanam",
    transliteration: "anveṣanam",
    definition:
      "Seeking for; inquiry into; search.",
  },
  {
    id: "anvistah",
    term: "anviṣṭaḥ",
    transliteration: "anviṣṭaḥ",
    definition:
      "The desired, the sought.",
  },
  {
    id: "anvita",
    term: "anvita",
    transliteration: "anvita",
    definition:
      "Followed or attended by, joined with.",
  },
  {
    id: "anya",
    term: "anya",
    transliteration: "anya",
    definition:
      "Another, different, other; other than, different from.",
  },
  {
    id: "anyapeksa",
    term: "anyāpekṣa",
    transliteration: "anyāpekṣa",
    definition:
      "Dependent on some other factor.",
  },
  {
    id: "anyatah",
    term: "anyataḥ",
    transliteration: "anyataḥ",
    definition:
      "From another; to another place; from another motive.",
  },
  {
    id: "anyatama",
    term: "anyatama",
    transliteration: "anyatama",
    definition:
      "One of many, any one out of a large number.",
  },
  {
    id: "anyatara",
    term: "anyatara",
    transliteration: "anyatara",
    definition:
      "One of the two, either of the two; the other one.",
  },
  {
    id: "anyataragrahanam",
    term: "anyataragrahaṇam",
    transliteration: "anyataragrahaṇam",
    definition:
      "False or erroneous conception, misperception.",
  },
  {
    id: "anyatha",
    term: "anyathā",
    transliteration: "anyathā",
    definition:
      "ind. Otherwise, in another way or manner; falsely; wrongly.",
    relatedTerms: ["atha"],
  },
  {
    id: "anyatra",
    term: "anyatra",
    transliteration: "anyatra",
    definition:
      "Elsewhere, in another place; except; otherwise; in the other sense.",
  },
  {
    id: "anyonya",
    term: "anyonya",
    transliteration: "anyonya",
    definition:
      "One another, each other, mutual.",
  },
  {
    id: "anyonyadhyasah",
    term: "anyonyādhyāsaḥ",
    transliteration: "anyonyādhyāsaḥ",
    definition:
      "Mutual superimposition.",
  },
  {
    id: "anyonyasrayah",
    term: "anyonyāśrayaḥ",
    transliteration: "anyonyāśrayaḥ",
    definition:
      "Mutual dependence.",
  },
  {
    id: "ap",
    term: "ap",
    transliteration: "ap",
    definition:
      "plural āpaḥ Water.",
  },
  {
    id: "apa",
    term: "apa",
    transliteration: "apa",
    definition:
      "As a prefix to verbs Opposition; contradiction; negation; deterioration; going downwards.",
  },
  {
    id: "apacayah",
    term: "apacayaḥ",
    transliteration: "apacayaḥ",
    definition:
      "Decrease, decline, loss.",
  },
  {
    id: "apadanam",
    term: "apādānam",
    transliteration: "apādānam",
    definition:
      "Taking away, removal; ablation a thing from which another is removed.",
  },
  {
    id: "apahnavam",
    term: "apahṇavam",
    transliteration: "apahṇavam",
    definition:
      "Concealment, hiding; denial, disowning the truth.",
  },
  {
    id: "apakaryah",
    term: "apakaryaḥ",
    transliteration: "apakaryaḥ",
    definition:
      "Anticipation of a word occurring later; drawing off, decline.",
  },
  {
    id: "apakr",
    term: "apākṛ",
    transliteration: "apākṛ",
    definition:
      "1P. To deny, disown, negate.",
  },
  {
    id: "apaksayah",
    term: "apakṣayaḥ",
    transliteration: "apakṣayaḥ",
    definition:
      "Decline, decay.",
  },
  {
    id: "apaksi",
    term: "apakṣī",
    transliteration: "apakṣī",
    definition:
      "1. 5. 9P. To bring to an end, destroy. passive apakṣīyate It declines, decays.",
  },
  {
    id: "apanah",
    term: "apānaḥ",
    transliteration: "apānaḥ",
    definition:
      "Evacuation - a prāṇaḥ seated in the kidneys.",
    relatedTerms: ["prāṇaḥ"],
  },
  {
    id: "apanaynam",
    term: "apanaynam",
    transliteration: "apanaynam",
    definition:
      "Taking away; refuting; deduction; injustice.",
  },
  {
    id: "apanna",
    term: "apanna",
    transliteration: "apanna",
    definition:
      "Gained, acquired; gone; reduced to; distressed.",
  },
  {
    id: "apara",
    term: "apara",
    transliteration: "apara",
    definition:
      "Without rival or second; other, another. aparaḥ Learning the four Vedas and six Aṅgas.",
    relatedTerms: ["aparāddha"],
  },
  {
    id: "aparaddha",
    term: "aparāddha",
    transliteration: "aparāddha",
    definition:
      "Violated; transgressed; missed.",
    relatedTerms: ["apara"],
  },
  {
    id: "aparavidya",
    term: "aparavidyā",
    transliteration: "aparavidyā",
    definition:
      "Any knowledge other than self-knowledge.",
  },
  {
    id: "aparicchinna",
    term: "aparicchinna",
    transliteration: "aparicchinna",
    definition:
      "Continuous; connected; without separation.",
  },
  {
    id: "aparigraha",
    term: "aparigraha",
    transliteration: "aparigraha",
    definition:
      "Without possessions; renunciation.",
    tags: ["non-possessiveness", "renunciation", "simplicity", "non-attachment", "non-greed"],
  },
  {
    id: "aparijnanam",
    term: "aparijñānam",
    transliteration: "aparijñānam",
    definition:
      "Lack of clarity, ignorance.",
    aliases: ["aparidnyanam"],
  },
  {
    id: "aparikhedah",
    term: "aparikhedaḥ",
    transliteration: "aparikhedaḥ",
    definition:
      "Enthusiasm.",
  },
  {
    id: "aparoksa",
    term: "aparokṣa",
    transliteration: "aparokṣa",
    definition:
      "That which is self-evident (i.e. the self); not distant; immediate.",
  },
  {
    id: "apasabdah",
    term: "apaśabdaḥ",
    transliteration: "apaśabdaḥ",
    definition:
      "An ungrammatical or corrupted (in form or meaning) word.",
  },
  {
    id: "apasmarah",
    term: "apasmāraḥ",
    transliteration: "apasmāraḥ",
    definition:
      "Forgetfulness.",
  },
  {
    id: "apata",
    term: "āpāta",
    transliteration: "āpāta",
    definition:
      "First sight or appearance; the present, the current moment; rushing upon.",
    relatedTerms: ["āpātataḥ"],
  },
  {
    id: "apatatah",
    term: "āpātataḥ",
    transliteration: "āpātataḥ",
    definition:
      "General, common ind. Immediately; instantly, at first sight.",
    relatedTerms: ["āpāta"],
  },
  {
    id: "apauruseya",
    term: "apauruṣeya",
    transliteration: "apauruṣeya",
    definition:
      "Of divine origin; not set up by man.",
  },
  {
    id: "apavadah",
    term: "apavādaḥ",
    transliteration: "apavādaḥ",
    definition:
      "Negation; refutation; exception.",
  },
  {
    id: "apavargah",
    term: "apavargaḥ",
    transliteration: "apavargaḥ",
    definition:
      "Accomplishment; fulfillment; exception; special rule; mokṣaḥ.",
    relatedTerms: ["mokṣaḥ"],
  },
  {
    id: "apeks",
    term: "apekṣ",
    transliteration: "apekṣ",
    definition:
      "1A. To require, want, stand in need of; to look for something, hope for, expect.",
    relatedTerms: ["apekṣika", "apekṣita", "apekṣya", "apekṣā"],
  },
  {
    id: "apeksa",
    term: "apekṣā",
    transliteration: "apekṣā",
    definition:
      "Requirement; necessity; dependence.",
    relatedTerms: ["apekṣ"],
  },
  {
    id: "apeksika",
    term: "apekṣika",
    transliteration: "apekṣika",
    definition:
      "Relative, expected, associated.",
    relatedTerms: ["apekṣ"],
  },
  {
    id: "apeksita",
    term: "apekṣita",
    transliteration: "apekṣita",
    definition:
      "Referred to; expected; in a relative sense.",
    relatedTerms: ["apekṣ"],
  },
  {
    id: "apeksya",
    term: "apekṣya",
    transliteration: "apekṣya",
    definition:
      "To be required; desired, wanted, hoped for.",
    relatedTerms: ["apekṣ"],
  },
  {
    id: "apitah",
    term: "āpitaḥ",
    transliteration: "āpitaḥ",
    definition:
      "Entering into; dissolution.",
  },
  {
    id: "apohah",
    term: "apohaḥ",
    transliteration: "apohaḥ",
    definition:
      "Reasoning; removal of doubt; arguing.",
  },
  {
    id: "apohya",
    term: "apohya",
    transliteration: "apohya",
    definition:
      "To be established by reason; to be removed.",
  },
  {
    id: "aprabodha",
    term: "aprabodha",
    transliteration: "aprabodha",
    definition:
      "Ignorance.",
  },
  {
    id: "apracalita",
    term: "apracalita",
    transliteration: "apracalita",
    definition:
      "Never moving.",
  },
  {
    id: "aprapta",
    term: "aprāpta",
    transliteration: "aprāpta",
    definition:
      "Not gained; not arrived at.",
  },
  {
    id: "apraptasya-praptih",
    term: "aprāptasya prāptiḥ",
    transliteration: "aprāptasya prāptiḥ",
    definition:
      "The gain of that which is not gained.",
  },
  {
    id: "aprasiddha",
    term: "aprasiddha",
    transliteration: "aprasiddha",
    definition:
      "Unknown, insignificant, unsubstantiated.",
  },
  {
    id: "apratibodha",
    term: "apratibodha",
    transliteration: "apratibodha",
    definition:
      "Non-recognition.",
  },
  {
    id: "aptah",
    term: "āptaḥ",
    transliteration: "āptaḥ",
    definition:
      "One who knows, one who has gained; wise man or woman.",
  },
  {
    id: "aptajnanam",
    term: "āptajñānam",
    transliteration: "āptajñānam",
    definition:
      "Common knowledge, generally known.",
    aliases: ["aptadnyanam"],
  },
  {
    id: "aptakamasanyasah",
    term: "āptakāmasaṇyāsaḥ",
    transliteration: "āptakāmasaṇyāsaḥ",
    definition:
      "Sannyāsaḥ taken by one near death for the sake of gaining knowledge; āpatsannyāsaḥ.",
    relatedTerms: ["sannyāsaḥ"],
  },
  {
    id: "apurva",
    term: "apūrva",
    transliteration: "apūrva",
    definition:
      "Not having existed before; extraordinary. apūrvam The adṛṣṭa results of an act.",
    relatedTerms: ["adṛṣṭa"],
  },
  {
    id: "apurvata",
    term: "apurvatā",
    transliteration: "apurvatā",
    definition:
      "Of an incomparable nature, unparalleled; not known by any other pramāṇa.",
    relatedTerms: ["apūrva"],
  },
  {
    id: "apyam",
    term: "apyam",
    transliteration: "apyam",
    definition:
      "That which can be gained or reached - one of four possible results of karma.",
    relatedTerms: ["karma"],
  },
  {
    id: "apyayah",
    term: "apyayaḥ",
    transliteration: "apyayaḥ",
    definition:
      "Resolution, destruction; meeting, joining; entrance into, disappearance.",
  },
  {
    id: "arabdha",
    term: "ārabdha",
    transliteration: "ārabdha",
    definition:
      "Begun, started.",
    relatedTerms: ["prārabdham"],
  },
  {
    id: "arabhya",
    term: "ārabhya",
    transliteration: "ārabhya",
    definition:
      "ind. Beginning with; since.",
  },
  {
    id: "aramah",
    term: "ārāmaḥ",
    transliteration: "ārāmaḥ",
    definition:
      "Delight, pleasure.",
  },
  {
    id: "arambhah",
    term: "ārambhaḥ",
    transliteration: "ārambhaḥ",
    definition:
      "Beginning, commencement; origin.",
  },
  {
    id: "arambhanam",
    term: "ārambhaṇam",
    transliteration: "ārambhaṇam",
    definition:
      "Seizing, taking hold of; the place of seizing.",
  },
  {
    id: "aranyam",
    term: "araṇyam",
    transliteration: "araṇyam",
    definition:
      "Forest; wilderness.",
  },
  {
    id: "aratrikam",
    term: "ārātrikam",
    transliteration: "ārātrikam",
    definition:
      "Waving a light or the vessel containing it before an idol. ārāti.",
  },
  {
    id: "arcanam",
    term: "arcanam",
    transliteration: "arcanam",
    definition:
      "Offering; ritual; worship.",
  },
  {
    id: "arcimat",
    term: "arcimāt",
    transliteration: "arcimāt",
    definition:
      "Self-effulgent; awareness; flame-like.",
  },
  {
    id: "ardha",
    term: "ardha",
    transliteration: "ardha",
    definition:
      "Half, forming a half.",
  },
  {
    id: "arha",
    term: "arha",
    transliteration: "arha",
    definition:
      "Worthy of respect; deserving; entitled to; proper; fit.",
  },
  {
    id: "arjavam",
    term: "ārjavam",
    transliteration: "ārjavam",
    definition:
      "Straightforwardness; uprightness; honesty; humility.",
  },
  {
    id: "arjuna",
    term: "arjuna",
    transliteration: "arjuna",
    definition:
      "White; bright. arjunaḥ Hero of the Pāṇḍava family, student of Kṛṣṇa in the Bhagavad Gītā.",
    relatedTerms: ["kṛṣṇa", "gītā"],
  },
  {
    id: "arkah",
    term: "arkaḥ",
    transliteration: "arkaḥ",
    definition:
      "The sun; lightning.",
  },
  {
    id: "arogyata",
    term: "ārogyatā",
    transliteration: "ārogyatā",
    definition:
      "Health, freedom from disease.",
  },
  {
    id: "aropah",
    term: "āropaḥ",
    transliteration: "āropaḥ",
    definition:
      "Attributing the nature or qualities of one thing to another.",
  },
  {
    id: "aropita",
    term: "āropita",
    transliteration: "āropita",
    definition:
      "The superimposed object -- e.g. the snake of rope-snake; anātmā; fixed.",
    relatedTerms: ["anātmā"],
  },
  {
    id: "arpanam",
    term: "arpaṇam",
    transliteration: "arpaṇam",
    definition:
      "Offering.",
  },
  {
    id: "arsa",
    term: "ārṣa",
    transliteration: "ārṣa",
    definition:
      "Relating or belonging to the ṛṣis; Vedic.",
  },
  {
    id: "arta",
    term: "ārta",
    transliteration: "ārta",
    definition:
      "Afflicted with, struck by; sick; distressed.",
    relatedTerms: ["svarita", "kartā"],
  },
  {
    id: "arthabodhakatvam",
    term: "arthabodhakatvam",
    transliteration: "arthabodhakatvam",
    definition:
      "Ability to convey true sense or meaning.",
  },
  {
    id: "arthadhyasah",
    term: "arthādhyāsaḥ",
    transliteration: "arthādhyāsaḥ",
    definition:
      "See nirūpādhikādhyāsaḥ.",
  },
  {
    id: "arthah",
    term: "arthaḥ",
    transliteration: "arthaḥ",
    definition:
      "Object; purpose; aim; sense; meaning; security; wealth.",
  },
  {
    id: "arthapattih",
    term: "arthāpattiḥ",
    transliteration: "arthāpattiḥ",
    definition:
      "Presumption; assumption of a thing not itself perceived but implied by what is perceived - a pramāṇam.",
    vedantaMeaning:
      "Postulation — the means of knowledge by which one arrives at an otherwise unexplained fact. For example, if Devadatta is alive but not at home, one postulates he is elsewhere. In Vedānta, arthāpatti can support understanding — for instance, if Brahman is the cause of everything and is consciousness, one postulates that the material world is not separate from consciousness.",
    relatedTerms: ["pramāṇam"],
  },
  {
    id: "arthat",
    term: "arthat",
    transliteration: "arthat",
    definition:
      "(ablative of arthaḥ) ind. As a matter of course, of course, in fact.",
    relatedTerms: ["arthaḥ"],
  },
  {
    id: "arthavadah",
    term: "arthavādaḥ",
    transliteration: "arthavādaḥ",
    definition:
      "Praise; affirmation; explanation; declaration of purpose that recommends a vidhi or praise.",
  },
  {
    id: "arthavat",
    term: "arthavat",
    transliteration: "arthavat",
    definition:
      "Significant; meaningful; successful; wealthy.",
  },
  {
    id: "arthi",
    term: "arthī",
    transliteration: "arthī",
    definition:
      "One who is interested in something.",
    relatedTerms: ["arthika"],
  },
  {
    id: "arthika",
    term: "arthika",
    transliteration: "arthika",
    definition:
      "Significant; substantial; real.",
    relatedTerms: ["arthī"],
  },
  {
    id: "arucih",
    term: "aruciḥ",
    transliteration: "aruciḥ",
    definition:
      "Distaste; knowing the impropriety of an expression; aversion; absence of a satisfactory explanation.",
  },
  {
    id: "arudha",
    term: "ārūḍha",
    transliteration: "ārūḍha",
    definition:
      "Loaded; seated on; produced; mounted.",
  },
  {
    id: "arunah",
    term: "aruṇaḥ",
    transliteration: "aruṇaḥ",
    definition:
      "Dawn.",
  },
  {
    id: "arvac",
    term: "arvāc",
    transliteration: "arvāc",
    definition:
      "Being below or behind; turned towards.",
  },
  {
    id: "as",
    term: "ās",
    transliteration: "ās",
    definition:
      "To sit; abide, remain; rest; dwell.",
  },
  {
    id: "asadharana",
    term: "asādhāraṇa",
    transliteration: "asādhāraṇa",
    definition:
      "Particular; specific.",
  },
  {
    id: "asakrt",
    term: "asakṛt",
    transliteration: "asakṛt",
    definition:
      "Not once; repeatedly, often.",
  },
  {
    id: "asakta",
    term: "asakta",
    transliteration: "asakta",
    definition:
      "Free of attachment; not entangled.",
    relatedTerms: ["sakta"],
  },
  {
    id: "asaktih",
    term: "āsaktiḥ",
    transliteration: "āsaktiḥ",
    definition:
      "Dependence; attachment.",
    relatedTerms: ["śaktiḥ"],
  },
  {
    id: "asamanjasa",
    term: "asamañjasa",
    transliteration: "asamañjasa",
    definition:
      "Indistinct; inarticulate; improper; absurd, foolish.",
  },
  {
    id: "asambhava",
    term: "asambhava",
    transliteration: "asambhava",
    definition:
      "Inconsistent; improbable. asambhavaḥ Non-existence; impossibility.",
    relatedTerms: ["asambhāvanā"],
  },
  {
    id: "asambhavana",
    term: "asambhāvanā",
    transliteration: "asambhāvanā",
    definition:
      "Improbability; difficulty or impossibility of comprehending.",
    relatedTerms: ["asambhava"],
  },
  {
    id: "asanam",
    term: "āsanam",
    transliteration: "āsanam",
    definition:
      "Posture; mode of sitting; seat.",
  },
  {
    id: "asandigdha",
    term: "asandigdha",
    transliteration: "asandigdha",
    definition:
      "Not leaving any doubt, certain; distinct.",
  },
  {
    id: "asangah",
    term: "asaṅgaḥ",
    transliteration: "asaṅgaḥ",
    definition:
      "Unattached.",
  },
  {
    id: "asanka",
    term: "āśaṅkā",
    transliteration: "āśaṅkā",
    definition:
      "Doubt, uncertainty; fear, apprehension.",
  },
  {
    id: "asankranta",
    term: "asaṅkrānta",
    transliteration: "asaṅkrānta",
    definition:
      "Not transmitted; unassociated.",
  },
  {
    id: "asat",
    term: "asat",
    transliteration: "asat",
    definition:
      "Neither self-existent nor non-existent.",
  },
  {
    id: "asatkaryavada",
    term: "asatkāryavāda",
    transliteration: "asatkāryavāda",
    definition:
      "The Vaisheshika philosophy.",
  },
  {
    id: "asau",
    term: "asau",
    transliteration: "asau",
    definition:
      "Masculine singular pronoun; the, this, that.",
  },
  {
    id: "asavata",
    term: "āśāvata",
    transliteration: "āśāvata",
    definition:
      "Perishable, transient.",
  },
  {
    id: "ascaryam",
    term: "āścaryam",
    transliteration: "āścaryam",
    definition:
      "Wonder, surprise.",
  },
  {
    id: "asiddhih",
    term: "asiddhiḥ",
    transliteration: "asiddhiḥ",
    definition:
      "Failure; a conclusion not warranted by the data.",
  },
  {
    id: "asis",
    term: "āśiṣ",
    transliteration: "āśiṣ",
    definition:
      "Voracious.",
  },
  {
    id: "asista",
    term: "asiṣṭa",
    transliteration: "asiṣṭa",
    definition:
      "Ill-bred; unrefined.",
  },
  {
    id: "asita",
    term: "āsita",
    transliteration: "āsita",
    definition:
      "Resting in; located on; placed; inhabiting; using; practicing.",
    relatedTerms: ["śīta", "upasitā"],
  },
  {
    id: "asmad",
    term: "asmad",
    transliteration: "asmad",
    definition:
      "A pronoun base that derives to many of the 1st person forms; ablative form of alam.",
    relatedTerms: ["alam"],
  },
  {
    id: "asmita",
    term: "asmitā",
    transliteration: "asmitā",
    definition:
      "Egotism.",
  },
  {
    id: "aspadam",
    term: "āspadam",
    transliteration: "āspadam",
    definition:
      "Basis, position, place, seat, receptacle.",
  },
  {
    id: "aspasta",
    term: "aspaṣṭa",
    transliteration: "aspaṣṭa",
    definition:
      "Vague, indistinct.",
  },
  {
    id: "asphuta",
    term: "asphuṭa",
    transliteration: "asphuṭa",
    definition:
      "Indistinct, obscure.",
  },
  {
    id: "asprsta",
    term: "aspṛṣṭa",
    transliteration: "aspṛṣṭa",
    definition:
      "Not touching, not in contact.",
  },
  {
    id: "asramah",
    term: "āśramah",
    transliteration: "āśramah",
    definition:
      "Each of the four periods of Vedic religious life – brahmacārya-student, gṛhasthya-married householder, vānaprastha- forest recluse, saṃnyāsa-renunciate; dwelling place of religious devotees.",
  },
  {
    id: "asramavyavastha",
    term: "āśramavyavasthā",
    transliteration: "āśramavyavasthā",
    definition:
      "Individual life station defined by duties.",
  },
  {
    id: "asrayah",
    term: "āśrayah",
    transliteration: "āśrayah",
    definition:
      "That on which anything depends or rests; locus; what has an attribute; attaching oneself to.",
  },
  {
    id: "astadhyayi",
    term: "aṣṭādhyāyī",
    transliteration: "aṣṭādhyāyī",
    definition:
      "Name of Pāṇini's grammar.",
  },
  {
    id: "astanga",
    term: "aṣṭāṅga",
    transliteration: "aṣṭāṅga",
    definition:
      "Consisting of eight parts or letters; aṣṭāṅgam The eight parts of the body used in prostration.",
  },
  {
    id: "asthane",
    term: "asthāne",
    transliteration: "asthāne",
    definition:
      "ind. Out of place; inopportunely.",
  },
  {
    id: "astikah",
    term: "āstikah",
    transliteration: "āstikah",
    definition:
      "One who believes in the Veda as a pramāṇa.",
  },
  {
    id: "asurah",
    term: "asurah",
    transliteration: "asurah",
    definition:
      "Evil spirit, demon.",
  },
  {
    id: "asuya",
    term: "asūyā",
    transliteration: "asūyā",
    definition:
      "Intolerance (someone has virtue and you look for a defect in him to discount the virtue).",
  },
  {
    id: "asvadanam",
    term: "āsvādanam",
    transliteration: "āsvādanam",
    definition:
      "Tasting, eating.",
  },
  {
    id: "asvinau",
    term: "aśvinau",
    transliteration: "aśvinau",
    definition:
      "The two physicians of the gods - sons of the Sun and a mare; two horses.",
  },
  {
    id: "atas",
    term: "atas",
    transliteration: "atas",
    definition:
      "ind. Therefore; from this or that cause; hence.",
  },
  {
    id: "atha",
    term: "atha",
    transliteration: "atha",
    definition:
      "Now, here (indicating beginning), then afterwards.",
  },
  {
    id: "atharvan",
    term: "atharvan",
    transliteration: "atharvan",
    definition:
      "Name of priest who first brought fire from heaven; the fourth Veda - Atharvavedā.",
  },
  {
    id: "ati",
    term: "ati",
    transliteration: "ati",
    definition:
      "ind. Prefix used with adjectives and adverbs indicating excess, very, too; with verbs indicating over, beyond; with nouns indicating beyond, surpassing, superior to.",
  },
  {
    id: "atidesah",
    term: "atideśah",
    transliteration: "atideśah",
    definition:
      "Extended application; transference of one attribute to another; transfer.",
  },
  {
    id: "atindriya",
    term: "atīndriya",
    transliteration: "atīndriya",
    definition:
      "Beyond the reach of the senses.",
  },
  {
    id: "atirikta",
    term: "atirikta",
    transliteration: "atirikta",
    definition:
      "Surpassed, excelled; redundant, superfluous.",
  },
  {
    id: "atisaya",
    term: "atiśaya",
    transliteration: "atiśaya",
    definition:
      "Excellent, superior, pre-eminent; exceedingly.",
  },
  {
    id: "atisnehah",
    term: "atisnehah",
    transliteration: "atisnehah",
    definition:
      "Extreme attachment; over-affection.",
  },
  {
    id: "atita",
    term: "atīta",
    transliteration: "atīta",
    definition:
      "Transcendent; beyond definition; beyond.",
  },
  {
    id: "atithih",
    term: "atithiḥ",
    transliteration: "atithiḥ",
    definition:
      "Guest, visitor, traveller.",
  },
  {
    id: "atithya",
    term: "ātithya",
    transliteration: "ātithya",
    definition:
      "Hospitable; suitable for a guest.",
  },
  {
    id: "atma",
    term: "ātmā",
    devanagari: "आत्मा",
    transliteration: "ātmā",
    definition:
      "The self; that which is unfolded by this teaching.",
    root: "√at — that which pervades, or √an — to breathe",
    vedantaMeaning:
      "Pure awareness, identical with Brahman. Not the body, mind, or ego. Ātmā is self-evident, self-luminous, and the only reality that is never negated.",
    relatedTerms: ["brahman", "anātmā", "sākṣī", "jīvah", "caitanyam", "ānandaḥ"],
    tags: ["self", "awareness", "consciousness", "soul", "spirit", "being", "reality", "identity"],
  },
  {
    id: "atmaka",
    term: "ātmaka",
    transliteration: "ātmaka",
    definition:
      "Made of, formed of, of the nature of.",
  },
  {
    id: "atmanatmavivekah",
    term: "ātmānātmavivekaḥ",
    transliteration: "ātmānātmavivekaḥ",
    definition:
      "Analysis by which ātmā is arrived at: śarīratrayavicāraḥ, pañcakośavivēkaḥ, avasthātrayavicāraḥ; inquiry into ātmā and anātmā.",
    relatedTerms: ["anātmā"],
  },
  {
    id: "atmastha",
    term: "ātmastha",
    transliteration: "ātmastha",
    definition:
      "At one's own disposal.",
  },
  {
    id: "atmya",
    term: "ātmya",
    transliteration: "ātmya",
    definition:
      "Belonging to oneself; At the end of comp. Having the nature of.",
  },
  {
    id: "atyanta",
    term: "atyanta",
    transliteration: "atyanta",
    definition:
      "Permanent; excessive; absolute; complete.",
    relatedTerms: ["atyantāsat"],
  },
  {
    id: "atyantasat",
    term: "atyantāsat",
    transliteration: "atyantāsat",
    definition:
      "Totally non-existent.",
    relatedTerms: ["atyanta"],
  },
  {
    id: "atyantika",
    term: "atyantikā",
    transliteration: "atyantikā",
    definition:
      "Very near, close; distant; excessive.",
  },
  {
    id: "atyantiki",
    term: "atyantikī",
    transliteration: "atyantikī",
    definition:
      "Final, everlasting, permanent; uninterrupted.",
  },
  {
    id: "audasinyam",
    term: "audāsīnyam",
    transliteration: "audāsīnyam",
    definition:
      "Indifference, apathy.",
  },
  {
    id: "aupacarika",
    term: "aupacārikā",
    transliteration: "aupacārikā",
    definition:
      "Figurative; secondary; a use of the genitive case.",
  },
  {
    id: "aupadhika",
    term: "aupādhika",
    transliteration: "aupādhika",
    definition:
      "Conditional; pertaining to attributes or properties; an effect produced.",
  },
  {
    id: "aupanisada",
    term: "aupaniṣada",
    transliteration: "aupaniṣada",
    definition:
      "Contained, based in, derived from, or taught in an Upanishad.",
    relatedTerms: ["upaniṣad"],
  },
  {
    id: "ausnyam",
    term: "auṣṇyam",
    transliteration: "auṣṇyam",
    definition:
      "Heat.",
  },
  {
    id: "av",
    term: "av",
    transliteration: "av",
    definition:
      "1P. Protect. avati It protects.",
  },
  {
    id: "avabha",
    term: "avabhā",
    transliteration: "avabhā",
    definition:
      "1A. To appear, manifest, seem; to shine.",
    relatedTerms: ["avabhāsah"],
  },
  {
    id: "avabhasah",
    term: "avabhāsah",
    transliteration: "avabhāsah",
    definition:
      "Appearance, manifestation; knowledge, perception; light.",
    relatedTerms: ["avabhā"],
  },
  {
    id: "avabodhaka",
    term: "avabodhaka",
    transliteration: "avabodhaka",
    definition:
      "Indicating, showing, throwing light on, enlightening.",
  },
  {
    id: "avabodhanam",
    term: "avabodhanam",
    transliteration: "avabodhanam",
    definition:
      "Knowledge; perception.",
  },
  {
    id: "avacchedah",
    term: "avacchedaḥ",
    transliteration: "avacchedaḥ",
    definition:
      "Distinction, limit, separation.",
  },
  {
    id: "avacchedakam",
    term: "avacchedakam",
    transliteration: "avacchedakam",
    definition:
      "That which distinguishes or limits; boundary; characteristic property.",
  },
  {
    id: "avacchinna",
    term: "avacchinna",
    transliteration: "avacchinna",
    definition:
      "Separated; divided; cut off; excluded; distinguished; characterized.",
  },
  {
    id: "avadharah",
    term: "avadhāraḥ",
    transliteration: "avadhāraḥ",
    definition:
      "Accurate determination; limitation.",
  },
  {
    id: "avadharanam",
    term: "avadhāraṇam",
    transliteration: "avadhāraṇam",
    definition:
      "Covering; obscuring; ascertainment, determination; emphasis.",
  },
  {
    id: "avadharita",
    term: "avadhāritā",
    transliteration: "avadhāritā",
    definition:
      "Ascertained, known.",
  },
  {
    id: "avadhih",
    term: "avadhiḥ",
    transliteration: "avadhiḥ",
    definition:
      "Application; boundary, limit; conclusion; standard, authority.",
  },
  {
    id: "avagam",
    term: "avagam",
    transliteration: "avagam",
    definition:
      "1P. To know; to go down; to come to. avagamyate It is understood.",
    relatedTerms: ["avagamaḥ"],
  },
  {
    id: "avagamah",
    term: "avagamaḥ",
    transliteration: "avagamaḥ",
    definition:
      "Understanding, comprehension, knowledge.",
    relatedTerms: ["avagam"],
  },
  {
    id: "avagata",
    term: "avagata",
    transliteration: "avagata",
    definition:
      "Known, understood, learned. avagataḥ Knowledge.",
  },
  {
    id: "avagatih",
    term: "avagatiḥ",
    transliteration: "avagatiḥ",
    definition:
      "Knowledge; perception; comprehension; vision.",
  },
  {
    id: "avakasah",
    term: "avakāśaḥ",
    transliteration: "avakāśaḥ",
    definition:
      "Space; occasion, opportunity.",
  },
  {
    id: "avantara",
    term: "avāntara",
    transliteration: "avāntara",
    definition:
      "Not closely connected; standing between; included.",
  },
  {
    id: "avaptih",
    term: "avāptiḥ",
    transliteration: "avāptiḥ",
    definition:
      "Obtaining, getting.",
  },
  {
    id: "avara",
    term: "avara",
    transliteration: "avara",
    definition:
      "Lower, inferior.",
    relatedTerms: ["āvaraḥ", "āvaraṇam"],
  },
  {
    id: "avarah",
    term: "āvaraḥ",
    transliteration: "āvaraḥ",
    definition:
      "That which is hidden or covered (by ignorance).",
    relatedTerms: ["avara"],
  },
  {
    id: "avaranam",
    term: "āvaraṇam",
    transliteration: "āvaraṇam",
    definition:
      "A covering; ignorance removed by inquiry; an obscuring.",
    relatedTerms: ["avara"],
  },
  {
    id: "avarna",
    term: "avarṇa",
    transliteration: "avarṇa",
    definition:
      "Without features; colorless.",
  },
  {
    id: "avasadanam",
    term: "avasādanam",
    transliteration: "avasādanam",
    definition:
      "Loss; destruction; removal.",
  },
  {
    id: "avasah",
    term: "avaśaḥ",
    transliteration: "avaśaḥ",
    definition:
      "Without power; necessary; unswaying; self-willed.",
  },
  {
    id: "avasanam",
    term: "avasānam",
    transliteration: "avasānam",
    definition:
      "The end of a verse; conclusion; furthest or highest limit.",
  },
  {
    id: "avasista",
    term: "avasiṣṭa",
    transliteration: "avasiṣṭa",
    definition:
      "Left, remaining.",
  },
  {
    id: "avasita",
    term: "avasita",
    transliteration: "avasita",
    definition:
      "Finished, ended, completed; resolved; gathered.",
  },
  {
    id: "avastha",
    term: "avasthā",
    transliteration: "avasthā",
    definition:
      "State, condition, situation.",
    relatedTerms: ["avasthānam"],
  },
  {
    id: "avasthanam",
    term: "avasthānam",
    transliteration: "avasthānam",
    definition:
      "Basis; position; support; situation; abiding.",
    relatedTerms: ["avasthā"],
  },
  {
    id: "avasthatrayam",
    term: "avasthātrayam",
    transliteration: "avasthātrayam",
    definition:
      "Three states of experience (deep sleep, dream, waking).",
  },
  {
    id: "avasthita",
    term: "avasthita",
    transliteration: "avasthita",
    definition:
      "Abiding, remained; stayed; firm of purpose; steady.",
    relatedTerms: ["hita"],
  },
  {
    id: "avasthitih",
    term: "avasthitiḥ",
    transliteration: "avasthitiḥ",
    definition:
      "Abiding; abode.",
  },
  {
    id: "avastukam",
    term: "avastukam",
    transliteration: "avastukam",
    definition:
      "Unreality, insubstantiability; mithyā.",
    relatedTerms: ["mithyā"],
  },
  {
    id: "avatarah",
    term: "avatāraḥ",
    transliteration: "avatāraḥ",
    definition:
      "The Lord appearing in a certain form for a certain reason; descent.",
  },
  {
    id: "avayah",
    term: "avayaḥ",
    transliteration: "avayaḥ",
    definition:
      "Limb.",
  },
  {
    id: "avayavah",
    term: "avayavaḥ",
    transliteration: "avayavaḥ",
    definition:
      "Limb, member, part.",
  },
  {
    id: "avesah",
    term: "āveśaḥ",
    transliteration: "āveśaḥ",
    definition:
      "Taking possession of, entering into.",
  },
  {
    id: "avibhakta",
    term: "avibhakta",
    transliteration: "avibhakta",
    definition:
      "Entire; undivided; joint; unbroken.",
  },
  {
    id: "avicchinna",
    term: "avicchinna",
    transliteration: "avicchinna",
    definition:
      "Continuous, uninterrupted, undivided.",
  },
  {
    id: "avidya",
    term: "avidyā",
    transliteration: "avidyā",
    definition:
      "Ignorance.",
    vedantaMeaning:
      "Self-ignorance — not merely absence of knowledge, but a positive force of mis-apprehension that causes the self to be taken as limited. Avidyā has two powers: āvaraṇa (concealment of one's true nature) and vikṣepa (projection of what is not there). It is beginningless (anādi) but has an end — it is destroyed by self-knowledge (ātma-jñāna) alone.",
    relatedTerms: ["adhyāsa", "mithyā", "māyā", "vidyā", "jñānam", "mokṣa"],
    tags: ["ignorance", "delusion", "error", "not-knowing", "confusion", "bondage", "misunderstanding"],
  },
  {
    id: "avidyopadhih",
    term: "avidyopādhiḥ",
    transliteration: "avidyopādhiḥ",
    definition:
      "The ignorance upādhiḥ of the jīvaḥ.",
    relatedTerms: ["upādhih", "jīvah"],
  },
  {
    id: "avikarya",
    term: "avikārya",
    transliteration: "avikārya",
    definition:
      "Immutable; invariable.",
  },
  {
    id: "avikriya",
    term: "avikriya",
    transliteration: "avikriya",
    definition:
      "Not undergoing modification, immutable.",
  },
  {
    id: "avinasah",
    term: "avināśaḥ",
    transliteration: "avināśaḥ",
    definition:
      "Immortality, absence of death.",
  },
  {
    id: "avisankita",
    term: "aviśaṅkita",
    transliteration: "aviśaṅkita",
    definition:
      "Without doubt; fearless.",
  },
  {
    id: "avita",
    term: "avīta",
    transliteration: "avīta",
    definition:
      "Nor properly understood (with regard to logic).",
  },
  {
    id: "avr",
    term: "āvṛ",
    transliteration: "āvṛ",
    definition:
      "5, 9, 10U. To cover, hide, conceal. āvriyate It is covered.",
  },
  {
    id: "avrjina",
    term: "avṛjina",
    transliteration: "avṛjina",
    definition:
      "Straightforward; sincere; loyal.",
  },
  {
    id: "avrttih",
    term: "āvṛttiḥ",
    transliteration: "āvṛttiḥ",
    definition:
      "Repetition; repetition of birth and death; coming back; revolving.",
    relatedTerms: ["vṛttih"],
  },
  {
    id: "avyabhicara",
    term: "avyabhicāra",
    transliteration: "avyabhicāra",
    definition:
      "Steady, constant, consistent; non-separate.",
  },
  {
    id: "avyabhicari",
    term: "avyabhicāri",
    transliteration: "avyabhicāri",
    definition:
      "Not opposed or adverse; true in all cases; not opposed or adverse; favorable.",
  },
  {
    id: "avyakrta",
    term: "avyākṛta",
    transliteration: "avyākṛta",
    definition:
      "Undifferentiated; not manifest.",
  },
  {
    id: "avyakta",
    term: "avyakta",
    transliteration: "avyakta",
    definition:
      "Not manifest; not apparent; unknown; as noun: avidyā; māyā.",
    relatedTerms: ["avidyā", "maya"],
    tags: ["unmanifest", "hidden", "subtle", "invisible", "potential"],
  },
  {
    id: "avyaktam",
    term: "avyaktam",
    transliteration: "avyaktam",
    definition:
      "The unmanifest condition.",
    relatedTerms: ["avyakta"],
  },
  {
    id: "avyapadesya",
    term: "avyapadeśya",
    transliteration: "avyapadeśya",
    definition:
      "Not to be defined.",
  },
  {
    id: "avyapari",
    term: "avyāpāri",
    transliteration: "avyāpāri",
    definition:
      "One who does not perform action.",
  },
  {
    id: "avyasta",
    term: "avyasta",
    transliteration: "avyasta",
    definition:
      "Not separated; collected.",
  },
  {
    id: "avyavasayah",
    term: "avyavasāyaḥ",
    transliteration: "avyavasāyaḥ",
    definition:
      "Absence of determination or conviction.",
  },
  {
    id: "avyaya",
    term: "avyaya",
    transliteration: "avyaya",
    definition:
      "Undecaying; indeclinable; unchanging.",
  },
  {
    id: "ayah",
    term: "āyaḥ",
    transliteration: "āyaḥ",
    definition:
      "Gain, acquisition; arrival; means; source, approach; income.",
  },
  {
    id: "ayanam",
    term: "āyanam",
    transliteration: "āyanam",
    definition:
      "Going, moving; path, way; place, abode; entrance, period; method.",
  },
  {
    id: "ayasah",
    term: "āyāsaḥ",
    transliteration: "āyāsaḥ",
    definition:
      "Effort; difficulty.",
  },
  {
    id: "ayata",
    term: "ayata",
    transliteration: "ayata",
    definition:
      "Unchecked, uncontrolled.",
    relatedTerms: ["āyatanam"],
  },
  {
    id: "ayatanam",
    term: "āyatanam",
    transliteration: "āyatanam",
    definition:
      "Abode; place; sanctuary; the place of the Vedic fire.",
    relatedTerms: ["ayata"],
  },
  {
    id: "ayukta",
    term: "āyukta",
    transliteration: "āyukta",
    definition:
      "Improper, wrong, unsuitable, negligent.",
  },
  {
    id: "ayurveda",
    term: "ayurveda",
    transliteration: "ayurveda",
    definition:
      "The science of health or medicine - part of the Atharvavedaḥ.",
  },
  {
    id: "ayus",
    term: "āyus",
    transliteration: "āyus",
    definition:
      "Life, duration of life. āyuṣman bhava May you be long lived.",
  },
  {
    id: "ayutasiddha",
    term: "ayutasiddha",
    transliteration: "ayutasiddha",
    definition:
      "Proved to be inseparable and inherent (in Vaisheshika philosophy).",
  },
  {
    id: "badarayanah",
    term: "bādarāyaṇaḥ",
    transliteration: "bādarāyaṇaḥ",
    definition:
      "Vyaasa, author of the Vedanta sutras.",
  },
  {
    id: "baddha",
    term: "baddha",
    transliteration: "baddha",
    definition:
      "Bound, tied, fastened; caught; confined.",
  },
  {
    id: "badh",
    term: "bādh",
    transliteration: "bādh",
    definition:
      "1A. To obstruct, interfere; to wrong, harass, disturb. bādhyate It is negated.",
  },
  {
    id: "badhah",
    term: "bādhah",
    transliteration: "bādhah",
    definition:
      "Negation; objection; contradiction; affliction.",
  },
  {
    id: "badhaka",
    term: "bādhaka",
    transliteration: "bādhaka",
    definition:
      "Refuting; controverting; contradicting; invalidating.",
  },
  {
    id: "badham",
    term: "bādham",
    transliteration: "bādham",
    definition:
      "ind. Certainly, surely; all right, oh, yes; very well.",
  },
  {
    id: "badhanam",
    term: "bādhanam",
    transliteration: "bādhanam",
    definition:
      "Annulment; suspension; removal; opposing; annoyance.",
  },
  {
    id: "badhita",
    term: "bādhita",
    transliteration: "bādhita",
    definition:
      "Negated; opposed; contradicted.",
  },
  {
    id: "bahis",
    term: "bahis",
    transliteration: "bahis",
    definition:
      "ind. Outside, out of, external; apart, separately.",
  },
  {
    id: "bahu",
    term: "bahu",
    transliteration: "bahu",
    definition:
      "Much, abundant, many; exceedingly.",
    relatedTerms: ["bahuvrīhi", "bahudhā"],
  },
  {
    id: "bahudakah",
    term: "bahūdakaḥ",
    transliteration: "bahūdakaḥ",
    definition:
      "A sannyāsī who lives on the banks of rivers and goes door to door seeking alms.",
    relatedTerms: ["sannyāsī"],
  },
  {
    id: "bahudha",
    term: "bahudhā",
    transliteration: "bahudhā",
    definition:
      "ind. In many ways, variously; in different forms; frequently.",
    relatedTerms: ["bahu"],
  },
  {
    id: "bahula",
    term: "bahula",
    transliteration: "bahula",
    definition:
      "Many, numerous; abundant; thick.",
  },
  {
    id: "bahuvrihi",
    term: "bahuvrīhi",
    transliteration: "bahuvrīhi",
    definition:
      "Lit. possessing much rice; compound which relates to a word outside the compound - the final compound member, a noun, serves as an adjective.",
    root: "possessing much rice",
    relatedTerms: ["bahu"],
  },
  {
    id: "bahya",
    term: "bāhya",
    transliteration: "bāhya",
    definition:
      "External.",
  },
  {
    id: "bahyarthasukham",
    term: "bāhyārthasukham",
    transliteration: "bāhyārthasukham",
    definition:
      "Pleasure born of external objects.",
  },
  {
    id: "bahyendriyam",
    term: "bāhyendriyam",
    transliteration: "bāhyendriyam",
    definition:
      "External organ (e.g. the eye).",
  },
  {
    id: "bala",
    term: "bāla",
    transliteration: "bāla",
    definition:
      "Young, immature, not full grown.",
  },
  {
    id: "balam",
    term: "balam",
    transliteration: "balam",
    definition:
      "Strength, power, force.",
  },
  {
    id: "balih",
    term: "baliḥ",
    transliteration: "baliḥ",
    definition:
      "Oblation, offering; gift.",
  },
  {
    id: "balisah",
    term: "bāliśah",
    transliteration: "bāliśah",
    definition:
      "Ignorance, foolishness, childishness, carelessness.",
  },
  {
    id: "bandhab",
    term: "bandhab",
    transliteration: "bandhab",
    definition:
      "Bondage.",
  },
  {
    id: "bandhuh",
    term: "bandhuḥ",
    transliteration: "bandhuḥ",
    definition:
      "Relation, kinsman.",
  },
  {
    id: "bandhya",
    term: "bandhyā",
    transliteration: "bandhyā",
    definition:
      "A barren woman.",
  },
  {
    id: "bastih",
    term: "bastiḥ",
    transliteration: "bastiḥ",
    definition:
      "Bladder, abdomen.",
  },
  {
    id: "bauddha",
    term: "bauddha",
    transliteration: "bauddha",
    definition:
      "A follower of Buddha.",
  },
  {
    id: "bha",
    term: "bhā",
    transliteration: "bhā",
    definition:
      "2P. To shine, be bright. bhāti It shines, is self-effulgent (e.g. the sun or ātmā).",
    relatedTerms: ["ātmā"],
  },
  {
    id: "bhadra",
    term: "bhadra",
    transliteration: "bhadra",
    definition:
      "Auspicious; sacred; blessed; excellent.",
  },
  {
    id: "bhagah",
    term: "bhagaḥ",
    transliteration: "bhagaḥ",
    definition:
      "All wealth; all virtues; excellence.",
  },
  {
    id: "bhagatyagalaksana",
    term: "bhāgatyāgalakṣaṇā",
    transliteration: "bhāgatyāgalakṣaṇā",
    definition:
      "Implication where a word loses its primary sense but a part of the sense is retained (e.g. so'yam devatdattaḥ); jahātajahallakṣaṇā.",
  },
  {
    id: "bhagavan",
    term: "bhagavān",
    transliteration: "bhagavān",
    definition:
      "The Lord.",
  },
  {
    id: "bhaj",
    term: "bhaj",
    transliteration: "bhaj",
    definition:
      "1U. To partake of, share, distribute, divide; to enjoy, honor, worship.",
  },
  {
    id: "bhaktih",
    term: "bhaktiḥ",
    transliteration: "bhaktiḥ",
    definition:
      "The recognition (that the Lord is giver of the fruits of action) which makes one a devotee; love without duality; devotion; committed love.",
    vedantaMeaning:
      "Devotion to Īśvara — in Vedānta, not mere emotional attachment but a mature understanding of one's relationship with the Lord. Bhakti includes the recognition of Īśvara as the giver of the fruits of action (karma-phala-dātā) and the trust that the Lord's order is just. In its highest form (parā-bhakti), bhakti becomes identical with jñāna — the recognition that there is no separation between the devotee and Brahman.",
    relatedTerms: ["īśvarah", "mokṣa", "karma", "śraddhā"],
    tags: ["devotion", "love", "worship", "faith", "surrender", "prayer"],
  },
  {
    id: "bhamah",
    term: "bhāmaḥ",
    transliteration: "bhāmaḥ",
    definition:
      "Brightness, splendor; the sun.",
  },
  {
    id: "bhami",
    term: "bhāmi",
    transliteration: "bhāmi",
    definition:
      "Shining.",
  },
  {
    id: "bhanam",
    term: "bhānam",
    transliteration: "bhānam",
    definition:
      "Light; perception, knowledge; pertaining to the sun.",
  },
  {
    id: "bhangah",
    term: "bhāṅgaḥ",
    transliteration: "bhāṅgaḥ",
    definition:
      "Breaking down, decay, destruction.",
  },
  {
    id: "bharata",
    term: "bhārata",
    transliteration: "bhārata",
    definition:
      "India; descendants of Bharata.",
  },
  {
    id: "bhasa",
    term: "bhāṣā",
    transliteration: "bhāṣā",
    definition:
      "Language; speech; common vernacular or dialect.",
    relatedTerms: ["vibhāsa", "abhāsa"],
  },
  {
    id: "bhasyakarah",
    term: "bhāṣyakāraḥ",
    transliteration: "bhāṣyakāraḥ",
    definition:
      "Author of a commentary; Śaṅkara.",
  },
  {
    id: "bhasyam",
    term: "bhāṣyam",
    transliteration: "bhāṣyam",
    definition:
      "Commentary.",
  },
  {
    id: "bhattah",
    term: "bhaṭṭah",
    transliteration: "bhaṭṭah",
    definition:
      "A follower of Kumarila Bhatta, Mimamsa philosopher.",
    relatedTerms: ["mīmāṃsā"],
  },
  {
    id: "bhavah",
    term: "bhavaḥ",
    transliteration: "bhavaḥ",
    definition:
      "Existence; state of being; existent.",
    relatedTerms: ["abhāvaḥ", "svabhāvaḥ"],
  },
  {
    id: "bhavana",
    term: "bhāvanā",
    transliteration: "bhāvanā",
    definition:
      "Attitude; conception; hypothesis; feeling of devotion; meditation.",
    relatedTerms: ["bhavanam"],
  },
  {
    id: "bhavanam",
    term: "bhavanam",
    transliteration: "bhavanam",
    definition:
      "Being, existence; production.",
    relatedTerms: ["bhāvanā"],
  },
  {
    id: "bhavarogah",
    term: "bhavarogaḥ",
    transliteration: "bhavarogaḥ",
    definition:
      "The universal disease, ignorance.",
  },
  {
    id: "bhavat",
    term: "bhavat",
    transliteration: "bhavat",
    definition:
      "Present; happening; that which is now.",
  },
  {
    id: "bhavisya",
    term: "bhaviṣya",
    transliteration: "bhaviṣya",
    definition:
      "Future; that which will come.",
  },
  {
    id: "bhavya",
    term: "bhavya",
    transliteration: "bhavya",
    definition:
      "Existing, being; future, about to be; suitable, fit, proper; auspicious.",
  },
  {
    id: "bhayam",
    term: "bhayam",
    transliteration: "bhayam",
    definition:
      "Fear.",
  },
  {
    id: "bhedah",
    term: "bhedah",
    transliteration: "bhedah",
    definition:
      "Difference; separation; duality; disturbance.",
  },
  {
    id: "bhi",
    term: "bhī",
    transliteration: "bhī",
    definition:
      "3P. To fear, be afraid of. bhībheti He fears.",
  },
  {
    id: "bhid",
    term: "bhid",
    transliteration: "bhid",
    definition:
      "1P. To divide or cut into parts; split, pierce. bhidyate It is divided, split, separate from.",
  },
  {
    id: "bhiksa",
    term: "bhikṣā",
    transliteration: "bhikṣā",
    definition:
      "Anything given as alms; begging.",
  },
  {
    id: "bhinna",
    term: "bhinna",
    transliteration: "bhinna",
    definition:
      "Divided.",
    relatedTerms: ["abhinna"],
  },
  {
    id: "bhisa",
    term: "bhīṣā",
    transliteration: "bhīṣā",
    definition:
      "The act of terrifying; fright, terror.",
  },
  {
    id: "bhismah",
    term: "bhīṣmaḥ",
    transliteration: "bhīṣmaḥ",
    definition:
      "The sentiment of terror; dread; name of a controversial hero of the Mahābhārata.",
  },
  {
    id: "bhogah",
    term: "bhogaḥ",
    transliteration: "bhogaḥ",
    definition:
      "Enjoyment.",
  },
  {
    id: "bhogasadhanam",
    term: "bhogasādhanam",
    transliteration: "bhogasādhanam",
    definition:
      "Means of enjoying; sākymasāritrām.",
  },
  {
    id: "bhogyam",
    term: "bhogyam",
    transliteration: "bhogyam",
    definition:
      "An object of experience or enjoyment.",
  },
  {
    id: "bhokta",
    term: "bhoktā",
    transliteration: "bhoktā",
    definition:
      "Enjoyer; experiencer.",
  },
  {
    id: "bhramah",
    term: "bhramaḥ",
    transliteration: "bhramaḥ",
    definition:
      "Error, mistake, misapprehension; circular motion, rotation.",
  },
  {
    id: "bhrantam",
    term: "bhrāntam",
    transliteration: "bhrāntam",
    definition:
      "Ignorance; error, mistake.",
  },
  {
    id: "bhrantih",
    term: "bhrāntiḥ",
    transliteration: "bhrāntiḥ",
    definition:
      "Confusion; delusion.",
  },
  {
    id: "bhuh",
    term: "bhūḥ",
    transliteration: "bhūḥ",
    definition:
      "The earth, land, ground; the first of the three vyāhṛtis.",
  },
  {
    id: "bhuj",
    term: "bhuj",
    transliteration: "bhuj",
    definition:
      "7U. To eat, consume; to enjoy, use.",
  },
  {
    id: "bhujangah",
    term: "bhujaṅgaḥ",
    transliteration: "bhujaṅgaḥ",
    definition:
      "A snake, serpent. Also bhujaṅgam and bhujagaḥ.",
  },
  {
    id: "bhuk",
    term: "bhuk",
    transliteration: "bhuk",
    definition:
      "at end of compound The enjoyer, the one who enjoys.",
  },
  {
    id: "bhukampah",
    term: "bhūkampaḥ",
    transliteration: "bhūkampaḥ",
    definition:
      "An earthquake.",
  },
  {
    id: "bhuman",
    term: "bhūman",
    transliteration: "bhūman",
    definition:
      "Virāṭ; abundance; the earth; brahman.",
    relatedTerms: ["brahman", "virāṭ"],
  },
  {
    id: "bhumih",
    term: "bhūmiḥ",
    transliteration: "bhūmiḥ",
    definition:
      "The earth.",
  },
  {
    id: "bhuta",
    term: "bhūta",
    transliteration: "bhūta",
    definition:
      "Past, gone; that which was.",
    relatedTerms: ["bhūtam"],
  },
  {
    id: "bhutam",
    term: "bhūtam",
    transliteration: "bhūtam",
    definition:
      "A being; an element; an object.",
    relatedTerms: ["bhūta"],
  },
  {
    id: "bhutih",
    term: "bhūtiḥ",
    transliteration: "bhūtiḥ",
    definition:
      "Wealth, fortune; success; being, existence; birth.",
    relatedTerms: ["anubhūtiḥ"],
  },
  {
    id: "bhuvah",
    term: "bhuvaḥ",
    transliteration: "bhuvaḥ",
    definition:
      "The air; sky, atmosphere; the second of the three vyāhṛtis.",
  },
  {
    id: "bhuyas",
    term: "bhūyas",
    transliteration: "bhūyas",
    definition:
      "Comparative of bahu More, larger.",
    relatedTerms: ["bahu"],
  },
  {
    id: "bijam",
    term: "bījam",
    transliteration: "bījam",
    definition:
      "Seed; source; cause.",
  },
  {
    id: "bimbah",
    term: "bimbaḥ",
    transliteration: "bimbaḥ",
    definition:
      "Reflection; object; mirror.",
  },
  {
    id: "bodhah",
    term: "bodhaḥ",
    transliteration: "bodhaḥ",
    definition:
      "Knowledge; understanding; consciousness.",
  },
  {
    id: "bodhaka",
    term: "bodhaka",
    transliteration: "bodhaka",
    definition:
      "Informing; instructing, teaching; awakening.",
  },
  {
    id: "bodhika",
    term: "bodhikā",
    transliteration: "bodhikā",
    definition:
      "That which reveals or conveys.",
  },
  {
    id: "bodhisattva",
    term: "bodhisattva",
    transliteration: "bodhisattva",
    definition:
      "Buddhist saint.",
  },
  {
    id: "brahma",
    term: "brahmā",
    transliteration: "brahmā",
    definition:
      "Deity of the buddhi; the creator who is part of the supreme triad with Śiva and Viṣṇu.",
    relatedTerms: ["śiva"],
  },
  {
    id: "brahmacari",
    term: "brahmacārī",
    transliteration: "brahmacārī",
    definition:
      "A Vedic student - the first of four stages in Vedic life.",
    relatedTerms: ["brahmā"],
  },
  {
    id: "brahmacaryam",
    term: "brahmacaryam",
    transliteration: "brahmacaryam",
    definition:
      "Religious studentship; the first stage of Vedic life.",
  },
  {
    id: "brahman",
    term: "brahman",
    transliteration: "brahman",
    definition:
      "The truth of everything; the meaning of satyam jñānam anantam; one of four ṛtviḥs or priests employed at a Soma sacrifice.",
    vedantaMeaning:
      "The limitless, non-dual reality that is the cause and substrate of everything. Defined in the Taittirīya Upaniṣad as satyaṃ jñānam anantam — existence, awareness, and limitlessness. Brahman is not an object of knowledge but the very self of the knower. It is both the material and intelligent cause (abhinna-nimittopādāna-kāraṇam) of the universe.",
    relatedTerms: ["ātmā", "īśvarah", "sat", "satyam", "ānandaḥ", "jñānam", "māyā"],
    tags: ["absolute", "reality", "truth", "infinite", "god", "existence", "consciousness", "limitless", "whole"],
  },
  {
    id: "brahmanah",
    term: "brāhmaṇaḥ",
    transliteration: "brāhmaṇaḥ",
    definition:
      "A man born into the first varṇa; priest.",
    relatedTerms: ["brahman", "brahmā"],
  },
  {
    id: "brahmanam",
    term: "brāhmaṇam",
    transliteration: "brāhmaṇam",
    definition:
      "A specific portion of each of the four Vedas containing rules for use of hymns and explanation and illustration of their origins.",
    relatedTerms: ["brahman", "brahmā"],
  },
  {
    id: "brahmandam",
    term: "brahmāṇḍam",
    transliteration: "brahmāṇḍam",
    definition:
      "Lit. the egg of brahman; the cosmos.",
    root: "the egg of brahman",
    relatedTerms: ["brahman"],
  },
  {
    id: "brahmanyam",
    term: "brāhmaṇyam",
    transliteration: "brāhmaṇyam",
    definition:
      "The station or rank of a brāhmaṇa; priestly or pious character.",
    relatedTerms: ["brahman", "brahmā"],
  },
  {
    id: "brahmarandhram",
    term: "brahmarandhrām",
    transliteration: "brahmarandhrām",
    definition:
      "An aperture in the crown of the skull involved in rebirth.",
  },
  {
    id: "brahmavidya",
    term: "brahmavidyā",
    transliteration: "brahmavidyā",
    definition:
      "The teaching with reference to realities.",
  },
  {
    id: "brh",
    term: "bṛh",
    transliteration: "bṛh",
    definition:
      "To grow; to increase; to expand.",
  },
  {
    id: "brhat",
    term: "bṛhat",
    transliteration: "bṛhat",
    definition:
      "Great; large; strong; that which sustains everything.",
  },
  {
    id: "buddhih",
    term: "buddhiḥ",
    transliteration: "buddhiḥ",
    definition:
      "The intellect; reasoning; knowledge; recognition; will; deliberate thought.",
    vedantaMeaning:
      "The aspect of the antaḥkaraṇam whose function is determination (niścaya). Buddhi resolves the doubt raised by manas and arrives at a conclusion. It is the seat of knowledge and decision. In Vedānta, self-knowledge takes place in the buddhi — when the buddhi, informed by the teaching, recognizes 'I am Brahman,' that is mokṣa. The buddhi is the closest upādhi to ātmā.",
    relatedTerms: ["manas", "ahaṅkāraḥ", "cittam", "antaḥkaraṇam"],
    tags: ["intellect", "reason", "understanding", "thought", "intelligence", "mind", "discernment"],
  },
  {
    id: "budh",
    term: "budh",
    transliteration: "budh",
    definition:
      "1U, 4A. To know, understand; to perceive; to wake, wake up. bodhati budhyate.",
  },
  {
    id: "caitanyam",
    term: "caitanyam",
    transliteration: "caitanyam",
    definition:
      "Awareness, consciousness, cf.",
    relatedTerms: ["ātmā", "sākṣī", "brahman"],
    tags: ["awareness", "consciousness", "sentience", "aliveness"],
  },
  {
    id: "caityam",
    term: "caityam",
    transliteration: "caityam",
    definition:
      "Things objectified (by mind).",
  },
  {
    id: "cakram",
    term: "cakram",
    transliteration: "cakram",
    definition:
      "Wheel; circle; ring; Vishnu's disc.",
  },
  {
    id: "cakratmakam",
    term: "cakrātmakam",
    transliteration: "cakrātmakam",
    definition:
      "Circular logic.",
  },
  {
    id: "caksuh",
    term: "cakṣuḥ",
    transliteration: "cakṣuḥ",
    definition:
      "The eye.",
  },
  {
    id: "cala",
    term: "cala",
    transliteration: "cala",
    definition:
      "Moving; movable; unsteady; perishable.",
    relatedTerms: ["chalam", "acala"],
  },
  {
    id: "calanam",
    term: "calanam",
    transliteration: "calanam",
    definition:
      "Moving, shaking, roaming.",
  },
  {
    id: "calitam",
    term: "calitam",
    transliteration: "calitam",
    definition:
      "Moving, agitation, shaking.",
  },
  {
    id: "candrah",
    term: "candraḥ",
    transliteration: "candraḥ",
    definition:
      "The moon.",
  },
  {
    id: "candramah",
    term: "candramaḥ",
    transliteration: "candramaḥ",
    definition:
      "Deity of cittam; memory; the moon.",
    relatedTerms: ["cittam"],
  },
  {
    id: "candrayanam",
    term: "cāndrāyaṇam",
    transliteration: "cāndrāyaṇam",
    definition:
      "Religious discipline related to phases of the moon over one month.",
  },
  {
    id: "car",
    term: "car",
    transliteration: "car",
    definition:
      "1P. To walk, move, wander; to perform, do, act; to conduct oneself; to live.",
  },
  {
    id: "carah",
    term: "caraḥ",
    transliteration: "caraḥ",
    definition:
      "Going, wandering about; motion/progression; practicing.",
  },
  {
    id: "carvakah",
    term: "cārvākaḥ",
    transliteration: "cārvākaḥ",
    definition:
      "A materialist philosophy.",
  },
  {
    id: "caturdha",
    term: "caturdhā",
    transliteration: "caturdhā",
    definition:
      "Fourfold, in four ways.",
  },
  {
    id: "caturtham",
    term: "caturtham",
    transliteration: "caturtham",
    definition:
      "A quarter, a fourth part.",
  },
  {
    id: "caturti",
    term: "caturti",
    transliteration: "caturti",
    definition:
      "The fourth; the fourth case - dative (for the indirect object).",
  },
  {
    id: "catuspad",
    term: "catuṣpād",
    transliteration: "catuṣpād",
    definition:
      "Having four limbs.",
  },
  {
    id: "catustaya",
    term: "catuṣṭaya",
    transliteration: "catuṣṭaya",
    definition:
      "Fourfold, consisting of four.",
  },
  {
    id: "ced",
    term: "ced",
    transliteration: "ced",
    definition:
      "ind. If, provided that, although.",
  },
  {
    id: "cesta",
    term: "ceṣṭā",
    transliteration: "ceṣṭā",
    definition:
      "Movement of limbs, motion, action, behavior.",
  },
  {
    id: "cetana",
    term: "cetana",
    transliteration: "cetana",
    definition:
      "Alive; sentient; living.",
    tags: ["sentient", "conscious", "alive", "living", "awareness"],
  },
  {
    id: "cetomsavah",
    term: "cetoṃśavaḥ",
    transliteration: "cetoṃśavaḥ",
    definition:
      "The individual understood in terms of anupravṛṣṭaḥ, not each individual a separate consciousness but consciousness universally manifest.",
  },
  {
    id: "cetomukhah",
    term: "cetomūkhaḥ",
    transliteration: "cetomūkhaḥ",
    definition:
      "The mind as gateway for antaḥkaraṇa to become awake to dream or awakening.",
  },
  {
    id: "chalam",
    term: "chalam",
    transliteration: "chalam",
    definition:
      "Fraud, trick, deception.",
    relatedTerms: ["cala", "alam"],
  },
  {
    id: "chandah",
    term: "chandaḥ",
    transliteration: "chandaḥ",
    definition:
      "Free will, desire, wish, liking.",
  },
  {
    id: "chandas",
    term: "chandas",
    transliteration: "chandas",
    definition:
      "Discipline of prosody and metre - one of the six vedāṅgas; the Vedic hymns.",
    relatedTerms: ["chāndasa", "chāndasam"],
  },
  {
    id: "chandasa",
    term: "chāndasa",
    transliteration: "chāndasa",
    definition:
      "Vedic, relating to the Vedas; studying the Vedas.",
    relatedTerms: ["chandas", "chāndasam"],
  },
  {
    id: "chandasam",
    term: "chāndasam",
    transliteration: "chāndasam",
    definition:
      "Grammatical exceptions found in the Vedas; peculiar to the Vedas; metrical.",
    relatedTerms: ["chandas", "chāndasa"],
  },
  {
    id: "chaya",
    term: "chāyā",
    transliteration: "chāyā",
    definition:
      "Shade, shadow; a reflected image, likeness, reflection.",
  },
  {
    id: "chedah",
    term: "chedaḥ",
    transliteration: "chedaḥ",
    definition:
      "Cutting, breaking down, dividing; solving; termination.",
  },
  {
    id: "chid",
    term: "chid",
    transliteration: "chid",
    definition:
      "7U. To cut, break; split, divide. chinatti ccheda.",
  },
  {
    id: "chidram",
    term: "chidram",
    transliteration: "chidram",
    definition:
      "Hole, opening; defect, weak point.",
  },
  {
    id: "cikirsa",
    term: "cikīrṣā",
    transliteration: "cikīrṣā",
    definition:
      "Desire for doing; will.",
  },
  {
    id: "cikitsa",
    term: "cikitsā",
    transliteration: "cikitsā",
    definition:
      "Medical treatment; healing; therapeutics.",
  },
  {
    id: "cinmayam",
    term: "cinmayam",
    transliteration: "cinmayam",
    definition:
      "Pure intelligence; nothing but awareness.",
  },
  {
    id: "cintakah",
    term: "cintakaḥ",
    transliteration: "cintakaḥ",
    definition:
      "One who holds to a philosophy or point of view.",
  },
  {
    id: "cintanam",
    term: "cintanam",
    transliteration: "cintanam",
    definition:
      "Mental prayer; thinking.",
  },
  {
    id: "cintya",
    term: "cintya",
    transliteration: "cintya",
    definition:
      "To be considered; thought over; requiring consideration.",
  },
  {
    id: "cira",
    term: "cira",
    transliteration: "cira",
    definition:
      "Long, lasting a long time. ciram A long time.",
  },
  {
    id: "cit",
    term: "cit",
    transliteration: "cit",
    definition:
      "Limitless self-effulgent awareness; the self-revealing.",
  },
  {
    id: "citta",
    term: "citta",
    transliteration: "citta",
    definition:
      "Perceived, observed; considered, meditated on.",
    vedantaMeaning:
      "As a function of the antaḥkaraṇam, citta refers to memory and recollection — the storehouse of impressions (saṃskāras) from past experiences. In Yoga, citta refers to the total mind-field. In Vedānta, citta-śuddhi (purity of mind) is an essential preparation for self-knowledge, achieved through karma-yoga and upāsanā.",
    relatedTerms: ["cittam"],
  },
  {
    id: "cittam",
    term: "cittam",
    transliteration: "cittam",
    definition:
      "Memory, mind, thought, thinking, reason, intellect; desire, intention.",
    relatedTerms: ["manas", "buddhiḥ", "ahaṅkāraḥ", "antaḥkaraṇam"],
    tags: ["mind", "memory", "thought", "thinking", "mental"],
  },
  {
    id: "codana",
    term: "codanā",
    transliteration: "codanā",
    definition:
      "Scriptural injunction, sacred commandment; sending, directing; urging, prompting.",
  },
  {
    id: "codita",
    term: "codita",
    transliteration: "codita",
    definition:
      "Put forward as an argument; appointed; ordered; sent.",
  },
  {
    id: "cyutih",
    term: "cyutiḥ",
    transliteration: "cyutiḥ",
    definition:
      "Falling down; deviation from; losing.",
  },
  {
    id: "dagdha",
    term: "dagdha",
    transliteration: "dagdha",
    definition:
      "Burnt.",
  },
  {
    id: "dah",
    term: "dah",
    transliteration: "dah",
    definition:
      "1P. To burn, scorch.",
  },
  {
    id: "dahanam",
    term: "dahanam",
    transliteration: "dahanam",
    definition:
      "Burning; reducing to ashes.",
  },
  {
    id: "daivam",
    term: "daivam",
    transliteration: "daivam",
    definition:
      "Influence of the deities; the Lord's influence; destiny; fate; luck.",
  },
  {
    id: "daivika",
    term: "daivika",
    transliteration: "daivika",
    definition:
      "Relating to the gods, divine.",
  },
  {
    id: "daksa",
    term: "dakṣa",
    transliteration: "dakṣa",
    definition:
      "Able; confident; fit; clever.",
  },
  {
    id: "daksina",
    term: "dakṣiṇa",
    transliteration: "dakṣiṇa",
    definition:
      "Able; skillful; right (side); southern.",
    relatedTerms: ["kṣīṇa"],
  },
  {
    id: "daksinamurtih",
    term: "dakṣiṇāmūrtiḥ",
    transliteration: "dakṣiṇāmūrtiḥ",
    definition:
      "Sadāśivaḥ the teacher; deity of ātmavidyā; Lord Śiva as first teacher.",
    relatedTerms: ["śiva"],
  },
  {
    id: "damah",
    term: "damaḥ",
    transliteration: "damaḥ",
    definition:
      "Mastery; control of sense organs and organs of action.",
    vedantaMeaning:
      "Mastery over the sense organs and organs of action — the second of the six inner disciplines. While śama is the management of the internal mind, dama is the management of the external instruments. It is the capacity to not be compelled by sensory impulses, allowing the student to remain focused on the pursuit of knowledge rather than being pulled outward by attractions and aversions.",
    relatedTerms: ["samaḥ", "uparatih", "titikṣā", "śraddhā", "sādhanatuṣṭayam"],
    tags: ["sense-control", "restraint", "mastery", "discipline", "senses"],
  },
  {
    id: "danam",
    term: "dānam",
    transliteration: "dānam",
    definition:
      "Giving; gift.",
  },
  {
    id: "dandah",
    term: "daṇḍaḥ",
    transliteration: "daṇḍaḥ",
    definition:
      "Stick, staff; the rod as a symbol of authority and punishment.",
  },
  {
    id: "dantih",
    term: "dāntiḥ",
    transliteration: "dāntiḥ",
    definition:
      "Self-restraint; self-control; endurance.",
  },
  {
    id: "darbhah",
    term: "darbhaḥ",
    transliteration: "darbhaḥ",
    definition:
      "A kind of sacred grass used in rituals.",
  },
  {
    id: "dardhyam",
    term: "dārḍhyam",
    transliteration: "dārḍhyam",
    definition:
      "Hardness, tightness, confirmation, corroboration; strength, energy.",
  },
  {
    id: "darsanam",
    term: "darśanam",
    transliteration: "darśanam",
    definition:
      "Seeing.",
  },
  {
    id: "darsapurnamasanyayah",
    term: "darśapūrṇamāsanyāyaḥ",
    transliteration: "darśapūrṇamāsanyāyaḥ",
    definition:
      "Jaimini's rule which says one act can yield all desired objects one at a time.",
    relatedTerms: ["jaimini"],
  },
  {
    id: "darstanta",
    term: "darṣṭānta",
    transliteration: "darṣṭānta",
    definition:
      "That which is the subject of an illustration; explained or illustrated by a dṛṣṭānta.",
  },
  {
    id: "datr",
    term: "dātṛ",
    transliteration: "dātṛ",
    definition:
      "Giving. Nom. sing. dātā Giver; donor.",
  },
  {
    id: "daya",
    term: "dayā",
    transliteration: "dayā",
    definition:
      "Compassion; empathy.",
    tags: ["compassion", "empathy", "kindness", "mercy", "sympathy"],
  },
  {
    id: "dayalu",
    term: "dayālu",
    transliteration: "dayālu",
    definition:
      "Kind, tender, compassionate.",
  },
  {
    id: "dehah",
    term: "dehaḥ",
    transliteration: "dehaḥ",
    definition:
      "The body.",
  },
  {
    id: "dehi",
    term: "dehī",
    transliteration: "dehī",
    definition:
      "The ātmā taken to be the body; the indweller; a living being, especially a man.",
    relatedTerms: ["ātmā"],
  },
  {
    id: "desah",
    term: "deśaḥ",
    transliteration: "deśaḥ",
    definition:
      "Country, place; spot.",
  },
  {
    id: "desakalavastuparicchedah",
    term: "deśakālavastuparicchēdaḥ",
    transliteration: "deśakālavastuparicchēdaḥ",
    definition:
      "Being bound by time, space, and attribute.",
  },
  {
    id: "desikah",
    term: "deśikaḥ",
    transliteration: "deśikaḥ",
    definition:
      "Teacher; guru.",
  },
  {
    id: "devah",
    term: "devaḥ",
    transliteration: "devaḥ",
    definition:
      "A god or deity.",
  },
  {
    id: "devata",
    term: "devatā",
    transliteration: "devatā",
    definition:
      "A deity.",
  },
  {
    id: "deyam",
    term: "deyam",
    transliteration: "deyam",
    definition:
      "To be given, offered or presented.",
  },
  {
    id: "dha",
    term: "dhā",
    transliteration: "dhā",
    definition:
      "3U. To put, place; to fix or direct the mind on; to bestow, cause, create. dadhāti hita.",
    relatedTerms: ["hita"],
  },
  {
    id: "dhairyam",
    term: "dhairyam",
    transliteration: "dhairyam",
    definition:
      "Courage; strength.",
  },
  {
    id: "dhanam",
    term: "dhānam",
    transliteration: "dhānam",
    definition:
      "Abode; place; ray of light; splendor, power.",
    relatedTerms: ["hānam", "anusandhānam", "sandhānam"],
  },
  {
    id: "dharanam",
    term: "dhāraṇam",
    transliteration: "dhāraṇam",
    definition:
      "Mastering the mind; a capacity to concentrate - one of the eight aṅgas of Patañjali's Yoga; the act of bearing, holding, supporting; firmness, steadiness.",
  },
  {
    id: "dharin",
    term: "dhārin",
    transliteration: "dhārin",
    definition:
      "Carrying; bearing; holding.",
  },
  {
    id: "dharita",
    term: "dhārita",
    transliteration: "dhārita",
    definition:
      "Held; supported; maintained.",
  },
  {
    id: "dharmah",
    term: "dharmaḥ",
    transliteration: "dharmaḥ",
    definition:
      "Law; practice; custom; virtue; duty; propriety; order; attribute.",
    vedantaMeaning:
      "The order that governs all of creation — physical, psychological, and moral. In Vedānta, dharma includes both the ethical order (right action) and the cosmic order. Living in accordance with dharma purifies the mind and prepares it for self-knowledge. However, dharma belongs to the realm of action (karma) and cannot by itself produce mokṣa. Knowledge alone liberates; dharma supports the pursuit of knowledge.",
    relatedTerms: ["karma", "mokṣa", "vedaḥ"],
    tags: ["duty", "law", "virtue", "righteousness", "order", "ethics", "morality", "conduct"],
  },
  {
    id: "dharmi",
    term: "dharmī",
    transliteration: "dharmī",
    definition:
      "The one who lives a life of dharmaḥ.",
    relatedTerms: ["dharmaḥ"],
  },
  {
    id: "dharmika",
    term: "dhārmika",
    transliteration: "dhārmika",
    definition:
      "Virtuous; pious; righteous.",
    relatedTerms: ["dharmī"],
  },
  {
    id: "dharmin",
    term: "dharmin",
    transliteration: "dharmin",
    definition:
      "Virtuous, just, pious; knowing one's duties.",
    relatedTerms: ["dharmī"],
  },
  {
    id: "dharmya",
    term: "dharmya",
    transliteration: "dharmya",
    definition:
      "Consistent with duty; in keeping with dharmaḥ.",
    relatedTerms: ["dharmaḥ"],
  },
  {
    id: "dhatr",
    term: "dhātṛ",
    transliteration: "dhātṛ",
    definition:
      "Creator, maker; preserver, destroyer.",
  },
  {
    id: "dhatuh",
    term: "dhātuḥ",
    transliteration: "dhātuḥ",
    definition:
      "Verbal root; essential part.",
  },
  {
    id: "dhatupathah",
    term: "dhātupāṭhaḥ",
    transliteration: "dhātupāṭhaḥ",
    definition:
      "A list of verbal roots arranged according to Panini's system.",
  },
  {
    id: "dhih",
    term: "dhīḥ",
    transliteration: "dhīḥ",
    definition:
      "Antaḥkaraṇa; knowledge; all thought; the subtle body; the mind; intellect.",
    relatedTerms: ["buddhiḥ"],
  },
  {
    id: "dhimat",
    term: "dhīmat",
    transliteration: "dhīmat",
    definition:
      "Wise, learned.",
  },
  {
    id: "dhirah",
    term: "dhīraḥ",
    transliteration: "dhīraḥ",
    definition:
      "A wise man; hero; the one with direction.",
  },
  {
    id: "dhrtih",
    term: "dhṛtiḥ",
    transliteration: "dhṛtiḥ",
    definition:
      "Resolution; perseverance; satisfaction; concentration; firmness; fortitude.",
  },
  {
    id: "dhruva",
    term: "dhruva",
    transliteration: "dhruva",
    definition:
      "Firm; fixed; permanent; unchanging.",
  },
  {
    id: "dhumah",
    term: "dhūmaḥ",
    transliteration: "dhūmaḥ",
    definition:
      "Smoke; vapor.",
  },
  {
    id: "dhvanih",
    term: "dhvaniḥ",
    transliteration: "dhvaniḥ",
    definition:
      "A sound.",
  },
  {
    id: "dhyanam",
    term: "dhyānam",
    transliteration: "dhyānam",
    definition:
      "Religious meditation; abstract contemplation - one of the eight aṅgas of Patañjali's Yoga.",
    vedantaMeaning:
      "Meditation — in Vedānta, the sustained contemplation (nididhyāsana) on the truth revealed by the teaching. Unlike in Yoga philosophy, dhyāna in Vedānta is not a technique to produce a new experience but a means to internalize what has already been understood through śravaṇa and manana. It addresses habitual, emotional resistance to the knowledge 'I am Brahman.'",
    relatedTerms: ["brahman"],
  },
  {
    id: "dhyeyam",
    term: "dhyeyam",
    transliteration: "dhyeyam",
    definition:
      "Object of meditation.",
  },
  {
    id: "dik",
    term: "dik",
    transliteration: "dik",
    definition:
      "Nom. sing. of diś. Deity of the ear – hearing.",
    relatedTerms: ["diś"],
  },
  {
    id: "diksa",
    term: "dīkṣā",
    transliteration: "dīkṣā",
    definition:
      "Initiation.",
    tags: ["initiation", "consecration", "beginning", "ceremony"],
  },
  {
    id: "dina",
    term: "dīna",
    transliteration: "dīna",
    definition:
      "Helpless; poor; distressed; frightened.",
    relatedTerms: ["purī"],
  },
  {
    id: "dipah",
    term: "dīpaḥ",
    transliteration: "dīpaḥ",
    definition:
      "Light.",
  },
  {
    id: "diptimat",
    term: "dīptimat",
    transliteration: "dīptimat",
    definition:
      "Brilliant, shining, splendid.",
  },
  {
    id: "dirgha",
    term: "dīrgha",
    transliteration: "dīrgha",
    definition:
      "Long; long lasting.",
  },
  {
    id: "dis",
    term: "diś",
    transliteration: "diś",
    definition:
      "Direction; cardinal compass point.",
  },
  {
    id: "divya",
    term: "divya",
    transliteration: "divya",
    definition:
      "Heavenly; self-effulgent; extraordinary; not worldly.",
  },
  {
    id: "dohanam",
    term: "dohanam",
    transliteration: "dohanam",
    definition:
      "Milkpail; milking.",
  },
  {
    id: "dosah",
    term: "doṣaḥ",
    transliteration: "doṣaḥ",
    definition:
      "Defect; error; fault.",
  },
  {
    id: "drak",
    term: "drāk",
    transliteration: "drāk",
    definition:
      "ind. Quickly, immediately.",
  },
  {
    id: "drastavya",
    term: "draṣṭavya",
    transliteration: "draṣṭavya",
    definition:
      "Fit to be seen, investigated, or examined; visible; perceptible.",
  },
  {
    id: "drastr",
    term: "draṣṭṛ",
    transliteration: "draṣṭṛ",
    definition:
      "A seer, one who sees mentally.",
  },
  {
    id: "dravyam",
    term: "dravyam",
    transliteration: "dravyam",
    definition:
      "Creation; thing; substance; object; material ingredient of anything.",
  },
  {
    id: "drdhaniscayah",
    term: "dṛḍhanīścayaḥ",
    transliteration: "dṛḍhanīścayaḥ",
    definition:
      "Firm conclusion.",
  },
  {
    id: "drgdrsyavivekah",
    term: "dṛgdṛśyavivekaḥ",
    transliteration: "dṛgdṛśyavivekaḥ",
    definition:
      "Method of seer-seen inquiry; discrimination between seer and seen.",
  },
  {
    id: "drk",
    term: "dṛk",
    transliteration: "dṛk",
    definition:
      "The seer.",
  },
  {
    id: "drs",
    term: "dṛś",
    transliteration: "dṛś",
    definition:
      "1P. To see, look at, observe; to perceive with the mind, know. paśyati dadarśa.",
  },
  {
    id: "drshikta",
    term: "dṛṣhikta",
    transliteration: "dṛṣhikta",
    definition:
      "Confirmed.",
  },
  {
    id: "drsta",
    term: "dṛṣṭa",
    transliteration: "dṛṣṭa",
    definition:
      "Seen (karmic results); regarded, considered; appearing.",
    relatedTerms: ["dṛṣṭāntaḥ"],
  },
  {
    id: "drstanastavabhavatam",
    term: "dṛṣṭanāṣṭavabhāvatam",
    transliteration: "dṛṣṭanāṣṭavabhāvatam",
    definition:
      "The nature or state of constantly changing while being seen.",
  },
  {
    id: "drstantah",
    term: "dṛṣṭāntaḥ",
    transliteration: "dṛṣṭāntaḥ",
    definition:
      "An example; illustration.",
    relatedTerms: ["dṛṣṭa"],
  },
  {
    id: "drstih",
    term: "dṛṣṭiḥ",
    transliteration: "dṛṣṭiḥ",
    definition:
      "Vision; knowing, knowledge, conclusion, theory, doctrine.",
  },
  {
    id: "drsya",
    term: "dṛśya",
    transliteration: "dṛśya",
    definition:
      "To be seen, visible.",
    relatedTerms: ["dṛśyam"],
  },
  {
    id: "drsyam",
    term: "dṛśyam",
    transliteration: "dṛśyam",
    definition:
      "Object of sight.",
    relatedTerms: ["dṛśya"],
  },
  {
    id: "duhkham",
    term: "duḥkham",
    transliteration: "duḥkham",
    definition:
      "Sorrow, pain, grief; displeasure.",
  },
  {
    id: "dure",
    term: "dūre",
    transliteration: "dūre",
    definition:
      "Far away.",
  },
  {
    id: "duritam",
    term: "duritam",
    transliteration: "duritam",
    definition:
      "An evil; difficulty; danger.",
  },
  {
    id: "durlabha",
    term: "durlabha",
    transliteration: "durlabha",
    definition:
      "Difficult to be attained or accomplished.",
  },
  {
    id: "durvijneya",
    term: "durvijñeya",
    transliteration: "durvijñeya",
    definition:
      "Difficult to understand; e.g. rasta.",
    aliases: ["durvidnyeya"],
  },
  {
    id: "duskrtam",
    term: "duṣkṛtam",
    transliteration: "duṣkṛtam",
    definition:
      "Misdeed; pāpaḥ; adharmaḥ.",
    relatedTerms: ["adharmaḥ"],
  },
  {
    id: "duspura",
    term: "duṣpūra",
    transliteration: "duṣpūra",
    definition:
      "Hard to fulfill, impossible to satisfy, insatiable.",
  },
  {
    id: "dusta",
    term: "duṣṭa",
    transliteration: "duṣṭa",
    definition:
      "Spoiled; damaged; violated; wicked; guilty; faulty.",
  },
  {
    id: "dvaitabhavah",
    term: "dvaitabhāvaḥ",
    transliteration: "dvaitabhāvaḥ",
    definition:
      "Duality, separation into two, difference.",
  },
  {
    id: "dvaitam",
    term: "dvaitam",
    transliteration: "dvaitam",
    definition:
      "Duality; dualism in philosophy, doctrine that spirit and matter are different and real.",
  },
  {
    id: "dvandvam",
    term: "dvandvam",
    transliteration: "dvandvam",
    definition:
      "Pair; compound of two or more things which are translated with 'and'; a type of samāsaḥ.",
    relatedTerms: ["samāsaḥ"],
  },
  {
    id: "dvaram",
    term: "dvāram",
    transliteration: "dvāram",
    definition:
      "Door; entrance; access; means.",
  },
  {
    id: "dvayam",
    term: "dvayam",
    transliteration: "dvayam",
    definition:
      "Two-fold nature; duplicity; pair.",
  },
  {
    id: "dvesah",
    term: "dveṣaḥ",
    transliteration: "dveṣaḥ",
    definition:
      "Dislike; distaste.",
  },
  {
    id: "dvidha",
    term: "dvidhā",
    transliteration: "dvidhā",
    definition:
      "ind. In two parts, in two ways.",
  },
  {
    id: "dvijah",
    term: "dvijaḥ",
    transliteration: "dvijaḥ",
    definition:
      "A brāhmaṇa, kṣatriya, or vaiśya man; twice-born.",
  },
  {
    id: "dvipad",
    term: "dvipad",
    transliteration: "dvipad",
    definition:
      "Two-footed; man.",
  },
  {
    id: "dvitiya",
    term: "dvitīya",
    transliteration: "dvitīya",
    definition:
      "Second; the second of any group or family.",
    relatedTerms: ["advitīya"],
  },
  {
    id: "dyo",
    term: "dyo",
    transliteration: "dyo",
    definition:
      "Nom. sing. The sky; heaven; brightness.",
  },
  {
    id: "dyotana",
    term: "dyotana",
    transliteration: "dyotana",
    definition:
      "Bright, shining, illuminating.",
  },
  {
    id: "dyutih",
    term: "dyutiḥ",
    transliteration: "dyutiḥ",
    definition:
      "Brightness, light.",
  },
  {
    id: "eka",
    term: "eka",
    transliteration: "eka",
    definition:
      "One; alone; identical; unchanged; singular.",
  },
  {
    id: "ekadesa",
    term: "ekadeśa",
    transliteration: "ekadeśa",
    definition:
      "Occupying the same space.",
  },
  {
    id: "ekadesin",
    term: "ekadeśin",
    transliteration: "ekadeśin",
    definition:
      "A disputant who only knows part of the situation.",
  },
  {
    id: "ekagrata",
    term: "ekāgratā",
    transliteration: "ekāgratā",
    definition:
      "Having one object (of pursuit); concentration.",
  },
  {
    id: "ekantena",
    term: "ekāntena",
    transliteration: "ekāntena",
    definition:
      "ind. Totally, wholly; solely, exclusively.",
  },
  {
    id: "ekantika",
    term: "ekāntika",
    transliteration: "ekāntika",
    definition:
      "Final, conclusive.",
  },
  {
    id: "ekarasa",
    term: "ekarasa",
    transliteration: "ekarasa",
    definition:
      "Nothing but that; non-dual.",
  },
  {
    id: "ekata",
    term: "ekatā",
    transliteration: "ekatā",
    definition:
      "Oneness; unity; union; identity.",
  },
  {
    id: "ekibhavah",
    term: "ekibhāvaḥ",
    transliteration: "ekibhāvaḥ",
    definition:
      "Combination, association; common nature.",
  },
  {
    id: "ekibhutah",
    term: "ekībhūtaḥ",
    transliteration: "ekībhūtaḥ",
    definition:
      "The name for ātmā in sleep; jñātāiṣānajñeya as one.",
    relatedTerms: ["ātmā"],
  },
  {
    id: "esana",
    term: "eṣaṇa",
    transliteration: "eṣaṇa",
    definition:
      "Desiring; seeking.",
  },
  {
    id: "eva",
    term: "eva",
    transliteration: "eva",
    definition:
      "Used to emphasize and strengthen the idea expressed by a word. Indeed; truly; exactly.",
  },
  {
    id: "evam",
    term: "evam",
    transliteration: "evam",
    definition:
      "In this way; thus.",
  },
  {
    id: "gaganam",
    term: "gaganam",
    transliteration: "gaganam",
    definition:
      "Sky, atmosphere, space.",
  },
  {
    id: "gah",
    term: "gāh",
    transliteration: "gāh",
    definition:
      "1A. To enter, to dive or plunge into; to agitate.",
  },
  {
    id: "gamanam",
    term: "gamanam",
    transliteration: "gamanam",
    definition:
      "Going; knowledge; motion; approaching.",
  },
  {
    id: "gambhira",
    term: "gambhīra",
    transliteration: "gambhīra",
    definition:
      "Lotus; profound; deep.",
  },
  {
    id: "gambhiryam",
    term: "gāmbhīryam",
    transliteration: "gāmbhīryam",
    definition:
      "Depth of meaning or of water; profound.",
  },
  {
    id: "gami",
    term: "gāmī",
    transliteration: "gāmī",
    definition:
      "The one who goes, the goer.",
  },
  {
    id: "ganah",
    term: "gaṇaḥ",
    transliteration: "gaṇaḥ",
    definition:
      "Group, troop, tribe, collection; series, class; in grammar a of roots or words belonging to the same rule and called after the first word of that series.",
  },
  {
    id: "gananam",
    term: "gaṇanam",
    transliteration: "gaṇanam",
    definition:
      "Counting, calculation; adding; consideration.",
  },
  {
    id: "gandhah",
    term: "gandhaḥ",
    transliteration: "gandhaḥ",
    definition:
      "Smell; arrogance; pride; connection, relationship. Also gandham.",
  },
  {
    id: "gandharvah",
    term: "gandharvaḥ",
    transliteration: "gandharvaḥ",
    definition:
      "A class of demi-gods; celestials regarded as spirited musicians.",
  },
  {
    id: "ganesah",
    term: "gaṇeśaḥ",
    transliteration: "gaṇeśaḥ",
    definition:
      "Lord Gaṇapati; Lord Śiva's son; god of wisdom and remover of obstacles.",
    relatedTerms: ["śiva"],
  },
  {
    id: "garbhah",
    term: "garbhaḥ",
    transliteration: "garbhaḥ",
    definition:
      "Womb; interior chamber; the inside of anything; embryo.",
  },
  {
    id: "garhapatyah",
    term: "gārhapatyaḥ",
    transliteration: "gārhapatyaḥ",
    definition:
      "One of the three sacred fires perpetually maintained by the householder.",
  },
  {
    id: "gata",
    term: "gata",
    transliteration: "gata",
    definition:
      "Gone; past; achieved; arrived at; dead.",
  },
  {
    id: "gatih",
    term: "gatiḥ",
    transliteration: "gatiḥ",
    definition:
      "What you actually want (i.e. mokṣaḥ); going to; end; obtaining; position; state.",
    relatedTerms: ["mokṣaḥ"],
  },
  {
    id: "gauna",
    term: "gauṇa",
    transliteration: "gauṇa",
    definition:
      "Attributive; secondary; indirect; metaphorical, figurative, used in a secondary sense; increase.",
  },
  {
    id: "gaurava",
    term: "gaurava",
    transliteration: "gaurava",
    definition:
      "Complicated; heavy.",
  },
  {
    id: "gayatri",
    term: "gāyatrī",
    transliteration: "gāyatrī",
    definition:
      "Vedic mantra used for initiation and daily worship.",
  },
  {
    id: "ghanah",
    term: "ghanaḥ",
    transliteration: "ghanaḥ",
    definition:
      "Cloud; collection, assemblage; hardness, firmness.",
  },
  {
    id: "ghatah",
    term: "ghaṭaḥ",
    transliteration: "ghaṭaḥ",
    definition:
      "Clay pot; earthen water-jar.",
  },
  {
    id: "ghora",
    term: "ghora",
    transliteration: "ghora",
    definition:
      "Terrible; frightful; awful.",
  },
  {
    id: "ghosah",
    term: "ghoṣaḥ",
    transliteration: "ghoṣaḥ",
    definition:
      "Noise; thunder; proclamation; report.",
  },
  {
    id: "ghotah",
    term: "ghoṭaḥ",
    transliteration: "ghoṭaḥ",
    definition:
      "Horse.",
  },
  {
    id: "ghranam",
    term: "ghrāṇam",
    transliteration: "ghrāṇam",
    definition:
      "Nose; sense of smell.",
  },
  {
    id: "ghrtam",
    term: "ghṛtam",
    transliteration: "ghṛtam",
    definition:
      "Ghee, clarified butter.",
  },
  {
    id: "gita",
    term: "gītā",
    transliteration: "gītā",
    definition:
      "A name given to certain sacred writings in verse which are devoted to particular religious sentiments; Bhagavadgītā.",
  },
  {
    id: "gitib",
    term: "gītib",
    transliteration: "gītib",
    definition:
      "A song.",
  },
  {
    id: "glanih",
    term: "glānih",
    transliteration: "glānih",
    definition:
      "Destruction; exhaustion; decay.",
  },
  {
    id: "go",
    term: "go",
    transliteration: "go",
    definition:
      "A cow; earth; word.",
  },
  {
    id: "gocara",
    term: "gocara",
    transliteration: "gocara",
    definition:
      "Within range of (particularly of the senses); dwelling; grazed by cattle; object.",
    relatedTerms: ["agocara"],
  },
  {
    id: "golakah",
    term: "golakah",
    transliteration: "golakah",
    definition:
      "A ball, globe; eyeball.",
  },
  {
    id: "gosthih",
    term: "gosthīh",
    transliteration: "gosthīh",
    definition:
      "Assembly, meeting.",
  },
  {
    id: "gotram",
    term: "gotram",
    transliteration: "gotram",
    definition:
      "Family headed by a ṛṣi; family.",
  },
  {
    id: "govindah",
    term: "govindah",
    transliteration: "govindah",
    definition:
      "Name of Kṛṣṇa; Bṛhaspati; the one understood by the words of the Veda.",
    relatedTerms: ["kṛṣṇa"],
  },
  {
    id: "grahaka",
    term: "grāhaka",
    transliteration: "grāhaka",
    definition:
      "One who takes or receives.",
  },
  {
    id: "grahanam",
    term: "grahanam",
    transliteration: "grahanam",
    definition:
      "Acquiring; perception; comprehending.",
  },
  {
    id: "grahya",
    term: "grāhya",
    transliteration: "grāhya",
    definition:
      "The object of perception; comprehending; acquiring.",
  },
  {
    id: "gramah",
    term: "grāmah",
    transliteration: "grāmah",
    definition:
      "A town, village.",
  },
  {
    id: "granthah",
    term: "granthah",
    transliteration: "granthah",
    definition:
      "Book; treatise; stringing together, binding; knot.",
  },
  {
    id: "grhasthah",
    term: "gṛhasthah",
    transliteration: "gṛhasthah",
    definition:
      "A married householder; the second of four stages of Vedic life.",
  },
  {
    id: "grhi",
    term: "gṛhī",
    transliteration: "gṛhī",
    definition:
      "Householder.",
  },
  {
    id: "gudha",
    term: "gūḍha",
    transliteration: "gūḍha",
    definition:
      "Hidden, concealed; secret; solitary.",
  },
  {
    id: "guha",
    term: "guhā",
    transliteration: "guhā",
    definition:
      "A cave; the heart.",
  },
  {
    id: "gunah",
    term: "guṇah",
    transliteration: "guṇah",
    definition:
      "Attribute; quality; particular modification; adjective; sattvaṃ rajas tamas as constituents of māyā; knot; the vowels a, e, o.",
    vedantaMeaning:
      "The three constituents of māyā — sattva (knowledge, clarity), rajas (activity, restlessness), and tamas (inertia, concealment). All material manifestation is a combination of these three. The guṇas belong to prakṛti/māyā, not to ātmā. Ātmā is nirguṇa — free from all guṇas. Understanding this distinction is essential to recognizing oneself as actionless, unchanging awareness.",
    relatedTerms: ["sattvam", "rajas", "tamas", "maya"],
    tags: ["quality", "attribute", "nature", "property", "constituent"],
  },
  {
    id: "guruh",
    term: "guruh",
    transliteration: "guruh",
    definition:
      "Remover of ignorance; teacher of ātmavidyā.",
    relatedTerms: ["śraddhā", "jñānam", "vidyā", "upaniṣad"],
    tags: ["teacher", "master", "guide", "mentor", "wisdom"],
  },
  {
    id: "gurukulam",
    term: "gurukulam",
    transliteration: "gurukulam",
    definition:
      "Guru's residence where teaching and study take place.",
  },
  {
    id: "ha",
    term: "hā",
    transliteration: "hā",
    definition:
      "3P. To leave, abandon, give up. hātavya To be given up.",
  },
  {
    id: "hanam",
    term: "hānam",
    transliteration: "hānam",
    definition:
      "Loss; lack, cessation.",
    relatedTerms: ["dhānam"],
  },
  {
    id: "hananam",
    term: "hananam",
    transliteration: "hananam",
    definition:
      "Killing, slaying.",
  },
  {
    id: "hanih",
    term: "hānih",
    transliteration: "hānih",
    definition:
      "Omission; neglect; loss; abandonment; decrease.",
  },
  {
    id: "harah",
    term: "hārah",
    transliteration: "hārah",
    definition:
      "Taking away, removal, seizing.",
  },
  {
    id: "hardam",
    term: "hārdam",
    transliteration: "hārdam",
    definition:
      "Affection; love; will; intention.",
  },
  {
    id: "harsah",
    term: "harṣah",
    transliteration: "harṣah",
    definition:
      "Joy, delight, pleasure.",
  },
  {
    id: "hastah",
    term: "hastah",
    transliteration: "hastah",
    definition:
      "Hand.",
  },
  {
    id: "hasyam",
    term: "hāsyam",
    transliteration: "hāsyam",
    definition:
      "Laughter; mirth; ridicule.",
  },
  {
    id: "hathah",
    term: "haṭhah",
    transliteration: "haṭhah",
    definition:
      "Force; obstinacy; a particular mode of Yoga.",
  },
  {
    id: "havih",
    term: "haviḥ",
    transliteration: "haviḥ",
    definition:
      "Offering; oblation.",
  },
  {
    id: "hetuh",
    term: "hetuh",
    transliteration: "hetuh",
    definition:
      "Cause.",
  },
  {
    id: "hetuka",
    term: "hetuka",
    transliteration: "hetuka",
    definition:
      "Causing, producing; cause.",
  },
  {
    id: "hetumat",
    term: "hetumat",
    transliteration: "hetumat",
    definition:
      "Having a reason or cause; an effect.",
  },
  {
    id: "heya",
    term: "heya",
    transliteration: "heya",
    definition:
      "That which is to be given up.",
  },
  {
    id: "hi",
    term: "hi",
    transliteration: "hi",
    definition:
      "ind. Never at the start of a sentence. Indeed; for; because; for instance.",
  },
  {
    id: "himsa",
    term: "hiṃsā",
    transliteration: "hiṃsā",
    definition:
      "Injury, harm, mischief, hurt.",
  },
  {
    id: "hina",
    term: "hīna",
    transliteration: "hīna",
    definition:
      "Less, lower; left, abandoned; deprived of, without; excluded.",
    relatedTerms: ["vihīna"],
  },
  {
    id: "hiranmayah",
    term: "hiraṇmayah",
    transliteration: "hiraṇmayah",
    definition:
      "Brahmaji.",
  },
  {
    id: "hiranyagarbhah",
    term: "hiraṇyagarbhaḥ",
    transliteration: "hiraṇyagarbhaḥ",
    definition:
      "Name for brahman as the total subtle body; Īśvara.",
    relatedTerms: ["brahman"],
  },
  {
    id: "hita",
    term: "hita",
    transliteration: "hita",
    definition:
      "Placed, taken; suitable; proper; fit; beneficial; wholesome.",
    relatedTerms: ["avasthita", "taddhita"],
  },
  {
    id: "hitoktih",
    term: "hitoktiḥ",
    transliteration: "hitoktiḥ",
    definition:
      "Kindly or friendly advice; pleasing statement.",
  },
  {
    id: "hotr",
    term: "hotṛ",
    transliteration: "hotṛ",
    definition:
      "A principal priest at a sacrifice who recites hymns of the Ṛgveda.",
  },
  {
    id: "hr",
    term: "hṛ",
    transliteration: "hṛ",
    definition:
      "1U. To take; carry; to carry off or away; to captivate. harati jahāra hriyate.",
  },
  {
    id: "hrasva",
    term: "hrasva",
    transliteration: "hrasva",
    definition:
      "Short.",
  },
  {
    id: "hrd",
    term: "hṛd",
    transliteration: "hṛd",
    definition:
      "Heart, buddhi.",
  },
  {
    id: "hrdayagranthih",
    term: "hṛdayagranthiḥ",
    transliteration: "hṛdayagranthiḥ",
    definition:
      "Knot of the heart (i.e. avidyā kāma karma).",
    relatedTerms: ["avidyā", "karma"],
  },
  {
    id: "hrdayam",
    term: "hṛdayam",
    transliteration: "hṛdayam",
    definition:
      "The heart.",
  },
  {
    id: "hrsikesah",
    term: "hṛṣīkeśah",
    transliteration: "hṛṣīkeśah",
    definition:
      "Lord of all the senses; Kṛṣṇa.",
    relatedTerms: ["kṛṣṇa"],
  },
  {
    id: "hutakah",
    term: "hutākah",
    transliteration: "hutākah",
    definition:
      "The fire that accepts the ritual oblations.",
  },
  {
    id: "iccha",
    term: "icchā",
    transliteration: "icchā",
    definition:
      "Desire; wish.",
    tags: ["desire", "wish", "will", "wanting", "longing"],
  },
  {
    id: "icchasaktih",
    term: "icchāśaktiḥ",
    transliteration: "icchāśaktiḥ",
    definition:
      "Power to desire or wish.",
  },
  {
    id: "icchuh",
    term: "icchuh",
    transliteration: "icchuh",
    definition:
      "The one who wishes or desires.",
  },
  {
    id: "ida",
    term: "iḍā",
    transliteration: "iḍā",
    definition:
      "A duct running up the right side of the body.",
  },
  {
    id: "idam",
    term: "idam",
    transliteration: "idam",
    definition:
      "This, here, referring to something near the speaker. ayam iyam.",
  },
  {
    id: "idanim",
    term: "idānīm",
    transliteration: "idānīm",
    definition:
      "Now, at this moment, just now, in this case.",
  },
  {
    id: "idanta",
    term: "idantā",
    transliteration: "idantā",
    definition:
      "Identity; sameness; state of being \"this\"; that which is other than I, other than the subject.",
  },
  {
    id: "iha",
    term: "iha",
    transliteration: "iha",
    definition:
      "ind. Here; in this place or case; in this world.",
  },
  {
    id: "iksanam",
    term: "īkṣaṇam",
    transliteration: "īkṣaṇam",
    definition:
      "Seeing; view; perception; regarding; an eye.",
  },
  {
    id: "indrah",
    term: "indrah",
    transliteration: "indrah",
    definition:
      "The lord of gods; Aryan deity; leader.",
  },
  {
    id: "indriyah",
    term: "indriyah",
    transliteration: "indriyah",
    definition:
      "Sense organ.",
  },
  {
    id: "indriyapratyaksam",
    term: "indriyapratyakṣam",
    transliteration: "indriyapratyakṣam",
    definition:
      "Perception through sense organs.",
  },
  {
    id: "induh",
    term: "induḥ",
    transliteration: "induḥ",
    definition:
      "Deity of the hands - grasping.",
  },
  {
    id: "ipsita",
    term: "īpsita",
    transliteration: "īpsita",
    definition:
      "Desired, wished for.",
  },
  {
    id: "is",
    term: "īś",
    transliteration: "īś",
    definition:
      "6P. To wish, desire; to choose. icchati iṣṭa.",
  },
  {
    id: "isah",
    term: "īśah",
    transliteration: "īśah",
    definition:
      "The Lord.",
  },
  {
    id: "isanah",
    term: "īśānah",
    transliteration: "īśānah",
    definition:
      "The Lord, ruler.",
  },
  {
    id: "isanih",
    term: "iṣaṇiḥ",
    transliteration: "iṣaṇiḥ",
    definition:
      "Wish, desire.",
  },
  {
    id: "isat",
    term: "iṣat",
    transliteration: "iṣat",
    definition:
      "ind. Slightly, to some extent, a little.",
  },
  {
    id: "istam",
    term: "iṣṭam",
    transliteration: "iṣṭam",
    definition:
      "Desired; beloved; worshipped; Vedic ritual or sacrifice (p.p.p. of yaj).",
  },
  {
    id: "istapurtam",
    term: "iṣṭāpūrtam",
    transliteration: "iṣṭāpūrtam",
    definition:
      "Altruistic deeds, acts of charity.",
  },
  {
    id: "isvarah",
    term: "īśvarah",
    transliteration: "īśvarah",
    definition:
      "Lord (Īśvarā); jagatkāraṇam; brahman manifest as the entire creation.",
    vedantaMeaning:
      "Brahman associated with māyā — the all-knowing, all-powerful cause of the creation, sustenance, and dissolution of the universe. Īśvara is not a being separate from Brahman but Brahman viewed from the standpoint of the empirical world. Just as the jīva is Brahman with the upādhi of avidyā, Īśvara is Brahman with the upādhi of māyā. When the upādhis are removed, jīva, Īśvara, and Brahman are one.",
    relatedTerms: ["brahman", "jīvah", "māyā", "jagatkāraṇam"],
    tags: ["god", "lord", "creator", "divine", "supreme"],
  },
  {
    id: "itara",
    term: "itara",
    transliteration: "itara",
    definition:
      "Another, the other (of two); the rest or others, what is left; different from; opposite of.",
  },
  {
    id: "itaretara",
    term: "itaretara",
    transliteration: "itaretara",
    definition:
      "One with another, reciprocal.",
  },
  {
    id: "iti",
    term: "iti",
    transliteration: "iti",
    definition:
      "Ind. A particle used to indicate or refer to words spoken or quoted.",
  },
  {
    id: "itihasah",
    term: "itihāsaḥ",
    transliteration: "itihāsaḥ",
    definition:
      "History (legendary or traditional); how it was.",
  },
  {
    id: "iva",
    term: "iva",
    transliteration: "iva",
    definition:
      "Like; as though.",
  },
  {
    id: "jadam",
    term: "jaḍam",
    transliteration: "jaḍam",
    definition:
      "Inert object.",
  },
  {
    id: "jadih",
    term: "jaḍiḥ",
    transliteration: "jaḍiḥ",
    definition:
      "An assemblage, multitude; clotted hair.",
  },
  {
    id: "jagaritam",
    term: "jāgaritam",
    transliteration: "jāgaritam",
    definition:
      "Waking, waking state.",
  },
  {
    id: "jagatkaranam",
    term: "jagatkāraṇam",
    transliteration: "jagatkāraṇam",
    definition:
      "Cause of the world; Īśvaraḥ.",
    relatedTerms: ["īśvarah"],
  },
  {
    id: "jagradavastha",
    term: "jāgradavasthā",
    transliteration: "jāgradavasthā",
    definition:
      "The waking state.",
  },
  {
    id: "jagrat",
    term: "jāgrat",
    transliteration: "jāgrat",
    definition:
      "Being awake, watching.",
    vedantaMeaning:
      "The waking state — in which the individual (called viśva) experiences the external world through the sense organs and mind. The Māṇḍūkya Upaniṣad analyzes this as the first quarter (pāda) of ātmā. The waking state is characterized by duality — a subject experiencing objects. Vedānta uses the analysis of the three states to show that ātmā is the invariable witness present in all three.",
    relatedTerms: ["upaniṣad", "ātmā", "agra"],
  },
  {
    id: "jahallaksana",
    term: "jahallakṣaṇā",
    transliteration: "jahallakṣaṇā",
    definition:
      "Implication where a word loses its primary sense but is used in some way connected to that sense (e.g. 'a village on the Ganges').",
  },
  {
    id: "jaimini",
    term: "jaimini",
    transliteration: "jaimini",
    definition:
      "Author of pūrvamīmāṃsā.",
  },
  {
    id: "jalam",
    term: "jalam",
    transliteration: "jalam",
    definition:
      "Water.",
  },
  {
    id: "jalanidhih",
    term: "jalanidhiḥ",
    transliteration: "jalanidhiḥ",
    definition:
      "The ocean.",
  },
  {
    id: "jalpavadah",
    term: "jalpavādaḥ",
    transliteration: "jalpavādaḥ",
    definition:
      "Useless discourse, both conversants are certain they are right.",
  },
  {
    id: "jan",
    term: "jan",
    transliteration: "jan",
    definition:
      "To be born, produced. jāyate is born.",
  },
  {
    id: "janakah",
    term: "janakah",
    transliteration: "janakah",
    definition:
      "A father.",
  },
  {
    id: "jangama",
    term: "jaṅgama",
    transliteration: "jaṅgama",
    definition:
      "Moving, mobile, living, movable.",
  },
  {
    id: "janita",
    term: "janita",
    transliteration: "janita",
    definition:
      "Produced; created; happened.",
  },
  {
    id: "janma",
    term: "janma",
    transliteration: "janma",
    definition:
      "Birth, origin.",
  },
  {
    id: "jantuh",
    term: "jantuḥ",
    transliteration: "jantuḥ",
    definition:
      "Creature; beings subject to birth.",
  },
  {
    id: "japah",
    term: "japaḥ",
    transliteration: "japaḥ",
    definition:
      "Mental repetition. Also jāpaḥ.",
  },
  {
    id: "jara",
    term: "jarā",
    transliteration: "jarā",
    definition:
      "Old age; infirmity.",
  },
  {
    id: "jatam",
    term: "jātam",
    transliteration: "jātam",
    definition:
      "A collection of things forming a set or class; living being; production.",
  },
  {
    id: "jatih",
    term: "jātiḥ",
    transliteration: "jātiḥ",
    definition:
      "Family; group; series.",
  },
  {
    id: "jayah",
    term: "jayah",
    transliteration: "jayah",
    definition:
      "Victory, conquest, success, winning; restraint.",
  },
  {
    id: "ji",
    term: "ji",
    transliteration: "ji",
    definition:
      "1P. To conquer, defeat; to be victorious; surpass, exceed; to win; to restrain, control. jayati jita.",
  },
  {
    id: "jihva",
    term: "jihvā",
    transliteration: "jihvā",
    definition:
      "The tongue.",
  },
  {
    id: "jijnasa",
    term: "jijñāsā",
    transliteration: "jijñāsā",
    definition:
      "Desire for knowing; thirst for knowledge.",
    aliases: ["jidnyasa"],
  },
  {
    id: "jijnasuh",
    term: "jijñāsuḥ",
    transliteration: "jijñāsuḥ",
    definition:
      "One who desires ātmavidyā.",
    aliases: ["jidnyasuh"],
  },
  {
    id: "jivah",
    term: "jīvah",
    transliteration: "jīvah",
    definition:
      "The person identified with the physical body; the individual.",
    vedantaMeaning:
      "The individual — ātmā as though limited by the upādhi of avidyā and the subtle body. The jīva is not a separate entity from Brahman but Brahman appearing as limited due to identification with the body-mind. The relationship between jīva and Īśvara is resolved in the mahāvākya: just as the space in a pot (ghaṭākāśa) is not different from total space (mahākāśa), the jīva is not different from Brahman.",
    relatedTerms: ["ātmā", "īśvarah", "avidyā", "sākṣī", "saṃsāra"],
    tags: ["individual", "person", "soul", "being", "embodied"],
  },
  {
    id: "jivana",
    term: "jīvana",
    transliteration: "jīvana",
    definition:
      "Giving life; enlivening.",
  },
  {
    id: "jivanmukta",
    term: "jīvanmukta",
    transliteration: "jīvanmukta",
    definition:
      "The one freed while living.",
  },
  {
    id: "jna",
    term: "jñā",
    transliteration: "jñā",
    definition:
      "To know (in all senses), to learn, become acquainted with. jānāti.",
    aliases: ["dnya"],
  },
  {
    id: "jnanadhyasah",
    term: "jñānadhyāsaḥ",
    transliteration: "jñānadhyāsaḥ",
    definition:
      "See saptavidādhyāsaḥ.",
    aliases: ["dnyanaadhyasah"],
  },
  {
    id: "jnanakandah",
    term: "jñānakāṇḍaḥ",
    transliteration: "jñānakāṇḍaḥ",
    definition:
      "The part of the Vedas dealing with self-knowledge; Upaniṣads.",
    aliases: ["dnyanakandah"],
  },
  {
    id: "jnanam",
    term: "jñānam",
    transliteration: "jñānam",
    definition:
      "Knowledge, abhidhā asaṃdigdhaṃ (not negatable and free from doubt).",
    vedantaMeaning:
      "Self-knowledge — the direct, immediate recognition that ātmā is Brahman. Jñāna is not information about Brahman but the removal of self-ignorance by the words of the Upaniṣads, unfolded by a teacher. It is not a mental state or experience that comes and goes, but a fact that, once known, cannot be unknown. Jñāna is the sole means to mokṣa — no action, meditation, or experience can substitute for it.",
    relatedTerms: ["brahman", "vidyā", "avidyā", "mokṣa"],
    tags: ["knowledge", "wisdom", "understanding", "knowing", "awareness", "clarity"],
    aliases: ["dnyanam"],
  },
  {
    id: "jnananistha",
    term: "jñānaniṣṭhā",
    transliteration: "jñānaniṣṭhā",
    definition:
      "Abiding in the knowledge that is limitless wholeness.",
    aliases: ["dnyananistha"],
  },
  {
    id: "jnanasaktih",
    term: "jñānaśaktiḥ",
    transliteration: "jñānaśaktiḥ",
    definition:
      "Power to know.",
    aliases: ["dnyanashakti"],
  },
  {
    id: "jnanasvarupam",
    term: "jñānasvarūpam",
    transliteration: "jñānasvarūpam",
    definition:
      "The true nature of knowledge (i.e. cit).",
    relatedTerms: ["cit"],
    aliases: ["dnyanasvarupam"],
  },
  {
    id: "jnanayogah",
    term: "jñānayogaḥ",
    transliteration: "jñānayogaḥ",
    definition:
      "A life devoted to knowledge and free of life's roles; saṃnyāsaḥ.",
    vedantaMeaning:
      "The path of knowledge — a life wholly dedicated to self-inquiry through śravaṇa, manana, and nididhyāsana, typically in the context of sannyāsa. In the Gītā, Kṛṣṇa presents jñāna-yoga as the direct means to mokṣa for one whose mind has been prepared by karma-yoga. It is not mere study but the living pursuit of the truth 'I am Brahman' under the guidance of a teacher.",
    aliases: ["dnyanayogah"],
    relatedTerms: ["gītā", "kṛṣṇa", "mokṣa", "karma", "brahman"],
  },
  {
    id: "jnanendriyah",
    term: "jñānendriyaḥ",
    transliteration: "jñānendriyaḥ",
    definition:
      "The organs of perception: skin, tongue, eyes, ears, nose.",
    aliases: ["dnyanaendriyah"],
  },
  {
    id: "jnani",
    term: "jñānī",
    transliteration: "jñānī",
    definition:
      "The knower of brahman.",
    relatedTerms: ["brahman"],
    aliases: ["dnyani"],
  },
  {
    id: "jnapaka",
    term: "jñāpaka",
    transliteration: "jñāpaka",
    definition:
      "Making known; teaching. jñāpakah A teacher. jñāpakam Precept; suggestive rule.",
    aliases: ["dnyapaka"],
  },
  {
    id: "jnaptih",
    term: "jñaptiḥ",
    transliteration: "jñaptiḥ",
    definition:
      "Understanding; pure awareness; svarūpa of the knower.",
    aliases: ["dnyaptih"],
  },
  {
    id: "jnata",
    term: "jñāta",
    transliteration: "jñāta",
    definition:
      "Known, ascertained; comprehended.",
    aliases: ["dnyata"],
  },
  {
    id: "jneya",
    term: "jñeya",
    transliteration: "jñeya",
    definition:
      "To be investigated or learned or understood; perceptible, cognizable.",
    aliases: ["dnyeya"],
    relatedTerms: ["vijñeya"],
  },
  {
    id: "jvarah",
    term: "jvaraḥ",
    transliteration: "jvaraḥ",
    definition:
      "Temperature; anxiety; concern; anger; frustration.",
  },
  {
    id: "jyestha",
    term: "jyeṣṭha",
    transliteration: "jyeṣṭha",
    definition:
      "Eldest; senior; best.",
  },
  {
    id: "jyotih",
    term: "jyotiḥ",
    transliteration: "jyotiḥ",
    definition:
      "Awareness; light; brightness.",
  },
  {
    id: "jyotisam",
    term: "jyotiṣam",
    transliteration: "jyotiṣam",
    definition:
      "Discipline of astronomy and astrology - one of the six Vedāṅgas.",
  },
  {
    id: "jyotistomah",
    term: "jyotiṣṭomaḥ",
    transliteration: "jyotiṣṭomaḥ",
    definition:
      "A kind of soma sacrifice requiring sixteen priests.",
  },
  {
    id: "kaimutika",
    term: "kaimutika",
    transliteration: "kaimutika",
    definition:
      "'How much more' (a nyāya maxim), 'what to talk of'.",
  },
  {
    id: "kaivalyam",
    term: "kaivalyam",
    transliteration: "kaivalyam",
    definition:
      "Perfect isolation; identification with the supreme spirit; mokṣaḥ.",
    relatedTerms: ["mokṣaḥ"],
  },
  {
    id: "kala",
    term: "kalā",
    transliteration: "kalā",
    definition:
      "A sixteenth part; a small part of anything; facet; feature.",
    relatedTerms: ["sakala"],
  },
  {
    id: "kalah",
    term: "kālaḥ",
    transliteration: "kālaḥ",
    definition:
      "Time.",
    relatedTerms: ["kalahaḥ"],
  },
  {
    id: "kalahah",
    term: "kalahaḥ",
    transliteration: "kalahaḥ",
    definition:
      "Quarrel, strife; battle; deceit.",
    relatedTerms: ["kālaḥ"],
  },
  {
    id: "kalanjam",
    term: "kalañjam",
    transliteration: "kalañjam",
    definition:
      "The flesh of an animal.",
  },
  {
    id: "kalasam",
    term: "kalaśam",
    transliteration: "kalaśam",
    definition:
      "A pitcher, water-pot; rounded pinnacle at the top of a temple.",
  },
  {
    id: "kalatrayah",
    term: "kālatrayah",
    transliteration: "kālatrayah",
    definition:
      "The three periods of time: past, present, future.",
  },
  {
    id: "kalpah",
    term: "kalpaḥ",
    transliteration: "kalpaḥ",
    definition:
      "Rule; proposal; resolve; procedure; a day of Brahmāji - 432 million years; a termination added in the sense of 'a little less than', 'nearly equal to'.",
    relatedTerms: ["vikalpaḥ"],
  },
  {
    id: "kalpam",
    term: "kalpam",
    transliteration: "kalpam",
    definition:
      "Science of prescribed rules for rituals - one of the six Vedāṅgas.",
  },
  {
    id: "kalpanam",
    term: "kalpanām",
    transliteration: "kalpanām",
    definition:
      "Speculation; imagination; device; set up.",
  },
  {
    id: "kalpita",
    term: "kalpita",
    transliteration: "kalpita",
    definition:
      "Superimposed; formed; imagined; visualized; mithyat.",
    relatedTerms: ["kalpitam"],
  },
  {
    id: "kalpitam",
    term: "kalpitam",
    transliteration: "kalpitam",
    definition:
      "Duality.",
    relatedTerms: ["kalpita"],
  },
  {
    id: "kalusam",
    term: "kaluṣam",
    transliteration: "kaluṣam",
    definition:
      "Impurity; dirt.",
  },
  {
    id: "kalyana",
    term: "kalyāṇa",
    transliteration: "kalyāṇa",
    definition:
      "Fortunate; beautiful; auspicious.",
  },
  {
    id: "kam",
    term: "kam",
    transliteration: "kam",
    definition:
      "To love; to desire. kāmayate is desired.",
  },
  {
    id: "kamah",
    term: "kāmah",
    transliteration: "kāmah",
    definition:
      "Pleasure; object of desire; desire.",
  },
  {
    id: "kamakami",
    term: "kāmakāmī",
    transliteration: "kāmakāmī",
    definition:
      "One who follows the dictates of passion; one who desires pleasures; saṃsārt.",
  },
  {
    id: "kamandalu",
    term: "kamaṇḍalu",
    transliteration: "kamaṇḍalu",
    definition:
      "Begging bowl; a liṅgam of a sādhu.",
    relatedTerms: ["liṅgam", "sādhu"],
  },
  {
    id: "kamyakarma",
    term: "kāmyakarma",
    transliteration: "kāmyakarma",
    definition:
      "Action (ritual) performed for producing a desired result - one of four vaidikakarmā.",
  },
  {
    id: "kapala",
    term: "kapāla",
    transliteration: "kapāla",
    definition:
      "Relating to skulls.",
  },
  {
    id: "kaphah",
    term: "kaphah",
    transliteration: "kaphah",
    definition:
      "Phlegm; one of the three body-elements of Āyurvedic medicine.",
  },
  {
    id: "kara",
    term: "kara",
    transliteration: "kara",
    definition:
      "(At the end of comp.) Maker; doer.",
    relatedTerms: ["karaṇam"],
  },
  {
    id: "karah",
    term: "kāraḥ",
    transliteration: "kāraḥ",
    definition:
      "A term denoting the letter it is affixed to.",
    relatedTerms: ["vikāraḥ"],
  },
  {
    id: "karakam",
    term: "kārakam",
    transliteration: "kārakam",
    definition:
      "The relation between a noun and a verb in a sentence - corresponding to the grammatical cases less the genitive.",
  },
  {
    id: "karanam",
    term: "karaṇam",
    transliteration: "karaṇam",
    definition:
      "Action; sense organ; sense; sense expressed by the instrumental case.",
    relatedTerms: ["kara"],
  },
  {
    id: "karayitr",
    term: "kārayitṛ",
    transliteration: "kārayitṛ",
    definition:
      "Causing to do, perform, effect.",
  },
  {
    id: "karika",
    term: "kārikā",
    transliteration: "kārikā",
    definition:
      "Independent exposition; text; collection of verses.",
  },
  {
    id: "karin",
    term: "kārin",
    transliteration: "kārin",
    definition:
      "Fashioner; maker; doing.",
  },
  {
    id: "karma",
    term: "karma",
    transliteration: "karma",
    definition:
      "Nom. sing. karma. Action from free will; certain consequences of action; duty.",
    vedantaMeaning:
      "Action and its results. Every deliberate action produces a result (phala) governed by the law of dharma. Accumulated karma — puṇya (merit) and pāpa (demerit) — drives the cycle of saṃsāra. Vedānta teaches that no amount of karma can produce mokṣa, because action produces only finite results. Knowledge alone reveals that ātmā is ever-free and was never a doer (akartā).",
    relatedTerms: ["dharmaḥ", "saṃsāra", "mokṣa", "yogaḥ"],
    tags: ["action", "deed", "consequence", "cause", "effect", "result", "duty"],
  },
  {
    id: "karmakandah",
    term: "karmakāṇḍaḥ",
    transliteration: "karmakāṇḍaḥ",
    definition:
      "The part of the Veda dealing with rituals and results.",
  },
  {
    id: "karmaphaladata",
    term: "karmaphaladatā",
    transliteration: "karmaphaladatā",
    definition:
      "Īśvaraḥ as the giver of the fruits of action.",
    relatedTerms: ["īśvarah"],
  },
  {
    id: "karmayogah",
    term: "karmayogaḥ",
    transliteration: "karmayogaḥ",
    definition:
      "A life devoted to knowledge including performance of life's roles.",
    vedantaMeaning:
      "The yoga of action — performing one's duties with the attitude of offering to Īśvara (īśvarārpaṇa-buddhi) and accepting the results with equanimity as the Lord's grace (prasāda-buddhi). Karma-yoga does not produce mokṣa directly but purifies the mind (citta-śuddhi), making it fit for self-knowledge. In the Gītā, karma-yoga is the primary sādhana for preparing the mind for jñāna-yoga.",
    relatedTerms: ["karma", "mokṣa", "citta", "gītā"],
  },
  {
    id: "karmendriyah",
    term: "karmendriyaḥ",
    transliteration: "karmendriyaḥ",
    definition:
      "Organ of action.",
  },
  {
    id: "karnah",
    term: "karṇaḥ",
    transliteration: "karṇaḥ",
    definition:
      "The ear.",
  },
  {
    id: "karpanyam",
    term: "kārpaṇyam",
    transliteration: "kārpaṇyam",
    definition:
      "Poverty; miserliness.",
  },
  {
    id: "karsapanah",
    term: "kārṣāpaṇaḥ",
    transliteration: "kārṣāpaṇaḥ",
    definition:
      "A coin or weight.",
  },
  {
    id: "karta",
    term: "kartā",
    transliteration: "kartā",
    definition:
      "The doer; the jīvaḥ.",
    relatedTerms: ["jīvah"],
  },
  {
    id: "karuna",
    term: "karuṇā",
    transliteration: "karuṇā",
    definition:
      "Compassion; empathy; understanding.",
    tags: ["compassion", "mercy", "empathy", "kindness", "grace"],
  },
  {
    id: "karya",
    term: "kārya",
    transliteration: "kārya",
    definition:
      "Object; what is to be done; product; effect.",
    relatedTerms: ["akārya"],
  },
  {
    id: "karyakaranasambandhah",
    term: "kāryakāraṇasambandhaḥ",
    transliteration: "kāryakāraṇasambandhaḥ",
    definition:
      "Relation of cause and effect.",
  },
  {
    id: "kasayah",
    term: "kaṣāyaḥ",
    transliteration: "kaṣāyaḥ",
    definition:
      "Stain; coloration of the mind.",
  },
  {
    id: "kasmalam",
    term: "kaśmalam",
    transliteration: "kaśmalam",
    definition:
      "Depression; despair.",
  },
  {
    id: "katara",
    term: "katara",
    transliteration: "katara",
    definition:
      "Who or which of two.",
  },
  {
    id: "kathanam",
    term: "kathanam",
    transliteration: "kathanam",
    definition:
      "Narration; description.",
  },
  {
    id: "kaupinam",
    term: "kaupīnam",
    transliteration: "kaupīnam",
    definition:
      "Undergarment, loincloth.",
  },
  {
    id: "kausalam",
    term: "kauśalam",
    transliteration: "kauśalam",
    definition:
      "The disposition of discretion; expertise; well-being; skill.",
  },
  {
    id: "kausalyam",
    term: "kauśalyam",
    transliteration: "kauśalyam",
    definition:
      "Skill; skillfulness.",
  },
  {
    id: "kavih",
    term: "kaviḥ",
    transliteration: "kaviḥ",
    definition:
      "Poet.",
  },
  {
    id: "kayah",
    term: "kāyah",
    transliteration: "kāyah",
    definition:
      "The body; collection.",
  },
  {
    id: "kayika",
    term: "kāyika",
    transliteration: "kāyika",
    definition:
      "Relating to the body.",
  },
  {
    id: "kesah",
    term: "keśaḥ",
    transliteration: "keśaḥ",
    definition:
      "Hair; hair of the head.",
  },
  {
    id: "kesava",
    term: "keśava",
    transliteration: "keśava",
    definition:
      "Having much or luxurious hair. keśavaḥ An epithet of Viṣṇu.",
  },
  {
    id: "kevala",
    term: "kevala",
    transliteration: "kevala",
    definition:
      "Whole; absolute; perfect; peculiar; pure; simple; only one; non-dual.",
  },
  {
    id: "khalu",
    term: "khalu",
    transliteration: "khalu",
    definition:
      "ind. Indeed, certainly.",
  },
  {
    id: "khilah",
    term: "khilaḥ",
    transliteration: "khilaḥ",
    definition:
      "Fraction.",
  },
  {
    id: "khyatih",
    term: "khyātiḥ",
    transliteration: "khyātiḥ",
    definition:
      "Knowledge; fame; name; title.",
  },
  {
    id: "kila",
    term: "kila",
    transliteration: "kila",
    definition:
      "ind. Verily, indeed, certainly; as they say.",
  },
  {
    id: "kiranah",
    term: "kiraṇaḥ",
    transliteration: "kiraṇaḥ",
    definition:
      "A ray.",
  },
  {
    id: "kirtih",
    term: "kīrtiḥ",
    transliteration: "kīrtiḥ",
    definition:
      "Fame; light.",
  },
  {
    id: "kirtita",
    term: "kīrtita",
    transliteration: "kīrtita",
    definition:
      "Said, asserted.",
  },
  {
    id: "klesah",
    term: "kleśaḥ",
    transliteration: "kleśaḥ",
    definition:
      "Suffering; pain; anger.",
  },
  {
    id: "klp",
    term: "kḷp",
    transliteration: "kḷp",
    definition:
      "To be fit or adequate; to bring about, accomplish, produce. kalpate Causative - kalpayati.",
  },
  {
    id: "klpta",
    term: "kḷpta",
    transliteration: "kḷpta",
    definition:
      "Arranged, prepared, done; caused, produced; fixed.",
  },
  {
    id: "kopah",
    term: "kopaḥ",
    transliteration: "kopaḥ",
    definition:
      "Anger, passion.",
  },
  {
    id: "kosah",
    term: "kośaḥ",
    transliteration: "kośaḥ",
    definition:
      "Sheath (five of which as though cover ātmā); treasury; dictionary.",
    vedantaMeaning:
      "The five sheaths (pañcakośa) that seemingly cover ātmā: annamaya (food/physical), prāṇamaya (vital breath), manomaya (mind), vijñānamaya (intellect), and ānandamaya (bliss). The Taittirīya Upaniṣad uses the kośa model to guide the student inward — each sheath is progressively subtler, and ātmā is recognized as distinct from and pervading all five. The sheaths are not layers to be removed but misconceptions to be resolved.",
    relatedTerms: ["ātmā"],
  },
  {
    id: "kotih",
    term: "koṭiḥ",
    transliteration: "koṭiḥ",
    definition:
      "End, extremity; highest point; one side of a question or a dispute; a contention.",
  },
  {
    id: "kr",
    term: "kṛ",
    transliteration: "kṛ",
    definition:
      "To do; to make, prepare, manufacture; to form, build; to perform. karoti kuruṇte cakāra akṛta.",
  },
  {
    id: "kramah",
    term: "kramaḥ",
    transliteration: "kramaḥ",
    definition:
      "Order; regular course; steps.",
  },
  {
    id: "kramamuktih",
    term: "kramamuktiḥ",
    transliteration: "kramamuktiḥ",
    definition:
      "Gradual liberation.",
  },
  {
    id: "kratuh",
    term: "kratuḥ",
    transliteration: "kratuḥ",
    definition:
      "Sacrifice.",
  },
  {
    id: "krecchrah",
    term: "krecchraḥ",
    transliteration: "krecchraḥ",
    definition:
      "Penance; tapas; trouble; hardship.",
    relatedTerms: ["tapas"],
  },
  {
    id: "krida",
    term: "krīḍā",
    transliteration: "krīḍā",
    definition:
      "Pleasure; play using external objects.",
  },
  {
    id: "kriya",
    term: "kriyā",
    transliteration: "kriyā",
    definition:
      "An action; doing.",
    relatedTerms: ["kriyāvān", "karma"],
    tags: ["action", "activity", "doing", "ritual", "practice"],
  },
  {
    id: "kriyasaktih",
    term: "kriyāśaktiḥ",
    transliteration: "kriyāśaktiḥ",
    definition:
      "Power to do act.",
  },
  {
    id: "kriyavan",
    term: "kriyāvān",
    transliteration: "kriyāvān",
    definition:
      "One endowed with or capable of activity.",
    relatedTerms: ["kriyā"],
  },
  {
    id: "krodhah",
    term: "krodhaḥ",
    transliteration: "krodhaḥ",
    definition:
      "Anger.",
  },
  {
    id: "krpa",
    term: "kṛpā",
    transliteration: "kṛpā",
    definition:
      "Grace; compassion.",
  },
  {
    id: "krpana",
    term: "kṛpaṇa",
    transliteration: "kṛpaṇa",
    definition:
      "Miserly; helpless; pitiable; unable to discriminate.",
  },
  {
    id: "krs",
    term: "kṛṣ",
    transliteration: "kṛṣ",
    definition:
      "1P. To draw, drag; draw towards oneself. karṣati.",
  },
  {
    id: "krsna",
    term: "kṛṣṇa",
    transliteration: "kṛṣṇa",
    definition:
      "Black, dark. Kṛṣṇaḥ Deity Viṣṇu in his eighth incarnation; hero of Indian mythology and teacher in the Bhagavadgītā.",
  },
  {
    id: "krt",
    term: "kṛt",
    transliteration: "kṛt",
    definition:
      "Maker; doer; composer; a class of affixes used to form derivatives from roots.",
  },
  {
    id: "krta",
    term: "kṛta",
    transliteration: "kṛta",
    definition:
      "Done, made, accomplished.",
  },
  {
    id: "krtarthah",
    term: "kṛtārthaḥ",
    transliteration: "kṛtārthaḥ",
    definition:
      "One who has achieved his purpose.",
  },
  {
    id: "krtsna",
    term: "kṛtsna",
    transliteration: "kṛtsna",
    definition:
      "All; whole; entire.",
  },
  {
    id: "ksam",
    term: "kṣam",
    transliteration: "kṣam",
    definition:
      "The earth, ground.",
    relatedTerms: ["kṣamā"],
  },
  {
    id: "ksama",
    term: "kṣamā",
    transliteration: "kṣamā",
    definition:
      "Patient; enduring; competent; proper; forgiving.",
    tags: ["forgiveness", "patience", "forbearance", "tolerance"],
    relatedTerms: ["kṣam"],
  },
  {
    id: "ksanika",
    term: "kṣaṇika",
    transliteration: "kṣaṇika",
    definition:
      "Momentary; transient.",
  },
  {
    id: "ksantih",
    term: "kṣāntiḥ",
    transliteration: "kṣāntiḥ",
    definition:
      "Accommodation, patience, forebearance, forgiveness; saintly abstraction.",
  },
  {
    id: "ksatriyah",
    term: "kṣatriyaḥ",
    transliteration: "kṣatriyaḥ",
    definition:
      "A member of the military or second class.",
  },
  {
    id: "ksayah",
    term: "kṣayaḥ",
    transliteration: "kṣayaḥ",
    definition:
      "Loss; decay; removal; disease.",
  },
  {
    id: "ksemah",
    term: "kṣemaḥ",
    transliteration: "kṣemaḥ",
    definition:
      "Protecting what you have; well-being; peace; retaining what is valuable.",
  },
  {
    id: "ksetram",
    term: "kṣetram",
    transliteration: "kṣetram",
    definition:
      "Place; field; arena.",
  },
  {
    id: "ksi",
    term: "kṣi",
    transliteration: "kṣi",
    definition:
      "1P. To decay or waste; be diminished; passive kṣīyate.",
  },
  {
    id: "ksina",
    term: "kṣīṇa",
    transliteration: "kṣīṇa",
    definition:
      "Diminished, thin, small, weak.",
    relatedTerms: ["dakṣiṇa"],
  },
  {
    id: "ksirah",
    term: "kṣīraḥ",
    transliteration: "kṣīraḥ",
    definition:
      "Milk; milky tree sap.",
  },
  {
    id: "ksobhanam",
    term: "kṣobhaṇam",
    transliteration: "kṣobhaṇam",
    definition:
      "Agitating, disturbing.",
  },
  {
    id: "ksudra",
    term: "kṣudra",
    transliteration: "kṣudra",
    definition:
      "Minute, small, trifling, mean; poor; short.",
    relatedTerms: ["purī"],
  },
  {
    id: "kukkuti",
    term: "kukkuṭī",
    transliteration: "kukkuṭī",
    definition:
      "A hen.",
  },
  {
    id: "kulam",
    term: "kulam",
    transliteration: "kulam",
    definition:
      "Race; family; community.",
  },
  {
    id: "kumarah",
    term: "kumāraḥ",
    transliteration: "kumāraḥ",
    definition:
      "Son; boy; youth.",
  },
  {
    id: "kumbhah",
    term: "kumbhaḥ",
    transliteration: "kumbhaḥ",
    definition:
      "A pitcher, water-pot, jar.",
  },
  {
    id: "kumbhakah",
    term: "kumbhakah",
    transliteration: "kumbhakah",
    definition:
      "A Yoga exercise stopping the breath with one's fingers.",
  },
  {
    id: "kundalini",
    term: "kuṇḍalinī",
    transliteration: "kuṇḍalinī",
    definition:
      "Yogic force said to be coiled at base of spine and tapped by disciplines.",
  },
  {
    id: "kusah",
    term: "kuśaḥ",
    transliteration: "kuśaḥ",
    definition:
      "A kind of grass considered holy and essential for use in rituals.",
  },
  {
    id: "kusalam",
    term: "kuśalam",
    transliteration: "kuśalam",
    definition:
      "Discretion; ability to interpret dharma; a happy or prosperous condition; skillful, clever; auspicious.",
  },
  {
    id: "kutastha",
    term: "kūṭastha",
    transliteration: "kūṭastha",
    definition:
      "Immovable; perpetually the same.",
    relatedTerms: ["kūṭasthah"],
  },
  {
    id: "kutasthah",
    term: "kūṭasthah",
    transliteration: "kūṭasthah",
    definition:
      "Anvil.",
    relatedTerms: ["kūṭastha"],
  },
  {
    id: "kuticakah",
    term: "kuṭīcakaḥ",
    transliteration: "kuṭīcakaḥ",
    definition:
      "A saṃnyāsī who devotes himself to meditation and tapas after entrusting care of his family to his son.",
    relatedTerms: ["tapas"],
  },
  {
    id: "labhah",
    term: "lābhaḥ",
    transliteration: "lābhaḥ",
    definition:
      "Gaining; obtaining; acquisition; profit.",
  },
  {
    id: "laghava",
    term: "laghava",
    transliteration: "laghava",
    definition:
      "Simple; lightweight.",
    relatedTerms: ["lāghavam"],
  },
  {
    id: "laghavam",
    term: "lāghavam",
    transliteration: "lāghavam",
    definition:
      "Smallness; thoughtlessness; disrespect, contempt; quickness; ease; versatility.",
    relatedTerms: ["laghava"],
  },
  {
    id: "laksana",
    term: "lakṣaṇā",
    transliteration: "lakṣaṇā",
    definition:
      "Definition; attribute; quality; mark.",
    relatedTerms: ["vilakṣaṇam"],
  },
  {
    id: "laksanya",
    term: "lakṣaṇya",
    transliteration: "lakṣaṇya",
    definition:
      "Serving as a mark, having good marks.",
  },
  {
    id: "laksita",
    term: "lakṣita",
    transliteration: "lakṣita",
    definition:
      "Indicated; aimed at.",
    relatedTerms: ["akṣita", "śīta"],
  },
  {
    id: "laksmi",
    term: "lakṣmī",
    transliteration: "lakṣmī",
    definition:
      "Fortune, wealth, prosperity; the goddess of fortune; wife of Viṣṇu.",
  },
  {
    id: "laksyam",
    term: "lakṣyam",
    transliteration: "lakṣyam",
    definition:
      "Intended or implied meaning.",
  },
  {
    id: "lamba",
    term: "lamba",
    transliteration: "lamba",
    definition:
      "Dangling, hanging down; attached.",
  },
  {
    id: "laukika",
    term: "laukika",
    transliteration: "laukika",
    definition:
      "Worldly.",
  },
  {
    id: "lavah",
    term: "lavaḥ",
    transliteration: "lavaḥ",
    definition:
      "Fraction; portion.",
  },
  {
    id: "layah",
    term: "layaḥ",
    transliteration: "layaḥ",
    definition:
      "Mental absorption with return - as in deep sleep; sloth; dissolution as part of cycle of creation.",
  },
  {
    id: "lesah",
    term: "leśaḥ",
    transliteration: "leśaḥ",
    definition:
      "Portion; remainder; a small bit; leftover.",
  },
  {
    id: "li",
    term: "lī",
    transliteration: "lī",
    definition:
      "To stick or adhere to; to be dissolved; melt away. na līyate Does not dissolve.",
  },
  {
    id: "lila",
    term: "līlā",
    transliteration: "līlā",
    definition:
      "Play; sport; diversion; pleasure.",
  },
  {
    id: "lina",
    term: "līna",
    transliteration: "līna",
    definition:
      "Completely absorbed; dissolved, unmanifest.",
    relatedTerms: ["vilīna"],
  },
  {
    id: "lingam",
    term: "liṅgam",
    transliteration: "liṅgam",
    definition:
      "That by which you understand something else; a form that indicates all forms; the form by which one knows Śiva; subtle; the basis for a conclusion.",
    relatedTerms: ["śiva"],
  },
  {
    id: "lipih",
    term: "lipiḥ",
    transliteration: "lipiḥ",
    definition:
      "Writing, hand-writing; written characters, alphabet; document, a writing.",
  },
  {
    id: "lipta",
    term: "lipta",
    transliteration: "lipta",
    definition:
      "Stained; covered.",
  },
  {
    id: "lobhah",
    term: "lobhaḥ",
    transliteration: "lobhaḥ",
    definition:
      "Miserliness; greed; avarice.",
  },
  {
    id: "lohah",
    term: "lohaḥ",
    transliteration: "lohaḥ",
    definition:
      "Any metal; copper; gold; iron.",
  },
  {
    id: "lohita",
    term: "lohita",
    transliteration: "lohita",
    definition:
      "Red, red-colored.",
  },
  {
    id: "lokah",
    term: "lokaḥ",
    transliteration: "lokaḥ",
    definition:
      "The world; a division of the universe; a heaven; common or worldly (as opposed to Vedic) usage or idiom.",
  },
  {
    id: "lolupa",
    term: "lolupa",
    transliteration: "lolupa",
    definition:
      "Very eager; desirous; ardently longing for.",
  },
  {
    id: "lopah",
    term: "lopaḥ",
    transliteration: "lopaḥ",
    definition:
      "Loss; taking away; disappearance; cancellation.",
  },
  {
    id: "madah",
    term: "madaḥ",
    transliteration: "madaḥ",
    definition:
      "Vanity, pride, arrogance.",
  },
  {
    id: "madhu",
    term: "madhu",
    transliteration: "madhu",
    definition:
      "Sweet; pleasant; soon; honey.",
    relatedTerms: ["madhura"],
  },
  {
    id: "madhura",
    term: "madhura",
    transliteration: "madhura",
    definition:
      "Attractive, agreeable; sweet.",
    relatedTerms: ["madhu"],
  },
  {
    id: "madhya",
    term: "madhya",
    transliteration: "madhya",
    definition:
      "Middle; central; intermediate.",
    relatedTerms: ["madhyamikā"],
  },
  {
    id: "madhyamabhagah",
    term: "madhyamabhāgaḥ",
    transliteration: "madhyamabhāgaḥ",
    definition:
      "The trunk.",
  },
  {
    id: "madhyamaguruh",
    term: "madhyamaguruḥ",
    transliteration: "madhyamaguruḥ",
    definition:
      "A teacher of brahmavidyā who is a knower of śāstra but who is not a brahmaniṣṭhaḥ.",
    relatedTerms: ["brahmavidyā"],
  },
  {
    id: "madhyamika",
    term: "madhyamikā",
    transliteration: "madhyamikā",
    definition:
      "Name of a Buddhist school.",
    relatedTerms: ["madhya"],
  },
  {
    id: "madiya",
    term: "madīya",
    transliteration: "madīya",
    definition:
      "My, mine, belonging to me.",
  },
  {
    id: "maghavan",
    term: "maghavan",
    transliteration: "maghavan",
    definition:
      "Name of Indra.",
  },
  {
    id: "mahabhasyakarah",
    term: "mahābhāṣyakāraḥ",
    transliteration: "mahābhāṣyakāraḥ",
    definition:
      "Patañjali - a commentator on Pāṇini's sūtras on Saṃskṛit grammar.",
  },
  {
    id: "mahah",
    term: "mahaḥ",
    transliteration: "mahaḥ",
    definition:
      "A word for the whole - called the fourth vyāhṛti.",
  },
  {
    id: "mahat",
    term: "mahat",
    transliteration: "mahat",
    definition:
      "Great; large; chief; mahat Substitute for mahat at beginning of compounds.",
  },
  {
    id: "mahavakyam",
    term: "mahāvākyam",
    transliteration: "mahāvākyam",
    definition:
      "A sentence which reveals the self (e.g. tat tvam asi - you are that); abhiṇārtha bodhika.",
    relatedTerms: ["bodhikā"],
  },
  {
    id: "mahiman",
    term: "mahiman",
    transliteration: "mahiman",
    definition:
      "Glory; majesty; might; power; exalted position.",
  },
  {
    id: "mala",
    term: "mālā",
    transliteration: "mālā",
    definition:
      "Necklace; garland; liṅga of a sādhu.",
    relatedTerms: ["sādhu"],
  },
  {
    id: "malah",
    term: "malaḥ",
    transliteration: "malaḥ",
    definition:
      "also malam Impurity; dirt.",
  },
  {
    id: "malina",
    term: "malina",
    transliteration: "malina",
    definition:
      "Impaired by rajas or tamas; unclean.",
    relatedTerms: ["rajas", "tamas"],
  },
  {
    id: "mamatvam",
    term: "mamatvam",
    transliteration: "mamatvam",
    definition:
      "Sense of ownership; regarding as 'mine' or one's own.",
  },
  {
    id: "manah",
    term: "mānaḥ",
    transliteration: "mānaḥ",
    definition:
      "Proof; means of proof.",
  },
  {
    id: "mananam",
    term: "mananam",
    transliteration: "mananam",
    definition:
      "Reasoning; analysis; thinking about the teaching.",
  },
  {
    id: "mananasilah",
    term: "mananāśīlaḥ",
    transliteration: "mananāśīlaḥ",
    definition:
      "The one disposed to proper thinking; manuḥ.",
  },
  {
    id: "manas",
    term: "manas",
    transliteration: "manas",
    definition:
      "Mind - doubt, desire, emotion, perception, ego, memory; see buddhiḥ.",
    vedantaMeaning:
      "The aspect of the antaḥkaraṇam whose function is saṅkalpa-vikalpa — deliberation, doubt, and emotional response. Manas receives sense data and oscillates between possibilities. It is the seat of desire (kāma) and volition. In Vedānta, the mind is not the self but an instrument — like the eye is an instrument of seeing, the mind is an instrument of thinking, illumined by consciousness (caitanyam).",
    relatedTerms: ["buddhiḥ", "ahaṅkāraḥ", "cittam", "antaḥkaraṇam"],
    tags: ["mind", "emotion", "desire", "doubt", "perception", "thinking"],
  },
  {
    id: "manasa",
    term: "mānasa",
    transliteration: "mānasa",
    definition:
      "Pertaining to the mind; mental.",
    relatedTerms: ["manas"],
  },
  {
    id: "manda",
    term: "manda",
    transliteration: "manda",
    definition:
      "Dull-witted; slow; ignorant.",
    relatedTerms: ["maṇḍala"],
  },
  {
    id: "mandala",
    term: "maṇḍala",
    transliteration: "maṇḍala",
    definition:
      "Round; circular. maṇḍalam Circle; wheel; ring; globe; disc.",
    relatedTerms: ["manda"],
  },
  {
    id: "mangalam",
    term: "maṅgalam",
    transliteration: "maṅgalam",
    definition:
      "Prayer; good fortune; blessing; auspicious beginning.",
  },
  {
    id: "manisina",
    term: "manīṣiṇa",
    transliteration: "manīṣiṇa",
    definition:
      "Wise, learned.",
  },
  {
    id: "manja",
    term: "mañja",
    transliteration: "mañja",
    definition:
      "Intelligence; understanding; desire; wish.",
  },
  {
    id: "mano-niyamah",
    term: "mano niyamaḥ",
    transliteration: "mano niyamaḥ",
    definition:
      "Mastery of the ways of thinking.",
  },
  {
    id: "mantrah",
    term: "mantrah",
    transliteration: "mantrah",
    definition:
      "Vedic mental prayer.",
    vedantaMeaning:
      "A sacred formula or verse from the Vedas, used in prayer, ritual, and contemplation. In Vedānta, mantras from the Upaniṣads — especially the mahāvākyas — function as the verbal means of knowledge (śabda-pramāṇam) that reveal the nature of ātmā. The power of a mantra lies not in its sound alone but in the meaning it unfolds when properly taught and contemplated.",
    tags: ["prayer", "chant", "sacred", "hymn", "invocation"],
    relatedTerms: ["sābda", "pramāṇam", "ātmā"],
  },
  {
    id: "manusya",
    term: "mānuṣya",
    transliteration: "mānuṣya",
    definition:
      "Of or pertaining to humans. mānuṣyam Humanity; human nature.",
    relatedTerms: ["manuṣyaḥ"],
  },
  {
    id: "manusyah",
    term: "manuṣyaḥ",
    transliteration: "manuṣyaḥ",
    definition:
      "A man; human being.",
    relatedTerms: ["mānuṣya"],
  },
  {
    id: "maranam",
    term: "maraṇam",
    transliteration: "maraṇam",
    definition:
      "Death; dying.",
  },
  {
    id: "margah",
    term: "mārgah",
    transliteration: "mārgah",
    definition:
      "Path.",
  },
  {
    id: "maricih",
    term: "marīciḥ",
    transliteration: "marīciḥ",
    definition:
      "Illusion; mirage; ray of light.",
  },
  {
    id: "martya",
    term: "martya",
    transliteration: "martya",
    definition:
      "Mortal, subject to death.",
  },
  {
    id: "maryada",
    term: "maryādā",
    transliteration: "maryādā",
    definition:
      "Limit, boundary; fixed rule.",
  },
  {
    id: "matam",
    term: "matam",
    transliteration: "matam",
    definition:
      "Vision; thought; idea; creed; advice; intention.",
  },
  {
    id: "mathah",
    term: "maṭhaḥ",
    transliteration: "maṭhaḥ",
    definition:
      "Temple; monastery; seminary.",
  },
  {
    id: "mathanam",
    term: "mathanam",
    transliteration: "mathanam",
    definition:
      "Churning; stirring up; injuring; destroying.",
  },
  {
    id: "matih",
    term: "matiḥ",
    transliteration: "matiḥ",
    definition:
      "Intellect; understanding; mind.",
  },
  {
    id: "matr",
    term: "mātṛ",
    transliteration: "mātṛ",
    definition:
      "A mother.",
    relatedTerms: ["mātrā"],
  },
  {
    id: "matra",
    term: "mātrā",
    transliteration: "mātrā",
    definition:
      "An affix to nouns in the sense of 'measuring as much as'; a measure of any kind.",
    relatedTerms: ["mātram"],
  },
  {
    id: "matram",
    term: "mātram",
    transliteration: "mātram",
    definition:
      "Mere; only; even; adverbially merely; simply; nothing else but.",
    relatedTerms: ["mātrā"],
  },
  {
    id: "matsaryam",
    term: "mātsaryam",
    transliteration: "mātsaryam",
    definition:
      "Seeing excellence in another's possession, position, or disposition creates a discomfort in the mind.",
  },
  {
    id: "matsya",
    term: "matsya",
    transliteration: "matsya",
    definition:
      "A fish.",
  },
  {
    id: "maya-suffix",
    term: "-maya",
    transliteration: "-maya",
    definition:
      "At the end of compound: made of, consisting of, full of.",
    tags: ["suffix", "compound"],
  },
  {
    id: "maya",
    term: "māyā",
    devanagari: "माया",
    transliteration: "māyā",
    definition:
      "Illusion; the power of appearance; that which measures out or creates forms.",
    vedantaMeaning:
      "The beginningless power (śakti) of Brahman, composed of the three guṇas, which accounts for the appearance of the manifold universe. Māyā is neither real nor unreal (sadasadvilakṣaṇā) — it cannot be categorized as sat or asat. When associated with Īśvara it is called māyā; when associated with the jīva it is called avidyā.",
    relatedTerms: ["avidyā", "mithyā", "guṇah", "īśvarah", "brahman"],
    tags: ["illusion", "appearance", "power", "creation", "magic", "manifestation"],
  },
  {
    id: "mayavin",
    term: "māyāvin",
    transliteration: "māyāvin",
    definition:
      "A magician, deceiver.",
  },
  {
    id: "mayopadhih",
    term: "māyopādhiḥ",
    transliteration: "māyopādhiḥ",
    definition:
      "The mityā condition of ātmā yielding Īśvara.",
    relatedTerms: ["ātmā"],
  },
  {
    id: "medha",
    term: "medhā",
    transliteration: "medhā",
    definition:
      "Capacity to remember; retentiveness; intelligence.",
    relatedTerms: ["medhāvī"],
  },
  {
    id: "medhavi",
    term: "medhāvī",
    transliteration: "medhāvī",
    definition:
      "Wise man.",
    relatedTerms: ["medhā"],
  },
  {
    id: "medhya",
    term: "medhya",
    transliteration: "medhya",
    definition:
      "Fit for a sacrifice.",
  },
  {
    id: "meya",
    term: "meya",
    transliteration: "meya",
    definition:
      "Discernible, capable of being known; measured.",
  },
  {
    id: "milita",
    term: "milita",
    transliteration: "milita",
    definition:
      "Meeting, joining; happening, occurring; connected.",
  },
  {
    id: "mimamsa",
    term: "mīmāṃsā",
    transliteration: "mīmāṃsā",
    definition:
      "Inquiry; investigation; one of the six chief Indian philosophical systems.",
  },
  {
    id: "misra",
    term: "miśra",
    transliteration: "miśra",
    definition:
      "Mixed; combined; connected.",
  },
  {
    id: "mita",
    term: "mita",
    transliteration: "mita",
    definition:
      "Moderate; measured; defined.",
    relatedTerms: ["amita"],
  },
  {
    id: "mithya",
    term: "mithyā",
    transliteration: "mithyā",
    definition:
      "Existing only as dependent on something else; error.",
    vedantaMeaning:
      "That which cannot be categorized as either absolutely real (sat) or absolutely unreal (asat). The world is mithyā — it is experienced but has no independent existence apart from Brahman, just as a pot has no existence apart from clay. Mithyā is not 'illusion' or 'non-existent' — it is dependent reality, empirically valid but not ultimately real.",
    relatedTerms: ["avidyā", "adhyāsa", "māyā", "brahman", "satyam"],
    tags: ["dependent", "apparent", "illusion", "false", "unreal", "appearance"],
  },
  {
    id: "mitih",
    term: "mitiḥ",
    transliteration: "mitiḥ",
    definition:
      "Measuring, measure, weight; accurate knowledge; proof; determination.",
  },
  {
    id: "modah",
    term: "modaḥ",
    transliteration: "modaḥ",
    definition:
      "Happy; a degree of happiness (a desired object is obtained).",
  },
  {
    id: "mohah",
    term: "mohaḥ",
    transliteration: "mohaḥ",
    definition:
      "Confusion; delusion.",
  },
  {
    id: "mohita",
    term: "mohita",
    transliteration: "mohita",
    definition:
      "Bewildered, deluded; fascinated.",
  },
  {
    id: "moksa",
    term: "mokṣa",
    devanagari: "मोक्ष",
    transliteration: "mokṣa",
    definition:
      "Liberation; freedom from the cycle of birth and death.",
    root: "√muc — to release, to set free",
    vedantaMeaning:
      "Not a future event or a place to reach. Mokṣa is the recognition that one is already free — that ātmā was never bound. It is the cessation of self-ignorance (avidyā-nivṛtti), not the gain of something new.",
    relatedTerms: ["avidyā", "ātmā", "brahman", "saṃsāra", "jñānam"],
    tags: ["liberation", "freedom", "release", "enlightenment", "free"],
  },
  {
    id: "moksah",
    term: "mokṣaḥ",
    transliteration: "mokṣaḥ",
    definition:
      "Liberation; not returning to saṃsāraḥ; ātmasidyat.",
    relatedTerms: ["mokṣa"],
  },
  {
    id: "mr",
    term: "mṛ",
    transliteration: "mṛ",
    definition:
      "To die, perish. mṛiyate It dies.",
  },
  {
    id: "mrd",
    term: "mṛd",
    transliteration: "mṛd",
    definition:
      "Clay; earth.",
  },
  {
    id: "mrsa",
    term: "mṛṣā",
    transliteration: "mṛṣā",
    definition:
      "ind. Falsely, wrongly. Mithyat.",
  },
  {
    id: "mrttika",
    term: "mṛttikā",
    transliteration: "mṛttikā",
    definition:
      "Clay.",
  },
  {
    id: "mrtyuh",
    term: "mṛtyuḥ",
    transliteration: "mṛtyuḥ",
    definition:
      "Death; Lord Yama; deity of elimination of waste.",
  },
  {
    id: "mudha",
    term: "mudhā",
    transliteration: "mudhā",
    definition:
      "ind. Wrongly, falsely; in vain, uselessly.",
    relatedTerms: ["mūḍhaḥ"],
  },
  {
    id: "mudhah",
    term: "mūḍhaḥ",
    transliteration: "mūḍhaḥ",
    definition:
      "Ignorant person; delusion.",
    relatedTerms: ["mudhā"],
  },
  {
    id: "mudra",
    term: "mudrā",
    transliteration: "mudrā",
    definition:
      "Names for certain positions of the hands and fingers.",
  },
  {
    id: "mukham",
    term: "mukham",
    transliteration: "mukham",
    definition:
      "Mouth; face; opening; chief, principal, prominent.",
  },
  {
    id: "mukhya",
    term: "mukhya",
    transliteration: "mukhya",
    definition:
      "Foremost; pre-eminent; primary; chief; relating to the mouth or face.",
  },
  {
    id: "mukhyarthah",
    term: "mukhyārthaḥ",
    transliteration: "mukhyārthaḥ",
    definition:
      "Primary meaning of a word or sentence.",
  },
  {
    id: "muktih",
    term: "muktiḥ",
    transliteration: "muktiḥ",
    definition:
      "Liberation; mokṣaḥ.",
    relatedTerms: ["mokṣaḥ"],
  },
  {
    id: "mulam",
    term: "mūlam",
    transliteration: "mūlam",
    definition:
      "Basis; principal; root or base of anything.",
  },
  {
    id: "mulavidya",
    term: "mūlāvidyā",
    transliteration: "mūlāvidyā",
    definition:
      "Original ignorance; self-ignorance.",
  },
  {
    id: "mumuksuh",
    term: "mumukṣuḥ",
    transliteration: "mumukṣuḥ",
    definition:
      "One desirous of liberation.",
  },
  {
    id: "mumuksutvam",
    term: "mumukṣutvam",
    transliteration: "mumukṣutvam",
    definition:
      "The state of desiring mokṣaḥ.",
    vedantaMeaning:
      "An intense, burning desire for liberation — the fourth of the four qualifications. Mumukṣutvam is not casual spiritual interest but a clarity that freedom from self-limitation is the only pursuit that truly matters. It arises when a person, through viveka and vairāgya, recognizes that no amount of worldly achievement can resolve the fundamental sense of inadequacy.",
    relatedTerms: ["mokṣa", "viveka", "vairāgyam", "sādhanatuṣṭayam"],
    tags: ["desire", "liberation", "longing", "seeking", "freedom", "qualification"],
  },
  {
    id: "munih",
    term: "muniḥ",
    transliteration: "muniḥ",
    definition:
      "One capable of proper inquiry; one who has thought over the subject matter; sage.",
  },
  {
    id: "murdhan",
    term: "mūrdhan",
    transliteration: "mūrdhan",
    definition:
      "The head in general; forehead; summit; chief.",
  },
  {
    id: "murkha",
    term: "mūrkha",
    transliteration: "mūrkha",
    definition:
      "Foolish; deluded.",
  },
  {
    id: "murta",
    term: "mūrta",
    transliteration: "mūrta",
    definition:
      "Having form; material; embodied.",
  },
  {
    id: "murtih",
    term: "mūrtiḥ",
    transliteration: "mūrtiḥ",
    definition:
      "Form; visible shape; personification; image; statue; body.",
  },
  {
    id: "musita",
    term: "muṣita",
    transliteration: "muṣita",
    definition:
      "Carried off; stolen; deprived of, free from.",
  },
  {
    id: "nadabrahma",
    term: "nādabrahma",
    transliteration: "nādabrahma",
    definition:
      "Primal sound.",
  },
  {
    id: "nadah",
    term: "nādaḥ",
    transliteration: "nādaḥ",
    definition:
      "Sound, cry, shout; loud roar.",
  },
  {
    id: "nadi",
    term: "nadī",
    transliteration: "nadī",
    definition:
      "River, stream, ocean.",
    relatedTerms: ["anādi"],
  },
  {
    id: "nadih",
    term: "nāḍīḥ",
    transliteration: "nāḍīḥ",
    definition:
      "Any tubular organ of the body; hollow stalk.",
  },
  {
    id: "naimittika",
    term: "naimittika",
    transliteration: "naimittika",
    definition:
      "Occasional; periodic.",
  },
  {
    id: "naimittikakarma",
    term: "naimittikakarma",
    transliteration: "naimittikakarma",
    definition:
      "An occasional, periodic, or conditional rite; one of the four vaidikakarma.",
  },
  {
    id: "naipunyam",
    term: "naipuṇyam",
    transliteration: "naipuṇyam",
    definition:
      "Expertise, skill, dexterity, cleverness; strictness.",
  },
  {
    id: "nairantarya",
    term: "nairantarya",
    transliteration: "nairantarya",
    definition:
      "Without interruption; continuous; close succession.",
  },
  {
    id: "naisa",
    term: "naiśa",
    transliteration: "naiśa",
    definition:
      "Nocturnal, belonging to the night, nightly.",
  },
  {
    id: "naiscalyam",
    term: "naiścalyam",
    transliteration: "naiścalyam",
    definition:
      "Immovability; solidity; fixedness.",
  },
  {
    id: "naiskarmyam",
    term: "naiṣkarmyam",
    transliteration: "naiṣkarmyam",
    definition:
      "State of actionlessness; perfection; self-knowledge; sarvakarmāsaṃnyāsaḥ.",
  },
  {
    id: "naivedyam",
    term: "naivedyam",
    transliteration: "naivedyam",
    definition:
      "Food offered to a deity.",
  },
  {
    id: "naiyyayikah",
    term: "naiyyāyikaḥ",
    transliteration: "naiyyāyikaḥ",
    definition:
      "A logician, a follower of Nyaya system of philosophy.",
  },
  {
    id: "naksatram",
    term: "nakṣatram",
    transliteration: "nakṣatram",
    definition:
      "Star; constellation.",
  },
  {
    id: "nama",
    term: "nāma",
    transliteration: "nāma",
    definition:
      "Name.",
    relatedTerms: ["namas", "sarvanāma"],
  },
  {
    id: "namadheyam",
    term: "nāmadheyam",
    transliteration: "nāmadheyam",
    definition:
      "Name; appellation.",
  },
  {
    id: "namas",
    term: "namas",
    transliteration: "namas",
    definition:
      "ind. Salutation; reverential obeisance; bow.",
    relatedTerms: ["nāma"],
  },
  {
    id: "nan",
    term: "nañ",
    transliteration: "nañ",
    definition:
      "The technical term for the negative particle; na = a negative particle.",
  },
  {
    id: "nana",
    term: "nānā",
    transliteration: "nānā",
    definition:
      "ind. In different ways; variously; variously; diverse; separately.",
  },
  {
    id: "nanatvam",
    term: "nānātvam",
    transliteration: "nānātvam",
    definition:
      "The state of diversity or plurality.",
  },
  {
    id: "nanu",
    term: "nanu",
    transliteration: "nanu",
    definition:
      "A question or objection.",
  },
  {
    id: "napumsakam",
    term: "napuṃsakam",
    transliteration: "napuṃsakam",
    definition:
      "The neuter gender; a word in the neuter gender.",
  },
  {
    id: "narah",
    term: "naraḥ",
    transliteration: "naraḥ",
    definition:
      "A man.",
  },
  {
    id: "narakah",
    term: "narakaḥ",
    transliteration: "narakaḥ",
    definition:
      "Hell; the lower regions.",
  },
  {
    id: "narayanah",
    term: "nārāyaṇaḥ",
    transliteration: "nārāyaṇaḥ",
    definition:
      "The Lord; Viṣṇu.",
  },
  {
    id: "nasah",
    term: "nāśaḥ",
    transliteration: "nāśaḥ",
    definition:
      "Destruction; disappearance.",
  },
  {
    id: "nasanam",
    term: "nāśanam",
    transliteration: "nāśanam",
    definition:
      "Destruction; loss.",
  },
  {
    id: "nasta",
    term: "naṣṭa",
    transliteration: "naṣṭa",
    definition:
      "Lost; destroyed.",
  },
  {
    id: "nastikah",
    term: "nāstikaḥ",
    transliteration: "nāstikaḥ",
    definition:
      "One who does not believe in the Veda as a pramāṇam.",
    relatedTerms: ["pramāṇam"],
  },
  {
    id: "nasvara",
    term: "naśvara",
    transliteration: "naśvara",
    definition:
      "Perishable, transitory, impermanent.",
  },
  {
    id: "nayakah",
    term: "nayakaḥ",
    transliteration: "nayakaḥ",
    definition:
      "A pre-eminent or distinguished person; leader.",
  },
  {
    id: "ni",
    term: "nī",
    transliteration: "nī",
    definition:
      "To lead, carry, bring, take; to guide, direct, govern; to lead away, carry off. nayati nayate.",
  },
  {
    id: "nibandhanam",
    term: "nibandhanam",
    transliteration: "nibandhanam",
    definition:
      "The act of fastening; binding; connection; cause, origin.",
  },
  {
    id: "nidha",
    term: "nidhā",
    transliteration: "nidhā",
    definition:
      "To place, put, set down; to resolve, determine; to confide or entrust. nidhīyate Is resolved.",
    relatedTerms: ["nidhānam"],
  },
  {
    id: "nidhanam",
    term: "nidhānam",
    transliteration: "nidhānam",
    definition:
      "Greatest treasure; mokṣaḥ.",
    relatedTerms: ["mokṣaḥ"],
  },
  {
    id: "nididhyasanam",
    term: "nididhyāsanam",
    transliteration: "nididhyāsanam",
    definition:
      "Absorbed meditation; meditation on the nature of brahman; dwelling on the Vedantic teaching.",
    relatedTerms: ["brahman"],
  },
  {
    id: "nidra",
    term: "nidrā",
    transliteration: "nidrā",
    definition:
      "Sleep.",
    tags: ["sleep", "rest", "unconscious", "dormancy"],
  },
  {
    id: "nigamanam",
    term: "nigamanam",
    transliteration: "nigamanam",
    definition:
      "(In logic) The conclusion in a syllogism, a deduction; going into.",
  },
  {
    id: "nigrahah",
    term: "nigrahaḥ",
    transliteration: "nigrahaḥ",
    definition:
      "Restraint; obstruction; putting down; defeat; destruction, control.",
  },
  {
    id: "nigrhita",
    term: "nigṛhīta",
    transliteration: "nigṛhīta",
    definition:
      "Restrained, checked; defeated in argument; seized.",
  },
  {
    id: "nigudha",
    term: "nigūḍha",
    transliteration: "nigūḍha",
    definition:
      "Hidden; concealed; secret; obscure.",
  },
  {
    id: "nihita",
    term: "nihita",
    transliteration: "nihita",
    definition:
      "Situated; placed, entrusted; bestowed.",
  },
  {
    id: "nihnu",
    term: "nihnu",
    transliteration: "nihnu",
    definition:
      "To hide, conceal; to deny, negate.",
  },
  {
    id: "nihsanga",
    term: "nihsaṅga",
    transliteration: "nihsaṅga",
    definition:
      "Not attached or devoted to, indifferent to.",
  },
  {
    id: "nihsreyas",
    term: "niḥśreyas",
    transliteration: "niḥśreyas",
    definition:
      "The best, most excellent.",
  },
  {
    id: "nikayah",
    term: "nikāyaḥ",
    transliteration: "nikāyaḥ",
    definition:
      "Assemblage; the body; group; house.",
  },
  {
    id: "niketah",
    term: "niketaḥ",
    transliteration: "niketaḥ",
    definition:
      "House; abode, home.",
  },
  {
    id: "nikrsta",
    term: "nikṛṣṭa",
    transliteration: "nikṛṣṭa",
    definition:
      "Lesser; low; diminished.",
  },
  {
    id: "nimantranam",
    term: "nimantraṇam",
    transliteration: "nimantraṇam",
    definition:
      "Invitation; summoning.",
  },
  {
    id: "nimilita",
    term: "nimīlita",
    transliteration: "nimīlita",
    definition:
      "Closed, obscured, darkened, stupefied.",
  },
  {
    id: "nimimitta",
    term: "nimimitta",
    transliteration: "nimimitta",
    definition:
      "Causeless, free of being a product.",
  },
  {
    id: "nimittakaranam",
    term: "nimittakāraṇam",
    transliteration: "nimittakāraṇam",
    definition:
      "Efficient cause; intelligent cause.",
  },
  {
    id: "nimittam",
    term: "nimittam",
    transliteration: "nimittam",
    definition:
      "A cause, reason; the instrumental or efficient cause.",
  },
  {
    id: "nimna",
    term: "nimna",
    transliteration: "nimna",
    definition:
      "Deep; subtle; low.",
  },
  {
    id: "ninda",
    term: "nindā",
    transliteration: "nindā",
    definition:
      "also nindanam Criticism; blame; abuse; censure.",
  },
  {
    id: "nindita",
    term: "nindita",
    transliteration: "nindita",
    definition:
      "Low, despicable; censured.",
  },
  {
    id: "nipatah",
    term: "nipātaḥ",
    transliteration: "nipātaḥ",
    definition:
      "Irregularity; accidental mention; an irregular form.",
  },
  {
    id: "niradhisthana",
    term: "niradhiṣṭhāna",
    transliteration: "niradhiṣṭhāna",
    definition:
      "Independent, free of support or source.",
  },
  {
    id: "niraharih",
    term: "nirāhāriḥ",
    transliteration: "nirāhāriḥ",
    definition:
      "Not serving the sense organs; fasting.",
  },
  {
    id: "nirakara",
    term: "nirākāra",
    transliteration: "nirākāra",
    definition:
      "Formless; without form.",
    relatedTerms: ["nirākaraṇam"],
  },
  {
    id: "nirakaranam",
    term: "nirākaraṇam",
    transliteration: "nirākaraṇam",
    definition:
      "Repudiating, turning away; contradiction; refutation.",
    relatedTerms: ["nirākāra"],
  },
  {
    id: "niranjana",
    term: "nirañjana",
    transliteration: "nirañjana",
    definition:
      "Unstained; free from falsehood.",
    relatedTerms: ["rañjana"],
  },
  {
    id: "nirapeksa",
    term: "nirapekṣa",
    transliteration: "nirapekṣa",
    definition:
      "Not depending on; freedom from; indifference to.",
  },
  {
    id: "nirasi",
    term: "nirāśī",
    transliteration: "nirāśī",
    definition:
      "One who has no projected, big plans; free from expectation.",
  },
  {
    id: "niratisaya",
    term: "niratiśaya",
    transliteration: "niratiśaya",
    definition:
      "Unsurpassed; unrivalled; unequalled.",
  },
  {
    id: "niravayava",
    term: "niravayava",
    transliteration: "niravayava",
    definition:
      "Without parts or limbs; indivisible.",
    relatedTerms: ["niravayavatvam"],
  },
  {
    id: "niravayavatvam",
    term: "niravayavatvam",
    transliteration: "niravayavatvam",
    definition:
      "Being without parts or limbs.",
    relatedTerms: ["niravayava"],
  },
  {
    id: "nirayasa",
    term: "nirāyāsa",
    transliteration: "nirāyāsa",
    definition:
      "Not fatiguing; easy.",
  },
  {
    id: "nirdesah",
    term: "nirdeśaḥ",
    transliteration: "nirdeśaḥ",
    definition:
      "Pointing out, indicating, instruction, declaring, specifying.",
  },
  {
    id: "nirdharanam",
    term: "nirdhāraṇam",
    transliteration: "nirdhāraṇam",
    definition:
      "Certainty; ascertainment, determining; deciding.",
  },
  {
    id: "nirdharita",
    term: "nirdhārita",
    transliteration: "nirdhārita",
    definition:
      "Determined, ascertained; fixed; settled.",
  },
  {
    id: "nirdis",
    term: "nirdiś",
    transliteration: "nirdiś",
    definition:
      "To point out; to indicate; to mention; to advise.",
    relatedTerms: ["nirdiṣṭa"],
  },
  {
    id: "nirdista",
    term: "nirdiṣṭa",
    transliteration: "nirdiṣṭa",
    definition:
      "Indicated, specified, described, assigned, declared, ascertained, learned.",
    relatedTerms: ["nirdiś"],
  },
  {
    id: "nirgunah",
    term: "nirguṇaḥ",
    transliteration: "nirguṇaḥ",
    definition:
      "That which is free from all attributes.",
    vedantaMeaning:
      "Brahman as it truly is — free from all limiting attributes, guṇas, and form. Nirguṇa does not mean 'without any nature' but 'not limited by any quality.' Brahman is nirguṇa because it is not a product of māyā and the guṇas do not apply to it. The Upaniṣads negate all attributes (neti neti) to reveal Brahman as pure existence-consciousness, beyond all description.",
    relatedTerms: ["saguṇa", "brahman", "guṇah"],
    tags: ["attributeless", "formless", "unconditioned", "absolute", "without qualities"],
  },
  {
    id: "nirgunam-brahma",
    term: "nirguṇaṃ brahma",
    transliteration: "nirguṇaṃ brahma",
    definition:
      "The Lord free of all attributes - as a substantive for understanding.",
  },
  {
    id: "nirmala",
    term: "nirmala",
    transliteration: "nirmala",
    definition:
      "Free from dirt or impurities; mokṣa.",
    relatedTerms: ["mokṣa"],
  },
  {
    id: "nirmata",
    term: "nirmātā",
    transliteration: "nirmātā",
    definition:
      "Creator.",
  },
  {
    id: "nirmitaka",
    term: "nirmitaka",
    transliteration: "nirmitaka",
    definition:
      "Set up, fixed, settled; constructed, built.",
  },
  {
    id: "nirnayah",
    term: "nirnayah",
    transliteration: "nirnayah",
    definition:
      "Decision; determination; conclusion; removal.",
  },
  {
    id: "nirni",
    term: "nīrṇī",
    transliteration: "nīrṇī",
    definition:
      "1P. To determine, ascertain, settle, decide, carry away.",
    relatedTerms: ["nirṇīta"],
  },
  {
    id: "nirnita",
    term: "nirṇīta",
    transliteration: "nirṇīta",
    definition:
      "Determined, resolved, settled.",
    relatedTerms: ["nīrṇī"],
  },
  {
    id: "nirodhah",
    term: "nirodhaḥ",
    transliteration: "nirodhaḥ",
    definition:
      "also nirodhanam Control; restraint; obstruction; annihilation, destruction.",
  },
  {
    id: "niruddha",
    term: "niruddha",
    transliteration: "niruddha",
    definition:
      "Obstructed, restrained; confined; covered; filled.",
  },
  {
    id: "niruktam",
    term: "niruktam",
    transliteration: "niruktam",
    definition:
      "Discipline of Vedic etymology - one of six Vedāṅgas.",
  },
  {
    id: "nirupadhikabrahyadrstih",
    term: "nirupādhikabrahyadṛṣṭiḥ",
    transliteration: "nirupādhikabrahyadṛṣṭiḥ",
    definition:
      "Mistaking one object for another; arthādhyāsaḥ (e.g. rope-snake).",
    relatedTerms: ["arthādhyāsaḥ"],
  },
  {
    id: "nirupanamnirupana",
    term: "nirūpaṇaṃ/nirūpaṇā",
    transliteration: "nirūpaṇaṃ/nirūpaṇā",
    definition:
      "Form; sight, seeing; looking for; ascertaining, investigation; definition.",
  },
  {
    id: "nirupyamana",
    term: "nirūpyamāna",
    transliteration: "nirūpyamāna",
    definition:
      "Being ascertained, determined; investigated, examined.",
  },
  {
    id: "nirvacanam",
    term: "nirvacanam",
    transliteration: "nirvacanam",
    definition:
      "Utterance; proverb; pronunciation.",
  },
  {
    id: "nirvanam",
    term: "nirvāṇam",
    transliteration: "nirvāṇam",
    definition:
      "Final liberation; emancipation; extinguished.",
    relatedTerms: ["mokṣa", "saṃsāra"],
    tags: ["liberation", "freedom", "peace", "extinction", "cessation", "release"],
  },
  {
    id: "nirvedah",
    term: "nirvedaḥ",
    transliteration: "nirvedaḥ",
    definition:
      "Dispassion leading to iḍṛnā; despair.",
  },
  {
    id: "nirvikalpe",
    term: "nirvikalpe",
    transliteration: "nirvikalpe",
    definition:
      "Recognizing no distinctions, as applied to contemplation - without distinction of knower-knowing-known.",
  },
  {
    id: "nirvikara",
    term: "nirvikāra",
    transliteration: "nirvikāra",
    definition:
      "Unchanged; unchangeable.",
  },
  {
    id: "nirvinnah",
    term: "nirviṇṇaḥ",
    transliteration: "nirviṇṇaḥ",
    definition:
      "One with dispassion; one indifferent to worldly objects.",
  },
  {
    id: "nirvisaya",
    term: "nirviṣaya",
    transliteration: "nirviṣaya",
    definition:
      "Without an object; without a sphere of action.",
  },
  {
    id: "nirvisesana",
    term: "nirviśeṣaṇa",
    transliteration: "nirviśeṣaṇa",
    definition:
      "Without attributes.",
  },
  {
    id: "nirvrtih",
    term: "nirvṛtiḥ",
    transliteration: "nirvṛtiḥ",
    definition:
      "Mokṣa; peace; pleasure.",
    relatedTerms: ["mokṣa"],
  },
  {
    id: "nirvrttih",
    term: "nirvṛttiḥ",
    transliteration: "nirvṛttiḥ",
    definition:
      "Accomplishment, fulfilment; completion, end; inactivity.",
  },
  {
    id: "niscayah",
    term: "niścayaḥ",
    transliteration: "niścayaḥ",
    definition:
      "Decision; resolution; the nature of buddhiḥ.",
    relatedTerms: ["buddhiḥ"],
  },
  {
    id: "niscita",
    term: "niścita",
    transliteration: "niścita",
    definition:
      "Ascertained, determined, decided, settled, concluded.",
  },
  {
    id: "nisedha",
    term: "niṣedha",
    transliteration: "niṣedha",
    definition:
      "Negation; prohibitive rule, prohibition, denial.",
  },
  {
    id: "nisiddha",
    term: "niṣiddha",
    transliteration: "niṣiddha",
    definition:
      "Prohibited; prevented.",
  },
  {
    id: "niskala",
    term: "niṣkala",
    transliteration: "niṣkala",
    definition:
      "Without parts, undivided, whole; without attributes or qualities.",
  },
  {
    id: "niskama",
    term: "niṣkāma",
    transliteration: "niṣkāma",
    definition:
      "Free from desire; unselfish.",
  },
  {
    id: "niskriya",
    term: "niṣkriya",
    transliteration: "niṣkriya",
    definition:
      "Inactive; knowing higher knowledge as a sage.",
  },
  {
    id: "nispanna",
    term: "niṣpanna",
    transliteration: "niṣpanna",
    definition:
      "Born; produced; arising from.",
  },
  {
    id: "nispattih",
    term: "niṣpattiḥ",
    transliteration: "niṣpattiḥ",
    definition:
      "Birth, production, maturity; perfection; completion.",
  },
  {
    id: "nisphala",
    term: "niṣphala",
    transliteration: "niṣphala",
    definition:
      "Fruitless; unsuccessful, futile.",
  },
  {
    id: "nisprapanca",
    term: "niṣprapañca",
    transliteration: "niṣprapañca",
    definition:
      "Without extension.",
  },
  {
    id: "nisprayojana",
    term: "niṣprayojana",
    transliteration: "niṣprayojana",
    definition:
      "Without any motive, not influenced by any motive.",
  },
  {
    id: "nistarah",
    term: "nistāraḥ",
    transliteration: "nistāraḥ",
    definition:
      "Crossing or passing over; final release.",
  },
  {
    id: "nistha",
    term: "niṣṭhā",
    transliteration: "niṣṭhā",
    definition:
      "Steadiness; adherence; freedom from doubt and vagueness.",
    relatedTerms: ["sthā", "aniṣṭha"],
  },
  {
    id: "nisvasah",
    term: "niśvāsaḥ",
    transliteration: "niśvāsaḥ",
    definition:
      "Inhaling; inspiration; breathing; niśvāsaḥ.",
  },
  {
    id: "nitaram",
    term: "nitarām",
    transliteration: "nitarām",
    definition:
      "ind. Wholly, entirely, completely; excessively.",
  },
  {
    id: "nitya",
    term: "nitya",
    transliteration: "nitya",
    definition:
      "Timewise limitless - that which is, was, and will always be; perpetual; eternal.",
    relatedTerms: ["anitya"],
  },
  {
    id: "nityakarma",
    term: "nityakarma",
    transliteration: "nityakarma",
    definition:
      "Any daily or necessary rite; one of four naimittkarmas.",
  },
  {
    id: "nivaranam",
    term: "nivāraṇam",
    transliteration: "nivāraṇam",
    definition:
      "Keeping off, preventing, warding off; prohibition.",
  },
  {
    id: "nivartaka",
    term: "nivartak̄a",
    transliteration: "nivartak̄a",
    definition:
      "Removing; stopping; coming or turning back; abolishing; withdrawn.",
  },
  {
    id: "nivrt",
    term: "nivṛt",
    transliteration: "nivṛt",
    definition:
      "To come back, return; to turn away from; to cease; to be freed. nivartate.",
    relatedTerms: ["nivṛtta", "nivṛttiḥ"],
  },
  {
    id: "nivrtta",
    term: "nivṛtta",
    transliteration: "nivṛtta",
    definition:
      "Stopped; freed from; gone; turned back; finished, completed.",
    relatedTerms: ["nivṛt"],
  },
  {
    id: "nivrttih",
    term: "nivṛttiḥ",
    transliteration: "nivṛttiḥ",
    definition:
      "Abstinence, giving up all other pursuits other than mokṣa; stopping; opposite of pravṛttiḥ.",
    relatedTerms: ["pravṛttiḥ", "mokṣa"],
  },
  {
    id: "niyamah",
    term: "niyamaḥ",
    transliteration: "niyamaḥ",
    definition:
      "Doing certain positive things, interacting with the world according to the universal values - one of the eight aṅgas of Patañjali's Yoga; restriction, rule, law; restricting factor.",
  },
  {
    id: "niyantr",
    term: "niyantṛ",
    transliteration: "niyantṛ",
    definition:
      "Punisher; chastiser; master.",
  },
  {
    id: "niyata",
    term: "niyata",
    transliteration: "niyata",
    definition:
      "Fixed, maintained, observed; certain; restrained.",
  },
  {
    id: "niyatih",
    term: "niyatiḥ",
    transliteration: "niyatiḥ",
    definition:
      "Restraint; restriction; regulation, order; obligation.",
  },
  {
    id: "niyogah",
    term: "niyogaḥ",
    transliteration: "niyogaḥ",
    definition:
      "Appointed tasks, duty, or business; employment; direction, order; obligation; effort.",
  },
  {
    id: "niyojanam",
    term: "niyojanam",
    transliteration: "niyojanam",
    definition:
      "Ordering, prescribing; impelling; fastening.",
  },
  {
    id: "niyojyah",
    term: "niyojyaḥ",
    transliteration: "niyojyaḥ",
    definition:
      "One charged with any duty, functionary, employee.",
  },
  {
    id: "nyayah",
    term: "nyāyaḥ",
    transliteration: "nyāyaḥ",
    definition:
      "An illustrated conclusion; example; method; system of logic; analogy; that which is proper; dharmaḥ.",
    relatedTerms: ["dharmaḥ"],
  },
  {
    id: "odanam",
    term: "odanam",
    transliteration: "odanam",
    definition:
      "Boiled rice, food.",
  },
  {
    id: "osadhih",
    term: "oṣadhiḥ",
    transliteration: "oṣadhiḥ",
    definition:
      "Plant; herb.",
  },
  {
    id: "pa",
    term: "pā",
    transliteration: "pā",
    definition:
      "To drink. pibati.",
  },
  {
    id: "padah",
    term: "padaḥ",
    transliteration: "padaḥ",
    definition:
      "The fourth part of a stanza or chapter or book; a quarter of anything; foot; foot of a mountain.",
  },
  {
    id: "padalaksyarthah",
    term: "padalakṣyārthaḥ",
    transliteration: "padalakṣyārthaḥ",
    definition:
      "Implied meaning of a word.",
  },
  {
    id: "padam",
    term: "padam",
    transliteration: "padam",
    definition:
      "Word; foot; that which is to be accomplished; that by which an object is known; what is accomplished by knowledge.",
  },
  {
    id: "padarthah",
    term: "padārthāḥ",
    transliteration: "padārthāḥ",
    definition:
      "Meaning of a word.",
  },
  {
    id: "pakka",
    term: "pakka",
    transliteration: "pakka",
    definition:
      "Fully developed; perfect; ripe; cooked.",
  },
  {
    id: "paksah",
    term: "pakṣaḥ",
    transliteration: "pakṣaḥ",
    definition:
      "One side of an argument; conditioning member; fraction; wing.",
  },
  {
    id: "paksantaram",
    term: "pakṣāntaram",
    transliteration: "pakṣāntaram",
    definition:
      "Another side or different view of an argument, another supposition.",
  },
  {
    id: "paksapatah",
    term: "pakṣapātaḥ",
    transliteration: "pakṣapātaḥ",
    definition:
      "Partiality; attachment to a cause; adhering to one side.",
  },
  {
    id: "panam",
    term: "pānam",
    transliteration: "pānam",
    definition:
      "A drink, beverage.",
  },
  {
    id: "pancabhutam",
    term: "pañcabhūtam",
    transliteration: "pañcabhūtam",
    definition:
      "Five element model of creation.",
  },
  {
    id: "pancami",
    term: "pañcamī",
    transliteration: "pañcamī",
    definition:
      "The fifth; the ablative case.",
  },
  {
    id: "pancangam",
    term: "pañcāṅgam",
    transliteration: "pañcāṅgam",
    definition:
      "Five-membered, having five parts; a calendar or almanac; five modes of devotion.",
  },
  {
    id: "pancasunah",
    term: "pañcaśūnāḥ",
    transliteration: "pañcaśūnāḥ",
    definition:
      "Five things in a house which may be accidentally killed.",
  },
  {
    id: "pancatattvam",
    term: "pañcatattvam",
    transliteration: "pañcatattvam",
    definition:
      "The five elements.",
  },
  {
    id: "pancikaranam",
    term: "pañcīkaraṇam",
    transliteration: "pañcīkaraṇam",
    definition:
      "Grossification of the five subtle elements.",
  },
  {
    id: "panda",
    term: "paṇḍā",
    transliteration: "paṇḍā",
    definition:
      "Wisdom; knowledge.",
  },
  {
    id: "pandita",
    term: "paṇḍita",
    transliteration: "paṇḍita",
    definition:
      "Learned; wise; paṇḍitaḥ Scholar; sage.",
    aliases: ["pundit"],
  },
  {
    id: "panih",
    term: "pāṇiḥ",
    transliteration: "pāṇiḥ",
    definition:
      "Hand.",
  },
  {
    id: "paniyam",
    term: "pānīyam",
    transliteration: "pānīyam",
    definition:
      "Water.",
  },
  {
    id: "papam",
    term: "pāpam",
    transliteration: "pāpam",
    definition:
      "Bad fortune; karmic bad credit.",
  },
  {
    id: "para",
    term: "para",
    transliteration: "para",
    definition:
      "Other, different, another; distant removed, remote; beyond; following, subsequent; higher, superior; hostile, adverse; exceeding.",
    relatedTerms: ["param"],
  },
  {
    id: "paragah",
    term: "pāragaḥ",
    transliteration: "pāragaḥ",
    definition:
      "One who has gone to the other side; learned one, master.",
  },
  {
    id: "parah",
    term: "paraḥ",
    transliteration: "paraḥ",
    definition:
      "Another person, stranger; highest point; secondary meaning of a word; one of two kinds of generality of notion.",
  },
  {
    id: "parakramah",
    term: "parākramaḥ",
    transliteration: "parākramaḥ",
    definition:
      "Facing up to what opposes you; capacity; strength.",
  },
  {
    id: "param",
    term: "param",
    transliteration: "param",
    definition:
      "Brahman; highest point; distinct.",
    relatedTerms: ["brahman"],
  },
  {
    id: "paramahamsah",
    term: "paramahaṃsaḥ",
    transliteration: "paramahaṃsaḥ",
    definition:
      "An ascetic of the highest order, one who has mastered his senses and accommodated his mind.",
  },
  {
    id: "paramanuh",
    term: "paramāṇuḥ",
    transliteration: "paramāṇuḥ",
    definition:
      "An atom.",
    relatedTerms: ["param"],
  },
  {
    id: "paramapurusarthah",
    term: "paramapuruṣārthaḥ",
    transliteration: "paramapuruṣārthaḥ",
    definition:
      "Utmost pursuit of man; mokṣaḥ.",
    relatedTerms: ["mokṣaḥ"],
  },
  {
    id: "paramarthah",
    term: "paramārthaḥ",
    transliteration: "paramārthaḥ",
    definition:
      "The highest truth or meaning; knowledge that is brahmātmaī.",
  },
  {
    id: "paramarthatah",
    term: "paramārthatāḥ",
    transliteration: "paramārthatāḥ",
    definition:
      "Real, true, accurate.",
  },
  {
    id: "paramarthika",
    term: "paramārthika",
    transliteration: "paramārthika",
    definition:
      "Relating to the highest truth; absolutely true or real.",
    relatedTerms: ["paramārthikam"],
  },
  {
    id: "paramarthikam",
    term: "paramārthikam",
    transliteration: "paramārthikam",
    definition:
      "That which is self-existent; absolutely real, ātmā.",
    relatedTerms: ["ātmā"],
  },
  {
    id: "paramesvarah",
    term: "parameśvaraḥ",
    transliteration: "parameśvaraḥ",
    definition:
      "The Lord; Īśvara; the Creator.",
  },
  {
    id: "parampara",
    term: "paramparā",
    transliteration: "paramparā",
    definition:
      "One following the other; succession; paramparā Teaching lineage.",
    relatedTerms: ["param"],
  },
  {
    id: "paramparyam",
    term: "pāramparyam",
    transliteration: "pāramparyam",
    definition:
      "Hereditary succession; traditional order of instruction.",
  },
  {
    id: "parantah",
    term: "parantaḥ",
    transliteration: "parantaḥ",
    definition:
      "Final death.",
  },
  {
    id: "paraspara",
    term: "paraspara",
    transliteration: "paraspara",
    definition:
      "Mutual, like one another.",
  },
  {
    id: "paratantra",
    term: "paratantra",
    transliteration: "paratantra",
    definition:
      "Dependent on another; dependent; a common group of subsidiaries belonging to another.",
  },
  {
    id: "paratantryam",
    term: "pāratantryam",
    transliteration: "pāratantryam",
    definition:
      "Dependence; subjection.",
  },
  {
    id: "paratas",
    term: "paratas",
    transliteration: "paratas",
    definition:
      "ind. From another.",
  },
  {
    id: "paravasa",
    term: "paravaśa",
    transliteration: "paravaśa",
    definition:
      "In another's hands; overpowered by emotion; controlled by another person.",
  },
  {
    id: "paravidya",
    term: "paravidyā",
    transliteration: "paravidyā",
    definition:
      "Knowledge that is self; ātmavidyā.",
  },
  {
    id: "parayanam",
    term: "parāyaṇam",
    transliteration: "parāyaṇam",
    definition:
      "Principal aim; highest goal.",
  },
  {
    id: "paricchedah",
    term: "paricchedaḥ",
    transliteration: "paricchedaḥ",
    definition:
      "Accurate determination; discrimination; judgment; limit, boundary; cutting.",
  },
  {
    id: "paricchinna",
    term: "paricchinna",
    transliteration: "paricchinna",
    definition:
      "Limited; confined; inadequate; determined; ascertained.",
  },
  {
    id: "paricchittih",
    term: "paricchittiḥ",
    transliteration: "paricchittiḥ",
    definition:
      "Accurate definition, limiting; partition, separation, division.",
  },
  {
    id: "parichedya",
    term: "parichedya",
    transliteration: "parichedya",
    definition:
      "To be accurately defined, definable; mutually conditioned.",
  },
  {
    id: "parigrahah",
    term: "parigrahaḥ",
    transliteration: "parigrahaḥ",
    definition:
      "Taking; encircling; grasping.",
  },
  {
    id: "pariharah",
    term: "parihāraḥ",
    transliteration: "parihāraḥ",
    definition:
      "Remedying; leaving, avoiding; giving up.",
  },
  {
    id: "parihrta",
    term: "parihṛta",
    transliteration: "parihṛta",
    definition:
      "Refuted, dismissed, avoided; abandoned.",
  },
  {
    id: "parijnanam",
    term: "parijñānam",
    transliteration: "parijñānam",
    definition:
      "Thorough knowledge, complete acquaintance.",
    aliases: ["paridnyanam"],
  },
  {
    id: "parikalpita",
    term: "parikalpita",
    transliteration: "parikalpita",
    definition:
      "Made; prepared; arranged; settled.",
  },
  {
    id: "pariks",
    term: "parīkṣ",
    transliteration: "parīkṣ",
    definition:
      "1P. To examine, look at.",
  },
  {
    id: "parilopah",
    term: "parilopaḥ",
    transliteration: "parilopaḥ",
    definition:
      "Neglect; omission.",
  },
  {
    id: "parimanam",
    term: "parimāṇam",
    transliteration: "parimāṇam",
    definition:
      "Size; measuring; value.",
  },
  {
    id: "parinamah",
    term: "pariṇāmaḥ",
    transliteration: "pariṇāmaḥ",
    definition:
      "also pariṇāmaḥ Transformation; change.",
    tags: ["transformation", "change", "evolution", "modification"],
  },
  {
    id: "parinisthita",
    term: "pariniṣṭhita",
    transliteration: "pariniṣṭhita",
    definition:
      "Well fixed; quite perfect; completely skilled in; accomplished.",
  },
  {
    id: "paripurnam",
    term: "paripūrṇam",
    transliteration: "paripūrṇam",
    definition:
      "Perfecting; making complete; filling.",
  },
  {
    id: "parisesah",
    term: "pariśeṣaḥ",
    transliteration: "pariśeṣaḥ",
    definition:
      "Remainder, remnant; end; conclusion.",
  },
  {
    id: "paritranam",
    term: "paritrāṇam",
    transliteration: "paritrāṇam",
    definition:
      "Protection; defense; rescue.",
  },
  {
    id: "parityagah",
    term: "parityāgaḥ",
    transliteration: "parityāgaḥ",
    definition:
      "Neglect; omission; giving up; renouncing.",
  },
  {
    id: "parivrajakam",
    term: "parivrājakam",
    transliteration: "parivrājakam",
    definition:
      "The wandering life of a sādhu; asceticism.",
    relatedTerms: ["sādhu"],
  },
  {
    id: "parivrajyam",
    term: "parivrājyam",
    transliteration: "parivrājyam",
    definition:
      "The wandering life of a religious mendicant, asceticism.",
  },
  {
    id: "parjanyah",
    term: "parjanyaḥ",
    transliteration: "parjanyaḥ",
    definition:
      "Rain; raincloud.",
  },
  {
    id: "parok",
    term: "parok",
    transliteration: "parok",
    definition:
      "Distant; external.",
    relatedTerms: ["parokṣa"],
  },
  {
    id: "paroksa",
    term: "parokṣa",
    transliteration: "parokṣa",
    definition:
      "Knowledge gained by inference or description; hidden; not available to the senses.",
    relatedTerms: ["parok"],
  },
  {
    id: "parvatah",
    term: "parvataḥ",
    transliteration: "parvataḥ",
    definition:
      "A mountain, hill.",
  },
  {
    id: "parvati",
    term: "pārvatī",
    transliteration: "pārvatī",
    definition:
      "Daughter of the Himālaya; wife of Śiva; Durgā; Satī.",
    relatedTerms: ["śiva"],
  },
  {
    id: "paryalocana",
    term: "paryālocanā",
    transliteration: "paryālocanā",
    definition:
      "Circumspection; deliberation; reflection; recognition.",
  },
  {
    id: "paryantam",
    term: "paryantam",
    transliteration: "paryantam",
    definition:
      "End, conclusion; boundary, limit; edge; adjoining.",
  },
  {
    id: "paryayah",
    term: "paryāyaḥ",
    transliteration: "paryāyaḥ",
    definition:
      "Synonym; repetition; regular recurrence; course; succession; means; strategy.",
  },
  {
    id: "paryayapadam",
    term: "paryāyapadam",
    transliteration: "paryāyapadam",
    definition:
      "Synonym; alternate.",
  },
  {
    id: "pascat",
    term: "paścāt",
    transliteration: "paścāt",
    definition:
      "ind. From behind; from the back; backwards; after.",
    relatedTerms: ["paścātāpaḥ"],
  },
  {
    id: "pascatapah",
    term: "paścātāpaḥ",
    transliteration: "paścātāpaḥ",
    definition:
      "Contrition; repentance.",
    relatedTerms: ["paścāt"],
  },
  {
    id: "pasuh",
    term: "paśuḥ",
    transliteration: "paśuḥ",
    definition:
      "Animal; cattle.",
  },
  {
    id: "patah",
    term: "paṭaḥ",
    transliteration: "paṭaḥ",
    definition:
      "Cloth; garment.",
  },
  {
    id: "patanam",
    term: "patanam",
    transliteration: "patanam",
    definition:
      "Fall; decline; coming down.",
  },
  {
    id: "pathah",
    term: "pāṭhaḥ",
    transliteration: "pāṭhaḥ",
    definition:
      "Recitation; reading; study; the text of a book.",
  },
  {
    id: "pathasala",
    term: "pāṭhaśālā",
    transliteration: "pāṭhaśālā",
    definition:
      "Vedic school.",
  },
  {
    id: "pathita",
    term: "pāṭhita",
    transliteration: "pāṭhita",
    definition:
      "Taught; instructed.",
  },
  {
    id: "patih",
    term: "patiḥ",
    transliteration: "patiḥ",
    definition:
      "Lord; Indra; husband; master.",
  },
  {
    id: "patita",
    term: "patita",
    transliteration: "patita",
    definition:
      "Fallen; placed; abandoned; dropped.",
  },
  {
    id: "patni",
    term: "patnī",
    transliteration: "patnī",
    definition:
      "A wife.",
  },
  {
    id: "patram",
    term: "patram",
    transliteration: "patram",
    definition:
      "Leaf; page.",
  },
  {
    id: "pavanam",
    term: "pavanam",
    transliteration: "pavanam",
    definition:
      "Clean; pure.",
  },
  {
    id: "pavitra",
    term: "pavitra",
    transliteration: "pavitra",
    definition:
      "Sanctified; purified by performance of ritual acts.",
  },
  {
    id: "phalam",
    term: "phalam",
    transliteration: "phalam",
    definition:
      "Fruit; result (of action).",
  },
  {
    id: "pindah",
    term: "piṇḍaḥ",
    transliteration: "piṇḍaḥ",
    definition:
      "Ball; lump; globe; the physical being.",
  },
  {
    id: "pingala",
    term: "piṅgalā",
    transliteration: "piṅgalā",
    definition:
      "A vessel in the body said to be involved in processes of rebirth.",
  },
  {
    id: "pitr",
    term: "pitṛ",
    transliteration: "pitṛ",
    definition:
      "A father; parents; fore-fathers, ancestors.",
  },
  {
    id: "pittam",
    term: "pittam",
    transliteration: "pittam",
    definition:
      "Bile; one of the three body-elements of Ayurvedic medicine.",
  },
  {
    id: "plavah",
    term: "plavaḥ",
    transliteration: "plavaḥ",
    definition:
      "Raft; swimming, floating.",
  },
  {
    id: "pluta",
    term: "pluta",
    transliteration: "pluta",
    definition:
      "A lengthened vowel in chanting, held for three measures.",
  },
  {
    id: "plutih",
    term: "plutiḥ",
    transliteration: "plutiḥ",
    definition:
      "Prolation of a vowel; a flood; leap.",
  },
  {
    id: "prabhavah",
    term: "prabhavaḥ",
    transliteration: "prabhavaḥ",
    definition:
      "Cause, origin, creator; birthplace, source.",
  },
  {
    id: "prabhuh",
    term: "prabhuḥ",
    transliteration: "prabhuḥ",
    definition:
      "A lord, master, supreme authority.",
  },
  {
    id: "prabhuta",
    term: "prabhūta",
    transliteration: "prabhūta",
    definition:
      "Produced; abundant; many.",
  },
  {
    id: "prabodhah",
    term: "prabodhaḥ",
    transliteration: "prabodhaḥ",
    definition:
      "Awakening; consciousness; knowledge.",
  },
  {
    id: "pracalita",
    term: "pracalita",
    transliteration: "pracalita",
    definition:
      "Moving about; modification.",
  },
  {
    id: "pracarah",
    term: "pracāraḥ",
    transliteration: "pracāraḥ",
    definition:
      "Manifestation, appearance, wandering, going forth; use.",
  },
  {
    id: "pracina",
    term: "prācīna",
    transliteration: "prācīna",
    definition:
      "Previous; previously mentioned; former; turned to the front or East.",
  },
  {
    id: "pracura",
    term: "pracura",
    transliteration: "pracura",
    definition:
      "Much, ample, abundant, extensive; at end of compound filled or replete with.",
  },
  {
    id: "pracuryam",
    term: "prācuryam",
    transliteration: "prācuryam",
    definition:
      "Saturation; abundance; fullness.",
  },
  {
    id: "pracyuta",
    term: "pracyuta",
    transliteration: "pracyuta",
    definition:
      "Fallen off or from; deviated, degraded.",
  },
  {
    id: "pradatr",
    term: "pradātṛ",
    transliteration: "pradātṛ",
    definition:
      "Indra; giver; donor.",
  },
  {
    id: "pradesah",
    term: "pradeśaḥ",
    transliteration: "pradeśaḥ",
    definition:
      "Decision; determination; a place; region; pointing out.",
  },
  {
    id: "pradhanam",
    term: "pradhānam",
    transliteration: "pradhānam",
    definition:
      "Most important thing; ruling factor.",
  },
  {
    id: "pradhanyam",
    term: "prādhānyam",
    transliteration: "prādhānyam",
    definition:
      "Superiority, supremacy, pre-eminence.",
  },
  {
    id: "pradhvamsabhavah",
    term: "pradhvaṃsābhāvaḥ",
    transliteration: "pradhvaṃsābhāvaḥ",
    definition:
      "Non-existence caused by destruction - one of four kinds of abhāva.",
  },
  {
    id: "pradhvamsah",
    term: "pradhvaṃsaḥ",
    transliteration: "pradhvaṃsaḥ",
    definition:
      "Destruction.",
  },
  {
    id: "pradipah",
    term: "pradīpaḥ",
    transliteration: "pradīpaḥ",
    definition:
      "Lamp; light.",
  },
  {
    id: "pradvesah",
    term: "pradveṣaḥ",
    transliteration: "pradveṣaḥ",
    definition:
      "Dislike, enmity, hatred.",
  },
  {
    id: "praja",
    term: "prajā",
    transliteration: "prajā",
    definition:
      "Offspring, progeny; propagation; mankind.",
  },
  {
    id: "prajapatih",
    term: "prajāpatiḥ",
    transliteration: "prajāpatiḥ",
    definition:
      "Lord of all beings; the creator; Brahmā; Parameśvara.",
    relatedTerms: ["brahmā"],
  },
  {
    id: "prajna",
    term: "prajñā",
    transliteration: "prajñā",
    definition:
      "Understanding; knowledge; wisdom; discernment.",
    vedantaMeaning:
      "In the context of the Māṇḍūkya Upaniṣad, prājña is the name of ātmā as identified with the deep sleep state — the third pāda. Prājña is the experiencer of causal ignorance, where all duality resolves into an undifferentiated state. The word also appears in the mahāvākya 'prajñānaṃ brahma' (Aitareya Upaniṣad), where prajñāna means consciousness itself — the nature of Brahman.",
    relatedTerms: ["prajñānam", "prajñāptiḥ", "jñānam", "buddhiḥ"],
    tags: ["wisdom", "understanding", "discernment", "insight", "intelligence"],
    aliases: ["pradnya"],
  },
  {
    id: "prajnanam",
    term: "prajñānam",
    transliteration: "prajñānam",
    definition:
      "Intelligence, knowledge, wisdom.",
    relatedTerms: ["prajñā"],
    aliases: ["pradnyanam"],
  },
  {
    id: "prajnaptih",
    term: "prajñāptiḥ",
    transliteration: "prajñāptiḥ",
    definition:
      "Knowledge with or without knower, known, and knowledge; consciousness.",
    relatedTerms: ["prajñā"],
    aliases: ["pradnyaptih"],
  },
  {
    id: "prak",
    term: "prāk",
    transliteration: "prāk",
    definition:
      "ind. Before; previously.",
    relatedTerms: ["prakāśa"],
  },
  {
    id: "prakalpita",
    term: "prakalpita",
    transliteration: "prakalpita",
    definition:
      "Superimposed; formed; settled.",
  },
  {
    id: "prakarah",
    term: "prakaraḥ",
    transliteration: "prakaraḥ",
    definition:
      "Multitude; quantity; collection.",
  },
  {
    id: "prakaranam",
    term: "prakaraṇam",
    transliteration: "prakaraṇam",
    definition:
      "Text expounding a topic; context; section, chapter; teaching; explanation.",
  },
  {
    id: "prakarsa",
    term: "prakarṣa",
    transliteration: "prakarṣa",
    definition:
      "Excellence; superiority; excess; strength; speciality.",
  },
  {
    id: "prakasa",
    term: "prakāśa",
    transliteration: "prakāśa",
    definition:
      "Bright; clear; shining; vivid.",
    relatedTerms: ["prakāśaka", "prakāśanam", "prakāśaḥ"],
  },
  {
    id: "prakasah",
    term: "prakāśaḥ",
    transliteration: "prakāśaḥ",
    definition:
      "Light; brightness; effulgence.",
    relatedTerms: ["prakāśa"],
  },
  {
    id: "prakasaka",
    term: "prakāśaka",
    transliteration: "prakāśaka",
    definition:
      "Expressing; indicating; disclosing.",
    relatedTerms: ["prakāśa"],
  },
  {
    id: "prakasanam",
    term: "prakāśanam",
    transliteration: "prakāśanam",
    definition:
      "Making known, illuminating; manifesting; giving light.",
    relatedTerms: ["prakāśa"],
  },
  {
    id: "prakasita",
    term: "prakāśita",
    transliteration: "prakāśita",
    definition:
      "Made clear, displayed, published; illuminated.",
  },
  {
    id: "prakasyam",
    term: "prakāśyam",
    transliteration: "prakāśyam",
    definition:
      "Light.",
  },
  {
    id: "prakatita",
    term: "prakaṭita",
    transliteration: "prakaṭita",
    definition:
      "Apparent; manifested; displayed.",
  },
  {
    id: "prakirtih",
    term: "prakīrtiḥ",
    transliteration: "prakīrtiḥ",
    definition:
      "Named; proclaimed; celebrated; explained.",
  },
  {
    id: "prakriya",
    term: "prakriyā",
    transliteration: "prakriyā",
    definition:
      "Method of unfoldment (sattcakośa-guṇa-sṛṣṭitāttraya-kāryakāraṇa); means of exposition.",
  },
  {
    id: "prakrsta",
    term: "prakṛṣṭa",
    transliteration: "prakṛṣṭa",
    definition:
      "Drawn out; stretched out.",
  },
  {
    id: "prakrta",
    term: "prakṛta",
    transliteration: "prakṛta",
    definition:
      "Accomplished; completed; under consideration.",
    relatedTerms: ["prakṛtam"],
  },
  {
    id: "prakrtam",
    term: "prakṛtam",
    transliteration: "prakṛtam",
    definition:
      "What is initiated as the topic to be dealt with.",
    relatedTerms: ["prakṛta"],
  },
  {
    id: "prakrtih",
    term: "prakṛtiḥ",
    transliteration: "prakṛtiḥ",
    definition:
      "That which is available for and capable of creation; Nature consisting of the three guṇas; the natural condition or state of anything; origin; source. In Sāṅkhya philosophy active nature as distinguished from puruṣaḥ, the passive spirit or soul.",
    vedantaMeaning:
      "In Advaita Vedānta, prakṛti is understood as māyā or the causal matter of the universe, not as an independent reality alongside Brahman (as in Sāṅkhya). Prakṛti, composed of the three guṇas, is the material cause (upādāna-kāraṇam) of the universe — but it is not separate from Brahman. It is Brahman's own power of manifestation, which is mithyā.",
    relatedTerms: ["puruṣaḥ", "sāṅkhya"],
    tags: ["nature", "matter", "creation", "material", "origin", "source"],
  },
  {
    id: "pralayah",
    term: "pralayaḥ",
    transliteration: "pralayaḥ",
    definition:
      "Complete dissolution; absorption without return.",
  },
  {
    id: "prama",
    term: "pramā",
    transliteration: "pramā",
    definition:
      "Consciousness; in logic correct notion or apprehension, certain knowledge.",
    relatedTerms: ["pramādaḥ", "pramātṛ", "pramāṇam", "prāmāṇyam"],
  },
  {
    id: "pramadah",
    term: "pramādaḥ",
    transliteration: "pramādaḥ",
    definition:
      "Indifference; mechanicalness; inattention.",
    relatedTerms: ["pramā"],
  },
  {
    id: "pramanam",
    term: "pramāṇam",
    transliteration: "pramāṇam",
    definition:
      "Means of knowledge; ajñāta jñāpakam.",
    vedantaMeaning:
      "A valid means of knowledge — that which reveals what was previously unknown and is not contradicted. Vedānta accepts six pramāṇas: pratyakṣam (perception), anumānam (inference), upamānam (comparison), arthāpattiḥ (postulation), anupalabdhiḥ (non-apprehension), and śabdaḥ (verbal testimony). For knowledge of Brahman, śabdapramāṇam — the words of the Upaniṣads — is the only valid means, since Brahman is not an object of perception or inference.",
    relatedTerms: ["pratyakṣam", "anumānam", "śabdaḥ", "upamānam", "arthāpattiḥ", "anupalabdhiḥ"],
    tags: ["knowledge", "means", "proof", "evidence", "epistemology", "valid knowledge"],
  },
  {
    id: "pramanyam",
    term: "prāmāṇyam",
    transliteration: "prāmāṇyam",
    definition:
      "Credibility; resting on authority; evidence; proof.",
    relatedTerms: ["pramā"],
  },
  {
    id: "pramatr",
    term: "pramātṛ",
    transliteration: "pramātṛ",
    definition:
      "The knower, the conscious one; pramatā.",
    relatedTerms: ["pramā"],
  },
  {
    id: "pramodah",
    term: "pramodaḥ",
    transliteration: "pramodaḥ",
    definition:
      "Joy, pleasure, delight (a desired object is enjoyed).",
  },
  {
    id: "pranabhrt",
    term: "prāṇabhṛt",
    transliteration: "prāṇabhṛt",
    definition:
      "The living being.",
  },
  {
    id: "pranah",
    term: "prāṇaḥ",
    transliteration: "prāṇaḥ",
    definition:
      "Life energy; breath; respiration - a prāṇaḥ seated in the lungs.",
    tags: ["breath", "life", "energy", "vital", "air", "life-force"],
  },
  {
    id: "pranamah",
    term: "praṇāmaḥ",
    transliteration: "praṇāmaḥ",
    definition:
      "Reverential salutation; prostration.",
  },
  {
    id: "pranamayakosah",
    term: "prāṇāmayakośaḥ",
    transliteration: "prāṇāmayakośaḥ",
    definition:
      "Modification of prāṇaḥ - composed of five prāṇāḥ and five organs of action; part of the subtle body.",
    relatedTerms: ["prāṇaḥ"],
  },
  {
    id: "pranatam",
    term: "praṇatam",
    transliteration: "praṇatam",
    definition:
      "Surrendering, saluting.",
  },
  {
    id: "pranavah",
    term: "praṇavaḥ",
    transliteration: "praṇavaḥ",
    definition:
      "Om.",
  },
  {
    id: "pranayamah",
    term: "prāṇāyāmaḥ",
    transliteration: "prāṇāyāmaḥ",
    definition:
      "Breathing practices - one of the eight aṅgas of Patañjali's Yoga.",
    vedantaMeaning:
      "Breath regulation — valued in Vedānta as a preparatory practice (sādhana) for calming the mind and making it fit for self-inquiry. Prāṇāyāma is mentioned in the Gītā alongside sense-control and other disciplines. It is not considered a direct means to mokṣa but a support for the quieting of rajas and the cultivation of sattva in the mind.",
    relatedTerms: ["gītā", "mokṣa", "rajas"],
  },
  {
    id: "pranidhanam",
    term: "praṇidhānam",
    transliteration: "praṇidhānam",
    definition:
      "Respectful behavior with Īśvara in mind.",
    vedantaMeaning:
      "Surrender or devotion to Īśvara — offering one's actions, thoughts, and their results to the Lord. In the context of Yoga, Patañjali lists Īśvara-praṇidhāna as a means to samādhi. In Vedānta, this attitude is the heart of karma-yoga — acting with Īśvara in mind transforms ordinary action into a means of inner purification and prepares the mind for self-knowledge.",
    relatedTerms: ["karma"],
  },
  {
    id: "pranin",
    term: "prāṇin",
    transliteration: "prāṇin",
    definition:
      "Nom. sing. prāṇī Man; a living creature, having prāṇaḥ.",
    relatedTerms: ["prāṇaḥ"],
  },
  {
    id: "prapad",
    term: "prapad",
    transliteration: "prapad",
    definition:
      "To approach, go towards, take shelter, enter. prapadyante They approach.",
  },
  {
    id: "prapaka",
    term: "prāpaka",
    transliteration: "prāpaka",
    definition:
      "Establishing; obtaining, attainment.",
  },
  {
    id: "prapancah",
    term: "prapañcaḥ",
    transliteration: "prapañcaḥ",
    definition:
      "Visible universe; manifestation; world.",
  },
  {
    id: "praptam",
    term: "prāptam",
    transliteration: "prāptam",
    definition:
      "Something already accomplished; gained.",
  },
  {
    id: "praptasya-praptih",
    term: "prāptasya prāptiḥ",
    transliteration: "prāptasya prāptiḥ",
    definition:
      "Acquisition of what is already acquired.",
  },
  {
    id: "praptih",
    term: "prāptiḥ",
    transliteration: "prāptiḥ",
    definition:
      "Gain, attainment; reaching.",
  },
  {
    id: "prarabdham",
    term: "prārabdham",
    transliteration: "prārabdham",
    definition:
      "Operating karma; karma accounting for this birth and exhausted in this lifetime.",
    relatedTerms: ["karma"],
  },
  {
    id: "prarthanam",
    term: "prārthanam",
    transliteration: "prārthanam",
    definition:
      "Prayer; entreaty; request; supplication; desire.",
  },
  {
    id: "prarthaniya",
    term: "prārthanīya",
    transliteration: "prārthanīya",
    definition:
      "Deserving worship.",
  },
  {
    id: "prasabham",
    term: "prasabham",
    transliteration: "prasabham",
    definition:
      "ind. Forcefully; exceedingly.",
  },
  {
    id: "prasadah",
    term: "prasādaḥ",
    transliteration: "prasādaḥ",
    definition:
      "What one partakes of with an attitude of acceptance after offering it to the Lord; kindness; composure; clarity; what is gained by a life of karmayoga.",
  },
  {
    id: "prasakta",
    term: "prasakta",
    transliteration: "prasakta",
    definition:
      "Attached to; excessively fond; fixed or intent upon; constant.",
  },
  {
    id: "prasaktih",
    term: "prasaktiḥ",
    transliteration: "prasaktiḥ",
    definition:
      "Connection; attachment; devotion; appplicability; perseverance.",
  },
  {
    id: "prasamsa",
    term: "praśaṃsā",
    transliteration: "praśaṃsā",
    definition:
      "Fame; reputation; praise; description.",
  },
  {
    id: "prasanga",
    term: "prasaṅga",
    transliteration: "prasaṅga",
    definition:
      "Context, topic; situation; attachment; union; occupation.",
  },
  {
    id: "prasanjanam",
    term: "prasañjanam",
    transliteration: "prasañjanam",
    definition:
      "Secondary; backing up; uniting; bringing into use.",
  },
  {
    id: "prasankhyanam",
    term: "prasaṅkhyānam",
    transliteration: "prasaṅkhyānam",
    definition:
      "Meditation, reflection; fame, reputation.",
  },
  {
    id: "prasannata",
    term: "prasannatā",
    transliteration: "prasannatā",
    definition:
      "Cheerfulness; satisfaction; tranquility; purity; simplicity.",
  },
  {
    id: "prasanta",
    term: "praśānta",
    transliteration: "praśānta",
    definition:
      "Composed, calm.",
    relatedTerms: ["śānta"],
  },
  {
    id: "prasastr",
    term: "praśāstṛ",
    transliteration: "praśāstṛ",
    definition:
      "Ruler; governer; director.",
  },
  {
    id: "prasavah",
    term: "prasavaḥ",
    transliteration: "prasavaḥ",
    definition:
      "Manifestation, production, birth, offspring, source, origin.",
  },
  {
    id: "prasiddha",
    term: "prasiddha",
    transliteration: "prasiddha",
    definition:
      "Famous; renowned; celebrated, established.",
  },
  {
    id: "prasiddhih",
    term: "prasiddhiḥ",
    transliteration: "prasiddhiḥ",
    definition:
      "Fame; success; renown; accomplishment.",
  },
  {
    id: "prasnah",
    term: "praśnaḥ",
    transliteration: "praśnaḥ",
    definition:
      "Question directed; indicating a desire to know; inquiry; disputed point.",
  },
  {
    id: "prasthah",
    term: "prasthaḥ",
    transliteration: "prasthaḥ",
    definition:
      "A measuring bushel; a measure.",
  },
  {
    id: "prasuta",
    term: "prasūta",
    transliteration: "prasūta",
    definition:
      "Produced, engendered.",
  },
  {
    id: "prathama",
    term: "prathama",
    transliteration: "prathama",
    definition:
      "First, foremost; prathamā The nominative case.",
  },
  {
    id: "prati",
    term: "prati",
    transliteration: "prati",
    definition:
      "ind. Towards, to; as prefix to verbs - towards, back against; as prefix to nouns - resemblance.",
    relatedTerms: ["pratijñā", "pratikūla", "pratimā", "pratiyogī", "pratiṣṭhā", "pratīkaḥ", "pratītiḥ"],
  },
  {
    id: "pratibandhakah",
    term: "pratibandhakaḥ",
    transliteration: "pratibandhakaḥ",
    definition:
      "also pratibandhaḥ Obstruction, obstacle; intervening factor.",
  },
  {
    id: "pratibhasanam",
    term: "pratibhāsanam",
    transliteration: "pratibhāsanam",
    definition:
      "Appearance.",
  },
  {
    id: "pratibhasika",
    term: "pratibhāsikā",
    transliteration: "pratibhāsikā",
    definition:
      "Subjective; apparently real only.",
  },
  {
    id: "pratibimbah",
    term: "pratibimbaḥ",
    transliteration: "pratibimbaḥ",
    definition:
      "A reflection.",
  },
  {
    id: "pratibodhah",
    term: "pratibodhaḥ",
    transliteration: "pratibodhaḥ",
    definition:
      "Waking and dreaming; perception, knowledge; instruction; reason.",
  },
  {
    id: "pratijna",
    term: "pratijñā",
    transliteration: "pratijñā",
    definition:
      "Statement; declaration; statement of the proposition to be proved.",
    relatedTerms: ["prati", "pratijñānam"],
    aliases: ["pratidnya"],
  },
  {
    id: "pratijnanam",
    term: "pratijñānam",
    transliteration: "pratijñānam",
    definition:
      "Assertion, declaration; agreement.",
    relatedTerms: ["pratijñā"],
    aliases: ["pratidnyanam"],
  },
  {
    id: "pratikah",
    term: "pratīkaḥ",
    transliteration: "pratīkaḥ",
    definition:
      "A sound looked upon as the Lord (e.g. Om); name; part; symbol.",
    relatedTerms: ["prati"],
  },
  {
    id: "pratiksanam",
    term: "pratikṣaṇam",
    transliteration: "pratikṣaṇam",
    definition:
      "ind. Constantly, at every moment or instant.",
  },
  {
    id: "pratikula",
    term: "pratikūla",
    transliteration: "pratikūla",
    definition:
      "ind. Conversely; adversely.",
    relatedTerms: ["prati"],
  },
  {
    id: "pratilomyam",
    term: "pratilomyam",
    transliteration: "pratilomyam",
    definition:
      "Hostility, opposition; inversion, reverse order.",
  },
  {
    id: "pratima",
    term: "pratimā",
    transliteration: "pratimā",
    definition:
      "Image; form looked on as the Lord; idol; resemblance, similarity; reflection.",
    relatedTerms: ["prati"],
  },
  {
    id: "pratiniyata",
    term: "pratiniyata",
    transliteration: "pratiniyata",
    definition:
      "Settled, predestined; firm.",
  },
  {
    id: "pratipadaka",
    term: "pratipādaka",
    transliteration: "pratipādaka",
    definition:
      "Revealing; giving; supporting.",
  },
  {
    id: "pratipadanam",
    term: "pratipādanam",
    transliteration: "pratipādanam",
    definition:
      "Demonstrating; proving; explaining; accomplishing; granting.",
  },
  {
    id: "pratipaditah",
    term: "pratipaditaḥ",
    transliteration: "pratipaditaḥ",
    definition:
      "Established, proven; explained, illustrated; given; granted; caused.",
  },
  {
    id: "pratipadya",
    term: "pratipādya",
    transliteration: "pratipādya",
    definition:
      "What is to be revealed or treated.",
  },
  {
    id: "pratipaksabhavana",
    term: "pratipakṣabhāvanā",
    transliteration: "pratipakṣabhāvanā",
    definition:
      "Consciously employing an opposite emotion or feeling.",
  },
  {
    id: "pratipalanam",
    term: "pratipālanam",
    transliteration: "pratipālanam",
    definition:
      "Guarding; observing, practicing; maintaining.",
  },
  {
    id: "pratipattih",
    term: "pratipattiḥ",
    transliteration: "pratipattiḥ",
    definition:
      "Understanding; knowledge; meditation, upāsamam.",
  },
  {
    id: "pratisedhah",
    term: "pratiṣedhaḥ",
    transliteration: "pratiṣedhaḥ",
    definition:
      "Contradiction; negation; prohibition.",
  },
  {
    id: "pratisiddha",
    term: "pratiṣiddha",
    transliteration: "pratiṣiddha",
    definition:
      "Contradicted; prohibited; forbidden.",
  },
  {
    id: "pratistha",
    term: "pratiṣṭhā",
    transliteration: "pratiṣṭhā",
    definition:
      "To prevent; prohibit, disallow, contradict. pratiṣidhyate Is dismissed, negated.",
    relatedTerms: ["prati"],
  },
  {
    id: "pratitih",
    term: "pratītiḥ",
    transliteration: "pratītiḥ",
    definition:
      "Appearance; belief; perception; knowledge; conviction.",
    relatedTerms: ["prati"],
  },
  {
    id: "pratiyogi",
    term: "pratiyogī",
    transliteration: "pratiyogī",
    definition:
      "Opposite; related or corresponding to; opposing; adversary.",
    relatedTerms: ["prati"],
  },
  {
    id: "pratyabhijnana",
    term: "pratyabhijñāna",
    transliteration: "pratyabhijñāna",
    definition:
      "Recognized.",
    aliases: ["pratyabhidnyana"],
  },
  {
    id: "pratyagatma",
    term: "pratyagātmā",
    transliteration: "pratyagātmā",
    definition:
      "Inner self; ātmā.",
    relatedTerms: ["ātmā"],
  },
  {
    id: "pratyaharah",
    term: "pratyāhāraḥ",
    transliteration: "pratyāhāraḥ",
    definition:
      "Not collecting things for oneself; living a simple life - one of the eight aṅgas of Patañjali's Yoga.",
  },
  {
    id: "pratyak",
    term: "pratyak",
    transliteration: "pratyak",
    definition:
      "Ind. In the interior; inward; in the opposite direction.",
    relatedTerms: ["pratyakṣam"],
  },
  {
    id: "pratyaksam",
    term: "pratyakṣam",
    transliteration: "pratyakṣam",
    definition:
      "Knowledge gained through direct perception - a pramāṇam.",
    vedantaMeaning:
      "Direct perception through the sense organs contacting their objects. It is the most immediate pramāṇam but is limited to revealing objects with attributes (saviśeṣa). Since Brahman is attributeless (nirviśeṣa) and not an object of the senses, pratyakṣam cannot operate as the means to self-knowledge.",
    relatedTerms: ["pramāṇam"],
  },
  {
    id: "pratyavayah",
    term: "pratyavāyaḥ",
    transliteration: "pratyavāyaḥ",
    definition:
      "The concept of pāpam from not doing; decrease, obstacle; contrary course.",
    relatedTerms: ["pāpam"],
  },
  {
    id: "pratyayah",
    term: "pratyayaḥ",
    transliteration: "pratyayaḥ",
    definition:
      "Grammatical termination; suffix; knowledge; conviction; trust; cognition.",
  },
  {
    id: "praudha",
    term: "prauḍha",
    transliteration: "prauḍha",
    definition:
      "Full grown; fully developed; perfected; thick; mighty; proud.",
  },
  {
    id: "pravacanam",
    term: "pravacanam",
    transliteration: "pravacanam",
    definition:
      "Declaration; explanation; study of Vedas; teaching.",
  },
  {
    id: "pravahah",
    term: "pravāhaḥ",
    transliteration: "pravāhaḥ",
    definition:
      "Continuous flow; unbroken succession.",
  },
  {
    id: "pravahina",
    term: "pravāhina",
    transliteration: "pravāhina",
    definition:
      "Flowing; driving onward; streaming forth.",
  },
  {
    id: "pravartaka",
    term: "pravartaka",
    transliteration: "pravartaka",
    definition:
      "Producing, causing; promoting, furthering; pravartikā cause, originator.",
  },
  {
    id: "pravesah",
    term: "praveśaḥ",
    transliteration: "praveśaḥ",
    definition:
      "Entrance; penetration.",
  },
  {
    id: "pravesita",
    term: "praveśita",
    transliteration: "praveśita",
    definition:
      "Led or conducted to; introduced.",
  },
  {
    id: "pravibhaga",
    term: "pravibhāga",
    transliteration: "pravibhāga",
    definition:
      "Divided; separated; distributed.",
  },
  {
    id: "pravista",
    term: "praviṣṭa",
    transliteration: "praviṣṭa",
    definition:
      "Entered.",
  },
  {
    id: "pravivikta",
    term: "pravivikta",
    transliteration: "pravivikta",
    definition:
      "Distinct, separated, detached.",
    relatedTerms: ["praviviktabhuk"],
  },
  {
    id: "praviviktabhuk",
    term: "praviviktabhuk",
    transliteration: "praviviktabhuk",
    definition:
      "A description of ātmā as dreamer, the enjoyer of the subtle existence.",
    relatedTerms: ["ātmā"],
  },
  {
    id: "pravrajanam",
    term: "pravrajanam",
    transliteration: "pravrajanam",
    definition:
      "Renunciation; going abroad.",
  },
  {
    id: "pravrtta",
    term: "pravṛtta",
    transliteration: "pravṛtta",
    definition:
      "Fixed, determined; begun, commenced; engaged in, occupied with, going to; unimpeded.",
  },
  {
    id: "pravrttih",
    term: "pravṛttiḥ",
    transliteration: "pravṛttiḥ",
    definition:
      "Inclination; positive pursuit to gain something; the opposite of nivṛttiḥ.",
    relatedTerms: ["nivṛttiḥ"],
  },
  {
    id: "prayah",
    term: "prāyaḥ",
    transliteration: "prāyaḥ",
    definition:
      "Largest portion; predominance; majority; going away; fasting.",
  },
  {
    id: "prayajah",
    term: "prāyajaḥ",
    transliteration: "prāyajaḥ",
    definition:
      "A principal sacrificial ceremony.",
  },
  {
    id: "prayascittakarma",
    term: "prāyaścittakarma",
    transliteration: "prāyaścittakarma",
    definition:
      "Ritual done to amend a wrong either of commission or omission.",
  },
  {
    id: "prayatanam",
    term: "prayatanam",
    transliteration: "prayatanam",
    definition:
      "Proper effort.",
  },
  {
    id: "prayatnah",
    term: "prayatnaḥ",
    transliteration: "prayatnaḥ",
    definition:
      "Perseverance; effort; activity; effort of the mouth in the production of articulate sounds.",
  },
  {
    id: "prayogah",
    term: "prayogaḥ",
    transliteration: "prayogaḥ",
    definition:
      "Use; application.",
  },
  {
    id: "prayojaka",
    term: "prayojaka",
    transliteration: "prayojaka",
    definition:
      "Causing; leading to; cause.",
  },
  {
    id: "prayojanam",
    term: "prayojanam",
    transliteration: "prayojanam",
    definition:
      "Purpose; object; means; gain; application.",
  },
  {
    id: "prayojya",
    term: "prayojya",
    transliteration: "prayojya",
    definition:
      "To be used or employed; to be produced or caused; effect.",
  },
  {
    id: "prayukta",
    term: "prayukta",
    transliteration: "prayukta",
    definition:
      "Applied, employed, yoked, harnessed; arising or resulting from; endowment.",
  },
  {
    id: "preman",
    term: "preman",
    transliteration: "preman",
    definition:
      "Love; joy.",
  },
  {
    id: "preraka",
    term: "preraka",
    transliteration: "preraka",
    definition:
      "Impelling, urging; sending, directing.",
  },
  {
    id: "preta",
    term: "preta",
    transliteration: "preta",
    definition:
      "Dead.",
  },
  {
    id: "preyas",
    term: "preyas",
    transliteration: "preyas",
    definition:
      "Prosperity; desired results other than mokṣa.",
    relatedTerms: ["mokṣa"],
  },
  {
    id: "pritih",
    term: "prītiḥ",
    transliteration: "prītiḥ",
    definition:
      "Longing; affection; pleasure; love.",
  },
  {
    id: "priya",
    term: "priya",
    transliteration: "priya",
    definition:
      "Pleased - a degree of happiness (a desired object is seen).",
  },
  {
    id: "proksanam",
    term: "prokṣaṇam",
    transliteration: "prokṣaṇam",
    definition:
      "Consecration by sprinkling water.",
  },
  {
    id: "prokta",
    term: "prokta",
    transliteration: "prokta",
    definition:
      "Set forth; told.",
  },
  {
    id: "prthak",
    term: "pṛthak",
    transliteration: "pṛthak",
    definition:
      "ind. Apart from; separate; distinct; without; with the exception of; individual.",
  },
  {
    id: "prthivi",
    term: "pṛthivī",
    transliteration: "pṛthivī",
    definition:
      "Earth.",
  },
  {
    id: "pugah",
    term: "pūgaḥ",
    transliteration: "pūgaḥ",
    definition:
      "Association; union, collection; quantity.",
  },
  {
    id: "puja",
    term: "pūjā",
    transliteration: "pūjā",
    definition:
      "Worship; service to the deity at a shrine or temple.",
    tags: ["worship", "ritual", "devotion", "prayer", "ceremony", "offering"],
  },
  {
    id: "pujanam",
    term: "pūjanam",
    transliteration: "pūjanam",
    definition:
      "Worship; prayer; prayer by mind - mānasa, voice - vācika, or body - kāyikā.",
    relatedTerms: ["kāyika", "mānasa"],
  },
  {
    id: "pujita",
    term: "pūjita",
    transliteration: "pūjita",
    definition:
      "Honored; adored, revered.",
  },
  {
    id: "pujya",
    term: "pūjya",
    transliteration: "pūjya",
    definition:
      "Deserving respect, respectable; honorable; venerable.",
  },
  {
    id: "pumlinga",
    term: "puṃliṅga",
    transliteration: "puṃliṅga",
    definition:
      "Of the masculine gender, masculine.",
  },
  {
    id: "pumsa",
    term: "puṃsa",
    transliteration: "puṃsa",
    definition:
      "A man, male being, mankind.",
  },
  {
    id: "punar",
    term: "punar",
    transliteration: "punar",
    definition:
      "ind. Again; once more; however; punaḥ punaḥ repeatedly; again and again.",
  },
  {
    id: "punarukuam",
    term: "punarukuam",
    transliteration: "punarukuam",
    definition:
      "Repetition.",
  },
  {
    id: "punyam",
    term: "puṇyam",
    transliteration: "puṇyam",
    definition:
      "Virtuous action; karmic good credit.",
  },
  {
    id: "puranam",
    term: "purāṇam",
    transliteration: "purāṇam",
    definition:
      "The body of Hindu mythology; ancient.",
  },
  {
    id: "puras",
    term: "puras",
    transliteration: "puras",
    definition:
      "Before; in front.",
    relatedTerms: ["purastāt"],
  },
  {
    id: "puraskrtya",
    term: "puraskṛtya",
    transliteration: "puraskṛtya",
    definition:
      "ind. Regarding, concerning, on account of; centered on.",
  },
  {
    id: "purastat",
    term: "purastāt",
    transliteration: "purastāt",
    definition:
      "ind. Before, in front of; foremost, in first place.",
    relatedTerms: ["puras"],
  },
  {
    id: "puratana",
    term: "purātana",
    transliteration: "purātana",
    definition:
      "Perennial; eternal; old.",
  },
  {
    id: "puri",
    term: "purī",
    transliteration: "purī",
    definition:
      "The body; city, town.",
  },
  {
    id: "purna",
    term: "pūrṇa",
    transliteration: "pūrṇa",
    definition:
      "Full, whole, entire, complete.",
  },
  {
    id: "purtam",
    term: "pūrtam",
    transliteration: "pūrtam",
    definition:
      "Secular altruistic deeds.",
  },
  {
    id: "purtih",
    term: "pūrtiḥ",
    transliteration: "pūrtiḥ",
    definition:
      "Accomplishment, completion; satisfaction.",
  },
  {
    id: "purusah",
    term: "puruṣaḥ",
    transliteration: "puruṣaḥ",
    definition:
      "Original source of creation; the Supreme Being; a man.",
    vedantaMeaning:
      "In Sāṅkhya, puruṣa is pure consciousness distinct from prakṛti. In Advaita Vedānta, the term refers to ātmā or Brahman — the conscious principle that is the basis of all experience. The Puruṣasūkta describes the entire creation as arising from puruṣa. Unlike in Sāṅkhya, Vedānta does not accept a real duality between puruṣa and prakṛti — they are Brahman and its power.",
    tags: ["spirit", "soul", "consciousness", "supreme", "being", "person"],
    relatedTerms: ["sāṅkhya", "advaita", "ātmā", "brahman"],
  },
  {
    id: "purusakarah",
    term: "puruṣakāraḥ",
    transliteration: "puruṣakāraḥ",
    definition:
      "Free-will; human effort; prowess.",
  },
  {
    id: "purusarthah",
    term: "puruṣārthaḥ",
    transliteration: "puruṣārthaḥ",
    definition:
      "Principal goals of human life: arthaḥ - security, kāmaḥ - pleasure, dharmaḥ - ethics and meaning, mokṣaḥ - liberation.",
    relatedTerms: ["dharmaḥ", "arthaḥ", "mokṣaḥ", "kāmah"],
  },
  {
    id: "purvaka",
    term: "pūrvaka",
    transliteration: "pūrvaka",
    definition:
      "(At end of comp.) Preceded by; preceding; previous.",
  },
  {
    id: "purvapaksah",
    term: "pūrvapakṣaḥ",
    transliteration: "pūrvapakṣaḥ",
    definition:
      "The first objection to an argument; contention; defect.",
  },
  {
    id: "puskala",
    term: "puṣkala",
    transliteration: "puṣkala",
    definition:
      "Near; much, abundant; full, complete; excellent, best; loud.",
  },
  {
    id: "puspam",
    term: "puṣpam",
    transliteration: "puṣpam",
    definition:
      "A flower; blossom.",
  },
  {
    id: "pustih",
    term: "puṣṭiḥ",
    transliteration: "puṣṭiḥ",
    definition:
      "Increase; growth; nourishment; strength; prosperity; wealth.",
  },
  {
    id: "putrah",
    term: "putraḥ",
    transliteration: "putraḥ",
    definition:
      "A son.",
  },
  {
    id: "putrakamesti",
    term: "putrakāmeṣṭi",
    transliteration: "putrakāmeṣṭi",
    definition:
      "The ritual whose result is the birth of a son.",
  },
  {
    id: "racita",
    term: "racita",
    transliteration: "racita",
    definition:
      "Set up; arranged; made.",
  },
  {
    id: "raddha",
    term: "raddha",
    transliteration: "raddha",
    definition:
      "Prepared; accomplished; equipped; successful.",
    relatedTerms: ["śraddhā"],
  },
  {
    id: "ragah",
    term: "rāgaḥ",
    transliteration: "rāgaḥ",
    definition:
      "A like; passion.",
  },
  {
    id: "rahasya",
    term: "rahasya",
    transliteration: "rahasya",
    definition:
      "Secret; private.",
    relatedTerms: ["rahasyam"],
  },
  {
    id: "rahasyam",
    term: "rahasyam",
    transliteration: "rahasyam",
    definition:
      "Secret; mystery; secret doctrine.",
    relatedTerms: ["rahasya"],
  },
  {
    id: "rahita",
    term: "rahita",
    transliteration: "rahita",
    definition:
      "Separated from; deprived of; abandoned; deserted.",
  },
  {
    id: "rahityam",
    term: "rahityam",
    transliteration: "rahityam",
    definition:
      "Being without anything; destitute.",
  },
  {
    id: "rahuh",
    term: "rāhuḥ",
    transliteration: "rāhuḥ",
    definition:
      "Name of a demon whose immortal head causes the eclipses of sun and moon.",
  },
  {
    id: "rajas",
    term: "rajas",
    transliteration: "rajas",
    definition:
      "Energy; ambition; enthusiasm; anxiety; the active guṇa.",
    vedantaMeaning:
      "The guṇa of activity, passion, and restlessness. A rājasika mind is driven by desire, ambition, and attachment to results. It projects outward, seeking fulfillment in objects and achievements. Rajas agitates the mind, making it difficult to sustain the quiet attention needed for self-inquiry. Karma-yoga is the primary means for transforming rajas into sattva.",
    relatedTerms: ["guṇah", "sattvam", "tamas"],
    tags: ["activity", "passion", "energy", "restlessness", "ambition", "desire"],
  },
  {
    id: "rajata",
    term: "rajata",
    transliteration: "rajata",
    definition:
      "Silvery, made of silver.",
  },
  {
    id: "rajjuh",
    term: "rajjuḥ",
    transliteration: "rajjuḥ",
    definition:
      "A rope.",
  },
  {
    id: "raks",
    term: "rakṣ",
    transliteration: "rakṣ",
    definition:
      "To protect; to guard; to take care of; to tend. rakṣati It protects.",
  },
  {
    id: "raksasah",
    term: "rākṣasaḥ",
    transliteration: "rākṣasaḥ",
    definition:
      "fem. rākṣasī Demon; evil spirit.",
  },
  {
    id: "raktih",
    term: "raktiḥ",
    transliteration: "raktiḥ",
    definition:
      "Attachment; affection; loveliness.",
  },
  {
    id: "ramaniya",
    term: "ramaṇīya",
    transliteration: "ramaṇīya",
    definition:
      "Pleasant, enjoyable; good.",
  },
  {
    id: "ramayanam",
    term: "rāmāyaṇam",
    transliteration: "rāmāyaṇam",
    definition:
      "Vālmiki's epic describing the adventures of Rāmaḥ.",
  },
  {
    id: "ranjana",
    term: "rañjana",
    transliteration: "rañjana",
    definition:
      "Pleasing, gratifying; exciting passion; coloring.",
    relatedTerms: ["nirañjana"],
  },
  {
    id: "rasah",
    term: "rasaḥ",
    transliteration: "rasaḥ",
    definition:
      "Taste; aesthetic sentiment; subjective value; affection.",
  },
  {
    id: "rasanam",
    term: "rasanam",
    transliteration: "rasanam",
    definition:
      "Sense of taste; the tongue.",
  },
  {
    id: "rasih",
    term: "rāśiḥ",
    transliteration: "rāśiḥ",
    definition:
      "Heap, mass, collection; a sign of the zodiac.",
  },
  {
    id: "rasmih",
    term: "raśmiḥ",
    transliteration: "raśmiḥ",
    definition:
      "A rope; a beam, ray of light.",
  },
  {
    id: "rathin",
    term: "rathin",
    transliteration: "rathin",
    definition:
      "Driver or owner of a chariot.",
  },
  {
    id: "ratih",
    term: "ratiḥ",
    transliteration: "ratiḥ",
    definition:
      "Pleasure; devotion to pleasant memories; revelling.",
  },
  {
    id: "rc",
    term: "rc",
    transliteration: "rc",
    definition:
      "A hymn, a verse or stanza from the Ṛgveda; the whole of the Ṛgveda.",
  },
  {
    id: "rddhih",
    term: "ṛddhiḥ",
    transliteration: "ṛddhiḥ",
    definition:
      "Increase; growth; birth; tradition; custom.",
  },
  {
    id: "recakah",
    term: "recakaḥ",
    transliteration: "recakaḥ",
    definition:
      "Exhalation, breathing out.",
  },
  {
    id: "retas",
    term: "retas",
    transliteration: "retas",
    definition:
      "Seed; semen.",
  },
  {
    id: "rju",
    term: "ṛju",
    transliteration: "ṛju",
    definition:
      "Straight; beneficial; honest.",
  },
  {
    id: "rnam",
    term: "ṛṇam",
    transliteration: "ṛṇam",
    definition:
      "Debt, obligation, fort, stronghold.",
  },
  {
    id: "rodhanam",
    term: "rodhanam",
    transliteration: "rodhanam",
    definition:
      "Control; discipline; quieting.",
  },
  {
    id: "rogah",
    term: "rogaḥ",
    transliteration: "rogaḥ",
    definition:
      "A disease, sickness.",
  },
  {
    id: "rsih",
    term: "ṛṣiḥ",
    transliteration: "ṛṣiḥ",
    definition:
      "Author of Vedic hymns; saint; sage.",
  },
  {
    id: "rtam",
    term: "ṛtam",
    transliteration: "ṛtam",
    definition:
      "Rule; sacred custom; truth; dharmaḥ.",
    relatedTerms: ["dharmaḥ"],
  },
  {
    id: "rtvijah",
    term: "ṛtvijaḥ",
    transliteration: "ṛtvijaḥ",
    definition:
      "A priest who officiates at a sacrifice.",
  },
  {
    id: "rudra",
    term: "rudra",
    transliteration: "rudra",
    definition:
      "Terrible; formidable. rudraḥ Name of Śiva; hymn addressed to Rudra; deity of ahaṅkāra.",
    relatedTerms: ["śiva"],
  },
  {
    id: "rupam",
    term: "rūpam",
    transliteration: "rūpam",
    definition:
      "Form; appearance; shape.",
    relatedTerms: ["svarūpam"],
  },
  {
    id: "sabala",
    term: "śabala",
    transliteration: "śabala",
    definition:
      "Divided into parts; articulate; spotted; mixed.",
  },
  {
    id: "sabda",
    term: "sābda",
    transliteration: "sābda",
    definition:
      "Relating to or derived from a word or sound.",
    relatedTerms: ["śabdam", "śabdaḥ"],
  },
  {
    id: "sabdah",
    term: "śabdaḥ",
    transliteration: "śabdaḥ",
    definition:
      "Sound; word; verbal means of knowledge - a pramāṇam.",
    vedantaMeaning:
      "As a pramāṇam, śabda refers to words — specifically the words of the Vedas — functioning as a valid, independent means of knowledge. Words operate by removing ignorance about an already-existing thing. The Upaniṣadic words do not create Brahman or produce a new state; they reveal what is already the case — that you are Brahman.",
    relatedTerms: ["pramāṇam"],
  },
  {
    id: "sabdam",
    term: "śabdam",
    transliteration: "śabdam",
    definition:
      "Knowledge gained by words.",
    relatedTerms: ["sābda"],
  },
  {
    id: "sabdapramanam",
    term: "śabdapramāṇam",
    transliteration: "śabdapramāṇam",
    definition:
      "Words as a means of knowledge.",
  },
  {
    id: "sabdita",
    term: "śabdita",
    transliteration: "śabdita",
    definition:
      "Sounded, made to give a sound; uttered; named; taught.",
  },
  {
    id: "saccidanandah",
    term: "saccidānandaḥ",
    transliteration: "saccidānandaḥ",
    definition:
      "Limitless existence, object-free awareness, the true nature of happiness - definition of brahman.",
    relatedTerms: ["brahman"],
  },
  {
    id: "sadbhavah",
    term: "sadbhāvaḥ",
    transliteration: "sadbhāvaḥ",
    definition:
      "Existence of the real; the thought-free 'I'.",
  },
  {
    id: "sadhakah",
    term: "sādhakaḥ",
    transliteration: "sādhakaḥ",
    definition:
      "A disciplined seeker.",
  },
  {
    id: "sadhanam",
    term: "sādhanam",
    transliteration: "sādhanam",
    definition:
      "Means of accomplishment.",
    vedantaMeaning:
      "The means or discipline that prepares the mind for self-knowledge. In Vedānta, sādhana does not produce mokṣa — since mokṣa is already the nature of ātmā — but it removes the obstacles that prevent the recognition of what is already the case. The primary sādhana is śravaṇam (listening to the teaching), manana (reflection), and nididhyāsana (contemplation).",
    relatedTerms: ["sādhanatuṣṭayam", "viveka", "vairāgyam"],
    tags: ["practice", "means", "discipline", "preparation", "method"],
  },
  {
    id: "sadhanatustayam",
    term: "sādhanatuṣṭayam",
    transliteration: "sādhanatuṣṭayam",
    definition:
      "Fourfold qualifications which indicate a person ready for self-knowledge (nityānityavastuvivekaḥ, phalabhogarāgaḥ, śamādiṣaṭkasampatiḥ (śamah damaḥ uparamaḥ titikṣā samādhānam (śraddhā)), mumukṣuttam.",
    vedantaMeaning:
      "The four qualifications that make a person fit (adhikārī) for the pursuit of self-knowledge, as outlined in the Vivekacūḍāmaṇi: (1) viveka — discrimination between the eternal and the non-eternal, (2) vairāgya — dispassion toward the results of action here and hereafter, (3) śamādiṣaṭkasampatti — the six inner disciplines, and (4) mumukṣutvam — an intense desire for liberation. These are not arbitrary prerequisites but natural expressions of maturity.",
    relatedTerms: ["viveka", "vairāgyam", "mumukṣutvam", "samaḥ", "damaḥ", "uparatih", "titikṣā", "śraddhā"],
  },
  {
    id: "sadharana",
    term: "sādhāraṇa",
    transliteration: "sādhāraṇa",
    definition:
      "Common; general.",
  },
  {
    id: "sadhita",
    term: "sādhita",
    transliteration: "sādhita",
    definition:
      "Effected, achieved, accomplished; demonstrated; made good.",
  },
  {
    id: "sadhu",
    term: "sādhu",
    transliteration: "sādhu",
    definition:
      "Good; virtuous; excellent; right; sādhuḥ A virtuous man.",
  },
  {
    id: "sadhya",
    term: "sādhya",
    transliteration: "sādhya",
    definition:
      "To be accomplished.",
    relatedTerms: ["sādhyam", "sādhyasama"],
  },
  {
    id: "sadhyam",
    term: "sādhyam",
    transliteration: "sādhyam",
    definition:
      "Conclusion, accomplishment; the predicate of a proposition.",
    relatedTerms: ["sādhya"],
  },
  {
    id: "sadhyasama",
    term: "sādhyasama",
    transliteration: "sādhyasama",
    definition:
      "An assertion identical with the point to be proved.",
    relatedTerms: ["sādhya"],
  },
  {
    id: "sadrsyam",
    term: "sādṛśyam",
    transliteration: "sādṛśyam",
    definition:
      "Equivalence; similarity.",
  },
  {
    id: "saguna",
    term: "saguṇa",
    transliteration: "saguṇa",
    definition:
      "Having attributes or qualities.",
    vedantaMeaning:
      "Brahman as described with attributes — omniscient, omnipotent, the creator and sustainer of the universe. Saguṇa Brahman is Īśvara — Brahman as understood from the standpoint of the empirical world. The distinction between nirguṇa and saguṇa is not a distinction between two Brahmans but two levels of teaching — saguṇa descriptions prepare the mind; nirguṇa teaching reveals the final truth.",
    relatedTerms: ["nirguṇaḥ", "brahman", "guṇah", "īśvarah"],
    tags: ["qualified", "with form", "attributes", "personal", "conditioned"],
  },
  {
    id: "sagunam-brahma",
    term: "saguṇaṃ brahma",
    transliteration: "saguṇaṃ brahma",
    definition:
      "The Lord as source, sustenance, and resolution - used as an object of meditation.",
  },
  {
    id: "sahaja",
    term: "sahaja",
    transliteration: "sahaja",
    definition:
      "Natural; innate; inborn.",
  },
  {
    id: "sahasam",
    term: "sāhasam",
    transliteration: "sāhasam",
    definition:
      "Enthusiasm, daring; violence; force; cruelty.",
  },
  {
    id: "sahasram",
    term: "sahasram",
    transliteration: "sahasram",
    definition:
      "A thousand.",
  },
  {
    id: "sahayah",
    term: "sahāyaḥ",
    transliteration: "sahāyaḥ",
    definition:
      "Friend; helper.",
  },
  {
    id: "sahayyam",
    term: "sāhāyyam",
    transliteration: "sāhāyyam",
    definition:
      "Assistance, help; friendship, alliance.",
  },
  {
    id: "sahita",
    term: "sahita",
    transliteration: "sahita",
    definition:
      "Accompanied or attended by; together with.",
  },
  {
    id: "sahityam",
    term: "sāhityam",
    transliteration: "sāhityam",
    definition:
      "Poetry and rhetorical composition; association.",
  },
  {
    id: "sajatiya",
    term: "sajātīya",
    transliteration: "sajātīya",
    definition:
      "Of the same kind; similar; like.",
  },
  {
    id: "sakala",
    term: "sakala",
    transliteration: "sakala",
    definition:
      "All; whole; together with all parts.",
    relatedTerms: ["kalā"],
  },
  {
    id: "sakalyam",
    term: "sākalyam",
    transliteration: "sākalyam",
    definition:
      "Entirety, totality.",
  },
  {
    id: "sakarmaka",
    term: "sakarmaka",
    transliteration: "sakarmaka",
    definition:
      "Having an object (e.g. a transitive verb).",
  },
  {
    id: "sakatah",
    term: "sakaṭaḥ",
    transliteration: "sakaṭaḥ",
    definition:
      "Presence; vicinity; nearness.",
  },
  {
    id: "sakha",
    term: "śākhā",
    transliteration: "śākhā",
    definition:
      "Branch; clan or tradition passing down a Vedic text of the same name; a part or subdivision of a work.",
  },
  {
    id: "sakrt",
    term: "sakṛt",
    transliteration: "sakṛt",
    definition:
      "Once; at one time; always.",
  },
  {
    id: "saksat",
    term: "sākṣat",
    transliteration: "sākṣat",
    definition:
      "Evidently; visibly; in comp. direct (e.g. direct perception - to see with one's own eyes).",
  },
  {
    id: "saksi",
    term: "sākṣī",
    transliteration: "sākṣī",
    definition:
      "Witness.",
    vedantaMeaning:
      "The witness consciousness — ātmā as the unchanging awareness in whose presence all experiences (waking, dream, and deep sleep) are known. Sākṣī is not a 'watcher' in the sense of a subject observing objects, but the self-luminous consciousness that makes all knowing possible. It is never affected by what it witnesses, just as space is not affected by what it contains.",
    relatedTerms: ["ātmā", "caitanyam", "jīvah"],
    tags: ["witness", "observer", "awareness", "consciousness", "seer"],
  },
  {
    id: "saksipratyaksam",
    term: "sākṣipratyakṣam",
    transliteration: "sākṣipratyakṣam",
    definition:
      "Witness perception (i.e. without the senses).",
  },
  {
    id: "sakta",
    term: "sakta",
    transliteration: "sakta",
    definition:
      "Attached; fixed on; relating to.",
    relatedTerms: ["saktaḥ"],
  },
  {
    id: "saktah",
    term: "saktaḥ",
    transliteration: "saktaḥ",
    definition:
      "One who does karma for its results.",
    relatedTerms: ["karma"],
  },
  {
    id: "saktih",
    term: "śaktiḥ",
    transliteration: "śaktiḥ",
    definition:
      "Power; faculty; the relation of a term to the thing designated.",
    relatedTerms: ["āsaktiḥ"],
  },
  {
    id: "sakunah",
    term: "śakuṇaḥ",
    transliteration: "śakuṇaḥ",
    definition:
      "An omen.",
  },
  {
    id: "sakunih",
    term: "śakuniḥ",
    transliteration: "śakuniḥ",
    definition:
      "A bird; vulture, cock, eagle.",
  },
  {
    id: "sakya",
    term: "śakya",
    transliteration: "śakya",
    definition:
      "Possible, capable of being done or effected; directly conveyed or expressed; meaning.",
  },
  {
    id: "sala",
    term: "śālā",
    transliteration: "śālā",
    definition:
      "Room; house, abode.",
  },
  {
    id: "salagramah",
    term: "śālagrāmaḥ",
    transliteration: "śālagrāmaḥ",
    definition:
      "A fossil of an animal like a nautiloid, which is emblematic of Viṣṇu.",
  },
  {
    id: "sam",
    term: "sam",
    transliteration: "sam",
    definition:
      "An auspicious particle meaning happiness; prosperity; success as part of a blessing.",
  },
  {
    id: "samacarah",
    term: "samācāraḥ",
    transliteration: "samācāraḥ",
    definition:
      "Proper conduct, behavior, practice; news; proceeding, going.",
  },
  {
    id: "samadhanam",
    term: "samādhānam",
    transliteration: "samādhānam",
    definition:
      "Fixing the mind in contemplation on the true nature of self.",
    vedantaMeaning:
      "The capacity to hold the mind steadily on the teaching and on the nature of ātmā — the last of the six inner disciplines. In Vedānta, samādhāna is not a trance state but a focused, abiding attention to what the śāstra reveals. It is the mind's ability to dwell on the truth rather than being scattered by competing demands and distractions.",
    relatedTerms: ["ātmā"],
  },
  {
    id: "samadhih",
    term: "samādhiḥ",
    transliteration: "samādhiḥ",
    definition:
      "Absorption; meditation without division of meditator and object of meditation - one of the eight aṅgas of Patañjali's Yoga.",
    relatedTerms: ["yogaḥ", "manas", "ātmā"],
    tags: ["meditation", "absorption", "concentration", "focus", "stillness", "contemplation"],
  },
  {
    id: "samagra",
    term: "samagra",
    transliteration: "samagra",
    definition:
      "All, whole, complete.",
  },
  {
    id: "samagri",
    term: "sāmagrī",
    transliteration: "sāmagrī",
    definition:
      "A collection of materials; ingredients; apparatus.",
  },
  {
    id: "samah",
    term: "samaḥ",
    transliteration: "samaḥ",
    definition:
      "Management of the mind.",
    vedantaMeaning:
      "Mastery over the mind — the capacity to manage the mind so that it does not run unchecked after objects. Śama is the first of the six inner disciplines (śamādiṣaṭkasampatti). It is not the destruction of thought but the ability to bring the mind back to the teaching and to what is being inquired into. A mind without śama cannot sustain the attention needed for self-inquiry.",
    relatedTerms: ["damaḥ", "uparatih", "titikṣā", "śraddhā", "sādhanatuṣṭayam"],
    tags: ["mind-control", "equanimity", "calm", "discipline", "composure"],
  },
  {
    id: "samaharah",
    term: "samāhāraḥ",
    transliteration: "samāhāraḥ",
    definition:
      "A collection, aggregate; collection of words or sentences; a subdivision of dvandva compounds expressing an aggregate.",
    relatedTerms: ["samaḥ"],
  },
  {
    id: "samahita",
    term: "samāhita",
    transliteration: "samāhita",
    definition:
      "Brought together; adjusted; composed; absorbed in.",
    relatedTerms: ["samaḥ"],
  },
  {
    id: "samakhya",
    term: "samākhyā",
    transliteration: "samākhyā",
    definition:
      "Explanation, interpretation; fame.",
  },
  {
    id: "saman",
    term: "sāman",
    transliteration: "sāman",
    definition:
      "The Sāma Veda; a text or verse from the Sāma Veda; calming; mildness.",
    relatedTerms: ["samanta", "samanvita", "samañjasa", "samāna", "samānaḥ", "sāmānya"],
  },
  {
    id: "samana",
    term: "samāna",
    transliteration: "samāna",
    definition:
      "Same; equal; similar.",
    relatedTerms: ["samānaḥ", "sāman"],
  },
  {
    id: "samanadhikarana",
    term: "samānādhikaraṇa",
    transliteration: "samānādhikaraṇa",
    definition:
      "Being in the same category; agreeing in grammatical case.",
  },
  {
    id: "samanadhikaranyam",
    term: "samānādhikaraṇyam",
    transliteration: "samānādhikaraṇyam",
    definition:
      "Words in apposition relating to the same object.",
  },
  {
    id: "samanah",
    term: "samānaḥ",
    transliteration: "samānaḥ",
    definition:
      "Digestion - a prāṇaḥ seated in the liver, glands and stomach.",
    relatedTerms: ["prāṇaḥ"],
  },
  {
    id: "samanjasa",
    term: "samañjasa",
    transliteration: "samañjasa",
    definition:
      "Proper, reasonable, right; correct, true, accurate; clear.",
    relatedTerms: ["sāman"],
  },
  {
    id: "samanta",
    term: "samanta",
    transliteration: "samanta",
    definition:
      "Complete, entire; universal. samantaḥ Limit, boundary.",
    relatedTerms: ["samantatah", "sāman"],
  },
  {
    id: "samantatah",
    term: "samantatah",
    transliteration: "samantatah",
    definition:
      "Always the same.",
    relatedTerms: ["samanta"],
  },
  {
    id: "samanvayah",
    term: "samanvayaḥ",
    transliteration: "samanvayaḥ",
    definition:
      "Mutual connection; succession; applicability.",
  },
  {
    id: "samanvita",
    term: "samanvita",
    transliteration: "samanvita",
    definition:
      "Endowed with; connected with.",
    relatedTerms: ["sāman"],
  },
  {
    id: "samanya",
    term: "sāmānya",
    transliteration: "sāmānya",
    definition:
      "Common; universal; general; alike; ordinary.",
    relatedTerms: ["sāman"],
  },
  {
    id: "samanyadharmah",
    term: "sāmānyadharmaḥ",
    transliteration: "sāmānyadharmaḥ",
    definition:
      "Universal ethics; universal values.",
  },
  {
    id: "samaptih",
    term: "samāptiḥ",
    transliteration: "samāptiḥ",
    definition:
      "End; conclusion.",
  },
  {
    id: "samarpanam",
    term: "samarpaṇam",
    transliteration: "samarpaṇam",
    definition:
      "Giving or handing over to; delivering.",
  },
  {
    id: "samarpita",
    term: "samarpita",
    transliteration: "samarpita",
    definition:
      "Placed; rooted.",
  },
  {
    id: "samartha",
    term: "samartha",
    transliteration: "samartha",
    definition:
      "Capable; competent; fit; suitable.",
  },
  {
    id: "samarthyam",
    term: "sāmarthyam",
    transliteration: "sāmarthyam",
    definition:
      "Power; capacity; sameness of meaning; oneness of aim.",
  },
  {
    id: "samasah",
    term: "samāsaḥ",
    transliteration: "samāsaḥ",
    definition:
      "Compound word (dvandva tatpuruṣa bahuvrīhi avyayībhāva); union; collection.",
    relatedTerms: ["bahuvrīhi"],
  },
  {
    id: "samasta",
    term: "samasta",
    transliteration: "samasta",
    definition:
      "All; whole; pervading the whole; thrown together, combined.",
  },
  {
    id: "samastakasampatti",
    term: "samāṣṭakasampatti",
    transliteration: "samāṣṭakasampatti",
    definition:
      "Six virtues of the sādhaka; see sādhanacatuṣṭayam.",
  },
  {
    id: "samastih",
    term: "samāstiḥ",
    transliteration: "samāstiḥ",
    definition:
      "Total.",
  },
  {
    id: "samatvam",
    term: "samatvam",
    transliteration: "samatvam",
    definition:
      "Sameness; identity; similarity; equality. Also samatā.",
  },
  {
    id: "samavastha",
    term: "samāvasthā",
    transliteration: "samāvasthā",
    definition:
      "Equilibrium, fixed state, similar condition.",
  },
  {
    id: "samavayah",
    term: "samavāyaḥ",
    transliteration: "samavāyaḥ",
    definition:
      "Combination; union; aggregate; multitude; close connection.",
  },
  {
    id: "sambaddha",
    term: "sambaddha",
    transliteration: "sambaddha",
    definition:
      "Bound or fastened together; connected with, related to; endowed with.",
  },
  {
    id: "sambandhah",
    term: "sambandhaḥ",
    transliteration: "sambandhaḥ",
    definition:
      "Connection; association; relationship.",
  },
  {
    id: "sambhavah",
    term: "sambhavaḥ",
    transliteration: "sambhavaḥ",
    definition:
      "Birth, production, arising; cause, origin; compatibility, agreement.",
  },
  {
    id: "sambhavana",
    term: "sambhāvanā",
    transliteration: "sambhāvanā",
    definition:
      "Supposition; considering; adequacy.",
  },
  {
    id: "sambhinna",
    term: "sambhinna",
    transliteration: "sambhinna",
    definition:
      "United or combined with; completely broken.",
  },
  {
    id: "sambhutih",
    term: "sambhūtiḥ",
    transliteration: "sambhūtiḥ",
    definition:
      "Power; birth; union; suitability; knowledge.",
  },
  {
    id: "sambodhah",
    term: "sambodhaḥ",
    transliteration: "sambodhaḥ",
    definition:
      "Instruction, explaining.",
  },
  {
    id: "sambuddhah",
    term: "sambuddhaḥ",
    transliteration: "sambuddhaḥ",
    definition:
      "Wisdom, knowledge.",
  },
  {
    id: "sambuddhih",
    term: "sambuddhiḥ",
    transliteration: "sambuddhiḥ",
    definition:
      "Perfect knowledge or perception; consciousness; addressing.",
  },
  {
    id: "samharah",
    term: "saṃhāraḥ",
    transliteration: "saṃhāraḥ",
    definition:
      "Dissolution; drawing together; contraction; destruction.",
  },
  {
    id: "samhata",
    term: "saṃhata",
    transliteration: "saṃhata",
    definition:
      "Firmly united; closed; compact; firm; combined; joined.",
  },
  {
    id: "samhatih",
    term: "saṃhatiḥ",
    transliteration: "saṃhatiḥ",
    definition:
      "Combination; union; close contact.",
  },
  {
    id: "samhita",
    term: "saṃhitā",
    transliteration: "saṃhitā",
    definition:
      "Combination; sandhiḥ; conjunction; hymnical text of the Veda.",
    relatedTerms: ["sandhiḥ"],
  },
  {
    id: "samidh",
    term: "samidh",
    transliteration: "samidh",
    definition:
      "Wood, fuel - especially for a Vedic fire or for the guru's hearth.",
  },
  {
    id: "samipa",
    term: "samīpa",
    transliteration: "samīpa",
    definition:
      "Near, close by, adjacent.",
  },
  {
    id: "samipyam",
    term: "sāmīpyam",
    transliteration: "sāmīpyam",
    definition:
      "Nearness; proximity; vicinity.",
  },
  {
    id: "samithah",
    term: "samithaḥ",
    transliteration: "samithaḥ",
    definition:
      "Oblation, an offering.",
  },
  {
    id: "samjna",
    term: "saṃjñā",
    transliteration: "saṃjñā",
    definition:
      "A name or noun having a special meaning; consciousness; knowledge; a technical term.",
    aliases: ["samdnya"],
  },
  {
    id: "sammatih",
    term: "sammatiḥ",
    transliteration: "sammatiḥ",
    definition:
      "Knowledge of self; agreement; consent; approval; respect; esteem.",
  },
  {
    id: "sammohah",
    term: "sammohaḥ",
    transliteration: "sammohaḥ",
    definition:
      "Torpor; blackout; bewilderment.",
  },
  {
    id: "samnihita",
    term: "samnihita",
    transliteration: "samnihita",
    definition:
      "Closest; abiding; not separate from the jīvaḥ; meaning of 'I'.",
    relatedTerms: ["jīvah"],
  },
  {
    id: "sampad",
    term: "sampad",
    transliteration: "sampad",
    definition:
      "Success; affluence; wealth; benefit; blessing.",
    relatedTerms: ["sampādanam"],
  },
  {
    id: "sampadanam",
    term: "sampādanam",
    transliteration: "sampādanam",
    definition:
      "Accomplishment; fulfillment; gaining.",
    relatedTerms: ["sampad"],
  },
  {
    id: "sampanna",
    term: "sampanna",
    transliteration: "sampanna",
    definition:
      "Endowed with; successful; completed.",
  },
  {
    id: "sampattih",
    term: "sampattiḥ",
    transliteration: "sampattiḥ",
    definition:
      "Spiritual wealth; values; fulfillment; excellence; success.",
  },
  {
    id: "sampradanam",
    term: "sampradānam",
    transliteration: "sampradānam",
    definition:
      "Gift; donation; handing over completely; the sense of the dative case.",
  },
  {
    id: "sampradayah",
    term: "sampradāyaḥ",
    transliteration: "sampradāyaḥ",
    definition:
      "Indian tradition of teaching; tradition.",
  },
  {
    id: "sampradhanam",
    term: "sampradhānam",
    transliteration: "sampradhānam",
    definition:
      "Ascertainment; consideration.",
  },
  {
    id: "sampratipattih",
    term: "sampratipattiḥ",
    transliteration: "sampratipattiḥ",
    definition:
      "Understanding; gain, approach, arrival; presence.",
  },
  {
    id: "sampravesah",
    term: "sampraveśaḥ",
    transliteration: "sampraveśaḥ",
    definition:
      "Introduction; entrance.",
  },
  {
    id: "samprkta",
    term: "sampṛkta",
    transliteration: "sampṛkta",
    definition:
      "Blended, mixed, connected.",
  },
  {
    id: "sampurna",
    term: "sampūrṇa",
    transliteration: "sampūrṇa",
    definition:
      "Full; complete; prosperous; fortunate; fruitful.",
  },
  {
    id: "samsara",
    term: "saṃsāra",
    transliteration: "saṃsāra",
    definition:
      "The cycle of becoming; the course of worldly life; the jīva's reality.",
    vedantaMeaning:
      "The beginningless cycle of birth, death, and rebirth driven by karma and sustained by self-ignorance. Saṃsāra is not a place but a condition — the experience of being a limited, wanting, mortal being. It is the direct consequence of adhyāsa. Since saṃsāra is rooted in ignorance alone, it is resolved by knowledge alone, not by action.",
    relatedTerms: ["mokṣa", "karma", "avidyā", "jīvah"],
    tags: ["cycle", "rebirth", "suffering", "bondage", "worldly", "transmigration"],
  },
  {
    id: "samsargah",
    term: "saṃsargaḥ",
    transliteration: "saṃsargaḥ",
    definition:
      "Association; union; mixture.",
  },
  {
    id: "samsayah",
    term: "saṃśayaḥ",
    transliteration: "saṃśayaḥ",
    definition:
      "Doubt where there are two or more opinions about a topic; indecision.",
  },
  {
    id: "samsiddhih",
    term: "saṃsiddhiḥ",
    transliteration: "saṃsiddhiḥ",
    definition:
      "Mokṣaḥ; complete accomplishment.",
    relatedTerms: ["mokṣaḥ"],
  },
  {
    id: "samskarah",
    term: "saṃskāraḥ",
    transliteration: "saṃskāraḥ",
    definition:
      "Impression; disposition; preparation; refinement; embellishment.",
  },
  {
    id: "samskaryam",
    term: "saṃskāryam",
    transliteration: "saṃskāryam",
    definition:
      "That which can be purified or cleansed - one of four possible results of karma.",
    relatedTerms: ["karma"],
  },
  {
    id: "samskrta",
    term: "saṃskṛta",
    transliteration: "saṃskṛta",
    definition:
      "Made perfect; accurately formed and elaborated; purified.",
  },
  {
    id: "samsrayah",
    term: "saṃśrayaḥ",
    transliteration: "saṃśrayaḥ",
    definition:
      "Help; protection; guidance; resting place; attachment.",
  },
  {
    id: "samsrjya",
    term: "saṃsṛjya",
    transliteration: "saṃsṛjya",
    definition:
      "Combined, conjoined; associated, connected; created.",
  },
  {
    id: "samsthanam",
    term: "saṃsthānam",
    transliteration: "saṃsthānam",
    definition:
      "Appearance, presence; collection, quantity; form, shape.",
  },
  {
    id: "samsthapanam",
    term: "saṃsthāpanam",
    transliteration: "saṃsthāpanam",
    definition:
      "Re-establishment; initiating; restoring; collecting.",
  },
  {
    id: "samuccayah",
    term: "samuccayaḥ",
    transliteration: "samuccayaḥ",
    definition:
      "Collection; aggregation; conjunction of words or sentences; synthesis.",
  },
  {
    id: "samudayah",
    term: "samudāyaḥ",
    transliteration: "samudāyaḥ",
    definition:
      "Collection; combination; assent.",
  },
  {
    id: "samudrah",
    term: "samudraḥ",
    transliteration: "samudraḥ",
    definition:
      "The ocean.",
  },
  {
    id: "samuhah",
    term: "samūhaḥ",
    transliteration: "samūhaḥ",
    definition:
      "Collection; aggregate.",
  },
  {
    id: "samvadah",
    term: "saṃvādaḥ",
    transliteration: "saṃvādaḥ",
    definition:
      "Dialogue imparting knowledge; teacher-student discourse.",
  },
  {
    id: "samvargah",
    term: "saṃvargaḥ",
    transliteration: "saṃvargaḥ",
    definition:
      "Plunder; a name for agni.",
  },
  {
    id: "samvatsarah",
    term: "saṃvatsaraḥ",
    transliteration: "saṃvatsaraḥ",
    definition:
      "A year.",
  },
  {
    id: "samvijnanam",
    term: "saṃvijñānam",
    transliteration: "saṃvijñānam",
    definition:
      "Agreement, consent; thorough understanding; perception, knowledge.",
    aliases: ["samvidnyanam"],
  },
  {
    id: "samvit",
    term: "saṃvit",
    transliteration: "saṃvit",
    definition:
      "Knowledge; understanding; consciousness.",
  },
  {
    id: "samvrta",
    term: "saṃvṛta",
    transliteration: "saṃvṛta",
    definition:
      "Covered; hidden; closed, surrounded.",
  },
  {
    id: "samvrtih",
    term: "saṃvṛtiḥ",
    transliteration: "saṃvṛtiḥ",
    definition:
      "False; covering, covering up; hiding; covert design.",
  },
  {
    id: "samvrtja",
    term: "saṃvṛtja",
    transliteration: "saṃvṛtja",
    definition:
      "Become, happened, occurred; fulfilled, accomplished; collected; covered.",
  },
  {
    id: "samvrttih",
    term: "saṃvṛttiḥ",
    transliteration: "saṃvṛttiḥ",
    definition:
      "Becoming, happening, occurrence.",
  },
  {
    id: "samvyavaharah",
    term: "saṃvyavahāraḥ",
    transliteration: "saṃvyavahāraḥ",
    definition:
      "Trade; transaction; business; duty.",
  },
  {
    id: "samyak",
    term: "samyak",
    transliteration: "samyak",
    definition:
      "Proper.",
  },
  {
    id: "samyam",
    term: "sāmyam",
    transliteration: "sāmyam",
    definition:
      "Sameness; equality.",
  },
  {
    id: "samyogah",
    term: "saṃyogaḥ",
    transliteration: "saṃyogaḥ",
    definition:
      "Association, combination, union, addition, a set.",
  },
  {
    id: "sanatana",
    term: "sanātana",
    transliteration: "sanātana",
    definition:
      "Everlasting; permanent.",
  },
  {
    id: "sancitakarma",
    term: "sañcitakarma",
    transliteration: "sañcitakarma",
    definition:
      "Accumulated karma accounting for rebirths.",
    relatedTerms: ["karma"],
  },
  {
    id: "sandehah",
    term: "sandehaḥ",
    transliteration: "sandehaḥ",
    definition:
      "Doubt, uncertainty.",
  },
  {
    id: "sandhanam",
    term: "sandhānam",
    transliteration: "sandhānam",
    definition:
      "Joining; uniting; compounding.",
    relatedTerms: ["dhānam", "anusandhānam"],
  },
  {
    id: "sandhih",
    term: "sandhiḥ",
    transliteration: "sandhiḥ",
    definition:
      "Union; connection; rules for coalescence of script and sounds.",
  },
  {
    id: "sandhya",
    term: "sandhyā",
    transliteration: "sandhyā",
    definition:
      "Union; division; morning or evening twilight.",
  },
  {
    id: "sandhyavandana",
    term: "sandhyāvandana",
    transliteration: "sandhyāvandana",
    definition:
      "Morning and evening prayers.",
  },
  {
    id: "sandigdha",
    term: "sandigdha",
    transliteration: "sandigdha",
    definition:
      "Doubtful; uncertain; mistaken for; confused. sandigdham Doubt, uncertainty.",
  },
  {
    id: "sangah",
    term: "saṅgaḥ",
    transliteration: "saṅgaḥ",
    definition:
      "Attachment; union; contact; friendship.",
  },
  {
    id: "sangata",
    term: "saṅgata",
    transliteration: "saṅgata",
    definition:
      "Joined or united with; collected; fitted together; appropriate.",
  },
  {
    id: "sangatih",
    term: "saṅgatiḥ",
    transliteration: "saṅgatiḥ",
    definition:
      "Connection; meeting; association.",
  },
  {
    id: "sanghah",
    term: "saṅghaḥ",
    transliteration: "saṅghaḥ",
    definition:
      "Group; collection; close contact; combination.",
  },
  {
    id: "sanghatah",
    term: "saṅghātaḥ",
    transliteration: "saṅghātaḥ",
    definition:
      "Assemblage; combination; union.",
  },
  {
    id: "sangrahah",
    term: "saṅgrahaḥ",
    transliteration: "saṅgrahaḥ",
    definition:
      "Seizing; governing; inclusion; summary; accumulation; protection; admission; grip.",
  },
  {
    id: "sangrahanam",
    term: "saṅgrahaṇam",
    transliteration: "saṅgrahaṇam",
    definition:
      "Protection; grasping; collecting.",
  },
  {
    id: "sanka",
    term: "śaṅkā",
    transliteration: "śaṅkā",
    definition:
      "Doubt; suspicion; apprehension; wrong impression.",
    relatedTerms: ["saṅkalpaḥ", "śaṅkaraḥ", "śaṅkaryam"],
  },
  {
    id: "sankalpah",
    term: "saṅkalpaḥ",
    transliteration: "saṅkalpaḥ",
    definition:
      "Mental resolve; desire; will; fancy; mind; decision; gesture or act with a certain goal.",
    relatedTerms: ["śaṅkā"],
  },
  {
    id: "sankarah",
    term: "śaṅkaraḥ",
    transliteration: "śaṅkaraḥ",
    definition:
      "Venerated teacher of Vedānta; author of Upaniṣadbhāṣyam, Brahmasūtrabhāṣyam and other texts.",
    relatedTerms: ["śaṅkā"],
  },
  {
    id: "sankaryam",
    term: "śaṅkaryam",
    transliteration: "śaṅkaryam",
    definition:
      "Mixture, confusion.",
    relatedTerms: ["śaṅkā"],
  },
  {
    id: "sanketah",
    term: "saṅketaḥ",
    transliteration: "saṅketaḥ",
    definition:
      "Engagement; agreement; indicatory sign or mark.",
  },
  {
    id: "sankhah",
    term: "śaṅkhaḥ",
    transliteration: "śaṅkhaḥ",
    definition:
      "The conch shell; shell.",
  },
  {
    id: "sankhya",
    term: "sāṅkhya",
    transliteration: "sāṅkhya",
    definition:
      "That which is well unfolded by the Veda; knowledge of brahman; reasoning; calculating; one of the major Hindu philosophies.",
    relatedTerms: ["brahman"],
  },
  {
    id: "sanklesah",
    term: "saṅkleśaḥ",
    transliteration: "saṅkleśaḥ",
    definition:
      "Pain, affliction.",
  },
  {
    id: "sankocah",
    term: "saṅkocaḥ",
    transliteration: "saṅkocaḥ",
    definition:
      "Contraction; closing; abridgement.",
  },
  {
    id: "sankocakah",
    term: "saṅkocakaḥ",
    transliteration: "saṅkocakaḥ",
    definition:
      "A restrictor; limiter; limitation.",
  },
  {
    id: "sankramanam",
    term: "saṅkramaṇam",
    transliteration: "saṅkramaṇam",
    definition:
      "Progress; transition; concurrence.",
  },
  {
    id: "sanksepah",
    term: "saṅkṣepaḥ",
    transliteration: "saṅkṣepaḥ",
    definition:
      "Brief exposition; throwing together; conciseness.",
  },
  {
    id: "sankula",
    term: "saṅkula",
    transliteration: "saṅkula",
    definition:
      "Mixed up; filled; inconsistent.",
  },
  {
    id: "sanmargah",
    term: "sanmārgaḥ",
    transliteration: "sanmārgaḥ",
    definition:
      "The true path; the path of truth.",
  },
  {
    id: "sanmatrah",
    term: "sanmātraḥ",
    transliteration: "sanmātraḥ",
    definition:
      "Consisting of sat alone.",
    relatedTerms: ["sat"],
  },
  {
    id: "sanniddhih",
    term: "sanniddhiḥ",
    transliteration: "sanniddhiḥ",
    definition:
      "Proximity, vicinity; putting down together.",
  },
  {
    id: "sannikarsah",
    term: "sānnikarṣaḥ",
    transliteration: "sānnikarṣaḥ",
    definition:
      "Vicinity; proximity; connection.",
  },
  {
    id: "sannikrsta",
    term: "sānnikṛṣṭa",
    transliteration: "sānnikṛṣṭa",
    definition:
      "Near; adjacent.",
  },
  {
    id: "sannyasah",
    term: "sannyāsaḥ",
    transliteration: "sannyāsaḥ",
    definition:
      "Renunciation; the vow of non-injury; a life committed to knowledge and free of life's roles.",
    vedantaMeaning:
      "The life of renunciation — giving up all obligatory and desire-prompted actions for the single-pointed pursuit of self-knowledge. In the Gītā, Kṛṣṇa also speaks of an inner sannyāsa — the renunciation of the sense of doership and the results of action. Whether formal or internal, sannyāsa reflects the understanding that no action can produce what knowledge alone reveals.",
    relatedTerms: ["gītā", "kṛṣṇa"],
  },
  {
    id: "sannyasi",
    term: "sannyāsī",
    transliteration: "sannyāsī",
    definition:
      "One who commits to a life free of role-playing.",
  },
  {
    id: "santa",
    term: "śānta",
    transliteration: "śānta",
    definition:
      "Calm, quiet, undisturbed, silent.",
    relatedTerms: ["santatiḥ", "santānam", "santāpaḥ", "sāntaḥ"],
  },
  {
    id: "santah",
    term: "sāntaḥ",
    transliteration: "sāntaḥ",
    definition:
      "With an end, finite.",
    relatedTerms: ["śānta"],
  },
  {
    id: "santanam",
    term: "santānam",
    transliteration: "santānam",
    definition:
      "Continuity; extension; expanse; child, progeny.",
    relatedTerms: ["śānta"],
  },
  {
    id: "santapah",
    term: "santāpaḥ",
    transliteration: "santāpaḥ",
    definition:
      "Complaint; heat; distress; remorse; sadness.",
    relatedTerms: ["śānta"],
  },
  {
    id: "santatih",
    term: "santatiḥ",
    transliteration: "santatiḥ",
    definition:
      "Continuous flow; series; extent; extension.",
    relatedTerms: ["śānta"],
  },
  {
    id: "santih",
    term: "śāntiḥ",
    transliteration: "śāntiḥ",
    definition:
      "Calmness; rest; cessation, peace.",
  },
  {
    id: "santosah",
    term: "santoṣaḥ",
    transliteration: "santoṣaḥ",
    definition:
      "Happiness; satisfaction; contentment.",
  },
  {
    id: "santrasah",
    term: "santrāsaḥ",
    transliteration: "santrāsaḥ",
    definition:
      "Fear; alarm.",
  },
  {
    id: "santusta",
    term: "santuṣṭa",
    transliteration: "santuṣṭa",
    definition:
      "Content; happy; satisfied.",
  },
  {
    id: "sapatnah",
    term: "sapatnaḥ",
    transliteration: "sapatnaḥ",
    definition:
      "Rival; adversary; enemy.",
  },
  {
    id: "saphalyam",
    term: "sāphalyam",
    transliteration: "sāphalyam",
    definition:
      "Fruitfulness, usefulness; profit, advantage.",
  },
  {
    id: "saptami",
    term: "saptamī",
    transliteration: "saptamī",
    definition:
      "The seventh or locative case in grammar; seventh day of a lunar fortnight.",
  },
  {
    id: "saptapadi",
    term: "saptapadī",
    transliteration: "saptapadī",
    definition:
      "The seven steps tradition at a marriage.",
  },
  {
    id: "sara",
    term: "sāra",
    transliteration: "sāra",
    definition:
      "Best; essential; genuine; highest.",
    tags: ["essence", "essential", "core", "best", "genuine"],
    relatedTerms: ["akṣara"],
  },
  {
    id: "saram",
    term: "sāram",
    transliteration: "sāram",
    definition:
      "Essence. Also sāraḥ.",
  },
  {
    id: "saranam",
    term: "śaraṇam",
    transliteration: "śaraṇam",
    definition:
      "Refuge, protection, sanctuary.",
  },
  {
    id: "sarathih",
    term: "sārathiḥ",
    transliteration: "sārathiḥ",
    definition:
      "Charioteer.",
  },
  {
    id: "sargah",
    term: "sargaḥ",
    transliteration: "sargaḥ",
    definition:
      "Abandonment; creation of the universe; Nature; resolve.",
  },
  {
    id: "sariram",
    term: "śarīram",
    transliteration: "śarīram",
    definition:
      "Body.",
  },
  {
    id: "saristha",
    term: "sariṣṭha",
    transliteration: "sariṣṭha",
    definition:
      "Best; foremost; very best.",
  },
  {
    id: "sarpah",
    term: "sarpaḥ",
    transliteration: "sarpaḥ",
    definition:
      "Snake; winding motion.",
  },
  {
    id: "sarvagatah",
    term: "sarvagataḥ",
    transliteration: "sarvagataḥ",
    definition:
      "All-pervasive; present everywhere.",
  },
  {
    id: "sarvajnah",
    term: "sarvajñaḥ",
    transliteration: "sarvajñaḥ",
    definition:
      "All-knowing.",
    aliases: ["sarvadnyah"],
  },
  {
    id: "sarvanama",
    term: "sarvanāma",
    transliteration: "sarvanāma",
    definition:
      "A word that is a name for all - e.g. tat; a class of pronominal words; pronoun.",
    relatedTerms: ["vanam", "nāma"],
  },
  {
    id: "sarvasaktih",
    term: "sarvaśaktiḥ",
    transliteration: "sarvaśaktiḥ",
    definition:
      "All power and skill.",
  },
  {
    id: "sarvatra",
    term: "sarvatra",
    transliteration: "sarvatra",
    definition:
      "Everywhere; in all places.",
  },
  {
    id: "sarvavyapi",
    term: "sarvavyāpī",
    transliteration: "sarvavyāpī",
    definition:
      "All-pervading.",
  },
  {
    id: "sasanam",
    term: "śāsanam",
    transliteration: "śāsanam",
    definition:
      "Instruction, teaching; discipline; command; direction.",
  },
  {
    id: "sasavisanam",
    term: "śaśaviṣāṇam",
    transliteration: "śaśaviṣāṇam",
    definition:
      "The horn of a rabbit.",
  },
  {
    id: "sasthi",
    term: "ṣaṣṭhī",
    transliteration: "ṣaṣṭhī",
    definition:
      "The sixth or genitive grammatical case.",
  },
  {
    id: "sastr",
    term: "śāstṛ",
    transliteration: "śāstṛ",
    definition:
      "A teacher. śāstā.",
    relatedTerms: ["śāstram"],
  },
  {
    id: "sastram",
    term: "śāstram",
    transliteration: "śāstram",
    definition:
      "Sacred precept or rule; the body of revealed Vedic knowledge; truth.",
    relatedTerms: ["śāstṛ"],
  },
  {
    id: "sasvata",
    term: "śāśvata",
    transliteration: "śāśvata",
    definition:
      "Eternal; everlasting. śāśvatam Eternally, perpetually.",
  },
  {
    id: "sat",
    term: "sat",
    transliteration: "sat",
    definition:
      "Timeless-limitless existence; the self-existent.",
    relatedTerms: ["brahman", "satyam", "ātmā"],
    tags: ["existence", "being", "truth", "real", "eternal", "timeless"],
  },
  {
    id: "satam",
    term: "śatam",
    transliteration: "śatam",
    definition:
      "A hundred.",
  },
  {
    id: "satka",
    term: "ṣaṭka",
    transliteration: "ṣaṭka",
    definition:
      "Sixfold.",
  },
  {
    id: "satkaryavada",
    term: "satkāryavāda",
    transliteration: "satkāryavāda",
    definition:
      "The Sankhya philosophy; the doctrine of the actual existence of an effect.",
    relatedTerms: ["sāṅkhya"],
  },
  {
    id: "satruh",
    term: "śatruḥ",
    transliteration: "śatruḥ",
    definition:
      "Enemy; adversary; political rival; destroyer.",
  },
  {
    id: "satsangah",
    term: "satsaṅgaḥ",
    transliteration: "satsaṅgaḥ",
    definition:
      "Company of dhārmic person or persons.",
  },
  {
    id: "satta",
    term: "sattā",
    transliteration: "sattā",
    definition:
      "Existence, being; reality.",
  },
  {
    id: "sattvam",
    term: "sattvam",
    transliteration: "sattvam",
    definition:
      "Inner disposition of enjoyment; antaḥkaraṇa; the virtuous guṇaḥ.",
    vedantaMeaning:
      "The guṇa of clarity, knowledge, and harmony. A sāttvika mind is transparent — it reflects consciousness most clearly, allowing the teaching to be heard and understood. Sattva is the quality most conducive to self-knowledge, but even sattva is a quality of māyā, not of ātmā. The goal is not to become purely sāttvika but to recognize oneself as beyond all guṇas.",
    relatedTerms: ["guṇah", "rajas", "tamas"],
    tags: ["purity", "clarity", "goodness", "virtue", "harmony", "balance", "light"],
  },
  {
    id: "sattvika",
    term: "sāttvika",
    transliteration: "sāttvika",
    definition:
      "Endowed with virtue; with sattvam; derived from sattvam.",
    root: "sattvam",
    relatedTerms: ["sattvam"],
  },
  {
    id: "satyam",
    term: "satyam",
    transliteration: "satyam",
    definition:
      "That which exists; the nature of truth; true.",
    relatedTerms: ["brahman", "sat", "mithyā"],
    tags: ["truth", "real", "reality", "existence", "true"],
  },
  {
    id: "saucam",
    term: "śaucam",
    transliteration: "śaucam",
    definition:
      "Purity; cleanliness.",
  },
  {
    id: "saumya",
    term: "saumya",
    transliteration: "saumya",
    definition:
      "Relating to the moon; having the properties of Soma; handsome; lovely. vocative good sir; dear one.",
  },
  {
    id: "savarna",
    term: "savarṇa",
    transliteration: "savarṇa",
    definition:
      "Belonging to the same class of letters; of like appearance, resembling.",
  },
  {
    id: "savikalpa",
    term: "savikalpa",
    transliteration: "savikalpa",
    definition:
      "Recognizing a distinction - e.g. knower - known; having attributes.",
  },
  {
    id: "sesa",
    term: "śeṣa",
    transliteration: "śeṣa",
    definition:
      "Remaining, anything left out.",
  },
  {
    id: "sesah",
    term: "seṣaḥ",
    transliteration: "seṣaḥ",
    definition:
      "Result, effect; end conclusion; subsidiary, something said to be subservient to another thing.",
    relatedTerms: ["śeṣa", "viśeṣaḥ"],
  },
  {
    id: "seva",
    term: "sevā",
    transliteration: "sevā",
    definition:
      "Service; homage; worship.",
  },
  {
    id: "sevanam",
    term: "sevanam",
    transliteration: "sevanam",
    definition:
      "Service of the Lord.",
  },
  {
    id: "siddha",
    term: "siddha",
    transliteration: "siddha",
    definition:
      "Accomplished; proved; gained; established.",
    relatedTerms: ["siddhāntaḥ"],
  },
  {
    id: "siddhantah",
    term: "siddhāntaḥ",
    transliteration: "siddhāntaḥ",
    definition:
      "The demonstrated logical conclusion of an argument.",
    relatedTerms: ["siddha"],
  },
  {
    id: "siddhih",
    term: "siddhiḥ",
    transliteration: "siddhiḥ",
    definition:
      "Accomplishment; success; validity; capacity.",
  },
  {
    id: "sikharah",
    term: "śikharaḥ",
    transliteration: "śikharaḥ",
    definition:
      "The top, summit, peak.",
  },
  {
    id: "siksa",
    term: "śikṣā",
    transliteration: "śikṣā",
    definition:
      "The discipline of pronunciation and sandhiḥ - one of the six Vedāṅgas.",
    relatedTerms: ["sandhiḥ"],
  },
  {
    id: "silam",
    term: "śīlam",
    transliteration: "śīlam",
    definition:
      "Disposition; character, tendency; at end of compound disposed or habituated to.",
  },
  {
    id: "simhah",
    term: "siṃhaḥ",
    transliteration: "siṃhaḥ",
    definition:
      "A lion.",
  },
  {
    id: "siras",
    term: "śiras",
    transliteration: "śiras",
    definition:
      "The head; skull; summit.",
  },
  {
    id: "sista",
    term: "śiṣṭa",
    transliteration: "śiṣṭa",
    definition:
      "Well brought up; virtuous; disciplined; learned; remaining.",
  },
  {
    id: "sisyah",
    term: "śiṣyaḥ",
    transliteration: "śiṣyaḥ",
    definition:
      "Student of jñānayogaḥ.",
    relatedTerms: ["jñānayogaḥ"],
  },
  {
    id: "sita",
    term: "śīta",
    transliteration: "śīta",
    definition:
      "Cool; cold; dull; lazy.",
    relatedTerms: ["akṣita", "āsita"],
  },
  {
    id: "sithila",
    term: "śithila",
    transliteration: "śithila",
    definition:
      "Loosened; abandoned; not strictly performed.",
  },
  {
    id: "sithilikr",
    term: "śithilīkṛ",
    transliteration: "śithilīkṛ",
    definition:
      "To loosen, unfasten; to relax, slacken; to weaken; to abandon; śithilīkaroti.",
  },
  {
    id: "siva",
    term: "śiva",
    transliteration: "śiva",
    definition:
      "Auspicious; pure; propitious; śivaḥ Lord Shiva.",
  },
  {
    id: "skandhah",
    term: "skandhaḥ",
    transliteration: "skandhaḥ",
    definition:
      "Shoulder; branch; a branch of human knowledge; troop or group; five forms of consciousness (Buddhist).",
  },
  {
    id: "slokah",
    term: "ślokah",
    transliteration: "ślokah",
    definition:
      "A hymn or verse of praise; a proverb or saying.",
  },
  {
    id: "smaranam",
    term: "smaraṇam",
    transliteration: "smaraṇam",
    definition:
      "Memory, recollection, remembering.",
  },
  {
    id: "smarta",
    term: "smārta",
    transliteration: "smārta",
    definition:
      "Relating to smṛtiḥ; non-Vedic.",
    relatedTerms: ["smṛtiḥ"],
  },
  {
    id: "smrtih",
    term: "smṛtiḥ",
    transliteration: "smṛtiḥ",
    definition:
      "Memory; production of human authors; lawbooks.",
    vedantaMeaning:
      "Texts composed by authors based on the Vedas, including the Dharmaśāstras, Itihāsas (Mahābhārata, Rāmāyaṇa), and Purāṇas. Smṛti is a secondary authority — valid only insofar as it is consistent with śruti. Where smṛti contradicts śruti, śruti prevails. Smṛti is valuable in Vedānta for clarifying and elaborating what the Upaniṣads teach.",
  },
  {
    id: "snanam",
    term: "snānam",
    transliteration: "snānam",
    definition:
      "Bathing; washing; purification by bathing.",
  },
  {
    id: "snehah",
    term: "snehaḥ",
    transliteration: "snehaḥ",
    definition:
      "Stickiness; love.",
  },
  {
    id: "snigdha",
    term: "snigdha",
    transliteration: "snigdha",
    definition:
      "Sticky; viscous; adhesive; shining; glassy; moist; wet.",
    relatedTerms: ["vet"],
  },
  {
    id: "sobhanadhyasah",
    term: "śobhanādhyāsaḥ",
    transliteration: "śobhanādhyāsaḥ",
    definition:
      "Seeing what is not there; superimposing positive qualities that are not intrinsic to the object.",
  },
  {
    id: "sodasi",
    term: "ṣoḍaśī",
    transliteration: "ṣoḍaśī",
    definition:
      "A modification of the Agniṣṭoma sacrifice.",
  },
  {
    id: "sokah",
    term: "śokaḥ",
    transliteration: "śokaḥ",
    definition:
      "Sorrow.",
  },
  {
    id: "somah",
    term: "somaḥ",
    transliteration: "somaḥ",
    definition:
      "Name of plant and its juice used in earliest Vedic sacrifice as offering and inspiration.",
  },
  {
    id: "sopadhikadhyasah",
    term: "sopādhikādhyāsaḥ",
    transliteration: "sopādhikādhyāsaḥ",
    definition:
      "A mistaken conclusion based on a perception; jālādhyāsaḥ (e.g. blue sky).",
  },
  {
    id: "spandanam",
    term: "spandanam",
    transliteration: "spandanam",
    definition:
      "Change, vibration, going.",
  },
  {
    id: "spandita",
    term: "spandita",
    transliteration: "spandita",
    definition:
      "Throbbing, pulsating; activity of the body.",
  },
  {
    id: "sparsah",
    term: "sparśaḥ",
    transliteration: "sparśaḥ",
    definition:
      "Touch; contact.",
  },
  {
    id: "spasta",
    term: "spaṣṭa",
    transliteration: "spaṣṭa",
    definition:
      "Distinctly visible; evident, manifest; true, real.",
  },
  {
    id: "sphatikah",
    term: "sphaṭikaḥ",
    transliteration: "sphaṭikaḥ",
    definition:
      "Crystal.",
  },
  {
    id: "sphuranam",
    term: "sphuraṇam",
    transliteration: "sphuraṇam",
    definition:
      "Arising; flashing in the mind; gleaming.",
  },
  {
    id: "sphurtih",
    term: "sphūrtiḥ",
    transliteration: "sphūrtiḥ",
    definition:
      "Awareness.",
  },
  {
    id: "sphuta",
    term: "sphuṭa",
    transliteration: "sphuṭa",
    definition:
      "Manifested; made clear; distinct.",
    relatedTerms: ["sphuṭam"],
  },
  {
    id: "sphutam",
    term: "sphuṭam",
    transliteration: "sphuṭam",
    definition:
      "Clearly; evidently.",
    relatedTerms: ["sphuṭa"],
  },
  {
    id: "sprha",
    term: "spṛhā",
    transliteration: "spṛhā",
    definition:
      "Longing; yearning; ardent wish.",
  },
  {
    id: "sprsta",
    term: "spṛṣṭa",
    transliteration: "spṛṣṭa",
    definition:
      "Touched; come in contact with; reached; affected.",
  },
  {
    id: "sraddha",
    term: "śraddhā",
    transliteration: "śraddhā",
    definition:
      "Faith and trust in the pramāṇa and the guru.",
    vedantaMeaning:
      "Trust in the words of the teacher and the śāstra — not blind belief but a willingness to hold the teaching as provisionally true while investigating it. Śraddhā is listed among the six inner disciplines (śamādiṣaṭkasampatti). Without śraddhā, the student cannot give the teaching a fair hearing. As the Gītā states: śraddhāvān labhate jñānam — the one who has trust gains knowledge.",
    relatedTerms: ["samaḥ", "damaḥ", "uparatih", "titikṣā", "sādhanatuṣṭayam", "guruh"],
    tags: ["faith", "trust", "confidence", "belief", "conviction"],
  },
  {
    id: "sraddhana",
    term: "śrāddhana",
    transliteration: "śrāddhana",
    definition:
      "Funeral rites performed for the departed.",
    relatedTerms: ["śraddhā"],
  },
  {
    id: "sramah",
    term: "śramaḥ",
    transliteration: "śramaḥ",
    definition:
      "Effort; exertion; fatigue.",
  },
  {
    id: "sravanam",
    term: "śravaṇam",
    transliteration: "śravaṇam",
    definition:
      "Vicāraḥ through listening to the teacher; listening.",
    relatedTerms: ["vicāraḥ"],
  },
  {
    id: "srestha",
    term: "śreṣṭha",
    transliteration: "śreṣṭha",
    definition:
      "Most exalted; best.",
  },
  {
    id: "sreyas",
    term: "śreyas",
    transliteration: "śreyas",
    definition:
      "Most desirable; most valued; mokṣaḥ.",
    relatedTerms: ["mokṣaḥ"],
  },
  {
    id: "sri",
    term: "śrī",
    transliteration: "śrī",
    definition:
      "The goddess of wealth; Lakṣmī; the wife of Viṣṇu; wealth; prosperity; dignity.",
    relatedTerms: ["lakṣmī"],
  },
  {
    id: "srj",
    term: "sṛj",
    transliteration: "sṛj",
    definition:
      "To create, produce; to pour forth; sṛṣṭa sṛjata.",
    relatedTerms: ["sṛṣṭa"],
  },
  {
    id: "srotram",
    term: "śrotram",
    transliteration: "śrotram",
    definition:
      "The ear; proficiency in the Veda; Veda.",
  },
  {
    id: "srotriyah",
    term: "śrotriyaḥ",
    transliteration: "śrotriyaḥ",
    definition:
      "The one who knows the śāstram.",
    relatedTerms: ["śāstram"],
  },
  {
    id: "srsta",
    term: "sṛṣṭa",
    transliteration: "sṛṣṭa",
    definition:
      "Created, produced.",
  },
  {
    id: "srstih",
    term: "sṛṣṭiḥ",
    transliteration: "sṛṣṭiḥ",
    definition:
      "Creation.",
  },
  {
    id: "srstva",
    term: "sṛṣṭvā",
    transliteration: "sṛṣṭvā",
    definition:
      "Having created.",
  },
  {
    id: "srutih",
    term: "śrutiḥ",
    transliteration: "śrutiḥ",
    definition:
      "The ear; Veda; hearing; śāstram.",
    vedantaMeaning:
      "The Veda, regarded as apauruṣeya (not authored by any person, including God). Śruti is the primary and independent authority in Vedānta. It reveals what cannot be known by any other means — the identity of ātmā and Brahman. The Upaniṣads, which form the end portion of the Vedas, are the śruti texts most directly relevant to self-knowledge.",
    relatedTerms: ["śāstram"],
  },
  {
    id: "stavah",
    term: "stavah",
    transliteration: "stavah",
    definition:
      "Song of praise.",
  },
  {
    id: "stha",
    term: "sthā",
    transliteration: "sthā",
    definition:
      "At the end of comp. Staying; existing; abiding.",
    relatedTerms: ["niṣṭhā"],
  },
  {
    id: "sthairyam",
    term: "sthairyam",
    transliteration: "sthairyam",
    definition:
      "Firmness, stability; resolution; patience; solidity.",
  },
  {
    id: "sthanam",
    term: "sthānam",
    transliteration: "sthānam",
    definition:
      "Place, spot; firm ground, shore, station.",
  },
  {
    id: "sthanuh",
    term: "sthāṇuḥ",
    transliteration: "sthāṇuḥ",
    definition:
      "Post, pillar, stake, stump.",
  },
  {
    id: "sthavistha",
    term: "sthaviṣṭha",
    transliteration: "sthaviṣṭha",
    definition:
      "Strongest; greatest; most gross.",
  },
  {
    id: "sthira",
    term: "sthira",
    transliteration: "sthira",
    definition:
      "Firm, steady, fixed.",
    relatedTerms: ["sthiram"],
    tags: ["steady", "firm", "stable", "fixed", "grounded"],
  },
  {
    id: "sthiram",
    term: "sthiram",
    transliteration: "sthiram",
    definition:
      "Steadfastness; stubbornness.",
    relatedTerms: ["sthira"],
  },
  {
    id: "sthitih",
    term: "sthitiḥ",
    transliteration: "sthitiḥ",
    definition:
      "Standing, staying, resting; fixed; steady; firm.",
  },
  {
    id: "sthula",
    term: "sthūla",
    transliteration: "sthūla",
    definition:
      "Big; great; fat; strong; physical (e.g. sthūlaśarīram).",
    relatedTerms: ["sthūlābhuk"],
  },
  {
    id: "sthulabhuk",
    term: "sthūlābhuk",
    transliteration: "sthūlābhuk",
    definition:
      "A description of ātmā as the waker, enjoyer of the physical world.",
    relatedTerms: ["ātmā"],
  },
  {
    id: "stotram",
    term: "stotram",
    transliteration: "stotram",
    definition:
      "A hymn of praise.",
  },
  {
    id: "strilingam",
    term: "strīliṅgam",
    transliteration: "strīliṅgam",
    definition:
      "The feminine gender.",
  },
  {
    id: "stutih",
    term: "stutiḥ",
    transliteration: "stutiḥ",
    definition:
      "Praise; commendation.",
  },
  {
    id: "su",
    term: "su",
    transliteration: "su",
    definition:
      "A particle often used with nouns, adjectives and adverbs to give the sense of well, good, excellent.",
  },
  {
    id: "subha",
    term: "śubha",
    transliteration: "śubha",
    definition:
      "Shining; bright; virtuous; learned.",
    relatedTerms: ["śubham"],
  },
  {
    id: "subham",
    term: "śubham",
    transliteration: "śubham",
    definition:
      "Good fortune; having a good finish.",
    relatedTerms: ["śubha"],
  },
  {
    id: "subhra",
    term: "śubhra",
    transliteration: "śubhra",
    definition:
      "Pure; radiant.",
  },
  {
    id: "sucaka",
    term: "sūcaka",
    transliteration: "sūcaka",
    definition:
      "Indicating; informing.",
  },
  {
    id: "sucika",
    term: "sūcikā",
    transliteration: "sūcikā",
    definition:
      "A needle.",
  },
  {
    id: "suddha",
    term: "śuddha",
    transliteration: "śuddha",
    definition:
      "Pure; clean.",
    relatedTerms: ["viśuddha"],
  },
  {
    id: "suddhih",
    term: "śuddhiḥ",
    transliteration: "śuddhiḥ",
    definition:
      "Purity; brightness.",
  },
  {
    id: "sukah",
    term: "śukaḥ",
    transliteration: "śukaḥ",
    definition:
      "Son of Vyasa; a parrot.",
  },
  {
    id: "sukham",
    term: "sukham",
    transliteration: "sukham",
    definition:
      "Pleasure; comfort.",
  },
  {
    id: "sukla",
    term: "śukla",
    transliteration: "śukla",
    definition:
      "White, pure; bright; spotless.",
  },
  {
    id: "sukrta",
    term: "sukṛta",
    transliteration: "sukṛta",
    definition:
      "Well made; well earned.",
    relatedTerms: ["sukṛtam"],
  },
  {
    id: "sukrtam",
    term: "sukṛtam",
    transliteration: "sukṛtam",
    definition:
      "Good action; puṇyam; service.",
    relatedTerms: ["puṇyam"],
  },
  {
    id: "suksma",
    term: "sūkṣma",
    transliteration: "sūkṣma",
    definition:
      "Subtle; fine; penetrating.",
    relatedTerms: ["sūkṣmābhuk"],
  },
  {
    id: "suksmabhuk",
    term: "sūkṣmābhuk",
    transliteration: "sūkṣmābhuk",
    definition:
      "A description of ātmā as the dreamer, enjoyer of the subtle world.",
    relatedTerms: ["ātmā"],
  },
  {
    id: "sukta",
    term: "sūkta",
    transliteration: "sūkta",
    definition:
      "Well spoken; well said; sūktam Vedic hymn.",
  },
  {
    id: "suktih",
    term: "śuktiḥ",
    transliteration: "śuktiḥ",
    definition:
      "Oyster shell, pearl-oyster; also śuktikā.",
  },
  {
    id: "sulabha",
    term: "sulabha",
    transliteration: "sulabha",
    definition:
      "Attainable; easy to obtain; feasible.",
  },
  {
    id: "sundara",
    term: "sundara",
    transliteration: "sundara",
    definition:
      "Lovely, beautiful; handsome.",
  },
  {
    id: "sungah",
    term: "suṅgaḥ",
    transliteration: "suṅgaḥ",
    definition:
      "The (Indian) fig tree; the sheath of a bud.",
  },
  {
    id: "suniscita",
    term: "suniścita",
    transliteration: "suniścita",
    definition:
      "Well-established, well-ascertained.",
  },
  {
    id: "sunya",
    term: "śūnya",
    transliteration: "śūnya",
    definition:
      "Empty; free of.",
  },
  {
    id: "supta",
    term: "supta",
    transliteration: "supta",
    definition:
      "Slept, sleeping, asleep.",
  },
  {
    id: "suryah",
    term: "sūryaḥ",
    transliteration: "sūryaḥ",
    definition:
      "Deity of the eye, of sight; the sun.",
  },
  {
    id: "susumnah",
    term: "suṣumnaḥ",
    transliteration: "suṣumnaḥ",
    definition:
      "A particular duct in the body said to lie between the iḍā and piṅgalā.",
    relatedTerms: ["piṅgalā", "iḍā"],
  },
  {
    id: "susuptih",
    term: "suṣuptiḥ",
    transliteration: "suṣuptiḥ",
    definition:
      "Deep sleep.",
    vedantaMeaning:
      "The deep sleep state — in which the individual (called prājña) resolves into causal ignorance. There is no experience of duality, no suffering, no sense of limitation. The Māṇḍūkya Upaniṣad identifies this as the third pāda. Deep sleep is significant because it reveals that ātmā continues to exist even when the mind is resolved — 'I slept well, I knew nothing' shows both the continuity of the witness and the presence of ignorance.",
    relatedTerms: ["prajñā", "upaniṣad", "ātmā"],
  },
  {
    id: "sutaram",
    term: "sutarām",
    transliteration: "sutarām",
    definition:
      "Better, more; very much, excessively; more so; consequently.",
  },
  {
    id: "sutejas",
    term: "sutejas",
    transliteration: "sutejas",
    definition:
      "Effulgent, very bright.",
  },
  {
    id: "sutram",
    term: "sūtram",
    transliteration: "sūtram",
    definition:
      "Verse; thread.",
  },
  {
    id: "sva",
    term: "sva",
    transliteration: "sva",
    definition:
      "One's own, belonging to oneself, often used as a reflexive pronoun.",
  },
  {
    id: "svabhavah",
    term: "svabhāvaḥ",
    transliteration: "svabhāvaḥ",
    definition:
      "Own nature; inherent attribute.",
    relatedTerms: ["abhāvaḥ", "bhavaḥ"],
  },
  {
    id: "svabhavika",
    term: "svābhāvika",
    transliteration: "svābhāvika",
    definition:
      "Belonging to one's own nature; natural; inborn; peculiar.",
  },
  {
    id: "svabhram",
    term: "svabhram",
    transliteration: "svabhram",
    definition:
      "Hole, chasm, cleavage on the earth.",
  },
  {
    id: "svadhakarah",
    term: "svadhākaraḥ",
    transliteration: "svadhākaraḥ",
    definition:
      "Offering oblations to the pitṛs.",
  },
  {
    id: "svadharmah",
    term: "svadharmaḥ",
    transliteration: "svadharmaḥ",
    definition:
      "One's own duties; what is to be done.",
  },
  {
    id: "svadhyayah",
    term: "svādhyāyaḥ",
    transliteration: "svādhyāyaḥ",
    definition:
      "Study of the Vedas; self-recitation.",
  },
  {
    id: "svagata",
    term: "svagata",
    transliteration: "svagata",
    definition:
      "To oneself; of itself.",
  },
  {
    id: "svaha",
    term: "svāhā",
    transliteration: "svāhā",
    definition:
      "An exclamation used in offering oblations to the gods; salutation.",
  },
  {
    id: "svakarman",
    term: "svakarman",
    transliteration: "svakarman",
    definition:
      "One's own duty; svadharma.",
  },
  {
    id: "svalpa",
    term: "svalpa",
    transliteration: "svalpa",
    definition:
      "Small; brief; short; few.",
  },
  {
    id: "svami",
    term: "svāmī",
    transliteration: "svāmī",
    definition:
      "One with mastery of the mind; one aligned in thought, word, and action.",
  },
  {
    id: "svapnah",
    term: "svapnaḥ",
    transliteration: "svapnaḥ",
    definition:
      "Sleep; sleeping.",
    vedantaMeaning:
      "The dream state — in which the individual (called taijasa) creates and experiences an entire world projected by the mind alone, without external objects. The Māṇḍūkya Upaniṣad identifies this as the second pāda. The dream state reveals that the mind can generate a convincing experience of duality from within itself — a key insight for understanding how waking duality is also dependent on consciousness.",
    relatedTerms: ["upaniṣad"],
  },
  {
    id: "svar",
    term: "svar",
    transliteration: "svar",
    definition:
      "Heaven; Indra's heaven. Often suaḥ.",
    relatedTerms: ["svarita"],
  },
  {
    id: "svarah",
    term: "svarāḥ",
    transliteration: "svarāḥ",
    definition:
      "A chanting accent (udātta, anudātta, svaritā); sound; noise; voice; musical note.",
    relatedTerms: ["anudātta", "svarita"],
  },
  {
    id: "svaraji",
    term: "svarājī",
    transliteration: "svarājī",
    definition:
      "Self-luminous; self-wise.",
  },
  {
    id: "svarajyam",
    term: "svārājyam",
    transliteration: "svārājyam",
    definition:
      "Dominion in Indra's heaven; identification with brahman as an upāsanāphala (as the result of a specific meditation).",
    relatedTerms: ["brahman"],
  },
  {
    id: "svargah",
    term: "svargaḥ",
    transliteration: "svargaḥ",
    definition:
      "Heaven; Indra's paradise.",
  },
  {
    id: "svarita",
    term: "svarita",
    transliteration: "svarita",
    definition:
      "The middle chanting tone; between high and low.",
    relatedTerms: ["svar", "ārta"],
  },
  {
    id: "svarnam",
    term: "svarṇam",
    transliteration: "svarṇam",
    definition:
      "Gold.",
  },
  {
    id: "svartha",
    term: "svārtha",
    transliteration: "svārtha",
    definition:
      "Having its own or true meaning.",
  },
  {
    id: "svarupalaksanam",
    term: "svarūpalakṣaṇam",
    transliteration: "svarūpalakṣaṇam",
    definition:
      "An intrinsic or invariable characteristic or property of a thing.",
  },
  {
    id: "svarupam",
    term: "svarūpam",
    transliteration: "svarūpam",
    definition:
      "Essential form; own nature.",
    relatedTerms: ["rūpam", "svar"],
  },
  {
    id: "svastha",
    term: "svastha",
    transliteration: "svastha",
    definition:
      "Self-abiding; self-dependent; independent.",
  },
  {
    id: "svasthyam",
    term: "svāsthyam",
    transliteration: "svāsthyam",
    definition:
      "Self-reliance; contentment, health; ease.",
  },
  {
    id: "svatantra",
    term: "svatantra",
    transliteration: "svatantra",
    definition:
      "Self-dependent, independent, uncontrolled.",
  },
  {
    id: "svatantryam",
    term: "svātantryam",
    transliteration: "svātantryam",
    definition:
      "Free will; independence; courage.",
  },
  {
    id: "svatasiddha",
    term: "svatasiddha",
    transliteration: "svatasiddha",
    definition:
      "Self-evident; self-proved; axiomatic.",
  },
  {
    id: "svavasa",
    term: "svavaśa",
    transliteration: "svavaśa",
    definition:
      "That which is in your own hands; self-controlled.",
  },
  {
    id: "svayam",
    term: "svayam",
    transliteration: "svayam",
    definition:
      "Oneself (used reflexively with all persons); of one's own accord.",
    relatedTerms: ["svayambhu"],
  },
  {
    id: "svayambhu",
    term: "svayambhu",
    transliteration: "svayambhu",
    definition:
      "Self-existent.",
    relatedTerms: ["svayam"],
  },
  {
    id: "svedah",
    term: "svedaḥ",
    transliteration: "svedaḥ",
    definition:
      "Sweat, perspiration.",
  },
  {
    id: "sveta",
    term: "śveta",
    transliteration: "śveta",
    definition:
      "White.",
  },
  {
    id: "svikaranam",
    term: "svīkaraṇam",
    transliteration: "svīkaraṇam",
    definition:
      "Agreeing, accepting, assenting, promising.",
  },
  {
    id: "tadatmyam",
    term: "tādātmyam",
    transliteration: "tādātmyam",
    definition:
      "Identity; unity; sameness of nature.",
  },
  {
    id: "taddhita",
    term: "taddhita",
    transliteration: "taddhita",
    definition:
      "A suffix added to create a secondary derivational form (e.g. budh > buddha > bauddhaḥ).",
    relatedTerms: ["budh"],
  },
  {
    id: "tadvat",
    term: "taḍvat",
    transliteration: "taḍvat",
    definition:
      "Like that, in that manner; equally, so also.",
  },
  {
    id: "taijasah",
    term: "taijasaḥ",
    transliteration: "taijasaḥ",
    definition:
      "Name of the dreamer - the shining one.",
    vedantaMeaning:
      "The name given to ātmā as identified with the dream state in the Māṇḍūkya Upaniṣad. Called 'the shining one' because in dream the mind alone illumines the entire dream world without external light or objects. Taijasa experiences the subtle, internally projected world. It is the second pāda — ātmā functioning through the subtle body alone.",
    relatedTerms: ["ātmā", "upaniṣad"],
  },
  {
    id: "talu",
    term: "tālu",
    transliteration: "tālu",
    definition:
      "The palate.",
  },
  {
    id: "tamas",
    term: "tamas",
    transliteration: "tamas",
    definition:
      "Darkness; sorrow; dullness; the ignorance guṇa.",
    vedantaMeaning:
      "The guṇa of inertia, dullness, and concealment. A tāmasika mind is characterized by lethargy, confusion, negligence, and resistance to inquiry. Tamas conceals the nature of things, contributing to fundamental ignorance. In the creation model, tamas in each element produces the gross physical world. Tamas is overcome by rajas (activity), and rajas is refined into sattva through disciplined living.",
    relatedTerms: ["guṇah", "sattvam", "rajas"],
    tags: ["darkness", "inertia", "dullness", "ignorance", "laziness", "heaviness"],
  },
  {
    id: "tandita",
    term: "taṇḍita",
    transliteration: "taṇḍita",
    definition:
      "Lazy.",
  },
  {
    id: "tandulah",
    term: "taṇḍulaḥ",
    transliteration: "taṇḍulaḥ",
    definition:
      "Grain after threshing, unhusking and winnowing (especially rice).",
  },
  {
    id: "tanmatram",
    term: "tanmātram",
    transliteration: "tanmātram",
    definition:
      "A subtle and primary element; a very small quantity.",
  },
  {
    id: "tanmaya",
    term: "tanmaya",
    transliteration: "tanmaya",
    definition:
      "Made up of that; wholly absorbed in that; identical with.",
  },
  {
    id: "tanti",
    term: "tanti",
    transliteration: "tanti",
    definition:
      "Having threads; that which is interconnected.",
  },
  {
    id: "tantram",
    term: "tantram",
    transliteration: "tantram",
    definition:
      "Framework; system; doctrine; a specialized religious treatise; ritualistic action.",
  },
  {
    id: "tantrika",
    term: "tāntrika",
    transliteration: "tāntrika",
    definition:
      "Well-versed in any doctrine; relating to the Tantras; a follower of Tantra doctrines.",
  },
  {
    id: "tantu",
    term: "tantu",
    transliteration: "tantu",
    definition:
      "Having threads; that which is interconnected.",
  },
  {
    id: "tapah",
    term: "tāpaḥ",
    transliteration: "tāpaḥ",
    definition:
      "Sorrow; pain; heat.",
  },
  {
    id: "tapas",
    term: "tapas",
    transliteration: "tapas",
    definition:
      "Religious austerity; prayer; disciplined inquiry; heat.",
    tags: ["austerity", "discipline", "heat", "effort", "practice", "purification"],
  },
  {
    id: "taratamyam",
    term: "tāratamyam",
    transliteration: "tāratamyam",
    definition:
      "Gradation; proportion; comparative value.",
  },
  {
    id: "tarhi",
    term: "tarhi",
    transliteration: "tarhi",
    definition:
      "Then, in that case; at that time.",
  },
  {
    id: "tarkah",
    term: "tarkaḥ",
    transliteration: "tarkaḥ",
    definition:
      "Reasoning; conjecture; logic.",
  },
  {
    id: "tarpanam",
    term: "tarpaṇam",
    transliteration: "tarpaṇam",
    definition:
      "One of five daily rituals, presenting water to one's deceased ancestors; satisfaction.",
  },
  {
    id: "taskarah",
    term: "taskaraḥ",
    transliteration: "taskaraḥ",
    definition:
      "Thief.",
  },
  {
    id: "tata",
    term: "tata",
    transliteration: "tata",
    definition:
      "Extended, spread.",
  },
  {
    id: "tatasthalaksanam",
    term: "tatasthālakṣaṇam",
    transliteration: "tatasthālakṣaṇam",
    definition:
      "That property of a thing that is distinct from its nature, and yet is the property by which it is known.",
  },
  {
    id: "tatha",
    term: "tathā",
    transliteration: "tathā",
    definition:
      "Thus, in this manner, so; true, just so; as well as.",
    relatedTerms: ["tathāpi"],
  },
  {
    id: "tathapi",
    term: "tathāpi",
    transliteration: "tathāpi",
    definition:
      "Even then, yet, still, nevertheless; often correlative of yadyapi.",
    relatedTerms: ["yadyapi"],
  },
  {
    id: "tatparyam",
    term: "tātparyam",
    transliteration: "tātparyam",
    definition:
      "Object or intention of speaker; purport; meaning; scope; intended object.",
  },
  {
    id: "tatpurusah",
    term: "tatpuruṣaḥ",
    transliteration: "tatpuruṣaḥ",
    definition:
      "A class of syntactic compounds.",
  },
  {
    id: "tattvabodhah",
    term: "tattvabodhaḥ",
    transliteration: "tattvabodhaḥ",
    definition:
      "Discriminative knowledge of truth.",
  },
  {
    id: "tattvam",
    term: "tattvam",
    transliteration: "tattvam",
    definition:
      "Truth.",
    relatedTerms: ["tattvamasi", "brahman", "satyam"],
    tags: ["truth", "essence", "reality", "principle", "nature"],
  },
  {
    id: "tattvamasi",
    term: "tattvamasi",
    transliteration: "tattvamasi",
    definition:
      "lit. 'You are that.'; equation of self and brahman - a mahāvākya.",
    root: "You are that",
    relatedTerms: ["brahman"],
  },
  {
    id: "tattvatah",
    term: "tattvataḥ",
    transliteration: "tattvataḥ",
    definition:
      "Truly; accurately.",
  },
  {
    id: "tattvavit",
    term: "tattvavit",
    transliteration: "tattvavit",
    definition:
      "One who knows the truth or essence.",
  },
  {
    id: "tattvavivekah",
    term: "tattvavivekaḥ",
    transliteration: "tattvavivekaḥ",
    definition:
      "Discriminative knowledge of what is true.",
  },
  {
    id: "tayin",
    term: "tāyin",
    transliteration: "tāyin",
    definition:
      "Name of Buddha.",
  },
  {
    id: "tejas",
    term: "tejas",
    transliteration: "tejas",
    definition:
      "Light; brilliance; lustre.",
  },
  {
    id: "tika",
    term: "ṭīkā",
    transliteration: "ṭīkā",
    definition:
      "Line by line exposition of sentences and words of a bhāṣyam; commentary.",
    relatedTerms: ["bhāṣyam"],
  },
  {
    id: "timira",
    term: "timira",
    transliteration: "timira",
    definition:
      "Cataract; darkness; blindness.",
  },
  {
    id: "tin",
    term: "tiṅ",
    transliteration: "tiṅ",
    definition:
      "Any conjugational ending.",
  },
  {
    id: "tippani",
    term: "ṭippaṇī",
    transliteration: "ṭippaṇī",
    definition:
      "A gloss, comment; footnote, a gloss on a gloss.",
  },
  {
    id: "tiram",
    term: "tīram",
    transliteration: "tīram",
    definition:
      "Shore; bank; margin; edge.",
  },
  {
    id: "tirobhavah",
    term: "tirobhāvaḥ",
    transliteration: "tirobhāvaḥ",
    definition:
      "Disappearance.",
  },
  {
    id: "tirtham",
    term: "tīrtham",
    transliteration: "tīrtham",
    definition:
      "Goal of a pilgrimage; holy place; road; place of water; teacher.",
  },
  {
    id: "tiryak",
    term: "tiryak",
    transliteration: "tiryak",
    definition:
      "Obliquely; in a slanting direction; horizontal (said of animals as opposed to upright man).",
  },
  {
    id: "tithih",
    term: "tithiḥ",
    transliteration: "tithiḥ",
    definition:
      "The lunar day; the number fifteen.",
  },
  {
    id: "titiksa",
    term: "titikṣā",
    transliteration: "titikṣā",
    definition:
      "Cheerful endurance; bearing opposites with equanimity.",
    vedantaMeaning:
      "The capacity to cheerfully endure the pairs of opposites — heat and cold, pleasure and pain, praise and blame — without being disturbed or seeking to retaliate. Titikṣā is one of the six inner disciplines. It is not suppression or indifference but a mature acceptance that allows the mind to remain available for self-inquiry even amidst life's inevitable discomforts.",
    relatedTerms: ["samaḥ", "damaḥ", "uparatih", "śraddhā", "sādhanatuṣṭayam"],
    tags: ["endurance", "patience", "forbearance", "tolerance", "resilience", "equanimity"],
  },
  {
    id: "toyam",
    term: "toyam",
    transliteration: "toyam",
    definition:
      "Water.",
  },
  {
    id: "trasah",
    term: "trāsaḥ",
    transliteration: "trāsaḥ",
    definition:
      "Fear, alarm.",
  },
  {
    id: "trayi",
    term: "trayi",
    transliteration: "trayi",
    definition:
      "Three (nominative, plural, neuter).",
  },
  {
    id: "tristubh",
    term: "triṣṭubh",
    transliteration: "triṣṭubh",
    definition:
      "Metre with eleven syllables per quarter - common in Bhagavad Gītā.",
    relatedTerms: ["gītā"],
  },
  {
    id: "trnam",
    term: "tṛṇam",
    transliteration: "tṛṇam",
    definition:
      "Grass.",
  },
  {
    id: "trpta",
    term: "tṛpta",
    transliteration: "tṛpta",
    definition:
      "Satisfied, contented.",
  },
  {
    id: "trptih",
    term: "tṛptiḥ",
    transliteration: "tṛptiḥ",
    definition:
      "Satisfaction; contentment; pleasure.",
  },
  {
    id: "trsna",
    term: "tṛṣṇā",
    transliteration: "tṛṣṇā",
    definition:
      "Strong desire; thirst; greed.",
  },
  {
    id: "trtiya",
    term: "tṛtīyā",
    transliteration: "tṛtīyā",
    definition:
      "The third or instrumental case in grammar.",
  },
  {
    id: "tuccha",
    term: "tuccha",
    transliteration: "tuccha",
    definition:
      "Non-existent (e.g. the son of a barren woman or the horn of a rabbit).",
  },
  {
    id: "tulam",
    term: "tūlam",
    transliteration: "tūlam",
    definition:
      "Cotton.",
  },
  {
    id: "tulya",
    term: "tulya",
    transliteration: "tulya",
    definition:
      "Of the same kind or class; similar; equal; identical; fit for.",
  },
  {
    id: "turiyam",
    term: "turīyam",
    transliteration: "turīyam",
    definition:
      "Fourth, a fourth part, quarter.",
    vedantaMeaning:
      "Not a fourth state but the substrate of all three states — the pure consciousness that is ātmā. Called 'turīya' (the fourth) only to distinguish it from waking, dream, and deep sleep, but it is not a state that comes and goes. The Māṇḍūkya Upaniṣad describes it as: not inward-knowing, not outward-knowing, not both, not a mass of knowing, not knowing, not not-knowing — it is ātmā, to be recognized.",
    relatedTerms: ["ātmā", "brahman", "caitanyam"],
    tags: ["fourth", "transcendent", "beyond", "pure consciousness", "awareness"],
  },
  {
    id: "tusta",
    term: "tuṣṭa",
    transliteration: "tuṣṭa",
    definition:
      "Pleased; happy; contented.",
  },
  {
    id: "tvadiya",
    term: "tvadīya",
    transliteration: "tvadīya",
    definition:
      "Your, yours.",
  },
  {
    id: "tvak",
    term: "tvak",
    transliteration: "tvak",
    definition:
      "Sense of touch; the skin.",
  },
  {
    id: "tyagah",
    term: "tyāgaḥ",
    transliteration: "tyāgaḥ",
    definition:
      "Renunciation; giving up; offerings.",
  },
  {
    id: "tyat",
    term: "tyat",
    transliteration: "tyat",
    definition:
      "Invisible, subtle.",
  },
  {
    id: "ubhaya",
    term: "ubhaya",
    transliteration: "ubhaya",
    definition:
      "Both.",
  },
  {
    id: "uccaranam",
    term: "uccāraṇam",
    transliteration: "uccāraṇam",
    definition:
      "Declaration; pronouncement; lifting up.",
  },
  {
    id: "uccarita",
    term: "uccārita",
    transliteration: "uccārita",
    definition:
      "Pronounced, uttered.",
  },
  {
    id: "ucchedah",
    term: "ucchedaḥ",
    transliteration: "ucchedaḥ",
    definition:
      "Destruction; cutting off; putting an end to.",
  },
  {
    id: "ucchista",
    term: "ucchiṣṭa",
    transliteration: "ucchiṣṭa",
    definition:
      "Rejected; abandoned; stale; impure.",
  },
  {
    id: "ucita",
    term: "ucita",
    transliteration: "ucita",
    definition:
      "Suitable, proper, appropriate.",
  },
  {
    id: "udaharanam",
    term: "udāharaṇam",
    transliteration: "udāharaṇam",
    definition:
      "Declaration; narration; example; illustration; commencement.",
  },
  {
    id: "udana",
    term: "udana",
    transliteration: "udana",
    definition:
      "Water.",
    relatedTerms: ["udānaḥ"],
  },
  {
    id: "udanah",
    term: "udānaḥ",
    transliteration: "udānaḥ",
    definition:
      "Reverse processes, vomiting etc. - a prāṇaḥ.",
    relatedTerms: ["prāṇaḥ"],
  },
  {
    id: "udaram",
    term: "udaram",
    transliteration: "udaram",
    definition:
      "The interior or inside of anything; belly.",
  },
  {
    id: "udasi",
    term: "udāsī",
    transliteration: "udāsī",
    definition:
      "A sādhu or mendicant, one who is dispassionate.",
    relatedTerms: ["sādhu"],
  },
  {
    id: "udattah",
    term: "udāttaḥ",
    transliteration: "udāttaḥ",
    definition:
      "The raised or high accent used in chant.",
  },
  {
    id: "udbhava",
    term: "udbhava",
    transliteration: "udbhava",
    definition:
      "Birth, production, creation, generation; arising from.",
  },
  {
    id: "udbhid",
    term: "udbhid",
    transliteration: "udbhid",
    definition:
      "To break up; passive to be produced; causative to germinate; to unfold.",
  },
  {
    id: "uddesyam",
    term: "uddeśyam",
    transliteration: "uddeśyam",
    definition:
      "Subject; object in view; what you are saying something about (e.g. brahman of 'You are brahman').",
    relatedTerms: ["brahman"],
  },
  {
    id: "udgatr",
    term: "udgātṛ",
    transliteration: "udgātṛ",
    definition:
      "One of four principal priests at a sacrifice; one who chants Sāmaveda.",
  },
  {
    id: "udita",
    term: "udita",
    transliteration: "udita",
    definition:
      "Risen; produced, born; spoken; started.",
  },
  {
    id: "udyamanam",
    term: "udyamanam",
    transliteration: "udyamanam",
    definition:
      "Adequate or proper effort.",
  },
  {
    id: "uhah",
    term: "ūhah",
    transliteration: "ūhah",
    definition:
      "Attributing, ascribing, change, modification; reasoning, arguing; guess.",
  },
  {
    id: "uksita",
    term: "ukṣita",
    transliteration: "ukṣita",
    definition:
      "Cleansed; sprinkled.",
  },
  {
    id: "uktih",
    term: "uktih",
    transliteration: "uktih",
    definition:
      "Statement; teaching, instruction.",
    relatedTerms: ["muktiḥ"],
  },
  {
    id: "ulka",
    term: "ulkā",
    transliteration: "ulkā",
    definition:
      "A fire-brand, torch; meteor.",
  },
  {
    id: "uma",
    term: "umā",
    transliteration: "umā",
    definition:
      "The teacher in the form of a woman; strī; prakṛti; māyā; avidyā; the upādhī of Īśvara.",
    relatedTerms: ["avidyā", "maya"],
  },
  {
    id: "upabhogah",
    term: "upabhogaḥ",
    transliteration: "upabhogaḥ",
    definition:
      "Enjoyment, pleasure.",
  },
  {
    id: "upacarah",
    term: "upacāraḥ",
    transliteration: "upacāraḥ",
    definition:
      "Secondary or implied meaning; service; courtesy; ceremony; conduct.",
  },
  {
    id: "upacayah",
    term: "upacayah",
    transliteration: "upacayah",
    definition:
      "Increase; growth; accumulation.",
  },
  {
    id: "upacita",
    term: "upacita",
    transliteration: "upacita",
    definition:
      "Gathered; accumulated; grown.",
  },
  {
    id: "upadanakaranam",
    term: "upādānakāraṇam",
    transliteration: "upādānakāraṇam",
    definition:
      "Material cause.",
  },
  {
    id: "upadanam",
    term: "upādānam",
    transliteration: "upādānam",
    definition:
      "Immediate or material cause.",
  },
  {
    id: "upadesa",
    term: "upadeśa",
    transliteration: "upadeśa",
    definition:
      "Teaching; instruction.",
  },
  {
    id: "upadeya",
    term: "upadeya",
    transliteration: "upadeya",
    definition:
      "Admissible; acceptable, excellent; to be chose or selected.",
  },
  {
    id: "upadhih",
    term: "upādhih",
    transliteration: "upādhih",
    definition:
      "What brings about an apparent change in an object; conditioning adjunct; body; limitation, condition.",
  },
  {
    id: "upadista",
    term: "upadiṣṭa",
    transliteration: "upadiṣṭa",
    definition:
      "Taught, instructed; specified; pointed out.",
  },
  {
    id: "upadravah",
    term: "upadravah",
    transliteration: "upadravah",
    definition:
      "Affliction; accident; calamity.",
  },
  {
    id: "upahita",
    term: "upahita",
    transliteration: "upahita",
    definition:
      "Attributed to; agreed upon; connected; deposited.",
  },
  {
    id: "upakarah",
    term: "upakāraḥ",
    transliteration: "upakāraḥ",
    definition:
      "Help; service.",
  },
  {
    id: "upakaraka",
    term: "upakāraka",
    transliteration: "upakāraka",
    definition:
      "Producing good results; doing service; contributing to.",
  },
  {
    id: "upakaranam",
    term: "upakaraṇam",
    transliteration: "upakaraṇam",
    definition:
      "Doing service or favor; material, instrument.",
  },
  {
    id: "upakramah",
    term: "upakramah",
    transliteration: "upakramah",
    definition:
      "Beginning; undertaking; plan; means.",
  },
  {
    id: "upalabdhih",
    term: "upalabdhih",
    transliteration: "upalabdhih",
    definition:
      "Perception; understanding.",
  },
  {
    id: "upalaksanam",
    term: "upalakṣanam",
    transliteration: "upalakṣanam",
    definition:
      "Implying something not actually expressed; that which stands as a representative of all other things of the same group; a mark, characteristic or distinctive feature.",
  },
  {
    id: "upalambha",
    term: "upalambha",
    transliteration: "upalambha",
    definition:
      "Direct perception, seeing, looking at; acquisition.",
  },
  {
    id: "upama",
    term: "upamā",
    transliteration: "upamā",
    definition:
      "Example, likeness, resemblance.",
    relatedTerms: ["upamānam"],
  },
  {
    id: "upamanam",
    term: "upamānam",
    transliteration: "upamānam",
    definition:
      "Comparison; illustration - a pramāṇa.",
    relatedTerms: ["pramāṇam"],
  },
  {
    id: "upamardanam",
    term: "upamardanam",
    transliteration: "upamardanam",
    definition:
      "Suppression; destruction.",
  },
  {
    id: "upanayanam",
    term: "upanayaṇam",
    transliteration: "upanayaṇam",
    definition:
      "Initiation into the Veda at age 8-12 years; going to the guru for teaching; offering; leading to or near.",
  },
  {
    id: "upanisad",
    term: "upaniṣad",
    transliteration: "upaniṣad",
    definition:
      "The definite, well ascertained knowledge that is self, which makes one recognize brahman and destroys all sorrow; revealed texts dealing with the self; that which is the most profound secret.",
    vedantaMeaning:
      "The end portions of the Vedas that reveal the nature of ātmā and Brahman. The word is traditionally derived as upa-ni-ṣad — that which destroys (ṣad) ignorance by bringing the student near (upa-ni) to the truth. The principal Upaniṣads commented upon by Śaṅkara form the prasthānatraya along with the Brahmasūtras and the Bhagavadgītā.",
    relatedTerms: ["brahman", "vedaḥ", "vedāntaḥ", "guruh"],
    tags: ["scripture", "teaching", "wisdom", "revelation", "self-knowledge", "text"],
  },
  {
    id: "upanyasah",
    term: "upanyāsaḥ",
    transliteration: "upanyāsaḥ",
    definition:
      "A statement; suggestion; proposal. Viṣama upanyāsaḥ = This is a misstatement.",
  },
  {
    id: "upapad",
    term: "upapad",
    transliteration: "upapad",
    definition:
      "To reach, approach, come near; to obtain; to happen; upapadyate it is tenable or possible.",
    relatedTerms: ["upapadam"],
  },
  {
    id: "upapadam",
    term: "upapadam",
    transliteration: "upapadam",
    definition:
      "A word prefixed or previously uttered; an epithet of respect.",
    relatedTerms: ["upapad"],
  },
  {
    id: "upapattih",
    term: "upapattih",
    transliteration: "upapattih",
    definition:
      "Production; cause; reasoning; proof; gaining; attaining.",
  },
  {
    id: "uparamah",
    term: "uparamah",
    transliteration: "uparamah",
    definition:
      "Avoidance; ceasing; abstaining from.",
  },
  {
    id: "uparatih",
    term: "uparatih",
    transliteration: "uparatih",
    definition:
      "Stopping; not doing actions which distract or inhibit your growth.",
    vedantaMeaning:
      "Withdrawal from activities that do not support one's growth — one of the six inner disciplines. Uparati is sometimes understood as the natural withdrawal that follows śama and dama, and sometimes as strict adherence to one's svadharma. It is not escapism but a deliberate focusing of one's life around what truly matters — the pursuit of self-knowledge.",
    relatedTerms: ["samaḥ", "damaḥ", "titikṣā", "śraddhā", "sādhanatuṣṭayam"],
    tags: ["withdrawal", "restraint", "cessation", "renunciation", "discipline"],
  },
  {
    id: "upasakah",
    term: "upāsakaḥ",
    transliteration: "upāsakaḥ",
    definition:
      "The one who meditates.",
  },
  {
    id: "upasamah",
    term: "upāśamaḥ",
    transliteration: "upāśamaḥ",
    definition:
      "Stopping; cessation; calmness; patience; resolution.",
  },
  {
    id: "upasamharah",
    term: "upasaṃhāraḥ",
    transliteration: "upasaṃhāraḥ",
    definition:
      "Summing up; conclusion; drawing together; withdrawing.",
  },
  {
    id: "upasanam",
    term: "upāsanam",
    transliteration: "upāsanam",
    definition:
      "Meditation; worship; reflection.",
  },
  {
    id: "upasantam",
    term: "upāśāntam",
    transliteration: "upāśāntam",
    definition:
      "Cessation, quieting; passification.",
  },
  {
    id: "upasargah",
    term: "upasargah",
    transliteration: "upasargah",
    definition:
      "A preposition prefixed to roots; obstacle; misfortune.",
  },
  {
    id: "upasita",
    term: "upasitā",
    transliteration: "upasitā",
    definition:
      "Meditation; worship.",
    relatedTerms: ["āsita"],
  },
  {
    id: "upasitr",
    term: "upasitṛ",
    transliteration: "upasitṛ",
    definition:
      "Meditator; nom. sing. upasitā.",
    relatedTerms: ["upasitā"],
  },
  {
    id: "upastha",
    term: "upasthā",
    transliteration: "upasthā",
    definition:
      "To wait or attend upon; to stand near, approach.",
  },
  {
    id: "upasti",
    term: "upāsti",
    transliteration: "upāsti",
    definition:
      "Meditation; worship.",
  },
  {
    id: "upasyam",
    term: "upāsyam",
    transliteration: "upāsyam",
    definition:
      "That which is to be meditated upon.",
  },
  {
    id: "upavyakhyanam",
    term: "upavyākhyānam",
    transliteration: "upavyākhyānam",
    definition:
      "A supplementary explanation or interpretation.",
  },
  {
    id: "upayah",
    term: "upāyaḥ",
    transliteration: "upāyaḥ",
    definition:
      "Means of accomplishment; plan.",
  },
  {
    id: "upayogah",
    term: "upayogaḥ",
    transliteration: "upayogaḥ",
    definition:
      "Suitability; use; application; proximity; employment.",
  },
  {
    id: "upayukta",
    term: "upayukta",
    transliteration: "upayukta",
    definition:
      "Appropriate; proper; useful; fit; attached.",
  },
  {
    id: "upe",
    term: "upe",
    transliteration: "upe",
    definition:
      "To arrive at, reach, approach. upait It approaches.",
  },
  {
    id: "urdhva",
    term: "ūrdhva",
    transliteration: "ūrdhva",
    definition:
      "Heading upwards; elevated; ūrdhvam ind. afterwards; above.",
  },
  {
    id: "urnanabhih",
    term: "urṇanābhiḥ",
    transliteration: "urṇanābhiḥ",
    definition:
      "A spider.",
  },
  {
    id: "us",
    term: "uṣ",
    transliteration: "uṣ",
    definition:
      "To burn; consume. uṣitvā having burned.",
  },
  {
    id: "uta",
    term: "uta",
    transliteration: "uta",
    definition:
      "ind. A particle expressing doubt or alternative, usually correlative: whether this or that.",
  },
  {
    id: "utkarsah",
    term: "utkarṣaḥ",
    transliteration: "utkarṣaḥ",
    definition:
      "Increase; prosperity; elevation; abundance; attractive.",
  },
  {
    id: "utkrsta",
    term: "utkṛṣṭa",
    transliteration: "utkṛṣṭa",
    definition:
      "Raised; excellent; superior; extracted.",
  },
  {
    id: "utpadaka",
    term: "utpādaka",
    transliteration: "utpādaka",
    definition:
      "Bringing about; utpādakaḥ producer, father; utpādakam origin, cause.",
  },
  {
    id: "utpadyam",
    term: "utpādyam",
    transliteration: "utpādyam",
    definition:
      "That which can be produced - one of four possible results of karma.",
    relatedTerms: ["karma"],
  },
  {
    id: "utpalam",
    term: "utpalam",
    transliteration: "utpalam",
    definition:
      "Lotus; lily.",
  },
  {
    id: "utpanna",
    term: "utpanna",
    transliteration: "utpanna",
    definition:
      "Acquired; gained; accomplished; produced.",
  },
  {
    id: "utpattih",
    term: "utpattih",
    transliteration: "utpattih",
    definition:
      "Increase; birth; production; origin.",
  },
  {
    id: "utsahah",
    term: "utsāhaḥ",
    transliteration: "utsāhaḥ",
    definition:
      "Enthusiasm; effort; perseverance.",
  },
  {
    id: "utsargah",
    term: "utsargaḥ",
    transliteration: "utsargaḥ",
    definition:
      "General rule; completion.",
  },
  {
    id: "uttama",
    term: "uttama",
    transliteration: "uttama",
    definition:
      "Best; excellent.",
  },
  {
    id: "uttamaguruh",
    term: "uttamaguruh",
    transliteration: "uttamaguruh",
    definition:
      "Teacher with no other pursuits; knower of śāstram and a brahmaniṣṭhā.",
    relatedTerms: ["śāstram"],
  },
  {
    id: "uttara",
    term: "uttara",
    transliteration: "uttara",
    definition:
      "Upper, higher; being or produced in the north; later; superior, chief; more.",
    relatedTerms: ["uttaram"],
  },
  {
    id: "uttaram",
    term: "uttaram",
    transliteration: "uttaram",
    definition:
      "An answer.",
    relatedTerms: ["uttara"],
  },
  {
    id: "uttarayanam",
    term: "uttarāyaṇam",
    transliteration: "uttarāyaṇam",
    definition:
      "The progress of the sun to the north of the equator.",
  },
  {
    id: "utthapanam",
    term: "utthāpanam",
    transliteration: "utthāpanam",
    definition:
      "Causing to rise, come up; bringing about, awakening.",
  },
  {
    id: "va",
    term: "vā",
    transliteration: "vā",
    definition:
      "ind. Or; indeed; truly.",
  },
  {
    id: "vacanam",
    term: "vacanam",
    transliteration: "vacanam",
    definition:
      "Speech; saying; order, command.",
  },
  {
    id: "vacikam",
    term: "vācikam",
    transliteration: "vācikam",
    definition:
      "Verbal; an oral or verbal expression.",
  },
  {
    id: "vacyarthah",
    term: "vācyārthah",
    transliteration: "vācyārthah",
    definition:
      "Immediate meaning; primary meaning.",
  },
  {
    id: "vadah",
    term: "vādah",
    transliteration: "vādah",
    definition:
      "Discourse, talk, assertion; philosophy, position.",
  },
  {
    id: "vaggocara",
    term: "vāggocara",
    transliteration: "vāggocara",
    definition:
      "Accessible by voice, within the realm of words.",
  },
  {
    id: "vahnih",
    term: "vahnih",
    transliteration: "vahnih",
    definition:
      "Fire; digestion.",
  },
  {
    id: "vai",
    term: "vai",
    transliteration: "vai",
    definition:
      "ind. Indeed, truly.",
  },
  {
    id: "vaicitryam",
    term: "vaicitryam",
    transliteration: "vaicitryam",
    definition:
      "Variety, diversity; manifoldness.",
  },
  {
    id: "vaidharmyam",
    term: "vaidharmyam",
    transliteration: "vaidharmyam",
    definition:
      "Impropriety; difference; dissimilarity.",
  },
  {
    id: "vaidika",
    term: "vaidika",
    transliteration: "vaidika",
    definition:
      "That which is related to or found in the Vedas.",
  },
  {
    id: "vaidya",
    term: "vaidya",
    transliteration: "vaidya",
    definition:
      "Relating to the Vedas; learned man; doctor.",
  },
  {
    id: "vaikalyam",
    term: "vaikalyam",
    transliteration: "vaikalyam",
    definition:
      "Affliction; defect.",
  },
  {
    id: "vaikunthah",
    term: "vaikuṇṭhaḥ",
    transliteration: "vaikuṇṭhaḥ",
    definition:
      "The heaven of Viṣṇu.",
  },
  {
    id: "vailaksanyam",
    term: "vailakṣaṇyam",
    transliteration: "vailakṣaṇyam",
    definition:
      "Opposition, contrariety, disparity, difference.",
  },
  {
    id: "vainasikah",
    term: "vaināśikaḥ",
    transliteration: "vaināśikaḥ",
    definition:
      "A follower of Buddhist doctrine.",
  },
  {
    id: "vaiparityam",
    term: "vaiparītyam",
    transliteration: "vaiparītyam",
    definition:
      "Inconsistency; contrariety.",
  },
  {
    id: "vairagyam",
    term: "vairāgyam",
    transliteration: "vairāgyam",
    definition:
      "Dispassion toward worldly gain.",
    vedantaMeaning:
      "Dispassion born of discrimination — the natural falling away of longing for the results of action, both in this world and in any other. Vairāgya is not suppression or aversion but a clear seeing that no finite result can deliver lasting fullness. It arises naturally from viveka and is the second of the four qualifications (sādhanatuṣṭayam).",
    relatedTerms: ["viveka", "mumukṣutvam", "sādhanatuṣṭayam", "mokṣa"],
    tags: ["dispassion", "detachment", "renunciation", "non-attachment", "letting go"],
  },
  {
    id: "vaisakhah",
    term: "vaiśākhaḥ",
    transliteration: "vaiśākhaḥ",
    definition:
      "A churning-stick; name of the second lunar month (April-May).",
  },
  {
    id: "vaisamyam",
    term: "vaiṣamyam",
    transliteration: "vaiṣamyam",
    definition:
      "Unevenness; inconsistency; variability.",
  },
  {
    id: "vaisaradyam",
    term: "vaiśāradyam",
    transliteration: "vaiśāradyam",
    definition:
      "Skill, proficiency, cleverness.",
  },
  {
    id: "vaisvanara",
    term: "vaiśvānara",
    transliteration: "vaiśvānara",
    definition:
      "The Lord; relating or common to all mankind; universal.",
  },
  {
    id: "vaisyah",
    term: "vaiśyaḥ",
    transliteration: "vaiśyaḥ",
    definition:
      "A man of the third social group, his business being trade or agriculture.",
  },
  {
    id: "vaitatthyam",
    term: "vaitatthyam",
    transliteration: "vaitatthyam",
    definition:
      "Mithyātvam, dependent reality.",
  },
  {
    id: "vaiyadhikaranyam",
    term: "vaiyadhikaraṇyam",
    transliteration: "vaiyadhikaraṇyam",
    definition:
      "The state of being in different case relations or positions.",
  },
  {
    id: "vajam",
    term: "vajam",
    transliteration: "vajam",
    definition:
      "Food; an oblation of rice offered at a śrāddhā ceremony.",
    relatedTerms: ["śraddhā"],
  },
  {
    id: "vak",
    term: "vāk",
    transliteration: "vāk",
    definition:
      "Speech; the organ of speech.",
  },
  {
    id: "vakra",
    term: "vakra",
    transliteration: "vakra",
    definition:
      "Crooked, bent, curved.",
  },
  {
    id: "vaktavya",
    term: "vaktavya",
    transliteration: "vaktavya",
    definition:
      "Fit to be said or declared, told, explained.",
  },
  {
    id: "vakyam",
    term: "vākyam",
    transliteration: "vākyam",
    definition:
      "Sentence; precept.",
  },
  {
    id: "valmikih",
    term: "vālmīkih",
    transliteration: "vālmīkih",
    definition:
      "Poet-author of the Rāmāyaṇa; from or relating to an anthill.",
  },
  {
    id: "vamsah",
    term: "vaṃśaḥ",
    transliteration: "vaṃśaḥ",
    definition:
      "Family; lineage; flute.",
  },
  {
    id: "vanam",
    term: "vanam",
    transliteration: "vanam",
    definition:
      "Forest, woods.",
    relatedTerms: ["sarvanāma"],
  },
  {
    id: "vanaprasthah",
    term: "vānaprasthaḥ",
    transliteration: "vānaprasthaḥ",
    definition:
      "Retiring to the forest - the third stage of traditional Vedic life.",
  },
  {
    id: "vandya",
    term: "vandya",
    transliteration: "vandya",
    definition:
      "Praiseworthy, venerable.",
  },
  {
    id: "vanhi",
    term: "vanhi",
    transliteration: "vanhi",
    definition:
      "Name for agni, fire.",
  },
  {
    id: "vanih",
    term: "vāṇīh",
    transliteration: "vāṇīh",
    definition:
      "Deity of speech - speaking.",
  },
  {
    id: "varanam",
    term: "varaṇam",
    transliteration: "varaṇam",
    definition:
      "Covering, choosing; surrounding; prohibiting.",
  },
  {
    id: "varcas",
    term: "varcas",
    transliteration: "varcas",
    definition:
      "Brilliance; energy; lustre.",
  },
  {
    id: "varenya",
    term: "vareṇya",
    transliteration: "vareṇya",
    definition:
      "Most worshipful; most sought after.",
  },
  {
    id: "vargah",
    term: "vargaḥ",
    transliteration: "vargaḥ",
    definition:
      "Group; class; set; collection; category; a class of consonants in the alphabet.",
  },
  {
    id: "varistha",
    term: "variṣṭha",
    transliteration: "variṣṭha",
    definition:
      "Highest; beyond perception and inference.",
  },
  {
    id: "varjita",
    term: "varjita",
    transliteration: "varjita",
    definition:
      "Excluded, eliminated, relinquished.",
  },
  {
    id: "varnah",
    term: "varṇaḥ",
    transliteration: "varṇaḥ",
    definition:
      "A class of men; color; caste.",
  },
  {
    id: "varnakah",
    term: "vārṇakaḥ",
    transliteration: "vārṇakaḥ",
    definition:
      "A speaker; a syllable; a letter; a mask; a paint.",
  },
  {
    id: "varnanam",
    term: "varṇanam",
    transliteration: "varṇanam",
    definition:
      "Assertion; description; writing; statement, assertion; praise.",
  },
  {
    id: "varnavyavastha",
    term: "varṇavyavasthā",
    transliteration: "varṇavyavasthā",
    definition:
      "Social groups defined by duties.",
  },
  {
    id: "vartamana",
    term: "vartamāna",
    transliteration: "vartamāna",
    definition:
      "Being, existing, living; turning or moving round.",
  },
  {
    id: "varttikam",
    term: "vārttikam",
    transliteration: "vārttikam",
    definition:
      "Independent exposition of a bhāṣyam in verse.",
    relatedTerms: ["bhāṣyam"],
  },
  {
    id: "varunah",
    term: "varuṇaḥ",
    transliteration: "varuṇaḥ",
    definition:
      "Deity of tongue-taste; water.",
  },
  {
    id: "vasad",
    term: "vaṣaḍ",
    transliteration: "vaṣaḍ",
    definition:
      "An exclamation used on making an oblation to a deity.",
  },
  {
    id: "vasagah",
    term: "vaśagaḥ",
    transliteration: "vaśagaḥ",
    definition:
      "The one under the influence of avidyā; jīvaḥ.",
    relatedTerms: ["avidyā", "jīvah"],
  },
  {
    id: "vasah",
    term: "vaśaḥ",
    transliteration: "vaśaḥ",
    definition:
      "also vasam. Will; desire; control; authority; influence; power.",
  },
  {
    id: "vasana",
    term: "vāsanā",
    transliteration: "vāsanā",
    definition:
      "Subtle impressions left on the mind by previous actions; knowledge derived from memory; desire.",
    root: "memory",
    relatedTerms: ["karma", "manas", "saṃsāra"],
    tags: ["impression", "conditioning", "tendency", "habit", "memory", "pattern"],
  },
  {
    id: "vasantah",
    term: "vasantaḥ",
    transliteration: "vasantaḥ",
    definition:
      "The spring.",
  },
  {
    id: "vasisthah",
    term: "vasiṣṭhaḥ",
    transliteration: "vasiṣṭhaḥ",
    definition:
      "Name of a sage; name of the author of a smṛti.",
  },
  {
    id: "vastava",
    term: "vastava",
    transliteration: "vastava",
    definition:
      "True; determined; fixed; real.",
  },
  {
    id: "vastram",
    term: "vastram",
    transliteration: "vastram",
    definition:
      "Clothes, upper garment, cloth.",
  },
  {
    id: "vastu",
    term: "vastu",
    transliteration: "vastu",
    definition:
      "The real; essence; object.",
  },
  {
    id: "vasudevah",
    term: "vāsudevaḥ",
    transliteration: "vāsudevaḥ",
    definition:
      "Deity of citta-memory; Viṣṇu.",
    relatedTerms: ["citta"],
  },
  {
    id: "vatah",
    term: "vātaḥ",
    transliteration: "vātaḥ",
    definition:
      "Wind; air, one of the three body-elements of Ayurvedic medicine.",
  },
  {
    id: "vayuh",
    term: "vāyuḥ",
    transliteration: "vāyuḥ",
    definition:
      "Air.",
  },
  {
    id: "vedah",
    term: "vedaḥ",
    transliteration: "vedaḥ",
    definition:
      "Revealed knowledge of Vedic India; four sacred scriptures including Upaniṣads.",
    relatedTerms: ["upaniṣad", "vedāntaḥ", "dharmaḥ"],
    tags: ["scripture", "knowledge", "revelation", "sacred", "text", "tradition"],
  },
  {
    id: "vedanam",
    term: "vedanam",
    transliteration: "vedanam",
    definition:
      "Knowledge; perception; sensation; acquisition.",
  },
  {
    id: "vedangah",
    term: "vedāṅgaḥ",
    transliteration: "vedāṅgaḥ",
    definition:
      "Texts auxiliary to the Vedas which aid employment and interpretation of the Veda; see śikṣā, chandas, vyākaraṇa, nirukta, jyotiṣa, kalpa.",
    relatedTerms: ["chandas", "śikṣā"],
  },
  {
    id: "vedantah",
    term: "vedāntaḥ",
    transliteration: "vedāntaḥ",
    definition:
      "Scriptures at the end of the Veda dealing with knowledge that is the self; that which says you are whole and you are the whole.",
    vedantaMeaning:
      "Literally 'the end of the Veda' — both in the sense of the concluding portion and the ultimate purport. Vedānta as a teaching tradition (sampradāya) unfolds the meaning of the Upaniṣads through a teacher who has understood them. The vision of Vedānta is that the individual (jīva) is non-different from the whole (Brahman) — this is not a philosophy to be believed but a fact to be recognized.",
    relatedTerms: ["vedaḥ", "upaniṣad", "brahman", "ātmā"],
    tags: ["philosophy", "self-knowledge", "scripture", "teaching", "wholeness"],
  },
  {
    id: "vesah",
    term: "veṣaḥ",
    transliteration: "veṣaḥ",
    definition:
      "Appearance; costume.",
  },
  {
    id: "vet",
    term: "vet",
    transliteration: "vet",
    definition:
      "A knower, sage.",
  },
  {
    id: "vibhagah",
    term: "vibhāgaḥ",
    transliteration: "vibhāgaḥ",
    definition:
      "Distinction; division; a share.",
  },
  {
    id: "vibhaktih",
    term: "vibhaktih",
    transliteration: "vibhaktih",
    definition:
      "Grammatical case and inflections of nouns; separation; portion.",
  },
  {
    id: "vibhasa",
    term: "vibhāsa",
    transliteration: "vibhāsa",
    definition:
      "Option, alternative.",
    relatedTerms: ["bhāṣā"],
  },
  {
    id: "vibhatam",
    term: "vibhātam",
    transliteration: "vibhātam",
    definition:
      "Daybreak, dawn.",
  },
  {
    id: "vibhavah",
    term: "vibhāvaḥ",
    transliteration: "vibhāvaḥ",
    definition:
      "Appearance, manifestation.",
  },
  {
    id: "vibhramah",
    term: "vibhramah",
    transliteration: "vibhramah",
    definition:
      "Error, mistake; confusion; loss; wandering about; whirling.",
  },
  {
    id: "vibhuh",
    term: "vibhuh",
    transliteration: "vibhuh",
    definition:
      "All-pervasive; not spatially limited; powerful; capable of. vibhuḥ Lord, master.",
  },
  {
    id: "vibhuta",
    term: "vibhūta",
    transliteration: "vibhūta",
    definition:
      "Produced; manifested; great.",
  },
  {
    id: "vibhutih",
    term: "vibhūtih",
    transliteration: "vibhūtih",
    definition:
      "Glory; greatness.",
  },
  {
    id: "vicaksanah",
    term: "vicakṣaṇaḥ",
    transliteration: "vicakṣaṇaḥ",
    definition:
      "A wise man, learned man.",
  },
  {
    id: "vicarah",
    term: "vicāraḥ",
    transliteration: "vicāraḥ",
    definition:
      "Examination of what is there; inquiry.",
  },
  {
    id: "vicaraniyam",
    term: "vicāraṇīyam",
    transliteration: "vicāraṇīyam",
    definition:
      "To be investigated; to be debated; to be considered.",
  },
  {
    id: "vicikitsa",
    term: "vicikitsā",
    transliteration: "vicikitsā",
    definition:
      "Doubt, uncertainty, hesitation; mistake, error.",
  },
  {
    id: "vicitra",
    term: "vicitra",
    transliteration: "vicitra",
    definition:
      "Various; varied.",
  },
  {
    id: "vid",
    term: "vid",
    transliteration: "vid",
    definition:
      "2P. To know, understand, learn, ascertain; vetti veda vidita.",
    relatedTerms: ["vidita"],
  },
  {
    id: "vidagdha",
    term: "vidagdha",
    transliteration: "vidagdha",
    definition:
      "Burned up; clever, shrewd; crafty.",
  },
  {
    id: "videha",
    term: "videha",
    transliteration: "videha",
    definition:
      "Free from the body; dead.",
  },
  {
    id: "videhamuktih",
    term: "videhamuktih",
    transliteration: "videhamuktih",
    definition:
      "Liberation after death.",
  },
  {
    id: "vidhanam",
    term: "vidhānam",
    transliteration: "vidhānam",
    definition:
      "Prescribing, ordering, enjoining; rule, precept; application.",
  },
  {
    id: "vidheya",
    term: "vidheya",
    transliteration: "vidheya",
    definition:
      "To be done; prescribed.",
    relatedTerms: ["vidheyam", "vidheyātmā"],
  },
  {
    id: "vidheyam",
    term: "vidheyam",
    transliteration: "vidheyam",
    definition:
      "Predication; 'you are' of 'You are brahman.'; what you are saying.",
    relatedTerms: ["brahman"],
  },
  {
    id: "vidheyatma",
    term: "vidheyātmā",
    transliteration: "vidheyātmā",
    definition:
      "Acting according to one's will and duty.",
    relatedTerms: ["vidheya"],
  },
  {
    id: "vidhih",
    term: "vidhih",
    transliteration: "vidhih",
    definition:
      "Vedic mandate; injunction; rule; method, manner, condition.",
  },
  {
    id: "vidita",
    term: "vidita",
    transliteration: "vidita",
    definition:
      "Known; understood.",
  },
  {
    id: "vidusah",
    term: "viduṣaḥ",
    transliteration: "viduṣaḥ",
    definition:
      "A learned man.",
  },
  {
    id: "vidvan",
    term: "vidvān",
    transliteration: "vidvān",
    definition:
      "Scholar; sage; the one who knows.",
  },
  {
    id: "vidvatsannyasah",
    term: "vidvatsannyāsaḥ",
    transliteration: "vidvatsannyāsaḥ",
    definition:
      "Act of renunciation by a jñānī taken to perfect that knowledge.",
    relatedTerms: ["jñānī"],
  },
  {
    id: "vidya",
    term: "vidyā",
    transliteration: "vidyā",
    definition:
      "Knowledge.",
    vedantaMeaning:
      "Self-knowledge — the direct recognition of oneself as Brahman, which destroys avidyā. Vidyā is not intellectual information but the clear, doubt-free understanding (aparokṣa-jñāna) that removes the fundamental error of self-limitation. In the Upaniṣads, parā vidyā refers to knowledge of Brahman as distinct from aparā vidyā, all other forms of learning.",
    relatedTerms: ["avidyā", "jñānam", "brahman"],
    tags: ["knowledge", "wisdom", "learning", "understanding", "clarity"],
  },
  {
    id: "vidyut",
    term: "vidyut",
    transliteration: "vidyut",
    definition:
      "Lightning; thunderbolt.",
  },
  {
    id: "vigata",
    term: "vigata",
    transliteration: "vigata",
    definition:
      "Gone; separated; dead.",
  },
  {
    id: "vighnah",
    term: "vighnaḥ",
    transliteration: "vighnaḥ",
    definition:
      "Obstacle, impediment, hindrance.",
  },
  {
    id: "vigrahah",
    term: "vigrahaḥ",
    transliteration: "vigrahaḥ",
    definition:
      "Analysis; form; physical body; extension; separation of a compound into component parts.",
  },
  {
    id: "viguna",
    term: "viguṇa",
    transliteration: "viguṇa",
    definition:
      "Inconvenient; unpleasant; free of enticing features; worthless.",
  },
  {
    id: "vihina",
    term: "vihīna",
    transliteration: "vihīna",
    definition:
      "Devoid of; without; abandoned; left.",
    relatedTerms: ["hīna"],
  },
  {
    id: "vihitakarma",
    term: "vihitakarma",
    transliteration: "vihitakarma",
    definition:
      "Enjoined or prescribed duty.",
  },
  {
    id: "vihitam",
    term: "vihitam",
    transliteration: "vihitam",
    definition:
      "Order, command.",
  },
  {
    id: "vijatiya",
    term: "vijātīya",
    transliteration: "vijātīya",
    definition:
      "Of a different species; unlike.",
  },
  {
    id: "vijayah",
    term: "vijayaḥ",
    transliteration: "vijayaḥ",
    definition:
      "Conquest, victory.",
  },
  {
    id: "viji",
    term: "viji",
    transliteration: "viji",
    definition:
      "To conquer, defeat, overcome; surpass, excel, win. vijayate",
  },
  {
    id: "vijnah",
    term: "vijñaḥ",
    transliteration: "vijñaḥ",
    definition:
      "Knowledge; intelligence; a wise man.",
    aliases: ["vidnyah"],
  },
  {
    id: "vijnanam",
    term: "vijñānam",
    transliteration: "vijñānam",
    definition:
      "Knowledge, wisdom, intelligence.",
    aliases: ["vidnyanam"],
    relatedTerms: ["jñānam"],
  },
  {
    id: "vijnanamayakosah",
    term: "vijñānamayakośaḥ",
    transliteration: "vijñānamayakośaḥ",
    definition:
      "Modification of intellect; intellect with five organs of perception - part of the subtle body.",
    aliases: ["vidnyanamayakoshah"],
  },
  {
    id: "vijnaptih",
    term: "vijñaptih",
    transliteration: "vijñaptih",
    definition:
      "Understanding; pure awareness; svarūpa of the knower.",
    aliases: ["vidnyaptih"],
  },
  {
    id: "vijnatr",
    term: "vijñātṛ",
    transliteration: "vijñātṛ",
    definition:
      "The knower.",
    aliases: ["vidnyatr"],
  },
  {
    id: "vijneya",
    term: "vijñeya",
    transliteration: "vijñeya",
    definition:
      "To be known; knowable, cognizable.",
    aliases: ["vidnyeya"],
    relatedTerms: ["jñeya"],
  },
  {
    id: "vikala",
    term: "vikala",
    transliteration: "vikala",
    definition:
      "Deprived of a part or member, defective, impermanent; agitated.",
  },
  {
    id: "vikalpah",
    term: "vikalpaḥ",
    transliteration: "vikalpaḥ",
    definition:
      "Doubt, uncertainty; error, imagination, superimposition; duality; distinction.",
    relatedTerms: ["kalpaḥ"],
  },
  {
    id: "vikalpanam",
    term: "vikalpanam",
    transliteration: "vikalpanam",
    definition:
      "Error, imagination, superimposition, indecision.",
  },
  {
    id: "vikalpita",
    term: "vikalpita",
    transliteration: "vikalpita",
    definition:
      "Divided, manifold, superimposed.",
  },
  {
    id: "vikarah",
    term: "vikāraḥ",
    transliteration: "vikāraḥ",
    definition:
      "Change; transformation; body.",
    relatedTerms: ["kāraḥ"],
  },
  {
    id: "vikaranam",
    term: "vikāraṇam",
    transliteration: "vikāraṇam",
    definition:
      "Change; modification.",
  },
  {
    id: "vikaryam",
    term: "vikāryam",
    transliteration: "vikāryam",
    definition:
      "That which can be changed or transformed - one of four possible results of karma.",
    relatedTerms: ["karma"],
  },
  {
    id: "vikasah",
    term: "vikāśaḥ",
    transliteration: "vikāśaḥ",
    definition:
      "Manifestation; sky; desire; brightness.",
  },
  {
    id: "vikr",
    term: "vikr",
    transliteration: "vikr",
    definition:
      "8U To alter, change, affect; to create; to disturb.",
  },
  {
    id: "vikriya",
    term: "vikriyā",
    transliteration: "vikriyā",
    definition:
      "Change; modification; agitation; anger.",
  },
  {
    id: "viksepah",
    term: "vikṣepaḥ",
    transliteration: "vikṣepaḥ",
    definition:
      "Agitation; that which creates error born of avidyā; distraction; unconnected thoughts.",
    relatedTerms: ["avidyā"],
  },
  {
    id: "viksipta",
    term: "vikṣipta",
    transliteration: "vikṣipta",
    definition:
      "Projected; scattered; distracted.",
  },
  {
    id: "vilaksanam",
    term: "vilakṣaṇam",
    transliteration: "vilakṣaṇam",
    definition:
      "Distinct; different; other; having no distinguishing marks.",
    relatedTerms: ["lakṣaṇā"],
  },
  {
    id: "vilapah",
    term: "vilāpaḥ",
    transliteration: "vilāpaḥ",
    definition:
      "Wailing; bemoaning.",
  },
  {
    id: "vilapanam",
    term: "vilāpanam",
    transliteration: "vilāpanam",
    definition:
      "An act causing ruin.",
  },
  {
    id: "vilasah",
    term: "vilāsaḥ",
    transliteration: "vilāsaḥ",
    definition:
      "The expression of moha; appearance; beauty, grace; sport.",
  },
  {
    id: "vili",
    term: "vilī",
    transliteration: "vilī",
    definition:
      "4A. To be dissolved, to melt away, be absorbed in; settle on; adhere to.",
    relatedTerms: ["vilīna"],
  },
  {
    id: "vilina",
    term: "vilīna",
    transliteration: "vilīna",
    definition:
      "In contact with; next to; disappeared; clinging to; adhered to.",
    relatedTerms: ["vilī", "līna"],
  },
  {
    id: "vimatam",
    term: "vimatam",
    transliteration: "vimatam",
    definition:
      "A technical term indicating the topic under discussion.",
  },
  {
    id: "vimatsara",
    term: "vimatsara",
    transliteration: "vimatsara",
    definition:
      "Free from jealousy.",
  },
  {
    id: "vina",
    term: "vinā",
    transliteration: "vinā",
    definition:
      "ind. Without; except; in the absence of.",
  },
  {
    id: "vinasah",
    term: "vināśaḥ",
    transliteration: "vināśaḥ",
    definition:
      "Absorption without return; destruction, removal.",
  },
  {
    id: "vinastih",
    term: "vinaṣṭih",
    transliteration: "vinaṣṭih",
    definition:
      "Utter ruin; destruction; disappearance, vanishing.",
  },
  {
    id: "vinayah",
    term: "vinayaḥ",
    transliteration: "vinayaḥ",
    definition:
      "Discipline; instruction, guidance; sense of propriety; modesty; humility.",
  },
  {
    id: "vinirmukta",
    term: "vinirmukta",
    transliteration: "vinirmukta",
    definition:
      "Freed; released; liberated.",
  },
  {
    id: "viniyogah",
    term: "viniyogaḥ",
    transliteration: "viniyogaḥ",
    definition:
      "Application; use; separation.",
  },
  {
    id: "vipaksah",
    term: "vipakṣaḥ",
    transliteration: "vipakṣaḥ",
    definition:
      "An exception; enemy.",
  },
  {
    id: "viparicchapah",
    term: "viparicchāpaḥ",
    transliteration: "viparicchāpaḥ",
    definition:
      "Becoming something different.",
  },
  {
    id: "viparinamam",
    term: "vipariṇāmam",
    transliteration: "vipariṇāmam",
    definition:
      "A change, an alteration.",
  },
  {
    id: "viparita",
    term: "viparīta",
    transliteration: "viparīta",
    definition:
      "Opposite; reversed, wrong; false; acting in an opposite manner.",
  },
  {
    id: "viparitabhavana",
    term: "viparītabhāvanā",
    transliteration: "viparītabhāvanā",
    definition:
      "Comprehending and accommodating self-defeating thoughts; an attitude of self-discovery rather than self-criticism.",
  },
  {
    id: "viparyasah",
    term: "viparyāsaḥ",
    transliteration: "viparyāsaḥ",
    definition:
      "Error, mistake; change; unfavorableness.",
  },
  {
    id: "viparyayah",
    term: "viparyayaḥ",
    transliteration: "viparyayaḥ",
    definition:
      "Error, mistake; misapprehension.",
  },
  {
    id: "vipascita",
    term: "vipaścita",
    transliteration: "vipaścita",
    definition:
      "Learned; wise. vipaścitaḥ One who sees very clearly.",
  },
  {
    id: "viprah",
    term: "viprāḥ",
    transliteration: "viprāḥ",
    definition:
      "One who has studied the Veda; one with intellectual discipline.",
  },
  {
    id: "vipratipad",
    term: "vipratipad",
    transliteration: "vipratipad",
    definition:
      "To differ, be mutually opposed. vipratipādyate It is contradicted.",
  },
  {
    id: "vipratipattih",
    term: "vipratipattih",
    transliteration: "vipratipattih",
    definition:
      "Mutual discrepancy; confusion; error, mistake.",
  },
  {
    id: "vipsa",
    term: "vipsā",
    transliteration: "vipsā",
    definition:
      "Repetition.",
  },
  {
    id: "viragah",
    term: "virāgaḥ",
    transliteration: "virāgaḥ",
    definition:
      "Dispassion for enjoyment of results of action.",
  },
  {
    id: "viraja",
    term: "viraja",
    transliteration: "viraja",
    definition:
      "Free of impurity; pure.",
  },
  {
    id: "virakta",
    term: "virakta",
    transliteration: "virakta",
    definition:
      "Free from passion or worldly attachment, indifferent.",
  },
  {
    id: "virasah",
    term: "viraṣaḥ",
    transliteration: "viraṣaḥ",
    definition:
      "Discontinuity.",
  },
  {
    id: "virat",
    term: "virāṭ",
    transliteration: "virāṭ",
    definition:
      "The Lord in the form of creation.",
  },
  {
    id: "virodhah",
    term: "virodhah",
    transliteration: "virodhah",
    definition:
      "Opposition; inconsistency; apparent incongruity which is explained away by properly construing the passage.",
  },
  {
    id: "viruddha",
    term: "viruddha",
    transliteration: "viruddha",
    definition:
      "Unfavorable; contrary, confined, opposing, contradictory.",
  },
  {
    id: "virudh",
    term: "virudh",
    transliteration: "virudh",
    definition:
      "7U. To oppose, obstruct. Passive – to be opposed to, contradict, be inconsistent or at variance with; to contend or quarrel with.",
  },
  {
    id: "virupam",
    term: "virūpam",
    transliteration: "virūpam",
    definition:
      "Variety of form, nature or character; deformity.",
  },
  {
    id: "viryam",
    term: "vīryam",
    transliteration: "vīryam",
    definition:
      "Capacity; strength; power.",
  },
  {
    id: "visada",
    term: "viśada",
    transliteration: "viśada",
    definition:
      "Clear; pure; clean.",
    relatedTerms: ["viṣādaḥ"],
  },
  {
    id: "visadah",
    term: "viṣādaḥ",
    transliteration: "viṣādaḥ",
    definition:
      "Sorrow; sadness; dejection.",
    relatedTerms: ["viśada"],
  },
  {
    id: "visala",
    term: "viśāla",
    transliteration: "viśāla",
    definition:
      "Vast; great.",
  },
  {
    id: "visanam",
    term: "viśānam",
    transliteration: "viśānam",
    definition:
      "Entering; entrance into.",
  },
  {
    id: "visarada",
    term: "viśārada",
    transliteration: "viśārada",
    definition:
      "Knowledgeable; wise; learned.",
  },
  {
    id: "visaranam",
    term: "viśāraṇam",
    transliteration: "viśāraṇam",
    definition:
      "Splitting; killing.",
  },
  {
    id: "visayah",
    term: "viṣayaḥ",
    transliteration: "viṣayaḥ",
    definition:
      "Sphere of action; object; subject matter; context.",
  },
  {
    id: "visesah",
    term: "viśeṣaḥ",
    transliteration: "viśeṣaḥ",
    definition:
      "Aspect; characteristic; difference; mental impression; peculiarity.",
    relatedTerms: ["śeṣa", "seṣaḥ"],
  },
  {
    id: "visesanam",
    term: "viśeṣaṇam",
    transliteration: "viśeṣaṇam",
    definition:
      "Qualification; attribute; adjective; distinguishing mark.",
  },
  {
    id: "visesatah",
    term: "viśeṣataḥ",
    transliteration: "viśeṣataḥ",
    definition:
      "Specifically.",
  },
  {
    id: "visista",
    term: "viśiṣṭa",
    transliteration: "viśiṣṭa",
    definition:
      "Distinct; specific; particular.",
  },
  {
    id: "visistadvaita",
    term: "viśiṣṭādvaita",
    transliteration: "viśiṣṭādvaita",
    definition:
      "Ramanuja's doctrine of real spirit and matter.",
  },
  {
    id: "vismaranam",
    term: "vismaraṇam",
    transliteration: "vismaraṇam",
    definition:
      "Forgetting; forgetfulness.",
  },
  {
    id: "vismaya",
    term: "vismaya",
    transliteration: "vismaya",
    definition:
      "Wonder, surprise; amazement.",
  },
  {
    id: "visnuh",
    term: "viṣṇuḥ",
    transliteration: "viṣṇuḥ",
    definition:
      "The second deity of the supreme triad (with Brahma and Śiva), entrusted with the preservation of the world; deity of legs-movement.",
    relatedTerms: ["brahmā", "śiva"],
  },
  {
    id: "visokah",
    term: "viśokaḥ",
    transliteration: "viśokaḥ",
    definition:
      "Cessation of grief.",
  },
  {
    id: "vispastam",
    term: "vispaṣṭam",
    transliteration: "vispaṣṭam",
    definition:
      "Clearly, obviously.",
  },
  {
    id: "visphulingah",
    term: "visphuliṅgaḥ",
    transliteration: "visphuliṅgaḥ",
    definition:
      "A spark of fire.",
  },
  {
    id: "visrantih",
    term: "viśrāntih",
    transliteration: "viśrāntih",
    definition:
      "Relaxation; stop; cessation; repose; discovering the love of one's self.",
  },
  {
    id: "vistarah",
    term: "vistāraḥ",
    transliteration: "vistāraḥ",
    definition:
      "Expansion, spreading; amplitude, breadth; expansiveness, magnitude.",
  },
  {
    id: "visuddha",
    term: "viśuddha",
    transliteration: "viśuddha",
    definition:
      "Stainless, free from imperfection; correct.",
    relatedTerms: ["śuddha"],
  },
  {
    id: "visvah",
    term: "viśvaḥ",
    transliteration: "viśvaḥ",
    definition:
      "The name of the waker; complete.",
    vedantaMeaning:
      "The name given to ātmā as identified with the waking state in the Māṇḍūkya Upaniṣad. Viśva experiences the gross external world through the fourteen organs (five sense organs, five organs of action, and the fourfold mind). Viśva is the first pāda — not a separate self, but ātmā functioning through the waking body-mind.",
    relatedTerms: ["ātmā", "upaniṣad"],
  },
  {
    id: "visvam",
    term: "viśvam",
    transliteration: "viśvam",
    definition:
      "The world; Puruṣaḥ.",
    relatedTerms: ["puruṣaḥ"],
  },
  {
    id: "visvasah",
    term: "viśvāsaḥ",
    transliteration: "viśvāsaḥ",
    definition:
      "Trust; faith; confidence; reliance.",
  },
  {
    id: "vitandavadah",
    term: "vitaṇḍavādaḥ",
    transliteration: "vitaṇḍavādaḥ",
    definition:
      "Jealous discourse (e.g. 'You are wrong because it's you that said it').",
  },
  {
    id: "vitata",
    term: "vitatā",
    transliteration: "vitatā",
    definition:
      "Spread out, extended.",
  },
  {
    id: "vitatha",
    term: "vitathā",
    transliteration: "vitathā",
    definition:
      "Untrue, false.",
  },
  {
    id: "vitta",
    term: "vitta",
    transliteration: "vitta",
    definition:
      "Found, discovered; gained acquired; examined; known.",
    relatedTerms: ["vittam"],
  },
  {
    id: "vittam",
    term: "vittam",
    transliteration: "vittam",
    definition:
      "Wealth; property; power; advantage.",
    relatedTerms: ["vitta"],
  },
  {
    id: "vittesanah",
    term: "vitteṣaṇaḥ",
    transliteration: "vitteṣaṇaḥ",
    definition:
      "The desire for wealth.",
  },
  {
    id: "vivahah",
    term: "vivāhaḥ",
    transliteration: "vivāhaḥ",
    definition:
      "Marriage.",
  },
  {
    id: "vivaksa",
    term: "vivakṣā",
    transliteration: "vivakṣā",
    definition:
      "Intention; purpose; meaning.",
  },
  {
    id: "vivaksitam",
    term: "vivakṣitam",
    transliteration: "vivakṣitam",
    definition:
      "Purpose; sense; intention.",
  },
  {
    id: "vivaranam",
    term: "vivaraṇam",
    transliteration: "vivaraṇam",
    definition:
      "Explanation, description, display.",
  },
  {
    id: "vivartah",
    term: "vivartaḥ",
    transliteration: "vivartaḥ",
    definition:
      "Alteration; modification; an apparent or unreal appearance caused by human error.",
  },
  {
    id: "vivartam",
    term: "vivartam",
    transliteration: "vivartam",
    definition:
      "Whirling, turning round; existing; passing through various states.",
  },
  {
    id: "viveka",
    term: "viveka",
    devanagari: "विवेक",
    transliteration: "viveka",
    definition:
      "Discrimination; the capacity to distinguish the real from the unreal.",
    root: "vi + √vic — to separate, to discern",
    vedantaMeaning:
      "Nitya-anitya-vastu-viveka — the discrimination between the eternal (nitya) and the non-eternal (anitya). Listed as the first qualification (sādhana) for a student of Vedanta.",
    relatedTerms: ["adhyāsa", "anātmā", "vairāgyam", "mumukṣutvam", "sādhanatuṣṭayam"],
    tags: ["discrimination", "discernment", "real", "unreal", "clarity", "wisdom", "qualification"],
  },
  {
    id: "vivekah",
    term: "vivekah",
    transliteration: "vivekah",
    definition:
      "Discriminative inquiry.",
    relatedTerms: ["viveka"],
  },
  {
    id: "vividha",
    term: "vividha",
    transliteration: "vividha",
    definition:
      "Various; diverse.",
  },
  {
    id: "vividisasannyasah",
    term: "vividiṣāsannyāsaḥ",
    transliteration: "vividiṣāsannyāsaḥ",
    definition:
      "Act of renunciation taken by one who knows exactly what he wants; one who has a desire for mokṣaḥ.",
    relatedTerms: ["mokṣaḥ"],
  },
  {
    id: "vivikta",
    term: "vivikta",
    transliteration: "vivikta",
    definition:
      "Analyzed; discriminated; separated.",
  },
  {
    id: "vivr",
    term: "vivṛ",
    transliteration: "vivṛ",
    definition:
      "5, 9U. To disclose, reveal; to open; to cover up, stop.",
  },
  {
    id: "vivrtta",
    term: "vivrtta",
    transliteration: "vivrtta",
    definition:
      "Whirling, turning around.",
  },
  {
    id: "viyat",
    term: "viyat",
    transliteration: "viyat",
    definition:
      "Space, sky.",
  },
  {
    id: "viyukta",
    term: "viyukta",
    transliteration: "viyukta",
    definition:
      "Freed from; detached.",
  },
  {
    id: "vr",
    term: "vṛ",
    transliteration: "vṛ",
    definition:
      "To select as a boon; to hide, conceal; to beg, ask for.",
  },
  {
    id: "vraj",
    term: "vraj",
    transliteration: "vraj",
    definition:
      "1P. To go to, to attain, to gain. vrajet He would gain.",
  },
  {
    id: "vrddhah",
    term: "vṛddhaḥ",
    transliteration: "vṛddhaḥ",
    definition:
      "An elderly man; a venerable man; saint; senior relative.",
  },
  {
    id: "vrddhih",
    term: "vṛddhih",
    transliteration: "vṛddhih",
    definition:
      "Growth; increase; success.",
  },
  {
    id: "vrdh",
    term: "vṛdh",
    transliteration: "vṛdh",
    definition:
      "To grow; to increase; to rise; causative vardhayati to cause to grow.",
  },
  {
    id: "vrjina",
    term: "vṛjina",
    transliteration: "vṛjina",
    definition:
      "Crooked; bent; wicked.",
  },
  {
    id: "vrksah",
    term: "vṛkṣaḥ",
    transliteration: "vṛkṣaḥ",
    definition:
      "A tree.",
  },
  {
    id: "vrstih",
    term: "vṛṣṭih",
    transliteration: "vṛṣṭih",
    definition:
      "Rain; rainshower.",
  },
  {
    id: "vrtta",
    term: "vṛtta",
    transliteration: "vṛtta",
    definition:
      "Performed; happened; lived; fixed; done.",
    relatedTerms: ["vṛttam"],
  },
  {
    id: "vrttam",
    term: "vṛttam",
    transliteration: "vṛttam",
    definition:
      "Conduct; good behavior; rule; usage; a meter in general.",
    relatedTerms: ["vṛtta"],
  },
  {
    id: "vrttih",
    term: "vṛttih",
    transliteration: "vṛttih",
    definition:
      "A thought of an object; expression; capacity; condition; commentary; exposition.",
    relatedTerms: ["nivṛttiḥ", "āvṛttiḥ"],
  },
  {
    id: "vrttijnanam",
    term: "vṛttijñānam",
    transliteration: "vṛttijñānam",
    definition:
      "What takes place in the mind as a result of any cognition.",
    aliases: ["vrttidnyanam"],
  },
  {
    id: "vrttivisesah",
    term: "vṛttivīśeṣaḥ",
    transliteration: "vṛttivīśeṣaḥ",
    definition:
      "A particular frame of mind.",
  },
  {
    id: "vyabhicarah",
    term: "vyabhicāraḥ",
    transliteration: "vyabhicāraḥ",
    definition:
      "Transgression; deviation; violation; error; exclusion; change; movement.",
  },
  {
    id: "vyadhih",
    term: "vyādhih",
    transliteration: "vyādhih",
    definition:
      "Disease; ailment; illness.",
  },
  {
    id: "vyaghatah",
    term: "vyāghātaḥ",
    transliteration: "vyāghātaḥ",
    definition:
      "Contradiction; obstacle, impediment; exception; strike, blow.",
  },
  {
    id: "vyahrtih",
    term: "vyāhṛtih",
    transliteration: "vyāhṛtih",
    definition:
      "Sacred words used in daily and other rituals; the three words bhūr bhuvas svaḥ.",
  },
  {
    id: "vyakaranam",
    term: "vyākaraṇam",
    transliteration: "vyākaraṇam",
    definition:
      "Analysis; explaining; manifestation; discipline of grammar - one of the six Vedāṅgas.",
  },
  {
    id: "vyakhyanam",
    term: "vyākhyānam",
    transliteration: "vyākhyānam",
    definition:
      "Exposition; explanation; communication.",
  },
  {
    id: "vyakhyata",
    term: "vyākhyāta",
    transliteration: "vyākhyāta",
    definition:
      "Explained; narrated; related; commented upon.",
  },
  {
    id: "vyakta",
    term: "vyakta",
    transliteration: "vyakta",
    definition:
      "Explained; analyzed; separated.",
    relatedTerms: ["vyaktam"],
  },
  {
    id: "vyaktam",
    term: "vyaktam",
    transliteration: "vyaktam",
    definition:
      "Manifest; known.",
    relatedTerms: ["vyakta"],
  },
  {
    id: "vyaktih",
    term: "vyaktih",
    transliteration: "vyaktih",
    definition:
      "Manifestation; appearance; discrimination; distinctness.",
  },
  {
    id: "vyamoha",
    term: "vyāmoha",
    transliteration: "vyāmoha",
    definition:
      "Bewilderment; infatuation; embarassment.",
  },
  {
    id: "vyanah",
    term: "vyānaḥ",
    transliteration: "vyānaḥ",
    definition:
      "Circulation - a prāṇa seated in the heart and venal system.",
  },
  {
    id: "vyapaka",
    term: "vyāpaka",
    transliteration: "vyāpaka",
    definition:
      "All-pervasive; widely spread; comprehensive; invariably concomitant.",
  },
  {
    id: "vyaparah",
    term: "vyāpāraḥ",
    transliteration: "vyāpāraḥ",
    definition:
      "Activity; effort; application, operation.",
  },
  {
    id: "vyapi",
    term: "vyāpi",
    transliteration: "vyāpi",
    definition:
      "All pervading; invariably concomitant, filling.",
  },
  {
    id: "vyapta",
    term: "vyāpta",
    transliteration: "vyāpta",
    definition:
      "Pervaded.",
  },
  {
    id: "vyaptih",
    term: "vyāptih",
    transliteration: "vyāptih",
    definition:
      "Pervasiveness; invariable co-presence.",
  },
  {
    id: "vyaptijnanam",
    term: "vyāptijñānam",
    transliteration: "vyāptijñānam",
    definition:
      "Knowledge of invariable concomittance.",
    aliases: ["vyaptidnyanam"],
  },
  {
    id: "vyapya",
    term: "vyāpya",
    transliteration: "vyāpya",
    definition:
      "To be pervaded. vyāpyam The sign or middle term of a logical syllogism.",
  },
  {
    id: "vyartha",
    term: "vyartha",
    transliteration: "vyartha",
    definition:
      "Useless; meaningless; unprofitable.",
  },
  {
    id: "vyasah",
    term: "vyāsaḥ",
    transliteration: "vyāsaḥ",
    definition:
      "Venerated sage; arranger of Vedas, author of Mahābhārata and other texts.",
  },
  {
    id: "vyastih",
    term: "vyaṣṭih",
    transliteration: "vyaṣṭih",
    definition:
      "Individual; local.",
  },
  {
    id: "vyatirekah",
    term: "vyatirekaḥ",
    transliteration: "vyatirekaḥ",
    definition:
      "Distinction; difference; logical discontinuance.",
  },
  {
    id: "vyatiriktah",
    term: "vyatiriktaḥ",
    transliteration: "vyatiriktaḥ",
    definition:
      "Distinct; separate.",
  },
  {
    id: "vyavaharah",
    term: "vyavahāraḥ",
    transliteration: "vyavahāraḥ",
    definition:
      "Experience; transaction; behavior; conduct; recognition.",
  },
  {
    id: "vyavaharika",
    term: "vyavahārika",
    transliteration: "vyavahārika",
    definition:
      "Empirically real; practical.",
  },
  {
    id: "vyavahita",
    term: "vyavahita",
    transliteration: "vyavahita",
    definition:
      "Connected with a word that is apart; separated by anything; concealed.",
  },
  {
    id: "vyavartaka",
    term: "vyāvartaka",
    transliteration: "vyāvartaka",
    definition:
      "Excluding, negating; separating; surrounding.",
  },
  {
    id: "vyavasayah",
    term: "vyavasāyaḥ",
    transliteration: "vyavasāyaḥ",
    definition:
      "Effort, exertion, energy; resolve, resolution.",
  },
  {
    id: "vyavastha",
    term: "vyavasthā",
    transliteration: "vyavasthā",
    definition:
      "State; condition; firm basis; relative position; rule; law.",
  },
  {
    id: "vyavrtta",
    term: "vyāvṛtta",
    transliteration: "vyāvṛtta",
    definition:
      "Not being found in; absent; separated; excluded.",
  },
  {
    id: "vyavrttih",
    term: "vyāvṛttih",
    transliteration: "vyāvṛttih",
    definition:
      "Negation; exclusion; covering.",
  },
  {
    id: "vyoman",
    term: "vyoman",
    transliteration: "vyoman",
    definition:
      "Space, sky; atmosphere.",
  },
  {
    id: "vyutpattih",
    term: "vyutpattih",
    transliteration: "vyutpattih",
    definition:
      "Etymology, derivation, origin; learning.",
  },
  {
    id: "yadi",
    term: "yadi",
    transliteration: "yadi",
    definition:
      "ind. If; whether.",
  },
  {
    id: "yadrccha",
    term: "yadṛcchā",
    transliteration: "yadṛcchā",
    definition:
      "Chance; independence.",
  },
  {
    id: "yadrcchika",
    term: "yādṛcchika",
    transliteration: "yādṛcchika",
    definition:
      "Spontaneous, voluntary; accidental; acting as one likes.",
  },
  {
    id: "yadyapi",
    term: "yadyapi",
    transliteration: "yadyapi",
    definition:
      "Though, although.",
  },
  {
    id: "yagam",
    term: "yāgam",
    transliteration: "yāgam",
    definition:
      "Vedic sacrifice or ritual; offering.",
  },
  {
    id: "yajamanah",
    term: "yajamānaḥ",
    transliteration: "yajamānaḥ",
    definition:
      "Sacrificer; sponsor of a ritual.",
  },
  {
    id: "yajnah",
    term: "yajñaḥ",
    transliteration: "yajñaḥ",
    definition:
      "Religious offering or ritual; sacrifice; devotional act.",
    aliases: ["yadnyah"],
  },
  {
    id: "yajnopavitam",
    term: "yajñopavītam",
    transliteration: "yajñopavītam",
    definition:
      "The sacred thread worn by the first three classes.",
    aliases: ["yadnyopavitam"],
  },
  {
    id: "yajus",
    term: "yajuṣ",
    transliteration: "yajuṣ",
    definition:
      "A sacrificial prayer or formula, the body of sacred mantras in prose uttered at sacrifices.",
  },
  {
    id: "yaksah",
    term: "yakṣaḥ",
    transliteration: "yakṣaḥ",
    definition:
      "A class of demi-gods; spirits.",
  },
  {
    id: "yamah",
    term: "yamaḥ",
    transliteration: "yamaḥ",
    definition:
      "A certain discipline which is restrictive - one of the eight aṅgas of Patañjali's Yoga.",
  },
  {
    id: "yasas",
    term: "yaśas",
    transliteration: "yaśas",
    definition:
      "Fame; reputation; renown; glory; the one of absolute fame (i.e. brahman).",
    relatedTerms: ["brahman"],
  },
  {
    id: "yatharthah",
    term: "yathārthah",
    transliteration: "yathārthah",
    definition:
      "ind. Truly; factually.",
  },
  {
    id: "yathatmyam",
    term: "yathātmyam",
    transliteration: "yathātmyam",
    definition:
      "The nature, svarūpam.",
    relatedTerms: ["svarūpam"],
  },
  {
    id: "yathavat",
    term: "yathāvat",
    transliteration: "yathāvat",
    definition:
      "ind. According to rule; properly; duly.",
  },
  {
    id: "yatih",
    term: "yatih",
    transliteration: "yatih",
    definition:
      "Saṃnyāsī; the one of proper and adequate effort; restraint; guidance.",
  },
  {
    id: "yatnah",
    term: "yatnah",
    transliteration: "yatnah",
    definition:
      "Effort; attempt.",
  },
  {
    id: "yatra",
    term: "yātrā",
    transliteration: "yātrā",
    definition:
      "Pilgrimage; journey; motion; procession.",
  },
  {
    id: "yavah",
    term: "yavaḥ",
    transliteration: "yavaḥ",
    definition:
      "Barley.",
  },
  {
    id: "yogah",
    term: "yogaḥ",
    transliteration: "yogaḥ",
    definition:
      "A means for accomplishing something; conformity with the order; connection.",
    relatedTerms: ["karma", "jñānam", "bhaktiḥ", "mokṣa", "samādhiḥ"],
    tags: ["union", "practice", "discipline", "path", "connection", "means"],
  },
  {
    id: "yogya",
    term: "yogya",
    transliteration: "yogya",
    definition:
      "Proper; suitable; qualified; capable.",
    relatedTerms: ["yogyatā"],
  },
  {
    id: "yogyata",
    term: "yogyatā",
    transliteration: "yogyatā",
    definition:
      "Fitness; compatibility; capability; appropriate connection between words.",
    relatedTerms: ["yogya"],
  },
  {
    id: "yojanam",
    term: "yojanam",
    transliteration: "yojanam",
    definition:
      "Connecting; applying; preparation.",
  },
  {
    id: "yonih",
    term: "yonih",
    transliteration: "yonih",
    definition:
      "Womb; any place of birth or origin; generating cause.",
  },
  {
    id: "yugam",
    term: "yugam",
    transliteration: "yugam",
    definition:
      "An age of the world; yoke; a pair.",
  },
  {
    id: "yugapad",
    term: "yugapad",
    transliteration: "yugapad",
    definition:
      "Simultaneously; all at once.",
  },
  {
    id: "yukta",
    term: "yukta",
    transliteration: "yukta",
    definition:
      "Endowed with; united with; engaged in.",
  },
  {
    id: "yuktih",
    term: "yuktih",
    transliteration: "yuktih",
    definition:
      "Reasoning; logic.",
  },
  {
    id: "yupah",
    term: "yūpaḥ",
    transliteration: "yūpaḥ",
    definition:
      "A sacrificial post made of bamboo or Kadira wood.",
  },
  {
    id: "yusmad",
    term: "yuṣmad",
    transliteration: "yuṣmad",
    definition:
      "The base of the second personal pronoun- tvam yuṣtam yūyam; you.",
  },
  {
    id: "yuta",
    term: "yuta",
    transliteration: "yuta",
    definition:
      "United, joined.",
  },
];

export const glossaryById = new Map<string, GlossaryEntry>(
  glossary.map((e) => [e.id, e])
);
