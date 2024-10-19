import React, { useState } from 'react';
import { imageDb } from './firebase';
import { ref, uploadBytes } from 'firebase/storage'; 
import './Article.css';

const Info = () => {
    const [title, setTitle] = useState('');
    const [abstract, setAbstract] = useState('');
    const [articleText, setArticleText] = useState('');
    const [tags, setTags] = useState('');
    const [img, setImg] = useState(null);
    const [imgName, setImgName] = useState('');

    const handlePostClick = () => {
        setTitle('');
        setAbstract('');
        setArticleText('');
        setTags('');
        setImg(null);
        setImgName('');
    };

    const handleClick = async () => {
        if (!img) return;

        const imgRef = ref(imageDb, `uploads/${imgName}`);
        
        try {
            await uploadBytes(imgRef, img);
            alert('Image uploaded successfully!');
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImg(file);
            setImgName(file.name);
        }
    };

    return (
        <div className='Section'>
            <h2>What do you want to ask or share</h2>

            <label className='A1'>Title</label>
            <input 
                className='AF1' 
                type="text" 
                placeholder="Start your question with how, what, why, etc." 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />

            <label className='A1'>Abstract</label>
            <textarea 
                placeholder='Enter a 1-paragraph Abstract' 
                value={abstract} 
                onChange={(e) => setAbstract(e.target.value)} 
            />

            <div className='App'>
                <label className='A1'>Add an image: </label>
                <input className='AF1' type='file' onChange={handleFileChange} />
                <button onClick={handleClick}>Upload</button>
            </div>

            <h3 className='abstractclass'>Article Text:</h3>
            <textarea 
                placeholder='Describe the problem that you are facing' 
                value={articleText} 
                onChange={(e) => setArticleText(e.target.value)} 
            />

            <label>Tags</label>
            <input 
                className='AF2' 
                type='text' 
                placeholder='please add up to three tags to describe what your article is about e.g., Java' 
                value={tags} 
                onChange={(e) => setTags(e.target.value)} 
            />

            <button className="post" onClick={handlePostClick}>Post</button>
        </div>
    );
};

export default Info;
