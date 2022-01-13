/* eslint-disable new-cap */

// import ffmpeg from 'ffmpeg';
import { removeBackgroundFromImageFile } from 'remove.bg';

// const sourceFile = './sprite.gif';
// const output = './sprite';

(async () => {
  // const ffMovie = await new ffmpeg(sourceFile);
  // const frames = await ffMovie.fnExtractFrameToJPG(output, {
  //   frame_rate: 5,
  //   file_name: 'sprite_sheet',
  // });
  // console.log(frames.length);
  const promises = [];
  for (let i = 2; i < 19; i += 1) {
    promises.push(removeBackgroundFromImageFile({
      apiKey: 'yRgemPDW1iD4MtXrv5DCznbP',
      path: `./sprite/sprite_sheet_${i}.jpg`,
      outputFile: `./sprite/sprite_sheet_${i}.jpg`,
    }));
  }
  await Promise.all(promises);
})();
