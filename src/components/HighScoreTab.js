import React from "react";
import { useFetchHighScoresQuery } from "../store";
import Tabs from "./Tabs";

function HighScoreTab() {
    // Call useFetchHighScoresQuery for different difficulty levels since JSON-Server does not support nested Get or Post calls
    const { data: dataAny, isFetching: isFetchingAny, error: errorAny } = useFetchHighScoresQuery('any');
    const { data: dataEasy, isFetching: isFetchingEasy, error: errorEasy } = useFetchHighScoresQuery('easy');
    const { data: dataMedium, isFetching: isFetchingMedium, error: errorMedium } = useFetchHighScoresQuery('medium');
    const { data: dataHard, isFetching: isFetchingHard, error: errorHard } = useFetchHighScoresQuery('hard');

    const tabItems = [
        {
            label: 'any',
            content: errorAny ? 'Error loading data' : isFetchingAny ? 'Loading...' : dataAny,
        },
        {
            label: 'easy',
            content: errorEasy ? 'Error loading data' : isFetchingEasy ? 'Loading...' : dataEasy,
        },
        {
            label: 'medium',
            content: errorMedium ? 'Error loading data' : isFetchingMedium ? 'Loading...' : dataMedium,
        },
        {
            label: 'hard',
            content: errorHard ? 'Error loading data' : isFetchingHard ? 'Loading...' : dataHard,
        },
    ];

    return <Tabs items={tabItems} />;
}

export default HighScoreTab;
