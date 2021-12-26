export async function loadImage(
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

export function randomNumber(a: number, b: number) {
  const min = a > b ? b : a;
  const max = a > b ? a : b;
  // Use below if final number doesn't need to be whole number
  // return Math.random() * (max - min + 1) + min;
  return Math.floor(Math.random() * (max - min + 1) + min);
}
