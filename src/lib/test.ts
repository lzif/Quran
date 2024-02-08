let url = "https://api.quran.com/api/v4/verses/by_chapter/1?words=true&word_fields=text_uthmani,audio_url&fields=text_uthmani&language=id&translations=id"

fetch(url).then(res=>res.json()).then(data=>console.log(JSON.stringify(data,null,2)))
