/* ==========================================================================
   BEYOND BASIC — Colorful Neo-Brutalist & Scannable English Lab (Group 11)
   ========================================================================== */

// BOLD is the only visual style now
function setupStyleToggle() {
  document.body.classList.add("bold-on");
}

// Restart a short CSS animation class on an element
function playAnim(el, cls) {
  if (!el) return;
  el.classList.remove(cls);
  void el.offsetWidth; // force reflow so the animation restarts
  el.classList.add(cls);
}

// Crisp Inline SVG Icons (OS-Independent)
const ICONS = {
  speaker: `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`,
  stop: `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="1"></rect></svg>`,
  bulb: `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg>`,
  check: `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  cross: `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
};



// 0. Random Quotes (Loaded on Open)
const QUOTES_DATA = [
  { text: "The limits of my language mean the limits of my world.", author: "Wittgenstein" },
  { text: "A different language is a different vision of life.", author: "Federico Fellini" },
  { text: "To have another language is to possess a second soul.", author: "Charlemagne" },
  { text: "Raise your words, not your voice. It is rain that grows flowers.", author: "Rumi" },
  { text: "The art of conversation lies in listening.", author: "Malcolm Forbes" },
  { text: "Words infuse thought with clarity and life.", author: "Maya Angelou" }
];

// 1. Units 01–14 Syllabus Data (Midterm: 01–08, Final: 09–15; units 08 and 15 pending)
const UNITS_DATA = [
  {
    "unit": 1,
    "exam": "MIDTERM",
    "colorClass": "bg-yellow",
    "shortLabel": "Getting to Know You",
    "headerLabel": "UNIT 01 // GETTING TO KNOW YOU",
    "title": "Getting to Know You",
    "summary": "Open and close a conversation politely, introduce yourself, and ask basic personal questions.",
    "subtopics": [
      {
        "title": "Opening a Conversation",
        "tag": "GREETINGS",
        "tip": "Greet first, then introduce yourself.",
        "phrases": [
          "Hi, I'm Ariel. Nice to meet you.",
          "Hi! Have we met before? I'm Karina."
        ]
      },
      {
        "title": "Asking Basic Questions",
        "tag": "GETTING TO KNOW",
        "tip": "Ask open questions about background, study, or work.",
        "phrases": [
          "Where are you from?",
          "What do you study, and what do you enjoy about it?"
        ]
      },
      {
        "title": "Closing a Conversation",
        "tag": "POLITE EXIT",
        "tip": "Thank them, then say goodbye with a warm closing line.",
        "phrases": [
          "It was nice meeting you. Take care!",
          "I should get going now. Let's catch up again soon."
        ]
      }
    ],
    "dialogueTitle": "First Day Introductions",
    "dialogue": [
      {
        "speaker": "ARIEL",
        "text": "Hi, I'm Ariel. Nice to meet you."
      },
      {
        "speaker": "ADIT",
        "text": "Nice to meet you too! Where are you from?"
      },
      {
        "speaker": "ARIEL",
        "text": "I'm from Surabaya. What about you?"
      },
      {
        "speaker": "ADIT",
        "text": "I'm from Malang. It was nice talking with you, Ariel. Take care!"
      }
    ],
    "practicePrompt": "Introduce yourself in 2 sentences, then ask one question back.",
    "modelAnswer": "Hi, I'm Adit. I study English literature, and I'm excited about this class. What about you?",
    "readFirst": {
      "pattern": [
        "Greeting: <em>Hi, I'm [name]. Nice to meet you.</em>",
        "Question: <em>Where are you from?</em> or <em>What do you study?</em>",
        "Closing: <em>It was nice meeting you. Take care!</em>"
      ],
      "whenToUse": "First meetings in class, at events, or when you join a new group.",
      "good": "Hi, I'm Adit. Nice to meet you. What do you study?",
      "bad": "Who are you? What do you want?",
      "mistake": "Asking 'Who are you?' sounds abrupt in a first meeting. Introduce yourself first, then ask politely."
    }
  },
  {
    "unit": 2,
    "exam": "MIDTERM",
    "colorClass": "bg-mint",
    "shortLabel": "Telling About Routines",
    "headerLabel": "UNIT 02 // ROUTINES",
    "title": "Telling About Routines",
    "summary": "Describe your daily routines and your jobs or chores using the simple present and frequency words.",
    "subtopics": [
      {
        "title": "Describing Daily Routines",
        "tag": "DAILY LIFE",
        "tip": "Use the simple present with time expressions and frequency adverbs.",
        "phrases": [
          "I usually wake up at 6 AM and go to campus by 8.",
          "On weekdays, I always review my notes after dinner."
        ]
      },
      {
        "title": "Describing Jobs and Chores",
        "tag": "RESPONSIBILITIES",
        "tip": "Name the job or chore, then say how often you do it.",
        "phrases": [
          "I work part-time at a café, so I'm busy on weekends.",
          "My main chore at home is washing the dishes every night."
        ]
      }
    ],
    "dialogueTitle": "Morning Routine Chat",
    "dialogue": [
      {
        "speaker": "KARINA",
        "text": "What does your usual weekday look like?"
      },
      {
        "speaker": "ARIEL",
        "text": "I usually wake up at 6, then I study for an hour before class."
      },
      {
        "speaker": "KARINA",
        "text": "Wow, do you also help at home?"
      },
      {
        "speaker": "ARIEL",
        "text": "Yes, I always take out the trash on Sunday."
      }
    ],
    "practicePrompt": "Describe your typical weekday in 2 sentences, using at least one frequency word.",
    "modelAnswer": "On weekdays, I usually wake up at 6 and study before class. On Sunday, I always help my mom with the cooking.",
    "readFirst": {
      "pattern": [
        "Routine: <em>I usually / often / always</em> + simple present verb.",
        "Time: <em>at 6 AM, on weekdays, every night</em>.",
        "Chore: <em>My main chore is</em> + -ing or a noun."
      ],
      "whenToUse": "Talking about your daily life, study, work, or responsibilities at home.",
      "good": "I usually wake up at 6 AM and go to campus by 8.",
      "bad": "I am usually wake up at 6 AM.",
      "mistake": "Don't add 'am' or 'is' to routines. Use the base verb with I, you, we, and they, and add -s for he, she, and it (he wakes up)."
    }
  },
  {
    "unit": 3,
    "exam": "MIDTERM",
    "colorClass": "bg-sky",
    "shortLabel": "Talking About Habits",
    "headerLabel": "UNIT 03 // HABITS",
    "title": "Talking About Habits",
    "summary": "Talk about present habits with 'be used to' and 'used to', and use frequency adverbs.",
    "subtopics": [
      {
        "title": "Present Habits",
        "tag": "BE USED TO",
        "tip": "Use 'be used to' or 'be accustomed to' + -ing or a noun for things you are familiar with now.",
        "phrases": [
          "I'm used to waking up early for class.",
          "She's accustomed to working under pressure."
        ]
      },
      {
        "title": "Frequency Adverbs",
        "tag": "ALWAYS / OFTEN",
        "tip": "Place always, usually, and often before the main verb.",
        "phrases": [
          "I often study at the library on Fridays.",
          "He usually forgets his umbrella on rainy days."
        ]
      },
      {
        "title": "Past Habits",
        "tag": "USED TO",
        "tip": "Use 'used to' + base verb for habits that have stopped.",
        "phrases": [
          "What did you use to do on weekends?",
          "I used to play football every afternoon."
        ]
      }
    ],
    "dialogueTitle": "Old Habits, New Routines",
    "dialogue": [
      {
        "speaker": "ARIEL",
        "text": "I'm used to studying late at night, but I'm trying to change that."
      },
      {
        "speaker": "ADIT",
        "text": "What did you use to do in the evening?"
      },
      {
        "speaker": "ARIEL",
        "text": "I used to watch TV for hours, but now I usually read first."
      },
      {
        "speaker": "ADIT",
        "text": "That sounds like a healthy change!"
      }
    ],
    "practicePrompt": "Write 2 sentences: one present habit you are used to, and one thing you used to do.",
    "modelAnswer": "I'm used to waking up early now, but I used to sleep until noon on weekends.",
    "readFirst": {
      "pattern": [
        "Familiar now: <em>be used to</em> + -ing or a noun (I'm used to waking up early).",
        "Past habit: <em>used to</em> + base verb (I used to play football).",
        "Frequency: <em>always / usually / often</em> before the main verb."
      ],
      "whenToUse": "Describing habits you have now, habits you had before, and how often you do things.",
      "good": "I'm used to waking up early, but I used to sleep until noon.",
      "bad": "I'm used to wake up early.",
      "mistake": "'Used to' (a past habit) and 'be used to' (familiar with) look alike, but they're different. 'Be used to' takes -ing: I'm used to waking up, not I'm used to wake up."
    }
  },
  {
    "unit": 4,
    "exam": "MIDTERM",
    "colorClass": "bg-coral",
    "shortLabel": "Describing Objects",
    "headerLabel": "UNIT 04 // OBJECTS",
    "title": "Describing Objects",
    "summary": "Describe things using adjectives in the correct order.",
    "subtopics": [
      {
        "title": "Adjective Order",
        "tag": "ORDER",
        "tip": "Use opinion, size, age, shape, color, origin, material, purpose, then the noun.",
        "phrases": [
          "It's a lovely small wooden table.",
          "This is an old round silver watch."
        ]
      },
      {
        "title": "Describing Features",
        "tag": "DETAILS",
        "tip": "Focus on color, shape, material, and what the object is used for.",
        "phrases": [
          "It has a soft blue cover and a sturdy metal frame.",
          "It's a handy tool for cutting paper."
        ]
      }
    ],
    "dialogueTitle": "Shopping for a Gift",
    "dialogue": [
      {
        "speaker": "KARINA",
        "text": "What do you think of this bag?"
      },
      {
        "speaker": "ARIEL",
        "text": "It's a beautiful leather bag, and it looks quite large."
      },
      {
        "speaker": "KARINA",
        "text": "Perfect! Is it for travel?"
      },
      {
        "speaker": "ARIEL",
        "text": "Yes, it's a practical bag for weekend trips."
      }
    ],
    "practicePrompt": "Describe an object on your desk using at least three adjectives in the correct order.",
    "modelAnswer": "It's a useful small black plastic box for keeping my pens.",
    "readFirst": {
      "pattern": [
        "Order: opinion, size, age, shape, color, origin, material, purpose, then the noun.",
        "Example: <em>a useful small black plastic box</em>."
      ],
      "whenToUse": "Describing objects in a shop, at home, or in a product review.",
      "good": "It's a useful small black plastic box.",
      "bad": "It's a plastic small useful box black.",
      "mistake": "English adjectives follow an order. Opinion comes first, then size, then color, then material, and the noun comes last."
    }
  },
  {
    "unit": 5,
    "exam": "MIDTERM",
    "colorClass": "bg-lilac",
    "shortLabel": "Describing People",
    "headerLabel": "UNIT 05 // PEOPLE",
    "title": "Describing People",
    "summary": "Describe people's appearance and personality with simple, clear descriptions.",
    "subtopics": [
      {
        "title": "Physical Appearance",
        "tag": "APPEARANCE",
        "tip": "Use 'has + noun' or 'is + adjective' for hair, height, and build.",
        "phrases": [
          "She has long, wavy brown hair and wears glasses.",
          "He's tall and slim, with short curly hair."
        ]
      },
      {
        "title": "Personality Traits",
        "tag": "CHARACTER",
        "tip": "Use adjectives and a short example to show personality.",
        "phrases": [
          "He's really easygoing, although he can be a bit stubborn.",
          "She's outgoing and always makes new friends."
        ]
      }
    ],
    "dialogueTitle": "Describing a Friend",
    "dialogue": [
      {
        "speaker": "ADIT",
        "text": "What is your new roommate like?"
      },
      {
        "speaker": "KARINA",
        "text": "She's friendly and very organized. She has short black hair and always wears a green jacket."
      },
      {
        "speaker": "ADIT",
        "text": "Sounds like a good match!"
      },
      {
        "speaker": "KARINA",
        "text": "Yes, she's easygoing, but she can be a bit shy at first."
      }
    ],
    "practicePrompt": "Describe someone you know: one physical feature and one personality trait.",
    "modelAnswer": "My sister has long dark hair and a big smile. She's very outgoing, and she always helps others.",
    "readFirst": {
      "pattern": [
        "Appearance: <em>has</em> + noun (has long hair) or <em>is</em> + adjective (is tall).",
        "Personality: <em>is</em> + adjective (is outgoing, is easygoing).",
        "Softening: <em>a bit</em> or <em>can be</em> before a negative trait."
      ],
      "whenToUse": "Introducing someone, describing a friend, or talking about a new classmate or colleague.",
      "good": "She's friendly, although she can be a bit shy at first.",
      "bad": "She is ugly and lazy.",
      "mistake": "Harsh words sound rude when you describe someone. Soften negative traits with 'a bit' or 'can be'."
    }
  },
  {
    "unit": 6,
    "exam": "MIDTERM",
    "colorClass": "bg-peach",
    "shortLabel": "Asking for Help & Permission",
    "headerLabel": "UNIT 06 // HELP & PERMISSION",
    "title": "Asking for Help and Permission",
    "summary": "Ask for help or permission politely, using modal verbs and polite request forms.",
    "subtopics": [
      {
        "title": "Asking for Help",
        "tag": "HELP",
        "tip": "Start with 'Could you...' or 'Would you mind...'.",
        "phrases": [
          "Could you help me with this assignment?",
          "Would you mind explaining this part again?"
        ]
      },
      {
        "title": "Asking for Permission",
        "tag": "PERMISSION",
        "tip": "Use 'May I...?' or 'Is it okay if I...?'.",
        "phrases": [
          "May I borrow your notes for a moment?",
          "Is it okay if I sit here?"
        ]
      },
      {
        "title": "Polite Requests",
        "tag": "POLITENESS",
        "tip": "Add 'possibly' or 'for a moment' to make a request softer.",
        "phrases": [
          "Could you possibly send me the slides later?",
          "Would it be possible to reschedule our meeting?"
        ]
      }
    ],
    "dialogueTitle": "Borrowing a Pen",
    "dialogue": [
      {
        "speaker": "KARINA",
        "text": "Excuse me, may I borrow your pen for a moment?"
      },
      {
        "speaker": "ADIT",
        "text": "Sure, go ahead!"
      },
      {
        "speaker": "KARINA",
        "text": "Thanks! Would you mind explaining the assignment again?"
      },
      {
        "speaker": "ADIT",
        "text": "Of course. Let me show you."
      }
    ],
    "practicePrompt": "Write 2 polite requests: one asking for help and one asking for permission.",
    "modelAnswer": "Could you help me with this question? Is it okay if I use your laptop for a few minutes?",
    "readFirst": {
      "pattern": [
        "Help: <em>Could you...?</em> or <em>Would you mind + -ing...?</em>",
        "Permission: <em>May I...?</em> or <em>Is it okay if I...?</em>",
        "Softer: add <em>possibly</em> or <em>for a moment</em>."
      ],
      "whenToUse": "Asking teachers, classmates, or colleagues for help or permission.",
      "good": "Would you mind explaining this part again?",
      "bad": "Explain this again.",
      "mistake": "Direct commands like 'Explain this' or 'Give me your pen' sound rude. Use 'Could you...' or 'Would you mind...?' instead."
    }
  },
  {
    "unit": 7,
    "exam": "MIDTERM",
    "colorClass": "bg-yellow",
    "shortLabel": "Directions & Instructions",
    "headerLabel": "UNIT 07 // DIRECTIONS",
    "title": "Asking for and Giving Directions and Instructions",
    "summary": "Ask for directions, understand instructions, and give step-by-step guidance.",
    "subtopics": [
      {
        "title": "Asking for Directions",
        "tag": "DIRECTIONS",
        "tip": "Start politely, then ask about the place.",
        "phrases": [
          "Excuse me, how do I get to the main library?",
          "Is the cafeteria far from here?"
        ]
      },
      {
        "title": "Giving Directions",
        "tag": "NAVIGATION",
        "tip": "Use imperative verbs and prepositions of place.",
        "phrases": [
          "Go straight, then turn left at the traffic light.",
          "It's on your right, next to the bank."
        ]
      },
      {
        "title": "Giving Instructions",
        "tag": "SEQUENCE",
        "tip": "Use First, Then, and Finally to order the steps.",
        "phrases": [
          "First, log in to the portal. Then, upload your file.",
          "Finally, submit the link before the deadline."
        ]
      }
    ],
    "dialogueTitle": "Finding the Lab",
    "dialogue": [
      {
        "speaker": "ADIT",
        "text": "Excuse me, how do I get to the English lab?"
      },
      {
        "speaker": "ARIEL",
        "text": "Go straight, then turn right at the cafeteria. It's on your left, next to the library."
      },
      {
        "speaker": "ADIT",
        "text": "Thanks! Is it far from here?"
      },
      {
        "speaker": "ARIEL",
        "text": "No, it's only a two-minute walk."
      }
    ],
    "practicePrompt": "Write 3 steps to get from your classroom to the library, using First, Then, and Finally.",
    "modelAnswer": "First, leave the classroom and go down the stairs. Then, walk straight past the cafeteria. Finally, the library is on your right.",
    "readFirst": {
      "pattern": [
        "Ask: <em>Excuse me, how do I get to...?</em>",
        "Direct: <em>Go straight, turn left or right at..., it's on your left or right.</em>",
        "Sequence: <em>First, Then, Finally</em>."
      ],
      "whenToUse": "Asking for directions on campus, or giving step-by-step instructions.",
      "good": "Go straight, then turn left at the traffic light.",
      "bad": "You must to go straight then left.",
      "mistake": "Don't use 'must to' or 'you go' in instructions. Start with the base verb: Go straight, Turn left, Take the stairs."
    }
  },
  {
    unit: 9,
    exam: "FINAL",
    readFirst: {
      "pattern": [
        "Open: <em>Hi! Mind if I join you? I'm [name].</em>",
        "Follow up: <em>That's interesting. What got you into that?</em>",
        "Share an opinion: <em>I see your point, although I'd argue...</em>",
        "Close: <em>It was great chatting with you, though I should head to class now.</em>"
      ],
      "whenToUse": "Events, workshops, class breaks, or any time you meet someone new.",
      "good": "I see your point, although I'd argue timing also matters.",
      "bad": "You're totally wrong about that.",
      "mistake": "Starting with 'No' or 'You're wrong' makes the other person defensive. Acknowledge their idea first, then add yours."
    },
    colorClass: "bg-yellow",
    shortLabel: "Social Situations",
    headerLabel: "UNIT 09 // SOCIAL SITUATIONS",
    title: "Having a Conversation: What to Say in Social Situations",
    summary: "Start natural small talk, keep conversations flowing, share opinions politely, and exit smoothly.",
    subtopics: [
      {
        title: "Opening a Conversation",
        tag: "ICEBREAKERS",
        tip: "Use a friendly greeting + shared context question.",
        phrases: [
          "Hi! Mind if I join you? I'm Adit, by the way.",
          "Great session today. What did you think of the main topic?"
        ]
      },
      {
        title: "Making & Sustaining Chat",
        tag: "FOLLOW-UP",
        tip: "Ask open 'What/How' questions to keep momentum.",
        phrases: [
          "That's interesting. What got you into that field?",
          "Speaking of which, have you tried using it in your project?"
        ]
      },
      {
        title: "Closing a Conversation",
        tag: "POLITE EXIT",
        tip: "Thank them + give a clear reason for leaving.",
        phrases: [
          "It was great chatting with you, though I should head to class now.",
          "Let's stay in touch. Feel free to reach out anytime!"
        ]
      },
      {
        title: "Sharing Opinions",
        tag: "VIEWPOINTS",
        tip: "Acknowledge their point before adding yours.",
        phrases: [
          "From my perspective, real speaking practice beats memorizing rules.",
          "I see your point, although I'd argue timing also matters."
        ]
      }
    ],
    dialogueTitle: "Campus Workshop Mixer",
    dialogue: [
      { speaker: "ADIT", text: "Hi! Great turnout today. What brought you to this workshop?" },
      { speaker: "KARINA", text: "I wanted more speaking practice. From my perspective, real practice helps most." },
      { speaker: "ADIT", text: "Agreed! I need to join my group now. Great chatting with you!" }
    ],
    practicePrompt: "Write 2 lines: open a chat with a classmate and share one opinion.",
    modelAnswer: "Hi! Mind if I join you? I'm Adit. I think group discussions really help us learn faster."
  },
  {
    unit: 10,
    exam: "FINAL",
    readFirst: {
      "pattern": [
        "Headline: state the main event first.",
        "Details: when (at 9 AM), where (in the Student Center), and who or what.",
        "Reason: <em>because</em> + clause, or <em>as a result</em> / <em>due to</em> + noun."
      ],
      "whenToUse": "News reports, retelling an event, or explaining what happened.",
      "good": "At 9 AM today in the Student Center, Group 11 launched a speaking app because students needed more practice.",
      "bad": "Yesterday, app, students, practice, good, many people.",
      "mistake": "Listing facts without order makes the story hard to follow. Start with the main event, then add time, place, and reason."
    },
    colorClass: "bg-mint",
    shortLabel: "Story & News Report",
    headerLabel: "UNIT 10 // STORY & NEWS REPORT",
    title: "Story (Re-)Telling and News Report",
    summary: "Tell engaging stories in sequence and report events clearly using What, When, Where, How, and Why.",
    subtopics: [
      {
        title: "Re-telling Stories",
        tag: "SEQUENCE",
        tip: "Hook the listener -> build tension -> share the ending.",
        phrases: [
          "You won't believe what happened on my way to campus yesterday...",
          "At first everything seemed normal, until suddenly the lights went out."
        ]
      },
      {
        title: "What Happened? (Headline)",
        tag: "CORE EVENT",
        tip: "State the main event clearly in one sentence.",
        phrases: [
          "Student researchers just launched a solar-powered study kiosk.",
          "Over 300 students tested the new app during its first week."
        ]
      },
      {
        title: "When & Where?",
        tag: "TIME & PLACE",
        tip: "Anchor your report with exact time and location.",
        phrases: [
          "The event took place at 9 AM outside the main auditorium.",
          "According to witnesses, it happened right after the morning lecture."
        ]
      },
      {
        title: "How & Why?",
        tag: "CAUSE & METHOD",
        tip: "Use 'because' or 'as a result' to explain reasons.",
        phrases: [
          "It succeeded because the team tested three prototypes first.",
          "Due to heavy rain, the outdoor showcase moved indoors."
        ]
      }
    ],
    dialogueTitle: "60-Second Campus News Brief",
    dialogue: [
      { speaker: "ANCHOR", text: "At 9 AM today in the Student Center, Group 11 launched a speaking practice web app." },
      { speaker: "REPORTER", text: "They built it because students wanted a clean tool for real conversation drills." },
      { speaker: "ANCHOR", text: "Over fifty classmates tried it during the live demo." }
    ],
    practicePrompt: "Report a recent event in 2 sentences (What, When/Where, Why).",
    modelAnswer: "At 9 AM today in the Student Center, Group 11 launched a speaking practice app. They built it because students needed more real conversation practice."
  },
  {
    unit: 11,
    exam: "FINAL",
    readFirst: {
      "pattern": [
        "Past habit: <em>used to</em> + base verb (used to carry, used to meet).",
        "Contrast: ..., <em>whereas now</em> + present clause.",
        "Trend: <em>More and more</em> + plural noun + <em>are</em> + -ing."
      ],
      "whenToUse": "Comparing how things were with how they are now.",
      "good": "We used to carry heavy dictionaries, whereas now we check audio online.",
      "bad": "We used to went to the library every day.",
      "mistake": "<em>Used to</em> (a past habit) is different from <em>be used to</em> (be familiar with). After <em>used to</em>, always use the base verb."
    },
    colorClass: "bg-sky",
    shortLabel: "Recent Changes",
    headerLabel: "UNIT 11 // RECENT CHANGES",
    title: "Talking about Recent Changes",
    summary: "Compare past habits and conditions with today's reality using clear contrast patterns.",
    subtopics: [
      {
        title: "Past vs. Present Habits",
        tag: "USED TO vs NOW",
        tip: "Pair 'used to + verb' with 'whereas now...'",
        phrases: [
          "We used to carry heavy dictionaries, whereas now we check audio online.",
          "Compared to five years ago, online teamwork is second nature."
        ]
      },
      {
        title: "Describing Ongoing Trends",
        tag: "CURRENT SHIFTS",
        tip: "Use 'More and more...' + present continuous.",
        phrases: [
          "More and more students are using interactive apps to practice English.",
          "What has changed most is how fast teams share feedback."
        ]
      }
    ],
    dialogueTitle: "How Study Habits Changed",
    dialogue: [
      { speaker: "ARIEL", text: "Group projects feel way smoother than in our first semester." },
      { speaker: "ADIT", text: "True! We used to meet only in the library, whereas now we co-edit online first." },
      { speaker: "ARIEL", text: "And as a result, our live discussions are much faster." }
    ],
    practicePrompt: "Compare one habit today with how you used to do it 3 years ago.",
    modelAnswer: "I used to rely on printed dictionaries, but now I check audio pronunciation online. Compared to three years ago, I speak English much more confidently."
  },
  {
    unit: 12,
    exam: "FINAL",
    readFirst: {
      "pattern": [
        "Imagined situation: <em>If</em> + past simple, <em>I would</em> + base verb.",
        "Use <em>If I were</em> for all subjects in formal speech: <em>If I were you, I would...</em>"
      ],
      "whenToUse": "Interview 'what if' questions, when you describe what you would do in a hypothetical situation.",
      "good": "If I were faced with a sudden deadline shift, I would reprioritize key tasks first.",
      "bad": "If I will have a deadline, I will do it first.",
      "mistake": "Don't use <em>will</em> in the if-clause. Hypotheticals use the past form after <em>if</em>, even though the meaning is about now or the future."
    },
    colorClass: "bg-coral",
    shortLabel: "Job Interviews",
    headerLabel: "UNIT 12 // JOB INTERVIEWS",
    title: "Hypothetical Situations/Questions in Job Interviews",
    summary: "Answer 'What if...' interview questions calmly using 2nd Conditionals and neutral, nonjudgmental language.",
    subtopics: [
      {
        title: "Hypothetical Situations",
        tag: "IF I WERE... I WOULD...",
        tip: "Use 'If I were...' + 'I would...' for imagined scenarios.",
        phrases: [
          "If I were faced with a sudden deadline shift, I would reprioritize key tasks first.",
          "Suppose two teammates disagreed. I would host a quick 5-minute alignment chat."
        ]
      },
      {
        title: "Nonjudgmental Responding",
        tag: "OBJECTIVE TONE",
        tip: "Focus on obstacles and solutions rather than blaming people.",
        phrases: [
          "Rather than assuming carelessness, I would ask what blocked their progress.",
          "Clarifying expectations early helps different working styles click."
        ]
      }
    ],
    dialogueTitle: "Interview Scenario Check",
    dialogue: [
      { speaker: "HR", text: "What would you do if a teammate missed a deadline before a presentation?" },
      { speaker: "CANDIDATE", text: "I would check in without judgment to spot the bottleneck, then split remaining tasks." },
      { speaker: "HR", text: "Great. Calm, fair, and solution-focused." }
    ],
    practicePrompt: "Complete: 'If a teammate fell behind on a group task, I would...'",
    modelAnswer: "If a teammate fell behind on a group task, I would check in calmly to understand the problem, then split the remaining tasks."
  },
  {
    unit: 13,
    exam: "FINAL",
    readFirst: {
      "pattern": [
        "Apologize: <em>I sincerely apologize for...</em>",
        "Show empathy: <em>I understand how frustrating that must be.</em>",
        "Fix it: <em>I'll... right away</em> or <em>by tomorrow</em>."
      ],
      "whenToUse": "Someone is upset about a delay, a problem, or a mistake.",
      "good": "I completely understand why you're frustrated. I'll fix it today.",
      "bad": "It's not my fault. The system was slow.",
      "mistake": "Don't start with excuses. Apologize first, show that you understand, then explain what you will do."
    },
    colorClass: "bg-lilac",
    shortLabel: "Dealing with Complaints",
    headerLabel: "UNIT 13 // COMPLAINTS",
    title: "Dealing with Complaints",
    summary: "Calm upset people by apologizing directly, showing genuine sympathy, and offering a clear fix.",
    subtopics: [
      {
        title: "Apologizing Sincerely",
        tag: "OWNERSHIP",
        tip: "Apologize directly without making defensive excuses.",
        phrases: [
          "I sincerely apologize for the delay and any inconvenience caused.",
          "That fell short of our standard, and I'll fix it right away."
        ]
      },
      {
        title: "Showing Sympathy",
        tag: "EMPATHY FIRST",
        tip: "Validate their frustration before explaining the solution.",
        phrases: [
          "I completely understand why you're frustrated. I'd feel the same way.",
          "Thank you for flagging this early so we can make it right."
        ]
      }
    ],
    dialogueTitle: "Handling a Late Delivery",
    dialogue: [
      { speaker: "CLIENT", text: "Our printed handouts arrived late, and the session already started." },
      { speaker: "STAFF", text: "I completely understand how stressful that is, and I sincerely apologize." },
      { speaker: "STAFF", text: "I'm bringing the remaining copies straight to your room right now." }
    ],
    practicePrompt: "Write 1 polite sentence apologizing and showing sympathy for a late reply.",
    modelAnswer: "I'm really sorry for the late reply. I understand how frustrating that must be, and I'll get back to you today."
  },
  {
    unit: 14,
    exam: "FINAL",
    readFirst: {
      "pattern": [
        "Suggest: <em>Have you considered</em> + -ing? or <em>What if we...?</em>",
        "Compromise: <em>One practical compromise is to...</em>",
        "Simplify: <em>To put it simply, ...</em> or <em>Just to recap, we agreed to...</em>"
      ],
      "whenToUse": "People disagree and you want to move toward a solution together.",
      "good": "Have you considered combining both ideas into a two-part layout?",
      "bad": "You have to do it my way.",
      "mistake": "Avoid commands like 'You have to'. Suggestions with 'Have you considered...' or 'What if...' sound collaborative."
    },
    colorClass: "bg-peach",
    shortLabel: "Conflict Resolution",
    headerLabel: "UNIT 14 // CONFLICT RESOLUTION",
    title: "Conflict Resolution",
    summary: "Resolve disagreements constructively with practical suggestions, logical arguments, and clear explanations.",
    subtopics: [
      {
        title: "Giving Advice & Suggestions",
        tag: "COLLABORATIVE",
        tip: "Frame suggestions as 'Have you considered...?'",
        phrases: [
          "Have you considered combining both ideas into a two-part layout?",
          "One practical compromise is to keep the design clean and test it with peers."
        ]
      },
      {
        title: "Making Arguments",
        tag: "CLAIM + REASON",
        tip: "State your point + support it with user benefit.",
        phrases: [
          "I recommend shorter text because readers scan key points in seconds.",
          "While color adds energy, keeping white space prevents visual clutter."
        ]
      },
      {
        title: "Explaining Clearly",
        tag: "SIMPLIFY",
        tip: "Use 'To put it simply...' or numbered steps.",
        phrases: [
          "To put it simply: define the issue, pick a compromise, and move forward.",
          "Just to recap, we agreed to keep 6 units and add color accents."
        ]
      }
    ],
    dialogueTitle: "Team Design Compromise",
    dialogue: [
      { speaker: "ARIEL", text: "I think keeping it simple with less text makes the website easier to read." },
      { speaker: "KARINA", text: "Good point. To put it simply, we want color energy without walls of text." },
      { speaker: "ARIEL", text: "Yes! Soft color accents + short bullet points works best." }
    ],
    practicePrompt: "Write 1 suggestion using 'Have you considered...' to solve a group disagreement.",
    modelAnswer: "Have you considered splitting the slides between two presenters? It keeps the content clear and shares the workload."
  }
];

