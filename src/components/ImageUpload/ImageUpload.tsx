import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import * as Styled from './ImageUpload.styled';

interface ImageUploadProps {
   text: string;
   onError?: () => void;
   trimImge: string | null | undefined;
   setTrimImg: React.Dispatch<string | null | undefined>
}

const ImageUpload: React.FC<ImageUploadProps> = ({text, onError, trimImge, setTrimImg}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const isImage = acceptedFiles[0].type.startsWith("image/");

    if(!isImage) {
      onError && onError();
    } else {
      const image = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const imageData = event.target?.result;
        // @ts-ignore
        setTrimImg(imageData);
      };
      reader.readAsDataURL(image);
      
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });  

  return (
    <Styled.Container {...getRootProps()}>
      <input {...getInputProps()} />
      {trimImge ? (
        <img src={trimImge} alt="Uploaded file" />
      ) : (
        <p>{text}</p>
      )}
    </Styled.Container>
  );
}

export default ImageUpload;