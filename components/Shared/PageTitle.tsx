import { Helmet } from "react-helmet";

import {
  Box,
  Container,
  Text,
  BreadcrumbComponent as Breadcrumb,
} from "components";

type Props = {
  title: string;
  justTitle?: boolean;
};
const PageTitle = ({ title, justTitle = false }: Props) => {
  return (
    <>
      <Helmet title={title} />
      {!justTitle && (
        <Box padding="20px 0 60px">
          <Container>
            <Breadcrumb />
            <h1>
              <Text fontSize="36px" lineHeight="43.2px">
                {title}
              </Text>
            </h1>
          </Container>
        </Box>
      )}
    </>
  );
};

export default PageTitle;
