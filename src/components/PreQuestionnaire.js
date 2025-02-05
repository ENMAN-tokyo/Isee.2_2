import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Questionnaire.css";
import ProgressBar from "./ProgressBar";

const PreQuestionnaire = ({ onSubmit }) => {
  const [answers, setAnswers] = useState({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
  });

  const [questionIndex, setQuestionIndex] = useState(0);  // 現在の質問のインデックス
  const questions = [
    "あなたや家族は欲深いですか？",
    "家族は裕福ですか？",
    "家族の財産は平等に分けるべきだと思いますか？",
    "しばらく連絡をとっていない家族はいますか？",
    "将来、家族がもめる確率は何％くらいだと思いますか？"
  ];

  const navigate = useNavigate();

  const handleChange = (question, answer) => {
    setAnswers((prev) => {
      const updatedAnswers = { ...prev, [question]: answer };
      console.log("更新後の回答:", updatedAnswers); 
      return updatedAnswers;
    });
    
    // 次の質問へ進む
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // 最後の質問の後は結果画面へ遷移
      setTimeout(() => handleSubmit(), 0);  // 状態更新を待ってから handleSubmit を実行
    }
  };

  const handleSubmit = () => {
    setAnswers((prevAnswers) => {
      console.log("最終的に送信する回答:", prevAnswers);  // 最終チェック用ログ
      onSubmit(prevAnswers);
      return prevAnswers;
    });
  
    navigate('/pre-result');
  };

  return (
    <div className="questionnaire-container">
      {/* 進捗バー */}
      <ProgressBar progress={(questionIndex / questions.length) * 100} />

      {/* 「前に戻る」ボタン */}
      {questionIndex > 0 && (
        <button
          className="back-button"
          onClick={() => setQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0))}
        >
          ← 前に戻る
        </button>
      )}

      {/* 質問表示 */}
      <div>
        <p className="question-text">{questionIndex + 1}. {questions[questionIndex]}</p>

        {questionIndex < 4 ? (
          <div className="option-buttons">
            <button className="option-button" onClick={() => handleChange(`question${questionIndex + 1}`, 'yes')}>はい</button>
            <button className="option-button" onClick={() => handleChange(`question${questionIndex + 1}`, 'no')}>いいえ</button>
          </div>
        ) : (
          <div className="option-buttons">
            <button className="option-button" onClick={() => handleChange('question5', '0-30')}>0～30%</button>
            <button className="option-button" onClick={() => handleChange('question5', '31-60')}>31～60%</button>
            <button className="option-button" onClick={() => handleChange('question5', '61-80')}>61～80%</button>
            <button className="option-button" onClick={() => handleChange('question5', '81-100')}>81～100%</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreQuestionnaire;
