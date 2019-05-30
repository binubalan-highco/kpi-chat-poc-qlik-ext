import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button} from "semantic-ui-react";
import {APIService} from "../services/api.service";
import {IUser} from "../classes/user";

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
    public render() {
        return (
            <div className="app">
                <h1>Hello</h1>
                {(this.state.users && this.state.users.length>0)?(
                    <ul>
                        {
                            this.state.users.map((this.renderUser))
                        }
                    </ul>
                ):<h4>No users found</h4>}
                <Button onClick={e=>{
                    (new APIService()).getAllUsers(p=>{
                        if(p){
                            p.then((users:IUser[])=>{
                                    this.setState({
                                        users
                                    })
                                })
                                .catch(e=>{
                                    console.log(e);
                                });
                        }
                    })
                }} content="Get users"/>
            </div>
        );
    }
}
