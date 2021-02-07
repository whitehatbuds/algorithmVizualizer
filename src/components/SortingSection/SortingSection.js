import React, { useState, useEffect } from 'react';
import { InfoSec, InfoRow, SelectionColumn, SortingColumn, TextWrapper, Subtitle, TopLine, Heading, Sticks, SliderContainer, Slider, SliderValue } from './SortingSection.elements';
import { Container, Button } from '../../globalStyles';
import { quickSort } from './SortingAlgorithms';

const SortingSection = ({ primary, lightBg, imgStart, lightTopLine, lightText, lightTextDesc, headline,
                    description, topLine}) => {

    const [cols, setCols] = useState([]);
    const [noOfSticks, setNoOfSticks] = useState(1);

    useEffect(() => {
        randomize(noOfSticks);
    }, [noOfSticks]);

    const sortWithAnimation = async (sortType) => {
        let animations;
        switch (sortType) {
            case 'QuickSort':
                animations = await quickSort([...cols], 0, cols.length-1);
                break;
            default:
                animations = [];
        }
        if (animations.length) {
            animations.forEach((ani, i) => {
                setTimeout(() => {
                    setCols(ani.animation);
                }, i*10);
            });
        }

    };

    const randomize = n => {
        const randomIntervals = (min, max) => ~~(Math.random() * (max - min+1) + min);
        const arr = Array(parseInt(n, 10)).fill();
        setCols(arr.map((_, i) => <Sticks key={i} lineHeight={randomIntervals(5,300)}/> ));
    };

    const justSort = () => {
        const arr = [...cols].sort((a,b) => a.props.lineHeight - b.props.lineHeight);
        setCols(arr);
    };

    const updateValue = e => setNoOfSticks(e.target.value);
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <SelectionColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <SliderContainer>
                                    <Slider type="range" min="1" max="150" value={noOfSticks} onChange={updateValue}/>
                                    <SliderValue>Value: {noOfSticks}</SliderValue>
                                </SliderContainer>
                                <Button fontBig primary={primary} onClick={() => sortWithAnimation('QuickSort')}>
                                QuickSort
                                </Button>
                                <Button fontBig primary={primary} onClick={justSort}>
                                    Just Sort
                                </Button>
                                <Button fontBig primary={primary} onClick={() => randomize(noOfSticks)}>
                                    Randomize
                                </Button>
                            </TextWrapper>
                        </SelectionColumn>
                        <SortingColumn>
                            {cols}
                        </SortingColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
};

export default SortingSection;
