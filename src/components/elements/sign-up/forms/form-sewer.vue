<script>
    import api from '@/api';
    import formMixin from '@/mixins/form-mixin';

    export default {
        name: 'form-sewer',
        components: {},
        props: {},
        mixins: [formMixin],
        data() {
            return {
                sewer: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    street: '',
                    zipcode: '',
                    city: '',
                    phone: '',
                    scope_id: 1,
                    someoneElse: false,
                    someoneElseDescription: ''
                },
                agreesWithPrivacy: false
            }
        },
        computed: {
            isComplete() {
                return this.agreesWithPrivacy && this.isValidEmail && this.haveValue(this.sewer, ['firstname', 'firstname', 'phone', 'street', 'zipcode', 'city']);
            },
            background() {
                return 'assets/img/patterns/1.png';
            },
            isValidEmail() {
                return this.validateEmail(this.sewer.email);
            }
        },
        methods: {
            submit() {
                if (this.isComplete) {
                    api.register(this.sewer).then(()=>{
                        this.$store.commit('modal/set', {message: 'Bedankt voor je aanmelding!', warning: false});
                    });
                } else {
                    if (!this.agreesWithPrivacy) {
                        this.$store.commit('modal/set', {message: 'Je moet akkoord gaan met de privacy verklaring.', warning: true});
                    } else if (!this.isValidEmail) {
                        this.$store.commit('modal/set', {message: 'Het emailadres is niet in orde.', warning: true});
                    } else {
                        this.$store.commit('modal/set', {message: 'Het formulier is nog niet compleet.', warning: true});
                    }
                }
            }
        }
    }
</script>


<template>
    <div
        :style="{'background-image': 'url(' + background + ')'}"
        class="form-sewer form">
        <a name="form-sewer"></a>
        <div class="form__header">
            Ja, ik wil helpen door mondkapjes te naaien!
        </div>

        <div class="form__content">
            <div class="form__section">
                <div class="form__row form__row--multiple">
                    <input
                        v-model="sewer.firstname"
                        class="form-input--50"
                        name="name"
                        placeholder="Voornaam"/>
                    <input
                        v-model="sewer.lastname"
                        class="form-input--50"
                        name="name"
                        placeholder="Achternaam"/>
                </div>
                <div class="form__row">
                    <input
                        type="email"
                        name="email"
                            v-model="sewer.email"
                            placeholder="Email"/>
                </div>
                <div class="form__row">
                    <input
                        name="telephone"
                        v-model="sewer.phone"
                        placeholder="Telefoon"/>
                </div>
                <div class="form__row">
                    <input
                        name="address"
                        v-model="sewer.street"
                        placeholder="Adres"/>
                </div>

                <div class="form__row form__row--multiple">
                    <input
                        class="form-input--25"
                        name="postcode"
                        v-model="sewer.zipcode"
                        placeholder="Postcode"/>

                    <input
                            class="form-input--75"
                            name="city"
                            v-model="sewer.city"
                            placeholder="Woonplaats"/>
                </div>
            </div>

<!--            <div class="form__section form__section&#45;&#45;white">-->
<!--                <div class="form__row">-->
<!--                    <input-->
<!--                            class="form-input&#45;&#45;25"-->
<!--                            v-model="sewer.someoneElse"-->
<!--                            type="checkbox"-->
<!--                            placeholder="Postcode"/>-->

<!--                    Ik meld iemand anders aan (moeder / tante / buurvrouw)-->
<!--                </div>-->
<!--                <div-->
<!--                    v-if="sewer.someoneElse"-->
<!--                    class="form__row">-->
<!--                    <input-->
<!--                            v-model="sewer.someoneElseDescription"-->
<!--                            placeholder="Naam van / relatie tot deze persoon"/>-->
<!--                </div>-->
<!--            </div>-->

            <div class="form__section form__section--white">
                <div class="form__row">
                    <input
                            class="form-input--25"
                            v-model="agreesWithPrivacy"
                            type="checkbox"
                            placeholder="Postcode"/>

                    Ik ga akkoord met &nbsp;
                    <router-link :to="{name: 'privacy'}" target="_blank">hoe er met mijn gegevens wordt omgegaan</router-link>.
                </div>
            </div>

            <div class="form__section">
                <div class="form__row form__row--footer">
                    <div
                        @click="submit()"
                        :class="{'form__button--inactive': !isComplete}"
                        class="form__button">
                        Ik meld me aan
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .form-sewer {

    }
</style>