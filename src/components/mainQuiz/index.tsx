import React from 'react';
import * as _ from './style';

interface mainQuizProps {
  type: string;
}

const MainQuiz: React.FC<mainQuizProps> = ({ type }) => {
  return (
    <_.Container>
      <_.QuizTitleDiv>
        <_.QuizBlueText>Q1.</_.QuizBlueText>
        <_.QuizBlackText>다음 원소의 이름을 쓰시오.</_.QuizBlackText>
      </_.QuizTitleDiv>
      <_.ContentArea>
        <_.ContentText>N</_.ContentText>
      </_.ContentArea>
      <_.answerInputDiv>
        <_.answerInput />
        <_.IDontKnow>모르겠어요</_.IDontKnow>
      </_.answerInputDiv>
    </_.Container>
  );
};
export default MainQuiz;
