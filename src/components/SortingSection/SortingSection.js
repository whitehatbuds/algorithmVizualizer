import React, { useState, useEffect } from 'react';
import { InfoSec, InfoRow, SelectionColumn, SortingColumn, TextWrapper, Subtitle, TopLine, Heading, Sticks } from './SortingSection.elements';
import { Container, Button } from '../../globalStyles';
import { quickSort } from './SortingAlgorithms';

const SortingSection = ({ primary, lightBg, imgStart, lightTopLine, lightText, lightTextDesc, headline,
                    description, topLine}) => {

    const [cols, setCols] = useState([]);
    useEffect(() => {
        randomize();
    }, []);

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

    const randomize = (n = 150) => {
        const randomIntervals = (min, max) => ~~(Math.random() * (max - min+1) + min);
        const arr = Array(n).fill();
        setCols(arr.map((_, i) => <Sticks key={i} lineHeight={randomIntervals(5,300)}/> ));
    };

    const justSort = () => {
        const arr = [...cols].sort((a,b) => a.props.lineHeight - b.props.lineHeight);
        setCols(arr);
    };

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
                                <Button fontBig primary={primary} onClick={() => sortWithAnimation('QuickSort')}>
                                QuickSort
                                </Button>
                                <Button fontBig primary={primary} onClick={justSort}>
                                    Just Sort
                                </Button>
                                <Button fontBig primary={primary} onClick={() => randomize()}>
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
