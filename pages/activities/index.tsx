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

const ActivitiesPage: NextPage = () => {
  return (
    <>
      <SlideInfo
        title=""
        description="We have formed Sohar Group to serve the upstream business"
        imageURL="/hands.jpeg"
      />
      <PageTitle title="Our Activities" />
      <Box padding="20px 0 60px">
        <Container>
          <Box>
            <Text color="black">
              We have formed Sohar Group to serve the upstream business. We
              specialize in well testing, coil tubing, wireline and subsurface
              equipment.
            </Text>
          </Box>
          <Box>
            <Text color="black">
              Our core business covers the below envelope
            </Text>
          </Box>
          <Box>
            <Text color="black">
              <ul>
                <li>
                  Fabricating parts with our precise German CNC machines
                  <ul>
                    <li>Rotary equipment</li>
                    <li>Pressurized parts</li>
                    <li>Downhole hostile tools</li>
                    <li>General on-demand parts</li>
                  </ul>
                </li>
                <li>Downhole gauges </li>
                <li>Memory tools</li>
                <li>Slickline unit and tools</li>
                <li>Fishing tools</li>
                <li>Coil tubing accessories</li>
                <li>Downhole plugs</li>
                <li>Well testing equipment</li>
                <li>Trading equipment</li>
              </ul>
            </Text>
          </Box>
          <Box>
            <Text color="black">
              We have dedicated partners in the region if it comes to using
              their facility for fabricating and pressure testing assets, we
              will utilize their equipment for your service.
            </Text>
          </Box>
          <Box>
            <Text color="black">
              We have delivered parts to local service companies for slickline
              fishing, wireline adaptors, CT deployment bars, etc.
            </Text>
          </Box>
          <Box>
            <Text color="black">
              We aim to expand our horizon with dedication and service quality.
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ActivitiesPage;
