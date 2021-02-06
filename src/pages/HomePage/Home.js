import React from 'react';
// import { InfoSection, SortingSection } from '../../components';
import { SortingSection } from '../../components';
// import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';
import { homeObjFive } from './Data';
const Home = () => {
    return (
        <>
            {/* <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} /> */}
            <SortingSection {...homeObjFive}/>
        </>
    );
};

export default Home;
