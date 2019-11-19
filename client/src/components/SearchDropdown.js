import React from 'react';
import {Dropdown, FormControl} from "react-bootstrap";

export default class SearchDropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedItem: props.selectedItem || {}
        }
    }
    onSelect = (eventKey) => {
        const user = this.props.data.find(item => item._id === eventKey);
        this.setState({
            selectedItem: user
        }, () => this.props.onSelect(user))
    };

    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle id="dropdown-custom-components">
                    {this.state.selectedItem.name || "Select Biker"}
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                    {this.props.data.map(item => {
                        return (<Dropdown.Item eventKey={item._id} key={item._id} active={item._id === this.state.selectedItem._id} onSelect={this.onSelect}>{item.name}</Dropdown.Item>)
                    })}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

class CustomMenu extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {value: ''};
    }

    handleChange(e) {
        this.setState({value: e.target.value.toLowerCase().trim()});
    }

    render() {
        const {
            children,
            style,
            className,
            'aria-labelledby': labeledBy,
        } = this.props;

        const {value} = this.state;

        return (
            <div style={style} className={className} aria-labelledby={labeledBy}>
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type biker name..."
                    onChange={this.handleChange}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        child =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    }
}