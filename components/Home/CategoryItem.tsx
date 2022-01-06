import { Box, Text } from "components";

type Props = {
  title: string;
  desc: string;
};
const CategoryItem = ({ title, desc }: Props) => {
  return (
    <Box
      padding="40px"
      border="1px solid"
      borderColor="primary"
      borderRadius="6px"
    >
      <Text
        fontSize="24px"
        align="center"
        color="primary"
        width="100%"
        marginBottom="15px"
      >
        {title}
      </Text>
      <Text align="center" color="black">
        {desc}
      </Text>
    </Box>
  );
};

export default CategoryItem;