// 2. Rare Words Dataset (16 Words — Crisp & Scannable)
const VOCAB_DATA = [
  {
    id: "petrichor",
    word: "Petrichor",
    ipa: "/ˈpet.rɪ.kɔːr/",
    pos: "NOUN",
    category: "Nature & Atmosphere",
    badgeColor: "bg-mint",
    definition: "The pleasant, earthy smell after rain falls on dry ground.",
    basicAlt: "Nice smell when it rains",
    origin: "Greek 'petra' (stone) + 'ichor' (ethereal fluid).",
    example: "The evening drizzle released a wave of fresh petrichor."
  },
  {
    id: "sonder",
    word: "Sonder",
    ipa: "/ˈsɒn.dər/",
    pos: "NOUN",
    category: "Emotion & Mind",
    badgeColor: "bg-yellow",
    definition: "Realizing that every stranger around you has a life as complex as your own.",
    basicAlt: "Realizing strangers also have deep lives",
    origin: "Coined in The Dictionary of Obscure Sorrows.",
    example: "Watching commuters at the station gave Maya a quiet moment of sonder."
  },
  {
    id: "ineffable",
    word: "Ineffable",
    ipa: "/ɪnˈef.ə.bəl/",
    pos: "ADJECTIVE",
    category: "Emotion & Mind",
    badgeColor: "bg-yellow",
    definition: "Too great or beautiful to be described in words.",
    basicAlt: "Impossible to put into words",
    origin: "Latin 'ineffabilis' (unutterable).",
    example: "Sunrise above the clouds filled us with an ineffable sense of awe."
  },
  {
    id: "mellifluous",
    word: "Mellifluous",
    ipa: "/məˈlɪf.lu.əs/",
    pos: "ADJECTIVE",
    category: "Nature & Atmosphere",
    badgeColor: "bg-mint",
    definition: "A voice or sound that is sweet, smooth, and pleasant to hear.",
    basicAlt: "Very smooth sounding",
    origin: "Latin 'mel' (honey) + 'fluere' (to flow).",
    example: "The speaker's mellifluous voice kept the whole room listening."
  },
  {
    id: "luminous",
    word: "Luminous",
    ipa: "/ˈluː.mɪ.nəs/",
    pos: "ADJECTIVE",
    category: "Nature & Atmosphere",
    badgeColor: "bg-mint",
    definition: "Full of light; glowing brightly in the dark.",
    basicAlt: "Very bright and glowing",
    origin: "Latin 'lumen' (light).",
    example: "Jellyfish drifted like luminous lanterns under the night waves."
  },
  {
    id: "wanderlust",
    word: "Wanderlust",
    ipa: "/ˈwɒn.də.lʌst/",
    pos: "NOUN",
    category: "Emotion & Mind",
    badgeColor: "bg-yellow",
    definition: "A strong, irresistible desire to travel and explore the world.",
    basicAlt: "Strong urge to travel",
    origin: "German 'wandern' (roam) + 'Lust' (desire).",
    example: "Looking at railway maps always sparks her wanderlust."
  },
  {
    id: "euphoria",
    word: "Euphoria",
    ipa: "/juːˈfɔː.ri.ə/",
    pos: "NOUN",
    category: "Emotion & Mind",
    badgeColor: "bg-yellow",
    definition: "A feeling of intense excitement and overwhelming happiness.",
    basicAlt: "Feeling extremely happy",
    origin: "Greek 'euphoros' (bearing well).",
    example: "A wave of euphoria hit the team when they won first place."
  },
  {
    id: "enigmatic",
    word: "Enigmatic",
    ipa: "/ˌen.ɪɡˈmæt.ɪk/",
    pos: "ADJECTIVE",
    category: "Character & Style",
    badgeColor: "bg-sky",
    definition: "Mysterious and difficult to interpret or understand.",
    basicAlt: "Mysterious and hard to read",
    origin: "Greek 'ainigma' (riddle).",
    example: "She gave an enigmatic smile before opening the envelope."
  },
  {
    id: "serene",
    word: "Serene",
    ipa: "/səˈriːn/",
    pos: "ADJECTIVE",
    category: "Nature & Atmosphere",
    badgeColor: "bg-mint",
    definition: "Calm, peaceful, and completely untroubled.",
    basicAlt: "Very calm and peaceful",
    origin: "Latin 'serenus' (clear, cloudless).",
    example: "At dawn, the mountain lake looked completely serene."
  },
  {
    id: "audacious",
    word: "Audacious",
    ipa: "/ɔːˈdeɪ.ʃəs/",
    pos: "ADJECTIVE",
    category: "Character & Style",
    badgeColor: "bg-sky",
    definition: "Willing to take bold risks; fearless and daring.",
    basicAlt: "Very bold and fearless",
    origin: "Latin 'audere' (to dare).",
    example: "Launching a student studio in semester one was an audacious move."
  },
  {
    id: "ephemeral",
    word: "Ephemeral",
    ipa: "/ɪˈfem.ər.əl/",
    pos: "ADJECTIVE",
    category: "Time & Society",
    badgeColor: "bg-lilac",
    definition: "Lasting for only a very short time; fleeting.",
    basicAlt: "Lasting a short moment",
    origin: "Greek 'ephemeros' (lasting a day).",
    example: "Cherry blossoms are special because their beauty is ephemeral."
  },
  {
    id: "serendipity",
    word: "Serendipity",
    ipa: "/ˌser.ənˈdɪp.ə.ti/",
    pos: "NOUN",
    category: "Time & Society",
    badgeColor: "bg-lilac",
    definition: "Finding valuable or happy things by pure lucky chance.",
    basicAlt: "A lucky coincidence",
    origin: "Coined by Horace Walpole in 1754.",
    example: "Finding that rare book in a tiny alley shop was pure serendipity."
  },
  {
    id: "eloquent",
    word: "Eloquent",
    ipa: "/ˈel.ə.kwənt/",
    pos: "ADJECTIVE",
    category: "Character & Style",
    badgeColor: "bg-sky",
    definition: "Fluent, persuasive, and expressive when speaking or writing.",
    basicAlt: "Speaking persuasively",
    origin: "Latin 'eloqui' (to speak out).",
    example: "Her eloquent speech convinced every judge in the room."
  },
  {
    id: "resilient",
    word: "Resilient",
    ipa: "/rɪˈzɪl.jənt/",
    pos: "ADJECTIVE",
    category: "Character & Style",
    badgeColor: "bg-sky",
    definition: "Able to recover quickly from setbacks or tough conditions.",
    basicAlt: "Bounces back fast",
    origin: "Latin 'resilire' (to spring back).",
    example: "Great teams stay resilient even when plans change last minute."
  },
  {
    id: "nostalgia",
    word: "Nostalgia",
    ipa: "/nɒsˈtæl.dʒə/",
    pos: "NOUN",
    category: "Time & Society",
    badgeColor: "bg-lilac",
    definition: "A warm, sentimental longing for memories from the past.",
    basicAlt: "Missing good past memories",
    origin: "Greek 'nostos' (homecoming) + 'algos' (ache).",
    example: "That old song filled the room with instant childhood nostalgia."
  },
  {
    id: "quintessential",
    word: "Quintessential",
    ipa: "/ˌkwɪn.tɪˈsen.ʃəl/",
    pos: "ADJECTIVE",
    category: "Time & Society",
    badgeColor: "bg-lilac",
    definition: "Representing the most perfect or classic example of something.",
    basicAlt: "The most classic example",
    origin: "Medieval Latin 'quinta essentia' (fifth essence).",
    example: "Rainy coffee shop reading is the quintessential autumn vibe."
  },
  {
    "id": "ubiquitous",
    "word": "Ubiquitous",
    "ipa": "/juːˈbɪk.wɪ.təs/",
    "pos": "ADJECTIVE",
    "category": "Time & Society",
    "badgeColor": "bg-lilac",
    "definition": "Present or found everywhere.",
    "basicAlt": "Found everywhere",
    "origin": "Latin 'ubique' (everywhere).",
    "example": "Smartphones have become ubiquitous on campus."
  },
  {
    "id": "candid",
    "word": "Candid",
    "ipa": "/ˈkæn.dɪd/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Honest and open about what you really think.",
    "basicAlt": "Honest and direct",
    "origin": "Latin 'candidus' (white, sincere).",
    "example": "She gave a candid answer about her weak points in the interview."
  },
  {
    "id": "tenacious",
    "word": "Tenacious",
    "ipa": "/təˈneɪ.ʃəs/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Holding firmly to a goal and refusing to give up.",
    "basicAlt": "Never gives up",
    "origin": "Latin 'tenax' (holding fast).",
    "example": "Her tenacious study habits helped her pass the exam."
  },
  {
    "id": "melancholy",
    "word": "Melancholy",
    "ipa": "/ˈmel.ən.kɒl.i/",
    "pos": "NOUN",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "A deep, gentle sadness, often without a clear cause.",
    "basicAlt": "Quiet sadness",
    "origin": "Greek 'melancholia' (black bile).",
    "example": "A melancholy mood settled over the campus after the holidays."
  },
  {
    "id": "gregarious",
    "word": "Gregarious",
    "ipa": "/ɡrɪˈɡeə.ri.əs/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Friendly and enjoying the company of other people.",
    "basicAlt": "Very sociable",
    "origin": "Latin 'gregarius' (of the herd).",
    "example": "The gregarious host introduced everyone in the room."
  },
  {
    "id": "pragmatic",
    "word": "Pragmatic",
    "ipa": "/præɡˈmæt.ɪk/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Dealing with problems in a practical, realistic way.",
    "basicAlt": "Practical and realistic",
    "origin": "Greek 'pragmatikos' (relating to action).",
    "example": "Her pragmatic plan saved the team a lot of time."
  },
  {
    "id": "ambivalent",
    "word": "Ambivalent",
    "ipa": "/æmˈbɪv.ə.lənt/",
    "pos": "ADJECTIVE",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "Having mixed or conflicting feelings about something.",
    "basicAlt": "Not sure how I feel",
    "origin": "Latin 'ambo' (both) and 'valere' (to be strong).",
    "example": "I feel ambivalent about moving to a new city."
  },
  {
    "id": "resplendent",
    "word": "Resplendent",
    "ipa": "/rɪˈsplen.dənt/",
    "pos": "ADJECTIVE",
    "category": "Nature & Atmosphere",
    "badgeColor": "bg-mint",
    "definition": "Shining brightly and looking very beautiful.",
    "basicAlt": "Very bright and beautiful",
    "origin": "Latin 'resplendere' (to shine brightly).",
    "example": "The stage looked resplendent under the golden lights."
  },
  {
    "id": "perseverance",
    "word": "Perseverance",
    "ipa": "/ˌpɜː.sɪˈvɪə.rəns/",
    "pos": "NOUN",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Continued effort despite difficulties.",
    "basicAlt": "Not giving up",
    "origin": "Latin 'perseverare' (to persist).",
    "example": "Her perseverance paid off after months of practice."
  },
  {
    "id": "procrastinate",
    "word": "Procrastinate",
    "ipa": "/prəˈkræs.tɪ.neɪt/",
    "pos": "VERB",
    "category": "Time & Society",
    "badgeColor": "bg-lilac",
    "definition": "To delay doing something you should do now.",
    "basicAlt": "Put things off",
    "origin": "Latin 'procrastinare' (to put off until tomorrow).",
    "example": "I tend to procrastinate when an assignment feels too big."
  },
  {
    "id": "punctual",
    "word": "Punctual",
    "ipa": "/ˈpʌŋk.tʃu.əl/",
    "pos": "ADJECTIVE",
    "category": "Time & Society",
    "badgeColor": "bg-lilac",
    "definition": "Arriving or doing something exactly on time.",
    "basicAlt": "Always on time",
    "origin": "Latin 'punctualis' (exact, to the point).",
    "example": "Our tutor is always punctual, so we start on time."
  },
  {
    "id": "mundane",
    "word": "Mundane",
    "ipa": "/mʌnˈdeɪn/",
    "pos": "ADJECTIVE",
    "category": "Time & Society",
    "badgeColor": "bg-lilac",
    "definition": "Ordinary and not interesting.",
    "basicAlt": "Boring and ordinary",
    "origin": "Latin 'mundanus' (of the world).",
    "example": "Even mundane chores feel better with a good playlist."
  },
  {
    "id": "vivacious",
    "word": "Vivacious",
    "ipa": "/vɪˈveɪ.ʃəs/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Full of energy, lively, and cheerful.",
    "basicAlt": "Very lively",
    "origin": "Latin 'vivax' (lively).",
    "example": "The vivacious presenter got the whole room laughing."
  },
  {
    "id": "lucid",
    "word": "Lucid",
    "ipa": "/ˈluː.sɪd/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Expressed clearly and easy to understand.",
    "basicAlt": "Clear and easy to understand",
    "origin": "Latin 'lucidus' (bright, clear).",
    "example": "Her lucid explanation made the topic easy to follow."
  },
  {
    "id": "apprehensive",
    "word": "Apprehensive",
    "ipa": "/ˌæp.rɪˈhen.sɪv/",
    "pos": "ADJECTIVE",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "Anxious or worried about something that may happen.",
    "basicAlt": "Worried about the future",
    "origin": "Latin 'apprehendere' (to seize, to grasp).",
    "example": "She felt apprehensive before her first presentation."
  },
  {
    "id": "nonchalant",
    "word": "Nonchalant",
    "ipa": "/ˈnɒn.ʃə.lɒnt/",
    "pos": "ADJECTIVE",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "Calm and relaxed, showing no worry or interest.",
    "basicAlt": "Relaxed and unbothered",
    "origin": "French 'nonchalant' (not concerned).",
    "example": "He stayed nonchalant even when the deadline moved."
  },
  {
    "id": "exhilarated",
    "word": "Exhilarated",
    "ipa": "/ɪɡˈzɪl.ə.reɪ.tɪd/",
    "pos": "ADJECTIVE",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "Feeling very excited and full of energy.",
    "basicAlt": "Very excited",
    "origin": "Latin 'exhilarare' (to cheer up).",
    "example": "We felt exhilarated after the final result was announced."
  },
  {
    "id": "resentful",
    "word": "Resentful",
    "ipa": "/rɪˈzent.fəl/",
    "pos": "ADJECTIVE",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "Feeling bitter about something you consider unfair.",
    "basicAlt": "Bitter about something unfair",
    "origin": "Old French 'ressentir' (to feel strongly).",
    "example": "She was resentful about being left out of the project."
  },
  {
    "id": "apathetic",
    "word": "Apathetic",
    "ipa": "/ˌæp.əˈθet.ɪk/",
    "pos": "ADJECTIVE",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "Showing little or no interest or emotion.",
    "basicAlt": "Not interested at all",
    "origin": "Greek 'apatheia' (without feeling).",
    "example": "Many students were apathetic about the optional workshop."
  },
  {
    "id": "jubilant",
    "word": "Jubilant",
    "ipa": "/ˈdʒuː.bɪ.lənt/",
    "pos": "ADJECTIVE",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "Feeling great joy, especially after a success.",
    "basicAlt": "Very happy after winning",
    "origin": "Latin 'jubilare' (to shout for joy).",
    "example": "The team was jubilant after winning the competition."
  },
  {
    "id": "reluctant",
    "word": "Reluctant",
    "ipa": "/rɪˈlʌk.tənt/",
    "pos": "ADJECTIVE",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "Unwilling to do something.",
    "basicAlt": "Not really willing",
    "origin": "Latin 'reluctari' (to struggle against).",
    "example": "He was reluctant to share his draft before it was finished."
  },
  {
    "id": "wary",
    "word": "Wary",
    "ipa": "/ˈweə.ri/",
    "pos": "ADJECTIVE",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "Careful because you expect problems or danger.",
    "basicAlt": "Careful and suspicious",
    "origin": "Old English 'wær' (aware, cautious).",
    "example": "I'm wary of offers that sound too good to be true."
  },
  {
    "id": "bewildered",
    "word": "Bewildered",
    "ipa": "/bɪˈwɪl.dəd/",
    "pos": "ADJECTIVE",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "Confused and unable to understand something.",
    "basicAlt": "Totally confused",
    "origin": "Based on 'wilder' (to lead astray).",
    "example": "The bewildered tourist checked the map again."
  },
  {
    "id": "indignant",
    "word": "Indignant",
    "ipa": "/ɪnˈdɪɡ.nənt/",
    "pos": "ADJECTIVE",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "Angry because something is unfair or wrong.",
    "basicAlt": "Angry about something unfair",
    "origin": "Latin 'indignari' (to regard as unworthy).",
    "example": "The customer was indignant about the wrong charge."
  },
  {
    "id": "euphoric",
    "word": "Euphoric",
    "ipa": "/juːˈfɒr.ɪk/",
    "pos": "ADJECTIVE",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "Feeling intense happiness.",
    "basicAlt": "Extremely happy",
    "origin": "Greek 'euphoria' (well-bearing).",
    "example": "The crowd was euphoric when the band returned."
  },
  {
    "id": "sentimental",
    "word": "Sentimental",
    "ipa": "/ˌsen.tɪˈmen.təl/",
    "pos": "ADJECTIVE",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "Easily moved by feelings, often about memories.",
    "basicAlt": "Emotional about memories",
    "origin": "Latin 'sentire' (to feel).",
    "example": "He kept a sentimental collection of old letters."
  },
  {
    "id": "skeptical",
    "word": "Skeptical",
    "ipa": "/ˈskep.tɪ.kəl/",
    "pos": "ADJECTIVE",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "Doubtful about whether something is true.",
    "basicAlt": "Doubtful",
    "origin": "Greek 'skeptikos' (thoughtful, inquiring).",
    "example": "I'm skeptical about the claim until I see the data."
  },
  {
    "id": "trepidation",
    "word": "Trepidation",
    "ipa": "/ˌtrep.ɪˈdeɪ.ʃən/",
    "pos": "NOUN",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "A feeling of fear or nervousness about what may happen.",
    "basicAlt": "Nervousness",
    "origin": "Latin 'trepidatio' (alarm, agitation).",
    "example": "She walked onto the stage with trepidation."
  },
  {
    "id": "ecstatic",
    "word": "Ecstatic",
    "ipa": "/ɪkˈstæt.ɪk/",
    "pos": "ADJECTIVE",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "Extremely happy and excited.",
    "basicAlt": "Super happy",
    "origin": "Greek 'ekstatikos' (ecstasy).",
    "example": "The fans were ecstatic when the band returned."
  },
  {
    "id": "forlorn",
    "word": "Forlorn",
    "ipa": "/fəˈlɔːn/",
    "pos": "ADJECTIVE",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "Lonely and sad, especially when left behind.",
    "basicAlt": "Lonely and sad",
    "origin": "Old English 'forlosen' (lost, abandoned).",
    "example": "The forlorn puppy waited by the gate."
  },
  {
    "id": "pensive",
    "word": "Pensive",
    "ipa": "/ˈpen.sɪv/",
    "pos": "ADJECTIVE",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "Thinking quietly and deeply.",
    "basicAlt": "Lost in thought",
    "origin": "Old French 'pensif' (thinking).",
    "example": "She grew pensive while looking at the old photos."
  },
  {
    "id": "sheepish",
    "word": "Sheepish",
    "ipa": "/ˈʃiː.pɪʃ/",
    "pos": "ADJECTIVE",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "Embarrassed about a small mistake.",
    "basicAlt": "Embarrassed",
    "origin": "From 'sheep' (timid, meek).",
    "example": "He gave a sheepish smile after tripping on stage."
  },
  {
    "id": "irritated",
    "word": "Irritated",
    "ipa": "/ˈɪr.ɪ.teɪ.tɪd/",
    "pos": "ADJECTIVE",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "Annoyed by something small or repeated.",
    "basicAlt": "Annoyed",
    "origin": "Latin 'irritare' (to provoke).",
    "example": "She was irritated by the constant noise next door."
  },
  {
    "id": "buoyant",
    "word": "Buoyant",
    "ipa": "/ˈbɔɪ.ənt/",
    "pos": "ADJECTIVE",
    "category": "Emotion & Mind",
    "badgeColor": "bg-yellow",
    "definition": "Cheerful and full of hope, or able to float.",
    "basicAlt": "Cheerful and light",
    "origin": "Old French 'buoier' (to float).",
    "example": "The buoyant mood lifted everyone's spirits."
  },
  {
    "id": "benevolent",
    "word": "Benevolent",
    "ipa": "/bəˈnev.ə.lənt/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Kind and wanting to help others.",
    "basicAlt": "Very kind",
    "origin": "Latin 'bene' (well) and 'volens' (wishing).",
    "example": "The benevolent teacher stayed late to help us practice."
  },
  {
    "id": "empathetic",
    "word": "Empathetic",
    "ipa": "/ˌem.pəˈθet.ɪk/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Able to understand and share another person's feelings.",
    "basicAlt": "Understanding others' feelings",
    "origin": "Greek 'empatheia' (feeling into).",
    "example": "An empathetic listener makes people feel safe to share."
  },
  {
    "id": "compassionate",
    "word": "Compassionate",
    "ipa": "/kəmˈpæʃ.ən.ət/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Feeling deep sympathy and wanting to ease someone's pain.",
    "basicAlt": "Caring about others' pain",
    "origin": "Latin 'compati' (to suffer with).",
    "example": "The compassionate nurse sat with the worried family."
  },
  {
    "id": "diligent",
    "word": "Diligent",
    "ipa": "/ˈdɪl.ɪ.dʒənt/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Working hard and carefully, with steady effort.",
    "basicAlt": "Hard-working",
    "origin": "Latin 'diligere' (to value, to love).",
    "example": "A diligent student reviews the notes every week."
  },
  {
    "id": "humble",
    "word": "Humble",
    "ipa": "/ˈhʌm.bəl/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Modest, not proud of your achievements.",
    "basicAlt": "Modest",
    "origin": "Latin 'humilis' (low, from the ground).",
    "example": "Even after winning, he stayed humble."
  },
  {
    "id": "meticulous",
    "word": "Meticulous",
    "ipa": "/məˈtɪk.jʊ.ləs/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Very careful and paying attention to every detail.",
    "basicAlt": "Very careful",
    "origin": "Latin 'meticulosus' (fearful, careful).",
    "example": "She kept meticulous notes for every experiment."
  },
  {
    "id": "eccentric",
    "word": "Eccentric",
    "ipa": "/ɪkˈsen.trɪk/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Unusual or strange in behavior, in a way that is interesting.",
    "basicAlt": "Unusual and quirky",
    "origin": "Greek 'ekkentros' (out of center).",
    "example": "The professor had an eccentric way of teaching."
  },
  {
    "id": "articulate",
    "word": "Articulate",
    "ipa": "/ɑːˈtɪk.jʊ.lət/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Able to express ideas clearly and well.",
    "basicAlt": "Clear when speaking",
    "origin": "Latin 'articulare' (to divide into joints).",
    "example": "The articulate speaker answered every question with ease."
  },
  {
    "id": "charismatic",
    "word": "Charismatic",
    "ipa": "/ˌkær.ɪzˈmæt.ɪk/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Having a strong, attractive personality that draws people in.",
    "basicAlt": "Very charming",
    "origin": "Greek 'charisma' (divine gift, favor).",
    "example": "The charismatic host kept the whole audience engaged."
  },
  {
    "id": "assertive",
    "word": "Assertive",
    "ipa": "/əˈsɜː.tɪv/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Confident in stating your needs and opinions politely.",
    "basicAlt": "Confident and direct",
    "origin": "Latin 'asserere' (to claim).",
    "example": "Being assertive helps you ask for feedback."
  },
  {
    "id": "frugal",
    "word": "Frugal",
    "ipa": "/ˈfruː.ɡəl/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Careful with money and avoiding waste.",
    "basicAlt": "Careful with money",
    "origin": "Latin 'frugalis' (useful, economical).",
    "example": "They lived a frugal life while saving for school."
  },
  {
    "id": "sincere",
    "word": "Sincere",
    "ipa": "/sɪnˈsɪər/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Honest and genuine in what you feel and say.",
    "basicAlt": "Honest and real",
    "origin": "Latin 'sincerus' (clean, pure).",
    "example": "Thank you for your sincere feedback."
  },
  {
    "id": "meek",
    "word": "Meek",
    "ipa": "/miːk/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Quiet and gentle, not likely to argue or push.",
    "basicAlt": "Quiet and gentle",
    "origin": "Old Norse 'mjúkr' (soft).",
    "example": "The meek student rarely spoke up in class."
  },
  {
    "id": "diplomatic",
    "word": "Diplomatic",
    "ipa": "/ˌdɪp.ləˈmæt.ɪk/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Good at handling sensitive situations without causing offense.",
    "basicAlt": "Tactful",
    "origin": "Greek 'diplōma' (a folded document).",
    "example": "She was diplomatic when correcting her teammate."
  },
  {
    "id": "ambitious",
    "word": "Ambitious",
    "ipa": "/æmˈbɪʃ.əs/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Having a strong desire to succeed and achieve big goals.",
    "basicAlt": "Wanting to achieve a lot",
    "origin": "Latin 'ambitio' (going around to seek favor).",
    "example": "He set ambitious goals for the semester."
  },
  {
    "id": "gullible",
    "word": "Gullible",
    "ipa": "/ˈɡʌl.ə.bəl/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Easily tricked or persuaded to believe something.",
    "basicAlt": "Easily fooled",
    "origin": "From 'gull' (to deceive).",
    "example": "Don't be gullible about offers that promise instant results."
  },
  {
    "id": "pessimistic",
    "word": "Pessimistic",
    "ipa": "/ˌpes.ɪˈmɪs.tɪk/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Expecting the worst to happen.",
    "basicAlt": "Expecting bad results",
    "origin": "Latin 'pessimus' (worst).",
    "example": "He was pessimistic about passing the exam."
  },
  {
    "id": "optimistic",
    "word": "Optimistic",
    "ipa": "/ˌɒp.tɪˈmɪs.tɪk/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Expecting good things to happen.",
    "basicAlt": "Expecting good results",
    "origin": "Latin 'optimus' (best).",
    "example": "She stayed optimistic despite the setbacks."
  },
  {
    "id": "resourceful",
    "word": "Resourceful",
    "ipa": "/rɪˈzɔːs.fəl/",
    "pos": "ADJECTIVE",
    "category": "Character & Style",
    "badgeColor": "bg-sky",
    "definition": "Good at finding solutions when resources are limited.",
    "basicAlt": "Good at solving problems",
    "origin": "From 'resource' (French 'ressource').",
    "example": "A resourceful team finds a way even with limited tools."
  },
  {
    "id": "chronic",
    "word": "Chronic",
    "ipa": "/ˈkrɒn.ɪk/",
    "pos": "ADJECTIVE",
    "category": "Time & Society",
    "badgeColor": "bg-lilac",
    "definition": "Lasting for a long time or happening again and again.",
    "basicAlt": "Long-lasting",
    "origin": "Greek 'khronos' (time).",
    "example": "Chronic lateness can hurt your reputation at work."
  },
  {
    "id": "impromptu",
    "word": "Impromptu",
    "ipa": "/ɪmˈprɒmp.tjuː/",
    "pos": "ADJECTIVE",
    "category": "Time & Society",
    "badgeColor": "bg-lilac",
    "definition": "Done without planning, on the spur of the moment.",
    "basicAlt": "Unplanned",
    "origin": "Latin 'in promptu' (in readiness).",
    "example": "We gave an impromptu speech when the speaker was late."
  },
  {
    "id": "hasty",
    "word": "Hasty",
    "ipa": "/ˈheɪ.sti/",
    "pos": "ADJECTIVE",
    "category": "Time & Society",
    "badgeColor": "bg-lilac",
    "definition": "Done too quickly, without enough care.",
    "basicAlt": "Too quick",
    "origin": "Middle English 'haste' (speed).",
    "example": "A hasty decision can lead to avoidable mistakes."
  },
  {
    "id": "sequential",
    "word": "Sequential",
    "ipa": "/sɪˈkwen.ʃəl/",
    "pos": "ADJECTIVE",
    "category": "Time & Society",
    "badgeColor": "bg-lilac",
    "definition": "Following one after another in a logical order.",
    "basicAlt": "In order, one by one",
    "origin": "Latin 'sequi' (to follow).",
    "example": "Follow the sequential steps in the manual."
  },
  {
    "id": "timely",
    "word": "Timely",
    "ipa": "/ˈtaɪm.li/",
    "pos": "ADJECTIVE",
    "category": "Time & Society",
    "badgeColor": "bg-lilac",
    "definition": "Happening at the right moment.",
    "basicAlt": "On time",
    "origin": "Old English 'tīma' (time).",
    "example": "Thank you for the timely reply."
  },
  {
    "id": "retrospective",
    "word": "Retrospective",
    "ipa": "/ˌret.rəʊˈspek.tɪv/",
    "pos": "ADJECTIVE",
    "category": "Time & Society",
    "badgeColor": "bg-lilac",
    "definition": "Looking back at past events.",
    "basicAlt": "Looking back",
    "origin": "Latin 'retro' (backward) and 'specere' (to look).",
    "example": "The retrospective chapter reviews the company's history."
  },
  {
    "id": "prospect",
    "word": "Prospect",
    "ipa": "/ˈprɒs.pekt/",
    "pos": "NOUN",
    "category": "Time & Society",
    "badgeColor": "bg-lilac",
    "definition": "A possibility that something will happen in the future.",
    "basicAlt": "A possible future event",
    "origin": "Latin 'prospectus' (a view forward).",
    "example": "The prospect of a new job excited him."
  },
  {
    "id": "transient",
    "word": "Transient",
    "ipa": "/ˈtræn.zi.ənt/",
    "pos": "ADJECTIVE",
    "category": "Time & Society",
    "badgeColor": "bg-lilac",
    "definition": "Lasting only for a short time.",
    "basicAlt": "Short-lived",
    "origin": "Latin 'transire' (to go across).",
    "example": "Fame can be transient if it is not built on real skill."
  },
  {
    "id": "eventual",
    "word": "Eventual",
    "ipa": "/ɪˈven.tʃu.əl/",
    "pos": "ADJECTIVE",
    "category": "Time & Society",
    "badgeColor": "bg-lilac",
    "definition": "Happening in the end, after some time.",
    "basicAlt": "Final, in the end",
    "origin": "From 'event' (Latin 'eventus', outcome).",
    "example": "Their eventual success came after years of practice."
  },
  {
    "id": "chronology",
    "word": "Chronology",
    "ipa": "/krəˈnɒl.ə.dʒi/",
    "pos": "NOUN",
    "category": "Time & Society",
    "badgeColor": "bg-lilac",
    "definition": "The order in which events happened.",
    "basicAlt": "Order of events",
    "origin": "Greek 'khronos' (time) and 'logos' (study).",
    "example": "Put the events in chronology before you start writing."
  },
  {
    "id": "anachronism",
    "word": "Anachronism",
    "ipa": "/əˈnæk.rə.nɪ.zəm/",
    "pos": "NOUN",
    "category": "Time & Society",
    "badgeColor": "bg-lilac",
    "definition": "Something placed in the wrong time period.",
    "basicAlt": "Something from the wrong era",
    "origin": "Greek 'ana-' (against) and 'khronos' (time).",
    "example": "A smartphone in a medieval story is an anachronism."
  },
  {
    "id": "fleeting",
    "word": "Fleeting",
    "ipa": "/ˈfliː.tɪŋ/",
    "pos": "ADJECTIVE",
    "category": "Time & Society",
    "badgeColor": "bg-lilac",
    "definition": "Passing very quickly.",
    "basicAlt": "Very brief",
    "origin": "Old English 'flēotan' (to float).",
    "example": "A fleeting moment of silence filled the room."
  },
  {
    "id": "contemporary",
    "word": "Contemporary",
    "ipa": "/kənˈtem.pər.ər.i/",
    "pos": "ADJECTIVE",
    "category": "Time & Society",
    "badgeColor": "bg-lilac",
    "definition": "Existing or happening at the same time as now.",
    "basicAlt": "Modern, current",
    "origin": "Latin 'contemporarius' (of the same time).",
    "example": "The class studies contemporary English writers."
  },
  {
    "id": "hiatus",
    "word": "Hiatus",
    "ipa": "/haɪˈeɪ.təs/",
    "pos": "NOUN",
    "category": "Time & Society",
    "badgeColor": "bg-lilac",
    "definition": "A pause or break in an activity.",
    "basicAlt": "A break",
    "origin": "Latin 'hiatus' (gap, opening).",
    "example": "After a short hiatus, the podcast returned with new episodes."
  },
  {
    "id": "spontaneous",
    "word": "Spontaneous",
    "ipa": "/spɒnˈteɪ.ni.əs/",
    "pos": "ADJECTIVE",
    "category": "Time & Society",
    "badgeColor": "bg-lilac",
    "definition": "Done naturally, without planning.",
    "basicAlt": "Unplanned and natural",
    "origin": "Latin 'sponte' (of one's own accord).",
    "example": "We made a spontaneous trip to the beach."
  },
  {
    "id": "belated",
    "word": "Belated",
    "ipa": "/bɪˈleɪ.tɪd/",
    "pos": "ADJECTIVE",
    "category": "Time & Society",
    "badgeColor": "bg-lilac",
    "definition": "Happening later than expected.",
    "basicAlt": "Late",
    "origin": "From 'be-' and 'late'.",
    "example": "A belated thank-you note still means a lot."
  },
  {
    "id": "verdant",
    "word": "Verdant",
    "ipa": "/ˈvɜː.dənt/",
    "pos": "ADJECTIVE",
    "category": "Nature & Atmosphere",
    "badgeColor": "bg-mint",
    "definition": "Covered in green grass or plants.",
    "basicAlt": "Very green",
    "origin": "Old French 'verd' (green).",
    "example": "We walked through the verdant hills near campus."
  },
  {
    "id": "tranquil",
    "word": "Tranquil",
    "ipa": "/ˈtræŋ.kwɪl/",
    "pos": "ADJECTIVE",
    "category": "Nature & Atmosphere",
    "badgeColor": "bg-mint",
    "definition": "Calm, quiet, and peaceful.",
    "basicAlt": "Calm and quiet",
    "origin": "Latin 'tranquillus' (calm).",
    "example": "The lake looked tranquil at dawn."
  },
  {
    "id": "arid",
    "word": "Arid",
    "ipa": "/ˈær.ɪd/",
    "pos": "ADJECTIVE",
    "category": "Nature & Atmosphere",
    "badgeColor": "bg-mint",
    "definition": "Very dry, with little rain.",
    "basicAlt": "Very dry",
    "origin": "Latin 'aridus' (dry).",
    "example": "The arid desert has very few plants."
  },
  {
    "id": "hazy",
    "word": "Hazy",
    "ipa": "/ˈheɪ.zi/",
    "pos": "ADJECTIVE",
    "category": "Nature & Atmosphere",
    "badgeColor": "bg-mint",
    "definition": "Not clear, partly covered by mist or fog.",
    "basicAlt": "Foggy and unclear",
    "origin": "Related to 'haze' (fog or mist).",
    "example": "The hazy skyline made the city look dreamy."
  },
  {
    "id": "torrential",
    "word": "Torrential",
    "ipa": "/təˈren.ʃəl/",
    "pos": "ADJECTIVE",
    "category": "Nature & Atmosphere",
    "badgeColor": "bg-mint",
    "definition": "Falling very heavily, like a flood.",
    "basicAlt": "Very heavy",
    "origin": "Latin 'torrens' (rushing, burning).",
    "example": "Torrential rain flooded the street in minutes."
  },
  {
    "id": "crisp",
    "word": "Crisp",
    "ipa": "/krɪsp/",
    "pos": "ADJECTIVE",
    "category": "Nature & Atmosphere",
    "badgeColor": "bg-mint",
    "definition": "Cool, fresh, and clear, especially the air.",
    "basicAlt": "Fresh and cool",
    "origin": "Old English 'crisp' (curled).",
    "example": "The crisp morning air made the run refreshing."
  },
  {
    "id": "scenic",
    "word": "Scenic",
    "ipa": "/ˈsiː.nɪk/",
    "pos": "ADJECTIVE",
    "category": "Nature & Atmosphere",
    "badgeColor": "bg-mint",
    "definition": "Having beautiful natural views.",
    "basicAlt": "Beautiful to look at",
    "origin": "Greek 'skēnē' (stage, scene).",
    "example": "We took the scenic route along the coast."
  },
  {
    "id": "barren",
    "word": "Barren",
    "ipa": "/ˈbær.ən/",
    "pos": "ADJECTIVE",
    "category": "Nature & Atmosphere",
    "badgeColor": "bg-mint",
    "definition": "Empty, with no plants growing.",
    "basicAlt": "No plants, empty",
    "origin": "Old English 'bær' (barren).",
    "example": "The barren land was unsuitable for farming."
  },
  {
    "id": "vast",
    "word": "Vast",
    "ipa": "/vɑːst/",
    "pos": "ADJECTIVE",
    "category": "Nature & Atmosphere",
    "badgeColor": "bg-mint",
    "definition": "Extremely large in area or amount.",
    "basicAlt": "Very large",
    "origin": "Latin 'vastus' (empty, huge).",
    "example": "The vast ocean stretched to the horizon."
  },
  {
    "id": "dense",
    "word": "Dense",
    "ipa": "/dens/",
    "pos": "ADJECTIVE",
    "category": "Nature & Atmosphere",
    "badgeColor": "bg-mint",
    "definition": "Thick and tightly packed, hard to see through.",
    "basicAlt": "Thick and packed",
    "origin": "Latin 'densus' (thick).",
    "example": "We walked through dense fog on the mountain."
  },
  {
    "id": "humid",
    "word": "Humid",
    "ipa": "/ˈhjuː.mɪd/",
    "pos": "ADJECTIVE",
    "category": "Nature & Atmosphere",
    "badgeColor": "bg-mint",
    "definition": "Warm and wet, with lots of moisture in the air.",
    "basicAlt": "Warm and wet",
    "origin": "Latin 'humidus' (moist).",
    "example": "The humid afternoon made everyone sleepy."
  },
  {
    "id": "celestial",
    "word": "Celestial",
    "ipa": "/səˈles.tʃəl/",
    "pos": "ADJECTIVE",
    "category": "Nature & Atmosphere",
    "badgeColor": "bg-mint",
    "definition": "Relating to the sky or the heavens.",
    "basicAlt": "Related to the sky",
    "origin": "Latin 'caelestis' (of the sky).",
    "example": "The celestial view from the hilltop was breathtaking."
  },
  {
    "id": "ethereal",
    "word": "Ethereal",
    "ipa": "/ɪˈθɪə.ri.əl/",
    "pos": "ADJECTIVE",
    "category": "Nature & Atmosphere",
    "badgeColor": "bg-mint",
    "definition": "Extremely light and delicate, almost heavenly.",
    "basicAlt": "Light and delicate",
    "origin": "Greek 'aithēr' (upper air).",
    "example": "The ethereal mist floated over the lake."
  },
  {
    "id": "rustic",
    "word": "Rustic",
    "ipa": "/ˈrʌs.tɪk/",
    "pos": "ADJECTIVE",
    "category": "Nature & Atmosphere",
    "badgeColor": "bg-mint",
    "definition": "Simple and related to the countryside.",
    "basicAlt": "Simple and countryside-style",
    "origin": "Latin 'rusticus' (of the countryside).",
    "example": "The café has a rustic wooden charm."
  },
  {
    "id": "tropical",
    "word": "Tropical",
    "ipa": "/ˈtrɒp.ɪ.kəl/",
    "pos": "ADJECTIVE",
    "category": "Nature & Atmosphere",
    "badgeColor": "bg-mint",
    "definition": "Relating to the hot, wet areas near the equator.",
    "basicAlt": "Hot and wet",
    "origin": "Greek 'tropikos' (of a turn, of the solstice).",
    "example": "The tropical island has warm weather all year."
  }
];

