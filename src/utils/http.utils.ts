
export function GetParams(obj: {}): string {
    const keys = Object.keys(obj);
    let params = '';

    keys.forEach((key, index) => {
        if(index > 0) {
            params += '&';
        };

        params += `${key}=${obj[key]}`;
    })

    return params;
}