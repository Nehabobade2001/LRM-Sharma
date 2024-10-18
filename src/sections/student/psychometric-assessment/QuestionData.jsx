const questions = [
  // 1. Interest Inventory (13 questions)
  {
    category: "Interest Inventory",
    question: "Which medical specialty do you find most fascinating?",
    options: ["Surgery", "Pediatrics", "Internal Medicine", "Psychiatry"]
  },
  {
    category: "Interest Inventory",
    question: "What type of medical environment do you prefer?",
    options: ["Hospital", "Private Practice", "Research Laboratory", "Community Clinic"]
  },
  {
    category: "Interest Inventory",
    question: "Which aspect of medicine interests you the most?",
    options: ["Patient Care", "Medical Research", "Public Health", "Medical Education"]
  },
  {
    category: "Interest Inventory",
    question: "What type of patients would you prefer to work with?",
    options: ["Children", "Elderly", "Critical Care", "General Population"]
  },
  {
    category: "Interest Inventory",
    question: "Which medical technology are you most excited about?",
    options: ["Robotic Surgery", "Genetic Testing", "Telemedicine", "Artificial Intelligence in Diagnostics"]
  },
  {
    category: "Interest Inventory",
    question: "What area of the human body intrigues you the most?",
    options: ["Brain and Nervous System", "Heart and Circulatory System", "Digestive System", "Musculoskeletal System"]
  },
  {
    category: "Interest Inventory",
    question: "Which type of medical procedures do you find most interesting?",
    options: ["Surgical Procedures", "Diagnostic Imaging", "Therapeutic Treatments", "Preventive Care"]
  },
  {
    category: "Interest Inventory",
    question: "What aspect of patient care do you enjoy most?",
    options: ["Diagnosis", "Treatment Planning", "Patient Education", "Follow-up Care"]
  },
  {
    category: "Interest Inventory",
    question: "Which medical setting appeals to you most?",
    options: ["Emergency Room", "Operating Room", "Outpatient Clinic", "Intensive Care Unit"]
  },
  {
    category: "Interest Inventory",
    question: "What type of medical challenges excite you?",
    options: ["Rare Diseases", "Chronic Conditions", "Acute Emergencies", "Preventive Medicine"]
  },
  {
    category: "Interest Inventory",
    question: "Which area of medical research interests you most?",
    options: ["Drug Development", "Disease Prevention", "Medical Devices", "Genetic Therapies"]
  },
  {
    category: "Interest Inventory",
    question: "What type of medical writing interests you most?",
    options: ["Research Papers", "Patient Education Materials", "Medical Journalism", "Clinical Guidelines"]
  },
  {
    category: "Interest Inventory",
    question: "Which aspect of public health intrigues you most?",
    options: ["Epidemiology", "Health Policy", "Environmental Health", "Global Health"]
  },

  // 2. Personality Traits (12 questions)
  {
    category: "Personality Traits",
    question: "How do you typically handle stressful situations?",
    options: ["Stay calm and focused", "Seek support from others", "Take a step back and analyze", "Act quickly to resolve"]
  },
  {
    category: "Personality Traits",
    question: "How do you prefer to work?",
    options: ["Independently", "In a team", "With a partner", "Mixture of team and individual work"]
  },
  {
    category: "Personality Traits",
    question: "How do you approach new challenges?",
    options: ["With excitement and enthusiasm", "With caution and planning", "With confidence in my abilities", "With a desire to learn and grow"]
  },
  {
    category: "Personality Traits",
    question: "How do you usually interact with others?",
    options: ["Outgoing and talkative", "Reserved and thoughtful", "Adaptable to the situation", "Direct and to-the-point"]
  },
  {
    category: "Personality Traits",
    question: "How do you handle criticism?",
    options: ["See it as an opportunity to improve", "Become defensive", "Analyze it objectively", "Seek clarification and feedback"]
  },
  {
    category: "Personality Traits",
    question: "How do you approach deadlines?",
    options: ["Work steadily towards them", "Thrive under pressure close to the deadline", "Plan extensively to meet them early", "Often need extensions"]
  },
  {
    category: "Personality Traits",
    question: "How do you typically solve problems?",
    options: ["Analytically and systematically", "Creatively and intuitively", "Collaboratively with others", "By researching and gathering information"]
  },
  {
    category: "Personality Traits",
    question: "How do you handle change?",
    options: ["Embrace it as an opportunity", "Resist it initially but adapt", "Analyze its potential impact", "Prefer stability and consistency"]
  },
  {
    category: "Personality Traits",
    question: "How do you approach leadership roles?",
    options: ["Naturally take charge", "Prefer to support a leader", "Lead by example", "Adapt based on the situation"]
  },
  {
    category: "Personality Traits",
    question: "How do you handle ethical dilemmas?",
    options: ["Strictly adhere to rules and regulations", "Consider the greater good", "Seek advice from mentors or colleagues", "Analyze all perspectives before deciding"]
  },
  {
    category: "Personality Traits",
    question: "How do you approach learning new skills?",
    options: ["Eagerly dive in and learn by doing", "Study thoroughly before attempting", "Learn gradually through structured programs", "Prefer to stick with familiar skills"]
  },
  {
    category: "Personality Traits",
    question: "How do you handle failure or setbacks?",
    options: ["See them as learning opportunities", "Become discouraged but eventually recover", "Analyze what went wrong to improve", "Try to avoid situations where failure is possible"]
  },

  // 3. Skills and Competencies (13 questions)
  {
    category: "Skills and Competencies",
    question: "How would you rate your communication skills with patients?",
    options: ["Excellent", "Good", "Average", "Needs improvement"]
  },
  {
    category: "Skills and Competencies",
    question: "How proficient are you in using medical software and technology?",
    options: ["Very proficient", "Moderately proficient", "Somewhat proficient", "Not proficient"]
  },
  {
    category: "Skills and Competencies",
    question: "How would you rate your ability to work in a team?",
    options: ["Excellent", "Good", "Average", "Needs improvement"]
  },
  {
    category: "Skills and Competencies",
    question: "How confident are you in your clinical decision-making skills?",
    options: ["Very confident", "Moderately confident", "Somewhat confident", "Not confident"]
  },
  {
    category: "Skills and Competencies",
    question: "How would you rate your ability to handle medical emergencies?",
    options: ["Excellent", "Good", "Average", "Needs improvement"]
  },
  {
    category: "Skills and Competencies",
    question: "How proficient are you in interpreting medical test results?",
    options: ["Very proficient", "Moderately proficient", "Somewhat proficient", "Not proficient"]
  },
  {
    category: "Skills and Competencies",
    question: "How would you rate your attention to detail in medical procedures?",
    options: ["Excellent", "Good", "Average", "Needs improvement"]
  },
  {
    category: "Skills and Competencies",
    question: "How comfortable are you with performing physical examinations?",
    options: ["Very comfortable", "Moderately comfortable", "Somewhat comfortable", "Not comfortable"]
  },
  {
    category: "Skills and Competencies",
    question: "How would you rate your ability to explain complex medical information to patients?",
    options: ["Excellent", "Good", "Average", "Needs improvement"]
  },
  {
    category: "Skills and Competencies",
    question: "How proficient are you in medical research methodologies?",
    options: ["Very proficient", "Moderately proficient", "Somewhat proficient", "Not proficient"]
  },
  {
    category: "Skills and Competencies",
    question: "How would you rate your ability to maintain patient confidentiality?",
    options: ["Excellent", "Good", "Average", "Needs improvement"]
  },
  {
    category: "Skills and Competencies",
    question: "How comfortable are you with using electronic health record systems?",
    options: ["Very comfortable", "Moderately comfortable", "Somewhat comfortable", "Not comfortable"]
  },
  {
    category: "Skills and Competencies",
    question: "How would you rate your ability to stay updated with the latest medical advancements?",
    options: ["Excellent", "Good", "Average", "Needs improvement"]
  },

  // 4. Work Values (12 questions)
  {
    category: "Work Values",
    question: "How important is work-life balance to you?",
    options: ["Very important", "Moderately important", "Somewhat important", "Not important"]
  },
  {
    category: "Work Values",
    question: "How do you feel about working long or irregular hours?",
    options: ["Willing and able", "Prefer not to, but can if necessary", "Strongly prefer regular hours", "Not willing"]
  },
  {
    category: "Work Values",
    question: "How important is job security to you?",
    options: ["Very important", "Moderately important", "Somewhat important", "Not important"]
  },
  {
    category: "Work Values",
    question: "How do you feel about working in high-pressure environments?",
    options: ["Thrive in high-pressure situations", "Can handle it well", "Prefer lower-pressure environments", "Avoid high-pressure situations"]
  },
  {
    category: "Work Values",
    question: "How important is the opportunity for career advancement to you?",
    options: ["Very important", "Moderately important", "Somewhat important", "Not important"]
  },
  {
    category: "Work Values",
    question: "How do you feel about working in a hierarchical structure?",
    options: ["Prefer clear hierarchies", "Comfortable with some hierarchy", "Prefer flat organizations", "No strong preference"]
  },
  {
    category: "Work Values",
    question: "How important is autonomy in your work?",
    options: ["Very important", "Moderately important", "Somewhat important", "Not important"]
  },
  {
    category: "Work Values",
    question: "How do you feel about working in a competitive environment?",
    options: ["Thrive in competitive environments", "Can handle competition well", "Prefer collaborative environments", "Avoid competitive situations"]
  },
  {
    category: "Work Values",
    question: "How important is recognition for your work?",
    options: ["Very important", "Moderately important", "Somewhat important", "Not important"]
  },
  {
    category: "Work Values",
    question: "How do you feel about jobs that require frequent travel?",
    options: ["Enjoy frequent travel", "Open to some travel", "Prefer minimal travel", "Not willing to travel"]
  },
  {
    category: "Work Values",
    question: "How important is the social impact of your work?",
    options: ["Very important", "Moderately important", "Somewhat important", "Not important"]
  },
  {
    category: "Work Values",
    question: "How do you feel about working in a culturally diverse environment?",
    options: ["Greatly value diversity", "Comfortable with diversity", "No strong preference", "Prefer familiar cultural environments"]
  },

  // 5. Motivations (12 questions)
  {
    category: "Motivations",
    question: "What primarily motivates you to pursue a career in medicine?",
    options: ["Helping others", "Scientific curiosity", "Personal or family experiences", "Professional prestige"]
  },
  {
    category: "Motivations",
    question: "What aspect of medical practice do you find most rewarding?",
    options: ["Patient interactions", "Solving complex problems", "Advancing medical knowledge", "Improving public health"]
  },
  {
    category: "Motivations",
    question: "What drives you to excel in your studies or work?",
    options: ["Personal satisfaction", "Desire to help others", "Professional recognition", "Financial rewards"]
  },
  {
    category: "Motivations",
    question: "What type of recognition motivates you most?",
    options: ["Peer recognition", "Patient gratitude", "Academic or professional awards", "Personal sense of achievement"]
  },
  {
    category: "Motivations",
    question: "What aspect of medicine challenges you to grow?",
    options: ["Keeping up with new developments", "Dealing with difficult cases", "Balancing work and personal life", "Navigating healthcare systems"]
  },
  {
    category: "Motivations",
    question: "What long-term goal motivates your career choices?",
    options: ["Becoming a leading expert in a specialty", "Improving healthcare access", "Conducting groundbreaking research", "Achieving work-life balance"]
  },
  {
    category: "Motivations",
    question: "What type of impact do you hope to make in your medical career?",
    options: ["Directly improving patient lives", "Advancing medical knowledge", "Influencing health policy", "Inspiring future medical professionals"]
  },
  {
    category: "Motivations",
    question: "What motivates you to take on leadership roles?",
    options: ["Desire to influence positive change", "Recognition and advancement", "Ability to mentor others", "Improving system efficiency"]
  },
  {
    category: "Motivations",
    question: "What aspect of continuous learning in medicine motivates you?",
    options: ["Staying at the forefront of medical advances", "Personal growth and development", "Providing better patient care", "Meeting professional requirements"]
  },
  {
    category: "Motivations",
    question: "What motivates you to persevere through challenging times in your medical journey?",
    options: ["Passion for medicine", "Support from peers and mentors", "Future career prospects", "Personal resilience and determination"]
  },
  {
    category: "Motivations",
    question: "What aspect of teamwork in healthcare settings motivates you?",
    options: ["Collaborative problem-solving", "Learning from diverse perspectives", "Shared responsibility for patient care", "Efficiency in healthcare delivery"]
  },
  {
    category: "Motivations",
    question: "What motivates you to maintain a high standard of ethical practice?",
    options: ["Personal integrity", "Professional responsibility", "Legal requirements", "Patient trust and respect"]
  },

  // 6. Decision-Making Style (13 questions)
  {
    category: "Decision-Making Style",
    question: "How do you typically approach making important decisions?",
    options: ["Gather all available information", "Trust my instincts", "Consult with others", "Weigh pros and cons"]
  },
  {
    category: "Decision-Making Style",
    question: "When faced with a complex medical case, how do you proceed?",
    options: ["Systematically analyze all aspects", "Focus on the most critical factors", "Collaborate with colleagues", "Rely on past experiences"]
  },
  {
    category: "Decision-Making Style",
    question: "How do you handle making decisions under time pressure?",
    options: ["Quickly assess and act", "Prioritize key factors", "Seek quick input from others", "Rely on established"]
    },
      // 6. Decision-Making Style (continued)
  {
    category: "Decision-Making Style",
    question: "How do you handle making decisions under time pressure?",
    options: ["Quickly assess and act", "Prioritize key factors", "Seek quick input from others", "Rely on established protocols"]
  },
  {
    category: "Decision-Making Style",
    question: "When making ethical decisions, what is your primary consideration?",
    options: ["Patient's best interest", "Professional guidelines", "Legal implications", "Personal moral compass"]
  },
  {
    category: "Decision-Making Style",
    question: "How do you approach decisions with uncertain outcomes?",
    options: ["Carefully weigh risks and benefits", "Seek more information", "Trust clinical experience", "Consult with specialists"]
  },
  {
    category: "Decision-Making Style",
    question: "When faced with conflicting opinions, how do you make a decision?",
    options: ["Evaluate each perspective objectively", "Go with the majority opinion", "Rely on the most experienced viewpoint", "Synthesize a compromise"]
  },
  {
    category: "Decision-Making Style",
    question: "How do you handle the emotional aspects of medical decision-making?",
    options: ["Separate emotions from facts", "Consider emotions as part of the decision", "Focus solely on clinical data", "Seek emotional support if needed"]
  },
  {
    category: "Decision-Making Style",
    question: "When making decisions about patient care, how much do you involve the patient?",
    options: ["Fully involve patient in all decisions", "Involve patient in major decisions", "Inform patient of decisions made", "Decide based on medical expertise"]
  },
  {
    category: "Decision-Making Style",
    question: "How do you approach decisions about adopting new medical technologies or treatments?",
    options: ["Eagerly adopt proven innovations", "Cautiously evaluate before adopting", "Wait for widespread acceptance", "Stick with tried-and-true methods"]
  },
  {
    category: "Decision-Making Style",
    question: "When making decisions about resource allocation, what is your primary consideration?",
    options: ["Maximum benefit for the most patients", "Individual patient needs", "Cost-effectiveness", "Equitable distribution"]
  },
  {
    category: "Decision-Making Style",
    question: "How do you handle decisions when there's incomplete information?",
    options: ["Make the best decision with available info", "Delay until more information is available", "Use clinical judgment to fill gaps", "Consult with colleagues"]
  },
  {
    category: "Decision-Making Style",
    question: "When faced with a decision that contradicts hospital policy, how do you proceed?",
    options: ["Follow policy strictly", "Evaluate if exception is warranted", "Consult with superiors", "Advocate for policy change"]
  },

  // 7. Interpersonal Skills (13 questions)
  {
    category: "Interpersonal Skills",
    question: "How do you typically handle conflicts with colleagues?",
    options: ["Address issues directly", "Seek mediation", "Try to avoid conflicts", "Compromise to maintain harmony"]
  },
  {
    category: "Interpersonal Skills",
    question: "How do you approach building rapport with patients?",
    options: ["Active listening", "Showing empathy", "Clear communication", "Respecting cultural differences"]
  },
  {
    category: "Interpersonal Skills",
    question: "How do you handle difficult or angry patients?",
    options: ["Stay calm and professional", "Try to understand their perspective", "Involve a supervisor if necessary", "Set clear boundaries"]
  },
  {
    category: "Interpersonal Skills",
    question: "How do you collaborate with healthcare professionals from other disciplines?",
    options: ["Actively seek their input", "Respect their expertise", "Clearly communicate your perspective", "Focus on common goals"]
  },
  {
    category: "Interpersonal Skills",
    question: "How do you approach giving constructive feedback to colleagues or subordinates?",
    options: ["Direct and honest", "Sandwich method (positive-negative-positive)", "Focus on behavior, not personality", "Avoid giving negative feedback"]
  },
  {
    category: "Interpersonal Skills",
    question: "How do you handle situations where you disagree with a superior's decision?",
    options: ["Respectfully voice your concerns", "Accept the decision without question", "Seek to understand their reasoning", "Document your disagreement"]
  },
  {
    category: "Interpersonal Skills",
    question: "How do you approach working with colleagues from different cultural backgrounds?",
    options: ["Learn about their culture", "Treat everyone the same", "Adapt your communication style", "Seek guidance on cultural norms"]
  },
  {
    category: "Interpersonal Skills",
    question: "How do you handle receiving criticism or negative feedback?",
    options: ["View it as an opportunity to improve", "Defend your actions", "Reflect on the feedback", "Seek clarification"]
  },
  {
    category: "Interpersonal Skills",
    question: "How do you approach explaining complex medical information to patients?",
    options: ["Use simple language", "Use visual aids", "Check for understanding", "Provide written information"]
  },
  {
    category: "Interpersonal Skills",
    question: "How do you handle situations where a patient's family is involved in their care?",
    options: ["Involve family with patient's consent", "Maintain patient confidentiality", "Educate family members", "Mediate family conflicts"]
  },
  {
    category: "Interpersonal Skills",
    question: "How do you approach building trust with patients?",
    options: ["Be consistently reliable", "Show empathy and understanding", "Be transparent about treatment", "Respect patient autonomy"]
  },
  {
    category: "Interpersonal Skills",
    question: "How do you handle communication in high-stress medical situations?",
    options: ["Remain calm and focused", "Use clear, concise language", "Assign clear roles and tasks", "Encourage team input"]
  },
  {
    category: "Interpersonal Skills",
    question: "How do you approach mentoring or teaching junior colleagues?",
    options: ["Lead by example", "Provide regular feedback", "Encourage questions and discussion", "Assign challenging tasks"]
  },

  // 8. Learning Preferences (12 questions)
  {
    category: "Learning Preferences",
    question: "How do you prefer to learn new medical information?",
    options: ["Reading textbooks and journals", "Attending lectures and seminars", "Hands-on practice", "Online courses and videos"]
  },
  {
    category: "Learning Preferences",
    question: "What type of learning environment do you prefer?",
    options: ["Quiet and solitary", "Interactive group settings", "One-on-one mentoring", "Mixed environments"]
  },
  {
    category: "Learning Preferences",
    question: "How do you best retain new information?",
    options: ["Taking detailed notes", "Discussing with peers", "Teaching others", "Applying in practical situations"]
  },
  {
    category: "Learning Preferences",
    question: "What is your preferred method for staying updated with medical advancements?",
    options: ["Reading medical journals", "Attending conferences", "Participating in online forums", "Discussing with colleagues"]
  },
  {
    category: "Learning Preferences",
    question: "How do you approach learning new medical procedures?",
    options: ["Observe then practice", "Study theory then apply", "Jump in and learn by doing", "Gradual, step-by-step approach"]
  },
  {
    category: "Learning Preferences",
    question: "What type of feedback do you find most helpful when learning?",
    options: ["Detailed written feedback", "Immediate verbal feedback", "Demonstration of correct technique", "Self-reflection and self-assessment"]
  },
  {
    category: "Learning Preferences",
    question: "How do you prefer to prepare for medical examinations or assessments?",
    options: ["Intensive self-study", "Group study sessions", "Practice questions and mock exams", "Reviewing with a mentor"]
  },
  {
    category: "Learning Preferences",
    question: "What is your approach to learning from medical errors or near-misses?",
    options: ["Analyze in detail", "Discuss in group settings", "Reflect personally", "Create systemic changes"]
  },
  {
    category: "Learning Preferences",
    question: "How do you prefer to learn about new medical technologies?",
    options: ["Hands-on training sessions", "Reading manuals and guides", "Watching demonstration videos", "Trial and error"]
  },
  {
    category: "Learning Preferences",
    question: "What is your preferred method for improving your clinical reasoning skills?",
    options: ["Analyzing case studies", "Discussing with experienced clinicians", "Practicing with simulations", "Reflecting on own clinical experiences"]
  },
  {
    category: "Learning Preferences",
    question: "How do you approach learning in multidisciplinary settings?",
    options: ["Actively seek diverse perspectives", "Focus on your specific area", "Rotate through different specialties", "Collaborate on interdisciplinary projects"]
  },
  {
    category: "Learning Preferences",
    question: "What is your preferred way of learning about medical ethics and professionalism?",
    options: ["Studying ethical guidelines", "Discussing case scenarios", "Observing role models", "Reflecting on personal experiences"]
  }
];

export default questions;