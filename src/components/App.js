import React , {useState} from 'react';
import Accordion from './Accordion';
import Search from './Search';
import DropDown from './DropDown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

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

const options = [
    {
        label: 'the color red' ,
        value: 'red'
    } ,
    {
        label: 'the color green' ,
        value: 'green'
    } ,
    {
        label: 'shade of gray' ,
        value: 'gray'
    }
];



const App = () => {
   

    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            <Header />
            <Route path="/" >
                <Accordion items={items} />
            </Route>
            <Route path="/list" >
                <Search />
            </Route>
            <Route path="/dropdown" >
            <DropDown
                label="Select a Color"
                onSelectedChange={setSelected}  
                selected={selected} 
                options={options} />
            </Route>
            <Route path="/translate" >
                <Translate />
            </Route>
        </div>
    );
}

export default  App;