export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const quizQuestions: Question[] = [
  {
    questionText: "The name for information sent from robot sensors to their controllers is called?",
    image:
      "https://media.proprofs.com/images/QM/user_images/2169923/1512072304.jpeg",
    answers: [
      "Pressure",
      "Feedback",
      "Signal",
      "Output",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Which of the following is NOT a type or application of robot?",
    image: "https://media.proprofs.com/images/QM/user_images/2169923/1512072435.jpeg",
    answers: ["Military", "Medical", "Domestic", "None of the above"],
    correctAnswerIndex: 3,
  },
  {
    questionText: "The name for the space inside which a robot unit operates is called?",
    image:
      "https://media.proprofs.com/images/QM/user_images/2169923/1512072549.jpeg",
    answers: ["Spatial base", "Work envelop", "Exclusion zone", "All of the above"],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "Industrial Robots are generally designed to carry which of the following coordinate systems?",
    answers: ["Cartesian co-ordinate system", "Polar co-ordinate system", "Cylindrical co-ordinate system", "All of the above"],
    correctAnswerIndex: 3,
  },
  {
    questionText: "Which of the following refers to the rotational movement of a robot's arm?",
    answers: ["Yaw", "Retrograde", "Swivel", "None of the above"],
    correctAnswerIndex: 2,
  },
];

export default quizQuestions;
