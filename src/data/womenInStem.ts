export interface WomanInStem {
  name: string;
  subject: string;
  birthYear: number;
  deathYear?: number;
  location: [number, number];
  description: string;
  resourceLink: string;
}

export const womenInStem: WomanInStem[] = [
  {
    name: 'Hypatia of Alexandria',
    subject: 'Mathematics, Astronomy',
    birthYear: 370,
    deathYear: 415,
    location: [31.2001, 29.9187],
    description:
      'A renowned philosopher and mathematician in ancient Alexandria. Hypatia faced significant adversities, including societal resistance to women in academia, ultimately leading to her tragic murder by a mob.',
    resourceLink: 'https://en.wikipedia.org/wiki/Hypatia',
  },
  {
    name: 'Aglaonike',
    subject: 'Astronomy',
    birthYear: -200,
    deathYear: -100,
    location: [39.0742, 21.8243],
    description:
      'Known as the first female astronomer in ancient Greece, Aglaonike was reputed to have predicted lunar eclipses, though many believed she was a sorceress.',
    resourceLink: 'https://en.wikipedia.org/wiki/Aglaonice',
  },
  {
    name: 'Enheduanna',
    subject: 'Astronomy, Mathematics',
    birthYear: -2300,
    deathYear: -2200,
    location: [30.525, 47.773],
    description:
      'An Akkadian high priestess of Ur, Enheduanna is one of the earliest known authors and astronomers, combining religious and scientific work in ancient Mesopotamia.',
    resourceLink: 'https://en.wikipedia.org/wiki/Enheduanna',
  },
  {
    name: 'Tapputi',
    subject: 'Chemistry',
    birthYear: -1200,
    deathYear: -1100,
    location: [32.927, 35.082],
    description:
      'Often considered the world’s first chemist, Tapputi was a perfume maker in Babylon. Her contributions laid the groundwork for modern chemistry and cosmetics.',
    resourceLink: 'https://en.wikipedia.org/wiki/Tapputi',
  },
  {
    name: 'Theano of Croton',
    subject: 'Mathematics',
    birthYear: -550,
    deathYear: -500,
    location: [39.083, 17.117],
    description:
      'A Pythagorean philosopher and mathematician, Theano was known for her work on the Golden Mean. Her life was intertwined with philosophical and mathematical pursuits.',
    resourceLink: 'https://en.wikipedia.org/wiki/Theano_(Pythagorean)',
  },
  {
    name: 'Agnodice',
    subject: 'Medicine',
    birthYear: -400,
    deathYear: -300,
    location: [37.9838, 23.7275],
    description:
      'One of the first female physicians in ancient Athens, Agnodice disguised herself as a man to practice medicine, challenging the gender norms of her time.',
    resourceLink: 'https://en.wikipedia.org/wiki/Agnodice',
  },
  {
    name: 'Cleopatra the Alchemist',
    subject: 'Alchemy',
    birthYear: 300,
    deathYear: 400,
    location: [30.0444, 31.2357],
    description:
      'An alchemist in ancient Egypt, Cleopatra is credited with inventing the alembic, a device used in distillation. Her work influenced later Islamic and medieval European alchemists.',
    resourceLink: 'https://en.wikipedia.org/wiki/Cleopatra_the_Alchemist',
  },
  {
    name: 'Mariam al-Astrulabi',
    subject: 'Astronomy',
    birthYear: 950,
    deathYear: 1000,
    location: [36.2021, 37.1343],
    description:
      'A Syrian scientist who developed sophisticated astrolabes, Mariam al-Astrulabi contributed to advancements in astronomy and navigation during the Islamic Golden Age.',
    resourceLink: 'https://en.wikipedia.org/wiki/Mariam_al-Asturlabi',
  },
  {
    name: 'Metrodora',
    subject: 'Medicine',
    birthYear: 200,
    deathYear: 400,
    location: [37.9838, 23.7275],
    description:
      'An ancient Greek physician, Metrodora wrote extensively on gynecology and women’s health. Her work, "On the Diseases and Cures of Women," is one of the earliest medical texts by a woman.',
    resourceLink: 'https://en.wikipedia.org/wiki/Metrodora',
  },
  {
    name: 'Anna Komnene',
    subject: 'Medicine, History',
    birthYear: 1083,
    deathYear: 1153,
    location: [41.0082, 28.9784],
    description:
      'A Byzantine princess and historian, Anna Komnene wrote the Alexiad, a valuable historical document. She also had a keen interest in medicine and the sciences.',
    resourceLink: 'https://en.wikipedia.org/wiki/Anna_Komnene',
  },
  {
    name: 'Trota of Salerno',
    subject: 'Medicine',
    birthYear: 1100,
    deathYear: 1160,
    location: [40.6824, 14.7681],
    description:
      'A physician and medical writer, Trota of Salerno was part of the medical school of Salerno. Her work focused on women’s health and she authored "The Trotula," a medical compendium.',
    resourceLink: 'https://en.wikipedia.org/wiki/Trota_of_Salerno',
  },
  {
    name: 'Hildegard of Bingen',
    subject: 'Medicine, Botany, Music',
    birthYear: 1098,
    deathYear: 1179,
    location: [49.9884, 7.9123],
    description:
      'A German Benedictine abbess, Hildegard was a polymath who wrote about medicine, botany, and composed music. Her work "Physica" is a comprehensive study of natural sciences.',
    resourceLink: 'https://en.wikipedia.org/wiki/Hildegard_of_Bingen',
  },
  {
    name: 'Tullia d’Aragona',
    subject: 'Mathematics, Literature',
    birthYear: 1510,
    deathYear: 1556,
    location: [41.9028, 12.4964],
    description:
      'An Italian poet and philosopher, Tullia wrote on various subjects including mathematics and literature, challenging the male-dominated intellectual circles of her time.',
    resourceLink: 'https://en.wikipedia.org/wiki/Tullia_d%27Aragona',
  },
  {
    name: 'Maria Sibylla Merian',
    subject: 'Entomology',
    birthYear: 1647,
    deathYear: 1717,
    location: [52.3676, 4.9041],
    description:
      'A pioneering entomologist and scientific illustrator, Maria documented the metamorphosis of butterflies, contributing significantly to entomology.',
    resourceLink: 'https://en.wikipedia.org/wiki/Maria_Sibylla_Merian',
  },
  {
    name: 'Wang Zhenyi',
    subject: 'Astronomy, Mathematics',
    birthYear: 1768,
    deathYear: 1797,
    location: [31.2304, 121.4737],
    description:
      'A Chinese astronomer and mathematician, Wang Zhenyi broke gender barriers by studying and writing about eclipses and the movement of celestial bodies.',
    resourceLink: 'https://en.wikipedia.org/wiki/Wang_Zhenyi',
  },
  {
    name: 'Caroline Herschel',
    subject: 'Astronomy',
    birthYear: 1750,
    deathYear: 1848,
    location: [51.1657, 10.4515],
    description:
      'A German-British astronomer, Caroline discovered several comets and was the first woman to receive a salary as a scientist. She faced many adversities, including poor health and societal constraints.',
    resourceLink: 'https://en.wikipedia.org/wiki/Caroline_Herschel',
  },
  {
    name: 'Mary Anning',
    subject: 'Paleontology',
    birthYear: 1799,
    deathYear: 1847,
    location: [50.726, -2.935],
    description:
      'An English fossil collector and paleontologist, Mary Anning made significant contributions to the understanding of prehistoric life, despite being excluded from the scientific community due to her gender.',
    resourceLink: 'https://en.wikipedia.org/wiki/Mary_Anning',
  },
  {
    name: 'Ada Lovelace',
    subject: 'Mathematics, Computing',
    birthYear: 1815,
    deathYear: 1852,
    location: [51.5074, -0.1278],
    description:
      'An English mathematician, Ada is considered the first computer programmer. She wrote the first algorithm intended for a machine, long before the invention of computers.',
    resourceLink: 'https://en.wikipedia.org/wiki/Ada_Lovelace',
  },
  {
    name: 'Maria Mitchell',
    subject: 'Astronomy',
    birthYear: 1818,
    deathYear: 1889,
    location: [41.2835, -70.0995],
    description:
      'An American astronomer, Maria was the first woman to work as a professional astronomer in the United States. She discovered a comet, later named "Miss Mitchell’s Comet."',
    resourceLink: 'https://en.wikipedia.org/wiki/Maria_Mitchell',
  },
  {
    name: 'Elizabeth Blackwell',
    subject: 'Medicine',
    birthYear: 1821,
    deathYear: 1910,
    location: [40.7128, -74.006],
    description:
      'The first woman to receive a medical degree in the United States, Elizabeth faced tremendous opposition but went on to open the New York Infirmary for Women and Children.',
    resourceLink: 'https://en.wikipedia.org/wiki/Elizabeth_Blackwell',
  },
  {
    name: 'Sophie Germain',
    subject: 'Mathematics',
    birthYear: 1776,
    deathYear: 1831,
    location: [48.8566, 2.3522],
    description:
      'A French mathematician, Sophie made significant contributions to number theory and elasticity theory, often working under a pseudonym to be taken seriously.',
    resourceLink: 'https://en.wikipedia.org/wiki/Sophie_Germain',
  },
  {
    name: 'Mary Somerville',
    subject: 'Mathematics, Astronomy',
    birthYear: 1780,
    deathYear: 1872,
    location: [56.4907, -4.2026],
    description:
      'A Scottish scientist, Mary Somerville’s work in mathematics and astronomy led to her being one of the first women to be a member of the Royal Astronomical Society.',
    resourceLink: 'https://en.wikipedia.org/wiki/Mary_Somerville',
  },
  {
    name: 'Florence Nightingale',
    subject: 'Statistics, Nursing',
    birthYear: 1820,
    deathYear: 1910,
    location: [51.5074, -0.1278],
    description:
      'Known as the founder of modern nursing, Florence also made significant contributions to statistics, using data visualization to advocate for sanitary reform.',
    resourceLink: 'https://en.wikipedia.org/wiki/Florence_Nightingale',
  },
  {
    name: 'Anandi Gopal Joshi',
    subject: 'Medicine',
    birthYear: 1865,
    deathYear: 1887,
    location: [19.076, 72.8777],
    description:
      'One of the first Indian women to obtain a degree in Western medicine, Anandi Gopal Joshi faced immense societal pressure but persevered to become a physician.',
    resourceLink: 'https://en.wikipedia.org/wiki/Anandi_Gopal_Joshi',
  },
  {
    name: 'Ellen Swallow Richards',
    subject: 'Chemistry, Home Economics',
    birthYear: 1842,
    deathYear: 1911,
    location: [42.3601, -71.0589],
    description:
      'An American industrial and environmental chemist, Ellen was the first woman admitted to MIT and pioneered the field of sanitary engineering.',
    resourceLink: 'https://en.wikipedia.org/wiki/Ellen_Swallow_Richards',
  },
  {
    name: 'Alice Ball',
    subject: 'Chemistry',
    birthYear: 1892,
    deathYear: 1916,
    location: [21.3069, -157.8583],
    description:
      'An American chemist who developed the Ball Method, the most effective treatment for leprosy during her time. Alice overcame racial and gender barriers to make her mark in science.',
    resourceLink: 'https://en.wikipedia.org/wiki/Alice_Ball',
  },
  {
    name: 'Hertha Ayrton',
    subject: 'Mathematics, Physics',
    birthYear: 1854,
    deathYear: 1923,
    location: [51.5074, -0.1278],
    description:
      'An English mathematician and engineer, Hertha made significant contributions to the understanding of electric arcs and ripple marks in sand and water.',
    resourceLink: 'https://en.wikipedia.org/wiki/Hertha_Ayrton',
  },
  {
    name: 'Sofia Kovalevskaya',
    subject: 'Mathematics',
    birthYear: 1850,
    deathYear: 1891,
    location: [59.9343, 30.3351],
    description:
      'A Russian mathematician, Sofia was the first woman to obtain a doctorate in mathematics. She made notable contributions to analysis, partial differential equations, and mechanics.',
    resourceLink: 'https://en.wikipedia.org/wiki/Sofia_Kovalevskaya',
  },
  {
    name: 'Mary Putnam Jacobi',
    subject: 'Medicine',
    birthYear: 1842,
    deathYear: 1906,
    location: [40.7128, -74.006],
    description:
      'An American physician and writer, Mary was a staunch advocate for women’s medical education and conducted groundbreaking research on women’s health.',
    resourceLink: 'https://en.wikipedia.org/wiki/Mary_Putnam_Jacobi',
  },
  {
    name: 'Jocelyn Bell Burnell',
    subject: 'Physics',
    birthYear: 1943,
    deathYear: 1943,
    location: [54.5973, -5.9301],
    description:
      'An Irish astrophysicist who discovered the first radio pulsars. Jocelyn’s work was crucial to the field of astrophysics, though the Nobel Prize for the discovery went to her male colleagues.',
    resourceLink: 'https://en.wikipedia.org/wiki/Jocelyn_Bell_Burnell',
  },
  {
    name: 'Emmy Noether',
    subject: 'Mathematics',
    birthYear: 1882,
    deathYear: 1935,
    location: [49.4875, 8.466],
    description:
      'A German mathematician known for Noether’s Theorem, which is fundamental to theoretical physics. Emmy faced significant gender discrimination but made profound contributions to algebra and physics.',
    resourceLink: 'https://en.wikipedia.org/wiki/Emmy_Noether',
  },
  {
    name: 'Dorothy Vaughan',
    subject: 'Mathematics, Computer Science',
    birthYear: 1910,
    deathYear: 2008,
    location: [36.7783, -76.2875],
    description:
      'An American mathematician and human computer at NASA, Dorothy was a leader in the early years of the space program and an expert in FORTRAN programming.',
    resourceLink: 'https://en.wikipedia.org/wiki/Dorothy_Vaughan',
  },
  {
    name: 'Marie Curie',
    subject: 'Physics, Chemistry',
    birthYear: 1867,
    deathYear: 1934,
    location: [50.0647, 19.945],
    description:
      'A Polish-French physicist and chemist, Marie Curie was the first woman to win a Nobel Prize and remains the only person to win Nobel Prizes in two different scientific fields.',
    resourceLink: 'https://en.wikipedia.org/wiki/Marie_Curie',
  },
  {
    name: 'Lise Meitner',
    subject: 'Physics',
    birthYear: 1878,
    deathYear: 1968,
    location: [52.52, 13.405],
    description:
      'An Austrian-Swedish physicist, Lise was part of the team that discovered nuclear fission. Despite her significant contributions, she was overlooked for the Nobel Prize awarded to her male colleagues.',
    resourceLink: 'https://en.wikipedia.org/wiki/Lise_Meitner',
  },
  {
    name: 'Annie Jump Cannon',
    subject: 'Astronomy',
    birthYear: 1863,
    deathYear: 1941,
    location: [39.7392, -75.5398],
    description:
      'An American astronomer who classified hundreds of thousands of stars, Annie developed the Harvard Classification Scheme which is still in use today.',
    resourceLink: 'https://en.wikipedia.org/wiki/Annie_Jump_Cannon',
  },
  {
    name: 'Rosalind Franklin',
    subject: 'Chemistry',
    birthYear: 1920,
    deathYear: 1958,
    location: [51.5074, -0.1278],
    description:
      'An English chemist whose X-ray diffraction images were critical to the discovery of the DNA double helix. Franklin’s contributions were crucial, yet she was not fully recognized during her lifetime.',
    resourceLink: 'https://en.wikipedia.org/wiki/Rosalind_Franklin',
  },
  {
    name: 'Katherine Johnson',
    subject: 'Mathematics',
    birthYear: 1918,
    deathYear: 2020,
    location: [37.2279, -80.4209],
    description:
      'An American mathematician whose calculations were critical to the success of NASA’s manned spaceflights. Katherine overcame racial and gender barriers to become a pioneering figure in the space program.',
    resourceLink: 'https://en.wikipedia.org/wiki/Katherine_Johnson',
  },
  {
    name: 'Dorothy Hodgkin',
    subject: 'Chemistry',
    birthYear: 1910,
    deathYear: 1994,
    location: [51.4545, -2.5879],
    description:
      'A British chemist who advanced the technique of X-ray crystallography. Dorothy’s work led to the discovery of the structures of penicillin and vitamin B12, earning her a Nobel Prize in Chemistry.',
    resourceLink: 'https://en.wikipedia.org/wiki/Dorothy_Hodgkin',
  },
  {
    name: 'Grace Hopper',
    subject: 'Computer Science',
    birthYear: 1906,
    deathYear: 1992,
    location: [40.7128, -74.006],
    description:
      'An American computer scientist and United States Navy rear admiral, Grace developed the first compiler for a computer programming language and was instrumental in the creation of COBOL.',
    resourceLink: 'https://en.wikipedia.org/wiki/Grace_Hopper',
  },
  {
    name: 'Rachel Carson',
    subject: 'Biology, Environmental Science',
    birthYear: 1907,
    deathYear: 1964,
    location: [39.9526, -75.1652],
    description:
      'An American marine biologist and conservationist, Rachel’s book "Silent Spring" spurred the global environmental movement. Her work highlighted the dangers of pesticides and brought environmental concerns to the public.',
    resourceLink: 'https://en.wikipedia.org/wiki/Rachel_Carson',
  },
  {
    name: 'Chien-Shiung Wu',
    subject: 'Physics',
    birthYear: 1912,
    deathYear: 1997,
    location: [30.5928, 114.3055],
    description:
      'A Chinese-American experimental physicist, Chien-Shiung Wu made significant contributions to the Manhattan Project and conducted the famous Wu experiment, which disproved the law of conservation of parity.',
    resourceLink: 'https://en.wikipedia.org/wiki/Chien-Shiung_Wu',
  },
  {
    name: 'Jocelyn Bell Burnell',
    subject: 'Astrophysics',
    birthYear: 1943,
    deathYear: 0,
    location: [54.5973, -5.9301],
    description:
      'An Irish astrophysicist who discovered the first radio pulsars. Jocelyn’s work was crucial to the field of astrophysics, though the Nobel Prize for the discovery went to her male colleagues.',
    resourceLink: 'https://en.wikipedia.org/wiki/Jocelyn_Bell_Burnell',
  },
  {
    name: 'Barbara McClintock',
    subject: 'Genetics',
    birthYear: 1902,
    deathYear: 1992,
    location: [40.7128, -74.006],
    description:
      'An American cytogeneticist, Barbara discovered "jumping genes" (transposons) in maize, revolutionizing the understanding of genetics. She faced skepticism from the scientific community but was eventually awarded a Nobel Prize.',
    resourceLink: 'https://en.wikipedia.org/wiki/Barbara_McClintock',
  },
  {
    name: 'Dorothy Crowfoot Hodgkin',
    subject: 'Chemistry',
    birthYear: 1910,
    deathYear: 1994,
    location: [51.4545, -2.5879],
    description:
      'A British chemist who advanced the technique of X-ray crystallography. Dorothy’s work led to the discovery of the structures of penicillin and vitamin B12, earning her a Nobel Prize in Chemistry.',
    resourceLink: 'https://en.wikipedia.org/wiki/Dorothy_Crowfoot_Hodgkin',
  },
  {
    name: 'Ada Yonath',
    subject: 'Chemistry',
    birthYear: 1939,
    deathYear: 0,
    location: [32.0853, 34.7818],
    description:
      'An Israeli crystallographer who pioneered the study of the structure of ribosomes. Ada’s groundbreaking work earned her the Nobel Prize in Chemistry in 2009.',
    resourceLink: 'https://en.wikipedia.org/wiki/Ada_Yonath',
  },
  {
    name: 'Irène Joliot-Curie',
    subject: 'Chemistry',
    birthYear: 1897,
    deathYear: 1956,
    location: [48.8566, 2.3522],
    description:
      'A French scientist, Irène shared the Nobel Prize in Chemistry with her husband for their discovery of artificial radioactivity. She was the daughter of Marie Curie and continued her family’s legacy in scientific research.',
    resourceLink: 'https://en.wikipedia.org/wiki/Irène_Joliot-Curie',
  },
  {
    name: 'Rosalind Franklin',
    subject: 'Chemistry',
    birthYear: 1920,
    deathYear: 1958,
    location: [51.5074, -0.1278],
    description:
      'An English chemist whose X-ray diffraction images were critical to the discovery of the DNA double helix. Franklin’s contributions were crucial, yet she was not fully recognized during her lifetime.',
    resourceLink: 'https://en.wikipedia.org/wiki/Rosalind_Franklin',
  },
  {
    name: 'Katherine Johnson',
    subject: 'Mathematics',
    birthYear: 1918,
    deathYear: 2020,
    location: [37.2279, -80.4209],
    description:
      'An American mathematician whose calculations were critical to the success of NASA’s manned spaceflights. Katherine overcame racial and gender barriers to become a pioneering figure in the space program.',
    resourceLink: 'https://en.wikipedia.org/wiki/Katherine_Johnson',
  },
  {
    name: 'Dorothy Hodgkin',
    subject: 'Chemistry',
    birthYear: 1910,
    deathYear: 1994,
    location: [51.4545, -2.5879],
    description:
      'A British chemist who advanced the technique of X-ray crystallography. Dorothy’s work led to the discovery of the structures of penicillin and vitamin B12, earning her a Nobel Prize in Chemistry.',
    resourceLink: 'https://en.wikipedia.org/wiki/Dorothy_Hodgkin',
  },
  {
    name: 'Grace Hopper',
    subject: 'Computer Science',
    birthYear: 1906,
    deathYear: 1992,
    location: [40.7128, -74.006],
    description:
      'An American computer scientist and United States Navy rear admiral, Grace developed the first compiler for a computer programming language and was instrumental in the creation of COBOL.',
    resourceLink: 'https://en.wikipedia.org/wiki/Grace_Hopper',
  },
];
