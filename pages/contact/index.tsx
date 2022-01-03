import { NextPage } from "next";

import { Container, Flex, PageTitle, SlideInfo, Text } from "components";
import { ContactForm } from "components/Contact";

const ContactPage: NextPage = () => {
  return (
    <>
      <SlideInfo
        title=""
        description="How to find us, how to reach us"
        imageURL="/hands.jpeg"
      />
      <PageTitle title="Contact Us" />
      <Container>
        <Flex
          alignItems="flex-start"
          justifyContent="space-between"
          flexGap="60px"
          marginBottom="70px"
        >
          <ContactForm />
          <Text color="black">
            Augusta Energy Group LTD Theklas Lysioti, 29 CASSANDRA CENTRE, 3rd
            Floor 3030, Limassol Cyprus
          </Text>
        </Flex>
      </Container>
    </>
  );
};

export default ContactPage;
