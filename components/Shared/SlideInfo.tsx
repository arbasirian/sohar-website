import React from "react";
import Link from "next/link";

import { Box, Flex, Text } from "components";
import Image from "next/image";

import { LinkButton } from "./shared.styles";

type Props = {
  title: string;
  description: string;
  imageURL: string;
  linkTitle?: string;
  link?: string;
};
const SlideInfo = ({
  title,
  description,
  imageURL,
  linkTitle,
  link,
}: Props) => {
  return (
    <Box background="primary">
      <Flex
        width="100%"
        justifyContent="space-between"
        height="420px"
        overflow="hidden"
        flexDirectionT="column"
      >
        <Flex
          flexDirection="column"
          padding="25px 0"
          alignItems="flex-start"
          className="flex-1"
          marginRight="12%"
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
          {linkTitle && link && (
            <Link href={link} passHref={true}>
              <LinkButton size="large">{linkTitle}</LinkButton>
            </Link>
          )}
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
