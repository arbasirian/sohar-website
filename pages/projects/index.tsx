import { NextPage } from "next";
import React from "react";

import {
  Container,
  SlideInfo,
  PageTitle,
  Grid,
  ProjectItem,
  Box,
} from "components";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <SlideInfo
        title="Responsibility"
        description="Be conscious of our responsibilities, transform words into action"
        imageURL="/hands.jpeg"
      />
      <PageTitle title="Project" />
      <Box padding="30px 0 50px">
        <Container>
          <Grid
            gridTemplateColumns="1fr 1fr 1fr"
            gridTemplateColumnsT="1fr"
            gridGap="30px"
          >
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProjectsPage;
