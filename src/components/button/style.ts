import styled from '@emotion/styled';

export const Container = styled.div<{ type: string }>`
  display: flex;
  padding: 16px 18px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  ${(props) => props.type == 'blue' && `background-color: #EBF1FF;`};
  &:hover {
    filter: brightness(0.9);
  }
`;
export const Content = styled.p<{ type: string }>`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  ${(props) => props.type == 'blue' && `color: #2962F6;`};
`;
