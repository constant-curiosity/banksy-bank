import { Subtitle } from "@tremor/react";
import { Link } from "react-router-dom";

export default function CryptoLinks({ name, link, target, className, color }) {
  return (
    <Link className={className} to={link} target={target}>
      <div>
        <Subtitle color={color}>{name}</Subtitle>
      </div>
    </Link>
  );
}
