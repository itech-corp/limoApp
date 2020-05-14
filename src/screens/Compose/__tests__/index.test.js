import "react-native";
import React from "react";
import Compose from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Compose />).toJSON();
  expect(tree).toMatchSnapshot();
});
