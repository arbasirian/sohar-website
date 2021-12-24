import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Breadcrumb } from "antd";

import { Box } from "components";

const BreadcrumbComponent = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<
    { breadcrumb: string; href: string }[]
  >([]);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  console.log("router :>> ", breadcrumbs);
  return (
    <Box margin="16px 0">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link href={"/"}>Home</Link>
        </Breadcrumb.Item>
        {breadcrumbs.map((item) => (
          <Breadcrumb.Item key={item.breadcrumb}>
            <Link href={item.href}>{item.breadcrumb}</Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </Box>
  );
};

export default BreadcrumbComponent;
