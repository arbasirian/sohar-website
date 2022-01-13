import { NextPage } from "next";

import {
  Container,
  Flex,
  PageTitle,
  SlideInfo,
  Text,
  ContactForm,
} from "components";

const ContactPage: NextPage = () => {
  return (
    <>
      <SlideInfo
        title=""
        description="We are at your reach"
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
            Sohar Group DMCC Po Box 72485 Office 3012 – JBC 5 Jumeirah Lakes
            towers Dubai +971 4 565 62 10 +971 5 452 31072 Sohar Group SAOG P.O.
            Box 93 , Postal Code 328, Sohar Industrial Estate, Sohar, Sultanate
            of Oman
          </Text>
        </Flex>
      </Container>
    </>
  );
};

export default ContactPage;
