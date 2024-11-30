import { CheckCircle, Clock, MessageSquare, XCircle } from "lucide-react";

export interface SingleDM {
  id: number;
  customerName: string;
  service: string;
  question: string;
  answer: string | null;
  timestamp: string;
  status: string;
}

export const fake_dms: SingleDM[] = [
  {
    id: 1,
    customerName: "Sarah Wilson",
    service: "Career Growth Priority DM",
    question: "I'm currently in finance but want to transition to tech?",
    answer: null,
    timestamp: "2024-02-15 10:30 AM",
    status: "pending",
  },
  {
    id: 2,
    customerName: "John Doe",
    service: "Tech Career DM",
    question: "What programming language should I learn first?",
    answer: "Start with Python as it's beginner-friendly.",
    timestamp: "2024-02-14 11:30 AM",
    status: "answered",
  },
  {
    id: 3,
    customerName: "Emily Clark",
    service: "Web Development DM",
    question: "How do I start learning web development?",
    answer: "Begin with HTML, CSS, and JavaScript.",
    timestamp: "2024-02-13 09:00 AM",
    status: "answered",
  },
  {
    id: 4,
    customerName: "Michael Brown",
    service: "Data Science DM",
    question: "What tools should I use for data analysis?",
    answer: "Consider using Python with libraries like Pandas and NumPy.",
    timestamp: "2024-02-12 02:15 PM",
    status: "answered",
  },
  {
    id: 5,
    customerName: "Jessica Taylor",
    service: "Career Advice DM",
    question: "What should I include in my resume?",
    answer: null,
    timestamp: "2024-02-11 04:45 PM",
    status: "pending",
  },
  {
    id: 6,
    customerName: "David Smith",
    service: "Software Engineering DM",
    question: "How can I improve my coding skills?",
    answer: "Practice regularly and work on personal projects.",
    timestamp: "2024-02-10 01:30 PM",
    status: "answered",
  },
  {
    id: 7,
    customerName: "Laura Johnson",
    service: "Mobile Development DM",
    question: "What is the best framework for mobile app development?",
    answer: "React Native is a popular choice for cross-platform apps.",
    timestamp: "2024-02-09 03:00 PM",
    status: "answered",
  },
  {
    id: 8,
    customerName: "Chris Lee",
    service: "Cloud Computing DM",
    question: "How do I get started with AWS?",
    answer: "Start with the AWS free tier and explore their documentation.",
    timestamp: "2024-02-08 10:00 AM",
    status: "answered",
  },
  {
    id: 9,
    customerName: "Anna White",
    service: "Cybersecurity DM",
    question: "What are the basics of cybersecurity I should know?",
    answer: null,
    timestamp: "2024-02-07 05:30 PM",
    status: "pending",
  },
  {
    id: 10,
    customerName: "Tom Harris",
    service: "Game Development DM",
    question: "What game engine should I use for beginners?",
    answer: "Unity is a great option for beginners in game development.",
    timestamp: "2024-02-06 12:00 PM",
    status: "answered",
  },
];

export const dm_stats = [
  {
    label: "All DMs",
    value: fake_dms.length,
    icon: MessageSquare,
    color: "bg-blue-50",
    filter: "all",
  },
  {
    label: "Pending",
    value: fake_dms.filter((dm) => dm.status === "pending").length,
    icon: Clock,
    color: "bg-yellow-50",
    filter: "pending",
  },
  {
    label: "Answered",
    value: fake_dms.filter((dm) => dm.status === "answered").length,
    icon: CheckCircle,
    color: "bg-green-50",
    filter: "answered",
  },
  {
    label: "Expired",
    value: fake_dms.filter((dm) => dm.status === "expired").length,
    icon: XCircle,
    color: "bg-red-50",
    filter: "expired",
  },
];
