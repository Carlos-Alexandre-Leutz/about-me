<template>
  <section>
    <h2 class="mb-5">{{ $t("mySocialNetworks") }}</h2>

    <ul class="list-inline dev-icons">
      <li class="list-inline-item">
        <a
          target="blank"
          href="https://www.linkedin.com/in/carlos-alexandre-leutz-1b1516185/"
          ><i class="fab fa-linkedin-in"></i
        ></a>
      </li>

      <li class="list-inline-item">
        <a target="blank" href="https://github.com/Carlos-Alexandre-Leutz">
          <i class="fab fa-github"></i>
        </a>
      </li>
      <li class="list-inline-item">
        <a
          target="blank"
          href="https://www.youtube.com/channel/UCd4MhWhSeqK1Ga4OKOPSxSw?view_as=subscriber"
        >
          <i class="fab fa-youtube"></i>
        </a>
      </li>

      <br />
      <li class="list-inline-item">
        <a target="blank" href="malito:leutzelutz@gmail.com">
          <i class="fas fa-envelope-open"></i
          ><span style="font-size: 15px !important; font-weight: 500"
            >Leutzeleutz@gmail.com</span
          ></a
        >
      </li>
      <br />
      <li class="list-inline-item">
        <a target="blank" href="tel:+5547999333485">
          <i class="fas fa-phone"></i
          ><span style="font-size: 15px !important; font-weight: 500"
            >+55(47)99933-3485</span
          >
        </a>
      </li>
      <br />
      <li class="list-inline-item">
        <a
          href="https://wa.me/5547999333485"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-whatsapp"></i>
        </a>
      </li>
    </ul>
  </section>
</template>
<style>
ul li {
  text-decoration: none;
  color: #333 !important;
}

ul li :hover {
  text-decoration: none;
  color: #333;
}
</style>
