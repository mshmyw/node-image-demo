import { createWriteStream } from "fs";
import http from "http";
import { tmpdir } from 'os';
import { join, resolve } from "path";

// 下载图片到本地
export const download = async (url) => { 
    const fileName = `image_${Date.now()}_${Math.random()}.cache`;
    const target = join(tmpdir, fileName);
    const file = createWriteStream(target);
    return new Promise((resolve, reject) => { 
        http.get(url, (res) => {
            file.on('finish', () => {
                resolve(target);
            });
            res.on('data', (data) => { 
                file.write(data);
            });
            res.on('end', () => { 
                file.end();                
            });
        });
    });
};