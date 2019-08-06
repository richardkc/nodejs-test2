myButton.addEventListener('click',(e) => {
    let request = new XMLHttpRequest()
    request.open('get','http://rose.com:8001/xxx')
    request.send()
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            console.log('请求响应接收完毕')
            if(request.status >= 200 && request.status <300){
                console.log('请求成功')
                console.log(typeof request.responseText)
                console.log(request.responseText)
                let string = request.responseText
                let object = window.JSON.parse(string)
                console.log(typeof object)
                console.log(object)
                /*let parser = new DOMParser();
                let xmlDoc = parser.parseFromString(request.responseText,"text/xml")
                let title = xmlDoc.getElementsByTagName('heading')[0].textContent
                console.log(title)
                let content = xmlDoc.getElementsByTagName('body')[0].textContent
                console.log(content)*/
            }else if(request.status >= 400){
                console.log('请求失败')
            }
        }
    }
})