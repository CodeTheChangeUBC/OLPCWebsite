import * as React from 'react';
import "./Button.css";

// tslint:disable-next-line:interface-name
interface Props {
    text: string;
    link: string;
}

class Button extends React.Component<Props> {
    public render () {
        return(
            <a href={this.props.link}>{this.props.text}</a>
        )
    }
}

export default Button;