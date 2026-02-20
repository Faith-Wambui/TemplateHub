// ============================================
// templates.js — Full Template Registry (49 templates)
// Based on DPro Guides (PM4NGOs)
// ============================================

const TEMPLATES = [

  // ─── MEAL TEMPLATES (14) ────────────────────────────

  {
    id: "meal-01",
    name: "Theory of Change",
    description: "Documents the causal pathway from activities to long-term impact.",
    category: "meal",
    icon: "🔀",
    file: "DPro_Template_Library/MEAL_Templates/01_Theory_of_Change_Template.docx"
  },
  {
    id: "meal-02",
    name: "Results Framework",
    description: "Organises project results into a hierarchy of objectives.",
    category: "meal",
    icon: "🏗️",
    file: "DPro_Template_Library/MEAL_Templates/02_Results_Framework_Template.docx"
  },
  {
    id: "meal-03",
    name: "Logical Framework (Logframe)",
    description: "Describes project objectives, indicators, ansd assumptions.",
    category: "meal",
    icon: "🧩",
    file: "DPro_Template_Library/MEAL_Templates/03_Logframe_Template.docx"
  },
  {
    id: "meal-04",
    name: "Performance Management Plan (PMP)",
    description: "Detailed MEAL planning tool with indicator tracking.",
    category: "meal",
    icon: "🎯",
    file: "DPro_Template_Library/MEAL_Templates/04_Performance_Management_Plan_Template.docx"
  },
  {
    id: "meal-05",
    name: "Indicator Tracking Table",
    description: "Tracks indicator performance against targets.",
    category: "meal",
    icon: "📊",
    file: "DPro_Template_Library/MEAL_Templates/05_Indicator_Tracking_Table.docx"
  },
  {
    id: "meal-06",
    name: "Feedback and Response Mechanism",
    description: "Documents feedback channels and response protocols.",
    category: "meal",
    icon: "🔔",
    file: "DPro_Template_Library/MEAL_Templates/06_Feedback_Response_Mechanism.docx"
  },
  {
    id: "meal-07",
    name: "Learning Plan",
    description: "Plans learning activities and key learning questions.",
    category: "meal",
    icon: "🧠",
    file: "DPro_Template_Library/MEAL_Templates/07_Learning_Plan_Template.docx"
  },
  {
    id: "meal-08",
    name: "Evaluation Terms of Reference",
    description: "Defines scope and requirements for evaluations.",
    category: "meal",
    icon: "📜",
    file: "DPro_Template_Library/MEAL_Templates/08_Evaluation_Terms_of_Reference.docx"
  },
  {
    id: "meal-09",
    name: "Data Collection Tools",
    description: "Templates for questionnaires and FGD guides.",
    category: "meal",
    icon: "🗂️",
    file: "DPro_Template_Library/MEAL_Templates/09_Data_Collection_Tools.docx"
  },
  {
    id: "meal-10",
    name: "Progress Report",
    description: "Standard format for progress reporting to donors and stakeholders.",
    category: "meal",
    icon: "📈",
    file: "DPro_Template_Library/MEAL_Templates/10_Progress_Report_Template.docx"
  },
  {
    id: "meal-11",
    name: "Summary Evaluation Table",
    description: "Overview of planned evaluations across the programme cycle.",
    category: "meal",
    icon: "🗓️",
    file: "DPro_Template_Library/MEAL_Templates/11_Summary_Evaluation_Table.docx"
  },
  {
    id: "meal-12",
    name: "MEAL Communications Plan",
    description: "Plans information sharing with stakeholders.",
    category: "meal",
    icon: "📡",
    file: "DPro_Template_Library/MEAL_Templates/12_MEAL_Communications_Plan.docx"
  },
  {
    id: "meal-13",
    name: "Sampling Plan",
    description: "Documents sampling methodology for data collection.",
    category: "meal",
    icon: "🔬",
    file: "DPro_Template_Library/MEAL_Templates/13_Sampling_Plan.docx"
  },
  {
    id: "meal-14",
    name: "Data Analysis Plan",
    description: "Plans data analysis approach, methods, and tools.",
    category: "meal",
    icon: "🧮",
    file: "DPro_Template_Library/MEAL_Templates/14_Data_Analysis_Plan.docx"
  },

  // ─── PROJECT MANAGEMENT TEMPLATES (15) ─────────────

  {
    id: "pm-01",
    name: "Project Charter",
    description: "Authorises the project and defines high-level scope and governance.",
    category: "project-management",
    icon: "📋",
    file: "DPro_Template_Library/Project_Templates/01_Project_Charter.docx"
  },
  {
    id: "pm-02",
    name: "Stakeholder Analysis",
    description: "Analyses stakeholder interests, influence, and engagement strategy.",
    category: "project-management",
    icon: "🧭",
    file: "DPro_Template_Library/Project_Templates/02_Stakeholder_Analysis.docx"
  },
  {
    id: "pm-03",
    name: "Risk Register",
    description: "Tracks project risks, likelihood, impact, and mitigation strategies.",
    category: "project-management",
    icon: "⚠️",
    file: "DPro_Template_Library/Project_Templates/03_Risk_Register.docx"
  },
  {
    id: "pm-04",
    name: "Project Proposal",
    description: "Comprehensive project funding proposal for donors.",
    category: "project-management",
    icon: "✍️",
    file: "DPro_Template_Library/Project_Templates/04_Project_Proposal.docx"
  },
  {
    id: "pm-05",
    name: "Implementation Plan",
    description: "Gantt chart and activity schedule for project delivery.",
    category: "project-management",
    icon: "📅",
    file: "DPro_Template_Library/Project_Templates/05_Implementation_Plan.docx"
  },
  {
    id: "pm-06",
    name: "RACI Matrix",
    description: "Defines roles and responsibilities across project activities.",
    category: "project-management",
    icon: "👥",
    file: "DPro_Template_Library/Project_Templates/06_RACI_Matrix.docx"
  },
  {
    id: "pm-07",
    name: "Issue Log",
    description: "Tracks and manages project issues and resolution actions.",
    category: "project-management",
    icon: "🔧",
    file: "DPro_Template_Library/Project_Templates/07_Issue_Log.docx"
  },
  {
    id: "pm-08",
    name: "Change Request Form",
    description: "Documents and processes change requests during project delivery.",
    category: "project-management",
    icon: "🔄",
    file: "DPro_Template_Library/Project_Templates/08_Change_Request_Form.docx"
  },
  {
    id: "pm-09",
    name: "Project Closure Checklist",
    description: "Ensures all activities are completed and documented at project closure.",
    category: "project-management",
    icon: "✅",
    file: "DPro_Template_Library/Project_Templates/09_Project_Closure_Checklist.docx"
  },
  {
    id: "pm-10",
    name: "Lessons Learned",
    description: "Captures project lessons and recommendations for future projects.",
    category: "project-management",
    icon: "💡",
    file: "DPro_Template_Library/Project_Templates/10_Lessons_Learned.docx"
  },
  {
    id: "pm-11",
    name: "Communication Plan",
    description: "Plans stakeholder communications, frequency, channels, and owners.",
    category: "project-management",
    icon: "📣",
    file: "DPro_Template_Library/Project_Templates/11_Communication_Plan.docx"
  },
  {
    id: "pm-12",
    name: "Problem Tree",
    description: "Analyses root causes and effects of the core problem.",
    category: "project-management",
    icon: "🌳",
    file: "DPro_Template_Library/Project_Templates/12_Problem_Tree.docx"
  },
  {
    id: "pm-13",
    name: "Objectives Tree",
    description: "Transforms identified problems into positive project objectives.",
    category: "project-management",
    icon: "🌱",
    file: "DPro_Template_Library/Project_Templates/13_Objectives_Tree.docx"
  },
  {
    id: "pm-14",
    name: "Project Budget",
    description: "Detailed project budget template with budget lines and variance tracking.",
    category: "project-management",
    icon: "💰",
    file: "DPro_Template_Library/Project_Templates/14_Project_Budget.docx"
  },
  {
    id: "pm-15",
    name: "Supply Chain Plan",
    description: "Plans procurement, logistics, and supply chain management.",
    category: "project-management",
    icon: "🚚",
    file: "DPro_Template_Library/Project_Templates/15_Supply_Chain_Plan.docx"
  },

  // ─── PROGRAM MANAGEMENT TEMPLATES (20) ─────────────

  {
    id: "pgm-01",
    name: "Program Concept Document",
    description: "Initial concept document for designing a new program.",
    category: "program-management",
    icon: "💭",
    file: "DPro_Template_Library/Program_Templates/01_Program_Concept_Document.docx"
  },
  {
    id: "pgm-02",
    name: "Program Charter",
    description: "Authorises the program and defines its scope, governance, and mandate.",
    category: "program-management",
    icon: "🏛️",
    file: "DPro_Template_Library/Program_Templates/02_Program_Charter.docx"
  },
  {
    id: "pgm-03",
    name: "Program Logframe",
    description: "Logical framework at program level linking goals to outcomes and outputs.",
    category: "program-management",
    icon: "🌐",
    file: "DPro_Template_Library/Program_Templates/03_Program_Logframe.docx"
  },
  {
    id: "pgm-04",
    name: "Program M&E Framework",
    description: "Monitoring and evaluation framework for program-level results.",
    category: "program-management",
    icon: "📐",
    file: "DPro_Template_Library/Program_Templates/04_Program_ME_Framework.docx"
  },
  {
    id: "pgm-05",
    name: "SWOT Analysis",
    description: "Analyses program strengths, weaknesses, opportunities, and threats.",
    category: "program-management",
    icon: "⚖️",
    file: "DPro_Template_Library/Program_Templates/05_SWOT_Analysis.docx"
  },
  {
    id: "pgm-06",
    name: "Power Mapping",
    description: "Maps stakeholder power and influence to guide engagement strategy.",
    category: "program-management",
    icon: "🗺️",
    file: "DPro_Template_Library/Program_Templates/06_Power_Mapping.docx"
  },
  {
    id: "pgm-07",
    name: "Program Org Structure",
    description: "Defines the organisational structure and reporting lines of the program.",
    category: "program-management",
    icon: "🏢",
    file: "DPro_Template_Library/Program_Templates/07_Program_Org_Structure.docx"
  },
  {
    id: "pgm-08",
    name: "Resource Mobilization Plan",
    description: "Plans fundraising strategies and resource acquisition for the program.",
    category: "program-management",
    icon: "🤲",
    file: "DPro_Template_Library/Program_Templates/08_Resource_Mobilization_Plan.docx"
  },
  {
    id: "pgm-09",
    name: "Sustainability Plan",
    description: "Plans for long-term sustainability of program outcomes beyond funding.",
    category: "program-management",
    icon: "♻️",
    file: "DPro_Template_Library/Program_Templates/09_Sustainability_Plan.docx"
  },
  {
    id: "pgm-10",
    name: "Program Closure Checklist",
    description: "Ensures all program activities are properly closed and documented.",
    category: "program-management",
    icon: "🔐",
    file: "DPro_Template_Library/Program_Templates/10_Program_Closure_Checklist.docx"
  },
  {
    id: "pgm-11",
    name: "Learning Log",
    description: "Documents ongoing learning throughout the program cycle.",
    category: "program-management",
    icon: "📓",
    file: "DPro_Template_Library/Program_Templates/11_Learning_Log.docx"
  },
  {
    id: "pgm-12",
    name: "Decision Gate Documentation",
    description: "Records stage-gate decisions and criteria for program progression.",
    category: "program-management",
    icon: "🚦",
    file: "DPro_Template_Library/Program_Templates/12_Decision_Gate_Documentation.docx"
  },
  {
    id: "pgm-13",
    name: "Portfolio Review",
    description: "Reviews the status of component projects within the program portfolio.",
    category: "program-management",
    icon: "🗃️",
    file: "DPro_Template_Library/Program_Templates/13_Portfolio_Review.docx"
  },
  {
    id: "pgm-14",
    name: "Context Analysis",
    description: "Analyses the political, social, and economic context of the program.",
    category: "program-management",
    icon: "🔭",
    file: "DPro_Template_Library/Program_Templates/14_Context_Analysis.docx"
  },
  {
    id: "pgm-15",
    name: "Needs Analysis",
    description: "Analyses beneficiary needs to inform program design and priorities.",
    category: "program-management",
    icon: "🩺",
    file: "DPro_Template_Library/Program_Templates/15_Needs_Analysis.docx"
  },
  {
    id: "pgm-16",
    name: "Program Budget",
    description: "Program-level budget template covering all components and cost centres.",
    category: "program-management",
    icon: "🏦",
    file: "DPro_Template_Library/Program_Templates/16_Program_Budget.docx"
  },
  {
    id: "pgm-17",
    name: "Program Risk Analysis",
    description: "Analyses program-level risks across all components and contexts.",
    category: "program-management",
    icon: "🛡️",
    file: "DPro_Template_Library/Program_Templates/17_Program_Risk_Analysis.docx"
  },
  {
    id: "pgm-18",
    name: "Program Gantt Chart",
    description: "Program milestone and project timeline across the full program cycle.",
    category: "program-management",
    icon: "📆",
    file: "DPro_Template_Library/Program_Templates/18_Program_Gantt_Chart.docx"
  },
  {
    id: "pgm-19",
    name: "Program Stakeholder Analysis",
    description: "Program-level stakeholder analysis covering all components and partners.",
    category: "program-management",
    icon: "🤝",
    file: "DPro_Template_Library/Program_Templates/19_Program_Stakeholder_Analysis.docx"
  },
  {
    id: "pgm-20",
    name: "Stage Planning",
    description: "Plans activities, resources, and milestones for each program stage.",
    category: "program-management",
    icon: "🪜",
    file: "DPro_Template_Library/Program_Templates/20_Stage_Planning.docx"
  }

];
