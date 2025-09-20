import '../styles/FormPage.css'

function FormPage() {
    return (
        <>
            <div className='wrap'>
                <form>
                    <h3>Upload your meme</h3>
                    <label htmlFor="link">Link</label>
                    <input type="text" name="link" id="link"/>
                    <label htmlFor="caption">Caption</label>
                    <input type="text" name="caption" id="caption" />
                    <label htmlFor="profiler">Profile</label>
                    <input type="text" name="profiler" id="profiler" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default FormPage;

// npm i react-router-dom