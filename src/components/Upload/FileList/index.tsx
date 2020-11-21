import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import filesize from "filesize";

import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

import { IPreviewProps } from "react-dropzone-uploader";

import { Container, FileInfo, Preview } from "./styles";

const FileList: React.FC<IPreviewProps> = ({ meta, fileWithMeta }) => {
  const { id, previewUrl, name, size, percent, status } = meta;
  const { remove } = fileWithMeta;
  return (
    <Container>
      <li key={id}>
        <FileInfo>
          <Preview src={previewUrl} />
          <div>
            <strong>{name}</strong>
            <span>
              {filesize(size)}
              {!!previewUrl && <button onClick={remove}>Excluir</button>}
            </span>
          </div>
        </FileInfo>

        <div>
          {status !== "done" &&
            status !== "error_validation" &&
            status !== "error_upload_params" && (
              <CircularProgressbar
                styles={{
                  root: { width: 24, marginRight: 8 },
                  path: { stroke: "#ff9000" },
                }}
                strokeWidth={10}
                value={percent}
              />
            )}
          {previewUrl && (
            <a href={previewUrl} target="_blank" rel="noopener noreferrer">
              <MdLink style={{ marginRight: 8 }} size={24} color="#fff" />
            </a>
          )}

          {status === "done" && <MdCheckCircle size={24} color="#22bb33" />}
          {(status === "error_validation" ||
            status === "error_upload_params") && (
            <MdError size={24} color="#bb2124" />
          )}
        </div>
      </li>
    </Container>
  );
};

export default FileList;
