export function imageToFile(dataURL: string, fileName: string) {
	const byteString = atob(dataURL.split(',')[1]);
	const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
	const imageType = dataURL.split(';')[0].split('/').pop();
	const ab = new ArrayBuffer(byteString.length);
	const ia = new Uint8Array(ab);

	for (let i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}

	const blob = new Blob([ab], { type: mimeString });

	return new File([blob], `${fileName}.${imageType}`, { type: `image/${imageType}` });
}