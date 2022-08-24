import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core";

import Toolbox from "./components/Toolbox";
import SettingsPanel from "./components/SettingsPanel";
import Topbar from "./components/Topbar";

import Container from "./components/user/Container.js";
import Button from "./components/user/Button";
import { Card, CardBottom, CardTop } from "./components/user/Card";
import Text from "./components/user/Text";
import { Editor, Frame, Element } from "@craftjs/core";

const CraftPage = () => {
  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Editor resolver={{ Card, Button, Text, Container, CardBottom, CardTop }}>
        <Grid container spacing={3} style={{ paddingTop: "10px" }}>
          <Topbar />
          <Grid item xs>
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas>
                <Card />
                <Button
                  size="small"
                  variant="outlined"
                  children="click"
                  color="black"
                ></Button>
                <Text fontSize="small" text="Hi world!" />
                <Element is={Container} padding={2} background="#999" canvas>
                  <Text fontSize="small" text="It's me again!" />
                </Element>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
};

export default CraftPage;
