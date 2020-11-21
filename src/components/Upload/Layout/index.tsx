import React from "react";

import { ILayoutProps } from "react-dropzone-uploader";

import { Container, DropContainer, ListView } from "./styles";

const Layout: React.FC<ILayoutProps> = ({
  extra,
  dropzoneProps,
  files,
  input,
  previews,
  submitButton,
}) => {
  return (
    <Container>
      <DropContainer isDragActive={extra.active} isDragReject={extra.reject}>
        <div {...dropzoneProps}>{files.length < extra.maxFiles && input}</div>
      </DropContainer>
      <ListView>{previews}</ListView>
    </Container>
  );
};

export default Layout;
