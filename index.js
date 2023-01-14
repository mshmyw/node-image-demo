import readFile from 'fs/promises';
import join from 'path';

import fromBuffer from 'file-type';
import png from './decoder/png';
import jpeg from './decoder/jpeg';


class Image {
    constructor(filePath) {
        this.filePath = filePath;
    }

    async exec() {
        await this.readBuffer();
        await this.recognise();
        const rgbaList = await this.clustering(this.info.rgbaList);
        // 获取前3个颜色
        return rgbaList.slice(0, 3);
    }
    async clustering(rgbaList) {
        const colorMap = {};
        const colorList = [];
        for (const rgba of rgbaList) {
            const color = rgba.join('.');
            if (!colorMap[color]) {
                colorMap[color] = 0;
                colorList.push(color);
            }
            colorMap[color]++;
        }
        colorList.sort((colorA, colorB) => {
            return colorMap[colorB] - colorMap[colorA];
        });
        return colorList;
    }

    async readBuffer() {
        this.imageBuffer = await readFile(this.filePath);
    }

    async recognise() {
        const type = await fromBuffer(tihs.imageBuffer);
        console.log('type', type);

        let info;
        switch (type.mime) {
            case 'image/png':
                info = await png(this.imageBuffer);
                break;
            case 'image/jpeg':
                info = await jpeg(this.imageBuffer);
                break;
            default:
                break;
        }
    }
}

const filePath = join(__dirname, 'test/image.png');
const instance = new Image(filePath);
instance.exec();
