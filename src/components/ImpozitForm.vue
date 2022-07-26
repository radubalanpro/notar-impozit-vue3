<template>
  <div id="impozit" class="card">
    <div class="card-header">Card header</div>

    <div class="card-body">
      <form @keydown.enter="dontSubmitForm">
        <!-- <Datepicker v-model="date" /> -->

        <!-- nume si prenume -->
        <label for="numepren" class="form-label">Nume</label>
        <div class="mb-3">
          <input
            id="numepren"
            v-model="form.nume"
            type="text"
            class="form-control"
            aria-describedby="numeHelp"
            v-on:keyup.enter="focusNrChitanta"
          />
          <div id="numeHelp" class="form-text">Nume si prenume</div>
        </div>

        <!-- numar chitanta -->
        <label for="numarchitanta" class="form-label">Nr. chitanta</label>
        <div class="mb-3">
          <input
            id="numarchitanta"
            v-model="form.nrchit"
            type="text"
            class="form-control"
            aria-describedby="chitHelp"
            v-on:keyup.enter="focusSuma"
            @focus.native="$event.target.select()"
          />
          <div id="chitHelp" class="form-text">
            Numarul chitantei de impozit
          </div>
        </div>

        <!-- suma -->
        <label for="sumachitanta" class="form-label">Suma</label>
        <div class="mb-3">
          <input
            id="sumachitanta"
            v-model="form.suma"
            inputmode="decimal"
            type="number"
            step="0.01"
            min="0"
            class="form-control"
            aria-describedby="sumachitHelp"
            v-on:keyup.enter="focusLocalitateImpozit"
            @focus.native="$event.target.select()"
          />
          <div id="sumachitHelp" class="form-text">Suma platita</div>
        </div>

        <!-- selector locaitati -->
        <div class="mb-3">
          <select
            v-model="form.localitateSelectata"
            class="form-control"
            name="localitateImpozit"
            id="localitateImpozit"
            aria-describedby="localitateHelp"
            v-on:change="onChangeMethod"
          >
            <option
              v-model="localitati"
              v-bind:key="localitate.numeLocalitate"
              v-bind:value="localitate.idLocalitate"
              v-for="localitate in localitati"
            >
              {{ localitate.numeLocalitate }}
            </option>
            >
          </select>
          <div id="localitateHelp" class="form-text">
            Localitatea unde se plateste impozitul
          </div>
          <div class="mt-3">
            Selectie curenta: <strong> {{ form.localitateSelectata }} </strong>
          </div>
        </div>

        <!-- cod fiscal -->
        <label for="codfiscal" class="form-label">CUI</label>
        <div class="mb-3">
          <input
            id="codfiscal"
            v-model="form.cui"
            type="text"
            class="form-control"
            aria-describedby="cuiHelp"
            disabled
          />
          <div id="cuiHelp" class="form-text">CUI localitate selectata</div>
        </div>

        <div class="mb-3 text-center">
          <button class="btn btn-dark text-center" v-on:click="salvare">
            Salvare date
          </button>
        </div>
        <!-- <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button> -->
      </form>
    </div>
    <div class="card-footer text-muted">Card footer</div>
  </div>
</template>

<script setup>
// ce e aici se executa la fiecare instanta a component-ului
// import { ref } from 'vue';
// import Datepicker from '@vuepic/vue-datepicker';
// import '@vuepic/vue-datepicker/dist/main.css';
// const date = ref();
</script>

<script>
// ce e aici se executa o singura data
export default {
  name: 'ImpozitForm',
  // components: {
  //   Datepicker,
  // },
  setup() {
    // ce e aici se executa la fiecare instanta a component-ului, doar ca aici spre deosebire de script setup trebuie sa avem si return si altele
    // return {}
  },
  data() {
    return {
      form: {
        datacurenta: new Date(),
        nume: '',
        nrchit: '',
        suma: '0.00',
        cui: '111111111',
        localitateSelectata: 1,
      },
      localitati: [
        { idLocalitate: '1', numeLocalitate: 'TECUCI' },
        { idLocalitate: '2', numeLocalitate: 'Cudalbi' },
        { idLocalitate: '3', numeLocalitate: 'Corod', disabled: true },
      ],
    };
  },
  methods: {
    salvare(e) {
      e.preventDefault();
      if (!this.form.nume) {
        alert('Introduceti numele !!!');
        return;
      }
      const NewInformation = {
        id: Math.floor(Math.random() * 100000),
        name: this.name,
        age: this.age,
        reminder: this.reminder,
      };
      this.$emit('add-information', NewInformation);
      console.log(this.form.nume);
      console.log(this.form.nrchit);
      console.log(this.form.localitateSelectata);
      alert(JSON.stringify(this.form));
      (this.name = ' '), (this.age = ' ');
    },

    focusNrChitanta: function (e) {
      e.preventDefault();
      document.getElementById('numarchitanta').focus();
    },

    focusSuma: function (e) {
      e.preventDefault();
      document.getElementById('sumachitanta').focus();
    },

    focusLocalitateImpozit: function (e) {
      e.preventDefault();
      document.getElementById('localitateImpozit').focus();
    },

    dontSubmitForm(e) {
      e.preventDefault();
      console.log('S-a apasat enter dar nu se face submit');
      return false;
    },

    onChangeMethod(e) {
      console.log('S-a schimbat valoarea');
      var valoare = parseInt(e.target.value);
      var name = e.target.options[e.target.options.selectedIndex].text;
      console.log(valoare, name);
      switch (valoare) {
        case 1:
          this.form.cui = 111111111;
          console.log(event.target.value);
          break;
        case 2:
          this.form.cui = 222222222;
          console.log(event.target.value);
          break;
        case 3:
          this.form.cui = 333333333;
          console.log(event.target.value);
          break;
        default:
          this.form.cui = 111111111;
      }
    },
  },
};
</script>

<style scoped>
#impozit {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
