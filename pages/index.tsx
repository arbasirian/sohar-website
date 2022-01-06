import type { NextPage } from "next";
import {
  Box,
  Container,
  PageTitle,
  SlideInfo,
  Grid,
  ProjectItem,
  CategoryItem,
} from "components";

const Home: NextPage = () => {
  return (
    <>
      <SlideInfo
        title="Ad Maiora !"
        description="Aiming for excellence, in the pursuit of success"
        imageURL="/hands.jpeg"
        link="/contact"
        linkTitle="See what makes us different"
      />
      <PageTitle title="Home Page" justTitle={true} />
      <Box padding="70px 0 50px">
        <Container>
          <Grid
            gridTemplateColumns="1fr 1fr 1fr"
            gridTemplateColumnsT="1fr"
            gridGap="30px"
          >
            <CategoryItem
              title="Our Philosophy"
              desc="Become genuine partners, working closely with our clients"
            />
            <CategoryItem
              title="Our Company"
              desc="An in-depth knowledge of international markets for petroleum"
            />
            <CategoryItem
              title="Our Activities"
              desc="Specialist in oil trading for emerging markets"
            />
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
