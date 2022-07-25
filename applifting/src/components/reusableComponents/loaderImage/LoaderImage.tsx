import React from "react";

import { useDownloadImage } from "../../../hooks/FileHandlingHooks";

interface Props {
  imageId: string | undefined | null;
}

export const LoaderImage: React.FC<Props> = (props) => {
  const imageUrl = useDownloadImage(props.imageId);
  const { imageId, ...rest } = props;

  return <img {...rest} alt={"downloadedImage"} src={imageUrl} />;
};