// 3. Idioms (8 Crisp Entries)
const IDIOMS_DATA = [
  {
    idiom: "Bite the bullet",
    tag: "COURAGE",
    category: "Character & Style",
    color: "bg-coral",
    meaning: "Force yourself to do something tough you've been delaying.",
    example: "I bit the bullet and gave my whole presentation in English."
  },
  {
    idiom: "Burn the midnight oil",
    tag: "STUDY",
    category: "Time & Society",
    color: "bg-yellow",
    meaning: "Study or work late into the night.",
    example: "Group 11 burned the midnight oil to polish the project."
  },
  {
    idiom: "Read between the lines",
    tag: "INSIGHT",
    category: "Emotion & Mind",
    color: "bg-sky",
    meaning: "Understand the hidden meaning behind someone's words.",
    example: "Reading between the lines, her message meant she needed help."
  },
  {
    idiom: "Once in a blue moon",
    tag: "RARE",
    category: "Time & Society",
    color: "bg-lilac",
    meaning: "Something that happens very rarely.",
    example: "He lives abroad now, so we meet once in a blue moon."
  },
  {
    idiom: "A penny for your thoughts",
    tag: "CHAT",
    category: "Emotion & Mind",
    color: "bg-mint",
    meaning: "Friendly way to ask someone what they're thinking about.",
    example: "You've been quiet for ten minutes. A penny for your thoughts?"
  },
  {
    idiom: "Cut to the chase",
    tag: "DIRECT",
    category: "Character & Style",
    color: "bg-peach",
    meaning: "Get straight to the main point without wasting time.",
    example: "We only have five minutes left, so let's cut to the chase."
  },
  {
    idiom: "Walking on air",
    tag: "JOY",
    category: "Emotion & Mind",
    color: "bg-yellow",
    meaning: "Feeling extraordinarily happy after great news.",
    example: "She was walking on air after passing her interview."
  },
  {
    idiom: "Every cloud has a silver lining",
    tag: "HOPE",
    category: "Emotion & Mind",
    color: "bg-mint",
    meaning: "Every tough situation still has a positive side.",
    example: "Missing the bus led me to a great café. Every cloud has a silver lining."
  },
  {
    "idiom": "Break the ice",
    "tag": "SOCIAL",
    "color": "bg-sky",
    "category": "Character & Style",
    "meaning": "Say or do something to make people feel comfortable at the start of a conversation.",
    "example": "She told a funny story to break the ice at the workshop."
  },
  {
    "idiom": "Hit the books",
    "tag": "STUDY",
    "color": "bg-lilac",
    "category": "Time & Society",
    "meaning": "Start studying seriously.",
    "example": "Finals start next week, so I'm going to hit the books tonight."
  },
  {
    "idiom": "Under the weather",
    "tag": "HEALTH",
    "color": "bg-mint",
    "category": "Emotion & Mind",
    "meaning": "Feeling slightly ill.",
    "example": "I'm a bit under the weather, so I'll skip practice today."
  },
  {
    "idiom": "Piece of cake",
    "tag": "EASY",
    "color": "bg-yellow",
    "category": "Character & Style",
    "meaning": "Something that is very easy to do.",
    "example": "The quiz was a piece of cake after all that practice."
  },
  {
    "idiom": "Call it a day",
    "tag": "FINISH",
    "color": "bg-peach",
    "category": "Time & Society",
    "meaning": "Stop working on something for the day.",
    "example": "We've finished the slides, so let's call it a day."
  },
  {
    "idiom": "Get the hang of it",
    "tag": "LEARN",
    "color": "bg-coral",
    "category": "Character & Style",
    "meaning": "Learn how to do something well after some practice.",
    "example": "It took me a week, but I finally got the hang of the app."
  },
  {
    "idiom": "Speak your mind",
    "tag": "HONEST",
    "color": "bg-sky",
    "category": "Character & Style",
    "meaning": "Say openly what you think, even if others may disagree.",
    "example": "In the meeting, she wasn't afraid to speak her mind."
  },
  {
    "idiom": "Keep your chin up",
    "tag": "HOPE",
    "color": "bg-mint",
    "category": "Emotion & Mind",
    "meaning": "Stay positive and cheerful during a difficult time.",
    "example": "Keep your chin up, the results will come soon."
  },
  {
    "idiom": "A storm in a teacup",
    "tag": "WEATHER",
    "color": "bg-sky",
    "category": "Nature & Atmosphere",
    "meaning": "A lot of worry about something unimportant.",
    "example": "The argument over the parking spot was a storm in a teacup."
  },
  {
    "idiom": "Make hay while the sun shines",
    "tag": "OPPORTUNITY",
    "color": "bg-mint",
    "category": "Nature & Atmosphere",
    "meaning": "Use a good opportunity while it lasts.",
    "example": "The sun is out, so we should make hay while the sun shines and finish the report now."
  },
  {
    "idiom": "Come rain or shine",
    "tag": "ALWAYS",
    "color": "bg-yellow",
    "category": "Nature & Atmosphere",
    "meaning": "Regardless of the situation, no matter what happens.",
    "example": "Our study group meets every Friday, come rain or shine."
  },
  {
    "idiom": "The calm before the storm",
    "tag": "QUIET",
    "color": "bg-lilac",
    "category": "Nature & Atmosphere",
    "meaning": "A quiet period before a difficult or busy time.",
    "example": "The office was quiet, the calm before the storm of the exam week."
  },
  {
    "idiom": "Out of the blue",
    "tag": "SURPRISE",
    "color": "bg-peach",
    "category": "Nature & Atmosphere",
    "meaning": "Suddenly and unexpectedly.",
    "example": "She called me out of the blue after five years."
  },
  {
    "idiom": "Head in the clouds",
    "tag": "DREAMY",
    "color": "bg-coral",
    "category": "Nature & Atmosphere",
    "meaning": "Not paying attention to practical things, daydreaming.",
    "example": "He has his head in the clouds and forgot the deadline again."
  },
  {
    "idiom": "Go with the flow",
    "tag": "RELAX",
    "color": "bg-mint",
    "category": "Nature & Atmosphere",
    "meaning": "Relax and accept what happens, without fighting it.",
    "example": "Our plan changed twice, but we just went with the flow."
  },
  {
    "idiom": "The snowball effect",
    "tag": "GROWTH",
    "color": "bg-sky",
    "category": "Nature & Atmosphere",
    "meaning": "A small thing that grows bigger and bigger over time.",
    "example": "One small idea led to a snowball effect of new projects."
  },
  {
    "idiom": "Over the moon",
    "tag": "HAPPY",
    "color": "bg-yellow",
    "category": "Emotion & Mind",
    "meaning": "Extremely happy and pleased.",
    "example": "She was over the moon when she passed the exam."
  },
  {
    "idiom": "Down in the dumps",
    "tag": "SAD",
    "color": "bg-lilac",
    "category": "Emotion & Mind",
    "meaning": "Feeling sad or unhappy.",
    "example": "He has been down in the dumps since his team lost."
  },
  {
    "idiom": "Hold your horses",
    "tag": "PATIENCE",
    "color": "bg-peach",
    "category": "Emotion & Mind",
    "meaning": "Wait a moment, do not rush.",
    "example": "Hold your horses, I have not finished my sentence yet."
  },
  {
    "idiom": "Lose your temper",
    "tag": "ANGER",
    "color": "bg-coral",
    "category": "Emotion & Mind",
    "meaning": "Suddenly become very angry.",
    "example": "He lost his temper when the printer broke again."
  },
  {
    "idiom": "Get cold feet",
    "tag": "NERVOUS",
    "color": "bg-sky",
    "category": "Emotion & Mind",
    "meaning": "Suddenly become too nervous to do something you planned.",
    "example": "I wanted to present, but I got cold feet at the last minute."
  },
  {
    "idiom": "Feel blue",
    "tag": "SAD",
    "color": "bg-mint",
    "category": "Emotion & Mind",
    "meaning": "Feel sad or depressed for a while.",
    "example": "She felt blue after the long rainy week."
  },
  {
    "idiom": "Hit the nail on the head",
    "tag": "ACCURATE",
    "color": "bg-sky",
    "category": "Character & Style",
    "meaning": "Say or do exactly the right thing.",
    "example": "You hit the nail on the head with that comment."
  },
  {
    "idiom": "Beat around the bush",
    "tag": "DIRECT",
    "color": "bg-coral",
    "category": "Character & Style",
    "meaning": "Avoid talking about the main point directly.",
    "example": "Stop beating around the bush and tell me what happened."
  },
  {
    "idiom": "Bite off more than you can chew",
    "tag": "BUSY",
    "color": "bg-peach",
    "category": "Character & Style",
    "meaning": "Take on more work than you can manage.",
    "example": "I bit off more than I could chew with three projects."
  },
  {
    "idiom": "Cut corners",
    "tag": "CARELESS",
    "color": "bg-lilac",
    "category": "Character & Style",
    "meaning": "Do something cheaply or carelessly to save time or money.",
    "example": "The team cut corners and the slides looked messy."
  },
  {
    "idiom": "Keep an open mind",
    "tag": "OPEN",
    "color": "bg-mint",
    "category": "Character & Style",
    "meaning": "Be willing to consider new ideas.",
    "example": "Keep an open mind when you hear a different opinion."
  },
  {
    "idiom": "Show your true colors",
    "tag": "HONEST",
    "color": "bg-yellow",
    "category": "Character & Style",
    "meaning": "Reveal your real character or opinion.",
    "example": "Under pressure, he showed his true colors and helped everyone."
  },
  {
    "idiom": "Time flies",
    "tag": "FAST",
    "color": "bg-yellow",
    "category": "Time & Society",
    "meaning": "Time passes very quickly.",
    "example": "Time flies when you are having fun with friends."
  },
  {
    "idiom": "Better late than never",
    "tag": "LATE",
    "color": "bg-lilac",
    "category": "Time & Society",
    "meaning": "Doing something late is better than not doing it at all.",
    "example": "I sent my thank-you note a week late, but better late than never."
  },
  {
    "idiom": "At the eleventh hour",
    "tag": "DEADLINE",
    "color": "bg-coral",
    "category": "Time & Society",
    "meaning": "At the very last possible moment.",
    "example": "She submitted the essay at the eleventh hour."
  },
  {
    "idiom": "Take your time",
    "tag": "PATIENCE",
    "color": "bg-sky",
    "category": "Time & Society",
    "meaning": "Do not hurry, there is no rush.",
    "example": "Take your time reading the instructions."
  },
  {
    "idiom": "Get the ball rolling",
    "tag": "START",
    "color": "bg-mint",
    "category": "Time & Society",
    "meaning": "Start an activity or process.",
    "example": "Let us get the ball rolling with the first slide."
  },
  {
    "idiom": "Hit the road",
    "tag": "LEAVE",
    "color": "bg-peach",
    "category": "Time & Society",
    "meaning": "Start a journey or leave.",
    "example": "We should hit the road before the traffic gets worse."
  }
];

