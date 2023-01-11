import styles from "../styles/Home.module.css";

import { Container } from "modules/common";
import { Home } from "modules/static";

const { Head, Body } = Home;

const Page = () => {
  return (
    <Container head={Head}>
      <Body />
    </Container>
  );
};

export default Page;
