import React, { useState, useEffect } from 'react';
import { InfoSec, InfoRow, SelectionColumn, SortingColumn, TextWrapper, Subtitle, TopLine, Heading, SortingColumn2 } from './SortingSection.elements';
import { Container2, Button } from '../../globalStyles';

const SortingSection = ({ primary, lightBg, imgStart, lightTopLine, lightText, lightTextDesc, headline,
                    description, topLine, buttonLabel}) => {

    const [columns, setColumns] = useState([]);
    useEffect(() => {
        randomize();
    }, []);

    const quickSort = array => {
        // if (array.length <= 1) return array;

        // const pivot = array[0];
        // const leftArr = []
        // const rightArr = []
        // for (let el of array.slice(1, array.length)) {
        //     el.props.lineHeight < pivot.props.lineHeight ? leftArr.push(el) : rightArr.push(el);
        // }
        // const sorted = [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
        // setColumns(sorted);
        // return sorted;
        const arr = columns.slice(0);
        setColumns(arr.sort((a, b) => a.props.lineHeight - b.props.lineHeight));
    }

    const testSortingAlgorithm = () => {
        const output1 = quickSort(columns.slice(0));
        const output2 = columns.slice(0).sort((a,b) => a.props.lineHeight - b.props.lineHeight);
        console.log(areArraysEqual(output1, output2));
    }

    const areArraysEqual = (a, b) => {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;
        console.log('check individual');
        for (let i=0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }
    const randomize = () => {
        let arr = [];
        const randomIntervals = (min, max) => ~~(Math.random() * (max - min+1)+min);
        for (let i=0; i < 100; i++) {
            arr.push(randomIntervals(5, 300));
        }
        setColumns(arr.map((i, idx) => <SortingColumn2 key={idx} lineHeight={i} /> ));
    };

    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container2>
                    <InfoRow imgStart={imgStart}>
                        <SelectionColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Button fontBig primary={primary} onClick={() => quickSort(columns)}>
                                    {buttonLabel}
                                </Button>
                                <Button fontBig primary={primary} onClick={randomize}>
                                    Randomize
                                </Button>
                            </TextWrapper>
                        </SelectionColumn>
                        <SortingColumn>
                            {columns}
                        </SortingColumn>
                    </InfoRow>
                </Container2>
            </InfoSec>
        </>
    );
};

export default SortingSection;
