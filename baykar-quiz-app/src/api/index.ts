import axios from "axios";

export const fetchQuizData = async (questions: number) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
  );
  const filteredData = response.data.slice(0, questions);

  return filteredData.map((data: any) => {
    const words = data.body.split(" ");
    const correctAnswer = words[Math.floor(Math.random() * words.length)];

    const incorrectAnswers: any[] = [];
    while (incorrectAnswers.length < 3) {
      const word = words[Math.floor(Math.random() * words.length)];
      if (!incorrectAnswers.includes(word) && word !== correctAnswer) {
        incorrectAnswers.push(word);
      }
    }

    const answers = [correctAnswer, ...incorrectAnswers].sort(
      () => Math.random() - 0.5,
    );

    return {
      ...data,
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
      answers: answers,
    };
  });
};
