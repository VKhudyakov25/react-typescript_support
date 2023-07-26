import { Component } from "react";
import { TextBox } from "devextreme-react/text-box";
import { Button } from "devextreme-react/button";
import { ValueChangedEvent } from "devextreme/ui/text_box";

interface Person {
  firstName: string;
  lastName: string;
  count: number;
}

class ClassComponentApp extends Component<object, Person> {
  constructor(props: object) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      count: 0,
    };
    this.handleValueChanged = this.handleValueChanged.bind(this);
  }

  handleValueChanged = (e: ValueChangedEvent) => {
    console.log(e.element.id);
    this.setState({ ...this.state, [e.element.id]: e.value });
  };

  handleClick = () => {
    this.setState({ ...this.state, count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <TextBox
          id="firstName"
          className="textbox"
          value={this.state.firstName}
          onValueChanged={this.handleValueChanged}
          label="First Name"
          labelMode="floating"
        />
        <TextBox
          id="lastName"
          className="textbox"
          value={this.state.lastName}
          onValueChanged={this.handleValueChanged}
          label="Last Name"
          labelMode="floating"
        />
        <Button
          className="button"
          text="Count registration"
          type="success"
          onClick={this.handleClick}
        />
        {
          <>
            <p>First Name: {this.state.firstName}</p>
            <p>Last Name: {this.state.lastName}</p>
            <p>Number of {this.state.count}</p>
          </>
        }
      </>
    );
  }
}

export default ClassComponentApp;