// 4. Basic vs Natural Table
const UPGRADES_DATA = [
  { context: "TIRED", basic: "I am very tired today.", natural: "I'm completely burned out today." },
  { context: "AGREE", basic: "I agree with you 100%.", natural: "We're completely on the same page." },
  { context: "EASY", basic: "The test was very easy.", natural: "That test was a walk in the park." },
  { context: "START", basic: "Let's start the project.", natural: "Let's get the ball rolling." },
  { context: "UNDECIDED", basic: "I haven't decided yet.", natural: "I'm still on the fence about it." },
  { context: "EMPATHY", basic: "I understand your view.", natural: "I see where you're coming from." }
];

// 5. Short Stories (2 Crisp Paragraphs Each)
const STORIES_DATA = [
  {
    id: "story-1",
    tabTitle: "01. NIGHT TRAIN",
    title: "Midnight Train to the Highlands",
    author: "NADIA // TRAVEL NOTE",
    tag: "TRAVEL",
    readTime: "1 MIN READ",
    prompt: "Write 1 sentence using 'wanderlust', 'serene', or 'petrichor'.",
    paragraphs: [
      "After weeks of {wanderlust} at my study desk, I booked a Friday night sleeper train to the highlands. At midnight, the quiet mountain station looked completely {serene} under a {luminous} full moon.",
      "Minutes later, cool raindrops hit the window and filled the air with fresh {petrichor}, washing all my exam stress away."
    ]
  },
  {
    id: "story-2",
    tabTitle: "02. VIOLINIST",
    title: "The Street Violinist at Dusk",
    author: "RAFI // CAMPUS LOG",
    tag: "CITY LIFE",
    readTime: "1 MIN READ",
    prompt: "Write 1 sentence using 'sonder', 'mellifluous', or 'ineffable'.",
    paragraphs: [
      "Walking past the old stone plaza at sunset, a {mellifluous} violin melody stopped me in my tracks. Dozens of strangers paused around the musician, lost in their own worlds.",
      "Watching their faces gave me a sudden wave of {sonder} and an {ineffable} sense of calm before heading home."
    ]
  },
  {
    id: "story-3",
    tabTitle: "03. OPEN MIC",
    title: "Stepping Onto the Open-Mic Stage",
    author: "TARI // CREATIVE CLUB",
    tag: "COURAGE",
    readTime: "1 MIN READ",
    prompt: "Write 1 sentence using 'audacious' or 'euphoria'.",
    paragraphs: [
      "Signing up to read my poem in front of two hundred people felt like an {audacious} leap. Behind the curtain, the host gave me an {enigmatic} nod and whispered, 'You've got this.'",
      "When the crowd erupted into applause at the final line, a rush of pure {euphoria} replaced every bit of stage fright."
    ]
  },
  {
    id: "story-4",
    tabTitle: "04. BOOKSHOP",
    title: "Rainy Afternoon in an Old Bookshop",
    author: "ARYA // READING CLUB",
    tag: "MOMENTS",
    readTime: "1 MIN READ",
    prompt: "Write 1 sentence using 'serendipity' or 'nostalgia'.",
    paragraphs: [
      "Escaping a sudden downpour, I stepped into the {quintessential} second-hand bookshop behind campus. Inside a worn novel, a 1998 postcard slipped out. It was pure {serendipity}.",
      "Reading that tiny note sparked a warm wave of {nostalgia}, turning an {ephemeral} rainstorm into my favorite memory of the week."
    ]
  },
  {
    id: "story-5",
    tabTitle: "05. COFFEE BREAK",
    title: "The Coffee Break Nobody Planned",
    author: "DINA // CAMPUS LIFE",
    tag: "CAMPUS",
    readTime: "1 MIN READ",
    prompt: "Write 1 sentence using 'gregarious', 'punctual', or 'impromptu'.",
    paragraphs: [
      "Our group meeting was supposed to start at nine, but Rafi arrived late and looked worried. Within minutes, a {gregarious} classmate started talking to everyone at the table, and the mood changed completely.",
      "We ended up with an {impromptu} study session in the cafeteria. Even though we were not {punctual} at first, we finished the slides before lunch."
    ]
  },
  {
    id: "story-6",
    tabTitle: "06. LAST MINUTE",
    title: "The Assignment Due Tomorrow",
    author: "ARYA // STUDY DIARY",
    tag: "STUDY",
    readTime: "1 MIN READ",
    prompt: "Write 1 sentence using 'procrastinate', 'tenacious', or 'meticulous'.",
    paragraphs: [
      "I wanted to start my essay last week, but I kept choosing to {procrastinate} and watch videos instead. Tonight, with the deadline tomorrow, I finally sat down and began to write.",
      "I was {tenacious} about finishing. I checked every sentence in a {meticulous} way, and by midnight the draft was complete and clear."
    ]
  },
  {
    id: "story-7",
    tabTitle: "07. RAINY MORNING",
    title: "Rain on the Market Road",
    author: "NADIA // WEATHER NOTE",
    tag: "NATURE",
    readTime: "1 MIN READ",
    prompt: "Write 1 sentence using 'torrential', 'verdant', or 'tranquil'.",
    paragraphs: [
      "The sky turned dark before sunrise, and a {torrential} rain fell on the market road. The vendors covered their stalls, and the street quickly became a river.",
      "When the rain stopped, the hills looked {verdant} and fresh. For a few minutes, the air felt {tranquil}, and everyone stood still to enjoy the quiet."
    ]
  },
  {
    id: "story-8",
    tabTitle: "08. JOB INTERVIEW",
    title: "A Small Interview Surprise",
    author: "RAFI // CAREER TALK",
    tag: "CAREER",
    readTime: "1 MIN READ",
    prompt: "Write 1 sentence using 'articulate', 'candid', or 'resourceful'.",
    paragraphs: [
      "The interviewer asked about a project that had failed. I could have made excuses, but I decided to be {candid} and explain what I learned from the mistake.",
      "She smiled and said I was {articulate} and {resourceful}. Her reaction showed that honesty can be as valuable as a perfect answer."
    ]
  },
  {
    id: "story-9",
    tabTitle: "09. REUNION",
    title: "The Reunion at the Old Gate",
    author: "LINA // PERSONAL ESSAY",
    tag: "EMOTION",
    readTime: "1 MIN READ",
    prompt: "Write 1 sentence using 'nostalgia', 'jubilant', or 'sentimental'.",
    paragraphs: [
      "I met my childhood friend at the old school gate after five years apart. The {nostalgia} hit me immediately, and we talked about the games we used to play there.",
      "When we found our old photo in a box, we both became {sentimental}. We laughed, and then we were {jubilant} about meeting again."
    ]
  },
  {
    id: "story-10",
    tabTitle: "10. TEAM DILEMMA",
    title: "Two Ideas, One Presentation",
    author: "ARIEL // TEAMWORK",
    tag: "TEAMWORK",
    readTime: "1 MIN READ",
    prompt: "Write 1 sentence using 'diplomatic', 'empathetic', or 'pragmatic'.",
    paragraphs: [
      "Two of my teammates wanted different designs for our presentation. One wanted bold colors, and the other wanted a simple layout. I stayed {diplomatic} and asked each of them to explain their reasons.",
      "After listening carefully, I suggested a {pragmatic} plan: keep the simple layout and use bold colors only for the title. Both of them agreed, and the final slides looked great."
    ]
  },
];

