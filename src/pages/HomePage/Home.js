import React from 'react';
// import { InfoSection, SortingSection } from '../../components';
// import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';
import { SortingSection } from '../../components';
import { homeObjFive } from './Data';
const Home = () => {
    return (
        <>
            <SortingSection {...homeObjFive}/>
            {/* <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} /> */}
        </>
    );
};

export default Home;
