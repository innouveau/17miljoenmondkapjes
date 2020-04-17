import Vue from "vue";
import Router from "vue-router";

import home from '@/components/views/home';
import pattern from '@/components/views/pattern';
import instructions from '@/components/views/instructions';
import order from '@/components/views/order';
import proof from '@/components/views/proof/proof';
import faq from '@/components/views/faq';
import privacy from '@/components/views/privacy';
import confirmationSewer from '@/components/views/confirmations/confirmation-sewer';
import map from '@/components/views/map/map';

const routes = [
    {
        path: "/",
        name: "home",
        component: home
    }, {
        path: "/patroon",
        name: "pattern",
        component: pattern
    }, {
        path: "/instructies-voor-dragen",
        name: "instructions",
        component: instructions
    }, {
        path: "/bestellen",
        name: "order",
        component: order
    }, {
        path: "/wetenschap-over-mondkapjes",
        name: "proof",
        component: proof
    }, {
        path: "/veelgestelde-vragen",
        name: "faq",
        component: faq
    }, {
        path: "/privacy-verklaring",
        name: "privacy",
        component: privacy
    }, {
        path: "/bedankt-voor-aanmelding-naaier",
        name: "confirmation-sewer",
        component: confirmationSewer
    }, {
        path: "/kaart",
        name: "map",
        component: map
    }
];

Vue.use(Router);

const router = new Router({routes});

export default router;