// 6. Quiz Decks (4 Crisp Options A-D per Question)
const QUIZ_DECKS = {
  units: [
    {
      "clue": "[UNIT 01] Which line politely closes a first conversation?",
      "options": [
        "Where are you from?",
        "It was nice meeting you. Take care!",
        "What do you usually do?",
        "Tell me your schedule."
      ],
      "answer": "It was nice meeting you. Take care!",
      "detail": "UNIT 01: A warm closing line thanks the other person and says goodbye."
    },
    {
      "clue": "[UNIT 01] Which question asks someone about their background?",
      "options": [
        "Who are you? Why?",
        "Where are you from?",
        "Go straight, then turn left.",
        "I'm used to waking up early."
      ],
      "answer": "Where are you from?",
      "detail": "UNIT 01: 'Where are you from?' is a friendly, open question for getting to know someone."
    },
    {
      "clue": "[UNIT 02] Which sentence uses the simple present for a routine correctly?",
      "options": [
        "I usually wake up at 6 AM.",
        "I am usually wake up at 6 AM.",
        "I usually waking up at 6 AM.",
        "I wake up at 6 AM yesterday."
      ],
      "answer": "I usually wake up at 6 AM.",
      "detail": "UNIT 02: Routines use the simple present with the base verb and a frequency adverb."
    },
    {
      "clue": "[UNIT 02] Which sentence describes a chore?",
      "options": [
        "My main chore is washing the dishes every night.",
        "I used to play football.",
        "Could you help me with this?",
        "Go straight at the traffic light."
      ],
      "answer": "My main chore is washing the dishes every night.",
      "detail": "UNIT 02: 'My main chore is...' introduces a regular responsibility."
    },
    {
      "clue": "[UNIT 03] Which sentence shows that someone is familiar with something now?",
      "options": [
        "I'm used to waking up early.",
        "I used to wake up early.",
        "I usually wake up early on weekends.",
        "I woke up early yesterday."
      ],
      "answer": "I'm used to waking up early.",
      "detail": "UNIT 03: 'Be used to' + -ing means you are familiar with something now."
    },
    {
      "clue": "[UNIT 03] Which sentence describes a past habit that has stopped?",
      "options": [
        "I'm used to studying late.",
        "I used to play football every afternoon.",
        "I always study at night.",
        "I'm accustomed to a busy schedule."
      ],
      "answer": "I used to play football every afternoon.",
      "detail": "UNIT 03: 'Used to' + base verb describes a habit from the past that no longer happens."
    },
    {
      "clue": "[UNIT 04] Which phrase has the adjectives in the correct order?",
      "options": [
        "a small useful black box",
        "a useful small black box",
        "a black small useful box",
        "a plastic useful small box"
      ],
      "answer": "a useful small black box",
      "detail": "UNIT 04: Opinion comes before size, and color comes before material and the noun."
    },
    {
      "clue": "[UNIT 04] Which sentence describes an object's material in the correct order?",
      "options": [
        "It's a lovely wooden table.",
        "It's a wooden lovely table.",
        "It's a table lovely wooden.",
        "It's a lovely table wooden."
      ],
      "answer": "It's a lovely wooden table.",
      "detail": "UNIT 04: Opinion (lovely) comes before material (wooden), and the noun comes last."
    },
    {
      "clue": "[UNIT 05] Which sentence describes physical appearance?",
      "options": [
        "She has long, wavy brown hair.",
        "She is always helpful.",
        "She is easygoing.",
        "She used to live here."
      ],
      "answer": "She has long, wavy brown hair.",
      "detail": "UNIT 05: 'Has' + noun describes hair and other physical features."
    },
    {
      "clue": "[UNIT 05] Which sentence softens a personality description politely?",
      "options": [
        "He is lazy and rude.",
        "He's easygoing, although he can be a bit stubborn.",
        "He's stupid.",
        "He never listens."
      ],
      "answer": "He's easygoing, although he can be a bit stubborn.",
      "detail": "UNIT 05: 'A bit' and 'can be' soften a negative trait."
    },
    {
      "clue": "[UNIT 06] Which request asks for help politely?",
      "options": [
        "Help me now.",
        "Could you help me with this assignment?",
        "Give me the notes.",
        "You must explain it."
      ],
      "answer": "Could you help me with this assignment?",
      "detail": "UNIT 06: 'Could you...?' is a polite way to ask for help."
    },
    {
      "clue": "[UNIT 06] Which phrase asks for permission?",
      "options": [
        "Is it okay if I sit here?",
        "Sit here.",
        "You can't sit here.",
        "I'm used to sitting here."
      ],
      "answer": "Is it okay if I sit here?",
      "detail": "UNIT 06: 'Is it okay if I...?' asks permission before doing something."
    },
    {
      "clue": "[UNIT 07] Which question asks for directions politely?",
      "options": [
        "Where library?",
        "Excuse me, how do I get to the library?",
        "Go to the library now.",
        "The library is on the right."
      ],
      "answer": "Excuse me, how do I get to the library?",
      "detail": "UNIT 07: 'Excuse me, how do I get to...?' starts politely and asks clearly."
    },
    {
      "clue": "[UNIT 07] Which sentence gives instructions in the correct order?",
      "options": [
        "Finally, submit the file. First, log in.",
        "First, log in to the portal. Then, upload your file. Finally, submit it.",
        "Upload your file, then first log in.",
        "Submit, log in, upload."
      ],
      "answer": "First, log in to the portal. Then, upload your file. Finally, submit it.",
      "detail": "UNIT 07: 'First, Then, Finally' organize the steps in a clear sequence."
    },
    {
      clue: "[UNIT 09] Which line politely closes a social conversation?",
      options: [
        "That's interesting. What got you into that?",
        "It was great chatting with you, though I should head to class now. Let's stay in touch!",
        "You won't believe what happened yesterday.",
        "I sincerely apologize for the delay."
      ],
      answer: "It was great chatting with you, though I should head to class now. Let's stay in touch!",
      detail: "UNIT 09: Combines appreciation, a clear reason to leave, and a warm sign-off."
    },
    {
      clue: "[UNIT 09] How do you politely share a different opinion?",
      options: [
        "You're totally wrong about that.",
        "I see your point, although I'd argue timing also matters.",
        "The event took place at 9 AM.",
        "Let's close this discussion now."
      ],
      answer: "I see your point, although I'd argue timing also matters.",
      detail: "UNIT 09: Acknowledges the other person's view before adding yours."
    },
    {
      clue: "[UNIT 10] Which news report line covers When, Where, and Why?",
      options: [
        "Mind if I join you? I'm Adit.",
        "At 9 AM today in the Student Center, Group 11 launched the app because students needed speaking practice.",
        "Have you considered splitting the slides?",
        "We used to rely on printed books."
      ],
      answer: "At 9 AM today in the Student Center, Group 11 launched the app because students needed speaking practice.",
      detail: "UNIT 10: Gives When (9 AM), Where (Student Center), and Why (because...)."
    },
    {
      clue: "[UNIT 10] Which sentence works best to hook listeners when re-telling a story?",
      options: [
        "You won't believe what happened on my way to campus yesterday...",
        "Just to recap what we agreed on.",
        "I take full responsibility for the delay.",
        "If I were in charge, I would reprioritize."
      ],
      answer: "You won't believe what happened on my way to campus yesterday...",
      detail: "UNIT 10: Grabs attention immediately before telling the sequence."
    },
    {
      clue: "[UNIT 11] Which sentence compares a past habit to present life?",
      options: [
        "We used to carry heavy dictionaries, whereas now we check audio online.",
        "I sincerely apologize for the inconvenience.",
        "What did you think of the speaker?",
        "To put it simply, there are three steps."
      ],
      answer: "We used to carry heavy dictionaries, whereas now we check audio online.",
      detail: "UNIT 11: Uses 'used to... whereas now...' to contrast past and present."
    },
    {
      clue: "[UNIT 11] Which line describes an active ongoing trend?",
      options: [
        "More and more students are using interactive apps to practice English.",
        "The meeting started at 8 AM.",
        "I completely understand your frustration.",
        "Suppose two teammates disagreed."
      ],
      answer: "More and more students are using interactive apps to practice English.",
      detail: "UNIT 11: 'More and more...' + present continuous shows ongoing change."
    },
    {
      clue: "[UNIT 12] Which response uses the 2nd Conditional for a job interview?",
      options: [
        "If I were faced with a sudden deadline shift, I would reprioritize key tasks first.",
        "Yesterday I had a deadline and finished it.",
        "We used to work on weekends.",
        "Sorry your package arrived late."
      ],
      answer: "If I were faced with a sudden deadline shift, I would reprioritize key tasks first.",
      detail: "UNIT 12: Uses 'If I were... I would...' for hypothetical scenarios."
    },
    {
      clue: "[UNIT 12] Which line shows nonjudgmental responding when a peer is late?",
      options: [
        "They obviously didn't care about the team.",
        "Rather than assuming carelessness, I would ask what blocked their progress.",
        "I'd report them right away.",
        "Let's skip the details."
      ],
      answer: "Rather than assuming carelessness, I would ask what blocked their progress.",
      detail: "UNIT 12: Focuses objectively on obstacles without blame."
    },
    {
      clue: "[UNIT 13] Which phrase shows genuine sympathy during a complaint?",
      options: [
        "I completely understand why you're frustrated. I'd feel the same way.",
        "That's not really my problem.",
        "If I were you, I wouldn't worry.",
        "Speaking of which, have you seen the schedule?"
      ],
      answer: "I completely understand why you're frustrated. I'd feel the same way.",
      detail: "UNIT 13: Validates feelings empathetically before fixing the issue."
    },
    {
      clue: "[UNIT 13] Which sentence gives a sincere apology without excuses?",
      options: [
        "I sincerely apologize for the delay and any inconvenience caused.",
        "Sorry you're upset, even though traffic wasn't our fault.",
        "We used to deliver faster last year.",
        "Have you considered waiting until tomorrow?"
      ],
      answer: "I sincerely apologize for the delay and any inconvenience caused.",
      detail: "UNIT 13: Direct, accountable apology."
    },
    {
      clue: "[UNIT 14] Which phrase offers a collaborative suggestion in a conflict?",
      options: [
        "Have you considered combining both ideas into a two-part layout?",
        "You have to do it my way.",
        "The event happened outside the library.",
        "Nice meeting you today!"
      ],
      answer: "Have you considered combining both ideas into a two-part layout?",
      detail: "UNIT 14: Frames a win-win compromise as a polite question."
    },
    {
      clue: "[UNIT 14] Which phrase simplifies a resolution clearly?",
      options: [
        "To put it simply: define the issue, pick a compromise, and move forward.",
        "You won't believe how messy this got.",
        "If I were on another team, it'd be easier.",
        "Mind if I join your table?"
      ],
      answer: "To put it simply: define the issue, pick a compromise, and move forward.",
      detail: "UNIT 14: Uses 'To put it simply' + clear steps."
    },
    {
      "clue": "[UNIT 01] Which question is a friendly way to start getting to know someone?",
      "options": [
        "What do you study?",
        "Why are you so quiet?",
        "Tell me your bank PIN.",
        "How much money do you make?"
      ],
      "answer": "What do you study?",
      "detail": "UNIT 01: Open questions about study or work help people share without feeling pressured."
    },
    {
      "clue": "[UNIT 01] Which phrase introduces yourself politely?",
      "options": [
        "Hi, I'm Adit. Nice to meet you.",
        "You're new, right?",
        "Who sent you here?",
        "Whatever, I'm Adit."
      ],
      "answer": "Hi, I'm Adit. Nice to meet you.",
      "detail": "UNIT 01: A short name introduction with a greeting is warm and clear."
    },
    {
      "clue": "[UNIT 01] Which line politely ends a first chat?",
      "options": [
        "I should get going now. Let's catch up again soon.",
        "Bye.",
        "I'm leaving, don't follow me.",
        "This conversation is boring."
      ],
      "answer": "I should get going now. Let's catch up again soon.",
      "detail": "UNIT 01: A reason and a future plan make the exit feel friendly."
    },
    {
      "clue": "[UNIT 02] Which sentence uses a frequency adverb correctly?",
      "options": [
        "I always review my notes after dinner.",
        "I review always my notes after dinner.",
        "I always reviewing my notes after dinner.",
        "I am always review my notes after dinner."
      ],
      "answer": "I always review my notes after dinner.",
      "detail": "UNIT 02: Frequency adverbs go before the main verb."
    },
    {
      "clue": "[UNIT 02] Which sentence describes a regular job correctly?",
      "options": [
        "I work part-time at a café.",
        "I am work part-time at a café.",
        "I working part-time at a café.",
        "I worked at a café every day tomorrow."
      ],
      "answer": "I work part-time at a café.",
      "detail": "UNIT 02: The simple present describes a regular job."
    },
    {
      "clue": "[UNIT 02] Which question asks about someone's daily routine?",
      "options": [
        "What does your usual weekday look like?",
        "What did you do yesterday?",
        "Where will you go tomorrow?",
        "Have you finished the report?"
      ],
      "answer": "What does your usual weekday look like?",
      "detail": "UNIT 02: 'Usual' and 'weekday' point to a regular routine, so the simple present fits."
    },
    {
      "clue": "[UNIT 03] Which sentence uses 'be used to' correctly?",
      "options": [
        "She's used to working under pressure.",
        "She's used to work under pressure.",
        "She used work under pressure.",
        "She is used working under pressure."
      ],
      "answer": "She's used to working under pressure.",
      "detail": "UNIT 03: 'Be used to' is followed by -ing or a noun."
    },
    {
      "clue": "[UNIT 03] Which sentence means you stopped doing something a long time ago?",
      "options": [
        "I used to live in Malang.",
        "I'm used to living in Malang.",
        "I live in Malang.",
        "I'm living in Malang now."
      ],
      "answer": "I used to live in Malang.",
      "detail": "UNIT 03: 'Used to' describes a past state or habit that no longer continues."
    },
    {
      "clue": "[UNIT 03] Which word is a frequency adverb?",
      "options": [
        "often",
        "yesterday",
        "happy",
        "because"
      ],
      "answer": "often",
      "detail": "UNIT 03: Often, always, and usually show how frequently something happens."
    },
    {
      "clue": "[UNIT 04] Which phrase has the adjectives in the correct order?",
      "options": [
        "a beautiful old wooden chair",
        "an old beautiful wooden chair",
        "a wooden beautiful old chair",
        "an old wooden beautiful chair"
      ],
      "answer": "a beautiful old wooden chair",
      "detail": "UNIT 04: Opinion, then age, then material, then the noun."
    },
    {
      "clue": "[UNIT 04] Which phrase describes shape?",
      "options": [
        "a round table",
        "a wooden table",
        "a table, round",
        "a table of round"
      ],
      "answer": "a round table",
      "detail": "UNIT 04: Shape adjectives like round or square come before the noun."
    },
    {
      "clue": "[UNIT 04] Which sentence explains what an object is used for?",
      "options": [
        "It's a handy tool for cutting paper.",
        "It cuts paper handy.",
        "Tool it's handy paper.",
        "It's paper cutting tool handy."
      ],
      "answer": "It's a handy tool for cutting paper.",
      "detail": "UNIT 04: 'For + -ing' explains the purpose of an object."
    },
    {
      "clue": "[UNIT 05] Which sentence describes someone's hair?",
      "options": [
        "He has short curly hair.",
        "He is short curly hair.",
        "He hair is short.",
        "He curly has hair short."
      ],
      "answer": "He has short curly hair.",
      "detail": "UNIT 05: 'Has' + adjectives + hair describes physical features."
    },
    {
      "clue": "[UNIT 05] Which word describes a positive personality trait?",
      "options": [
        "generous",
        "rude",
        "lazy",
        "arrogant"
      ],
      "answer": "generous",
      "detail": "UNIT 05: Generous means willing to give time, help, or money."
    },
    {
      "clue": "[UNIT 05] Which sentence gives a balanced description of someone?",
      "options": [
        "She's very organized, although she can be a bit strict.",
        "She's bad and strict.",
        "She is strict only.",
        "She never does anything right."
      ],
      "answer": "She's very organized, although she can be a bit strict.",
      "detail": "UNIT 05: 'Although' and 'can be a bit' give a fair, balanced description."
    },
    {
      "clue": "[UNIT 06] Which phrase is a polite way to ask a teacher for help?",
      "options": [
        "Would you mind explaining this part again?",
        "Explain this again!",
        "You have to explain it.",
        "Just tell me."
      ],
      "answer": "Would you mind explaining this part again?",
      "detail": "UNIT 06: 'Would you mind + -ing' is a polite request form."
    },
    {
      "clue": "[UNIT 06] Which phrase asks for permission politely?",
      "options": [
        "May I borrow your notes for a moment?",
        "I'm taking your notes.",
        "Give me your notes.",
        "Your notes are mine now."
      ],
      "answer": "May I borrow your notes for a moment?",
      "detail": "UNIT 06: 'May I...?' asks permission politely."
    },
    {
      "clue": "[UNIT 06] Which response accepts a request warmly?",
      "options": [
        "Sure, go ahead!",
        "No way.",
        "Ask someone else.",
        "Figure it out yourself."
      ],
      "answer": "Sure, go ahead!",
      "detail": "UNIT 06: 'Sure, go ahead' gives permission in a friendly way."
    },
    {
      "clue": "[UNIT 07] Which instruction starts with the correct verb form?",
      "options": [
        "Take the stairs on your left.",
        "You take the stairs.",
        "Taking the stairs now.",
        "The stairs you take."
      ],
      "answer": "Take the stairs on your left.",
      "detail": "UNIT 07: Instructions start with the base verb: Take, Go, Turn."
    },
    {
      "clue": "[UNIT 07] Which sentence describes where something is?",
      "options": [
        "It's on your right, next to the bank.",
        "It's bank right.",
        "Right bank it's on.",
        "It bank next to right."
      ],
      "answer": "It's on your right, next to the bank.",
      "detail": "UNIT 07: 'On your right' and 'next to' show location."
    },
    {
      "clue": "[UNIT 07] Which word introduces the first step of instructions?",
      "options": [
        "First",
        "Finally",
        "Afterwards",
        "Earlier"
      ],
      "answer": "First",
      "detail": "UNIT 07: 'First' starts the steps, 'Then' continues, and 'Finally' ends."
    },
    {
      "clue": "[UNIT 09] Which sentence politely disagrees with someone?",
      "options": [
        "I see your point, but I'd argue timing matters more.",
        "You're completely wrong.",
        "That's a stupid idea.",
        "Nobody agrees with you."
      ],
      "answer": "I see your point, but I'd argue timing matters more.",
      "detail": "UNIT 09: Acknowledge the other person first, then add your view."
    },
    {
      "clue": "[UNIT 09] Which question keeps a conversation going?",
      "options": [
        "What got you into that field?",
        "Yes or no?",
        "Whatever.",
        "Okay, bye."
      ],
      "answer": "What got you into that field?",
      "detail": "UNIT 09: Open 'what' and 'how' questions keep the conversation flowing."
    },
    {
      "clue": "[UNIT 09] Which line politely asks to join a group?",
      "options": [
        "Mind if I join you?",
        "Move over.",
        "I'm joining, deal with it.",
        "Why are you all here?"
      ],
      "answer": "Mind if I join you?",
      "detail": "UNIT 09: 'Mind if I join you?' asks permission before joining."
    },
    {
      "clue": "[UNIT 10] Which opening line hooks the listener in a story?",
      "options": [
        "At first everything seemed normal, until suddenly the lights went out.",
        "Yesterday was Tuesday.",
        "The report has six pages.",
        "I went home."
      ],
      "answer": "At first everything seemed normal, until suddenly the lights went out.",
      "detail": "UNIT 10: Building tension makes a story more engaging."
    },
    {
      "clue": "[UNIT 10] Which phrase links a cause to its result in a news report?",
      "options": [
        "as a result",
        "however",
        "yesterday",
        "nevertheless"
      ],
      "answer": "as a result",
      "detail": "UNIT 10: 'As a result' connects a cause to its effect."
    },
    {
      "clue": "[UNIT 10] Which sentence gives the main event first?",
      "options": [
        "This morning, students launched a new speaking app.",
        "A new speaking app was something that students maybe launched.",
        "Speaking app, students, morning.",
        "Morning was cold and students were there."
      ],
      "answer": "This morning, students launched a new speaking app.",
      "detail": "UNIT 10: Start with the main event, then add time and details."
    },
    {
      "clue": "[UNIT 11] Which sentence shows a change over time?",
      "options": [
        "Compared to five years ago, online teamwork is second nature.",
        "Five years ago, online teamwork is.",
        "Online teamwork is nature second.",
        "Teamwork online five ago."
      ],
      "answer": "Compared to five years ago, online teamwork is second nature.",
      "detail": "UNIT 11: 'Compared to' + a past time sets up the contrast."
    },
    {
      "clue": "[UNIT 11] Which phrase describes a growing trend?",
      "options": [
        "More and more people are learning online.",
        "People learn online once in a while.",
        "People learned online yesterday.",
        "People used to learn online."
      ],
      "answer": "More and more people are learning online.",
      "detail": "UNIT 11: 'More and more' + present continuous shows a growing trend."
    },
    {
      "clue": "[UNIT 11] Which sentence is correct?",
      "options": [
        "We used to meet in the library, whereas now we meet online.",
        "We used to met in the library.",
        "We are used to meet in the library.",
        "We usually used to meet in the library."
      ],
      "answer": "We used to meet in the library, whereas now we meet online.",
      "detail": "UNIT 11: 'Used to' takes the base verb, and 'whereas' contrasts past and present."
    },
    {
      "clue": "[UNIT 12] Which hypothetical sentence is correct?",
      "options": [
        "If I were you, I would apologize first.",
        "If I am you, I would apologize.",
        "If I will be you, I would apologize.",
        "If I was you, I will apologize."
      ],
      "answer": "If I were you, I would apologize first.",
      "detail": "UNIT 12: The second conditional uses the past after 'if' and 'would' + base verb."
    },
    {
      "clue": "[UNIT 12] Which response is nonjudgmental?",
      "options": [
        "Rather than assuming carelessness, I would ask what blocked their progress.",
        "They're obviously lazy.",
        "I'd report them immediately.",
        "It's their fault, not mine."
      ],
      "answer": "Rather than assuming carelessness, I would ask what blocked their progress.",
      "detail": "UNIT 12: Focus on obstacles, not blame."
    },
    {
      "clue": "[UNIT 12] Which sentence calmly suggests a solution?",
      "options": [
        "I would check in calmly to find the bottleneck, then split the tasks.",
        "We are doomed.",
        "I'd quit the team.",
        "Let it be."
      ],
      "answer": "I would check in calmly to find the bottleneck, then split the tasks.",
      "detail": "UNIT 12: Calm check-ins and fair task splits solve problems."
    },
    {
      "clue": "[UNIT 13] Which sentence shows empathy?",
      "options": [
        "I can imagine how frustrating that must be.",
        "That's not my problem.",
        "Calm down, it's nothing.",
        "You're overreacting."
      ],
      "answer": "I can imagine how frustrating that must be.",
      "detail": "UNIT 13: Empathy names the feeling before solving the problem."
    },
    {
      "clue": "[UNIT 13] Which apology is sincere and direct?",
      "options": [
        "I'm sorry for the late reply. I'll get back to you today.",
        "Sorry, but it wasn't my fault.",
        "Whatever, sorry.",
        "Mistakes happen."
      ],
      "answer": "I'm sorry for the late reply. I'll get back to you today.",
      "detail": "UNIT 13: A direct apology with a concrete next step builds trust."
    },
    {
      "clue": "[UNIT 13] Which phrase offers a clear fix?",
      "options": [
        "I'll reship the order by tomorrow.",
        "We'll see what happens.",
        "It will probably be fine.",
        "Not my department."
      ],
      "answer": "I'll reship the order by tomorrow.",
      "detail": "UNIT 13: A specific action and timeline reassure the customer."
    },
    {
      "clue": "[UNIT 14] Which phrase introduces a compromise?",
      "options": [
        "One practical compromise is to keep the design clean and test it with peers.",
        "You must accept this.",
        "No, that won't work.",
        "Let's just argue."
      ],
      "answer": "One practical compromise is to keep the design clean and test it with peers.",
      "detail": "UNIT 14: 'One practical compromise is to...' presents a middle ground."
    },
    {
      "clue": "[UNIT 14] Which phrase summarizes what was agreed?",
      "options": [
        "Just to recap, we agreed to keep six units.",
        "Honestly, nobody cares.",
        "Forget it.",
        "I already said that."
      ],
      "answer": "Just to recap, we agreed to keep six units.",
      "detail": "UNIT 14: 'Just to recap' summarizes agreed points clearly."
    },
    {
      "clue": "[UNIT 14] Which suggestion sounds collaborative?",
      "options": [
        "What if we combine both ideas?",
        "Do it my way now.",
        "Stop talking.",
        "Your idea is bad."
      ],
      "answer": "What if we combine both ideas?",
      "detail": "UNIT 14: 'What if we...' invites shared decisions."
    }
  ],
  words: [],
  idioms: []
};

