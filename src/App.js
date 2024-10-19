import React, { useState } from 'react';
import './App.css';
import Menu from './Menu';
import Answer from './Answer';
import FormPart from './Question';
import Info from './Article';
import FindQuestionPage from './FindQuestionPage';

function App() {
    const [selectedPostType, setSelectedPostType] = useState('question');

    const handlePostTypeChange = (type) => {
        console.log("Post type changed to:", type); 
        setSelectedPostType(type);
    };

    console.log("Currently selected post type:", selectedPostType); 

    return (
        <div className="App">
            <Menu />
            <Answer onSelect={handlePostTypeChange} />
            
            {selectedPostType === 'question' && <FormPart />}
            {selectedPostType === 'article' && <Info />}
            {selectedPostType === 'FindQuestion' && <FindQuestionPage />}
        </div>
    );
}

export default App;