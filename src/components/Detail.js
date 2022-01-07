import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src='https://d23.com/app/uploads/2018/05/1180w-600h_052918_bao-short-info-from-pixar-day-780x440.jpg' />
            </Background>
            <ImageTitle>
                <img src='https://preview.redd.it/sr9dv1ckdri41.png?width=480&format=png&auto=webp&s=8fdbc3ebc8e6362a4f2d84fb9f72c1595f52e186' />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src='/images/play-icon-black.png' />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src='/images/play-icon-white.png' />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GropuWatchButton>
                    <img src='/images/group-icon.png' />
                </GropuWatchButton>
            </Controls>
            <SubTitle>
                2018 7m Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                Abcdefg hi jk lm no p
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 90px);
    position: relative; 
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    margin-top: 60px;
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;

    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;

`


const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
        background: rgb(198, 198, 198);
    }

`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;

`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    min-width: 44px;
    height: 44px;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    
    span{
        font-size: 30px;
        color: white;
    }
`

const GropuWatchButton = styled(AddButton)`
background: rgba(0, 0, 0); 

`

const SubTitle = styled.div`
    color: rgba(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;

`

const Description = styled.div`
    max-width: 760px;
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);

`