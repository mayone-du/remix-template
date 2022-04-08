import { Button, Input } from "@mantine/core";
import type { VFC } from "react";

const IndexPage: VFC = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl bg-red-50">Welcom Remix Template!</h1>
      <Button color={"cyan"}>Hello</Button>
      <Input></Input>
    </div>
  );
};

export default IndexPage;
