/* Exact destinations in the imported source PDFs. */
const LESSON_TEXTBOOK_LINKS = {
  "foundation-3": [
    {
      "book": "cellbio",
      "page": 236,
      "title": "Plasma Membrane"
    }
  ],
  "foundation-5": [
    {
      "book": "cardiovascular",
      "page": 33,
      "title": "Heart Failure"
    },
    {
      "book": "pulmonary-physiology",
      "page": 87,
      "title": "Gas Transport"
    }
  ],
  "foundation-6": [
    {
      "book": "pulmonary-physiology",
      "page": 43,
      "title": "Fundamentals of Gas Exchange"
    }
  ],
  "foundation-7": [
    {
      "book": "cellbio",
      "page": 39,
      "title": "Fed and Fasted State"
    }
  ],
  "foundation-9": [
    {
      "book": "neuroscience",
      "page": 21,
      "title": "Neurotransmitters — ACh, glutamate, GABA, and glycine"
    }
  ],
  "foundation-10": [
    {
      "book": "micro-immunology",
      "page": 15,
      "title": "Host Defenses, Immunodeficiencies, and Autoimmune Disorders"
    }
  ],
  "anatomy-0": [
    {
      "book": "cellbio",
      "page": 271,
      "title": "Extracellular Matrix"
    }
  ],
  "anatomy-5": [
    {
      "book": "cellbio",
      "page": 194,
      "title": "Human Genetics"
    }
  ],
  "physiology-0": [
    {
      "book": "cellbio",
      "page": 236,
      "title": "Plasma Membrane"
    }
  ],
  "physiology-1": [
    {
      "book": "neuroscience",
      "page": 21,
      "title": "Neurotransmitters — ACh, glutamate, GABA, and glycine"
    }
  ],
  "physiology-2": [
    {
      "book": "cardiovascular",
      "page": 11,
      "title": "Arrhythmias"
    },
    {
      "book": "pulmonary-physiology",
      "page": 87,
      "title": "Gas Transport"
    }
  ],
  "physiology-3": [
    {
      "book": "pulmonary-physiology",
      "page": 16,
      "title": "Mechanics of the Lungs"
    },
    {
      "book": "pulmonary-physiology",
      "page": 43,
      "title": "Fundamentals of Gas Exchange"
    }
  ],
  "physiology-4": [
    {
      "book": "pulmonary-physiology",
      "page": 62,
      "title": "Arterial PCO2 and pH"
    },
    {
      "book": "pulmonary-physiology",
      "page": 64,
      "title": "Alkalosis and Acidosis"
    }
  ],
  "physiology-5": [
    {
      "book": "health-alterations",
      "page": 835,
      "title": "Chapter 7 Endocrine Alterations"
    }
  ],
  "biochemistry-0": [
    {
      "book": "cellbio",
      "page": 12,
      "title": "Biochemistry Basics"
    },
    {
      "book": "cellbio",
      "page": 16,
      "title": "1.2 Enzyme Kinetics"
    }
  ],
  "biochemistry-1": [
    {
      "book": "cellbio",
      "page": 49,
      "title": "4.1 Glycolysis and the Pyruvate Dehydrogenase Complex (PDC)"
    },
    {
      "book": "cellbio",
      "page": 73,
      "title": "5.1 Gluconeogenesis and Glycogenolysis"
    }
  ],
  "biochemistry-2": [
    {
      "book": "cellbio",
      "page": 66,
      "title": "4.4 Fatty Acid Synthesis"
    },
    {
      "book": "cellbio",
      "page": 94,
      "title": "Lipoprotein Metabolism and Cholesterol Synthesis"
    },
    {
      "book": "cellbio",
      "page": 102,
      "title": "6.2 Lipid Transport"
    }
  ],
  "biochemistry-3": [
    {
      "book": "cellbio",
      "page": 86,
      "title": "5.3 Nitrogen Metabolism and the Urea Cycle"
    },
    {
      "book": "cellbio",
      "page": 128,
      "title": "8.1 Amino Acid Metabolism and Specialized Products"
    }
  ],
  "biochemistry-4": [
    {
      "book": "cellbio",
      "page": 29,
      "title": "2.2 Vitamins as Coenzymes"
    }
  ],
  "biochemistry-5": [
    {
      "book": "cellbio",
      "page": 147,
      "title": "Genes, Genomes, and DNA"
    },
    {
      "book": "cellbio",
      "page": 161,
      "title": "Transcription and Translation"
    },
    {
      "book": "cellbio",
      "page": 22,
      "title": "Basic Laboratory Measurements"
    }
  ],
  "pathology-0": [
    {
      "book": "cellbio",
      "page": 231,
      "title": "15.2 Apoptosis"
    }
  ],
  "pathology-2": [
    {
      "book": "micro-immunology",
      "page": 15,
      "title": "Host Defenses, Immunodeficiencies, and Autoimmune Disorders"
    }
  ],
  "pathology-3": [
    {
      "book": "health-alterations",
      "page": 389,
      "title": "Chapter 4 Malignancy and Autoimmune Alterations"
    },
    {
      "book": "pulmonary-pathology",
      "page": 70,
      "title": "Lung Cancer"
    }
  ],
  "pathology-4": [
    {
      "book": "health-alterations",
      "page": 249,
      "title": "Chapter 3 Hematological Alterations"
    }
  ],
  "pathology-5": [
    {
      "book": "pulmonary-pathology",
      "page": 49,
      "title": "The Restrictive Lung Diseases"
    },
    {
      "book": "cardiovascular",
      "page": 69,
      "title": "Ischemic Heart Disease"
    }
  ],
  "pharmacology-0": [
    {
      "book": "pharmacology",
      "page": 29,
      "title": "Pharmacokinetics & Pharmacodynamics"
    }
  ],
  "pharmacology-1": [
    {
      "book": "pharmacology",
      "page": 295,
      "title": "Autonomic Nervous System"
    }
  ],
  "pharmacology-2": [
    {
      "book": "pharmacology",
      "page": 441,
      "title": "Cardiovascular & Renal Systems"
    }
  ],
  "pharmacology-3": [
    {
      "book": "pharmacology",
      "page": 683,
      "title": "Central Nervous System"
    },
    {
      "book": "pharmacology",
      "page": 879,
      "title": "Analgesics & Musculoskeletal System"
    }
  ],
  "pharmacology-4": [
    {
      "book": "pharmacology",
      "page": 173,
      "title": "Antimicrobials"
    }
  ],
  "pharmacology-5": [
    {
      "book": "pharmacology",
      "page": 769,
      "title": "Endocrine System"
    },
    {
      "book": "pharmacology",
      "page": 587,
      "title": "Gastrointestinal System"
    },
    {
      "book": "pharmacology",
      "page": 369,
      "title": "Respiratory System"
    }
  ],
  "microbiology-0": [
    {
      "book": "micro-immunology",
      "page": 105,
      "title": "Basic Microbiology"
    }
  ],
  "microbiology-1": [
    {
      "book": "micro-immunology",
      "page": 15,
      "title": "Host Defenses, Immunodeficiencies, and Autoimmune Disorders"
    }
  ],
  "microbiology-2": [
    {
      "book": "micro-immunology",
      "page": 525,
      "title": "Appendix B: Quick References—Medically Important Bacteria"
    }
  ],
  "microbiology-3": [
    {
      "book": "micro-immunology",
      "page": 321,
      "title": "Systemic Infections of the Respiratory Tract"
    }
  ],
  "microbiology-4": [
    {
      "book": "micro-immunology",
      "page": 263,
      "title": "Systemic Infections of the Oral Cavity and GI"
    }
  ],
  "microbiology-5": [
    {
      "book": "pharmacology",
      "page": 173,
      "title": "Antimicrobials"
    },
    {
      "book": "micro-immunology",
      "page": 487,
      "title": "Foundations of Disease Management"
    }
  ],
  "medicine-1": [
    {
      "book": "cardiovascular",
      "page": 33,
      "title": "Heart Failure"
    },
    {
      "book": "cardiovascular",
      "page": 69,
      "title": "Ischemic Heart Disease"
    }
  ],
  "medicine-2": [
    {
      "book": "pulmonary-pathology",
      "page": 11,
      "title": "The Obstructive Lung Diseases"
    },
    {
      "book": "pulmonary-pathology",
      "page": 40,
      "title": "Lower Airway Infections"
    },
    {
      "book": "pulmonary-pathology",
      "page": 74,
      "title": "Pulmonary Embolism"
    }
  ],
  "medicine-3": [
    {
      "book": "health-alterations",
      "page": 1453,
      "title": "Chapter 11 Gastrointestinal System Alterations"
    },
    {
      "book": "health-alterations",
      "page": 969,
      "title": "Chapter 8 Renal and Urinary System Alterations"
    }
  ],
  "medicine-4": [
    {
      "book": "health-alterations",
      "page": 835,
      "title": "Chapter 7 Endocrine Alterations"
    },
    {
      "book": "health-alterations",
      "page": 249,
      "title": "Chapter 3 Hematological Alterations"
    }
  ],
  "medicine-5": [
    {
      "book": "health-alterations",
      "page": 1111,
      "title": "Chapter 9 Nervous System Alterations"
    },
    {
      "book": "micro-immunology",
      "page": 451,
      "title": "Systemic Infections of the Nervous System"
    }
  ],
  "surgery-0": [
    {
      "book": "health-alterations",
      "page": 149,
      "title": "Chapter 2 Perioperative Care"
    }
  ],
  "surgery-2": [
    {
      "book": "health-alterations",
      "page": 1453,
      "title": "Chapter 11 Gastrointestinal System Alterations"
    }
  ],
  "surgery-4": [
    {
      "book": "health-alterations",
      "page": 389,
      "title": "Chapter 4 Malignancy and Autoimmune Alterations"
    }
  ],
  "surgery-5": [
    {
      "book": "health-alterations",
      "page": 969,
      "title": "Chapter 8 Renal and Urinary System Alterations"
    }
  ],
  "pediatrics-3": [
    {
      "book": "micro-immunology",
      "page": 321,
      "title": "Systemic Infections of the Respiratory Tract"
    }
  ],
  "pediatrics-5": [
    {
      "book": "cellbio",
      "page": 194,
      "title": "Human Genetics"
    },
    {
      "book": "mental-health",
      "page": 873,
      "title": "Chapter 12 Childhood and Adolescence Disorders"
    }
  ],
  "community-3": [
    {
      "book": "mental-health",
      "page": 1289,
      "title": "Chapter 16 Community Assessment"
    }
  ],
  "community-5": [
    {
      "book": "mental-health",
      "page": 1393,
      "title": "Chapter 18 Environmental Health and Emergency Preparedness"
    }
  ],
  "psychiatry-0": [
    {
      "book": "mental-health",
      "page": 33,
      "title": "Chapter 1 Foundational Mental Health Concepts"
    }
  ],
  "psychiatry-1": [
    {
      "book": "mental-health",
      "page": 451,
      "title": "Chapter 7 Depressive Disorders"
    },
    {
      "book": "mental-health",
      "page": 553,
      "title": "Chapter 8 Bipolar Disorders"
    }
  ],
  "psychiatry-2": [
    {
      "book": "mental-health",
      "page": 781,
      "title": "Chapter 11 Thought Disorders"
    }
  ],
  "psychiatry-3": [
    {
      "book": "mental-health",
      "page": 627,
      "title": "Chapter 9 Anxiety Disorders"
    }
  ],
  "psychiatry-4": [
    {
      "book": "mental-health",
      "page": 1057,
      "title": "Chapter 14 Substance Use Disorders"
    }
  ],
  "psychiatry-5": [
    {
      "book": "mental-health",
      "page": 395,
      "title": "Chapter 6 Psychotropic Medications"
    }
  ],
  "anesthesia-1": [
    {
      "book": "pharmacology",
      "page": 683,
      "title": "Central Nervous System"
    }
  ],
  "anesthesia-2": [
    {
      "book": "pulmonary-physiology",
      "page": 97,
      "title": "Control of Breathing"
    }
  ],
  "orthopedics-0": [
    {
      "book": "health-alterations",
      "page": 1289,
      "title": "Chapter 10 Musculoskeletal System Alterations"
    }
  ],
  "dermatology-0": [
    {
      "book": "micro-immunology",
      "page": 221,
      "title": "Systemic Infections of the Skin"
    }
  ]
};
