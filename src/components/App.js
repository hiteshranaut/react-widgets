import React from 'react';
// import Accordion from './Accordion';
import Search from './Search';

const items = [
    {
        title: "What is react?" ,
        content: "react is frontend js framework"
    } ,
    {
        title: "why use react?" ,
        content: "react is a favorite ls lib "
    } ,
    {
        title: "How do you use react" ,
        content: "we use react using components"
    }
]

const App = () => {
    return (
        <div>
            <Search />
        </div>
    );
}

export default App;