export default async function loadImage(
  image: string,
  sx: number,
  sy: number,
  sw: number,
  sh: number,
  options?: ImageBitmapOptions | undefined,
): Promise<ImageBitmap> {
  const img: HTMLImageElement = new Image();
  img.src = image;
  return new Promise((resolve) => {
    img.onload = async () => {
      const bitmapImage = await createImageBitmap(
        img,
        sx,
        sy,
        sw,
        sh,
        options,
      );

      resolve(bitmapImage);
    };
  });
}
