import { promises as fs } from 'fs';
import { defineNuxtPlugin } from 'nuxt/app';

export default defineNuxtPlugin(async (nuxtApp) => {
  const data = await fs.readFile('services/readJson.json', 'utf-8');
  const tree = JSON.parse(data);
  nuxtApp.provide('tree', tree);
});