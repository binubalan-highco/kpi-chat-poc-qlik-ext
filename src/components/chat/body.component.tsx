import * as React from 'react';

export class ChatBody extends React.Component {

    private lorem:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.";
    private defaultImage:string = "../../../src/images/1.png";

    render() {
        return (
                <div className='chat-area'>
                    <ul>
                        <li>
                            <div className='messageWrapper'>
                                <div className='messageHeader'>
                                    <div className='avatar'>
                                        <img src={this.defaultImage} alt='username'/>
                                    </div>
                                    <div className='messageUser'>
                                        <h2>Username</h2>
                                        <h4>28/05/19 01:10</h4>
                                    </div>
                                    <div className='messageOptions'>
                                        <i className="attachment paperclip icon" title='Attachment'></i>
                                        <i className="trash alternate outline icon" title='Delete'></i>
                                    </div>
                                </div>
                                <div className='messageContents'>
                                    <p>{this.lorem}</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className='messageWrapper'>
                                <div className='messageHeader'>
                                    <div className='avatar'>
                                        <img src={this.defaultImage} alt='username'/>
                                    </div>
                                    <div className='messageUser'>
                                        <h2>Username</h2>
                                        <h4>28/05/19 01:10</h4>
                                    </div>
                                    <div className='messageOptions'>
                                        <i className="attachment paperclip icon" title='Attachment'></i>
                                        <i className="trash alternate outline icon" title='Delete'></i>
                                    </div>
                                </div>
                                <div className='messageContents'>
                                    <p>{this.lorem}</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className='messageWrapper'>
                                <div className='messageHeader'>
                                    <div className='avatar'>
                                        <img src={this.defaultImage} alt='username'/>
                                    </div>
                                    <div className='messageUser'>
                                        <h2>Username</h2>
                                        <h4>28/05/19 01:10</h4>
                                    </div>
                                    <div className='messageOptions'>
                                        <i className="attachment paperclip icon" title='Attachment'></i>
                                        <i className="trash alternate outline icon" title='Delete'></i>
                                    </div>
                                </div>
                                <div className='messageContents'>
                                    <p>{this.lorem}</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className='messageWrapper'>
                                <div className='messageHeader'>
                                    <div className='avatar'>
                                        <img src={this.defaultImage} alt='username'/>
                                    </div>
                                    <div className='messageUser'>
                                        <h2>Username</h2>
                                        <h4>28/05/19 01:10</h4>
                                    </div>
                                    <div className='messageOptions'>
                                        <i className="attachment paperclip icon" title='Attachment'></i>
                                        <i className="trash alternate outline icon" title='Delete'></i>
                                    </div>
                                </div>
                                <div className='messageContents'>
                                    <p>{this.lorem}</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className='messageWrapper'>
                                <div className='messageHeader'>
                                    <div className='avatar'>
                                        <img src={this.defaultImage} alt='username'/>
                                    </div>
                                    <div className='messageUser'>
                                        <h2>Username</h2>
                                        <h4>28/05/19 01:10</h4>
                                    </div>
                                    <div className='messageOptions'>
                                        <i className="attachment paperclip icon" title='Attachment'></i>
                                        <i className="trash alternate outline icon" title='Delete'></i>
                                    </div>
                                </div>
                                <div className='messageContents'>
                                    <p>{this.lorem}</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className='messageWrapper'>
                                <div className='messageHeader'>
                                    <div className='avatar'>
                                        <img src={this.defaultImage} alt='username'/>
                                    </div>
                                    <div className='messageUser'>
                                        <h2>Username</h2>
                                        <h4>28/05/19 01:10</h4>
                                    </div>
                                    <div className='messageOptions'>
                                        <i className="attachment paperclip icon" title='Attachment'></i>
                                        <i className="trash alternate outline icon" title='Delete'></i>
                                    </div>
                                </div>
                                <div className='messageContents'>
                                    <p>{this.lorem}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
        )
    }
}