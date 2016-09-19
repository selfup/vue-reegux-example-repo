import tomState from './store'
import tomActions from './actions'
import { bindActionsToStore } from 'vue-reegux'

 export default bindActionsToStore(tomState, tomActions)