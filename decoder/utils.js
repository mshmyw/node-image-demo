const is_IncludeAlpha = true;
const formatColor = (pixels, includeAlpha) => { 
    const pixelsLen = pixels.length;
    const skipStep = includeAlpha === is_IncludeAlpha ? 4 : 3;
    let rgbaList = [];
    for (let i = 0; i < pixelsLen; i += skipStep) {
        rgbaList.push([
            pixels.readUInt8(i),
            pixels.readUInt8(i+1),
            pixels.readUInt8(i + 2),
            includeAlpha === is_IncludeAlpha ? pixels.readUInt8(i+3): 255
        ]);
    }
    return rgbaList;
};