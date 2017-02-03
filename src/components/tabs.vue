<template>
  <div class="row">
    <div class="col s12">
      <ul class="tabs z-depth-1">
        <li class="tab col s4">
          <a href="#!" :class="{'active': tabEstimate}" @click="showEstimate">
            <i class="tiny material-icons">spellcheck</i>
          </a>
        </li>
        <li class="tab col s4">
          <a href="#!" :class="{'active': tabPay}" @click="showPay">
            <i class="tiny material-icons">payment</i>
          </a>
        </li>
        <li class="tab col s4">
          <a href="#!" :class="{'active': tabHistory}" @click="showHistory">
            <i class="tiny material-icons">insert_chart</i>
          </a>
        </li>
      </ul>
    </div>
    <div class="col s12" v-if="tabEstimate">
      <form>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">trending_up</i>
            <input
                    type="text"
                    :id="'estimate_' + house.id"
                    ref="estimate"
                    v-bind:value="estimate"
                    v-on:input="updateEstimate($event.target.value)">
            <label :for="'estimate_' + house.id">Показания</label>
          </div>
          <div class="input-field col s12">
            <a class="waves-effect waves-light btn right">Передать</a>
          </div>
        </div>
      </form>
    </div>
    <div class="col s12" v-if="tabPay">
      <form>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">trending_up</i>
            <input
                    type="text"
                    :id="'estimate_' + house.id"
                    ref="estimate"
                    v-bind:value="estimate"
                    v-on:input="updateEstimate($event.target.value)">
            <label :for="'estimate_' + house.id">Показания</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">payment</i>
            <input
                    type="text"
                    :id="'price_' + house.id"
                    ref="price"
                    v-bind:value="price"
                    v-on:input="updatePrice($event.target.value)">
            <label :for="'estimate_' + house.id">Сумма</label>
          </div>
          <div class="input-field col s12">
            <a class="waves-effect waves-light btn right">Оплатить</a>
          </div>
        </div>
      </form>
    </div>
    <div class="col s12" v-if="tabHistory">
      <p>History</p>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    props: ['house'],
    data () {
      return {
        tabEstimate: true,
        tabPay: false,
        tabHistory: false
      }
    },
    methods: {
      showEstimate () {
        this.tabEstimate = true
        this.tabPay = false
        this.tabHistory = false
      },
      showPay () {
        this.tabEstimate = false
        this.tabPay = true
        this.tabHistory = false
      },
      showHistory () {
        this.tabEstimate = false
        this.tabPay = false
        this.tabHistory = true
      }
    }
  }

</script>