import { Box, Flex, Text } from "components";
import Image from "next/image";

const ProjectItem = () => {
  return (
    <Box border="1px solid" borderColor="tertiary" borderRadius="4px">
      <Box>
        <Image
          src={"/hands.jpeg"}
          alt={""}
          width={300}
          height={152}
          layout="responsive"
        />
      </Box>
      <Flex padding="25px 15px" flexDirection="column">
        <Text color="tertiary" fontSize="24px" lineHeight="29px">
          Association Pacifique
        </Text>
        <Text align="center" color="black" marginTop="10px">
          The program aims to allow teenagers to break with their usual living
          environment in contact with the adult world and the requirements of
          navigation.
        </Text>
      </Flex>
    </Box>
  );
};

export default ProjectItem;
