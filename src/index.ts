// Import the appropriate service and chosen wrappers
import {
  dialogflow,
  DialogflowConversation
} from 'actions-on-google'

import { 
  helpIntent,
  welcomeIntent,
  byeIntent
} from './default/base.intent';
import { 
  kuaNumberIntent,
  astroSignIntent,
  defKuaNumber,
  advise,
  defFengshui,
  etymologieFengshuiIntent
} from './fengshui/fengshui.intents';

const functions = require('firebase-functions');

// Create an app instance
const app = dialogflow()

// Register handlers for Dialogflow intents

app.intent('Default Welcome Intent', welcomeIntent)

// Intent in Dialogflow called `Goodbye`
app.intent('Goodbye', byeIntent)

app.intent('Help', helpIntent)

app.intent('def-kua-number', defKuaNumber)
app.intent('def-fengshui', defFengshui)
app.intent('advise', advise)

app.intent('chinese-astro-sign', astroSignIntent)
app.intent('kua-number', kuaNumberIntent)
app.intent('ethymologie-fengshui', etymologieFengshuiIntent)

app.intent('Default Fallback Intent', (conv: DialogflowConversation) => {
  conv.ask(`I didn't understand. Can you tell me something else?`)
})

exports.http = functions.https.onRequest(app);