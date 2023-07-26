import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionList from "./QuestionList";
import QuestionForm from "./QuestionForm";

function App() {
  const [page, setPage] = useState("List");

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <h1>Quiz App - Quizmasters View</h1>
      <AdminNavBar onChangePage={handleChangePage} />
      {page === "List" && <QuestionList />}
      {page === "Form" && <QuestionForm />}
    </div>
  );
}

export default App;
