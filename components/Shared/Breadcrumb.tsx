import { Layout, Breadcrumb } from "antd";
import { Box } from "components";

const BreadcrumbComponent = () => {
  return (
    <Box margin="16px 0">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    </Box>
  );
};

export default BreadcrumbComponent;
