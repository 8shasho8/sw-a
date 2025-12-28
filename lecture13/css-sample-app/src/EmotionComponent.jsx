/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from 'styled-components'

const SContainer = styled.div`
  background: aqua;
  padding: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  color: blue;
  font-size: 20px;
  margin: 0;
`;

const SButton = styled.button`
  background: white;
  color: black;
  border-radius: 10px;
  padding: 10px;
  font-weight: 600;
  border: 2px solid #00000033;
  &:hover {
    background: black;
    color: white;
  }
`;

const EmotionComponent = () => {
  const containerStyle = css`
    background: aqua;
    padding: 16px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const titleStyle = css({ color: 'blue', fontSize: 20 });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotion componentを適用したコンポーネントです</p>
      <SButton>Styledボタン</SButton>
    </div>
  )
}

export default EmotionComponent
