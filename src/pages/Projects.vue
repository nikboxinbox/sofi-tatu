<template>
  <q-page>
    <div class="p-4 text-3xl font-bold ">
      <div class=" tw-- pb-4 text-3xl font-bold">
        Наши работы
      </div>
      <div class="project-widget-list space-y-5">
        <ProjectWidget />
      </div>
    </div>
  </q-page>
</template>

<script>
import ProjectWidget from "../components/ProjectWidjet";
export default {
  components: {ProjectWidget},
  name: 'ProgectsPage',
}
</script>
