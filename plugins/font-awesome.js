import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faArrowDown,
  faCheck,
  faEllipsisH,
  faSearch,
  faSyncAlt
} from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import {
  faLinkedin,
  faTwitter,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

// SOLID ICONS
library.add(
  faHome,
  faArrowLeft,
  faArrowRight,
  faArrowDown,
  faArrowUp,
  faCheck,
  faEllipsisH,
  faSearch,
  faSyncAlt
)

// REGULAR ICONS
library.add(faAddressCard)

// BRAND ICONS
library.add(faLinkedin, faTwitter, faFacebook, faInstagram)

Vue.component(FontAwesomeIcon.name, FontAwesomeIcon)
