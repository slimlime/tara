/**
 * @overview Component to show home dir
 * @todo Replace this with user defined one in config
 * @module explorer
 */
import React, { Component } from "react";
import { homedir } from "os";
import Dir from "../../containers/show-dir";

export default class HomeDir extends Component {
  render() {
    return (
      <Dir match={{ params: { dir: homedir() } }} />
    );
  }
}
