import React, { useState } from "react";

function QuestionForm() {
  const [formData, setFormData] = useState({
    prompt: "",
    answers: ["", "", "", ""],
    correctIndex: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Assuming the server returns the created question with an ID
        setFormData({
          prompt: "",
          answers: ["", "", "", ""],
          correctIndex: 0,
        });
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Question</h2>
      <label>
        Prompt:
        <input
          type="text"
          name="prompt"
          value={formData.prompt}
          onChange={handleChange}
        />
      </label>
      <label>
        Answer 1:
        <input
          type="text"
          name="answers[0]"
          value={formData.answers[0]}
          onChange={handleChange}
        />
      </label>
      <label>
        Answer 2:
        <input
          type="text"
          name="answers[1]"
          value={formData.answers[1]}
          onChange={handleChange}
        />
      </label>
      <label>
        Answer 3:
        <input
          type="text"
          name="answers[2]"
          value={formData.answers[2]}
          onChange={handleChange}
        />
      </label>
      <label>
        Answer 4:
        <input
          type="text"
          name="answers[3]"
          value={formData.answers[3]}
          onChange={handleChange}
        />
      </label>
      <label>
        Correct Answer:
        <select
          name="correctIndex"
          value={formData.correctIndex}
          onChange={handleChange}
        >
          {formData.answers.map((_, index) => (
            <option key={index} value={index}>
              Answer {index + 1}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default QuestionForm;
