import React, { Component } from "react";
import { Button, Container, Box, Typography } from "@material-ui/core";

export class Home extends Component {
  static displayName = Home.name;

  public render(): React.ReactNode {
    return (
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Athi Pen
          </Typography>
        </Box>
      </Container>
    );
  }
}
