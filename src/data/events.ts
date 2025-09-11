export interface Event {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  prizes?: string;
  teamSize?: string;
  registrationUrl?: string;
  entryFees?: {
    [key: string]: string;
  };
  prizePool?: {
    [key: string]: {
      winner: string;
      runnerUp: string;
      thirdPlace: string;
    };
  };
  rules?: string[];
}

export const events: Event[] = [
  // Gaming Events
  {
    id: "bgmi-tournament",
    title: "BGMI Tournament",
    description: "Battle Royale championship with intense squad-based combat",
    category: "Gaming",
    date: "25th Sept",
    prizes: "₹10,000",
    teamSize: "Squad (4 players)",
    registrationUrl: "https://docs.google.com/forms/d/1sYBDv2yoR8dWpnX7d2Gairb9hYEA94Bsq2ZAk4kIZf4",
    entryFees: {
      "Squad": "₹400"
    },
    prizePool: {
      "Tournament": {
        winner: "₹6,000",
        runnerUp: "₹4,000",
        thirdPlace: "TBD"
      }
    },
    rules: [
      "The team must consist of 4 players",
      "All the members of the team must belong to the same college",
      "Players must have their ID cards at the time of registration and if you fail to provide a physical copy you will not be permitted to participate",
      "The tournament will be conducted in a league style",
      "3 games in total",
      "Map: Erangel, Miramar",
      "Points will be allotted for positions (ex: 1st place = 20pts, 2nd place = 16pts)",
      "Each kill be pointed 1 pts",
      "Teams with the highest total points will be placed 1st 2nd and 3rd",
      "Note: Players must use their own internet connection"
    ]
  },
  {
    id: "free-fire",
    title: "Free Fire",
    description: "Fast-paced battle royale tournament",
    category: "Gaming",
    date: "26th Sept",
    prizes: "₹10,000",
    teamSize: "Squad (4 players)",
    registrationUrl: "https://docs.google.com/forms/d/10D5gLcUyWPf36n5fY2fth59mz4b7DMCSxa1SX6YOOfM",
    entryFees: {
      "Squad": "₹400"
    },
    prizePool: {
      "Tournament": {
        winner: "₹6,000",
        runnerUp: "₹4,000",
        thirdPlace: "TBD"
      }
    },
    rules: [
      "Participation: A team of 4 members",
      "Use of any hack will lead to disqualification",
      "Suspected accounts will be verified",
      "Earphones have to be used compulsorily"
    ]
  },

  // Technical Events
  {
    id: "coding-competition",
    title: "Coding Competition",
    description: "Test your programming skills with challenging algorithms",
    category: "Technical",
    date: "25th & 26th Sept",
    prizes: "₹4,000",
    teamSize: "Team (2 members)",
    registrationUrl: "https://docs.google.com/forms/d/15eEQdMm67gsKQLPiTABtQs7TK_Gd-UVCo1nUpz_bsaM/viewform?edit_requested=true",
    entryFees: {
      "Team": "₹150"
    },
    prizePool: {
      "Competition": {
        winner: "₹2,000",
        runnerUp: "₹1,250",
        thirdPlace: "₹750"
      }
    },
    rules: [
      "Team Size: 2 members per team",
      "Format: 2 rounds—Main Coding (problem-solving) and Final (advanced challenges)",
      "Time Limit: Each round has a set time; submissions must be on time",
      "Integrity: No plagiarism, external help, AI tools, or pre-written code—cheating means disqualification",
      "Languages: Use C, C++, Java, or Python"
    ]
  },
  {
    id: "debugging-challenge",
    title: "Debugging Challenge",
    description: "Find and fix bugs in complex code scenarios",
    category: "Technical",
    date: "25th & 26th Sept",
    prizes: "₹4,000",
    teamSize: "Individual",
    registrationUrl: "https://docs.google.com/forms/d/1mf7s4i0mtC-A4VppGkcSPigaj8bomqdTa1ezIYDbidA",
    entryFees: {
      "Individual": "₹150"
    },
    prizePool: {
      "Competition": {
        winner: "₹2,000",
        runnerUp: "₹1,250",
        thirdPlace: "₹750"
      }
    },
    rules: [
      "Code Editor: Turbo C++ only",
      "Language: C only",
      "Task: Fix the source code to achieve the desired output",
      "Tiebreaker: Early submissions considered",
      "Expected Outcome: Provided in the question"
    ]
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Build innovative web solutions in limited time",
    category: "Technical",
    date: "25th & 26th Sept",
    prizes: "₹4,000",
    teamSize: "Team (2 members)",
    registrationUrl: "https://docs.google.com/forms/d/1_9DdEU1nttTJsiml8UIeQz0qhnsR8n8rAWIUufdLgSQ",
    entryFees: {
      "Team": "₹150"
    },
    prizePool: {
      "Competition": {
        winner: "₹2,000",
        runnerUp: "₹1,250",
        thirdPlace: "₹750"
      }
    },
    rules: [
      "Team Size: 2 members",
      "Build a responsive website using HTML/CSS",
      "Theme/Template: Will be given on the spot",
      "Duration: 2 hours",
      "Use of copyrighted content is strictly prohibited"
    ]
  },
  {
    id: "tech-treasure-hunt",
    title: "Technical Treasure Hunt",
    description: "Technology-based clues and problem-solving adventure",
    category: "Technical",
    date: "25th & 26th Sept",
    prizes: "₹4,000",
    teamSize: "Team (2 members)",
    registrationUrl: "https://docs.google.com/forms/d/1amOKQxAeexuE3PqM4TA1KnSK90DjZyhMz4Yvl0a8cNs",
    entryFees: {
      "Team": "₹150"
    },
    prizePool: {
      "Competition": {
        winner: "₹2,000",
        runnerUp: "₹1,250",
        thirdPlace: "₹750"
      }
    },
    rules: [
      "Form a Team: Participate in teams of exactly 2 members",
      "Navigate Three Rounds:",
      "Round 1: Tech quiz on programming, networking, web, and general tech (15 minutes); only teams with all correct answers proceed",
      "Round 2: Solve a multi-layered encryption puzzle (30 minutes)",
      "Round 3: Navigate a web labyrinth with hidden clues in images and clickable hotspots (45 minutes)",
      "Follow the Sequence: Solve each round's challenge in order to advance to the next",
      "Adhere to Restrictions: No internet access (unless specified), mobile phones, laptops, or external software allowed; use only permitted tools",
      "Compete Fairly: The first team to complete all rounds and reach the final treasure wins; cheating or seeking external help results in disqualification"
    ]
  },
  {
    id: "data-analytics",
    title: "Data Analytics Hackathon",
    description: "Extract insights from complex datasets",
    category: "Technical",
    date: "25th & 26th Sept",
    prizes: "₹4,000",
    teamSize: "Individual/Team (2 members)",
    registrationUrl: "https://docs.google.com/forms/d/19jywl7IK25lfAy6wJ6QZ826RbhDvI5oE3F4qWcLgaJs",
    entryFees: {
      "Individual/Team": "₹150"
    },
    prizePool: {
      "Competition": {
        winner: "₹2,000",
        runnerUp: "₹1,250",
        thirdPlace: "₹750"
      }
    },
    rules: [
      "Open to UG and PG students; teams of 2 allowed",
      "Teams must be formed before the event; no changes later",
      "Focus: Data Analytics (business, health, environment, social media, education, etc.)",
      "Work must be original and completed during the hackathon; plagiarism not allowed",
      "Open-source datasets, tools, and libraries may be used",
      "Deliverables: dataset with source, preprocessing steps, analytics/visualization models, final report/dashboard, and a 5–7 min presentation",
      "Evaluation: Problem clarity (20%), Data handling (20%), Modeling (25%), Visualization (20%), Teamwork & Presentation (15%)",
      "Deadline rules are strict; late submissions won't be accepted",
      "Maintain discipline and professional conduct; misconduct leads to disqualification"
    ]
  },

  // Creative Arts
  {
    id: "digital-art",
    title: "Digital Art",
    description: "Create stunning digital masterpieces",
    category: "Creative Arts",
    date: "25th & 26th Sept",
    prizes: "₹2,000",
    teamSize: "Individual",
    registrationUrl: "https://docs.google.com/forms/d/1WxPkhbbvbmBVnuuthD1bO_WyRRpE6Z55dEByp_7sys0",
    entryFees: {
      "Individual": "₹100"
    },
    prizePool: {
      "Competition": {
        winner: "₹1,000",
        runnerUp: "₹500",
        thirdPlace: "Trophy"
      }
    },
    rules: [
      "Entry Fee: Rs.100 per Event",
      "Open to all students",
      "Work must be original and created during the event",
      "Digital art tools and software allowed",
      "Plagiarism will lead to disqualification"
    ]
  },
  {
    id: "pencil-sketching",
    title: "Pencil Sketching",
    description: "Traditional art form with modern themes",
    category: "Creative Arts",
    date: "25th & 26th Sept",
    prizes: "₹6,000",
    teamSize: "Individual",
    entryFees: {
      "Individual": "₹100"
    },
  },
  {
    id: "painting",
    title: "Painting",
    description: "Express creativity through colors and canvas",
    category: "Creative Arts",
    date: "25th & 26th Sept",
    prizes: "₹7,000",
    teamSize: "Individual",
    entryFees: {
      "Individual": "₹100"
    },
  },
  {
    id: "face-painting",
    title: "Face Painting",
    description: "Transform faces into artistic canvases",
    category: "Creative Arts",
    date: "25th & 26th Sept",
    prizes: "₹5,000",
    teamSize: "Individual",
    entryFees: {
      "Individual": "₹100"
    },
  },
  {
    id: "mehandi",
    title: "Mehandi",
    description: "Traditional henna art with contemporary designs",
    category: "Creative Arts",
    date: "25th & 26th Sept",
    prizes: "₹5,000",
    teamSize: "Individual",
    entryFees: {
      "Individual": "₹100"
    },
  },

  // Sports Events
  {
    id: "chess",
    title: "Chess (Boys & Girls)",
    description: "Strategic mind games for ultimate victory",
    category: "Sports",
    date: "24th Sept",
    prizes: "₹19,000",
    teamSize: "Individual",
    registrationUrl: "https://docs.google.com/forms/d/1-uFGFH3zPEChDoSaZdcC-ggMkeoyVoLaDIc5Jy2xW7A",
    entryFees: {
      "Individual": "₹300"
    },
    prizePool: {
      "Tournament": {
        winner: "₹10,000 (1st: ₹10,000, 2nd: ₹5,000, 3rd: ₹2,500)",
        runnerUp: "₹5,000 (4th: ₹1,500, 5th: ₹1,000)",
        thirdPlace: "₹2,500"
      }
    }
  },
  {
    id: "basketball",
    title: "Basketball 3x3 (Boys & Girls)",
    description: "Fast-paced street basketball tournament",
    category: "Sports",
    date: "24th Sept",
    prizes: "₹32,000",
    teamSize: "Team (3 players)",
    registrationUrl: "https://docs.google.com/forms/d/180y-zSQxLbg_DY_ulhL299Fln94d5Rp-iQ2ErYf2gzQ",
    entryFees: {
      "PU Boys & Girls": "₹1,500 per team",
      "Degree Boys & Girls": "₹2,000 per team"
    },
    prizePool: {
      "PU Boys & Girls": {
        winner: "₹8,000",
        runnerUp: "₹4,000",
        thirdPlace: "Trophy"
      },
      "Degree Boys & Girls": {
        winner: "₹12,000",
        runnerUp: "₹8,000",
        thirdPlace: "Trophy"
      }
    }
  },
  {
    id: "volleyball",
    title: "Volleyball (Boys & Girls)",
    description: "Team sport requiring coordination and power",
    category: "Sports",
    date: "23rd Sept",
    prizes: "₹20,000",
    teamSize: "Team (6 players)",
    registrationUrl: "https://docs.google.com/forms/d/18TXV2skP0fzZdjME4pVAhF1MfIBL3bNRPU8xmK2PeV8/viewform?edit_requested=true",
    entryFees: {
      "Team": "₹1,500"
    },
    prizePool: {
      "Tournament": {
        winner: "₹10,000",
        runnerUp: "₹6,000",
        thirdPlace: "₹4,000"
      }
    },
    rules: [
      "Reporting Time: 8:00 AM, 23rd Sep 2025",
      "College ID mandatory",
      "Participation only for boys",
      "Sportswear compulsory",
      "Referees decision will be final",
      "The Organizing Team will be having all rights to take decisions",
      "Alcohol consumption or support of such activities is prohibited. Participants found violating this rule will be disqualified",
      "Teams not reporting on time will be disqualified",
      "Prize money, trophy, medals and certificate are provided for winners and runners",
      "Entry fee is strictly non-refundable and non-transferable",
      "More than one team can participate from same college",
      "For any queries contact: 9380390867, 7349318372"
    ]
  },

  // Cultural Events
  {
    id: "dance-solo",
    title: "Dance Solo",
    description: "Express yourself through rhythm and movement",
    category: "Cultural",
    date: "25th & 26th Sept",
    prizes: "₹5,000",
    teamSize: "Individual",
    registrationUrl: "https://docs.google.com/forms/d/1ofE3B9cCdNVuoXGwu3FKv7_ZZaUcbzIH_lw9Zjd-9Q0/viewform?edit_requested=true",
    entryFees: {
      "Solo": "₹800"
    },
    prizePool: {
      "Solo": {
        winner: "₹5,000",
        runnerUp: "₹3,000",
        thirdPlace: "Trophy"
      }
    },
    rules: [
      "Open to all colleges",
      "Audio track should be submitted in MP3 format only",
      "Audio track must be submitted at the registration desk",
      "Water, Fire, and glass objects are not allowed as props",
      "Harmful substances are strictly prohibited",
      "Participants must carry their College ID and Aadhaar card for verification during the competition",
      "Guardians/parents or coordinator must carry their Aadhaar card",
      "No specific dance theme – any song can be chosen",
      "Props must be brought by the participants and must be approved by the co-ordinators",
      "Use of foul language on stage will result in immediate disqualification",
      "Backdrop can be submitted along with the audio",
      "The judges' decision will be final"
    ]
  },
  {
    id: "dance-duet",
    title: "Dance Duet",
    description: "Synchronized performance with your partner",
    category: "Cultural",
    date: "25th & 26th Sept",
    prizes: "₹10,000",
    teamSize: "Duo (2 players)",
    registrationUrl: "https://docs.google.com/forms/d/1ofE3B9cCdNVuoXGwu3FKv7_ZZaUcbzIH_lw9Zjd-9Q0/viewform?edit_requested=true",
    entryFees: {
      "Duet": "₹1,300"
    },
    prizePool: {
      "Duet": {
        winner: "₹10,000",
        runnerUp: "₹5,000",
        thirdPlace: "Trophy"
      }
    },
    rules: [
      "Open to all colleges",
      "Audio track should be submitted in MP3 format only",
      "Group size should be between 6 to 16 members",
      "For duet dance, 2 participants of any gender are allowed",
      "Audio track must be submitted at the registration desk",
      "Water, Fire, and glass objects are not allowed as props",
      "Harmful substances are strictly prohibited",
      "Participants must carry their College ID and Aadhaar card for verification during the competition",
      "Guardians/parents or coordinator must carry their Aadhaar card",
      "No specific dance theme – any song can be chosen",
      "Props must be brought by the participants and must be approved by the co-ordinators",
      "Use of foul language on stage will result in immediate disqualification",
      "Backdrop can be submitted along with the audio",
      "The judges' decision will be final"
    ]
  },
  {
    id: "dance-group",
    title: "Dance Group",
    description: "Team choreography with creative storytelling",
    category: "Cultural",
    date: "25th & 26th Sept",
    prizes: "₹15,000",
    teamSize: "Group (6-16 players)",
    registrationUrl: "https://docs.google.com/forms/d/1ofE3B9cCdNVuoXGwu3FKv7_ZZaUcbzIH_lw9Zjd-9Q0/viewform?edit_requested=true",
    entryFees: {
      "Group": "₹2,000"
    },
    prizePool: {
      "Group": {
        winner: "₹15,000",
        runnerUp: "₹10,000",
        thirdPlace: "Trophy"
      }
    },
    rules: [
      "Open to all colleges",
      "Audio track should be submitted in MP3 format only",
      "Group size should be between 6 to 16 members",
      "For duet dance, 2 participants of any gender are allowed",
      "Audio track must be submitted at the registration desk",
      "Water, Fire, and glass objects are not allowed as props",
      "Harmful substances are strictly prohibited",
      "Participants must carry their College ID and Aadhaar card for verification during the competition",
      "Guardians/parents or coordinator must carry their Aadhaar card",
      "No specific dance theme – any song can be chosen",
      "Props must be brought by the participants and must be approved by the co-ordinators",
      "Use of foul language on stage will result in immediate disqualification",
      "Backdrop can be submitted along with the audio",
      "The judges' decision will be final"
    ]
  },
  {
    id: "fashion-show",
    title: "Fashion Show",
    description: "Runway modeling with style and confidence",
    category: "Cultural",
    date: "25th & 26th Sept",
    prizes: "₹20,000",
    teamSize: "Group (6-10 members)",
    registrationUrl: "https://docs.google.com/forms/d/1phcnK-KnkTbQ1MCMjRPX1iSgWljvD5jbrk2Cr-f4rgg",
    entryFees: {
      "Group": "₹800"
    },
    prizePool: {
      "Competition": {
        winner: "TBD",
        runnerUp: "TBD",
        thirdPlace: "TBD"
      }
    },
    rules: [
      "Group Size: Minimum 6 members, Maximum 10 members",
      "Performance Time: 6+2 minutes",
      "Theme: Open",
      "Background Tracks: Submit 1 day in advance in the specified format",
      "Outfit: Must be appropriate and free of vulgarity",
      "Prop Usage: No hazardous materials"
    ]
  },
  {
    id: "street-play",
    title: "Street Play",
    description: "Theatrical performances with social messages",
    category: "Cultural",
    date: "25th & 26th Sept",
    prizes: "₹6,000",
    teamSize: "Group (5-8 players)",
    registrationUrl: "https://docs.google.com/forms/d/1YsRh3iGcCX1f0iOIrpQcJ8YLFjzmPCR3qz-MOsc11wM",
    entryFees: {
      "Group": "₹700"
    },
    prizePool: {
      "Competition": {
        winner: "₹3,000",
        runnerUp: "₹2,000",
        thirdPlace: "₹1,000"
      }
    }
  },
  {
    id: "beatboxing",
    title: "Beatboxing",
    description: "Create music with just your voice",
    category: "Cultural",
    date: "25th & 26th Sept",
    prizes: "₹8,000",
    teamSize: "Individual",
  },

  // Media & Others
  {
    id: "reel-making",
    title: "Reel Making",
    description: "Create engaging short-form video content",
    category: "Media & Others",
    date: "25th & 26th Sept",
    prizes: "₹1,500",
    teamSize: "Individual/Team",
    registrationUrl: "https://docs.google.com/forms/d/1SodmWcMpEzYk1L1-GqHIUquH1SoKItcFmWhYaYI3ZPo",
    entryFees: {
      "Individual/Team": "₹150"
    },
    prizePool: {
      "Competition": {
        winner: "₹1,000",
        runnerUp: "₹500",
        thirdPlace: "TBD"
      }
    },
    rules: [
      "Originality: Create an original reel inspired by online trends",
      "Disqualification for Plagiarism: Copied content leads to disqualification",
      "Duration & Format: 30-60 seconds, vertical format (e.g., 9:16)",
      "Theme: Environment (ecological awareness or sustainability)",
      "Production: Shot and edited entirely on event premises"
    ]
  },
  {
    id: "poster-design",
    title: "Poster Design",
    description: "Design compelling visual communications",
    category: "Media & Others",
    date: "25th & 26th Sept",
    prizes: "₹6,000",
    teamSize: "Individual",
    entryFees: {
      "Individual": "₹100"
    },
    rules: [
      "Individuals only",
      "Time: 1 Hour 30 Minutes",
      "Theme: Will be given on the spot",
      "Use of AI tools not allowed",
      "Participants have to get their own laptops/tabs/ipads",
      "Each participant can submit only one poster",
      "Poster must be digitally created using any of the following software: Adobe Photoshop, Illustrator, Canva, CorelDRAW, MS PowerPoint, GIMP, etc."
    ]
  },
  {
    id: "logo-design",
    title: "Logo Design",
    description: "Create memorable brand identities",
    category: "Media & Others",
    date: "25th & 26th Sept",
    prizes: "₹7,000",
    teamSize: "Individual",
    entryFees: {
      "Individual": "₹100"
    },
    rules: [
      "Individuals only",
      "Time: 1 Hour 30 Minutes",
      "Theme: Will be given on the spot",
      "Plagiarism: Copying from internet will lead to disqualification",
      "Use of AI tools not allowed",
      "Systems will be provided. Participants have to get their own laptops/tabs/ipads"
    ]
  },
  {
    id: "photography",
    title: "Photography",
    description: "Capture moments and tell stories through images",
    category: "Media & Others",
    date: "25th & 26th Sept",
    prizes: "₹10,000",
    teamSize: "Individual",
    entryFees: {
      "Individual": "₹100"
    },
    rules: [
      "Each participant can submit a maximum of 1 to 5 photographs",
      "Photographs must be original and taken by the participant",
      "Theme: College life, Capture an emotion",
      "Photos must align with the theme to be considered for evaluation",
      "Minor editing allowed: Brightness, Contrast, Cropping, Color correction",
      "The following are NOT allowed: Composite images, Adding or removing elements, AI-generated content, Heavy filters that alter the originality of the photo"
    ]
  },
];