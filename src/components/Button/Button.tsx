import * as React from 'react';
import "./Button.css";

// tslint:disable-next-line:interface-name
interface Props {
    onclick: () => {};
    text: string;
}

class Button extends React.Component<Props> {
    public render () {
        return(
            <button onClick={this.props.onclick}>{this.props.text}</button>
        )
    }
}

export default Button;