import { Box, Container, Typography } from "@material-ui/core";
import React, { Component } from "react";

export class Home extends Component {
  static displayName = Home.name;

  public render(): React.ReactNode {
    return (
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Athi Pen Page
          </Typography>
        </Box>
      </Container>
    );
  }
}
