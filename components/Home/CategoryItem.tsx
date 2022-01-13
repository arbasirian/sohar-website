import { Box, Text } from "components";
import { useRouter } from "next/router";

type Props = {
  title: string;
  desc: string;
  clickRoute?: string;
};
const CategoryItem = ({ title, desc, clickRoute }: Props) => {
  const router = useRouter();
  const handleChangeRoute = () => {
    if (!clickRoute) return;
    router.push(clickRoute);
  };
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
        onClick={() => handleChangeRoute()}
        className={clickRoute && "has-pointer"}
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
