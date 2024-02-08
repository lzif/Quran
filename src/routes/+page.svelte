<script lang="ts">
  import { fly } from "svelte/transition";

  import type { PageData } from "./$types";
  export let data: PageData;

  let daftarSurat = data.daftarSurat;
  let searchTerm: string = "";
  $: filteredData = daftarSurat.filter((item) =>
    item.namaLatin.toLowerCase().includes(searchTerm.toLowerCase()),
  );
</script>

<div style="width:100%;height:100%;overflow-x:hidden">
  <div in:fly={{ x: -400 }} out:fly={{ x: 400 }}>
    <div class="p-3 w-full flex">
      <input
        type="text"
        class="flex-1 rounded-lg p-2 border-none"
        placeholder="Cari Surat ..."
        bind:value={searchTerm}
      />
    </div>
    <ol class="p-3 flex flex-col gap-2">
      {#each filteredData as item (item.nomor)}
        <a href="/surat/{item.nomor}">
          <li class="rounded-xl p-2 bg-blue-100 flex flex-row">
            <div class="flex-1">
              <h1 class="text-xl font-bold">
                {item.nomor}. {item.namaLatin}
              </h1>
              <p>{item.arti} - {item.jumlahAyat} Ayat - {item.tempatTurun}</p>
            </div>
            <div class="arab p-3 text-center text-2xl">{item.nama}</div>
          </li>
        </a>
      {/each}
    </ol>
  </div>
</div>
