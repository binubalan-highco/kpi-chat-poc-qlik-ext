import * as React from 'react';


type IProps = {
    KPI:string
}
export class ChatHeader extends React.Component<IProps, {}> {

    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className='channel-header-wrapper'>
                <div className='title'>{this.props.KPI}</div>
                <div className='actions'>
                    <i className="star outline icon"></i>
                    <i className="users icon"></i>
                    <i className="cog icon"></i>
                </div>
            </div>
        )
    }
}