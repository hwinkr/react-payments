import styled from "styled-components";

import { StaticPropsWithChildren } from "../../types/components";

const CardPageLayout = ({ children }: StaticPropsWithChildren) => {
  return <Layout>{children}</Layout>;
};

export default CardPageLayout;

const Layout = styled.div`
  width: 375px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffffff;
  border-radius: 8px;

  overflow: auto;
`;
