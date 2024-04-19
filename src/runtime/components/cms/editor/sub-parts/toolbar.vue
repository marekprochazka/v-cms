<script setup lang="ts">
import type { ToolbarOption } from '../types'

const props = defineProps<{
  toolbarOptionsNative: ToolbarOption[] | 'all'
  toolbarOptionsCustom: { handler: () => void, classes: string[], text?: string }[]
  toolbarExtraClasses?: string[]
}>()

const toolbarOptionsNative = props.toolbarOptionsNative
const toolbarOptionsCustom = props.toolbarOptionsCustom
const toolbarExtraClasses = props.toolbarExtraClasses
</script>

<template>
  <div
    id="cms--toolbar"
    class="cms--toolbar"
  >
    <select
      v-if="toolbarOptionsNative.includes('ql-font')"
      class="ql-font"
      :class="toolbarExtraClasses"
    />
    <select
      v-if="toolbarOptionsNative.includes('ql-size')"
      class="ql-size"
      :class="toolbarExtraClasses"
    />
    <button
      v-if="toolbarOptionsNative.includes('ql-bold')"
      class="ql-bold"
      :class="toolbarExtraClasses"
    />
    <button
      v-if="toolbarOptionsNative.includes('ql-italic')"
      class="ql-italic"
      :class="toolbarExtraClasses"
    />
    <button
      v-if="toolbarOptionsNative.includes('ql-underline')"
      class="ql-underline"
      :class="toolbarExtraClasses"
    />
    <button
      v-if="toolbarOptionsNative.includes('ql-strike')"
      class="ql-strike"
      :class="toolbarExtraClasses"
    />
    <select
      v-if="toolbarOptionsNative.includes('ql-color')"
      class="ql-color"
      :class="toolbarExtraClasses"
    />
    <select
      v-if="toolbarOptionsNative.includes('ql-background')"
      class="ql-background"
      :class="toolbarExtraClasses"
    />
    <button
      v-if="toolbarOptionsNative.includes('ql-script')"
      class="ql-script"
      :class="toolbarExtraClasses"
      value="sub"
    />
    <button
      v-if="toolbarOptionsNative.includes('ql-script')"
      class="ql-script"
      :class="toolbarExtraClasses"
      value="super"
    />
    <button
      v-if="toolbarOptionsNative.includes('ql-header')"
      class="ql-header"
      :class="toolbarExtraClasses"
      value="1"
    />
    <button
      v-if="toolbarOptionsNative.includes('ql-header')"
      class="ql-header"
      :class="toolbarExtraClasses"
      value="2"
    />
    <button
      v-if="toolbarOptionsNative.includes('ql-blockquote')"
      class="ql-blockquote"
      :class="toolbarExtraClasses"
    />
    <button
      v-if="toolbarOptionsNative.includes('ql-code-block')"
      class="ql-code-block"
      :class="toolbarExtraClasses"
    />
    <button
      v-if="toolbarOptionsNative.includes('ql-list')"
      class="ql-list"
      :class="toolbarExtraClasses"
      value="ordered"
    />
    <button
      v-if="toolbarOptionsNative.includes('ql-list')"
      class="ql-list"
      :class="toolbarExtraClasses"
      value="bullet"
    />
    <button
      v-if="toolbarOptionsNative.includes('ql-indent')"
      class="ql-indent"
      :class="toolbarExtraClasses"
      value="-1"
    />
    <button
      v-if="toolbarOptionsNative.includes('ql-indent')"
      class="ql-indent"
      :class="toolbarExtraClasses"
      value="+1"
    />
    <button
      v-if="toolbarOptionsNative.includes('ql-direction')"
      class="ql-direction"
      :class="toolbarExtraClasses"
      value="rtl"
    />
    <select
      v-if="toolbarOptionsNative.includes('ql-align')"
      class="ql-align"
      :class="toolbarExtraClasses"
    />
    <button
      v-if="toolbarOptionsNative.includes('ql-link')"
      class="ql-link"
      :class="toolbarExtraClasses"
    />
    <button
      v-if="toolbarOptionsNative.includes('ql-formula')"
      class="ql-formula"
      :class="toolbarExtraClasses"
    />
    <button
      v-if="toolbarOptionsNative.includes('ql-clean')"
      class="ql-clean"
      :class="toolbarExtraClasses"
    />
    <button
      v-for="(option, index) in toolbarOptionsCustom"
      :key="index"
      :class="[...toolbarExtraClasses, ...option.classes]"
      @click="option.handler"
    >
      {{ option.text }}
    </button>
  </div>
</template>
