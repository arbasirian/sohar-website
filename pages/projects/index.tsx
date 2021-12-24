import { NextPage } from "next";
import React from "react";
import { Helmet } from "react-helmet";

import { BreadcrumbComponent, Container, SlideInfo } from "components";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <Helmet title="Projects" />
      <SlideInfo
        title="Responsibility"
        description="Be conscious of our responsibilities, transform words into action"
        imageURL="/hands.jpeg"
      />
      <Container>
        <BreadcrumbComponent />
      </Container>
    </>
  );
};

export default ProjectsPage;
