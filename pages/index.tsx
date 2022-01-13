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
        title=""
        description="Carrying the Industry Leaders Legacy, here to Offer Unique Solutions"
        imageURL="/hands.jpeg"
        link="/contact"
        linkTitle="See what makes us different"
      />
      <PageTitle title="Home Page" justTitle={true} />
      <Box padding="80px 0 50px">
        <Container>
          <Grid
            gridTemplateColumns="1fr 1fr 1fr"
            gridTemplateColumnsT="1fr"
            gridGap="30px"
          >
            <CategoryItem
              title="Our Story"
              desc="We date back to early 2000 in Schlumberger, in the heart of service"
            />
            <CategoryItem
              title="Our Activities"
              desc="We specialize in the upstream market for the oil and gas industry"
              clickRoute="/activities"
            />
            <CategoryItem
              title="Our Contact"
              desc="Here to combine experiences and offer efficient solutions"
            />
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
