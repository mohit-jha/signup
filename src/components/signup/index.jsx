import React from "react";
import Left from "./left-section";
import Right from './right-section'
function index() {
  return (
    <>
      <div className="signup_wrapper">
        <div className="left">
          <Left />
        </div>
        <div className="right"><Right /></div>
      </div>
    </>
  );
}

export default index;
