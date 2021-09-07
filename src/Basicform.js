import React, { useState } from "react";

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // email and password is storing here
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };
  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            value={password}
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="result">
        <h1>
          <code>Result will display here: ✌</code>
        </h1>
        {allEntry.map((curElem) => {
          return (
            <div>
              <p>{curElem.email}</p>
              <p>{curElem.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BasicForm;
