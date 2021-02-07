import React, { useState, useEffect } from 'react';
import { InfoSec, InfoRow, SelectionColumn, SortingColumn, TextWrapper, Subtitle, TopLine, Heading, SortingColumn2 } from './SortingSection.elements';
import { Container2, Button } from '../../globalStyles';

const SortingSection = ({ primary, lightBg, imgStart, lightTopLine, lightText, lightTextDesc, headline,
                    description, topLine, buttonLabel}) => {

    const [columns, setColumns] = useState([]);
    useEffect(() => {
        randomize();
    }, []);

    // const quickSort = async array => {
    //     if (array.length <= 1) return array;
    //     const pivot = array[0];
    //     const leftArr = [];
    //     const rightArr = [];
    //     for (let el of array.slice(1, array.length)) {
    //         el.props.lineHeight < pivot.props.lineHeight ? leftArr.push(el) : rightArr.push(el);
    //     }
    //     const sorted = [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    //     await sleep(50);
    //     setColumns(sorted);
    //     return sorted;
    // }

    const quickSortWithAnimations = async () => {
        const animations = await quickSort(columns.slice(0), 0, columns.length-1);
        animations.forEach((ani, idx) => {
            setTimeout(() => {
                setColumns(ani.animation);
            }, (idx+1) * 15);
        });
    }
    const quickSort = async (arr, start, end, animation=[]) => {
        if (start < end) {
            let pi = partition(arr, start, end, animation);
            await quickSort(arr, start, pi - 1, animation);
            await quickSort(arr, pi + 1, end, animation);
        }
        return animation;
    }

    const partition = (arr, start, end, animation) => {
        let pivotIdx   = start;
        const pivotVal = arr[end].props.lineHeight;
        for (let i=start; i < end; i++) {
            if (arr[i].props.lineHeight < pivotVal) {
                [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
                pivotIdx++;
                const objToAnimate = {
                    animation: arr.slice(0),
                    swap: [i, pivotIdx-1]
                };
                animation.push(objToAnimate);
            }
        }
        [arr[pivotIdx], arr[end]] = [arr[end], arr[pivotIdx]];
        const objToAnimate = {
            animation: arr.slice(0),
            swap: [pivotIdx, end]
        };
        animation.push(objToAnimate);
        return pivotIdx;
    };

    const randomize = () => {
        let arr = [];
        const randomIntervals = (min, max) => ~~(Math.random() * (max - min+1)+min);
        for (let i=0; i < 150; i++) {
            arr.push(randomIntervals(5, 300));
        }
        setColumns(arr.map((i, idx) => <SortingColumn2 key={idx} lineHeight={i} /> ));
    };

    const justSort = () => {
        const arr = columns.slice(0).sort((a,b) => a.props.lineHeight - b.props.lineHeight);
        setColumns(arr);
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
                                <Button fontBig primary={primary} onClick={quickSortWithAnimations}>
                                    {buttonLabel}
                                </Button>
                                <Button fontBig primary={primary} onClick={justSort}>
                                    Just Sort
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
