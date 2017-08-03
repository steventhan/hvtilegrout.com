const getThumbnails = (imageList, size) => {
  return imageList.map((image) => {
    let extIndx = image.src.lastIndexOf(".");
    image.thumbnail = image.src.slice(0, extIndx) + size + image.src.slice(extIndx);
    return image;
  });
};

export {
  getThumbnails
};
