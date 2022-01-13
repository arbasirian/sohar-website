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
const AboutPage: NextPage = () => {
  return (
    <>
      <SlideInfo
        title="Our Believe, is Quality"
        description="Quality is doing it right, when no one is looking (Henry Ford)"
        imageURL="/hands.jpeg"
      />
      <PageTitle title="About" />
      <Box padding="20px 0 60px">
        <Container>
          <Flex alignItems="flex-start" justifyContent="space-between">
            <Box>
              <Text color="black">
                Working with industry leaders, namely Schlumberger and
                Haliburton offering services for giant operators like Shell,
                British Petroleum (BP) and HESS Energy in the ride of early 2000
                demands, taught us numerous important lessons on sustainability
                and continuous growth and how to stay in the market and push to
                the limits.
              </Text>
            </Box>
          </Flex>
          <Box margin="20px 0">
            <Text color="black" fontSize="18px" weight="600">
              Our strengths
            </Text>
            <Box margin="20px 0 0">
              <Text color="black">
                <ul>
                  <li>Aiming for long-term business relationships</li>
                  <li>Direct access to the best industry providers</li>
                  <li>
                    Efficient communications network within the region •
                    Reliable and steady quality of our services
                  </li>
                </ul>
              </Text>
            </Box>
            <Box margin="20px 0 0">
              <Text color="black">
                We merged our industry long experiences to carry the same legacy
                here in Sohar Group to develop and offer genuine products and
                services with the same attitude to our customers. There’s no way
                around the quality.
              </Text>
            </Box>
          </Box>
          <Box margin="20px 0">
            <Text color="black" fontSize="18px" weight="600">
              Our Team
            </Text>
            <Box margin="20px 0 0">
              <Text color="black">
                We have united a good number of ex-colleagues, consultants and
                field experts to tackle problems and come up with optimized
                solutions with a combined upstream experience of more than 100
                years. Having a global reach experience, ensures staying on the
                market edge when it comes to utilizing technologies for the
                particular issues.
              </Text>
            </Box>
          </Box>
          <Box></Box>
          <Box></Box>
        </Container>
      </Box>
    </>
  );
};

export default AboutPage;
