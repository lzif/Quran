import type { PageServerLoad } from "./$types";
export interface InfoSurat {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: { [key: string]: string };
  ayat: Ayat[];
  suratSelanjutnya: SuratNavigasi | false;
  suratSebelumnya: SuratNavigasi | false;
}

export interface Ayat {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audio: { [key: string]: string };
}

export interface SuratNavigasi {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
}

export const load: PageServerLoad = async ({ params }) => {
  let res = await fetch(`https://equran.id/api/v2/surat/${params.nomor}`);
  let infoSurat: InfoSurat = await res.json();
  return {
    infoSurat: infoSurat.data,
  };
};
