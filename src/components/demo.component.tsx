import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button, Modal} from "semantic-ui-react";

export class DemoComponent extends React.Component {

    private addUser() {
        alert('New User Added')
    }

    public render() {
        return (
            <div>
                <Button
                    onClick={this.addUser}>
                    Add User
                </Button>
            </div>
        )
    }
}