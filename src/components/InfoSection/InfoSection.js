import React from 'react';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Subtitle, TopLine, Heading, ImgWrapper, Img } from './InfoSection.elements';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';

const InfoSection = ({ primary, lightBg, imgStart, lightTopLine, lightText, lightTextDesc, headline,
                    description, topLine, buttonLabel, img, alt, start}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to='sign-up'>
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img}  alt={alt}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
};

export default InfoSection;
