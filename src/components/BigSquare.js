import React from 'react'
import styled from 'styled-components'
import equi from './equi.jpg'
import eth from './icon-ethereum.png'
import clock from "./icon-clock.png"
import avatar from './image-avatar.png'
import eye from './icon-view.png'
const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #0D192C;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`
const SmallSquare = styled.div`
    width:350px;
    height: 596px;
    background-color: #15263F;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    border-radius: 15px;
    @media only screen and (max-width:390px){

        width: 80%;
        

}
`
const Picture = styled.div`
    top: 24px;
    border-radius: 20px;
    height: 302px;
    width: 302px;
    display: flex;
    justify-content: center;
    &:hover{
        background-color: #00FFF8;
        background-image: url(${eye});
        background-position: center;
        background-repeat: no-repeat;
    }

`
const Image = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${equi});
    background-size: cover;
    border-radius: 20px;
    cursor: pointer;
    &:hover{
        opacity: 0.5;
    }
    transition: all 300ms ease;

 
`
const Topic = styled.div`
    width: 100%;
    width: 302px;
    cursor: pointer;
   
`
const TopicP = styled.h1`
    text-align: left;
    font-size: 26px;
    color: white;
    &:hover{
        color: #00FFF8;
    }
    transition: all 300ms ease;
`

const Description = styled.div`
    width: 302px;
    text-align: left;


`
const DescriptionP = styled.p`
    color:#8BACD9;
    font-size: 18px;



`
const BottomDiv = styled.div`
    width: 302px;
    height: 20px;
    display: flex;
    margin-top: 12px;
`
const Left = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex:1;
`


const LeftImgDiv = styled.div`
    height: 100%;
    width: 100%;
    flex: 1;
    background-image: url(${eth});
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    
`

const LeftTxt = styled.p`
    flex:6;
    font-size: 16px;
    color: #00FFF8;
    margin-left: 5px;
    text-align: left;
`
const Right = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
`
const RightIcon = styled.div`
    height: 100%;
    width: 100%;
    flex: 1;
    background-image: url(${clock});
    background-position:right;
    background-repeat: no-repeat;
    
    
`
const RightTxt = styled.p`
    flex: 1;
    color:#8BACD9;
    font-size: 16px;
    text-align: right;
    margin-left: 5px;
`
const BottomLine = styled.div`
    width: 100%;
    background-color: #2E405A;
    height: 1px;
    margin-top: 24px;
`
const VeryBottom = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 24px;
    width: 100%;
    height: 50px;
`
const VLeft = styled.div`
    height: 100%;
    width: 100%;
    flex: 1;
    background-image: url(${avatar});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

`
const VRight = styled.div`
    height: 100%;
    width: 100%;
    flex: 6;
    display: flex;
    gap:5px;
    padding-left: 10px;
` 
const LeftText = styled.p`
    color:#8BACD9;
    font-size: 16px;
`
const RightText = styled.p`
    color:white;
    font-size: 16px;
    cursor: pointer;
    &:hover{
        color: #00FFF8;
    }
    transition: all 300ms ease;
`
const BigSquare = () => {
  return (
    <Container>
        <SmallSquare>
         <Picture>
            <Image/>
         </Picture>
         <Topic><TopicP>Equilibrium#3429</TopicP></Topic>
         <Description>
            <DescriptionP>Our Equilibrium Collection promoter balance and calm.</DescriptionP>
            </Description>

        <BottomDiv>
            <Left>
                <LeftImgDiv></LeftImgDiv>
                <LeftTxt>0.041ETH</LeftTxt>
            </Left>
            <Right>
                <RightIcon/>
                <RightTxt>3 days left</RightTxt>
            </Right>
        </BottomDiv>
        <BottomLine/>
        <VeryBottom>
            <VLeft></VLeft>
            <VRight><LeftText>Creation of</LeftText><RightText>Jules Wyvern</RightText></VRight>
        </VeryBottom>
        </SmallSquare>
        
    </Container>
    
  )
}

export default BigSquare