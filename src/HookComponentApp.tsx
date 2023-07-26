import { useState } from "react";
import { TextBox } from "devextreme-react/text-box";
import { Button } from "devextreme-react/button";
import { ValueChangedEvent } from "devextreme/ui/text_box";
import "./App.css";

interface Person {
  firstName: string;
  lastName: string;
  count: number;
}

function HookComponentApp() {
  const [data, setData] = useState<Person>({
    firstName: "",
    lastName: "",
    count: 0,
  });

  const handleClick = () => {
    setData({ ...data, count: ++data.count });
  };

  const handleValueChanged = (e: ValueChangedEvent) => {
    console.log(e.element.id);
    setData({ ...data, [e.element.id]: e.value });
  };

  return (
    <>
      <TextBox
        id="firstName"
        className="textbox"
        value={data.firstName}
        onValueChanged={handleValueChanged}
        label="First Name"
        labelMode="floating"
      />
      <TextBox
        id="lastName"
        className="textbox"
        value={data.lastName}
        onValueChanged={handleValueChanged}
        label="Last Name"
        labelMode="floating"
      />
      <Button
        className="button"
        text="Count registration"
        type="success"
        onClick={handleClick}
      />
      {
        <>
          <p>First Name: {data.firstName}</p>
          <p>Last Name: {data.lastName}</p>
          <p>Number of {data.count}</p>
        </>
      }
    </>
  );
}

export default HookComponentApp;
