<template>
  <section class="resume-section">
    <div class="resume-section-content">
      <h2 class="mb-5">{{ $t("education") }}</h2>
      <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="flex-grow-1">
          <h3 class="mb-0">{{ $t("university") }} Estacio de Sá</h3>
          <div class="subheading mb-3">
            {{ $t("firstUniversity") }}
          </div>
        </div>
        <div class="flex-shrink-0">
          <span class="text-primary">2019 - 2022</span>
        </div>
      </div>
      <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="flex-grow-1">
          <h3 class="mb-0">{{ $t("university") }} Descomplica</h3>
          <div class="subheading mb-3">
            {{ $t("secondUniversity") }}
          </div>
          <div class="icone-Donw">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 16 16"
              class="bi bi-arrow-down-circle mt-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                fill-rule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
              />
            </svg>
          </div>
        </div>
        <div class="flex-shrink-0">
          <span class="text-primary">2022 - 2023</span>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.icone-Donw {
  width: 50px;
  margin: auto;
}
</style>
