import { join } from "path";
import Image from "./index";

const textImgFilePosi = join(__dirname, '/test/image.png');
const instance = new Image(textImgFilePosi);
instance.exec().then(result => {
    console.log(result);
})
