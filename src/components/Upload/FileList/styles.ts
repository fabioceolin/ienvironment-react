import styled from "styled-components";

interface PreviewProps {
  src?: string;
}

export const Container = styled.ul`
  margin-top: 20px;
  width: 100%;
  padding: 5px;
  border-radius: 4px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;

    & + li {
      margin-top: 15px;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    strong {
      color: #ccc;
    }

    span {
      font-size: 12px;
      color: #ccc;
      margin-top: 5px;

      button {
        border: 0;
        background: transparent;
        color: #bb2124;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const Preview = styled.div<PreviewProps>`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
`;
