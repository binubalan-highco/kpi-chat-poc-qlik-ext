import * as React from 'react';
import CKEditor from 'ckeditor4-react';

export class ChatInput extends React.Component {

    showOriginalEditor(){
        let original = document.getElementById('originalEditor');
        let dummy = document.getElementById('dummyEditor');
        let inputWrapper = document.getElementById('inputWrapper');

        original.classList.remove("hideEditor");
        original.classList.add("showEditor");

        dummy.classList.remove("showEditor");
        dummy.classList.add("hideEditor");

        inputWrapper.classList.add("fullScreen");
    }

    submitChat(){
        let original = document.getElementById('originalEditor');
        let dummy = document.getElementById('dummyEditor');
        let inputWrapper = document.getElementById('inputWrapper');

        original.classList.remove("showEditor");
        original.classList.add("hideEditor");

        dummy.classList.remove("hideEditor");
        dummy.classList.add("showEditor");

        inputWrapper.classList.remove("fullScreen");
    }

   render(){
        return (
            <div className='inputWrapper' id='inputWrapper'>
                <div id='originalEditor' className='hideEditor'>
                    <CKEditor data="<p>This is an example CKEditor 4 instance.</p>"/>
                </div>
                <div id='dummyEditor' className='showEditor'>
                    <textarea id='dummyTextArea'  placeholder='Enter Comments' onClick={this.showOriginalEditor}/>
                </div>
                <button  onClick={this.submitChat}><i className='caret right icon' /> </button>
            </div>
        )
    }
}