// Word and idiom quizzes are generated from VOCAB_DATA and IDIOMS_DATA
function placeAnswer(answer, distractors, index) {
  const options = [...distractors];
  options.splice(index % 4, 0, answer);
  return options;
}

function pickDistractors(pool, index, count) {
  const picks = [];
  for (let k = 0; picks.length < count && k < pool.length * 3; k++) {
    const item = pool[(index * 3 + k * 7) % pool.length];
    if (!picks.includes(item)) picks.push(item);
  }
  return picks;
}

QUIZ_DECKS.words = VOCAB_DATA.map((w, i) => {
  const others = VOCAB_DATA.filter((x) => x.id !== w.id).map((x) => x.word.toLowerCase());
  const options = placeAnswer(w.word.toLowerCase(), pickDistractors(others, i, 3), i);
  return {
    clue: w.definition,
    options,
    answer: w.word.toLowerCase(),
    detail: `${w.word.toUpperCase()} (${w.ipa}): ${w.example}`,
  };
});

QUIZ_DECKS.idioms = IDIOMS_DATA.map((item, i) => {
  const others = IDIOMS_DATA.filter((x) => x.idiom !== item.idiom).map((x) => x.idiom);
  const options = placeAnswer(item.idiom, pickDistractors(others, i, 3), i);
  return {
    clue: item.meaning,
    options,
    answer: item.idiom,
    detail: `${item.idiom.toUpperCase()}: "${item.example}"`,
  };
});

// ==========================================================================
// State
// ==========================================================================
const state = {
  activePage: "home",
  theme: localStorage.getItem("lexivibe_v6_theme") || "light",
  currentQuoteIndex: 0,
  spotlightIndex: 0,
  activeUnitNumber: 9,
  unitSearchQuery: "",
  accent: "en-US",
  voiceGender: "female",
  rate: 1,
  searchQuery: "",
  selectedCategory: "All",
  idiomSearchQuery: "",
  idiomCategory: "All",
  masteredIds: [],
  activeStoryIndex: 0,
  storyFontSize: 1.04,
  isReadingStory: false,
  quizMode: "units",
  quizUnit: "all",
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  quizHistory: [],
  modalWordId: null,
  lastFocusedElement: null
};

// ==========================================================================
// Init
// ==========================================================================
// Run each setup step on its own, so an error in one section cannot stop the others
// (for example, the quiz topic buttons). Errors are logged to the browser console.
async function safeInitAsync(name, fn) {
  try {
    await fn();
  } catch (err) {
    console.error(`Init failed: ${name}`, err);
  }
}

function safeInit(name, fn) {
  try {
    fn();
  } catch (err) {
    console.error(`Init failed: ${name}`, err);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await safeInitAsync("auth", bootApp);
  safeInit("profile", () => setupProfile());
  safeInit("theme", () => applyTheme(state.theme));
  safeInit("quote", () => { pickRandomQuoteOnOpen(); setupQuoteControls(); });
  safeInit("spotlight", () => setupSpotlightControls());
  safeInit("navigation", () => setupNavigation());
  safeInit("audio", () => setupGlobalAudioDelegation());
  safeInit("theme toggle", () => setupThemeToggle());
  safeInit("speech", () => setupSpeechControls());
  safeInit("words", () => { renderVocabGrid(); setupVocabFilters(); });
  safeInit("units", () => { renderUnitsLab(); setupUnitControls(); });
  safeInit("idioms", () => { renderIdiomsAndUpgrades(); setupIdiomFilters(); });
  safeInit("quiz", () => { renderQuizQuestion(); setupQuizControls(); });
  safeInit("modal", () => setupModalControls());
  safeInit("scroll reveal", () => refreshScrollReveal());
  safeInit("style", () => setupStyleToggle());
  safeInit("copy prompt", () => setupCopyPrompt());
  safeInit("progress", () => updateProgressStats());
});

// Scroll reveal: sections and cards fade and rise as they enter the screen, on every page.
// Elements are tagged when their page is shown, so cards rebuilt by the app are also covered.
// If IntersectionObserver is unsupported, nothing is hidden and content stays visible.
const REVEAL_SELECTOR = [
  ".page-top-banner", ".toolbar-row", ".section-banner", ".unit-selector-bar",
  ".unit-workspace-window", ".subtopic-card", ".dialogue-box", ".reflection-panel",
  ".vocab-card", ".table-wrap", ".story-tabs", ".story-window", ".quiz-window",
  ".results-panel", ".quote-banner-wrap", ".home-section-heading", ".exam-group-head",
  ".unit-mini-card", ".site-footer .footer-box"
].join(", ");

let revealObserver = null;

function getRevealObserver() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );
  }
  return revealObserver;
}

function refreshScrollReveal() {
  if (!("IntersectionObserver" in window)) return;

  const targets = Array.from(document.querySelectorAll(REVEAL_SELECTOR)).filter(
    (el) => !el.classList.contains("reveal")
  );
  if (targets.length === 0) return;

  document.documentElement.classList.add("reveal-ready");
  const observer = getRevealObserver();
  targets.forEach((el) => {
    const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
    const index = Math.max(siblings.indexOf(el), 0);
    el.classList.add("reveal");
    el.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    observer.observe(el);
  });
}

function setupGlobalAudioDelegation() {
  document.addEventListener("click", (e) => {
    const speakBtn = e.target.closest("[data-speak-text]");
    if (speakBtn) speakText(speakBtn.getAttribute("data-speak-text"));
  });
}

function escAttr(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ==========================================================================
// Random Quote
// ==========================================================================
function pickRandomQuoteOnOpen() {
  const lastIdx = parseInt(sessionStorage.getItem("lexivibe_last_q6") || "-1", 10);
  let nextIdx = Math.floor(Math.random() * QUOTES_DATA.length);
  if (QUOTES_DATA.length > 1 && nextIdx === lastIdx) {
    nextIdx = (nextIdx + 1) % QUOTES_DATA.length;
  }
  state.currentQuoteIndex = nextIdx;
  sessionStorage.setItem("lexivibe_last_q6", String(nextIdx));
  const q = QUOTES_DATA[state.currentQuoteIndex];
  document.getElementById("randomQuoteText").textContent = `“${q.text}”`;
  document.getElementById("randomQuoteAuthor").textContent = q.author;
  playAnim(document.getElementById("randomQuoteText"), "slide-in");
}

function setupQuoteControls() {
  document.getElementById("newQuoteBtn").addEventListener("click", () => {
    pickRandomQuoteOnOpen();
    showToast("NEW QUOTE");
  });
  document.getElementById("speakQuoteBtn").addEventListener("click", () => {
    const q = QUOTES_DATA[state.currentQuoteIndex];
    speakText(`${q.text} By ${q.author}.`);
  });
}

// ==========================================================================
// Spotlight Word
// ==========================================================================
function renderSpotlightWord() {
  const item = VOCAB_DATA[state.spotlightIndex];
  document.getElementById("spotlightCat").textContent = `${item.pos} // ${item.category.toUpperCase()}`;
  document.getElementById("spotlightIpa").textContent = item.ipa;
  document.getElementById("spotlightWord").textContent = item.word.toUpperCase();
  document.getElementById("spotlightDef").textContent = item.definition;
  document.getElementById("spotlightExample").textContent = `"${item.example}"`;
  playAnim(document.getElementById("spotlightWord"), "slide-in");
  document.getElementById("spotlightOld").innerHTML = `${ICONS.cross} <span>BASIC: "${item.basicAlt}"</span>`;
  document.getElementById("spotlightNew").innerHTML = `${ICONS.check} <span>UPGRADE: "${item.example}"</span>`;
}

function setupSpotlightControls() {
  state.spotlightIndex = Math.floor(Math.random() * VOCAB_DATA.length);
  renderSpotlightWord();
  document.getElementById("spotlightSpeakBtn").addEventListener("click", () => {
    speakText(VOCAB_DATA[state.spotlightIndex].word);
  });
  document.getElementById("spotlightShuffleBtn").addEventListener("click", () => {
    let nextIndex = state.spotlightIndex;
    while (nextIndex === state.spotlightIndex && VOCAB_DATA.length > 1) {
      nextIndex = Math.floor(Math.random() * VOCAB_DATA.length);
    }
    state.spotlightIndex = nextIndex;
    renderSpotlightWord();
  });
}

// ==========================================================================
// Theme & Navigation
// ==========================================================================
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("lexivibe_v6_theme", theme);
  const label = document.getElementById("themeLabel");
  if (label) label.textContent = theme === "dark" ? "LIGHT" : "DARK";
}

function setupThemeToggle() {
  document.getElementById("themeToggle").addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    applyTheme(state.theme);
  });
}

function navigateTo(pageId) {
  if (!currentUser()) pageId = "login";
  state.activePage = pageId;
  stopSpeech();

  document.querySelectorAll(".page").forEach((sec) => {
    sec.classList.toggle("active", sec.id === `page-${pageId}`);
  });

  document.querySelectorAll("[data-nav]").forEach((btn) => {
    if (btn.classList.contains("nav-tab") || btn.classList.contains("dock-btn")) {
      btn.classList.toggle("active", btn.dataset.nav === pageId);
    }
  });

  if (pageId === "profile") renderProfile();
  window.scrollTo({ top: 0, behavior: "smooth" });
  refreshScrollReveal();
}

function setupNavigation() {
  document.querySelectorAll("[data-nav]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(el.dataset.nav);
    });
  });

  document.querySelectorAll("[data-open-unit]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.activeUnitNumber = parseInt(btn.dataset.openUnit, 10);
      state.unitSearchQuery = "";
      const unitSearchEl = document.getElementById("unitSearchInput");
      if (unitSearchEl) unitSearchEl.value = "";
      renderUnitsLab();
      navigateTo("units");
    });
  });
}

// ==========================================================================
// Speech Engine
// ==========================================================================
let cachedVoices = [];

function refreshVoices() {
  if ("speechSynthesis" in window) cachedVoices = window.speechSynthesis.getVoices();
}

if ("speechSynthesis" in window) {
  refreshVoices();
  window.speechSynthesis.addEventListener("voiceschanged", refreshVoices);
}

const MALE_VOICE_NAME = /\b(male|david|mark|daniel|alex|fred|george|james|tom|guy|ryan|arthur|oliver|aaron)\b/i;
const FEMALE_VOICE_NAME = /\b(female|samantha|zira|susan|karen|victoria|fiona|hazel|serena|moira|tessa|google us english)\b/i;

function findVoice(lang) {
  if (cachedVoices.length === 0) refreshVoices();
  const inLang = cachedVoices.filter((v) => v.lang.startsWith(lang));
  if (state.voiceGender === "male") {
    return inLang.find((v) => MALE_VOICE_NAME.test(v.name)) || null;
  }
  return (
    inLang.find((v) => FEMALE_VOICE_NAME.test(v.name)) ||
    inLang.find((v) => !MALE_VOICE_NAME.test(v.name)) ||
    inLang[0] ||
    null
  );
}

// Prepared audio (audio/<word>.mp3) gives the same voice on every device.
// If a file is missing or cannot play, the device voice is used instead.
const AUDIO_DIR = "audio/";
let currentAudio = null;

function audioSlug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
}

function speakText(text, onEndCallback = null) {
  if (!AUDIO_FILES_ENABLED) {
    speakWithSystemVoice(text, onEndCallback);
    return;
  }
  const slug = audioSlug(text);
  if (!slug || typeof Audio === "undefined") {
    speakWithSystemVoice(text, onEndCallback);
    return;
  }
  stopAudioFile();
  const audio = new Audio(`${AUDIO_DIR}${slug}.mp3`);
  currentAudio = audio;
  const fallback = () => {
    if (currentAudio === audio) currentAudio = null;
    speakWithSystemVoice(text, onEndCallback);
  };
  audio.onended = () => {
    if (currentAudio === audio) currentAudio = null;
    if (onEndCallback) onEndCallback();
  };
  audio.onerror = fallback;
  const playing = audio.play();
  if (playing && typeof playing.catch === "function") playing.catch(fallback);
}

function stopAudioFile() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
}

function speakWithSystemVoice(text, onEndCallback = null) {
  if (!("speechSynthesis" in window)) {
    showToast("AUDIO NOT SUPPORTED");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = state.accent;
  utterance.rate = state.rate;

  const matched = findVoice(state.accent);
  if (matched) utterance.voice = matched;
  else if (state.voiceGender === "male") showToast("NO MALE VOICE ON THIS DEVICE");

  utterance.onend = () => { if (onEndCallback) onEndCallback(); };
  utterance.onerror = () => { if (onEndCallback) onEndCallback(); };

  window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
  stopAudioFile();
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  state.isReadingStory = false;
  const readBtn = document.getElementById("readStoryAloudBtn");
  if (readBtn) readBtn.innerHTML = `${ICONS.speaker} READ ALOUD`;
}

function setupSpeechControls() {
  document.querySelectorAll("[data-voice]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.voiceGender = btn.dataset.voice;
      document.querySelectorAll("[data-voice]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      if (state.voiceGender === "male" && !findVoice(state.accent)) {
        showToast("NO MALE VOICE ON THIS DEVICE");
      } else {
        showToast(`VOICE: ${state.voiceGender.toUpperCase()}`);
      }
    });
  });

  document.querySelectorAll("[data-accent]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.accent = btn.dataset.accent;
      document.querySelectorAll("[data-accent]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      showToast(`ACCENT: ${state.accent}`);
    });
  });

  document.querySelectorAll("[data-rate]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.rate = parseFloat(btn.dataset.rate);
      document.querySelectorAll("[data-rate]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      showToast(`SPEED: ${state.rate}X`);
    });
  });
}

// ==========================================================================
// Page 01: Rare Words (Concise Cards)
// ==========================================================================
function renderVocabGrid() {
  const grid = document.getElementById("vocabGrid");
  const filtered = VOCAB_DATA.filter((item) => {
    let matchesCat = true;
    if (state.selectedCategory === "Mastered") {
      matchesCat = state.masteredIds.includes(item.id);
    } else if (state.selectedCategory !== "All") {
      matchesCat = item.category === state.selectedCategory;
    }

    const q = state.searchQuery.toLowerCase();
    const matchesSearch =
      item.word.toLowerCase().includes(q) ||
      item.definition.toLowerCase().includes(q) ||
      item.basicAlt.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="os-window" style="grid-column: 1/-1; padding: 18px;"><strong>NO MATCHING WORDS FOUND.</strong></div>`;
    return;
  }

  grid.innerHTML = filtered
    .map((item, index) => {
      const isMastered = state.masteredIds.includes(item.id);
      const num = String(index + 1).padStart(2, "0");
      return `
        <article class="vocab-card">
          <div class="vocab-card-head ${item.badgeColor}">
            <span>[${num}] ${item.category.toUpperCase()}</span>
            <span>${item.pos}</span>
          </div>
          <div class="vocab-card-body">
            <div class="vocab-title-row">
              <div>
                <h2 class="vocab-word">${item.word}</h2>
                <p class="vocab-ipa">${item.ipa}</p>
              </div>
              <button class="brutal-btn-sm bg-sky" data-speak-text="${escAttr(item.word)}">
                ${ICONS.speaker} WORD
              </button>
            </div>
            <p class="vocab-def">${item.definition}</p>
            <div class="vocab-alt-box">
              <strong>BASIC:</strong> "${item.basicAlt}"
            </div>
            <p class="vocab-example">"${item.example}"</p>
            <div class="vocab-footer">
              <button class="brutal-btn-sm" data-speak-text="${escAttr(item.example)}">
                ${ICONS.speaker} EXAMPLE
              </button>
              <button class="brutal-btn-sm ${isMastered ? "bg-mint" : ""}" onclick="toggleMastered('${item.id}')">
                ${isMastered ? `${ICONS.check} MASTERED` : "+ MASTERED"}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function setupVocabFilters() {
  document.getElementById("wordSearchInput").addEventListener("input", (e) => {
    state.searchQuery = e.target.value.trim();
    renderVocabGrid();
  });

  document.querySelectorAll("#categoryPills .cat-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      state.selectedCategory = pill.dataset.cat;
      document.querySelectorAll("#categoryPills .cat-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      renderVocabGrid();
    });
  });
}

function toggleMastered(wordId) {
  const idx = state.masteredIds.indexOf(wordId);
  if (idx > -1) {
    state.masteredIds.splice(idx, 1);
    showToast("REMOVED");
  } else {
    state.masteredIds.push(wordId);
    showToast("MASTERED");
  }
  updateProgress((p) => { p.mastered = [...state.masteredIds]; });
  renderVocabGrid();
  updateProgressStats();

  if (state.masteredIds.includes(wordId)) {
    playAnim(document.querySelector(`button[onclick="toggleMastered('${wordId}')"]`), "master-pop");
    playAnim(document.getElementById("modalMasterBtn"), "master-pop");
  }
}

function updateProgressStats() {
  document.getElementById("navMasteryCount").textContent = `${state.masteredIds.length}/${VOCAB_DATA.length}`;
  document.getElementById("homeMasteredStat").textContent = `${state.masteredIds.length} / ${VOCAB_DATA.length} WORDS`;
}

// ==========================================================================
// Page 02: Units Speaking Lab (Clean, Scannable & Searchable)
// ==========================================================================
function renderUnitsLab() {
  const tabsBar = document.getElementById("unitTabsBar");
  const dialogueBox = document.getElementById("unitDialogueBox");
  const practicePanel = document.getElementById("unitPracticePanel");
  const bar = document.getElementById("unitWindowBar");
  const q = state.unitSearchQuery.toLowerCase();

  // Cross-Unit Search Mode
  if (q) {
    tabsBar.classList.add("hidden");
    dialogueBox.classList.add("hidden");
    practicePanel.classList.add("hidden");
    document.getElementById("unitReadFirst").classList.add("hidden");

    const matches = [];
    UNITS_DATA.forEach((u) => {
      const unitNumStr = String(u.unit).padStart(2, "0");
      u.subtopics.forEach((sub) => {
        const isMatch =
          u.title.toLowerCase().includes(q) ||
          u.shortLabel.toLowerCase().includes(q) ||
          `unit ${unitNumStr}`.includes(q) ||
          `unit ${u.unit}`.includes(q) ||
          sub.title.toLowerCase().includes(q) ||
          sub.tag.toLowerCase().includes(q) ||
          sub.tip.toLowerCase().includes(q) ||
          sub.phrases.some((p) => p.toLowerCase().includes(q));

        if (isMatch) {
          matches.push({ unit: u, unitNumStr, sub });
        }
      });
    });

    bar.className = "os-titlebar bg-sky";
    document.getElementById("unitWindowCode").textContent = "SEARCH // ALL UNITS";
    document.getElementById("unitTopicCount").textContent = `${matches.length} MATCHING SKILLS`;
    document.getElementById("unitTitle").textContent = `Results for “${state.unitSearchQuery}”`;
    document.getElementById("unitSummary").textContent =
      "Clear the search bar to return to the unit tabs and practice dialogues.";

    if (matches.length === 0) {
      document.getElementById("unitSubtopicsGrid").innerHTML =
        `<div style="grid-column: 1/-1; padding: 12px 0;"><strong>NO MATCHING PHRASES OR SKILLS FOUND.</strong></div>`;
      return;
    }

    document.getElementById("unitSubtopicsGrid").innerHTML = matches
      .map(({ unit, unitNumStr, sub }) => {
        const phrasesHtml = sub.phrases
          .map(
            (p) => `
              <div class="phrase-item">
                <span class="phrase-en">“${p}”</span>
                <button class="brutal-btn-sm bg-sky" data-speak-text="${escAttr(p)}" title="Listen" aria-label="Listen to phrase">
                  ${ICONS.speaker}
                </button>
              </div>
            `
          )
          .join("");

        return `
          <div class="subtopic-card">
            <div class="subtopic-card-header">
              <h3>${sub.title}</h3>
              <span class="tag-pill ${unit.colorClass}">UNIT ${unitNumStr} · ${sub.tag}</span>
            </div>
            <p class="formula-tip">${ICONS.bulb} <span>${sub.tip}</span></p>
            <div class="phrase-list">${phrasesHtml}</div>
          </div>
        `;
      })
      .join("");
    return;
  }

  // Standard Unit Tab Mode
  tabsBar.classList.remove("hidden");
  dialogueBox.classList.remove("hidden");
  practicePanel.classList.remove("hidden");

  tabsBar.innerHTML = UNITS_DATA.map((u) => {
    const numStr = String(u.unit).padStart(2, "0");
    const isActive = u.unit === state.activeUnitNumber;
    return `
      <button
        type="button"
        class="unit-tab-btn ${isActive ? u.colorClass : ""}"
        role="tab"
        aria-selected="${isActive}"
        onclick="selectUnit(${u.unit})"
      >
        <span class="unit-tab-num">UNIT ${numStr} · ${u.exam}</span>
        <span class="unit-tab-label">${u.shortLabel}</span>
      </button>
    `;
  }).join("");

  const current = UNITS_DATA.find((u) => u.unit === state.activeUnitNumber) || UNITS_DATA[0];
  bar.className = `os-titlebar ${current.colorClass}`;

  document.getElementById("unitWindowCode").textContent = current.headerLabel;
  document.getElementById("unitTopicCount").textContent = `${current.subtopics.length} SKILLS`;
  document.getElementById("unitTitle").textContent = current.title;
  document.getElementById("unitSummary").textContent = current.summary;

  document.getElementById("unitSubtopicsGrid").innerHTML = current.subtopics
    .map((sub) => {
      const phrasesHtml = sub.phrases
        .map(
          (p) => `
            <div class="phrase-item">
              <span class="phrase-en">“${p}”</span>
              <button class="brutal-btn-sm bg-sky" data-speak-text="${escAttr(p)}" title="Listen" aria-label="Listen to phrase">
                ${ICONS.speaker}
              </button>
            </div>
          `
        )
        .join("");

      return `
        <div class="subtopic-card">
          <div class="subtopic-card-header">
            <h3>${sub.title}</h3>
            <span class="tag-pill ${current.colorClass}">${sub.tag}</span>
          </div>
          <p class="formula-tip">${ICONS.bulb} <span>${sub.tip}</span></p>
          <div class="phrase-list">${phrasesHtml}</div>
        </div>
      `;
    })
    .join("");

  document.getElementById("unitDialogueTitle").textContent = current.dialogueTitle;
  document.getElementById("unitDialogueLines").innerHTML = current.dialogue
    .map(
      (line) => `
        <div class="dialogue-row">
          <span class="speaker-tag">${line.speaker}</span>
          <span>${line.text}</span>
        </div>
      `
    )
    .join("");

  document.getElementById("unitPracticePrompt").textContent = current.practicePrompt;
  renderWarmup(current);
  renderReadFirst(current);
  renderModelAnswer(current);
  const savedPractice = getNote(`u_${current.unit}`);
  document.getElementById("unitPracticeInput").value = savedPractice;
  document.getElementById("unitPracticeSavedMsg").innerHTML = "";
}

function selectUnit(unitNum) {
  stopSpeech();
  state.activeUnitNumber = unitNum;
  renderUnitsLab();
  refreshScrollReveal();
}

function renderWarmup(unit) {
  const pad = String(unit.unit).padStart(2, "0");
  const q = QUIZ_DECKS.units.find((item) => item.clue.startsWith(`[UNIT ${pad}]`));
  const box = document.getElementById("unitWarmupBox");
  const feedback = document.getElementById("unitWarmupFeedback");
  feedback.className = "feedback-box hidden";
  feedback.innerHTML = "";

  if (!q) {
    box.classList.add("hidden");
    return;
  }
  box.classList.remove("hidden");
  document.getElementById("unitWarmupClue").textContent = q.clue.replace(/^\[UNIT \d+\]\s*/, "");

  const letters = ["A", "B", "C", "D"];
  const optionsEl = document.getElementById("unitWarmupOptions");
  optionsEl.innerHTML = q.options
    .map((opt, idx) => `
      <button type="button" class="quiz-opt-btn" data-warm-idx="${idx}">
        <span class="opt-key">${letters[idx]}</span>
        <span>${opt}</span>
      </button>
    `)
    .join("");

  optionsEl.querySelectorAll(".quiz-opt-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const chosen = q.options[parseInt(btn.dataset.warmIdx, 10)];
      const isCorrect = chosen === q.answer;
      optionsEl.querySelectorAll(".quiz-opt-btn").forEach((b, i) => {
        b.disabled = true;
        if (q.options[i] === q.answer) b.classList.add("correct");
        else if (b === btn && !isCorrect) b.classList.add("wrong");
      });
      feedback.className = `feedback-box ${isCorrect ? "correct" : "wrong"}`;
      feedback.innerHTML = `<strong>${isCorrect ? "CORRECT!" : "NOT QUITE."}</strong> ${q.detail}`;
    });
  });
}

