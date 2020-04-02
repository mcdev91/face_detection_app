import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit}) => {
    return(
        <div className="ma4 mt0">
                <p className="discription-text bold f3 mw6 center white">
                    {'This AI magic will detect faces'}
                </p>
                <p className="discription-text f3 mw5 center white">
                    {'Paste image Url'}
                </p>
            <div className='center'>
                <div className="form center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center input-container b--white-025" type='text' onChange={onInputChange} placeholder="Paste image url"/>
                    <button   className='w-30 f4 link ph3 pv2 dib white bg-black b--white-025' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>        
    );
}

export default ImageLinkForm;