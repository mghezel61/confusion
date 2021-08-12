import React from "react";
import { ImSpinner9 } from "react-icons/im";

export const Spinner = () => (
  <div className="text-center col-12 my-5">
    <div className="">
      <ImSpinner9 className="icon-spin text-primary" size="3rem" />
    </div>
    <p>Loading...</p>
  </div>
);
