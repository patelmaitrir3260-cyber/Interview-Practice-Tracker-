import { createContext, useEffect, useState } from "react";

export const Appcontext = createContext();

export const AppProvider = ({ children }) => {

  const initialQuestions = [
    {
      id: 1,
      question: "What is Two Sum?",
      category: "DSA",
      difficulty: "Easy",
      status: "Completed",
    },
    {
      id: 2,
      question: "What is Git rebase?",
      category: "Git",
      difficulty: "Medium",
      status: "Pending",
    },
    {
      id: 3,
      question: "What is closure in JavaScript?",
      category: "Technical",
      difficulty: "Medium",
      status: "In Progress",
    },
  ];

  const [questions, setQuestions] = useState(
    JSON.parse((localStorage.getItem("questions")) )|| initialQuestions);
    const [queNumber, setQueNumber] = useState(null)
    console.log(queNumber);
   
   

  const addQuestion = (question) => {

 
    setQuestions([...questions, question]);

  };
const updateQuestionStatus = (id, status) => {
  const updatedQuestions = questions.map((val) => {
    if (val.id === id) {
      return {
        ...val,
        status: status
      };
    }

    return val;
  });

  setQuestions(updatedQuestions);
};

  const deleteQuestion = (id) => {
    setQuestions((currentQuestions) =>
      currentQuestions.filter((question) => question.id !== id)
    );
  };

  useEffect(() => {
    localStorage.setItem(
      "questions",
      JSON.stringify(questions)
    );
  }, [questions]);
  console.log(questions);
  

  return (
    <Appcontext.Provider value={{ questions, addQuestion, setQueNumber, queNumber, updateQuestionStatus,deleteQuestion }}>
      {children}
    </Appcontext.Provider>
  );
};