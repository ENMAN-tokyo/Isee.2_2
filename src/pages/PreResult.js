import React from 'react';
import "./PreResult.css";
import LINE from "../image/LINE.png"

const PreResult = ({ result }) => {
  // result オブジェクトから percentage と message を取り出す
  const { percentage, message } = result;

  return (
    <div className="result-container">
      {/* 結果 */}
      <h1 className="result-title">診断結果</h1>
      <p className="result-text">
        家族がもめる確率は <span className="highlight">{percentage}%</span> です。
      </p>
      
      {/* メッセージ部分 */}
      <div className="result-text">
        {message.map((line, index) => (
          <p key={index}>{line}</p> // それぞれの行を個別の <p> タグで表示
        ))}
      </div>

      <p className="sub-highlight">
        あなたに関連のある相続の問題と対策を知りたい方は、QRコードでLINEの友だちを追加してください。
      </p>
      <br />
      <img src={LINE} alt="LINE QRコード" className="line-qr-code" />
      <br />
      
      <p className="LINE-text">
        LINEアプリの友だちタブを開き、画面右上にある友だち追加ボタン＞[QRコード]をタップして、コードリーダーでスキャンしてください。
      </p>      
      <a
        href="https://www.line.me/ja/"
        target="_blank"
        rel="noopener noreferrer"
        className="result-text"
      >
        <b className="LINE-link">LINEについて</b>
      </a>
    </div>
  );
};

export default PreResult;