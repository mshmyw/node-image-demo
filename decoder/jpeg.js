import { resolve } from "path";
import jpeg  from "jpeg-js";
const {
    formatColor,
    is_IncludeAlpha,    
} from './utils';

const jpegFn = (buf) => {
    return new Promise((resolve, reject) => {
        let imgInfo = null;
        try {
            imgInfo = jpeg.decoder(buf);
        } catch (error) {
            reject(error.message);
        }

        const { width, height, data } = pngInfo;
        const rgbaList = formatColor(data, !is_IncludeAlpha);
        resolve({
            width,
            height,
            rgbaList
        });
     });
 };

export default jpegFn;