function renderReadFirst(unit) {
  const box = document.getElementById("unitReadFirst");
  const rf = unit.readFirst;
  if (!rf) {
    box.classList.add("hidden");
    return;
  }
  box.classList.remove("hidden");
  box.open = true;
  document.getElementById("unitReadFirstBody").innerHTML = `
    <ul class="rf-pattern">${rf.pattern.map((p) => `<li>${p}</li>`).join("")}</ul>
    <p><strong>When to use:</strong> ${rf.whenToUse}</p>
    <div class="rf-example rf-good"><span class="rf-tag">GOOD</span>${rf.good}</div>
    <div class="rf-example rf-bad"><span class="rf-tag">AVOID</span>${rf.bad}</div>
    <p><strong>Common mistake:</strong> ${rf.mistake}</p>
  `;
}

function renderModelAnswer(unit) {
  document.getElementById("unitExampleBox").textContent = unit.modelAnswer || "";
  document.getElementById("unitExampleBox").classList.add("hidden");
  document.getElementById("showExampleBtn").textContent = "SHOW EXAMPLE";
}

function setupUnitControls() {
  document.getElementById("showExampleBtn").addEventListener("click", () => {
    const box = document.getElementById("unitExampleBox");
    const nowHidden = box.classList.toggle("hidden");
    document.getElementById("showExampleBtn").textContent = nowHidden ? "SHOW EXAMPLE" : "HIDE EXAMPLE";
  });

  document.getElementById("unitSearchInput").addEventListener("input", (e) => {
    state.unitSearchQuery = e.target.value.trim();
    renderUnitsLab();
  });

  document.getElementById("playUnitDialogueBtn").addEventListener("click", () => {
    const current = UNITS_DATA.find((u) => u.unit === state.activeUnitNumber) || UNITS_DATA[0];
    const fullDialogue = current.dialogue.map((d) => `${d.speaker}: ${d.text}`).join(". ");
    speakText(fullDialogue);
  });

  document.getElementById("saveUnitPracticeBtn").addEventListener("click", () => {
    const current = UNITS_DATA.find((u) => u.unit === state.activeUnitNumber) || UNITS_DATA[0];
    const text = document.getElementById("unitPracticeInput").value.trim();
    setNote(`u_${current.unit}`, text);
    if (text) markPracticed(current.unit);
    document.getElementById("unitPracticeSavedMsg").innerHTML = `${ICONS.check} <span>Saved!</span>`;
  });
}

// ==========================================================================
// Page 03: Idioms & Upgrades (With Search)
// ==========================================================================
function renderIdiomsAndUpgrades() {
  const q = state.idiomSearchQuery.toLowerCase();

  const filteredIdioms = IDIOMS_DATA.filter(
    (item) =>
      (state.idiomCategory === "All" || item.category === state.idiomCategory) &&
      (item.idiom.toLowerCase().includes(q) ||
        item.meaning.toLowerCase().includes(q) ||
        item.example.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q))
  );

  const idiomsGrid = document.getElementById("idiomsGrid");
  if (filteredIdioms.length === 0) {
    idiomsGrid.innerHTML = `<div class="os-window" style="grid-column: 1/-1; padding: 18px;"><strong>NO MATCHING IDIOMS FOUND.</strong></div>`;
  } else {
    idiomsGrid.innerHTML = filteredIdioms
      .map((item, idx) => {
        const num = String(idx + 1).padStart(2, "0");
        return `
          <article class="vocab-card">
            <div class="vocab-card-head ${item.color}">
              <span>[IDIOM ${num}]</span>
              <span>${item.tag}</span>
            </div>
            <div class="vocab-card-body">
              <div class="vocab-title-row">
                <h3 class="vocab-word">${item.idiom}</h3>
                <button class="brutal-btn-sm bg-sky" data-speak-text="${escAttr(item.idiom)}" aria-label="Listen to idiom">
                  ${ICONS.speaker}
                </button>
              </div>
              <p class="vocab-def">${item.meaning}</p>
              <p class="vocab-example">"${item.example}"</p>
            </div>
          </article>
        `;
      })
      .join("");
  }

  const filteredUpgrades = UPGRADES_DATA.filter(
    (row) =>
      row.context.toLowerCase().includes(q) ||
      row.basic.toLowerCase().includes(q) ||
      row.natural.toLowerCase().includes(q)
  );

  document.getElementById("upgradesCountBadge").textContent = `${filteredUpgrades.length} PATTERNS`;
  const tbody = document.getElementById("upgradesTableBody");

  if (filteredUpgrades.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4"><strong>NO MATCHING PHRASE UPGRADES FOUND.</strong></td></tr>`;
  } else {
    tbody.innerHTML = filteredUpgrades
      .map(
        (row) => `
          <tr>
            <td><strong>${row.context}</strong></td>
            <td class="basic-cell">"${row.basic}"</td>
            <td class="native-cell">"${row.natural}"</td>
            <td>
              <button class="brutal-btn-sm bg-sky" data-speak-text="${escAttr(row.natural)}" aria-label="Listen to natural phrase">
                ${ICONS.speaker}
              </button>
            </td>
          </tr>
        `
      )
      .join("");
  }
}

function setupIdiomFilters() {
  document.getElementById("idiomSearchInput").addEventListener("input", (e) => {
    state.idiomSearchQuery = e.target.value.trim();
    renderIdiomsAndUpgrades();
  });

  document.querySelectorAll("#idiomCategoryPills .cat-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      state.idiomCategory = pill.dataset.icat;
      document.querySelectorAll("#idiomCategoryPills .cat-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      renderIdiomsAndUpgrades();
    });
  });
}

// ==========================================================================
// Page 04: Stories
// ==========================================================================
function renderStories() {
  const tabsContainer = document.getElementById("storyTabs");
  tabsContainer.innerHTML = STORIES_DATA.map(
    (s, idx) => `
      <button class="story-tab ${idx === state.activeStoryIndex ? "active" : ""}" onclick="selectStory(${idx})">
        ${s.tabTitle}
      </button>
    `
  ).join("");

  const story = STORIES_DATA[state.activeStoryIndex];
  document.getElementById("storyWindowFile").textContent = story.tabTitle;
  document.getElementById("storyReadTime").textContent = story.readTime;
  document.getElementById("storyTag").textContent = story.tag;
  document.getElementById("storyTitle").textContent = story.title;
  document.getElementById("storyAuthor").textContent = story.author;
  document.getElementById("storyPrompt").textContent = story.prompt;

  const bodyEl = document.getElementById("storyBody");
  bodyEl.style.fontSize = `${state.storyFontSize}rem`;
  bodyEl.innerHTML = story.paragraphs
    .map((p) => {
      const parsed = p.replace(/\{(\w+)\}/g, (_, wordId) => {
        const entry = VOCAB_DATA.find((v) => v.id === wordId);
        const label = entry ? entry.word.toLowerCase() : wordId;
        return `<button type="button" class="story-word-chip" onclick="openWordModal('${wordId}')">${label}</button>`;
      });
      return `<p>${parsed}</p>`;
    })
    .join("");

  const savedNote = getNote(`s_${story.id}`);
  document.getElementById("reflectionInput").value = savedNote;
  document.getElementById("reflectionSavedMsg").innerHTML = "";
}

function selectStory(index) {
  stopSpeech();
  state.activeStoryIndex = index;
  renderStories();
  playAnim(document.querySelector(".story-window"), "slide-in");
}

function setupStoryControls() {
  document.getElementById("fontIncreaseBtn").addEventListener("click", () => {
    state.storyFontSize = Math.min(1.3, +(state.storyFontSize + 0.08).toFixed(2));
    document.getElementById("storyBody").style.fontSize = `${state.storyFontSize}rem`;
  });

  document.getElementById("fontDecreaseBtn").addEventListener("click", () => {
    state.storyFontSize = Math.max(0.92, +(state.storyFontSize - 0.08).toFixed(2));
    document.getElementById("storyBody").style.fontSize = `${state.storyFontSize}rem`;
  });

  document.getElementById("readStoryAloudBtn").addEventListener("click", () => {
    const btn = document.getElementById("readStoryAloudBtn");
    if (state.isReadingStory) {
      stopSpeech();
      return;
    }
    const story = STORIES_DATA[state.activeStoryIndex];
    const cleanText = story.paragraphs.join(" ").replace(/\{|\}/g, "");
    state.isReadingStory = true;
    btn.innerHTML = `${ICONS.stop} STOP`;
    speakText(cleanText, () => {
      state.isReadingStory = false;
      btn.innerHTML = `${ICONS.speaker} READ ALOUD`;
    });
  });

  document.getElementById("saveReflectionBtn").addEventListener("click", () => {
    const story = STORIES_DATA[state.activeStoryIndex];
    const text = document.getElementById("reflectionInput").value.trim();
    setNote(`s_${story.id}`, text);
    document.getElementById("reflectionSavedMsg").innerHTML = `${ICONS.check} <span>Saved!</span>`;
  });
}

// ==========================================================================
// Word Modal (With Escape Key, Focus Trap & Focus Restoration)
// ==========================================================================
function openWordModal(wordId) {
  const entry = VOCAB_DATA.find((v) => v.id === wordId);
  if (!entry) return;

  state.lastFocusedElement = document.activeElement;
  state.modalWordId = wordId;

  document.getElementById("modalWordCat").textContent = `${entry.category.toUpperCase()} // ${entry.pos}`;
  document.getElementById("modalWordTitle").textContent = entry.word;
  document.getElementById("modalWordIpa").textContent = entry.ipa;
  document.getElementById("modalWordDef").textContent = entry.definition;
  document.getElementById("modalWordOrigin").innerHTML = `<strong>Origin:</strong> ${entry.origin}`;
  document.getElementById("modalWordEx").textContent = `"${entry.example}"`;

  updateModalMasterBtn();

  const backdrop = document.getElementById("wordModalBackdrop");
  backdrop.classList.remove("hidden");
  document.getElementById("closeModalBtn").focus();

}

function closeWordModal() {
  const backdrop = document.getElementById("wordModalBackdrop");
  if (backdrop.classList.contains("hidden")) return;

  backdrop.classList.add("hidden");
  stopSpeech();
  if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === "function") {
    state.lastFocusedElement.focus();
  }
}

function updateModalMasterBtn() {
  const isMastered = state.masteredIds.includes(state.modalWordId);
  const btn = document.getElementById("modalMasterBtn");
  btn.innerHTML = isMastered ? `${ICONS.check} MASTERED` : "+ MASTERED";
}

function setupModalControls() {
  const backdrop = document.getElementById("wordModalBackdrop");

  document.getElementById("closeModalBtn").addEventListener("click", closeWordModal);

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeWordModal();
  });

  document.getElementById("modalSpeakBtn").addEventListener("click", () => {
    const entry = VOCAB_DATA.find((v) => v.id === state.modalWordId);
    if (entry) speakText(entry.word);
  });

  document.getElementById("modalMasterBtn").addEventListener("click", () => {
    if (state.modalWordId) {
      toggleMastered(state.modalWordId);
      updateModalMasterBtn();
    }
  });

  // Keyboard Accessibility: Escape to close & Tab focus trap inside modal
  document.addEventListener("keydown", (e) => {
    if (backdrop.classList.contains("hidden")) return;

    if (e.key === "Escape") {
      e.preventDefault();
      closeWordModal();
      return;
    }

    if (e.key === "Tab") {
      const focusableEls = Array.from(
        backdrop.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      if (focusableEls.length === 0) return;

      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];

      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
  });
}

// ==========================================================================
// Page 05: Quiz
// ==========================================================================
function getCurrentDeck() {
  const deck = QUIZ_DECKS[state.quizMode];
  if (state.quizMode !== "units" || state.quizUnit === "all") return deck;
  const prefix = `[UNIT ${state.quizUnit}]`;
  return deck.filter((q) => q.clue.startsWith(prefix));
}

function renderQuizQuestion() {
  const deck = getCurrentDeck();
  const q = deck[state.quizIndex];
  state.quizAnswered = false;

  document.getElementById("quizQuestionArea").classList.remove("hidden");
  document.getElementById("quizResultArea").classList.add("hidden");

  const qNum = String(state.quizIndex + 1).padStart(2, "0");
  const totalStr = String(deck.length).padStart(2, "0");
  document.getElementById("quizCounter").textContent = `QUESTION ${qNum} / ${totalStr}`;
  document.getElementById("quizScoreBadge").textContent = `SCORE: ${state.quizScore}`;
  document.getElementById("quizProgressBar").style.width = `${((state.quizIndex + 1) / deck.length) * 100}%`;

  const clueLabels = {
    units: "SPEAKING SCENARIO:",
    words: "WORD DEFINITION:",
    idioms: "IDIOM MEANING:"
  };
  document.getElementById("quizClueLabel").textContent = clueLabels[state.quizMode];
  document.getElementById("quizDefinition").textContent = q.clue;

  const letters = ["A", "B", "C", "D"];
  const optionsEl = document.getElementById("quizOptions");
  optionsEl.innerHTML = q.options
    .map((opt, idx) => `
      <button class="quiz-opt-btn" data-opt-idx="${idx}">
        <span class="opt-key">${letters[idx]}</span>
        <span>${opt}</span>
      </button>
    `)
    .join("");

  optionsEl.querySelectorAll(".quiz-opt-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const optIdx = parseInt(btn.getAttribute("data-opt-idx"), 10);
      handleQuizAnswer(q.options[optIdx], btn);
    });
  });

  const feedbackEl = document.getElementById("quizFeedback");
  feedbackEl.className = "feedback-box hidden";
  document.getElementById("nextQuestionBtn").classList.add("hidden");
}

function handleQuizAnswer(choice, btnEl) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;

  const deck = getCurrentDeck();
  const q = deck[state.quizIndex];
  const isCorrect = choice === q.answer;

  document.querySelectorAll(".quiz-opt-btn").forEach((btn, idx) => {
    btn.disabled = true;
    if (q.options[idx] === q.answer) {
      btn.classList.add("correct");
    } else if (btn === btnEl && !isCorrect) {
      btn.classList.add("wrong");
    }
  });

  if (isCorrect) {
    state.quizScore++;
    document.getElementById("quizScoreBadge").textContent = `SCORE: ${state.quizScore}`;
    if (state.quizMode !== "units") speakText(q.answer);
  }

  state.quizHistory.push({ target: q.answer, chosen: choice, isCorrect });

  const feedbackEl = document.getElementById("quizFeedback");
  feedbackEl.className = `feedback-box ${isCorrect ? "correct" : "wrong"}`;
  feedbackEl.innerHTML = isCorrect
    ? `<strong>CORRECT!</strong> ${q.detail}`
    : `<strong>NOT QUITE.</strong> ${q.detail}`;

  const nextBtn = document.getElementById("nextQuestionBtn");
  nextBtn.textContent = state.quizIndex === deck.length - 1 ? "SEE SCORE →" : "NEXT →";
  nextBtn.classList.remove("hidden");
}

function setupQuizControls() {
  document.querySelectorAll("[data-quiz-mode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.quizMode = btn.dataset.quizMode;
      document.getElementById("quizUnitGroup").classList.toggle("hidden", state.quizMode !== "units");
      document.querySelectorAll("[data-quiz-mode]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.quizIndex = 0;
      state.quizScore = 0;
      state.quizHistory = [];
      renderQuizQuestion();
    });
  });

  document.querySelectorAll("[data-quiz-unit]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.quizUnit = btn.dataset.quizUnit;
      document.querySelectorAll("[data-quiz-unit]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.quizIndex = 0;
      state.quizScore = 0;
      state.quizHistory = [];
      renderQuizQuestion();
    });
  });

  document.getElementById("nextQuestionBtn").addEventListener("click", () => {
    const deck = getCurrentDeck();
    if (state.quizIndex < deck.length - 1) {
      state.quizIndex++;
      renderQuizQuestion();
    } else {
      showQuizResults();
    }
  });

  document.getElementById("retakeQuizBtn").addEventListener("click", () => {
    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizHistory = [];
    renderQuizQuestion();
  });
}

function showQuizResults() {
  const deck = getCurrentDeck();
  document.getElementById("quizQuestionArea").classList.add("hidden");
  document.getElementById("quizResultArea").classList.remove("hidden");

  const pct = Math.round((state.quizScore / deck.length) * 100);
  recordQuizResult(pct, state.quizScore, deck.length);
  document.getElementById("resultBadge").textContent = `${state.quizScore}/${deck.length}`;
  document.getElementById("resultHeading").textContent = `SCORE: ${pct}%`;
  document.getElementById("resultSummary").textContent =
    pct >= 80
      ? "Great job! Group 11 approves your English fluency."
      : "Nice try! Check the missed items below and practice again.";

  document.getElementById("resultReviewList").innerHTML = state.quizHistory
    .map(
      (item, idx) => `
        <div class="review-row">
          <span>${String(idx + 1).padStart(2, "0")}. ${item.target}${
            item.isCorrect ? "" : `<br><small>Your answer: ${item.chosen}</small>`
          }</span>
          <span>${item.isCorrect ? ICONS.check : ICONS.cross}</span>
        </div>
      `
    )
    .join("");

  playAnim(document.getElementById("resultBadge"), "stamp-in");
}

// ==========================================================================
// Toast
// ==========================================================================
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}


// ==========================================================================
// Accounts (Supabase magic link), synced progress, and profile dashboard
// ==========================================================================
const SUPABASE_URL = "https://pbvlcjlgxbxpxmzzcigf.supabase.co";
const SUPABASE_KEY = "sb_publishable_uV4Wc5Pe2IJdGvlxJZCwBg_4iIsLspV";
const USE_CLOUD_ACCOUNTS = false;   // local version: no Supabase, no email
const AUDIO_FILES_ENABLED = false; // local version: device voice only
const sb = window.supabase && USE_CLOUD_ACCOUNTS ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

