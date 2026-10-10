/* Plain-language learning glossary. Aliases match whole words, never arbitrary substrings. */
const MEDICAL_WORDS_RAW = `
Molecule|molecules~Two or more atoms joined by chemical bonds, such as a water molecule made of hydrogen and oxygen atoms.
Atom|atoms~A basic unit of a chemical element, containing a nucleus surrounded by electrons.
Oxygen~A gas needed by most body cells for efficient fuel processing; most oxygen in blood is carried on hemoglobin.
Carbon dioxide~A gas produced during fuel processing in cells and removed mainly through the lungs; it also affects blood acidity.
Nutrient|nutrients~A substance obtained from food that supports energy needs, growth, repair, or body functions.
Energy~The capacity to do work or produce change. Cells transfer chemical energy from nutrients into usable forms such as ATP.
Carbohydrate|carbohydrates~Molecules including sugars and starches; many provide fuel or have structural and signaling roles.
Digestion~Breaking food into smaller components that can be absorbed.
Circulation|circulatory~The movement of blood through the heart and vessels, delivering substances and carrying others away.
Heart|cardiac~The muscular organ pumping blood through lung and body circuits; cardiac means relating to the heart.
Lung|lungs~Organs containing airways and air sacs that exchange oxygen and carbon dioxide with blood.
Liver|hepatic~An organ processing nutrients, making many proteins and bile, and handling many chemicals; hepatic means liver-related.
Kidney|kidneys|renal~Organs filtering blood and adjusting water, salts, and wastes; renal means relating to the kidneys.
Bladder~The muscular sac that stores urine before it leaves the body.
Stomach|gastric~A muscular digestive organ that stores and mixes food with acid and enzymes; gastric means stomach-related.
Intestine|intestinal|gut~The intestine is the digestive tube beyond the stomach, involved in digestion, absorption, and waste handling; gut can refer more broadly to the digestive tract.
Brain|cerebral~The main information-processing organ of the nervous system; cerebral usually refers to its large upper part, the cerebrum.
Spinal cord~Nervous tissue within the spine carrying signals between brain and body and coordinating many reflexes.
Nerve|nerves|neural~A bundle of fibers carrying signals in the nervous system; neural means relating to nerves or nervous tissue.
Red blood cell|red blood cells|RBC|erythrocyte~A blood cell specialized to transport oxygen using hemoglobin.
White blood cell|white blood cells|WBC|leukocyte~A blood cell belonging to one of several types involved in immune defense and regulation.
Blood vessel|blood vessels|vascular~A tube carrying blood; vascular means relating to vessels.
Infection|infectious~Entry and multiplication of an infectious agent in a host; infection may or may not cause obvious symptoms.
Immunity|immune system~The body's interacting defenses and response mechanisms that recognize and respond to threats.
Vaccine|vaccines|vaccination|immunization~A vaccine prepares immune responses against a target. Vaccination means giving a vaccine; immunization describes developing protection, including through vaccination.
Pathogen~An organism or infectious agent capable of causing disease.
Barrier~A boundary that limits entry or movement, such as skin limiting entry of microbes.
Epidermis|epidermal~The outer layer of skin, forming a protective barrier.
Dermis~The supportive skin layer beneath the epidermis, containing structures such as vessels, nerves, and glands.
Bone~Living supporting tissue with a protein framework reinforced by minerals; it also stores minerals and encloses marrow.
Joint|joints~A meeting place between bones; different types allow different amounts of movement.
Tendon|ligament~A tendon commonly connects muscle to bone; a ligament commonly connects bones and supports a joint.
Inflammation suffix|-itis~The ending -itis usually indicates inflammation, as in hepatitis. It does not by itself identify the cause.
Benign enlargement|nodule~A nodule is a small lump; enlargement or a lump needs context and is not automatically malignant.
Isolated|nonspecific~Isolated means considered alone; nonspecific means a finding can occur in several conditions and does not identify one cause by itself.
Clinical correlation~Interpreting a test or image alongside symptoms, examination, timing, and other information.
Acid|buffer~An acid can release hydrogen ions in the relevant chemical setting; a buffer reduces changes in acidity when acid or base is added.
Hypo-|hyper-~Word beginnings often meaning below/too little and above/too much, respectively. The full word tells you what is low or high.
Bradycardia|tachycardia~A heart rate slower or faster than expected for the relevant context, respectively; meaning depends on age, activity, and circumstances.
Apnea|dyspnea~Apnea is a pause or absence of breathing; dyspnea is the subjective experience of breathing discomfort or breathlessness.
Tachypnea~A breathing rate faster than expected in the relevant age and clinical context.
Hypotension~Blood pressure lower than expected or adequate in the relevant context; effects depend on the person and situation.
Abscess~A localized collection of pus, often caused by infection.
Pus~Material containing immune cells, tissue debris, and sometimes microbes at an inflamed or infected site.
Hepatitis~Inflammation of the liver, with infectious and noninfectious possible causes.
Tone~Context matters: muscle tone is background muscle activity or tension; vessel tone is the degree of vessel-muscle contraction.
Lymphocyte|lymphocytes~A group of immune cells including B cells, T cells, and natural killer cells.
Ejection fraction~The percentage of a ventricle's filled blood volume ejected in one beat; it does not describe all aspects of heart function.
ECG|electrocardiogram~A recording of electrical activity related to heart activation, measured using skin electrodes.
Myocardial~Relating to the heart muscle.
Hypovolemic|cardiogenic|distributive|obstructive~Shock categories involving low circulating volume, impaired heart pumping, abnormal flow distribution, or a mechanical obstacle to circulation, respectively.
Obstructive pattern|restrictive pattern|expiratory~An obstructive breathing pattern limits airflow, especially during expiration (breathing out); a restrictive pattern involves reduced lung volumes.
Asthma|COPD~Asthma involves variable airway narrowing and inflammation. COPD means chronic obstructive pulmonary disease and usually involves persistent airflow limitation.
Tuberculosis~An infection caused by bacteria in the Mycobacterium tuberculosis group, often affecting lungs but potentially other organs.
Prehepatic|posthepatic~Before liver processing or after it in the relevant pathway; in jaundice, these categories help separate bilirubin production from drainage problems.
Prerenal|postrenal|intrinsic renal~Kidney-problem categories involving blood supply before the kidney, urine drainage after it, or disease within kidney tissue, respectively.
Creatinine|urinalysis~Creatinine is a waste product used to help assess kidney filtration; urinalysis examines urine for physical, chemical, or cellular clues.
Diabetes|beta cells|insulin resistance~Diabetes involves abnormal glucose regulation. Pancreatic beta cells make insulin; insulin resistance is reduced tissue response to insulin.
Extra-articular~Outside a joint; some joint-related immune diseases also affect other tissues.
Meningitis|encephalitis|meningeal~Meningitis mainly involves inflammation of brain/spinal-cord coverings; encephalitis involves brain tissue. Meningeal means relating to those coverings.
Sepsis|dysregulated~Sepsis is life-threatening organ dysfunction caused by a dysregulated (poorly controlled or inappropriate) response to infection.
Focal deficit~Loss or impairment of a function pointing to a particular nervous-system area or pathway.
Overdiagnosis~Detection of a condition that would not have caused harm during the person's lifetime, potentially leading to unnecessary intervention.
Asepsis|prophylaxis~Asepsis concerns preventing microbial contamination; prophylaxis means an action taken to prevent disease or a complication.
Appendicitis|perforation~Appendicitis is inflammation of the appendix; perforation is a hole through an organ or tissue wall.
Guarding|rigidity|distension~In an abdominal examination, guarding is muscle tightening, rigidity is sustained stiffness, and distension is enlargement or swelling.
Gallstone|gallstones|pancreatitis~Gallstones are solid deposits in the bile system; pancreatitis is inflammation of the pancreas.
Pallor~Unusual paleness of skin or tissue, with several possible causes.
Cell|cells~A tiny living unit. Cells have different jobs, such as carrying oxygen or contracting to produce movement.
Tissue|tissues~Cells and surrounding material organized to do related jobs, such as muscle tissue producing force.
Organ|organs~A body structure made of several tissues working together, such as the stomach.
Organ system|organ systems~Organs cooperating on a larger task, such as digestion.
Anatomy|anatomical~The study of body structures and where they are located.
Physiology|physiological~The study of how the body and its parts work.
Pathology|pathological~The study of disease and the changes it produces in cells, tissues, and organs.
Mechanism|mechanisms~The steps explaining how something happens, rather than only naming the result.
Etiology~The cause or origin of a disease.
Pathogenesis~The sequence of changes through which a disease develops.
Clinical~Relating to assessment or care of people, rather than only a laboratory process.
Diagnosis|diagnostic~Identifying a condition by putting together the history, examination, and suitable test results.
Differential|differential diagnosis~The possible explanations being considered for a person's findings.
Prognosis~The expected future course or outcome of a condition, with uncertainty.
Acute~Developing over a relatively short time. It does not always mean severe.
Chronic~Persisting over a longer time. It does not automatically mean mild or untreatable.
Syndrome~A recognizable group of findings that can sometimes have several different causes.
Symptom|symptoms~Something a person experiences, such as pain or nausea.
Sign|signs~Something that can be observed or measured, such as a measured temperature.
Investigation|investigations~A test used to answer a question about health, such as a blood test or scan.
Lesion|lesions~An area of abnormal or damaged tissue. The word alone does not say what caused it.
Systemic~Affecting the body more widely, rather than only one local area.
Congenital~Present at birth. A congenital condition is not necessarily inherited.
Inherited|hereditary~Passed through genetic information from parent to child.
Idiopathic~Of unknown cause after appropriate assessment.
Epithelium|epithelial|epithelia~Tissue that covers surfaces, lines spaces, and forms many glands.
Connective tissue|connective tissues~Tissue that supports, joins, or surrounds other structures; examples include bone, tendons, and fatty tissue.
Muscle|muscles~Tissue whose cells produce force, helping movement or changing the shape of organs.
Smooth muscle~Muscle in structures such as gut and blood-vessel walls that usually works without deliberate control.
Skeletal muscle~Muscle usually attached to bones and involved in voluntary movement.
Nervous tissue~Cells specialized for receiving, processing, and transmitting information.
Gland|glands~A structure that makes and releases substances, such as sweat or hormones.
Fascia|fascial~Sheets or bands of connective tissue that surround, support, or separate structures.
Lumen~The inner space of a tube or hollow organ.
Mucosa|mucosal~The moist lining of passages such as the mouth, gut, and airways.
Anterior~Toward the front of the body in standard anatomical position.
Posterior~Toward the back of the body in standard anatomical position.
Superior~Above or closer to the head in standard anatomical position.
Inferior~Below or closer to the feet in standard anatomical position.
Medial~Toward the body's middle line.
Lateral~Away from the body's middle line.
Proximal~Nearer a limb's attachment or the origin of a structure.
Distal~Farther from a limb's attachment or the origin of a structure.
Sagittal~An imaginary section dividing left and right portions.
Transverse~An imaginary section dividing upper and lower portions.
Coronal~An imaginary section dividing front and back portions.
Thorax|thoracic~The chest region, containing structures such as the heart and lungs.
Abdomen|abdominal~The region between the chest and pelvis containing many digestive organs.
Pelvis|pelvic~The lower trunk region and its bony framework, supporting structures such as the bladder and reproductive organs.
Peripheral nerve|peripheral nerves~A bundle of nerve fibers outside the brain and spinal cord carrying signals to or from the body.
Brachial plexus|plexus~A plexus is a network of crossing nerves or vessels. The brachial plexus supplies the upper limb.
C5–T1|C5-T1~Labels for spinal nerve levels contributing to the brachial plexus: fifth cervical through first thoracic.
Radial nerve~A major arm nerve supplying many muscles that straighten the elbow, wrist, or fingers and some skin sensation.
Median nerve~A major arm nerve supplying many forearm bending muscles, some thumb muscles, and part of hand sensation.
Ulnar nerve~A major arm nerve supplying many small hand muscles and sensation toward the little-finger side.
Flexor|flexors|flexion~Flexion usually bends a joint; a flexor is a muscle producing that movement.
Extension|extend~Straightening a joint or increasing the angle between body parts, depending on the joint.
Thenar~Relating to the muscular mound at the base of the thumb.
Intrinsic~Located within the structure being described; intrinsic hand muscles have their main attachments in the hand.
Sensory|sensation~Relating to information such as touch, pain, temperature, or position.
Motor~Relating to signals or functions that produce movement.
Femoral nerve~A major nerve of the front of the thigh, including supply to the quadriceps.
Quadriceps~A group of four muscles at the front of the thigh that straightens the knee.
Sciatic nerve~A large nerve passing through the back of the thigh before dividing into major branches.
Tibial|common fibular~The tibial and common fibular nerves are major branches of the sciatic nerve supplying different leg and foot regions.
Foot drop|wrist drop~Difficulty lifting the front of the foot or extending the wrist, respectively; these are movement findings with several possible causes.
Abductor|abductors|abduction~Abduction moves a part away from a reference middle line; hip abductors help keep the pelvis level.
Superior gluteal nerve~A nerve supplying important muscles that move the thigh sideways and stabilize the pelvis.
Gait|locomotion~Gait is a walking pattern; locomotion means moving from place to place.
Portal vein~The vein carrying blood from much of the digestive tract and related organs toward the liver.
Ureter~A tube carrying urine from a kidney to the bladder.
Uterine artery~An artery supplying the uterus; its route passes close to the ureter.
Cranial nerve|cranial nerves~Nerves connected with the brain, serving functions such as sensation, eye movement, and swallowing.
Autonomic|parasympathetic|sympathetic~Automatic nerve control of organs. Sympathetic and parasympathetic divisions coordinate different patterns of activity.
Corticospinal tract~A pathway carrying movement commands from the brain's outer motor regions toward the spinal cord.
Medulla~The lower part of the brainstem, connecting with the spinal cord and containing important pathways and control centers.
Motor cortex|visual cortex~Brain surface regions involved mainly in controlling movement or processing visual information, respectively.
CSF|cerebrospinal fluid~Fluid around and within the brain and spinal cord that provides support and participates in their internal environment.
Ventricle|ventricles~A chamber: in the heart, a pumping chamber; in the brain, a space containing cerebrospinal fluid. Context matters.
Subarachnoid space~The fluid-containing space between two of the coverings around the brain and spinal cord.
Embryology|embryo~Embryology studies early development; an embryo is an early developing organism.
Histology|histological~The study of tissues, usually using a microscope.
Genetics|genetic~The study of biological information, inheritance, and variation.
Germ layer|germ layers~An early cell layer contributing to tissues during development; here germ does not mean an infectious microbe.
Ectoderm~An early developmental layer contributing to outer skin and much of the nervous system.
Mesoderm~An early developmental layer contributing to structures including muscle, bone, and many connective tissues.
Endoderm~An early developmental layer contributing to much of the gut lining and several internal organs.
Differentiation|differentiated~The development of specialized cell features and jobs. In tumors it also describes resemblance to normal tissue.
Neural tube~An early embryonic structure from which the brain and spinal cord develop.
Membrane|membranes~A thin boundary or sheet. A cell membrane controls exchange between the inside and outside of a cell.
Diffusion~Net spreading of particles down a concentration difference because of their random movement.
Osmosis~Net water movement across a selectively permeable membrane, driven by differences in effective dissolved-particle concentration.
Concentration|concentrated~How much of a substance is present in a given amount of mixture or fluid.
Gradient|gradients~A difference across space, such as concentration or pressure, that can help drive movement.
Ion|ions~An atom or molecule with electrical charge, such as sodium or calcium ions.
Sodium|potassium~Chemical elements whose ions help control fluid balance and electrical activity in cells.
Calcium|phosphate~Mineral components important in bones and other functions; calcium also helps cell signaling and muscle contraction.
Active transport~Movement across a membrane using energy directly or indirectly, often against a concentration or electrical gradient.
Sodium–potassium pump|sodium-potassium pump~A membrane protein that uses ATP to move three sodium ions out of a cell and two potassium ions in per cycle.
Membrane potential~The electrical voltage difference between the inside and outside of a cell.
Homeostasis~Ongoing adjustments that keep internal conditions within ranges compatible with normal function.
Negative feedback~A response that reduces the original disturbance, such as heat loss when body temperature rises.
Positive feedback~A response that strengthens the original change until a stopping event interrupts the cycle.
Receptor|receptors~A structure that recognizes a signal. Molecular receptors often bind a particular messenger and help produce a response.
Neuron|neurons~A nerve cell specialized to receive and transmit information.
Action potential~A brief electrical change that can travel along an excitable cell membrane.
Voltage-gated|ion channels~Ion channels are membrane pathways for charged particles; voltage-gated channels open or close in response to voltage changes.
Neuromuscular junction~The communication site where a motor nerve signals a skeletal muscle fiber.
Acetylcholine~A chemical messenger used at nerve-muscle junctions and several other nervous-system connections.
Nicotinic|muscarinic~Two groups of receptors that respond to acetylcholine and have different locations and effects.
Actin|myosin~Proteins that interact to generate force in muscle and perform other cellular jobs.
Troponin|calmodulin~Calcium-binding proteins involved in different control pathways; troponin regulates contraction in skeletal and heart muscle, while calmodulin has broader signaling roles.
Hemoglobin~The oxygen-carrying protein inside red blood cells.
Platelet|platelets~Small blood-cell fragments that help form a plug at sites of vessel injury.
Hemostasis~The coordinated process that limits bleeding, involving vessels, platelets, and clotting proteins.
Clotting factors~Proteins that participate in a reaction sequence helping stabilize a blood clot.
Cardiac output~The volume one ventricle pumps each minute: heart rate multiplied by stroke volume.
Heart rate~Number of heartbeats per minute.
Stroke volume~Volume of blood ejected by one ventricle in one beat.
Mean arterial pressure~An average pressure in arteries over the heartbeat cycle; it is not simply the top blood-pressure number.
Systemic vascular resistance~The opposition to blood flow through the body's circulation, outside the lung circuit.
Central venous pressure~Pressure in large veins near the right side of the heart.
Artery|arteries~A blood vessel carrying blood away from the heart, regardless of oxygen content.
Vein|veins~A blood vessel returning blood toward the heart, regardless of oxygen content.
Capillary|capillaries~Tiny blood vessels where much exchange with surrounding tissues takes place.
Pulmonary~Relating to the lungs.
Alveolus|alveoli|alveolar~A tiny lung air sac, or something relating to these air sacs, where gas exchange takes place.
Diaphragm~The main breathing muscle between chest and abdomen; its contraction helps expand the chest.
Ventilation~Movement of air into and out of the lungs.
Perfusion~Blood flow through tissue, supplying material and carrying away waste.
Oxygenation~The addition of oxygen to blood.
Hypoxemia~An abnormally low level of oxygen in arterial blood.
Hypoxia~Insufficient oxygen availability at tissue level for its needs.
Ventilation–perfusion mismatch|ventilation-perfusion mismatch~An imbalance between air reaching lung regions and blood flowing through them, which can impair gas exchange.
Compliance~How much a structure's volume changes for a given pressure change; high compliance means it expands more easily in that setting.
Nephron~A kidney's microscopic filtering and tube-processing unit.
Plasma~The liquid portion of blood, containing water, proteins, and dissolved substances.
Solute|solutes~A substance dissolved in a fluid, such as salt in water.
Filtration~Movement of fluid and small substances across a filter, as at the start of a nephron.
Reabsorption|reabsorbed~Return of a filtered substance from kidney tubes to blood.
Secretion~Release of a substance; in kidney tubes, movement of substances into the tubular fluid.
Excretion|excreted~Removal from the body, such as a substance leaving in urine.
ADH|antidiuretic hormone~A hormone that helps the kidneys reclaim water by increasing water permeability in collecting ducts.
Aldosterone~A hormone that promotes sodium retention and potassium secretion in parts of the kidney.
Collecting duct|collecting-duct~A final part of the kidney's tube system where water and other adjustments affect the urine.
Permeability|permeable~How readily something can pass through a boundary.
Acid–base|acid-base|pH~Acid-base balance concerns acidity of body fluids. pH is a scale of acidity: lower values are more acidic.
Bicarbonate~A dissolved substance that helps buffer acids in body fluids and participates in carbon-dioxide transport.
GI|gastrointestinal~Relating to the stomach and intestines.
Endocrine~Relating to glands and cells that release hormones into blood.
Hormone|hormones~A chemical messenger that influences cells with suitable receptors.
Insulin~A pancreatic hormone that helps control blood glucose and favors nutrient storage after meals.
Glucose~A simple sugar used by cells as a major fuel and building material.
Thyroid~A gland in the neck whose hormones help regulate many aspects of metabolism.
Pituitary|hypothalamus~The hypothalamus is a brain region coordinating many body functions; the pituitary is a connected hormone-releasing gland.
Gonadotropin|gonadotropins~Hormones, including FSH and LH, that influence ovaries or testes.
Enzyme|enzymes~A biological catalyst, usually a protein, that speeds a reaction without being used up overall.
Protein|proteins~Molecules built from amino acids that perform jobs such as structure, transport, and catalysis.
Substrate~A starting molecule on which an enzyme acts.
Product|products~A substance formed by a chemical reaction; context distinguishes this from an ordinary manufactured product.
Cofactor~A nonprotein helper needed for the activity of some enzymes.
Kinetics~The study of rates of change; enzyme kinetics examines how fast enzyme reactions occur under different conditions.
Km|Michaelis–Menten~In the Michaelis–Menten model, Km is substrate concentration at half the maximum reaction rate. It is not universally a direct measure of binding strength.
Vmax~The maximum reaction rate in a specified enzyme model when substrate supply is no longer the limiting factor.
Competitive inhibitor|competitive inhibition~An inhibitor competing with substrate for binding; the ideal model increases apparent Km without changing Vmax.
Metabolism|metabolic~The chemical reactions by which cells build, change, and break down substances.
Anabolism~Building larger molecules from smaller components, requiring energy.
Catabolism~Breaking larger molecules into smaller components, often making energy available for other processes.
Glycolysis~A pathway in cell fluid that converts glucose to pyruvate and produces a small amount of ATP.
Cytosol~The fluid part inside a cell, outside its membrane-enclosed internal compartments.
Pyruvate~A small molecule formed from glucose in glycolysis and used in several further pathways.
ATP~Adenosine triphosphate: a molecule that transfers energy to many cellular processes.
Citric acid cycle~A series of reactions that processes fuel-derived molecules and transfers energy to carrier molecules for later use.
Oxidative phosphorylation~ATP production linked to electron transfer and a gradient across an internal mitochondrial membrane.
Mitochondria|mitochondrial~Cell compartments important in fuel processing, ATP production, and other functions.
Glycogen|glycogenesis~Glycogen is a branched glucose store; glycogenesis is its formation.
Gluconeogenesis~Making glucose from starting materials that are not carbohydrates, mainly in liver and also kidney.
Lipid|lipids~A broad group including fats and cholesterol, many of which mix poorly with water.
Fatty acid|fatty acids~Molecules used as fuel and as components of many fats and membranes.
Beta-oxidation~A pathway that shortens fatty acids and produces acetyl-CoA units and energy-carrying molecules.
Acetyl-CoA~A small carbon-containing carrier molecule linking several fuel-processing and building pathways.
Lipoprotein|lipoproteins~Particles containing fat and protein that transport poorly water-soluble lipids in blood.
Chylomicron|chylomicrons~Large lipoprotein particles carrying much of the fat absorbed from the intestine.
Triglyceride|triglycerides~A major form of stored and transported fat, made from glycerol and three fatty acids.
VLDL~Very-low-density lipoprotein: a particle carrying much liver-derived triglyceride into the circulation.
LDL~Low-density lipoprotein: a particle involved in cholesterol transport and delivery; its level contributes to cardiovascular risk assessment.
HDL~High-density lipoprotein: a group of particles involved in cholesterol handling, including return toward the liver.
Cholesterol~A lipid used in cell membranes and to make certain hormones and other substances.
Amino acid|amino acids~Small nitrogen-containing molecules used to build proteins and other substances.
Peptide|peptides~A chain of linked amino acids, usually shorter than a protein.
Transamination~Transfer of an amino group between molecules during amino-acid processing.
Urea|urea cycle~Urea is a nitrogen-containing waste molecule; the urea cycle converts excess nitrogen into urea mainly in the liver.
Phenylketonuria|phenylalanine hydroxylation~Phenylketonuria commonly involves impaired conversion of phenylalanine to tyrosine, allowing phenylalanine to accumulate.
Metabolite|metabolites~A substance used or produced during metabolism.
Precursor|precursors~A starting material from which another substance is made.
Micronutrient|micronutrients~A nutrient needed in relatively small amounts, including vitamins and minerals.
Vitamin B1~Thiamine, a vitamin helping several enzymes involved in energy metabolism.
Vitamin B12|folate~Vitamins needed for normal DNA-related processes and blood-cell formation; B12 also supports nervous-system function.
Vitamin C|collagen~Vitamin C supports steps in forming collagen, a structural protein helping tissues resist pulling forces.
Vitamin D~A vitamin involved in regulation of calcium and phosphate and normal bone mineralization.
Fat-soluble~Able to dissolve in fats; vitamins A, D, E, and K belong to this group.
DNA~Deoxyribonucleic acid: the molecule storing much of a cell's genetic information.
RNA~Ribonucleic acid: a group of molecules involved in using and regulating genetic information, among other jobs.
Replication~Copying genetic material; DNA replication makes a DNA copy.
Transcription~Making an RNA molecule using DNA information as a template.
Translation~Using information in messenger RNA to assemble an amino-acid chain.
PCR~Polymerase chain reaction: a laboratory technique making many copies of a selected DNA region.
Reference interval|reference intervals~A range derived from a reference population for interpreting a test; being outside it does not alone establish disease.
Specimen~A sample collected for examination, such as blood, urine, or a tissue piece.
Hypertrophy~An increase in cell size, which can enlarge a tissue or organ.
Hyperplasia~An increase in the number of cells in a tissue or organ.
Metaplasia~Replacement of one mature cell type by another in a tissue, often in response to stress.
Necrosis~Cell death associated with injury and often with inflammation in surrounding tissue.
Apoptosis~A regulated cell-death process that usually limits disruption and inflammation around the cell.
Inflammation|inflammatory~A tissue response to injury or threats involving signaling, blood-vessel changes, and immune activity; it can occur without infection.
Neutrophil|neutrophils~A type of white blood cell often prominent early in acute inflammation and defense against bacteria.
Mononuclear cells~Immune cells with a single main nucleus, including lymphocytes and monocytes; often prominent in chronic inflammation.
Macrophage|macrophages|phagocytes~Phagocytes engulf material; macrophages are phagocytes that also coordinate immune responses and tissue repair.
Granuloma|granulomas~Organized groups of activated immune cells, especially macrophages, occurring in several infectious and noninfectious conditions.
Regeneration|regenerative~Replacement of damaged tissue with new cells of the relevant tissue type.
Fibrosis~Formation or accumulation of fibrous supporting tissue, often as scarring.
Thrombosis|thrombus~Thrombosis is clot formation within the circulation; a thrombus is the clot formed there.
Embolism|embolus~Blockage by material traveling through the circulation; an embolus is the traveling material.
Virchow's triad|hypercoagulability|endothelial~Three broad clot-promoting factors: vessel-lining injury, abnormal blood flow, and an increased tendency of blood to clot.
Hypersensitivity~An immune response that causes harm; types I–IV group different mechanisms rather than degrees of severity.
Type IV~A hypersensitivity category mediated mainly by T cells rather than antibodies.
Neoplasia|neoplasm|tumor|tumors~Abnormal new cell growth; a tumor may be benign or malignant, and some abnormal growth is not a solid lump.
Benign~Not malignant: a benign tumor does not metastasize but can still cause problems through size, location, or hormone production.
Malignant|malignancy~Cancerous, with ability to invade surrounding tissue and potentially spread elsewhere.
Metastasis|metastasize|metastases~Spread of malignant cells to establish growth at a different site.
Oncogene|oncogenes~A gene whose altered or excessive activity can promote abnormal cell growth.
Tumor suppressor|tumor suppressors~A gene or its product that helps restrain abnormal growth or maintain cell integrity; losing its function can favor cancer.
Grade|stage~In cancer, grade describes cell/tissue features; stage describes disease extent. They answer different questions.
Clonal~Arising from descendants of one original cell.
Anemia~Hemoglobin below the relevant reference range, reducing blood's oxygen-carrying capacity.
Reticulocyte|reticulocytes~A young red blood cell; its count helps assess red-cell production.
Microcytosis|microcytic~Having red blood cells smaller than the relevant usual size.
Megaloblastic~A pattern of abnormal blood-cell development often linked to impaired DNA synthesis, including B12 or folate deficiency.
Leukemia~A group of cancers of blood-forming cells, often involving marrow and blood.
Hematology|hematologic~The study of blood and blood disorders, or something relating to that field.
Mucocutaneous~Relating to skin and moist linings such as the mouth.
Atherosclerosis|intimal~Atherosclerosis involves fatty inflammatory plaques in the inner layer (intima) of arteries.
Ischemia|ischemic~Blood supply inadequate for tissue needs.
Infarction~Tissue death caused by inadequate blood supply.
Nephritic|glomerular|hematuria~Nephritic patterns involve inflammation of kidney filters (glomeruli), often with blood in urine, called hematuria.
Nephrotic|proteinuria~Nephrotic patterns involve substantial protein loss through kidney filters; proteinuria means protein in urine.
Cirrhosis|nodules~Cirrhosis is a chronic liver pattern involving scarring and regenerated tissue lumps that disrupt normal structure and flow.
Pharmacokinetics~How the body absorbs, distributes, changes, and removes a drug.
Pharmacodynamics~How a drug affects the body through its targets and resulting responses.
Absorption~Movement into the body or circulation from the place a substance enters, such as nutrients crossing the gut wall.
Distribution~Movement of a drug between blood and different body tissues.
Clearance~The volume of plasma effectively cleared of a drug per unit time; this describes removal efficiency, not literal discarded plasma.
Half-life~Time for an amount or concentration to fall by half under specified conditions.
Volume of distribution~A calculated comparison between the amount of drug in the body and its concentration in plasma; not necessarily a physical body volume.
First-order~A model in which a constant fraction, rather than a constant amount, is removed per unit time.
Bioavailability~The fraction of a dose that reaches the general circulation unchanged.
Potency~How much drug is needed for a specified effect in a defined comparison.
Efficacy~The maximum effect achievable under the conditions being studied.
Agonist~A substance that activates a receptor.
Antagonist~A substance that blocks receptor activation without itself activating that receptor in the basic model.
Beta-1|beta-2~Receptor types responding to adrenaline-related signals; beta-1 supports heart activity, while beta-2 can relax airway smooth muscle.
Bronchodilation|bronchodilator|bronchodilators~Widening of airways; bronchodilators are drugs that produce this effect.
Selectivity~A relative preference for one target over others; it can change with drug exposure.
ACE|angiotensin II|bradykinin~ACE helps form angiotensin II, a signal that can narrow vessels, and also breaks down bradykinin, a signal with effects including vessel widening.
Diuretic|diuretics~A drug that increases urine output, often by changing kidney salt handling.
Thick ascending limb|Na-K-2Cl~A nephron segment that reabsorbs salts; loop diuretics block its sodium-potassium-chloride transporter.
Antiplatelet|antiplatelets~A drug that reduces some platelet functions involved in clot formation.
Anticoagulant|anticoagulants~A drug that interferes with the clotting-protein system, reducing clot formation or extension.
CNS~Central nervous system: the brain and spinal cord.
Benzodiazepine|benzodiazepines|GABA-A~Benzodiazepines enhance signaling through GABA-A receptors, part of a major inhibitory brain signaling system.
Opioid|opioids~A substance acting at opioid receptors; some are used for pain relief and have other important effects.
NSAID|NSAIDs|cyclooxygenase|prostaglandin|prostaglandins~NSAIDs are nonsteroidal anti-inflammatory drugs. They inhibit cyclooxygenase enzymes, reducing prostaglandins involved in pain, inflammation, and other functions.
Adverse effect|adverse effects~An unwanted harmful effect of a drug or intervention.
Comorbidity~Another condition present alongside the condition being discussed.
Antimicrobial|antimicrobials~A substance acting against microbes; antibiotics, antivirals, and antifungals target different groups.
Chemotherapy~Treatment using chemicals; often used specifically for drug treatment of cancer.
Beta-lactam|beta-lactams~A family of antibiotics interfering with bacterial cell-wall construction.
Macrolide|macrolides~A family of antibiotics that interferes with bacterial protein production.
Resistance|resistant~Ability of a microbe to survive or grow despite a drug that would otherwise affect it; other contexts can mean opposition to flow.
Efflux~Movement out of a cell; microbes can use efflux pumps to remove a drug.
Susceptibility~How responsive an organism is to an antimicrobial under defined testing conditions.
Stewardship~Responsible use of antimicrobials to support effective treatment and reduce avoidable harm and resistance.
Proton-pump inhibitor|proton-pump inhibitors|parietal-cell~An acid-suppressing drug that inhibits the acid-secreting pump in stomach parietal cells.
Corticosteroid|corticosteroids~A group of hormone-related drugs with effects including reduction of inflammation; effects depend on drug and use.
Microbe|microbes|microbial~A microscopic organism; in everyday medical discussion the term often includes viruses as infectious agents.
Bacteria|bacterial~Single-celled organisms, many harmless or useful and some able to cause disease.
Virus|viruses|viral~An infectious agent requiring suitable host cells to reproduce.
Host~The organism in which another organism or infectious agent lives or reproduces.
Gram staining~A laboratory stain that groups many bacteria by differences in cell-wall properties; it does not identify every bacterium.
Culture~In microbiology, growing organisms from a sample under controlled conditions.
Antigen~A structure recognized by the immune system; it is not necessarily a whole microbe.
Antibody|antibodies~A protein made by descendants of B cells that binds a particular antigen.
Nucleic acid|nucleic-acid|genome|genomes~DNA and RNA are nucleic acids. A genome is an organism's or virus's full set of genetic information.
Innate|adaptive~Innate immunity responds rapidly to broad patterns; adaptive immunity develops specific recognition and memory.
Complement~A group of blood proteins that help immune defense through several linked reactions.
B cell|B cells|plasma cells~B cells are adaptive immune cells that can become plasma cells, which release antibodies.
T cell|T cells|T-cell~Adaptive immune cells with roles including coordination, killing certain target cells, and regulation.
Immune memory~A changed immune response after earlier exposure that can improve responses to a later encounter.
Colonization~Presence and growth of microbes at a site without established disease caused by them.
Virulence~The capacity of an infectious agent to cause damage or disease.
Staphylococci|streptococci~Groups of bacteria; staphylococci often appear in clusters and streptococci in chains or pairs.
Mycobacteria|acid-fast|acid-fastness~Mycobacteria have lipid-rich walls that can retain certain stains despite acid-based washing; this property is called acid-fastness.
Toxin|toxins~A harmful substance produced by a living organism.
Latency|latent~Persistence with limited activity and the possibility of later reactivation, depending on the agent.
Self-limited~Usually resolving through its natural course, though severity and exceptions still matter.
Fungi|fungal|yeast|yeasts|mold|molds~Fungi are a distinct organism group; yeasts grow mainly as single cells, while molds form branching threads.
Parasite|parasites~An organism living in or on a host and obtaining resources at the host's expense.
Vector~An organism that transmits an infectious agent between hosts, such as some mosquitoes.
Reservoir~A usual source or habitat from which an infectious agent can reach a host.
Intermediate host~A host in which a parasite passes through particular immature or asexual stages.
Malaria~A disease caused by Plasmodium parasites, usually transmitted by infected mosquitoes.
Sterilization|sporicidal|spores~Sterilization aims to eliminate all microbial life, including resistant bacterial spores. Sporicidal means able to destroy spores.
Disinfection~A process reducing or eliminating many harmful microbes, not necessarily all spores.
Consent|capacity|voluntariness~Consent is informed agreement; capacity is ability to make the relevant decision; voluntariness means deciding without coercion.
Autonomy~A person's ability and right to make informed choices about their own life and care within applicable rules.
Confidentiality~The duty to protect private information, subject to applicable legal and professional requirements.
Chain of custody~A documented record of who collected, handled, transferred, and stored evidence.
Inference~An interpretation drawn from observations; it may be uncertain.
Postmortem~After death.
Algor mortis|livor mortis|rigor mortis~Postmortem cooling, settling-related discoloration, and muscle stiffening, respectively.
Decomposition~Breakdown of body tissues after death through biological and chemical processes.
Abrasion|abrasions~A superficial area where skin has been rubbed or scraped away.
Contusion|contusions~A bruise: bleeding into tissue following injury, usually blunt force.
Laceration|lacerations~A tear in tissue, commonly from blunt force rather than a clean sharp cut.
Incised wound|incised wounds~A wound produced by a sharp edge, often with relatively clean margins.
Asphyxia|asphyxial~A situation in which breathing or gas exchange is impaired so oxygen delivery is threatened; cause requires context.
Petechiae~Tiny pinpoint spots of bleeding in skin or other tissues; they have several possible causes.
Toxicology|toxicity~Toxicology studies harmful substance effects; toxicity is capacity to cause harm under particular exposure conditions.
Toxidrome|toxidromes~A group of effects suggesting a class of toxic exposure, without necessarily proving the exact substance.
Organophosphates|acetylcholinesterase|cholinergic~Organophosphates can inhibit acetylcholinesterase, the enzyme that breaks down acetylcholine, causing excessive acetylcholine-related (cholinergic) signaling.
Antidote|antidotes~A treatment that counteracts a particular poison through a specific mechanism.
Epidemiology~Study of the distribution and causes or influences of health events in populations.
Incidence~New cases in a defined population over a specified time.
Prevalence~Existing cases in a population at a specified time or during a specified period.
Cohort|case-control|cross-sectional~Study designs: follow a group over time; compare people with and without an outcome; or examine a population at a particular time, respectively.
Confounding~Distortion of an exposure-outcome comparison by a third factor related to both.
Bias~Systematic error in how a study is designed, carried out, measured, or interpreted.
Mean|median|mode~Mean is sum divided by count; median is the middle ordered value; mode is the most frequent value.
Standard deviation~A measure of how widely values are spread around their mean.
Confidence interval~A range generated by a statistical method to express uncertainty in an estimate, interpreted through that method's repeated-sampling properties.
p-value|statistical significance~A p-value summarizes how incompatible data are with a specified statistical model. Statistical significance alone does not show a large or important effect.
Sensitivity~The proportion testing positive among people who truly have the condition, under the stated definitions.
Specificity~The proportion testing negative among people who truly do not have the condition, under the stated definitions.
Positive predictive value|negative predictive value~The proportion truly with disease among positive tests, or truly without disease among negative tests, respectively; both depend on the tested population.
False positive|false negative~A positive test without the target condition, or a negative test despite the target condition, respectively.
Screening~Testing a target population for possible disease or risk before definitive diagnosis.
Numerator|denominator~The top count and the bottom reference amount in a fraction; both must be defined before interpreting a rate or proportion.
Absolute risk|relative risk~Absolute risk is an event probability in a group and time; relative risk compares two such risks as a ratio.
Primary prevention|secondary prevention|tertiary prevention~Preventing disease onset; detecting disease early; and reducing the consequences of established disease, respectively.
Demography~Study of population size, composition, births, deaths, and movement.
Anthropometry~Measurement of body dimensions such as height, weight, or arm circumference.
Coronary~Relating to the arteries supplying the heart muscle.
Heart failure~A syndrome in which heart function is inadequate to meet needs normally or does so only with raised filling pressures; it is not the same as cardiac arrest.
Arrhythmia~An abnormal heart rhythm.
Hypertension|hypertensive~Persistently high blood pressure under the relevant clinical definition.
Edema~Excess fluid in tissues, often producing swelling.
Jaundice|bilirubin~Jaundice is yellow discoloration from increased bilirubin, a pigment formed largely during breakdown of hemoglobin.
Rheumatology~The medical field concerned with many joint, connective-tissue, and immune-related disorders.
Seizure|seizures~An event caused by abnormal excessive or synchronized brain electrical activity; manifestations and causes vary.
Epilepsy~A brain disorder characterized by a tendency to recurrent unprovoked seizures under clinical diagnostic definitions.
Perioperative~The period before, during, and after an operation.
Shock~Circulatory failure in which tissue needs are not adequately met; it has several causes.
Obstruction|obstructed~Blockage or narrowing that prevents normal passage or flow.
Peritoneum|peritonitis~The peritoneum lines the abdominal cavity and covers many organs; peritonitis is inflammation of that lining.
Anastomosis~A connection between tubular structures, such as two bowel segments or blood vessels.
Debridement~Clinical removal of dead, damaged, or contaminated tissue when indicated.
Hepatobiliary|biliary~Relating to the liver and bile system, or to bile and its ducts, respectively.
Pancreas|pancreatic~An organ producing digestive enzymes and hormones such as insulin.
Hernia|hernias~Protrusion of tissue through an opening or weak area.
Incarcerated|strangulated~For a hernia, incarcerated means not reducible; strangulated means its blood supply is compromised.
Triple assessment~In breast evaluation, combining clinical examination, imaging, and tissue sampling when indicated.
Oncology~The field concerned with cancer.
Urinary retention~Inability to empty the bladder adequately despite urine being produced.
Urology~The field concerned with urinary-system disorders and some male reproductive conditions.
Uterus|uterine~The muscular reproductive organ in which pregnancy normally develops.
Ovary|ovaries|ovarian~Organs that contain egg cells and produce reproductive hormones.
Follicle|follicles|follicular~A small enclosing structure; an ovarian follicle contains an egg cell, while a hair follicle is the skin structure producing a hair.
Oocyte|ovulation~An oocyte is an egg cell; ovulation is its release from an ovarian follicle.
FSH|LH~Follicle-stimulating hormone and luteinizing hormone: pituitary signals regulating ovarian and testicular functions.
Estrogen|progesterone~Hormones with several reproductive roles, including coordinating changes in the uterine lining.
Endometrium|endometrial~The inner uterine lining, which changes across the menstrual cycle.
Proliferation|secretory transformation~Proliferation is increased cell growth or number; secretory transformation is a change toward producing and releasing substances, as in the uterine lining after ovulation.
Luteal phase~The phase after ovulation, when the remaining follicle forms a hormone-producing structure called the corpus luteum.
Antenatal|prenatal~Before birth, usually referring to pregnancy care or development.
Fetus|fetal~The developing organism during the later prenatal period; fetal means relating to it.
Gestational age|gestation~The duration or stage of a pregnancy, conventionally counted from the last menstrual period for clinical dating.
Intrapartum|postpartum~During labor and birth, or after childbirth, respectively.
Cervix|cervical dilation~The cervix is the lower opening of the uterus; cervical dilation is its opening during labor. Cervical can also mean neck-related in other contexts.
Placenta|placental~The pregnancy organ allowing exchange between maternal and fetal circulations without their blood normally mixing directly in bulk.
Preeclampsia~A pregnancy-related hypertensive disorder developing after midpregnancy with proteinuria or other defining organ involvement.
Hemorrhage~Bleeding; severity depends on amount, rate, location, and context.
Tone, trauma, tissue and thrombin|four Ts~A memory aid for postpartum bleeding causes: poor uterine contraction, injury, retained tissue, and clotting problems.
Puerperium~The period of maternal recovery and physiological adjustment after childbirth.
Thromboembolism~Vessel blockage by a clot that forms and may travel elsewhere.
Parity~A description of pregnancies reaching a defined gestational threshold; the exact definition depends on context.
Contraception|contraceptive~Methods intended to prevent pregnancy.
Infertility~Difficulty achieving pregnancy under clinical definitions that consider time and context.
Semen~Fluid ejaculated from the male reproductive tract that normally contains sperm and glandular secretions.
Fibroid|fibroids~A benign growth of uterine smooth muscle.
Endometriosis~A condition involving tissue resembling uterine lining outside the uterus.
HPV~Human papillomavirus: a group of viruses; persistent infection with certain high-risk types contributes to several cancers, including most cervical cancers.
Milestone|milestones~A developmental ability used to follow progress, such as sitting, speaking, or interacting socially.
Regression~Loss of a previously acquired ability.
Neonate|neonatal|neonatology~A newborn in the first 28 days; neonatal means relating to that period, and neonatology studies newborn care.
Prematurity~Birth before full term, with implications depending on gestational age and other factors.
Dehydration~A deficit of body water, sometimes with accompanying salt imbalance.
Lethargy~Abnormally reduced alertness, energy, or responsiveness, interpreted in context.
Cyanosis|cyanotic|noncyanotic~Cyanosis is bluish discoloration related to deoxygenated hemoglobin or some abnormal hemoglobins; cyanotic means showing it.
Mendelian|chromosomal~Mendelian patterns involve inheritance related to single genes; chromosomal disorders involve chromosome number or structure.
Refraction|refractive~Bending of light as it passes between materials; refractive errors alter where an eye focuses light.
Accommodation|unaccommodated~Adjustment of the eye's focusing power for near vision; unaccommodated means not making that near-focus adjustment.
Retina|retinal~The light-sensitive nerve tissue lining the back of the eye.
Cornea|corneal~The clear curved front surface of the eye, important for focusing light.
Lens~The transparent internal eye structure that helps focus light and changes shape for near vision.
Myopia|hyperopia~Myopia focuses distant parallel rays in front of the retina; hyperopia focuses them behind it in an unaccommodated eye.
Visual acuity|visual field~Acuity measures clarity of detail; visual field is the area seen while looking in a particular direction.
Conjunctiva|conjunctivitis~Conjunctiva is a surface lining of the eye and eyelids; conjunctivitis is its inflammation.
Keratitis~Inflammation of the cornea.
Photophobia~Discomfort or pain triggered by light, rather than necessarily a psychological fear.
Cataract|opacity~Cataract is clouding of the lens. Opacity means reduced transparency or an area that appears denser on an image, depending on context.
Glaucoma|optic neuropathy~Glaucoma is a group of conditions with characteristic optic-nerve damage; optic neuropathy means damage or dysfunction of the optic nerve.
Intraocular pressure~Pressure within the eye.
Uvea|uveitis~The uvea is the eye's middle vascular layer; uveitis is its inflammation.
Retinopathy|fundus~Retinopathy is retinal disease; the fundus is the back interior of the eye examined through the pupil.
Retinal detachment~Separation of the light-sensitive retina from its underlying support layer.
Cochlea|cochlear~The inner-ear structure converting sound-related mechanical motion into nerve signals.
Conductive hearing loss|sensorineural~Conductive loss involves sound transmission; sensorineural loss involves inner-ear sensory structures or nerve pathways.
Otoscopy|tympanic membrane~Otoscopy examines the ear canal and eardrum; tympanic membrane is the anatomical name for the eardrum.
Audiometry~Measurement of hearing using controlled sounds and responses.
Eustachian tube|nasopharynx~The eustachian tube connects the middle ear to the upper throat behind the nose, called the nasopharynx.
Otitis media|effusion~Otitis media concerns middle-ear inflammation; effusion means fluid collected in a space. Fluid alone does not establish acute bacterial infection.
Cholesteatoma~An abnormal collection of keratinizing skin tissue in the middle-ear region that can damage nearby structures.
Vertigo~A false or distorted sense of movement, such as spinning.
Vestibular~Relating to balance and sensing head movement, particularly through the inner-ear balance organs.
Proprioception|proprioceptive~Sensing the position and movement of one's own body parts.
Rhinitis|epistaxis~Rhinitis is inflammation of the nasal lining; epistaxis is bleeding from the nose.
Paranasal sinuses~Air-containing spaces in skull bones around the nose that communicate with the nasal cavity.
Pharynx|pharyngeal|tonsils~The pharynx is the throat passage; tonsils are immune-tissue groups near this passage.
Esophagus|esophageal~The muscular food pipe carrying swallowed material toward the stomach.
Bolus~A portion of material; in swallowing, the prepared lump of food moving through the mouth and throat.
Dysphagia|odynophagia~Difficulty swallowing and painful swallowing, respectively.
Larynx|laryngeal|vocal folds~The larynx is the voice-box region guarding the lower airway; vocal folds are tissue folds that vibrate to produce sound.
Stridor~A harsh breathing sound associated with upper-airway narrowing.
Fracture~A break in bone continuity.
Displacement|alignment~Displacement describes a shift from normal position; alignment describes how parts line up.
Open fracture~A fracture communicating with the external environment through a wound, even if bone is not visible.
Callus~Repair tissue formed during many types of fracture healing; the word can also mean thickened skin in other contexts.
Remodeling~Ongoing reshaping and replacement of tissue, such as bone adapting after repair.
Neurovascular~Relating to nerves and blood vessels.
Dislocation|congruity~Dislocation means loss of normal joint contact; congruity refers to how joint surfaces fit together.
Compartment syndrome~Raised pressure within a confined tissue space threatening blood supply and function.
Osteomyelitis|septic arthritis~Infection of bone and infection within a joint, respectively.
Osteoporosis|osteomalacia~Osteoporosis involves reduced bone strength with loss of mass or structure; osteomalacia involves inadequate mineralization.
Mineralization~Deposition of minerals in a supporting framework, important for bone hardness.
Growth plate~A developing region near the ends of growing long bones where length increases.
Scoliosis~A three-dimensional spinal deformity involving sideways curvature and rotation.
Cartilage|synovium|articular~Cartilage provides support or smooth joint surfaces; synovium lines certain joint interiors; articular means relating to a joint.
Osteoarthritis|arthritis~Arthritis means joint inflammation or disease in broad usage; osteoarthritis is a whole-joint disorder involving structural changes and often mechanical symptoms.
Rehabilitation~Support and interventions aiming to improve function and participation after or with illness or injury.
Morphology~The form and appearance of a structure or lesion.
Macule|papule|vesicle~A flat color change, a small solid raised lesion, and a small fluid-filled lesion, respectively.
Scale|plaque~In skin descriptions, scale is flaking outer skin material; a plaque is a raised, broader lesion.
Eczema|psoriasis~Different inflammatory skin conditions; eczema often involves itch and barrier disturbance, while psoriasis often forms well-defined scaly plaques.
Dermatophyte|dermatophytes|keratinized~Dermatophytes are fungi affecting keratin-containing tissues such as outer skin, hair, and nails.
Scabies|infestation~Scabies is a skin infestation by mites; infestation means living organisms such as parasites occupying a host surface or site.
Acne|sebum~Acne involves hair-follicle plugging and inflammation among other factors; sebum is oily material made by skin glands.
Melanocyte|melanocytes|melanin~Melanocytes are cells producing melanin, a pigment contributing to skin, hair, and eye color.
Vitiligo|depigmentation~Vitiligo involves loss of functional pigment-producing cells; depigmentation means loss of pigment.
Autoimmune|immune-mediated~Autoimmune disease involves responses against the body's own components; immune-mediated means caused or driven by immune mechanisms more broadly.
Bullous|blister~Bullous means blister-forming; a blister is a fluid-filled separation between tissue layers.
Leprosy~A chronic bacterial infection that can affect skin and peripheral nerves, among other structures.
STI|STIs~Sexually transmitted infection: an infection spread through sexual contact, with other transmission routes possible for some agents.
Mental status examination~A structured description of current mental functioning, including speech, mood, thought, perception, and cognition.
Mood|affect~Mood is a sustained or reported emotional state; affect is the observed expression of emotion.
Cognition|cognitive~Mental processes such as attention, memory, language, and reasoning.
Mania|manic~An episode of abnormal mood and increased energy or activity with associated symptoms and significant effects on functioning.
Bipolar|unipolar~Bipolar mood disorders include manic or hypomanic patterns; unipolar depression lacks such an episode history under the relevant diagnosis.
OCD|obsession|obsessions|compulsion|compulsions~Obsessive-compulsive disorder involves unwanted intrusive thoughts or urges and/or repetitive acts or mental rituals causing significant distress or impairment.
Panic attack|panic attacks~A sudden surge of intense fear or discomfort with associated symptoms; it can occur in several conditions.
Psychosis~Disturbance in experiencing or interpreting reality, with several possible psychiatric, medical, or substance-related causes.
Hallucination|hallucinations~A perception-like experience without a matching external source, such as hearing a voice without an external speaker.
Delusion|delusions~A firmly held belief not readily changed by contrary evidence, assessed with cultural and clinical context.
Delirium~An acute, fluctuating disturbance of attention and awareness due to an underlying physiological cause.
Dementia~Acquired decline in cognitive abilities that interferes with independence.
Dependence~A context-dependent term involving adaptation or a problematic pattern of substance use; physical adaptation alone is not identical to addiction.
Neurodevelopmental~Relating to development of the brain and related functions such as learning, communication, and attention.
Modality|modalities~A method or type of examination, such as ultrasound or MRI.
Ionizing radiation~Radiation with enough energy to remove electrons from atoms; X-rays are one example.
X-ray|radiograph|radiographic~An X-ray is a form of radiation; a radiograph is an image made using it.
CT~Computed tomography: sectional images reconstructed from X-ray measurements.
MRI~Magnetic resonance imaging: images made using magnetic fields and radiofrequency signals.
Ultrasound~Imaging using reflected high-frequency sound waves.
Radiolucent|radiopaque~Relatively allowing X-rays through, or relatively blocking/attenuating them, respectively.
Contrast~A visible difference between structures; a contrast agent is a substance used to make certain structures easier to distinguish.
Cross-sectional~Showing a section or slice through a structure rather than only its outside.
Projection~The viewing geometry used to produce an image, affecting how structures overlap.
Pleura|mediastinum~Pleura are the coverings around the lungs; mediastinum is the central chest region between the lungs.
Intracranial~Inside the skull.
Sequence|sequences~In MRI, a particular pattern of signals and measurements designed to emphasize certain tissue properties.
Occult~Hidden or not readily visible on the initial examination or test.
Marrow~Tissue inside bones, including regions where blood cells are produced.
Contraindication|contraindications~A circumstance making a particular test or treatment unsuitable or requiring special consideration.
Justification|dose optimization~For radiation use, justification asks whether the examination's benefit warrants it; optimization adjusts exposure to obtain adequate information appropriately.
Anesthesia|anesthetic|anesthetics~Controlled reduction or loss of sensation, sometimes with unconsciousness depending on the technique; anesthetics are agents producing these effects.
Patent|patency~Open enough to allow passage, as with an airway or vessel.
Capnography|capnograph~Measurement and display of carbon dioxide in exhaled breath over time.
Analgesia~Reduction or absence of pain.
Amnesia~Loss of memory or prevention of formation of new memories for a period.
Neuromuscular block|neuromuscular blockers~Interruption of nerve-to-skeletal-muscle signaling; this does not itself provide pain relief or unconsciousness.
Regional anesthesia|neuraxial~Regional anesthesia targets a body region; neuraxial techniques act near the spinal cord and associated nerves.
Pulse oximetry|pulse oximeter|oxygen saturation~Pulse oximetry estimates the proportion of arterial hemoglobin carrying oxygen; it does not directly measure ventilation or total oxygen delivery.
Hemodynamics~The behavior of blood circulation, including flow, pressures, and related forces.
Multimodal analgesia~Pain care combining approaches acting through different mechanisms.
Resuscitation~Coordinated support of failing vital functions while causes are assessed and addressed.
`;
const MEDICAL_WORDS = MEDICAL_WORDS_RAW.trim().split('\n').map(row => {
  const [names, definition] = row.split('~');
  const aliases = names.split('|');
  return {term:aliases[0], aliases, definition};
}).sort((a,b) => a.term.localeCompare(b.term));
const wordNormalize = value => String(value).toLowerCase().normalize('NFKC').replace(/[–—‑]/g,'-');
function matchingMedicalWords(text) {
  const haystack = wordNormalize(text);
  return MEDICAL_WORDS.filter(entry => entry.aliases.some(alias => {
    const needle = wordNormalize(alias).replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    return new RegExp('(^|[^a-z0-9])'+needle+'(?=$|[^a-z0-9])','i').test(haystack);
  }));
}
