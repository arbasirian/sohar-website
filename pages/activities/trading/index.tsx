import { NextPage } from "next";
import {
  Box,
  Container,
  PageTitle,
  SlideInfo,
  Grid,
  CategoryItem,
  Flex,
  Text,
} from "components";

const TradingPage: NextPage = () => {
  return (
    <>
      <SlideInfo
        title="Operations"
        description="Choose the best opportunities, always a step forward"
        imageURL="/hands.jpeg"
      />
      <PageTitle title="Trading" />
      <Box padding="20px 0 60px">
        <Container>
          <Flex alignItems="flex-start" justifyContent="space-between">
            <Box>
              <Text color="black">
                For a crude oil and petroleum products trader, achieving success
                leaves no room for improvisation. Many talents have to be merged
                and managed to deal with the logistical constraints, in order to
                minimise delays and to optimise the operational results.
                Management of the unexpected is a talent our team has developed
                over many years of collective experience. We dedicate maximum
                importance to the smallest details, aiming for perfection in all
                our transactions.
              </Text>
            </Box>
            <Box
              borderLeft="5px solid"
              borderColor="primary"
              paddingLeft="30px"
              marginLeft="30px"
            >
              <Text fontSize="30px" lineHeight="36px">
                What makes us different? Creative solutions for state owned and
                independent importers
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box padding="80px 0 50px" background="gray13">
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

export default TradingPage;
