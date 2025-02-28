Support Agent Chatbot for Customer Data Platforms (CDP)
Overview
This project is a chatbot designed to assist users with "how-to" questions related to four Customer Data Platforms (CDPs):

Segment
mParticle
Lytics
Zeotap
The chatbot retrieves relevant information from the official documentation of these CDPs and provides step-by-step guidance to users.

Tech Stack Used
Frontend: Next.js, Tailwind CSS, TypeScript
Backend: No backend (pure frontend-based solution)
APIs: Fetching data dynamically from documentation sources
NLP Processing: Simple document indexer for keyword-based searches
Core Features
✔ Answer "How-to" Questions

Provides instructions on setting up, configuring, and using features within each CDP.
Example:
"How do I set up a new source in Segment?"
"How can I create a user profile in mParticle?"
✔ Extracts Information from Documentation

Dynamically pulls data from CDP documentation pages.
Uses a lightweight search approach to identify relevant sections.
✔ Handles Question Variations

Handles variations in phrasing (e.g., "How do I create an audience?" vs. "How can I set up an audience?").
Ignores irrelevant queries (e.g., "Which movie is getting released this week?").
Bonus Features
✔ Cross-CDP Comparisons

Allows users to compare features across different CDPs.
Example: "How does Segment’s audience creation process compare to Lytics’?"
✔ Advanced "How-to" Queries

Supports detailed and platform-specific queries.
Covers advanced configurations, integrations, and best practices.
Setup Instructions
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/Shukla87878/Web-Application-Mimicking-Google-Sheets.git
cd Web-Application-Mimicking-Google-Sheets
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Run the Project
sh
Copy
Edit
npm run dev
The application will be available at http://localhost:3000/.

Deployment
The project is deployed on Vercel. You can access the live version here.

Security & Performance Enhancements
✔ Optimized API calls to reduce redundant fetch requests.
✔ Sanitized user inputs to prevent XSS attacks.
✔ Lightweight document indexing for fast search responses.

Contact & Support
For any issues or feature requests, feel free to raise a GitHub issue or contact me. 🚀
