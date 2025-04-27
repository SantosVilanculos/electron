<script setup lang="ts">
import { File, FileExport, Rotate } from '@/views/components/undefined';
import { Button, Checkbox, Input, Radio, Select } from '@/views/components/ui';
import { onMounted, ref } from 'vue';
import { useSettingsStore } from '@/stores/settings';

const localFonts = ref<string[]>([]);

const { electron } = window;
const { $state } = useSettingsStore();

onMounted(async () => {
  const { state } = await navigator.permissions.query({ name: 'local-fonts' as PermissionName });
  if (state === 'granted') {
    const _ = await window.queryLocalFonts();
    localFonts.value = [...new Set(_.map(({ family }) => family))];
  }

  document.fonts.ready.then(value => {
    const _ = Array.from(value).map(({ family }) => family);
    localFonts.value = [...new Set(localFonts.value.concat(_).sort())];
  });
});
</script>

<template>
  <div class="space-y-5 py-4">
    <!-- font_sans -->
    <div class="mx-auto grid min-h-12 w-full max-w-2xl grid-cols-[1fr_16rem_1fr] items-center gap-x-6">
      <div class="text-right">Sans-serif font</div>
      <Select v-model="$state.font_family.sans_serif">
        <option value=""></option>
        <option v-for="(_, index) in localFonts" v-bind:key="index" v-bind:value="_" v-text="_"></option>
      </Select>
      <div></div>
    </div>

    <!-- font_serif -->
    <div class="mx-auto grid min-h-12 w-full max-w-2xl grid-cols-[1fr_16rem_1fr] items-center gap-x-6">
      <div class="text-right">Monospace font</div>
      <Select v-model="$state.font_family.monospace">
        <option value=""></option>
        <option v-for="(_, index) in localFonts" v-bind:key="index" v-bind:value="_" v-text="_"></option>
      </Select>
      <div></div>
    </div>

    <!-- font_size -->
    <div class="mx-auto grid min-h-12 w-full max-w-2xl grid-cols-[1fr_16rem_1fr] items-center gap-x-6">
      <div class="text-right">Font size</div>
      <Input v-model="$state.font_size" type="number" min="0" />
      <div></div>
    </div>

    <hr class="border-zinc-300 dark:border-white/20" />

    <!-- always_on_top -->
    <div class="mx-auto grid min-h-12 w-full max-w-2xl grid-cols-[1fr_16rem_1fr] items-center gap-x-6">
      <div class="text-right">Window</div>
      <div class="flex items-center gap-x-3">
        <Checkbox v-model="$state.always_on_top" id="always_on_top" />
        <label for="always_on_top">Always on top</label>
      </div>
      <div></div>
    </div>

    <hr class="border-zinc-300 dark:border-white/20" />

    <!-- theme_source -->
    <div class="mx-auto grid min-h-12 w-full max-w-2xl grid-cols-[1fr_16rem_1fr] items-center gap-x-6">
      <div class="text-right">Theme</div>
      <div class="space-y-1.5">
        <div
          v-for="({ label, value }, index) in [
            { label: 'System', value: 'system' },
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' }
          ]"
          v-bind:key="index"
          class="flex items-center gap-x-3"
        >
          <Radio v-model="$state.theme_source" name="color-scheme" v-bind:id="value" v-bind:value="value" />
          <label v-bind:for="value" v-text="label"></label>
        </div>
      </div>
      <div></div>
    </div>

    <hr class="border-zinc-300 dark:border-white/20" />

    <div class="mx-auto grid min-h-12 w-full max-w-2xl grid-cols-[1fr_16rem_1fr] items-center gap-x-6">
      <div></div>
      <div class="grid grid-cols-3 gap-x-3">
        <Button v-on:click="electron.settings.clear" aria-label="" title="">
          <Rotate class="-rotate-180" />
        </Button>
        <Button v-on:click="electron.settings.openInEditor" aria-label="" title="">
          <File />
        </Button>
        <Button aria-label="" title="" disabled>
          <FileExport />
        </Button>
      </div>
      <div></div>
    </div>
  </div>
</template>
