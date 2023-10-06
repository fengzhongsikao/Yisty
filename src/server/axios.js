export const axios={
    get(url){
        return new Promise((resolve) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4 && xhr.status == 200) {
                     resolve(JSON.parse(JSON.stringify(xhr.responseText)));
                }
            };
            xhr.send(null)
        })
    }
};