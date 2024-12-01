import styled from "styled-components";
import * as React from "react";

interface Flag {
  flag?: number;
}

const Flag = styled.div<Flag>`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 99;
  padding: 6px 10px;
  background-color: #79736d;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  display: ${(props) => (props.flag == 1 ? null : "none")};
`;

const Marca = (props) => {
  return (
    <Flag flag={props.flag}>
      <p>PROMO</p>
    </Flag>
  );
};
export default Marca;
