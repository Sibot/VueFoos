import firebase from '../../firebaseInit'

let db = firebase.database()
let playersRef = db.ref('players/')

// playersRef.on('value', function (snapshot) {
//   state.playersList = []
//   snapshot.forEach(snap => {
//     actions.addPlayer({ key: snap.key, name: snap.val() })
//   })
// })

const state = {
  playersList: []
}

const getters = {
  playersList: state => {
    return state.playersList
  }
}

const mutations = {
  addPlayer (state, player) {
    state.playersList.push(player)
  },
  savePlayer (state, player) {
    state.playersDb.push(player)
  },
  clearPlayersList (state) {
    state.playersList = []
  }
}

const actions = {
  savePlayer (context, player) {
    context.commit('savePlayer', player)
  },
  addPlayer (context, player) {
    context.commit('addPlayer', player)
  },
  initPlayers (context) {
    playersRef.on('value', function (snapshot) {
      context.commit('clearPlayersList')
      snapshot.forEach(snap => {
        context.commit('addPlayer', { key: snap.key, name: snap.val() })
      })
    })
  }
}

export default {
  actions,
  getters,
  mutations,
  state
}
