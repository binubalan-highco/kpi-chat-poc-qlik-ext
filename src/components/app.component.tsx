import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button} from "semantic-ui-react";
import {APIService} from "../services/api.service";
import {IUser} from "../classes/user";
import {ChatHeader} from "./chat/header.component";
import {ChatBody} from "./chat/body.component";
import {ChatInput} from "./chat/input.component";

/**
 * react component AppComponent state
 * @typedef {Object} AppState
 * @property {string} title
 */
interface IAppState {
    title: string,
    users:IUser[]
}

type IProps = {
    KPI:string
}

/**
 * React component - AppComponent class
 * @extends React.Component
 */
export class AppComponent extends React.Component<IProps, IAppState> {

    /**
     * static init method to render react to html element
     * @param element
     */


    public static initApp(element: HTMLElement, kpi:string) {
        const e = document.createElement("div");
        e.id = "app";
        element.appendChild(e);
        ReactDOM.render(<AppComponent KPI={kpi}/>, e,function(){
            console.log("App - ",element);
        });
    }

    /**
     * constructor
     * @param props
     */
    constructor(props: IProps) {
        super(props);
        this.state = {
            title: 'React app 1',
            users:null
        };

    }

    private renderUser(user:IUser)
    {
        return(
            <li>
                {user.userName} - {user.lastActivity}
            </li>
        );
    }

    /**
     * render method of AppComponent react component
     * @return
     */
    public render()
    {
        return(
            <div className='chat-area-container'>
                <ChatHeader KPI={this.props.KPI}/>
                <ChatBody />
                <ChatInput />
            </div>
        )
    }
}
