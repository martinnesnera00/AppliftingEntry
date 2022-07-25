import React, { useEffect, useState } from "react";

import {
  useAddImageMutation,
  useDeleteImageMutation,
} from "../slices/APISlice";

const defaultImage = require("../resources/placeholder.png");

export const useDownloadImage = (imageId: string | undefined | null) => {
  const [imageUrl, setImageUrl] = useState<string>(defaultImage);

  const options: any = {
    headers: {
      "X-API-KEY": process.env.REACT_APP_API_KEY,
    },
  };

  const getImage = async () => {
    fetch(process.env.REACT_APP_API_URL + "/images/" + imageId, options)
      .then((resp) => resp.blob())
      .then((blobData) => {
        setImageUrl(URL.createObjectURL(blobData));
      });
  };

  //TODO upravit error handling
  useEffect(() => {
    if (imageId) {
      getImage().catch(console.error);
    }
  }, [imageId]);

  return imageUrl;
};

export const useUploadImage = (
  setImage: React.Dispatch<React.SetStateAction<string | null | undefined>>
) => {
  const [addImage, { data = [], isLoading: isUploadingImage, isSuccess }] =
    useAddImageMutation();

  useEffect(() => {
    if (isSuccess) {
      setImage(data[0].imageId);
    }
  }, [isSuccess]);

  const addNewImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files) return;

    const formData = new FormData();
    formData.append("image", files[0]);
    addImage(formData);
  };

  return { addNewImage, isUploadingImage };
};

export const useDeleteImage = (
  setImage: React.Dispatch<React.SetStateAction<string | null | undefined>>
) => {
  const [deleteImage, { isLoading: isDeletingImage, isSuccess }] =
    useDeleteImageMutation();

  useEffect(() => {
    if (isSuccess) {
      setImage(null);
    }
  }, [isSuccess]);

  const deleteExistingImage = async (imageId: string | undefined | null) => {
    if (imageId) {
      deleteImage(imageId);
    }
  };

  return { deleteExistingImage, isDeletingImage };
};
