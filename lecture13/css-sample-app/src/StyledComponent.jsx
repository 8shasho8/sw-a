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
`;

const StyledComponent = () => {
  return (
    <SContainer>
      <STitle>styled-componentsを適用したコンポーネントです</STitle>
      <SButton>Styledボタン</SButton>
    </SContainer>
  )
}

export default StyledComponent
