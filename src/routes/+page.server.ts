import type { PageServerLoad } from "./$types";
import daftarSuratJson from "$lib/data/daftarSurat.json";

type InfoSurat = {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: {
    "01": string;
    "02": string;
    "03": string;
    "04": string;
    "05": string;
  };
};

export const load: PageServerLoad = async () => {
  const daftarSurat: InfoSurat[] = daftarSuratJson;
  return { daftarSurat };
};
