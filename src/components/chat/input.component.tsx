import * as React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';

export class ChatInput extends React.Component {
    render() {
        return (
            <div className='inputWrapper'>
                <CKEditor
                    editor={ BalloonEditor }
                    data=""
                />



                <button><i className='rocket big icon'/> </button>
            </div>
        )
    }
}
