import React from "react";

export const NotFound = ({ staticContext = { status: NaN } }) => {
  staticContext.status = 404;
  return <h1>Oops, nothing here!</h1>;
};
