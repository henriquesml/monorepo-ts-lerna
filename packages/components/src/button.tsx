/* eslint-disable no-alert */
import { meaningOfLife } from "@monorepo-ts-lerna/foo";
import React from "react";

export const Button = () => (
  <button
    type="button"
    onClick={() => alert(`the meaning if life is ${meaningOfLife}`)}
  >
    Click me
  </button>
);
