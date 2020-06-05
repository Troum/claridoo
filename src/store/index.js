import Vue from "vue"
import Vuex from "vuex"
import * as menu from "../static/menu.json";
import * as persons from "../static/persons.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    progress: 0,
    menu: menu.menu,
    persons: persons.persons,
    postcode: null,
    info: {},
    prices: {
      month: 0,
      year: 0,
      basePrice: 0,
      workPrice: 0
    },
    reasons: [
      {
        icon: "data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M61.7207 42.2889C60.6333 42.6451 59.9947 43.7309 60.2018 44.8506C60.3226 45.5631 60.3917 46.2926 60.3917 47.0391C60.3917 53.9609 54.6614 59.5934 47.6194 59.5934C42.7349 59.5934 38.4717 56.8789 36.3315 52.8921C35.7964 51.9081 34.6227 51.4331 33.5526 51.7894L33.5181 51.8063C32.1891 52.2644 31.5678 53.7743 32.2236 54.9958C35.1923 60.5265 41.1642 64.2758 47.9991 64.1231C57.354 63.9195 64.931 56.37 65.0001 47.1579C65.0001 46.106 64.9138 45.0542 64.7412 44.0532C64.4995 42.6791 63.067 41.8308 61.7207 42.2889Z' fill='url(%23paint0_linear)'/%3E%3Cpath d='M35.5196 14.1437V44.6981C35.5196 46.1231 34.4495 47.141 33.086 47.141C31.688 47.141 30.6524 46.0892 30.6524 44.6981V43.7819C28.9609 45.9026 26.2166 47.141 22.8854 47.141C16.4302 47.141 11.6665 42.1702 11.6665 35.3841C11.6665 28.598 16.4302 23.5763 22.8854 23.5763C26.113 23.5763 28.8228 24.8148 30.5488 26.8337V14.1437C30.5488 12.7186 31.6189 11.6667 33.0342 11.6667C34.4495 11.6667 35.5196 12.6847 35.5196 14.1437ZM30.6696 35.3841C30.6696 31.0241 27.8563 27.9873 23.7484 27.9873C19.6751 27.9873 16.6891 31.1089 16.6891 35.3332C16.6891 39.6085 19.6406 42.7301 23.7484 42.7301C27.8563 42.7301 30.6696 39.7442 30.6696 35.3841Z' fill='%237907E7'/%3E%3Cpath d='M64.8615 28.0223C64.8615 34.5878 59.4937 39.8301 52.6588 39.8301C45.8756 39.7792 40.5596 34.5878 40.5596 28.0223C40.5596 21.4058 45.8929 16.2654 52.6588 16.2654C59.4764 16.2654 64.8615 21.4567 64.8615 28.0223ZM45.5477 28.0732C45.5477 32.2466 48.5854 35.3852 52.6588 35.3852C56.7321 35.3852 59.8043 32.2127 59.8043 28.0732C59.8043 23.8488 56.7148 20.7272 52.6933 20.6763C48.5854 20.7272 45.5477 23.8488 45.5477 28.0732Z' fill='%237907E7'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='37.1758' y1='60.7218' x2='65.6787' y2='45.807' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%234CF4CD'/%3E%3Cstop offset='0.3678' stop-color='%2347CDDB'/%3E%3Cstop offset='1' stop-color='%233F8DF2'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E",
        title: "Wechsel zu claridoo",
        description: "Ich möchte an meiner aktuellen Adresse zu claridoo Smart Strom wechseln.",
        reason: "switch"
      },
      {
        icon: "data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M35.9452 34.8852H28.0268C27.666 34.8852 27.3199 35.0286 27.0648 35.2837C26.8096 35.5389 26.6663 35.8849 26.6663 36.2458C26.6663 36.6066 26.8096 36.9527 27.0648 37.2078C27.3199 37.463 27.666 37.6063 28.0268 37.6063H35.9452L34.6445 38.907C34.518 39.0335 34.4176 39.1837 34.3492 39.349C34.2807 39.5142 34.2455 39.6914 34.2455 39.8703C34.2455 40.0492 34.2807 40.2263 34.3492 40.3916C34.4176 40.5569 34.518 40.707 34.6445 40.8335C34.771 40.96 34.9212 41.0604 35.0864 41.1288C35.2517 41.1973 35.4289 41.2325 35.6078 41.2325C35.7867 41.2325 35.9638 41.1973 36.1291 41.1288C36.2943 41.0604 36.4445 40.96 36.571 40.8335L40.1955 37.2091C40.3222 37.0827 40.4227 36.9325 40.4913 36.7672C40.5599 36.6019 40.5952 36.4247 40.5952 36.2458C40.5952 36.0668 40.5599 35.8896 40.4913 35.7243C40.4227 35.559 40.3222 35.4089 40.1955 35.2825L36.571 31.658C36.3155 31.4026 35.9691 31.259 35.6078 31.259C35.2465 31.259 34.9 31.4026 34.6445 31.658C34.389 31.9135 34.2455 32.26 34.2455 32.6213C34.2455 32.9826 34.389 33.3291 34.6445 33.5846L35.9452 34.8852Z' fill='%237907E7'/%3E%3Cpath d='M24.0548 32.1265C24.1813 32.253 24.3314 32.3533 24.4967 32.4218C24.662 32.4903 24.8391 32.5255 25.018 32.5255C25.1969 32.5255 25.3741 32.4903 25.5393 32.4218C25.7046 32.3533 25.8548 32.253 25.9813 32.1265C26.1078 32 26.2081 31.8498 26.2766 31.6846C26.3451 31.5193 26.3803 31.3421 26.3803 31.1632C26.3803 30.9843 26.3451 30.8072 26.2766 30.6419C26.2081 30.4767 26.1078 30.3265 25.9813 30.2L24.6806 28.8993H32.5881C32.9489 28.8993 33.295 28.756 33.5501 28.5008C33.8053 28.2457 33.9486 27.8996 33.9486 27.5388C33.9486 27.1779 33.8053 26.8319 33.5501 26.5767C33.295 26.3216 32.9489 26.1782 32.5881 26.1782H24.6752L25.9758 24.8775C26.2313 24.6221 26.3748 24.2756 26.3748 23.9143C26.3748 23.553 26.2313 23.2065 25.9758 22.951C25.7204 22.6955 25.3739 22.552 25.0126 22.552C24.6513 22.552 24.3048 22.6955 24.0493 22.951L20.4085 26.5809C20.2818 26.7073 20.1813 26.8575 20.1127 27.0227C20.0441 27.188 20.0088 27.3652 20.0088 27.5442C20.0088 27.7232 20.0441 27.9004 20.1127 28.0656C20.1813 28.2309 20.2818 28.3811 20.4085 28.5075L24.0548 32.1265Z' fill='%237907E7'/%3E%3Cpath d='M66.6668 40.0612C66.6649 39.188 66.4436 38.3292 66.0233 37.5637C65.603 36.7983 64.9972 36.1506 64.2614 35.6803L61.9757 34.2109L59.2546 26.7986C58.9407 25.951 58.3754 25.2195 57.6342 24.702C56.8931 24.1846 56.0115 23.9059 55.1076 23.9034H47.2872V18.7333C47.2872 17.7441 46.8947 16.7954 46.1957 16.0954C45.4967 15.3954 44.5485 15.0014 43.5593 15H17.0668C16.0767 15 15.1271 15.3933 14.427 16.0935C13.7268 16.7936 13.3335 17.7432 13.3335 18.7333V56.1211C13.3349 56.9188 13.6525 57.6835 14.2166 58.2476C14.7806 58.8116 15.5453 59.1292 16.343 59.1306H19.7879C20.0956 60.5053 20.8624 61.7342 21.9619 62.6149C23.0615 63.4955 24.4282 63.9754 25.8369 63.9754C27.2456 63.9754 28.6123 63.4955 29.7119 62.6149C30.8114 61.7342 31.5782 60.5053 31.8859 59.1306H48.0383C48.3459 60.5053 49.1127 61.7342 50.2123 62.6149C51.3118 63.4955 52.6785 63.9754 54.0872 63.9754C55.496 63.9754 56.8627 63.4955 57.9622 62.6149C59.0618 61.7342 59.8285 60.5053 60.1362 59.1306H63.6519C64.4505 59.1306 65.2166 58.8137 65.7818 58.2495C66.3471 57.6852 66.6654 56.9198 66.6668 56.1211V47.4136V40.0612ZM55.0968 26.6027C55.4415 26.6015 55.7784 26.7049 56.0631 26.8992C56.3478 27.0936 56.5669 27.3697 56.6913 27.6912L59.592 35.5605C59.697 35.8348 59.8879 36.0677 60.1362 36.2245L62.8083 37.9388C63.1611 38.1684 63.4502 38.4833 63.649 38.8543C63.8478 39.2252 63.9499 39.6404 63.9457 40.0612V46.0476H47.2872V26.6027H55.0968ZM17.0668 17.7211H43.5593C43.8278 17.7211 44.0853 17.8277 44.2751 18.0176C44.4649 18.2074 44.5716 18.4649 44.5716 18.7333V46.0639H16.0546V18.7333C16.0546 18.4649 16.1612 18.2074 16.3511 18.0176C16.5409 17.8277 16.7984 17.7211 17.0668 17.7211ZM25.8505 61.2585C25.1616 61.2585 24.4882 61.0542 23.9155 60.6715C23.3427 60.2888 22.8963 59.7448 22.6326 59.1084C22.369 58.472 22.3 57.7716 22.4344 57.096C22.5688 56.4204 22.9005 55.7998 23.3877 55.3127C23.8748 54.8256 24.4954 54.4938 25.171 54.3594C25.8466 54.225 26.547 54.294 27.1834 54.5576C27.8198 54.8213 28.3638 55.2677 28.7465 55.8405C29.1292 56.4132 29.3335 57.0866 29.3335 57.7755C29.3321 58.6988 28.9646 59.5839 28.3118 60.2368C27.6589 60.8896 26.7738 61.2571 25.8505 61.2585ZM54.0954 61.2585C53.4065 61.2585 52.7331 61.0542 52.1604 60.6715C51.5876 60.2888 51.1412 59.7448 50.8775 59.1084C50.6139 58.472 50.5449 57.7716 50.6793 57.096C50.8137 56.4204 51.1455 55.7998 51.6326 55.3127C52.1197 54.8256 52.7403 54.4938 53.4159 54.3594C54.0915 54.225 54.7919 54.294 55.4283 54.5576C56.0647 54.8213 56.6087 55.2677 56.9914 55.8405C57.3741 56.4132 57.5784 57.0866 57.5784 57.7755C57.577 58.6998 57.2088 59.5857 56.5547 60.2387C55.9007 60.8917 55.0142 61.2585 54.09 61.2585H54.0954ZM63.6628 56.415H60.1362C59.8285 55.0402 59.0618 53.8113 57.9622 52.9307C56.8627 52.05 55.496 51.5702 54.0872 51.5702C52.6785 51.5702 51.3118 52.05 50.2123 52.9307C49.1127 53.8113 48.3459 55.0402 48.0383 56.415H31.8913C31.5836 55.0402 30.8169 53.8113 29.7173 52.9307C28.6178 52.05 27.2511 51.5702 25.8423 51.5702C24.4336 51.5702 23.0669 52.05 21.9674 52.9307C20.8678 53.8113 20.101 55.0402 19.7934 56.415H16.343C16.3047 56.415 16.2667 56.4073 16.2314 56.3925C16.196 56.3777 16.164 56.3559 16.1371 56.3286C16.1103 56.3012 16.0891 56.2688 16.075 56.2331C16.0608 56.1975 16.0539 56.1594 16.0546 56.1211V48.785H63.9457V56.1211C63.9457 56.1976 63.9154 56.271 63.8613 56.325C63.8072 56.3791 63.7338 56.4095 63.6573 56.4095L63.6628 56.415Z' fill='%237907E7'/%3E%3C/svg%3E",
        title: "Umzug / Einzug",
        description: "Ich ziehe gerade ein oder bin in den letzten 4 Wochen eingezogen und möchte zu claridoo Smart Strom wechseln.",
        reason: "moving"
      },
      {
        icon: "data:image/svg+xml,%3Csvg width='54' height='47' viewBox='0 0 54 47' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M52.7314 38.5348H47.2119V33.2605C47.2119 32.7468 46.7929 32.3317 46.2756 32.3317H40.1042V27.0575C40.1042 26.5449 39.6852 26.1299 39.1673 26.1299H33.675V20.8538C33.675 20.3413 33.2561 19.9263 32.7381 19.9263H19.8792C19.3618 19.9263 18.9423 20.3413 18.9423 20.8538V26.1299H13.45C12.9326 26.1299 12.5131 26.5449 12.5131 27.0575V32.3317H7.69934C7.182 32.3317 6.76302 32.7468 6.76302 33.2605V38.5348H1.26957C0.752224 38.5348 0.333252 38.9498 0.333252 39.4623V45.6654C0.333252 46.1779 0.752224 46.5929 1.26957 46.5929H14.1285H26.9863H26.9869H39.8446C39.8494 46.5929 39.8529 46.5906 39.8571 46.5906C39.863 46.5906 39.8666 46.5929 39.8707 46.5929H52.7303C53.2476 46.5929 53.6666 46.1779 53.6666 45.6654V39.4623C53.6678 38.9498 53.2488 38.5348 52.7314 38.5348ZM45.3381 38.5348H39.8719H39.8452H34.353V34.1881H39.1673H45.3381V38.5348ZM26.9875 38.5348H21.4946V34.1881H26.3083H26.3089H32.4791V38.5348H26.9875ZM38.231 32.3311H33.4166H33.4155H27.2458V27.9844H32.7387H38.2316V32.3311H38.231ZM20.8161 21.7808H31.8018V26.1293H26.3083H26.3078H20.8155V21.7808H20.8161ZM14.3869 27.9844H19.8798H25.3726V32.3311H20.5589H20.5577H14.3869V27.9844ZM8.63566 34.1875H13.4506H19.6208V38.5342H14.1285H8.63507V34.1875H8.63566ZM2.20589 40.3899H7.69934H13.1928V44.7378H2.20589V40.3899ZM15.0648 40.3899H20.5571H20.5583H26.0506V44.7378H15.0648V40.3899ZM38.9089 44.7378H27.9238V40.3899H33.4161H33.4172H38.9095V44.7378H38.9089ZM51.7945 44.7378H40.8082V40.3899H46.2756H51.7945V44.7378Z' fill='%237907E7'/%3E%3Cpath d='M23.3012 15.4816L28.7011 15.4703L28.8146 15.4686C30.3131 15.4349 31.5683 14.7883 32.2593 13.6899C32.9557 12.5857 32.9873 11.172 32.3466 9.81143L31.9933 9.0603L33.2366 7.55567L33.2581 7.60055C33.4213 7.94718 33.7727 8.14855 34.1368 8.14028C34.2635 8.13673 34.3908 8.10898 34.5127 8.05347L40.3674 5.36545C41.6173 4.79265 42.163 3.32109 41.5832 2.08455C41.019 0.884628 39.4822 0.324231 38.2611 0.88581L32.4058 3.57206C32.178 3.67717 32.0017 3.86614 31.9156 4.09939C31.8295 4.33087 31.8409 4.58774 31.9473 4.81273L32.3538 5.67606L31.1087 7.17951L30.8917 6.71773C30.1493 5.13751 28.7853 4.21336 27.2444 4.24702C26.1057 4.27241 25.0113 4.83163 24.1631 5.82192L20.6724 9.89174C19.162 11.6538 19.5977 13.1177 19.8553 13.6657C20.1136 14.2114 20.9647 15.4857 23.3012 15.4816ZM39.0572 2.57822C39.3591 2.43945 39.7327 2.5794 39.8695 2.87053C40.0112 3.17287 39.8785 3.5325 39.5731 3.67304L34.5749 5.96719L34.0597 4.87237L39.0572 2.57822ZM22.1141 11.0976L25.6048 7.02775C26.1213 6.42543 26.7166 6.12544 27.2874 6.11245C28.034 6.09651 28.7399 6.5701 29.1786 7.5037L30.0489 9.35438C30.0507 9.35674 30.0507 9.3591 30.0525 9.36146L30.6341 10.598C31.3992 12.2249 30.5606 13.563 28.7728 13.6037C28.7477 13.6037 28.7226 13.6037 28.6981 13.6037L23.2976 13.6149C21.456 13.6173 20.9247 12.4859 22.1141 11.0976Z' fill='%237907E7'/%3E%3C/svg%3E",
        title: "Neubau",
        description: "Ich wohne in einem gerade neu gebauten Haus und möchte claridoo Smart Strom.",
        reason: "new"
      }
    ],
    types: [
      {
        icon: "data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M58.9905 36.6045C57.6866 34.88 55.3312 34.5435 53.6908 34.4594C51.714 34.3332 49.9054 34.4174 47.8023 34.5856C47.7182 34.3332 47.6341 33.7865 47.7182 32.6508C48.0126 29.2859 48.3911 26.8043 48.6856 24.8275L48.7277 24.6592C49.0641 22.5141 47.8864 20.7055 45.8675 20.1587C43.9748 19.654 41.4932 20.3269 40.5678 22.5562C40.4416 22.8506 40.3154 23.2292 40.1472 23.6918C38.9695 26.8043 36.3197 33.9126 32.0294 36.4783V36.0998C32.0294 35.553 31.6088 35.1324 31.062 35.1324H20.9674C20.4206 35.1324 20 35.553 20 36.0998V57.1303C20 57.6771 20.4206 58.0977 20.9674 58.0977H31.062C31.6088 58.0977 32.0294 57.6771 32.0294 57.1303V56.92C35.3943 57.8454 43.47 59.8222 49.2324 59.8222C52.2608 59.8222 56.0462 59.8222 57.0978 55.0693C57.939 51.3259 59.0326 45.7738 59.7476 41.9463C60.2524 39.6329 60 37.8664 58.9905 36.6045ZM57.3081 41.5257C56.593 45.3532 55.4995 50.8212 54.6582 54.5646C54.1115 57.0041 53.0179 57.3406 49.2324 57.3406C43.6803 57.3406 35.6887 55.3217 32.5342 54.4804C32.2397 54.3963 32.0715 54.186 32.0294 53.8916V47.1619V39.7171C32.0294 39.4647 32.1556 39.2123 32.3659 39.1282C38.0021 36.5204 41.0305 28.4447 42.4606 24.5751C42.6288 24.1545 42.755 23.7759 42.8812 23.5236C43.1756 22.8506 43.8906 22.5141 44.6057 22.5141C44.816 22.5141 45.0263 22.5562 45.1945 22.5982C45.7834 22.7665 46.4143 23.1871 46.246 24.3227L46.204 24.491C45.9096 26.5099 45.4889 28.9915 45.1945 32.4826C45.0263 34.4594 45.3207 35.8054 46.0357 36.5204C46.4563 36.941 47.0452 37.1513 47.6761 37.1093C49.8212 36.899 51.5457 36.8149 53.4385 36.941C55.2471 37.0672 56.3828 37.4458 56.9295 38.1187C57.5184 38.7917 57.6446 39.9274 57.3081 41.5257Z' fill='%237907E7'/%3E%3C/svg%3E",
        title: "Ja, habe ich hier",
        description: "",
        type: "direct"
      },
      {
        icon: "data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M47.8746 54.0814H47.8722C43.3945 54.0791 38.2607 51.5749 33.7873 47.2125C33.7803 47.2055 33.7733 47.1984 33.764 47.1891C29.4101 42.705 26.9108 37.5612 26.9084 33.0767C26.9084 31.4245 27.7516 29.688 29.2862 28.1854C30.342 27.151 31.8976 26.1072 33.0001 26.1072C34.6982 26.1072 35.149 26.9123 35.8334 28.1292C35.9992 28.4264 36.1884 28.7611 36.4337 29.1683C36.5691 29.393 36.756 29.6762 36.9522 29.9781C38.2066 31.8925 38.996 33.2312 38.5639 34.3499C38.2252 35.2204 37.3329 35.9366 36.4687 36.627C36.1487 36.8821 35.6909 37.2496 35.4877 37.4719C35.6442 38.3448 36.7864 40.196 38.7788 42.1923C40.7689 44.1863 42.6118 45.3307 43.4877 45.4898C43.7073 45.2862 44.0717 44.8298 44.3239 44.5116C45.0153 43.6433 45.7324 42.7447 46.6036 42.4076C46.8045 42.3304 47.0241 42.2906 47.2577 42.2906C48.2527 42.2906 49.4229 43.0091 50.9645 44.0248C51.2658 44.2214 51.5485 44.4086 51.7751 44.5467C52.1791 44.7901 52.5155 44.9796 52.8098 45.1458C54.0244 45.8315 54.8279 46.2832 54.8279 47.9823C54.8279 49.0846 53.7862 50.6456 52.7537 51.7034C51.2542 53.2316 49.5211 54.0788 47.8743 54.0812L47.8746 54.0814ZM35.4299 45.5463C39.41 49.4219 44.0632 51.7388 47.8746 51.7412C50.18 51.7389 52.3732 48.741 52.4947 47.9569C52.4947 47.7978 52.4854 47.7135 52.4784 47.6738C52.3593 47.5708 51.9926 47.3648 51.6679 47.18C51.3736 47.0138 51.0068 46.8078 50.5724 46.5457C50.3085 46.3866 50.0048 46.1876 49.6871 45.977C49.0822 45.5792 47.8652 44.7788 47.3467 44.6453C47.0267 44.87 46.466 45.5721 46.1507 45.97C45.3496 46.9763 44.6582 47.8445 43.6818 47.8469C41.304 47.8445 38.0643 44.7834 37.1276 43.8449C36.191 42.9065 33.1358 39.6604 33.1334 37.2851C33.1334 36.3022 34.0047 35.6048 35.0114 34.7997C35.4061 34.4838 36.1022 33.9268 36.3287 33.6085C36.1933 33.0889 35.3968 31.872 34.9997 31.2658C34.7895 30.9452 34.5932 30.6432 34.4321 30.3811C34.1705 29.9435 33.9626 29.576 33.7967 29.2812C33.6146 28.9559 33.409 28.5885 33.3039 28.4691C33.2642 28.4621 33.1801 28.4527 33.0213 28.4527C32.2388 28.5721 29.2467 30.7696 29.2467 33.0819C29.249 36.8966 31.5591 41.5565 35.4295 45.5466L35.4299 45.5463Z' fill='%237907E7'/%3E%3Cpath d='M17.8343 64.7698C17.54 64.7698 17.2503 64.6574 17.0284 64.4468C16.6921 64.1238 16.5776 63.6323 16.7388 63.1947L20.5905 52.7616C17.7688 48.3384 16.4491 43.0773 16.8649 37.8769C17.304 32.3959 19.6631 27.2563 23.51 23.4021C27.8452 19.0585 33.6496 16.6667 39.8534 16.6667C46.2814 16.6667 52.3543 19.206 56.9562 23.8167C66.2897 33.1708 66.4769 48.2029 57.3696 57.3281C53.0344 61.6718 47.2324 64.0635 41.0286 64.0635C36.5323 64.0635 32.1525 62.8044 28.322 60.4149L18.2901 64.679C18.1452 64.7399 17.9887 64.7703 17.8346 64.7703L17.8343 64.7698ZM28.4343 57.9242C28.6585 57.9242 28.8827 57.9897 29.0766 58.1161C32.648 60.4728 36.7801 61.7178 41.0286 61.7178C46.6087 61.7178 51.8247 59.5694 55.718 55.6679C63.9142 47.4557 63.7295 33.9077 55.3046 25.466C51.1446 21.2979 45.6577 19.0021 39.8534 19.0021C34.2732 19.0021 29.0548 21.1505 25.1615 25.052C18.0961 32.1313 17.1262 43.4469 22.8584 51.9539C23.0687 52.2675 23.1154 52.6607 22.9869 53.014L19.8687 61.4605L27.9782 58.0132C28.123 57.957 28.2795 57.9243 28.4337 57.9243L28.4343 57.9242Z' fill='%237907E7'/%3E%3C/svg%3E",
        title: "Nein, reiche ich später per Whats App nach",
        description: "Im letzen Schrit kanst du dich mit uns auf WhatsApp verbinden. Deine Mobilnummer ist ",
        type: "whatsapp"
      },
      {
        icon: "data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.7188 25H56.2812C58.2766 25 60 26.6327 60 28.7188V50.5782C60 52.6644 58.2766 54.2971 56.2812 54.2971H23.7188C21.6327 54.2971 20 52.6644 20 50.5782V28.7188C20 26.6327 21.7234 25 23.7188 25ZM55.5556 51.6667L44.2177 39.7846C41.5873 41.4172 38.4127 41.4172 35.7823 39.7846L24.4444 51.6667H55.5556ZM46.3039 38.1519L57.2789 49.5805V29.1723L46.3039 38.1519ZM22.7211 49.5805L33.6054 38.1519L22.7211 29.1723V49.5805ZM25.0794 27.7211L36.5079 36.9728C38.5941 38.6961 41.3152 38.6961 43.4921 36.9728L54.8299 27.7211H25.0794Z' fill='%237907E7'/%3E%3C/svg%3E",
        title: "Später per email",
        description: "Wir schicken dir eine Erinnerung ann",
        type: "email"
      }
    ],
    user: {},
    iban: {},
    ibanNumber: null,
    isValid: null,
    form: {}
  },
  mutations: {
    info(state, data) {
      state.info = data;
    },
    postcode(state, data) {
      state.postcode = data;
    },
    month(state, data) {
      state.prices.month = data;
    },
    year(state, data) {
      state.prices.year = data;
    },
    basePrice(state, data) {
      state.prices.basePrice = data;
    },
    workPrice(state, data) {
      state.prices.workPrice = data;
    },
    user(state, data) {
      state.user = data;
    },
    iban(state, data) {
      state.iban = data;
    },
    isValid(state, data) {
      state.isValid = data;
    },
    ibanNumber(state, data) {
      state.ibanNumber = data;
    },
    progress(state, data) {
      state.progress += data;
    }
  },
  actions: {
  },
  getters: {
    menu(state) {
      return state.menu;
    },
    persons(state) {
      return state.persons;
    },
    info(state) {
      return state.info;
    },
    postcode(state) {
      return state.postcode;
    },
    month(state) {
      return state.prices.month;
    },
    year(state) {
      return state.prices.year;
    },
    basePrice(state) {
      return state.prices.basePrice;
    },
    workPrice(state) {
      return state.prices.workPrice;
    },
    reasons(state) {
      return state.reasons;
    },
    types(state) {
      return state.types;
    },
    user(state) {
      return state.user;
    },
    iban(state) {
      return state.iban;
    },
    isValid(state) {
      return state.isValid;
    },
    ibanNumber(state) {
      return state.ibanNumber;
    },
    progress(state) {
      return state.progress;
    }
  }
})
