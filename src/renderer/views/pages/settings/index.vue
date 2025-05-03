<script setup lang="ts">
import { File, FileExport, Rotate } from '@/views/components/undefined';
import { Button, Checkbox, Input, Radio, Select } from '@/views/components/ui';
import { onMounted, ref } from 'vue';
import { useSettingsStore } from '@/stores/settings';
import Field from '@/views/components/field.vue';

const localFonts = ref<string[]>([]);

const { electron } = window;
const { $state } = useSettingsStore();

onMounted(async () => {
  const { state } = await navigator.permissions.query({ name: 'local-fonts' as PermissionName });
  if (state === 'granted') {
    const result = await window.queryLocalFonts();
    localFonts.value = [...new Set(result.map(({ family }) => family))];
  }

  document.fonts.ready.then(value => {
    const result = Array.from(value).map(({ family }) => family);
    localFonts.value = [...new Set(localFonts.value.concat(result).sort())];
  });
});
</script>

<template>
  <div class="space-y-5 py-4">
    <!-- font_sans -->
    <Field caption="Sans-serif font">
      <Select v-model="$state.font_family.sans_serif">
        <option value=""></option>
        <option v-for="(_, index) in localFonts" v-bind:key="index" v-bind:value="_" v-text="_"></option>
      </Select>
    </Field>

    <!-- font_serif -->
    <Field caption="Monospace font">
      <Select v-model="$state.font_family.monospace">
        <option value=""></option>
        <option v-for="(_, index) in localFonts" v-bind:key="index" v-bind:value="_" v-text="_"></option>
      </Select>
    </Field>

    <!-- font_size -->
    <Field caption="Font size">
      <Input v-model="$state.font_size" type="number" min="0" />
    </Field>

    <hr class="border-zinc-300 dark:border-white/20" />

    <!-- always_on_top -->
    <Field caption="Window">
      <div class="flex items-center gap-x-3">
        <Checkbox v-model="$state.always_on_top" id="always_on_top" />
        <label for="always_on_top">Always on top</label>
      </div>
    </Field>

    <hr class="border-zinc-300 dark:border-white/20" />

    <!-- theme_source -->
    <Field caption="Theme">
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
    </Field>

    <hr class="border-zinc-300 dark:border-white/20" />

    <Field>
      <div class="grid grid-cols-3 gap-x-3">
        <Button v-on:click="electron.store.clear" aria-label="" title="Reset">
          <Rotate class="-rotate-180" />
        </Button>
        <Button v-on:click="electron.store.openInEditor" aria-label="" title="Open">
          <File />
        </Button>
        <Button v-on:click="electron.store.export" aria-label="" title="Export">
          <FileExport />
        </Button>
      </div>
    </Field>
  </div>
</template>
