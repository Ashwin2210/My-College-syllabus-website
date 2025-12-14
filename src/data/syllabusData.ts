export interface Subject {
  code: string;
  title: string;
  semester: number;
  units: {
    title: string;
    content: string;
  }[];
}

export interface Semester {
  number: number;
  subjects: Subject[];
}

export const syllabusData: Semester[] = [
  {
    number: 1,
    subjects: [
      {
        code: "23UIASM01",
        title: "Financial Accounting and IFRS",
        semester: 1,
        units: [
          {
            title: "UNIT I: Fundamentals of Financial Accounting (Theory only)",
            content: "Accounting - Objectives - Limitations - Person interested in accounting information - Accounting Concept and Convention - Single entry VS double entry system - Depreciation - Causes Need for depreciation - Methods of Depreciation - Form of Business: Branch Vs Departmental accounting – Hire Purchase and Installment System – Partnership – Bill of exchange. Accounting Cycle: (Problem) Journal – Subsidiary Book – Ledger – Preparation of Trial Balance."
          },
          {
            title: "UNIT II: Preparation of Final Accounts",
            content: "Provision for doubtful debts – Accrued income – Income received in advance – Prepaid expenses – Outstanding expenses – Writing off fictitious assets. Rectification & Reconciliation: Errors - Type of Errors - Rectification of errors - Single sided and Double-sided Errors - Preparation of Bank Reconciliation System."
          },
          {
            title: "UNIT III: Accounting for Non-Profit Organization",
            content: "Capital Income Expenditure and Revenue Income and Expenditure - Receipt and Payment account – Income and expenditure account – Balance sheet."
          },
          {
            title: "UNIT IV: Accounting Standards",
            content: "Objective of Accounting Standards – Ind. AS Vs IAS - Classification of Enterprises – Applicability of Accounting Standards – AS1 to AS 29."
          },
          {
            title: "UNIT V: IFRS",
            content: "Objectives – Importance – Uses of IFRS - Standard IFRS Requirements – GAAP Vs IFRS – IFRS 1 to 17 – XBRL."
          }
        ]
      },
      {
        code: "23UISAL01",
        title: "Managerial Behaviour",
        semester: 1,
        units: [
          {
            title: "UNIT I: Introduction To Management",
            content: "Meaning - Definition - Nature - Function - Levels - Management and Administration - Fayol's Principles of Management. Planning: Meaning - Definition – Nature of Planning - Importance – Types of Plans - Planning Process - MBO - Features – Merits and Demerits."
          },
          {
            title: "UNIT II: Organizing",
            content: "Concept, Nature, Process and Significance - Departmentalization Authority and Responsibility; Delegation and Decentralization; Formal and Informal Organization - Span of Control. Directing: Features - Techniques - Motivation: Nature and Importance - Types, Maslow, Herzberg and Mc Gregor's X & Y Theories of Motivation - Leadership - Importance; Qualities of Good Leader - Leadership Styles: Autocratic - Democratic - Laissez Faire."
          },
          {
            title: "UNIT III: Co-Ordination",
            content: "Characteristics - Importance - Techniques - Types – Steps of Coordination Control: Features - Importance - Techniques - Steps in controlling Process - MBE."
          },
          {
            title: "UNIT IV: Organizational Behaviour",
            content: "Characteristics, Nature, Key Elements of OB, Models of OB; Group Behaviour: Types of Groups - Group Norms - Group Cohesiveness - Group Decision Making - Organizational Conflicts - Organizational Climate & Culture Comparison of Organizational Culture and Climate – Moonlighting – Work life Balance."
          },
          {
            title: "UNIT V: Individual Behaviour",
            content: "Factors Influencing Individual Behaviour Personality - Perception - Attitudes and Values. Swami Vivekananda's Thoughts on Management: Swami Vivekananda and Management Leadership and Organization - Self Motivation - Eight Corporate lessons from Swami Vivekananda life."
          }
        ]
      },
      {
        code: "23UISAM02",
        title: "Programming with C & C++ (T+P)",
        semester: 1,
        units: [
          {
            title: "UNIT I: Introduction to C",
            content: "C Fundamentals - C Tokens - Keywords and Identifiers - Constants Variables - Datatypes - Operators - Expression - Managing Input and Output Operations, Conditional Statements, Looping Statements."
          },
          {
            title: "UNIT II: Arrays",
            content: "Types of Arrays, Functions & Types Of Functions, Storage Classes, Structures, Union, Pointers, Files & Error Handling."
          },
          {
            title: "UNIT III: Introduction to C++",
            content: "C++ Fundamentals - Managing Input and Output Operations. OOPS: Basic Concepts - Benefits - Applications - Classes and Objects - Access Specifies - Array of Classes."
          },
          {
            title: "UNIT IV: Constructors",
            content: "Functions - Operator Overloading - Inheritance with types."
          },
          {
            title: "UNIT V: Polymorphism",
            content: "Types - Templates - Exception Handling."
          }
        ]
      }
    ]
  },
  {
    number: 2,
    subjects: [
      {
        code: "25UISAM03",
        title: "Human Resource Management and Industrial Relation",
        semester: 2,
        units: [
          {
            title: "UNIT I: Introduction to Human Resource Management",
            content: "Features – Scope – Functions - Evolution. Human Resource Planning: Job Description – Job Analysis – Job Specification - Recruitment - Sources of Recruitment – Process of Selection - Methods of Selection."
          },
          {
            title: "UNIT II: Training",
            content: "Meaning - Objectives - Methods – Training and Development Appraisal: Performance Appraisal - Objectives - Method – Promotion and Transfer."
          },
          {
            title: "UNIT III: Strategic Human Resource Management",
            content: "Nature, Objectives, Importance of SHRM, Barriers to SHRM - Overcoming Barriers of SHRM - Traditional vs Strategic HR - Green HRM. E-HRM - Needs, Objective, Types, E-HRM Activities, Advantages and Disadvantages."
          },
          {
            title: "UNIT IV: Industrial Relation",
            content: "Concept - Nature - Objectives - Parties of Industrial Relations Industrial Dispute and Settlement: Objectives and Functions of Trade Union - Collective Bargaining, Meaning, Nature and Methods - Workers Participation in Management."
          },
          {
            title: "UNIT V: Labour Welfare",
            content: "Industrial Health and Hygiene - Industrial Accidents and Safety Occupational Diseases Social Security - Social Assistance and Social Assurance."
          }
        ]
      },
      {
        code: "23UISAM04",
        title: "Company Accounts and Auditing",
        semester: 2,
        units: [
          {
            title: "UNIT I: Shares",
            content: "Meaning - Types - Procedure for Issue of Shares - Methods of Issues - Debentures - Types of Debentures - Shares Vs Debentures - Procedure for Redemption of Shares and Debentures - Open Market Buying of Shares - Ex-Interest and Cum Interest Purchase of Debentures (only Theory) Goodwill & Shares: Valuation of Shares and Goodwill – Profit Prior to Incorporation."
          },
          {
            title: "UNIT II: Reconstruction of Companies",
            content: "Internal Reconstruction – External Reconstruction Amalgamation - Absorption (only Theory). Holding company: Preparation of Holding Company Accounts - Minority Interest - Capital Reserve."
          },
          {
            title: "UNIT III: Preparation of Financial Statement",
            content: "Preparation of Company Final Account - Preparation of Banking Company Accounts. Liquidation of Companies: Order of Payment - Liquidators Statement of Accounts."
          },
          {
            title: "UNIT IV: Auditing",
            content: "Meaning and Objectives of Auditing - Types of Audits - Internal Check - Internal Audit - Audit Process. Audit Plan: Audit Programme - Audit Note Book - Working Papers and Evidence - Preparation Before Commencing of Audit."
          },
          {
            title: "UNIT V: Audit of Company Accounts",
            content: "Vouching - Techniques of Vouching - Verification of Assets and Liabilities - Appointment of Company Auditor: Qualification - Powers - Rights Duties - Liabilities."
          }
        ]
      },
      {
        code: "24UISAL02",
        title: "JAVA Programming (T+P)",
        semester: 2,
        units: [
          {
            title: "UNIT I: Introduction to Java",
            content: "Features of Java - Object Oriented Concepts – Lexical Issues – Datatypes - Variables - Arrays - Operators - Control Statements."
          },
          {
            title: "UNIT II: Classes and Objects",
            content: "Classes - Objects - Constructors – Overloading methods - Access Control - Static and fixed methods – Inner Classes – String Class - Inheritance – Over riding methods - Using super Abstract class."
          },
          {
            title: "UNIT III: Packages and Interfaces",
            content: "Packages - Access Protection – Importing Packages - interfaces – Exception Handling - Throw and Throws - Thread - Synchronization - Messaging - Runnable Interface - Inter thread Communication - Deadlock - Suspending, Resuming and stopping threads - Multithreading."
          },
          {
            title: "UNIT IV: I/O Streams",
            content: "I/O Streams – File Streams - Applets – String Objects – String Buffer – Char Array - Java Utilities - Code Documentation."
          },
          {
            title: "UNIT V: Networks and GUI",
            content: "Networks basics – Socket Programming - Proxy Servers - TCP/IP Sockets - Net Address URL - Datagrams - Working with windows using AWT Classes - AWT Controls - Layout Managers and Menus."
          }
        ]
      }
    ]
  },
  {
    number: 3,
    subjects: [
      {
        code: "25UISAM05",
        title: "Digital Business and Marketing",
        semester: 3,
        units: [
          {
            title: "UNIT I: An Overview of E-Business",
            content: "History and Developments - Characteristics, advantages and disadvantages, adoption, and impact of E-Business - Future challenges and opportunities. Types of e-Transactions - B2B, B2C, C2C, C2B etc., Electronic Store fronts - E Marketplace - Electronic Store fronts, e-Marketplace - Affiliate and Hybrid Models - Use of Social networks for business."
          },
          {
            title: "UNIT II: Payment Systems",
            content: "NFC, payment Service providers - E-Payment gateways - Standards, integration, banking, and legal issues - Banking and dispute resolution policies."
          },
          {
            title: "UNIT III: Marketing",
            content: "Functions - Importance - Advantages - Disadvantages - Unethical practice of Marketing - Modern form of Marketing - Traditional Vs Digital - Social Media Marketing SEO techniques. Consumer Behaviours: Market Segmentation - Target Marketing - Market Positioning Strategies of Marketing."
          },
          {
            title: "UNIT IV: Marketing Mix",
            content: "Product - Classification - New Product development - Product Life Cycle Product Line and Product Mix - Branding - Packaging - Pricing - Promotion Importance and Types of promotion - Channels of Distribution - Types - Factors Affecting the Choice of a Channel of Distribution."
          },
          {
            title: "UNIT V: Advertising",
            content: "Objectives – Kinds – Factors Determining Advertising – Advantages Limitation. Salesmanship: Meaning - Steps involved in personal selling – Qualities of a salesman - Kinds of salesman."
          }
        ]
      },
      {
        code: "24UISAM06",
        title: "Financial Management and Security Analysis",
        semester: 3,
        units: [
          {
            title: "UNIT I: Financial Management",
            content: "Objectives - Functions – Importance – Scope - Sources of Finance. Capital Structure: Importance - Factors Influencing Capital Structure - Features of Optimum Capital Structure (Theories of Capital structure Excluded)."
          },
          {
            title: "UNIT II: Cost of Capital",
            content: "Significance - Factors determining cost of capital - Cost of Debt – Cost of Preference Capital - Cost of Equity - Cost of Retained Earnings - Weighted Average Cost of Capital. Leverage: Meaning - Computation of Financial, Operating and Combined Leverage."
          },
          {
            title: "UNIT III: Capital Budgeting Decisions",
            content: "Payback Period - Accounting Rate of Return - Discounted Payback Period - Net Present Value - Internal Rate of Return - Profitability Index. Working Capital Management - Concepts of Operating Cycle - Determinants of Working Capital - Estimation of Working Capital."
          },
          {
            title: "UNIT IV: Investment",
            content: "Meaning - Objectives - Advantages - Limitations - Classification - Investment Vs Gambling Vs Speculation - Causes – Role of Stock Exchanges - Stock Market Indices Online Trading. Fundamental & Technical Analysis: Economic Analysis - Industry Analysis Company Analysis – Technical Analysis: Assumptions - Tools - Efficient Market Theory Random Walk Theory."
          },
          {
            title: "UNIT V: Portfolio Construction",
            content: "Process of Portfolio Construction - Markowitz Portfolio Theory. Derivatives: Purpose of Derivative of Marketing - Forward - Futures - Options - Swaps Digital currency – Mechanism – Advantages – Limitations."
          }
        ]
      },
      {
        code: "25UISAM07",
        title: "Relational Database Management System",
        semester: 3,
        units: [
          {
            title: "UNIT I: Introduction to Database System",
            content: "Data Models, Schemas, Instances, the three schema architectures and data independence, Database Languages and interfaces, Database System environment, Centralized and client / Server Architecture for DBMS, Classifications of Database Management Systems."
          },
          {
            title: "UNIT II: Entity Relational Model",
            content: "Definition – Data View - Constraints - Keys - E-R Diagram Weak Entity Set - Extended E-R Features."
          },
          {
            title: "UNIT III: Normalization",
            content: "Introduction - Functional Dependency - First Normal Form - Second Normal Form - Third Normal Form - Boyce Codd Normal Form - Multivalued Dependency - Fourth Normal Form - Good and Bad Decomposition."
          },
          {
            title: "UNIT IV: ORACLE",
            content: "Introduction - SQL: SQL Commands - DDL Commands - DML Commands TCL Commands - Operators. Functions: Single row numeric functions - Single row date functions - Single row conversion functions - Other Single row functions - Aggregate Functions."
          },
          {
            title: "UNIT V: Joins and Sub Queries",
            content: "Joins: Simple Joins - Complex Joins - Multi Table Joins - Cartesian Joins - Outer Joins. Sub Queries: Single Row Sub Queries - Multi Row Sub Queries - Correlated Sub Queries Scalar Sub Queries - Multi Column Sub Queries."
          }
        ]
      },
      {
        code: "25UISAM08",
        title: "Programming using PHP (T+P)",
        semester: 3,
        units: [
          {
            title: "UNIT I: Introduction to PHP Programming",
            content: "Significance, Installation and Configuration, Advantages and Disadvantages of PHP, Client-Side Scripting, Server-Side Scripting, Variables, Datatypes, Various Types of Function, Creating your own Function, Strings In PHP, String Functions."
          },
          {
            title: "UNIT II: Operators and Error Handling",
            content: "Operators, Conditions, Loops, Using for Each, Creating and Using Arrays, Multidimensional Array, Associative Array."
          },
          {
            title: "UNIT III: File System",
            content: "Classes, File System, Passing Information Between Pages Object Oriented Programming With PHP, Working with Date Time, Code Re-Use, require(), Include(), and the Include Path."
          },
          {
            title: "UNIT IV: Understanding PHP",
            content: "File Permissions, File Reading and Writing Functions, File System Functions, File Uploads, Sending Mail & Use of Email Server. HTTP, GET Arguments, POST Arguments."
          },
          {
            title: "UNIT V: Database Connectivity",
            content: "HTML Tables and Database Tables, Database Manipulation, Validating User Input Using JavaScript."
          }
        ]
      },
      {
        code: "24UISAL03",
        title: "Statistics for Business Decision Making",
        semester: 3,
        units: [
          {
            title: "UNIT I: Introduction",
            content: "Introduction - Classification and tabulation of statistical data - Diagrammatic and graphical representation of data. Measures of Central tendency - Mean, Median and Mode."
          },
          {
            title: "UNIT II: Measures of Dispersion",
            content: "Range, Quartile deviation, Mean Deviation, Standard Deviation Measures of Skewness, Karl Pearson's and Bowley's Method."
          },
          {
            title: "UNIT III: Sampling Distribution",
            content: "Hypothesis Testing - One sample and two sample tests for means and proportion of large sample (Z test), One sample and two sample tests for means of small samples (t-test). Non-Parametric Tests: Goodness of fit - Rank sum test. Kolmogorov Smirnov-test for, comparing two populations. Mann-Whitney U test and Kruskal Wallis test One sample run test."
          },
          {
            title: "UNIT IV: Parametric Test",
            content: "F-test for two sample - Chi-square test for single sample standard deviation standard deviations - Chi-square tests for independence of attributes - Goodness of fit - Sign test for paired data."
          },
          {
            title: "UNIT V: Correlation and Regression",
            content: "Correlation - Coefficient of Determination - Karl Pearson's Coefficient of Correlation - Spearman's Rank Correlation - Regression - Estimation of Regression line - Regression Lines and Coefficients - Method of least Squares - Standard Error of estimate."
          }
        ]
      }
    ]
  },
  {
    number: 4,
    subjects: [
      {
        code: "24UISAM09",
        title: "Modern Banking and Financial Services",
        semester: 4,
        units: [
          {
            title: "UNIT I: Overview of Indian Banking System",
            content: "Meaning — Functions of commercial Banks Classification - Functions of Central Bank - Banker and Customer Relationship – CRR – SLR – PLR – REPO – Reverse REPO. Deposit and Loans: Types of Deposits – Forms of lending Bank lending principles – Securities for lending."
          },
          {
            title: "UNIT II: Negotiable Instruments",
            content: "Cheque - Crossing of Cheque - Types - Endorsement of Cheque - Demand draft vs Banker Cheque. Ancillary services: Letter of Credit - Bank Guarantee Discounting of Bills."
          },
          {
            title: "UNIT III: Technology in Banking",
            content: "Core Banking - NEFT - RTGS - SWIFT - IMPS - UPI - Interbank Payment System - Laser Wallet Technology, Cheque Truncation – Debit Vs Credit Cards Mobile and Digital Banking - Fraud Prevention Measures."
          },
          {
            title: "UNIT IV: Financial Services",
            content: "Bill Discounting - Forfeiting - Venture Capital - Leasing - Types Factoring - Types. Credit Rating: Need for Credit Rating - Advantages and Limitations of Credit Rating - Factors Affecting Credit Rating - Credit Rating Agencies in India."
          },
          {
            title: "UNIT V: Forex Market",
            content: "Functions - Significance of Foreign Exchange - Different Type of Exchange Rates - Factors Influencing Exchange Rate - Methods of Controlling Exchange Rate. FERA Vs FEMA - FEDAI - Role of Forex Banks in Export and Import."
          }
        ]
      },
      {
        code: "24UISAM10",
        title: "Cost and Management Accounting",
        semester: 4,
        units: [
          {
            title: "UNIT I: Introduction to Cost and Management Accounting",
            content: "Meaning - Objectives and Scope of Cost and Management Accounting - Cost Vs Management Accounting - Cost Classification Preparation Cost Sheet."
          },
          {
            title: "UNIT II: Material Cost",
            content: "Procedure - EOQ - Fixation of Stock Levels – Stores Ledger - LIFO, FIFO Inventory Management in Tally. Labour Cost: Time Rate System - Piece Rate Systems Taylor - Merrick - Halsey - Gant Task Bonus Plan - Labour Turnover."
          },
          {
            title: "UNIT III: Financial Statement Analysis",
            content: "Meaning of Financial Statement - Importance of Financial Statement Analysis - Techniques of Financial Statement Analysis (Only Theory) Cash Flow Statement - Meaning - Cash flow Vs Fund Flow Statement - Preparation of Cash Flow Statement."
          },
          {
            title: "UNIT IV: Ratio Analysis",
            content: "Meaning – Advantages & Limitations – Classification of Ratios – Profitability Ratios – Turnover Ratios – Liquidity Ratios - Long Term Solvency Ratio."
          },
          {
            title: "UNIT V: Budgeting & Budgetary Control",
            content: "Budgets - Classification of Budgets - Advantages & Limitations of Budgetary Control Preparation of Budgets: Sales - Production - Materials Labour - Overheads – Cash Budget - Fixed & Flexible Budget. Marginal Costing: Definition of Marginal Costing - Features - Assumption - Break Even Analysis - PV Ratio Analysis - Margin of Safety."
          }
        ]
      },
      {
        code: "25UISAM11",
        title: "ASP.NET Programming (T+P)",
        semester: 4,
        units: [
          {
            title: "UNIT I: Introduction .NET Technologies",
            content: "Features of .NET, .NET Framework, CLO, ASP.Net design View, HTML View, and Default Files used in ASP.NET. Concept of Master Pages, Intrinsic Objects of ASP.Net, Structure of ASP.NET Page, Cascading Style Sheet: Embedded, Inline, External."
          },
          {
            title: "UNIT II: Controls in ASP.NET",
            content: "Overview of Dynamic Web Page, Understanding ASP.NET Controls, Applications, Web Servers, Installation of IIS. Web Forms, Web Form Controls - Server Controls, Client Controls. Web Form Controls, Validation Client-Side Validation, Server Side Validation, Validation Controls."
          },
          {
            title: "UNIT III: Overview of ADO.NET and XML",
            content: "ADO.NET Architecture and Connectivity, Accessing Data Using Data Adapters and Datasets, Using Command & Data Reader, Binding Data to Data Bind Controls, Displaying Data in Data Grid, XML Basics, Attributes, Fundamental XML Classes, XML Validations, XML in ADO.NET, The XML Data Document, Data Binding and its Types."
          },
          {
            title: "UNIT IV: ASP.NET Applications",
            content: "Creating, Tracking, Caching, Error Handling, Securing ASP.NET Applications - Form Based Applications, Window-Based Application."
          },
          {
            title: "UNIT V: Web Services",
            content: "Introduction, State Management - View State, Session State, Application State, Building ASP.NET Web Services, Working With ASP.NET Applications, Creating Custom Controls, Invoking COM/COM+, ActiveX Components."
          }
        ]
      },
      {
        code: "25UISAM12",
        title: "Cloud Computing & Internet of Things",
        semester: 4,
        units: [
          {
            title: "UNIT I: Introduction",
            content: "Cloud - definition, benefits, usage scenarios, History of Cloud Computing Cloud Architecture Types of Clouds - Business models around Clouds - Major Players in Cloud Computing - issues in Clouds."
          },
          {
            title: "UNIT II: Cloud Services",
            content: "Types of Cloud services: Software as a Service - Platform as a Service - Infrastructure as a Service - Database as a Service - Monitoring as a Service Communication as services. Service providers - Google, Amazon, Microsoft Azure, IBM, Sales force."
          },
          {
            title: "UNIT III: Collaborating Using Cloud Services",
            content: "Email Communication over the Cloud - CRM Management - Project Management - Event Management - Task Management Calendar - Schedules - Word Processing - Presentation Spreadsheet - Databases - Desktop - Social Networks and Groupware."
          },
          {
            title: "UNIT IV: IOT Architecture",
            content: "Open-source architecture (OIC) - OIC Architecture & Design principles IOT Devices and deployment models."
          },
          {
            title: "UNIT V: IOT Applications",
            content: "IOT applications for industry: Future Factory Concepts, Brownfield IOT, Smart Objects, and Smart applications. Study of existing IOT platforms/middleware, IOT."
          }
        ]
      },
      {
        code: "24UISAL04",
        title: "Quantitative Techniques and Aptitude",
        semester: 4,
        units: [
          {
            title: "UNIT I: Number Ability",
            content: "Decimals - Fractions – Division Method - Simplification - Unit Place Concept - Odd/Even Concept - LCM & HCF - Surds - Average - Percentage - Sequence and Series – Problems on Numbers - Problems on Age."
          },
          {
            title: "UNIT II: Quantitative Ability (Applied & Engineering Mathematics)",
            content: "Logarithm - Permutation and Combinations - Probability - Simple and Compound Interest - Time, Speed and Distance Time & Work - Ratio and Proportion - Area - Mixtures and Allegation."
          },
          {
            title: "UNIT III: Logical Reasoning (Deductive Reasoning)",
            content: "Analogy - Blood Relation - Directional Sense Number and Letter Series - Seating Arrangements - Coding - Decoding - Calendars - Clocks - Venn Diagrams - Seating Arrangement - Syllogism - Mathematical Operations."
          },
          {
            title: "UNIT IV: Reasoning and General Intelligence",
            content: "Cause and Effect – Statement and Assumptions Statement and Conclusions."
          },
          {
            title: "UNIT V: Accounting Aptitude",
            content: "Profit, Loss and Discount - Simple Interest - Compound Interest Installment - Partnership - True Discount and Banker's Discount - Stocks and Shares."
          }
        ]
      }
    ]
  },
  {
    number: 5,
    subjects: [
      {
        code: "25UISAM13",
        title: "Business Taxation",
        semester: 5,
        units: [
          {
            title: "UNIT I: Introduction",
            content: "Tax Meaning and Definition of Tax – Features of Tax - Objectives of Taxation - Cannons of Taxation - Classification of Taxation - Direct And Indirect Taxation Different Type of Taxes Levied By Central, State and Local Govt. - Defects of Indian Taxation System - Types of Assessment."
          },
          {
            title: "UNIT II: Introduction of GST In India",
            content: "GST Models: Single GST & Dual GST - Types of GST - CGST - SGST/UTGST - IGST - Levy and Collection of GST - Registration Under GST - Exemption from GST, GST Tax Rate."
          },
          {
            title: "UNIT III: GST Assessment Procedure",
            content: "Input Tax Credit (ITC), Eligibility and Conditions for Taking Input Tax Credit - E-Way Bill - Types of GST Returns - Types of Assessment & Assessment Procedures."
          },
          {
            title: "UNIT IV: Administration of GST",
            content: "Role and Functions of GST Council, Tax Authorities and Their Powers – Refund of Tax."
          },
          {
            title: "UNIT V: Custom Duty",
            content: "Meaning - Objectives - Types - Valuation of Goods under Custom Act Assessment - Refund - Remission - Abatement - Clearance of Imported And Exported Goods. Excise Duty: Meaning – Types – Movement of goods - Methods of determining excise duty - Advance Ruling - Duty Draw back - Search, Seizure, Confiscation and Penalties."
          }
        ]
      },
      {
        code: "24UISAM14",
        title: "Programming Using Python (T+P)",
        semester: 5,
        units: [
          {
            title: "UNIT I: Introduction to Python Language",
            content: "Significance - IDLE, Dynamic Types, Naming Conventions, String Values, String Operations, String Slices, String Operators, Numeric Data Types, Conversions, Built in Functions."
          },
          {
            title: "UNIT II: Data Collections and Language Component",
            content: "Control Flow and Syntax, Indenting, condition Statement, Relational Operators, Logical, Operators, True or False, Bit Wise Operators, the while Loop, break and continue, The for Loop."
          },
          {
            title: "UNIT III: Object and Classes",
            content: "Classes in Python, Principles of Object Orientation, Creating Classes, Instance Methods, File Organization Special Methods, Class Variables, Inheritance, Polymorphism, Type Identification, Custom Exception Classes."
          },
          {
            title: "UNIT IV: Functions and Modules",
            content: "Defining Your Own Functions, Parameters, Function Documentation, Keyword and Optional Parameter, Passing Collections to a function, Variable Number of Arguments, Scope and Functions, Passing Functions to a Function."
          },
          {
            title: "UNIT V: I/O and Error Handling in Python",
            content: "Writing Data to a File, Reading Data from a File, Additional File Methods, Using Pipes as Data Streams, Handling IO Exceptions, Working with Directories, Metadata Errors, Run Time Errors the Exception Model Exception Hierarchy, Handling Multiple Exceptions."
          }
        ]
      },
      {
        code: "25UISAM15",
        title: "Direct Taxation",
        semester: 5,
        units: [
          {
            title: "UNIT I: Direct Taxation",
            content: "Meaning - Features – Types of Direct taxes – Advantages and Disadvantages. Income: Definition - Gross Total Income – Exempted Income – Agricultural Income - Person Residential Status - Scope of Total Income."
          },
          {
            title: "UNIT II: Computation of Income from Salary",
            content: "Basis of Charge - Characteristics of Salary - Gross, Net Salary - Allowance – Provident Fund - Perquisites – Provident Fund - Gratuity – Commuted Pension - Encashment of Leave Salary – Profit in Lieu of Salary – Deduction from Salary."
          },
          {
            title: "UNIT III: Computation of Income from House Property",
            content: "Basis of Charge - Determination of Annual Value – Income from Let-Out Property - Self Occupied Property - Deemed to Be Let Out Property - Deductions. Computation of Income from Business or Profession: Meaning of Business and Profession - Basis of Charge - Inadmissible Expenses and Revenues Inadmissible Receipts and Payments. (Depreciation Excluded)"
          },
          {
            title: "UNIT IV: Computation of Income from Capital Gain & Other Sources",
            content: "Basis of Charge - Short-and Long-Term Capital Assets - Transfer not Considered as sale - Indexed Cost of Acquisition and Improvement - Exemptions. Computation of Income from Other Sources: Dividend and Interest Income - Casual Income – Grossing Up – Family Pension - Other Incomes."
          },
          {
            title: "UNIT V: Computation of Gross Total Income",
            content: "Set off and Carry Forward - Deduction U/S 80C, 80DD, 80U, 80G And 80GG – Assessment of Individual."
          }
        ]
      },
      {
        code: "24UISAE01",
        title: "Data Warehousing & Data Mining",
        semester: 5,
        units: [
          {
            title: "UNIT I: Basic Concepts",
            content: "Data Warehousing Components - Building a Data Warehouse - Database Architectures for Parallel Processing - Parallel DBMS Vendors - Multidimensional Data Model - Data Warehouse Schemas for Decision Support, Concept Hierarchies Characteristics of OLAP Systems - Typical OLAP Operations, OLAP and OLTP."
          },
          {
            title: "UNIT II: Introduction To Data Mining Systems",
            content: "Knowledge Discovery Process - Data Mining Techniques - Issues - Applications - Data Objects and Attribute Types, Statistical Description of Data, Data Preprocessing - Cleaning, Integration, Reduction, Transformation and Discretization, Data Visualization, Data Similarity and Dissimilarity Measures."
          },
          {
            title: "UNIT III: Mining Patterns",
            content: "Mining Frequent Patterns, Associations and Correlations - Mining Methods - Pattern Evaluation Method - Pattern Mining in Multilevel, Multi-Dimensional Space - Constraint Based Frequent Pattern Mining, Classification using Frequent Patterns."
          },
          {
            title: "UNIT IV: Decision Trees",
            content: "Induction – Bayesian Classification - Rule Based Classification - Classification by Back Propagation - Support Vector Machines - Lazy Learners - Model Evaluation and Selection - Techniques to Improve Classification Accuracy."
          },
          {
            title: "UNIT V: Clustering Techniques",
            content: "Cluster Analysis - Partitioning Methods – Hierarchical Methods Density Based Methods - Grid Based Methods - Evaluation of Clustering - Clustering High Dimensional Data - Clustering With Constraints, Outlier Analysis - Outlier Detection Methods."
          }
        ]
      },
      {
        code: "24UISAE02",
        title: "Blockchain Technology",
        semester: 5,
        units: [
          {
            title: "UNIT I: Introduction to Block chain",
            content: "Origin of Block chain – Block chain solution – Components of Block chain – Block in a Block chain – Technology and CO3 Future – Block chain Types and Consensus Mechanism - Decentralization and Distribution – Types of Blockchain – Consensus Protocol – Cryptocurrency."
          },
          {
            title: "UNIT II: Crypto Currency",
            content: "Bitcoin, Altcoin and Token: Bitcoin and the Cryptocurrency – Crypto currency Basics – Types of Cryptocurrencies – Cryptocurrency usage – Public Blockchain System: Public Blockchain – The Bitcoin Blockchain – Ethereum Blockchain."
          },
          {
            title: "UNIT III: Smart Contracts",
            content: "Smart Contract – Characteristics of Smart Contract – Types of Smart Contracts – Types of Oracles – Smart Contracts in Ethereum – Private Blockchain System: Key characteristics – Private Blockchain and Open Source – State Machine – PAXOS, RAFT, Byzantine Fault – Multichain."
          },
          {
            title: "UNIT IV: Initial Coin Offering",
            content: "Block chain Fundraising Methods – Launching an ICO – Investing in an ICO – Pros and Cons of ICO – Evolution of ICO – ICO platforms – Security in Blockchain: Security Aspects – Security and Privacy challenges – Performance and Scalability Identity Management and Authentication."
          },
          {
            title: "UNIT V: Applications of Blockchain",
            content: "Blockchain in Banking and Finance – Blockchain in Education – Blockchain in Energy – Blockchain in Healthcare – Blockchain in Real-estate Blockchain and IOT – Limitations and Challenges of Blockchain."
          }
        ]
      }
    ]
  },
  {
    number: 6,
    subjects: [
      {
        code: "25UISAM16",
        title: "Business Research Methods",
        semester: 6,
        units: [
          {
            title: "UNIT I: Business Research",
            content: "Definition and Significance - Purpose of Research Types of Research - Research process - Ethics in research - Subjectivity and Objectivity in research."
          },
          {
            title: "UNIT II: Research Design",
            content: "Types of research design - Variables in Research - Measurement and scaling Different scales - Statement of Problem - Research objectives - Research hypotheses."
          },
          {
            title: "UNIT III: Data Collection",
            content: "Types of data - Methods of primary data collection - Construction of questionnaire and – Sampling plan - Determinants optimal sample size – sampling techniques Sampling methods."
          },
          {
            title: "UNIT IV: Data Analysis",
            content: "Editing - Coding - Data entry - Validity of data - Qualitative Vs Quantitative data analyses - Parametric and Non-Parametric test - Applications of Bivariate and Multi variate statistical techniques - Factor analysis - Discriminate analysis - Cluster analysis - Multiple regression and Correlation - Application of statistical software for data analysis. (Application in SPSS)"
          },
          {
            title: "UNIT V: Preparation of Research Report",
            content: "Definition - Types - Contents of report - Need for executive summary - Chapterization - Contents of chapter - Report writing."
          }
        ]
      },
      {
        code: "25UISAM17",
        title: "Big Data Analytics using R",
        semester: 6,
        units: [
          {
            title: "UNIT I: Introduction to Data",
            content: "Types of Digital Data, Introduction to Big Data, Big Data Analytics, History of Hadoop, Apache Hadoop, Analyzing Data with Unix tools, Analyzing Data with Hadoop, Hadoop Streaming, Hadoop Echo System, IBM Big Data Strategy, Introduction to Info sphere Big Insights and Big Sheets."
          },
          {
            title: "UNIT II: Introduction to HDFS",
            content: "HDFS (Hadoop Distributed File System) The Design of HDFS, HDFS Concepts, Command Line Interface, Hadoop file system interfaces, Data flow, Data Ingest with Flume and Scoop and Hadoop archives, Hadoop I/O: Compression, Serialization, Avro and File Based Data structures."
          },
          {
            title: "UNIT III: Jobs & Tasks",
            content: "Map Reduce Anatomy of a Map Reduce Job Run, Failures, Job Scheduling, Shuffle and Sort, Task Execution, Map Reduce Types and Formats, Map Reduce Features."
          },
          {
            title: "UNIT IV: Hadoop Eco System Pig",
            content: "Introduction to PIG, Execution Modes of Pig, Comparison of Pig with Databases, Grunt, Pig Latin, User Defined Functions, Data Processing operators."
          },
          {
            title: "UNIT V: Data Analytics with R Machine Learning",
            content: "Introduction, Supervised Learning, Unsupervised Learning, Collaborative Filtering. Big Data Analytics with Big R."
          }
        ]
      },
      {
        code: "25UISAM18",
        title: "ERP Systems",
        semester: 6,
        units: [
          {
            title: "UNIT I: Introduction to ERP",
            content: "Concept - Benefits of ERP – Business Engineering and ERP – – Principle of Business Engineering – Business Engineering with Information Technology. ERP Implementation: Overview – ERP Implementation Technology – Guidelines for ERP Implementation."
          },
          {
            title: "UNIT II: ERP and the Competitive Advantages",
            content: "ERP domain MPGPRO – IFS/Avalon – Industrial and Financial Systems – Baan IV SAP - Market Dynamics and Dynamic Strategy. Commercial ERP Package: Description – Multi-Client Server Solution – Open Technology – User Interface - Application Integration."
          },
          {
            title: "UNIT III: Introduction to Tally ERP9",
            content: "Creating a Company – Creating Ledgers Creating Groups -- Bill wise Debtors and Creditors Ledgers - Vouchers: Payment Voucher - Receipt Voucher - Contra Voucher – Journal – Voucher. Inventory: Integrating Accounts and Inventory - Stock Group Godown and Locations - Stock Category - Units of Measure - Stock Items."
          },
          {
            title: "UNIT IV: Order Processing",
            content: "Purchase Order Process - Receipt Note (Inventory) - Rejection-Out Voucher, Rejection-In Voucher - Debit and Credit Notes - Bank Reconciliation – TDS. Payroll Accounting: Understanding Payroll - Pay Heads and Categories - Employee Details and Salary Details - Salary Payment – Paysheet and Pay Slips."
          },
          {
            title: "UNIT V: GST Application in Tally",
            content: "Activating Tally in GST - Setting Up GST - GST Taxes & Invoices SGST, CGST & IGST - Creating GST Masters in Tally."
          }
        ]
      },
      {
        code: "25UISAM19",
        title: "Management Information Systems",
        semester: 6,
        units: [
          {
            title: "UNIT I: Introduction to Management Information System",
            content: "Concept, Need, Strategic Role – Evolution of Management Information System – Components of Management Information System Information Flow."
          },
          {
            title: "UNIT II: Transaction Processing and Support System",
            content: "Transaction Processing System - Office Automation Systems - Decision Support Systems - Executive Information Systems - Artificial Intelligence and Expert Systems."
          },
          {
            title: "UNIT III: System Analysis and Design",
            content: "System development methodologies, Systems Analysis and Design, Data flow Diagram (DFD), Decision table, Entity Relationship – System Development lifecycle – Role of system analyst."
          },
          {
            title: "UNIT IV: Integrated Systems, Security and Control",
            content: "Knowledge based decision support systems, integrating social media and mobile technologies in Information system, Security, IS Vulnerability, Disaster Management, Computer Crimes, Securing the Web."
          },
          {
            title: "UNIT V: Functional Information Systems",
            content: "Production, Finance, Human Resource And Marketing Managing Information Resources – Business Process outsourcing - Concept Functions."
          }
        ]
      },
      {
        code: "25UISAE03",
        title: "Project & Viva Voce",
        semester: 6,
        units: [
          {
            title: "Chapter I: Introduction and Research Design",
            content: "Introduction to the research topic, background of the study, statement of the problem, objectives of the study, scope and limitations, research methodology and design."
          },
          {
            title: "Chapter II: Review of Literature",
            content: "Comprehensive review of existing literature, theoretical framework, previous studies and research papers, conceptual framework development."
          },
          {
            title: "Chapter III: Theoretical Background of the Study",
            content: "Detailed theoretical concepts, models and frameworks relevant to the study, industry/sector overview, regulatory framework if applicable."
          },
          {
            title: "Chapter IV: Data Analysis and Interpretation",
            content: "Data collection methods, data analysis techniques, statistical tools used, presentation of findings through tables and charts, interpretation of results."
          },
          {
            title: "Chapter V: Findings, Suggestions and Conclusion",
            content: "Summary of major findings, recommendations and suggestions, conclusion of the study, scope for future research, bibliography and appendices."
          }
        ]
      }
    ]
  }
];

export const getSemester = (semesterNumber: number): Semester | undefined => {
  return syllabusData.find(s => s.number === semesterNumber);
};

export const getSubject = (code: string): Subject | undefined => {
  for (const semester of syllabusData) {
    const subject = semester.subjects.find(s => s.code === code);
    if (subject) return subject;
  }
  return undefined;
};

export const semesterColors = {
  1: { bg: 'semester-1', hover: 'hover:shadow-[0_20px_40px_-15px_hsl(340,75%,55%,0.4)]' },
  2: { bg: 'semester-2', hover: 'hover:shadow-[0_20px_40px_-15px_hsl(25,90%,55%,0.4)]' },
  3: { bg: 'semester-3', hover: 'hover:shadow-[0_20px_40px_-15px_hsl(160,70%,40%,0.4)]' },
  4: { bg: 'semester-4', hover: 'hover:shadow-[0_20px_40px_-15px_hsl(200,80%,50%,0.4)]' },
  5: { bg: 'semester-5', hover: 'hover:shadow-[0_20px_40px_-15px_hsl(270,70%,55%,0.4)]' },
  6: { bg: 'semester-6', hover: 'hover:shadow-[0_20px_40px_-15px_hsl(330,70%,50%,0.4)]' },
};
