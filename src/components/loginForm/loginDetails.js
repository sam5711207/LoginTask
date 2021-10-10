import React from 'react';

export default function LoginDetails(props) {

  const { formFields, userDetails, setUserDetails } = props;

  let field1 = formFields.field1;
  let field2 = formFields.field2;

  const renameField = (field) => {
    field.split(" ").join()
  }

  return (
    <>
      <div className="form-group">
        <label for={renameField(field1)}>{field1}</label>
        <input type={ field1 === "First Name" ? "string" : "number" }
          name={renameField(field1)}
          className={"form-control"}
          placeholder={field1}
          value={userDetails.field1}
          onChange={(e) => { setUserDetails({ field1: e.target.value }) }}
        />
      </div>
      <div className="form-group mb-4">
        <label for={renameField(field2)}>{field2}</label>
        <input type="string"
          name={renameField(field2)}
          className={"form-control"}
          value={userDetails.field2}
          onChange={(e) => { setUserDetails({ field2: e.target.value }) }}
          placeholder={field2}
        />
      </div>

    </>
  );
}

