import { Box, Flex, Text } from "components";
import React from "react";

const MainFooter = () => {
  return (
    <Flex background="secondary" padding="40px 0 80px">
      <Box>
        <Text color="white">
          © 2019 to 2022. Sohar Group. All rights reserved
        </Text>
      </Box>
    </Flex>
  );
};

export default MainFooter;
