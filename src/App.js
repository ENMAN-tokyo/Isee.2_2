import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { calculateResult } from './components/Calculate';
import PreQuestionnaire from './components/PreQuestionnaire';
import PreResult from './pages/PreResult';
import PreHome from './pages/PreHome';

function App() {
  const [answers, setAnswers] = useState({});  // 回答を保持
  const [finalResult, setFinalResult] = useState(null);  // 結果を保持

  const handleSubmit = (answers) => {
    const result = calculateResult(answers);
    setFinalResult(result);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<PreHome />} />
        <Route
          path="/pre-questionnaire"
          element={<PreQuestionnaire onSubmit={handleSubmit} />}
        />
        <Route path="/pre-result" element={<PreResult result={finalResult} />} />
      </Routes>
    </div>
  );
}

export default App;