<template>
  <div class="d-flex menu">
    <div id="esquerda" class="sideBar abrir">
      <div class="d-flex justify-content-center">
        <div class="btn-group">
          <button @click="changeLanguage('en')" class="btn btn-light">
            <i class="flag-icon flag-icon-us"></i> {{ $t("english") }}
          </button>
          <button @click="changeLanguage('pt-br')" class="btn btn-light">
            <i class="flag-icon flag-icon-br"></i> {{ $t("portugues") }}
          </button>
        </div>
      </div>
      <div class="icoenMenu iconeDentro">
        <span class="menuH">
          <img src="imagens/menu.png" alt="" />
        </span>
      </div>
      <span class="login100-form-avatar">
        <img src="../assets/me.jpeg" alt="" />
      </span>
      <h1 class="nome text-center">Carlos Alexandre Leutz</h1>
      <h2 class="funcao text-center">{{ $t("fullSystemsAnalyst") }}.</h2>
      <div class="risco"></div>

      <div class="" id="accordionExample">
        <div id="headingOne">
          <div
            class="d-flex 1 btnPrincip"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <div class="btnTitulo">{{ $t("aboutMe") }}</div>
            <svg
              class="iconeBtnTit baixo baixo1 cima bi bi-caret-down"
              width="20px"
              height="20px"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
              />
            </svg>
          </div>
          <div class="traco"></div>
        </div>

        <div
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <router-link to="/" class="linkPages">
            <div class="itensMenu">
              <svg
                class="m-r-5 m-l-20 bi bi-code-square"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"
                />
              </svg>
              {{ $t("skills") }}
            </div>
          </router-link>
          <router-link to="/graduation" class="linkPages">
            <div class="itensMenu">
              <svg
                class="m-r-5 m-l-20 bi bi-patch-check"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"
                />
                <path
                  fill-rule="evenodd"
                  d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                /></svg
              >{{ $t("myGraduation") }}.
            </div>
          </router-link>
        </div>

        <div id="headingTwo">
          <div
            class="d-flex 2 btnPrincip"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <div class="btnTitulo">{{ $t("myProjects") }}.</div>
            <svg
              class="iconeBtnTit baixo baixo2 bi bi-caret-down"
              width="20px"
              height="20px"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
              />
            </svg>
          </div>
          <div class="traco"></div>
        </div>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div>
            <router-link to="/portfolio" class="linkPages">
              <div class="itensMenu">
                <svg
                  class="m-r-5 m-l-20 bi bi-question-octagon"
                  width="25px"
                  height="25px"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"
                  />
                  <path
                    d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
                  />
                </svg>
                {{ $t("myPortfolio") }}
              </div>
            </router-link>
            <router-link to="/projects" class="linkPages">
              <div class="itensMenu">
                <svg
                  class="m-r-5 m-l-20 bi bi-server"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4C14.665 5.474 11.68 6.667 8 6.667 4.318 6.667 1.333 5.473 1.333 4V2.667zm0 3.667v3C1.333 10.805 4.318 12 8 12c3.68 0 6.665-1.193 6.667-2.665V6.334c-.43.32-.931.58-1.458.79C11.81 7.684 9.967 8 8 8c-1.967 0-3.81-.317-5.21-.876a6.508 6.508 0 0 1-1.457-.79zm13.334 5.334c-.43.319-.931.578-1.458.789-1.4.56-3.242.876-5.209.876-1.967 0-3.81-.316-5.21-.876a6.51 6.51 0 0 1-1.457-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z"
                  />
                </svg>
                {{ $t("myLastJobs") }}
              </div>
            </router-link>
          </div>
        </div>

        <div id="headingThree">
          <div
            class="collapsed d-flex 3 btnPrincip"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <div class="btnTitulo">Contact</div>
            <svg
              class="iconeBtnTit baixo baixo3 bi bi-caret-down"
              width="20px"
              height="20px"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
              />
            </svg>
          </div>
          <div class="traco"></div>
        </div>
        <div
          id="collapseThree"
          class="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div>
            <router-link to="/contact" class="linkPages">
              <div class="itensMenu">
                <svg
                  class="m-r-5 m-l-20 bi bi-envelope-fill"
                  width="25px"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                  />
                </svg>
                My Contact
              </div>
            </router-link>
            <!-- <router-link to="/networks" class="linkPages">
              <div class="itensMenu">
                <svg
                  class="m-r-5 m-l-20 bi bi-file-earmark-person"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
                  />
                  <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                  <path
                    fill-rule="evenodd"
                    d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                  <path
                    d="M8 12c4 0 5 1.755 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12z"
                  />
                </svg>
                My social networks
              </div>
            </router-link> -->
          </div>
        </div>
      </div>
    </div>
    <div id="direita">
      <div ng-view></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarOpen: false,
      menuIconInside: true,
      scrollActive: false,
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
      this.menuIconInside = !this.menuIconInside;
    },
    handleScroll() {
      if (window.scrollY > 10) {
        this.scrollActive = true;
      } else {
        this.scrollActive = false;
      }
    },
    handleButtonClick(index) {
      // Lógica para lidar com o clique nos elementos com classes '1', '2' ou '3'
      if (index === 1) {
        // Lógica para o clique no elemento com a classe '1'
      } else if (index === 2) {
        // Lógica para o clique no elemento com a classe '2'
      } else if (index === 3) {
        // Lógica para o clique no elemento com a classe '3'
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped>
.sideBar {
  background-image: linear-gradient(to right, #777, #999);
  width: 300px;
  max-width: 100%;
  height: 100%;
  z-index: 995;
}

a {
  text-decoration: none;
  color: #333;
}

a:hover {
  text-decoration: none;
  color: #333;
}

.linkPages {
  text-decoration: none;
  color: #333;
}

.linkPages:hover {
  text-decoration: none;
  color: #333;
}

.login100-form-avatar {
  display: block;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  border: solid #777 3px;
  background-color: rgb(243, 243, 243);
  margin-top: 15px;
  margin-bottom: 15px;
}

.login100-form-avatar img {
  width: 100%;
}

.nome {
  font-size: 20px;
}

.funcao {
  font-size: 15px;
}

.risco {
  width: 80%;
  margin: auto;
  height: 4px;
  background-color: rgb(243, 243, 243);
  border-radius: 5px;
  margin-bottom: 20px;
}

/*botoes sidebar*/

.btnPrincip {
  background-color: #999;
}

.btnTitulo {
  margin-left: 20px;
  margin-top: 10px;
  width: 230px;
  font-size: 18px;
  color: #333;
  padding-top: 5px;
  padding-bottom: 5px;
}

.iconeBtnTit {
  margin-top: 15px;
}

.itensMenu {
  background-color: rgb(168, 168, 168);
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: solid 1px rgb(138, 138, 138);
}

.baixo {
  transition: 0.5s;
}

.cima {
  transform: rotate(180deg);
  transition: 0.5s;
}

/* icone menu hamburguer*/

.icoenMenu {
  display: none;
}

.menuH {
  position: fixed;
  display: block;
  width: 40px;
  height: 40px;
  overflow: hidden;
  margin: 0 auto;
  top: 5px;
  left: 5px;
}

.menuH img {
  width: 100%;
}

.contWthas {
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 25px;
  right: 25px;
}

.contWthas img {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 768px) {
  .icoenMenu {
    display: block;
  }
  .fexar {
    transition: 0.2s;
    left: -300px !important;
    position: fixed;
  }
  .abrir {
    transition: 0.2s;
    left: 0px !important;
    position: fixed;
  }
}
</style>
