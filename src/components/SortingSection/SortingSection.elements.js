import styled from 'styled-components';

export const InfoSec = styled.div`
    color: #fff;
    padding: 160px 0;
    background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};
`;

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
`;

export const SelectionColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 20%;
    /* flex-basis: 10%; */

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const SortingColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    max-width: 80%;
    flex: 1;
    color: black;
    @media screen and (max-width: 768px) {
        max-width: 100%;
    }
`;

export const Sticks = styled.div.attrs(props => ({
    style: {
        height: `${props.lineHeight}px`,
    },
}))`
    background-color: green;
    width: 2px;
    margin: 0 2px;
    display: inline-block;
`;

export const  TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`;

export const TopLine = styled.div`
    color: ${({lightTopLine}) => (lightTopLine ? '#A9B3C1' : '#4B59F7')};
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 30px;
    line-height: 1.1;
    color: ${({lightText}) => (lightText ? '#F7F8FA' : '#1C2237')};
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({lightTextDesc}) => (lightTextDesc ? '#A9B3C1' : '#1C2237')};

`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end' )};
`;

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`;

export const SliderContainer = styled.div`
    width: 100%;
    margin: 10px;
`;

export const Slider = styled.input`
    width: 100%;
    background: linear-gradient(90deg, rgb(117, 252, 117) 60%, rgb(214, 214, 214) 60%);
    outline: none;
    opacity: 0.7;
    transition: opacity 0.3s;
    border-radius: 12px;
    color: black;
    box-shadow: 0px 1px 10px 1px black;

    &:hover {
        opacity: 1;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 50%;
        cursor: pointer;
    }
`;

export const SliderValue = styled.p`
    margin: 10px;
    opacity: 0.7;
    color: black;

`;