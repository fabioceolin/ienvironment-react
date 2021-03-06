import React, { createContext, useCallback, useContext, useState } from "react";

interface FilesUploadedProps {
  FileID: string;
  ResponseFileID: string;
}

interface UploadContextData {
  addFile(file: FilesUploadedProps): void;
  removeFile(id: string): void;
  listAllFiles(): FilesUploadedProps[];
  removeAllFiles(): void;
}

const UploadContext = createContext<UploadContextData>({} as UploadContextData);

const UploadProvider: React.FC = ({ children }) => {
  const [files, setFiles] = useState<FilesUploadedProps[]>([]);

  const addFile = useCallback(
    ({ FileID, ResponseFileID }: FilesUploadedProps) => {
      const file = {
        FileID,
        ResponseFileID,
      };

      setFiles((state) => [...state, file]);
    },
    []
  );

  const removeFile = useCallback((id: string) => {
    setFiles((state) => state.filter((file) => file.FileID !== id));
  }, []);

  const removeAllFiles = useCallback(() => {
    setFiles([]);
  }, []);

  const listAllFiles = useCallback(() => {
    return files;
  }, [files]);

  return (
    <UploadContext.Provider
      value={{ addFile, listAllFiles, removeFile, removeAllFiles }}
    >
      {children}
    </UploadContext.Provider>
  );
};

function useUpload(): UploadContextData {
  const context = useContext(UploadContext);

  if (!context) {
    throw new Error("useUpload must be used within a UploadProvider");
  }

  return context;
}

export { UploadProvider, useUpload };
