export const calculateResult = (answers) => {
  const { question1, question2, question3, question4, question5 } = answers;

  let basePercentage = 50; // 基本の％

  // 質問①～④に基づいた％調整
  if (question1 === 'yes') basePercentage += 0;
  if (question2 === 'yes') basePercentage += 0;
  if (question3 === 'yes') basePercentage += 10;
  if (question4 === 'yes') basePercentage += 10;

  console.log("質問1～4の計算後の basePercentage:", basePercentage); // デバッグ用出力

  // 質問⑤の範囲を取得
  const [minPercentage, maxPercentage] = mapPercentageToValue(question5);
  console.log("質問5の minPercentage:", minPercentage, "maxPercentage:", maxPercentage); // デバッグ用出力

  // 最小値と比較して大きい方を採用
  const finalPercentage = Math.max(basePercentage, minPercentage);
  console.log("計算後の finalPercentage:", finalPercentage); // デバッグ用出力

  // 表示用の範囲を決定
  let displayPercentage = finalPercentage >= minPercentage && finalPercentage < maxPercentage
  ? `${finalPercentage}～${maxPercentage}`
  : `${finalPercentage}`;
  console.log("表示する displayPercentage:", displayPercentage); // デバッグ用出力

  // 結果メッセージの作成（配列として格納）
  let message = [
    "欲深さがなければもめないと思っている人は多いですが、お金や感情が複雑に絡む相続の場面では、欲深さに関係なくもめることがほとんどです。",
    "ドラマでは裕福な家庭が相続争いを繰り広げていますが、現実では財産が少ない家庭ほどドロドロした相続争いが発生することが多いです。"
  ];

  if (question3 === 'yes') {
    message.push(
      "財産はきれいに分割できないことも多いため、平等に分けたいという思いが強いほどもめ事に発展しやすいです。"
    );
  }

  return {
    percentage: displayPercentage,
    message, 
  };
};

// 質問⑤に基づく％を数値にマッピング
const mapPercentageToValue = (value) => {
  console.log("mapPercentageToValue に渡された value:", value); 

  switch (value) {
    case '0-30': return [50, 60];
    case '31-60': return [70, 80];
    case '61-80': return [90, 99];
    case '81-100': return [90, 99];
    default:
      console.warn("未定義の値が渡されました:", value);
      return [50, 50];
  }
};
