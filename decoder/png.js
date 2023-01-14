import { resolve } from "path";
import { PNG } from "pngjs";
const {
    formatColor,
    is_IncludeAlpha,    
} from './utils';

const pngFn = (buf) => {
    return new Promise((resolve, reject) => {
        let pngInfo = null;
        try {
            pngInfo = PNG.sync.read(buf);
        } catch (error) {
            reject(error.message);
        }

        const { width, height, data } = pngInfo;
        const rgbaList = formatColor(data, is_IncludeAlpha);
        resolve({
            width,
            height,
            rgbaList
        });
     });
 };

export default pngFn;