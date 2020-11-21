import styled, { css } from "styled-components";

interface DropContainerProps {
  isDragActive: boolean;
  isDragReject: boolean;
}
interface UploadMessageProps {
  type?: "success" | "error";
}

const dragActive = css`
  border-color: #22bb33;
`;

const dragReject = css`
  border-color: #bb2124;
`;

export const Container = styled.span<UploadMessageProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone",
})<DropContainerProps>`
  width: 100%;
  border: 4px dashed #232129;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${(props) => props.isDragActive && dragActive}
  ${(props) => props.isDragReject && dragReject}
`;

export const ListView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #27242c;
  margin-top: 10px;
`;
