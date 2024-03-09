"use client";
import { useState, useEffect } from 'react'

import Screen1 from './_components/Screen1';
import Screen2 from './_components/Screen2';
import Screen3 from './_components/Screen3';
import Screen4 from './_components/Screen4';
import Screen5 from './_components/Screen5';
import Screen6 from './_components/Screen6';
import Screen7 from './_components/Screen7';
const StateManagementandLogic = () => {
    const [visibleComponent, setVisibleComponent] = useState('A');
    return (
        <>
            {visibleComponent === 'A' && <Screen1 setVisibleComponent={setVisibleComponent} />}
            {visibleComponent === 'B' && <Screen2 setVisibleComponent={setVisibleComponent} />}
            {visibleComponent === 'C' && <Screen3 setVisibleComponent={setVisibleComponent} />}
            {visibleComponent === 'D' && <Screen4 setVisibleComponent={setVisibleComponent} />}
            {visibleComponent === 'E' && <Screen5 setVisibleComponent={setVisibleComponent} />}
            {visibleComponent === 'F' && <Screen6 setVisibleComponent={setVisibleComponent} />}
            {visibleComponent === 'G' && <Screen7 setVisibleComponent={setVisibleComponent} />}
        </>
    )
}

export default StateManagementandLogic