let authUser = null;     // Supabase auth user (id, email)
let profile = null;      // row from public.profiles (name, avatar_url, created_at)
let progressCache = null; // row from public.progress, kept in memory and saved back
let saveTimer = null;

const EMPTY_PROGRESS = () => ({
  mastered: [], quizResults: [], bestByUnit: {}, practiced: [], storiesRead: [], activity: {}, notes: {},
});

const VOCAB_CATEGORIES = ["Emotion & Mind", "Nature & Atmosphere", "Character & Style", "Time & Society"];

// Read-only helper for the old on-device accounts, used only to import their progress once
const DB = {
  load(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value ?? fallback;
    } catch (e) {
      return fallback;
    }
  },
};

function currentUser() {
  if (!authUser || !profile) return null;
  return {
    id: authUser.id,
    name: profile.name,
    email: authUser.email,
    avatar: profile.avatar_url,
    createdAt: profile.created_at,
  };
}

function getProgress() {
  return progressCache || EMPTY_PROGRESS();
}

function localDateKey(d = new Date()) {
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

function updateProgress(mutator) {
  if (!authUser) return;
  const p = getProgress();
  mutator(p);
  const today = localDateKey();
  p.activity[today] = (p.activity[today] || 0) + 1;
  progressCache = p;
  scheduleProgressSave();
}

function getNote(key) {
  return getProgress().notes[key] || "";
}

function setNote(key, text) {
  updateProgress((p) => { p.notes[key] = text; });
}

function scheduleProgressSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveProgressNow, 700);
}

async function saveProgressNow() {
  if (!USE_CLOUD_ACCOUNTS) {
    if (authUser && progressCache) localStorage.setItem(`bb_${authUser.id}_progress`, JSON.stringify(progressCache));
    return;
  }
  if (!sb || !authUser || !progressCache) return;
  const { error } = await sb.from("progress").upsert({
    user_id: authUser.id,
    data: progressCache,
    updated_at: new Date().toISOString(),
  });
  if (error) showToast("SAVE FAILED. CHECK YOUR CONNECTION.");
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden" && saveTimer) {
    clearTimeout(saveTimer);
    saveProgressNow();
  }
});

function markStoryRead(id) {
  updateProgress((p) => { if (!p.storiesRead.includes(id)) p.storiesRead.push(id); });
}

function markPracticed(unitNum) {
  updateProgress((p) => { if (!p.practiced.includes(unitNum)) p.practiced.push(unitNum); });
}

function recordQuizResult(pct, score, total) {
  const unit = state.quizMode === "units" && state.quizUnit !== "all" ? state.quizUnit : null;
  const label = unit ? `UNIT ${unit}` : state.quizMode.toUpperCase();
  updateProgress((p) => {
    p.quizResults.unshift({ date: localDateKey(), label, pct, score, total });
    p.quizResults = p.quizResults.slice(0, 50);
    if (unit) p.bestByUnit[unit] = Math.max(p.bestByUnit[unit] || 0, pct);
  });
}

function currentStreak(activity) {
  const d = new Date();
  if (!activity[localDateKey(d)]) d.setDate(d.getDate() - 1);
  let streak = 0;
  while (activity[localDateKey(d)]) {
    streak++;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}

function updateLocalUser(fields) {
  const users = DB.load("bb_users", []);
  const u = users.find((x) => x.id === authUser.id);
  if (!u) return false;
  if (fields.name !== undefined) u.name = fields.name;
  if (fields.avatar_url !== undefined) u.avatar = fields.avatar_url;
  try {
    localStorage.setItem("bb_users", JSON.stringify(users));
    return true;
  } catch (e) {
    return false;
  }
}

async function saveProfileFields(fields) {
  if (!USE_CLOUD_ACCOUNTS) return updateLocalUser(fields) ? null : new Error("Could not save");
  const { error } = await sb.from("profiles").update(fields).eq("id", authUser.id);
  return error;
}

function renderNavAvatar() {
  const chip = document.getElementById("navProfileBtn");
  const user = currentUser();
  if (!chip || !user) return;
  chip.innerHTML = user.avatar
    ? `<img src="${user.avatar}" alt="" />`
    : escAttr((user.name || "?").trim().charAt(0).toUpperCase());
  chip.setAttribute("aria-label", `Open profile for ${user.name}`);
}

function setLoggedOut(message = "") {
  authUser = null;
  profile = null;
  progressCache = null;
  document.body.classList.add("logged-out");
  document.getElementById("loginError").textContent = message;
  navigateTo("login");
}

function bootLocal() {
  const id = DB.load("bb_session", null);
  const user = id ? DB.load("bb_users", []).find((u) => u.id === id) : null;
  if (!user) {
    setLoggedOut();
    return;
  }
  authUser = { id: user.id, email: user.email };
  profile = { name: user.name, avatar_url: user.avatar || null, created_at: user.createdAt };
  const saved = DB.load(`bb_${user.id}_progress`, {});
  progressCache = { ...EMPTY_PROGRESS(), ...saved, notes: { ...(saved.notes || {}) } };
  state.masteredIds = progressCache.mastered.slice();
  document.body.classList.remove("logged-out");
  renderNavAvatar();
  navigateTo("home");
}

async function bootApp() {
  if (!USE_CLOUD_ACCOUNTS) {
    bootLocal();
    return;
  }
  if (!sb) {
    setLoggedOut("Could not load the sign-in service. Check your connection and refresh.");
    return;
  }
  const { data, error } = await sb.auth.getSession();
  if (error || !data.session) {
    setLoggedOut();
    return;
  }
  authUser = data.session.user;
  await loadProfile();
  await loadProgress();
  state.masteredIds = getProgress().mastered.slice();
  document.body.classList.remove("logged-out");
  renderNavAvatar();
  navigateTo("home");
}

async function loadProfile() {
  const { data, error } = await sb.from("profiles").select("*").eq("id", authUser.id).maybeSingle();
  if (error) {
    showToast("COULD NOT LOAD PROFILE");
    profile = { name: authUser.email.split("@")[0], avatar_url: null, created_at: new Date().toISOString() };
    return;
  }
  if (data) {
    profile = data;
    return;
  }
  const meta = authUser.user_metadata || {};
  const name = meta.name || meta.full_name || meta.user_name || authUser.email.split("@")[0];
  const { data: created } = await sb
    .from("profiles")
    .insert({ id: authUser.id, name, email: authUser.email })
    .select()
    .single();
  profile = created || { name, avatar_url: null, created_at: new Date().toISOString() };
}

function progressHasData(p) {
  return p.mastered.length || p.quizResults.length || p.practiced.length
    || p.storiesRead.length || Object.keys(p.notes).length;
}

async function loadProgress() {
  const { data, error } = await sb.from("progress").select("data").eq("user_id", authUser.id).maybeSingle();
  if (error) {
    showToast("COULD NOT LOAD PROGRESS");
    progressCache = EMPTY_PROGRESS();
    return;
  }
  if (data) {
    const remote = data.data || {};
    progressCache = { ...EMPTY_PROGRESS(), ...remote, notes: { ...(remote.notes || {}) } };
    return;
  }
  progressCache = EMPTY_PROGRESS();
  importLegacyProgress();
}

// One-time import of progress saved by the earlier on-device version
function importLegacyProgress() {
  const legacyId = DB.load("bb_session", null);
  if (!legacyId) return;
  const legacy = DB.load(`bb_${legacyId}_progress`, null);
  if (!legacy) return;

  const merged = { ...EMPTY_PROGRESS(), ...legacy, notes: {} };
  const notePattern = new RegExp(`^bb_${legacyId}_([us])_(.+)$`);
  Object.keys(localStorage).forEach((key) => {
    const match = key.match(notePattern);
    if (match) merged.notes[`${match[1]}_${match[2]}`] = localStorage.getItem(key) || "";
  });

  if (!progressHasData(merged)) return;
  progressCache = merged;
  scheduleProgressSave();
  showToast("LOCAL PROGRESS IMPORTED");
}

async function handleLoginSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("loginName").value.trim();
  const email = document.getElementById("loginEmail").value.trim();
  const err = document.getElementById("loginError");
  const msg = document.getElementById("loginMessage");
  const btn = e.target.querySelector("button[type='submit']");

  if (name.length < 2) {
    err.textContent = "Please enter your name (at least 2 characters).";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    err.textContent = "Please enter a valid email address.";
    return;
  }
  if (!USE_CLOUD_ACCOUNTS) {
    const users = DB.load("bb_users", []);
    let user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (user) {
      user.name = name;
    } else {
      user = { id: `u${Date.now().toString(36)}`, name, email, avatar: null, createdAt: new Date().toISOString() };
      users.push(user);
    }
    localStorage.setItem("bb_users", JSON.stringify(users));
    localStorage.setItem("bb_session", JSON.stringify(user.id));
    location.reload();
    return;
  }
  if (!sb) {
    err.textContent = "Could not connect to the sign-in service.";
    return;
  }

  err.textContent = "";
  msg.textContent = "";
  btn.disabled = true;
  btn.textContent = "SENDING...";

  const { error } = await sb.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: window.location.origin + window.location.pathname,
      data: { name },
    },
  });

  btn.disabled = false;
  btn.textContent = "SEND SIGN-IN LINK →";

  if (error) {
    const rateLimited = /rate|too many|over_email_send/i.test(`${error.code || ""} ${error.message || ""}`);
    err.textContent = rateLimited
      ? "Too many sign-in emails were sent recently. Please wait about an hour and try again."
      : error.message;
    return;
  }
  msg.textContent = `Link sent to ${email}. Open it in this same browser to sign in.`;
}

async function signOutAndReload() {
  if (USE_CLOUD_ACCOUNTS && sb) await sb.auth.signOut();
  else localStorage.removeItem("bb_session");
  location.reload();
}

function statCard(label, value, tagClass) {
  return `
    <div class="pf-stat">
      <span class="tag-pill ${tagClass}">${label}</span>
      <div class="pf-stat-value">${value}</div>
    </div>`;
}

function renderProfile() {
  const root = document.getElementById("profileRoot");
  const user = currentUser();
  if (!root || !user) return;

  const p = getProgress();
  const masteredWords = p.mastered.filter((id) => VOCAB_DATA.some((w) => w.id === id)).length;
  const wordPct = Math.round((masteredWords / VOCAB_DATA.length) * 100);
  const avg = p.quizResults.length
    ? Math.round(p.quizResults.reduce((sum, r) => sum + r.pct, 0) / p.quizResults.length)
    : null;
  const streak = currentStreak(p.activity);
  const joined = new Date(user.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

  const unitBars = UNITS_DATA.map((u) => {
    const key = String(u.unit).padStart(2, "0");
    const pct = p.bestByUnit[key] || 0;
    const color = u.exam === "MIDTERM" ? "var(--exam-mid)" : "var(--exam-fin)";
    return `
      <div class="pf-bar-col" title="Unit ${key}: best ${pct}%">
        <span class="pf-bar-val">${pct}%</span>
        <div class="pf-bar-track"><div class="pf-bar-fill" style="height:${pct}%;background:${color}"></div></div>
        <span class="pf-bar-label">${key}</span>
      </div>`;
  }).join("");

  const categoryBars = VOCAB_CATEGORIES.map((c) => {
    const total = VOCAB_DATA.filter((w) => w.category === c).length;
    const done = p.mastered.filter((id) => VOCAB_DATA.some((w) => w.id === id && w.category === c)).length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    return `
      <div class="pf-hbar">
        <div class="pf-hbar-head"><span>${c.toUpperCase()}</span><span>${done}/${total}</span></div>
        <div class="pf-hbar-track"><div class="pf-hbar-fill bg-mint" style="width:${pct}%"></div></div>
      </div>`;
  }).join("");

  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push({
      label: d.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
      count: p.activity[localDateKey(d)] || 0,
    });
  }
  const maxCount = Math.max(1, ...days.map((d) => d.count));
  const dayBars = days.map((d) => `
      <div class="pf-bar-col">
        <span class="pf-bar-val">${d.count}</span>
        <div class="pf-bar-track"><div class="pf-bar-fill bg-lilac" style="height:${Math.round((d.count / maxCount) * 100)}%"></div></div>
        <span class="pf-bar-label">${d.label}</span>
      </div>`).join("");

  const recent = p.quizResults.slice(0, 5).map((r) => `
      <li><span>${r.date}</span><span>${r.label}</span><strong>${r.score}/${r.total} · ${r.pct}%</strong></li>`).join("")
    || `<li class="pf-empty">No quiz attempts yet. Try a quick quiz!</li>`;

  const progressBars = buildProgressBars([
    ["UNITS PRACTICED", `${p.practiced.length}/${UNITS_DATA.length}`, UNITS_DATA.length, Math.round((p.practiced.length / UNITS_DATA.length) * 100), "var(--chart-1)"],
    ["VOCABULARY MASTERED", `${masteredWords}/${VOCAB_DATA.length}`, VOCAB_DATA.length, wordPct, "var(--chart-3)"],
    ["QUIZ AVERAGE", avg === null ? "-" : `${avg}%`, 100, avg === null ? 0 : avg, "var(--chart-4)"],
  ]);
  const trendSvg = buildScoreTrend(p.quizResults);
  const modeBars = buildModeBars(p.quizResults);

  const avatar = user.avatar
    ? `<img src="${user.avatar}" alt="Your profile photo" />`
    : `<span>${escAttr((user.name || "?").trim().charAt(0).toUpperCase())}</span>`;

  root.innerHTML = `
    <div class="pf-header">
      <div class="pf-avatar">${avatar}</div>
      <div class="pf-id">
        <span class="tag-pill bg-yellow">MEMBER SINCE ${joined.toUpperCase()}</span>
        <div class="pf-name">${escAttr(user.name)}</div>
        <div class="pf-meta">${escAttr(user.email)}</div>
        <div class="pf-actions">
          <label class="brutal-btn-sm bg-yellow pf-upload-btn" for="avatarInput">UPLOAD PHOTO</label>
          <button type="button" class="brutal-btn-sm" data-action="logout">LOG OUT</button>
        </div>
        <form id="nameForm" class="pf-name-form">
          <input id="nameInput" type="text" maxlength="40" value="${escAttr(user.name)}" aria-label="Edit name" />
          <button type="submit" class="brutal-btn-sm bg-sky">SAVE NAME</button>
        </form>
      </div>
    </div>

    <div class="pf-stats">
      ${statCard("WORDS MASTERED", `${masteredWords}/${VOCAB_DATA.length}`, "bg-mint")}
      ${statCard("QUIZ AVERAGE", avg === null ? "-" : `${avg}%`, "bg-yellow")}
      ${statCard("QUIZ ATTEMPTS", p.quizResults.length, "bg-sky")}
      ${statCard("UNITS PRACTICED", `${p.practiced.length}/${UNITS_DATA.length}`, "bg-coral")}
      ${statCard("DAY STREAK", streak, "bg-peach")}
    </div>

    <div class="pf-panel">
      <div class="pf-panel-title">BEST QUIZ SCORE PER UNIT</div>
      <div class="pf-bars">${unitBars}</div>
      <div class="pf-legend"><span class="pf-legend-item"><i class="pf-swatch" style="background:var(--exam-mid)"></i>MIDTERM</span><span class="pf-legend-item"><i class="pf-swatch" style="background:var(--exam-fin)"></i>FINAL</span></div>
    </div>

    <div class="pf-grid-2">
      <div class="pf-panel">
        <div class="pf-panel-title">VOCABULARY PROGRESS</div>
        <div class="pf-donut-wrap">
          <div class="pf-donut" style="background: conic-gradient(var(--pop-mint) ${wordPct * 3.6}deg, var(--surface-alt) 0deg);">
            <div class="pf-donut-inner">${wordPct}%</div>
          </div>
          <div class="pf-hbars">${categoryBars}</div>
        </div>
      </div>

      <div class="pf-panel">
        <div class="pf-panel-title">ACTIVITY · LAST 7 DAYS</div>
        <div class="pf-bars pf-bars-small">${dayBars}</div>
      </div>
    </div>

    <div class="pf-grid-2">
      <div class="pf-panel pf-chart-lg">
        <div class="pf-panel-title">PROGRESS OVERVIEW</div>
        ${progressBars}
      </div>
      <div class="pf-panel pf-chart-lg">
        <div class="pf-panel-title">QUIZ SCORES BY TYPE</div>
        ${modeBars}
      </div>
    </div>

    <div class="pf-panel pf-chart-lg">
      <div class="pf-panel-title">SCORE TREND · LAST 10 QUIZZES</div>
      ${trendSvg}
    </div>

    <div class="pf-panel">
      <div class="pf-panel-title">RECENT QUIZ ATTEMPTS</div>
      <ul class="pf-list">${recent}</ul>
    </div>`;
}

function setupProfile() {
  document.getElementById("loginForm").addEventListener("submit", handleLoginSubmit);

  document.getElementById("avatarInput").addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!file || !authUser) return;
    if (!file.type.startsWith("image/")) {
      showToast("PLEASE CHOOSE AN IMAGE FILE");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const size = 256;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const side = Math.min(img.width, img.height);
        const sx = (img.width - side) / 2;
        const sy = (img.height - side) / 2;
        canvas.getContext("2d").drawImage(img, sx, sy, side, side, 0, 0, size, size);
        if (!USE_CLOUD_ACCOUNTS) {
          const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
          saveProfileFields({ avatar_url: dataUrl }).then((err) => {
            if (err) {
              showToast("PHOTO SAVE FAILED: STORAGE FULL?");
              return;
            }
            profile.avatar_url = dataUrl;
            renderProfile();
            renderNavAvatar();
            showToast("PHOTO SAVED");
          });
          return;
        }
        canvas.toBlob(async (blob) => {
          if (!blob) {
            showToast("COULD NOT PROCESS IMAGE");
            return;
          }
          const path = `${authUser.id}/avatar.jpg`;
          const { error: upErr } = await sb.storage
            .from("avatars")
            .upload(path, blob, { upsert: true, contentType: "image/jpeg" });
          if (upErr) {
            showToast(`UPLOAD FAILED: ${String(upErr.message || upErr).slice(0, 60).toUpperCase()}`);
            console.error("Avatar upload error:", upErr);
            return;
          }
          const { data: pub } = sb.storage.from("avatars").getPublicUrl(path);
          const url = `${pub.publicUrl}?v=${Date.now()}`;
          const error = await saveProfileFields({ avatar_url: url });
          if (error) {
            showToast("PHOTO SAVE FAILED");
            return;
          }
          profile.avatar_url = url;
          renderProfile();
          renderNavAvatar();
          showToast("PHOTO SAVED");
        }, "image/jpeg", 0.85);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });

  const root = document.getElementById("profileRoot");
  root.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    if (btn.dataset.action === "logout") signOutAndReload();
  });
  root.addEventListener("submit", async (e) => {
    if (e.target.id !== "nameForm") return;
    e.preventDefault();
    const name = document.getElementById("nameInput").value.trim();
    if (name.length < 2) {
      showToast("NAME MUST BE AT LEAST 2 CHARACTERS");
      return;
    }
    const error = await saveProfileFields({ name });
    if (error) {
      showToast("NAME SAVE FAILED");
      return;
    }
    profile.name = name;
    renderProfile();
    renderNavAvatar();
    showToast("NAME SAVED");
  });

  renderNavAvatar();
}


// ---------- Dashboard charts ----------
function buildScoreTrend(results) {
  const pts = results.slice(0, 10).reverse();
  if (pts.length === 0) {
    return `<p class="pf-empty-chart">Take a quiz to see your score trend here.</p>`;
  }
  const W = 600, H = 230, padL = 40, padR = 20, padT = 18, padB = 30;
  const innerW = W - padL - padR, innerH = H - padT - padB;
  const x = (i) => (pts.length === 1 ? padL + innerW / 2 : padL + (i * innerW) / (pts.length - 1));
  const y = (pct) => padT + innerH - (pct / 100) * innerH;
  const grid = [0, 50, 100].map((v) =>
    `<line class="pf-grid-line" x1="${padL}" x2="${W - padR}" y1="${y(v)}" y2="${y(v)}"></line>` +
    `<text class="pf-axis" x="${padL - 8}" y="${y(v) + 4}" text-anchor="end">${v}%</text>`
  ).join("");
  const line = pts.length > 1
    ? `<polyline class="pf-trend-line" points="${pts.map((r, i) => `${x(i)},${y(r.pct)}`).join(" ")}"></polyline>`
    : "";
  const dots = pts.map((r, i) =>
    `<circle class="pf-trend-dot" cx="${x(i)}" cy="${y(r.pct)}" r="7"><title>${escAttr(r.label)}: ${r.pct}%</title></circle>`
  ).join("");
  const labels = pts.map((r, i) =>
    `<text class="pf-axis" x="${x(i)}" y="${H - 8}" text-anchor="middle">${i + 1}</text>`
  ).join("");
  return `<svg class="pf-trend" viewBox="0 0 ${W} ${H}" role="img" aria-label="Quiz score trend">${grid}${line}${dots}${labels}</svg>`;
}

function buildModeBars(results) {
  const groups = [
    ["UNITS", (r) => /^UNIT/.test(r.label)],
    ["WORDS", (r) => r.label === "WORDS"],
    ["IDIOMS", (r) => r.label === "IDIOMS"],
  ];
  return groups.map(([name, test], i) => {
    const items = results.filter(test);
    const avg = items.length ? Math.round(items.reduce((sum, r) => sum + r.pct, 0) / items.length) : 0;
    return `
      <div class="pf-hbar">
        <div class="pf-hbar-head"><span>${name}</span><span>${items.length} TRIES · AVG ${avg}%</span></div>
        <div class="pf-hbar-track"><div class="pf-hbar-fill" style="width:${avg}%;background:var(--chart-${i + 1})"></div></div>
      </div>`;
  }).join("");
}

function buildProgressBars(items) {
  return items.map(([label, value, total, pct, color]) => `
      <div class="pf-hbar">
        <div class="pf-hbar-head"><span>${label}</span><span>${value}</span></div>
        <div class="pf-hbar-track"><div class="pf-hbar-fill" style="width:${pct}%;background:${color}"></div></div>
      </div>`).join("");
}


// Copy the ChatGPT prompt from the AI tutorials
function setupCopyPrompt() {
  const btn = document.getElementById("copyPromptBtn");
  if (!btn) return;
  btn.addEventListener("click", async () => {
    const text = document.getElementById("promptText").textContent;
    try {
      await navigator.clipboard.writeText(text);
      showToast("PROMPT COPIED");
    } catch (e) {
      const area = document.createElement("textarea");
      area.value = text;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
      showToast("PROMPT COPIED");
    }
  });
}
