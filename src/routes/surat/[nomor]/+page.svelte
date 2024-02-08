<script lang="ts">
  import { fly, slide } from "svelte/transition";
  import type { PageServerData } from "./$types";
  import type { InfoSurat } from "./+page.server";
  export let data: PageServerData;
  const infoSurat: InfoSurat = data.infoSurat;
  const ayat = infoSurat.ayat;

  let deskripsi: boolean = false;

  let selectedOption = "";

  const handleSelectChange = () => {
    window.location.hash = `#${selectedOption}`;
  };
</script>

<div style="width:100%;height:100%;overflow-x:hidden">
  <div
    in:fly={{ x: -400 }}
    out:fly={{ x: 400 }}
    class="p-2 rounded-md col-start-1 lg:col-start-2 col-span-full p-4 max-h-[calc(100vh-11rem)] flex flex-col"
  >
    <a href="/" class="p-2 rounded bg-blue-200 mb-2">Kembali</a>
    <div class="p-2 rounded bg-blue-100 my-2 flex flex-row">
      <div class="flex-1">
        <h1 class="text-3xl font-bold">
          {infoSurat.nomor}. {infoSurat.namaLatin}
        </h1>
        <p>
          {infoSurat.arti} - {infoSurat.jumlahAyat} ayat - {infoSurat.tempatTurun}
        </p>
      </div>
      <div class="arab flex justify-center items-center text-2xl">
        <p>{infoSurat.nama}</p>
      </div>
    </div>
    <div class="p-2">
      <h2>
        <button on:click={() => (deskripsi = !deskripsi)}>
          Deskripsi (klik untuk detail)
        </button>
      </h2>
      {#if deskripsi}
        <p transition:slide>{@html infoSurat.deskripsi}</p>
      {/if}
    </div>
    <select
      class="bg-blue-200 rounded text-blue-900 p-2"
      bind:value={selectedOption}
      on:change={handleSelectChange}
    >
      <option value="" disabled selected>Pilih Ayat</option>
      {#each ayat as item}
        <option value={item.nomorAyat}>Ayat {item.nomorAyat}</option>
      {/each}
    </select>
    <ol
      class="flex flex-col gap-2 scroll-pt-2 overflow-y-auto scroll-smooth mt-2 p-2 bg-blue-100"
    >
      {#each ayat as item}
        <li id={item.nomorAyat.toString()} class="p-2 rounded bg-blue-200">
          <p class="arab text-right text-3xl py-3 px-2 leading-loose">
            {item.teksArab}
          </p>
          <p class="font-bold">{item.nomorAyat}. {item.teksLatin}</p>
          <p>Artinya: {item.teksIndonesia}</p>
        </li>
      {/each}
    </ol>
  </div>
</div>
