import maryState from './store'
import maryActions from './actions'
import { bindActionsToStore } from 'vue-reegux'

export default bindActionsToStore(maryState, maryActions)