import React from "react";

import { Box, Container, Flex, Text } from "components";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  imageURL: string;
};
const SlideInfo = ({ title, description, imageURL }: Props) => {
  return (
    <Box background="primary">
      <Flex
        width="100%"
        justifyContent="space-between"
        height="420px"
        overflow="hidden"
      >
        <Flex
          flexDirection="column"
          padding="25px 0"
          alignItems="flex-start"
          className="flex-1"
        >
          <Box>
            <Text
              color="white"
              opacity={0.5}
              fontSize="36px"
              lineHeight="43px"
              marginBottom="5px"
            >
              {title}
            </Text>
          </Box>
          <Box>
            <Text color="white" fontSize="48px" lineHeight="57px">
              {description}
            </Text>
          </Box>
        </Flex>

        <Box width="100%" className="flex-1" position="relative">
          <Image
            src={imageURL}
            alt={title}
            width={420}
            height={420}
            layout="responsive"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default SlideInfo;
