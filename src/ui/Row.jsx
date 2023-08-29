import { styled, css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
    `}
  ${(props) =>
    props.type === "horizontal" &&
    css`
      flex-direction: row;
      justify-content: space-between;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
