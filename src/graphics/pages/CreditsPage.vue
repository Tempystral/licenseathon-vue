<script lang="ts" setup>
import data from "@licenseathon-vue/extension/credits.json";
import { ref } from "vue";
import InlineSvg from "vue-inline-svg";

const layoutPath = new URL("../assets/splash.svg", import.meta.url).href;
const layoutRef = ref<SVGElement | null>(null);

const logoPath = new URL("../assets/logo_2025.png", import.meta.url).href;
const logoRef = ref<SVGElement | null>(null);

const credits = ref(data);
const started = ref(false);

function startAnimation() {
  started.value = true;
}
</script>

<template>
  <div class="">
    <InlineSvg
      :src="layoutPath"
      ref="layoutRef"
      id="layout"
      @click="startAnimation"
    />
    <div class="absolute h-[980px] w-full overflow-clip">
      <section class="credits" :class="{ scrolling: started }">
        <div id="logo-container">
          <img :src="logoPath" ref="logoRef" id="logo" />
        </div>

        <dl class="credits-single">
          <dt>Staff</dt>
          <dd v-for="name in credits.staff" :key="name">{{ name }}</dd>
        </dl>

        <dl class="credits-single">
          <dt>Runners</dt>
          <dd v-for="name in credits.runners" :key="name">{{ name }}</dd>
        </dl>

        <h2 class="text-center mt-12">Assets Used</h2>
        <ul class="credits-inline">
          <li v-for="name in credits.resources.fonts" :key="name">
            {{ name }}
          </li>
          <li v-for="name in credits.resources.assets" :key="name">
            {{ name }}
          </li>
        </ul>

        <footer>
          <h3 class="text-2xl text-center mt-20">Stay fresh</h3>
          <h4 class="text-center mt-8">
            &copy;
            <span class="smcaps">MMXXIII</span> Licenseathon
          </h4>
        </footer>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
@use "@licenseathon-vue/sass/transition.scss";
@use "@licenseathon-vue/sass/style.scss";
@use "@licenseathon-vue/sass/color" as theme;

body {
  background-image: url("../assets/background.png");
  margin: unset;
  overflow: hidden;
}

#layout {
  position: absolute;
  z-index: 10;
}

@keyframes moveSlideshow {
  100% {
    -webkit-transform: translateY(-200%);
  }
}

.scrolling {
  animation: moveSlideshow 75s linear 1;
}

.credits {
  position: absolute;
  top: 100%;
  width: 70%;
  z-index: 1;
  color: theme.$lcns-purple;

  flex-basis: 100rem;
  margin: 2rem 0;
  font-size: 1.85rem;
  line-height: 1.2;
  padding: 1rem;

  transform: translate3d(0, 0, 0);

  &-single {
    display: grid;
    grid-template-columns: 1;
    gap: 0 2rem;
    text-align: center;

    dt {
      font-variant-caps: all-small-caps;
      margin-top: 1.7rem;
    }

    dd {
      margin-top: 0.6rem;
    }
  }

  &-double {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 2rem;

    dt {
      text-align: right;
      font-variant-caps: all-small-caps;
      margin-top: 1.7rem;
    }

    dd {
      text-align: left;
      grid-column: 2 / 3;
      margin-top: 0.6rem;
    }

    dt + dd {
      margin-top: 1.7rem;
    }
  }

  &-inline {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1.7rem;

    li {
      padding: 0.3rem 0.8rem;
    }
  }

  &-assets {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1.7rem;

    dl {
      text-align: center;
      padding: 0 2rem 2rem 2rem;
      flex-basis: 30rem;
    }

    dt {
      font-style: italic;
      margin-bottom: 0.5rem;
    }

    dd {
      font-size: 1.5rem;
    }
  }
}

#logo-container {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
  }
}

// #logo-container {
//   height: 100%;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: left;
//   img#logo {
//     padding-left: 5em;
//     max-width: 50%;
//     height: auto;

//     transform: translatey(0px);
//     animation: float 8s ease-in-out infinite;
//   }
// }
</style>
