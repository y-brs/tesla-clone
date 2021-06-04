import React from 'react';
import styled from 'styled-components';

function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{ title }</h1>
        { description &&
          <h2>{ description }</h2>
        }
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>
            { leftBtnText }
          </LeftButton>
          { rightBtnText &&
            <RightButton>
              { rightBtnText }
            </RightButton>
          }
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  )
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('./images/model-s.jpg') center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("/images/${ props.bgImage }")` }
`

const ItemText = styled.h1`
  padding-top: 16vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  width: 256px;
  height: 40px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.80;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 10px;
`

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`

const DownArrow = styled.img`
  height: 23px;
  margin: 10px 0 50px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
  text-align: center;
`