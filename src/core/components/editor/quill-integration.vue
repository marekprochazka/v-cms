<script setup lang="ts">
import "quill/dist/quill.snow.css";

import Quill from "quill/core";

import Toolbar from "quill/modules/toolbar";
import Snow from "quill/themes/snow";

import Bold from "quill/formats/bold";
import Italic from "quill/formats/italic";
import Header from "quill/formats/header";
import Underline from "quill/formats/underline";
import CodeBlock from "quill/formats/code";
import Image from "quill/formats/image";
import {AlignStyle} from "quill/formats/align";


import {onMounted} from "vue";

const model = defineModel<string>()

Quill.register({
  "modules/toolbar": Toolbar,
  "themes/snow": Snow,
  "formats/bold": Bold,
  "formats/italic": Italic,
  "formats/header": Header,
  "formats/underline": Underline,
  "formats/code-block": CodeBlock,
  "formats/image": Image,
  "formats/align": AlignStyle,
});

onMounted(() => {
  const quill = new Quill('#editor', {
    modules: {
      toolbar: [
        [{header: [1, 2, false]}],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block'],
        [{align: ['', 'center', 'right', 'justify']}],
      ],
    },
    placeholder: 'Compose an epic...',
    theme: 'snow', // or 'bubble'
  });
  quill.on('text-change', () => {
    model.value = quill.root.innerHTML;
  });
});
</script>

<template>
  <div id="toolbar"/>
  <div id="editor"/>
</template>


