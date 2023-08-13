import { Flex } from "@tremor/react";

export default function CryptoLinks({ name, type, url }) {
  return (
    <div className="pr-5 sm:flex sm:flex-col">
      <div className="mb-2 sm:mb-0">{name}</div>
    </div>
  );
}
