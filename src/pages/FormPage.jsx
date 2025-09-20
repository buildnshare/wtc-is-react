import { useState } from 'react';
import '../styles/FormPage.css'

const addMeme = (meme) => {
    let memes = JSON.parse(localStorage.getItem('memes'));
    if (!memes) memes = localStorage.setItem('memes', JSON.stringify([meme]));

    memes.push(meme);

    localStorage.setItem(memes);
}


function FormPage() {
    const [link, setLink] = useState('');
    const [caption, setCaption] = useState('');
    const [profile, setProfile] = useState('');
    return (
        <>
            <div className='wrap'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const meme = {
                        link: link,
                        caption: caption,
                        profile: profile
                    }

                    addMeme(meme);
                }}>
                    <h3>Upload your meme</h3>
                    <label htmlFor="link">Link</label>
                    <input type="text" name="link" id="link" onChange={(e) => {
                        setLink(e.target.value)
                    }}/>
                    <label htmlFor="caption">Caption</label>
                    <input type="text" name="caption" id="caption" onChange={(e) => {
                        setCaption(e.target.value)
                    }}/>
                    <label htmlFor="profiler">Profile</label>
                    <input type="text" name="profiler" id="profiler" onChange={(e) => {
                        setProfile(e.target.value);
                    }}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default FormPage;

// npm i react-router-dom