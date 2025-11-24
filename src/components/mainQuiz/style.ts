import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 648px;
  height: auto;
  padding: 40px 48px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;
export const QuizTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const QuizBlueText = styled.h3`
  color: #2962f6;
  margin: 0;
`;
export const QuizBlackText = styled.h3`
  color: #1a202c;
  margin: 0;
`;
export const ContentArea = styled.div`
  display: flex;
  height: 194px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: 10px;
  border: 1px solid #717d96;
  background: #f0f1f7;
`;
export const ContentText = styled.h1`
  color: #1a202c;
  text-align: center;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const answerInputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
`;
export const answerInput = styled.input`
  display: flex;
  padding: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #a0abc0;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  :focus {
    border: #2962f6;
  }
`;
export const IDontKnow = styled.button`
  background: none;
  color: #2962f6;
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  text-decoration-line: underline;

  outline: none;
  border: none;

  :hover {
    outline: none;
    border: none;
    filter: brightness(0.8);
  }
  :focus {
    outline: none;
    border: none;
  }
`;
