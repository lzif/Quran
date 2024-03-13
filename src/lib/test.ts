import { writeJsonSync } from "https://deno.land/x/jsonfile/mod.ts";

let url = "https://equran.id/api/v2/surat";


fetch(url).then((res) => res.json())
.then((data) =>{ 
writeJsonSync("./daftarSurat.json", data.data, { spaces: 2 });
})
