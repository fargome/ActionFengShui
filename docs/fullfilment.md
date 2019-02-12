# Let's see the fullfilment part
The fullfilment is the function called by [Dialogflow](https://www.dialogflow.com) when it detects specific intent.

You can write fullfilment in your favorite language. Here, we use [Typescript](https://www.typescriptlang.org/) to run code on NodeJS. 

## Dependencies
Below, you can see the dependencies and development  dependencies part of [package.json](../../package.json). 

![Dependencies](img/deps.png)
So, we can find:
1. [actions-on-google](https://www.npmjs.com/package/actions-on-google) : used to access the actions core functionnalities
2. [firebase-functions](https://www.npmjs.com/package/firebase-functions) : Use to acceed firebase Cloud functions. You only need that if you use GCP. 
3. [request](https://www.npmjs.com/package/request) : A simple lib to make http request
3. [request-promise-native](https://www.npmjs.com/package/request-promise-native) : A wrapper to use promise simply on _request_.

![Dependencies](img/deps-dev.png)
1. [chai](https://www.npmjs.com/package/chai), [chai-string](https://www.npmjs.com/package/chai-string) and [chai-as-promised](https://www.npmjs.com/package/chai-as-promised) : Testing framework used in this project to do assert.
2. [mocha](https://www.npmjs.com/package/mocha) : Testing framework that describes and runs tests.
3. [serverless-google-cloudfunctions](https://www.npmjs.com/package/serverless-google-cloudfunctions), [serverless-google-cloudfunctions](https://www.npmjs.com/package/serverless-offline) and [serverless-offline](https://www.npmjs.com/package/serverless-plugin-typescript) : Plugins for serverless used to deploy on GCP.

## Code
Let's finally see the code. 
As _always, we have some layer in our app to improve readability, testability and evolution.

### Handler
In serverless app, you have an program input called the handler. 
You can find it in the [index.ts](../../index.ts).

This file is pretty simple. 

### Intents
*The imports*
`import {
  dialogflow,
  DialogflowConversation
} from 'actions-on-google'
`
We retrieve dialogflow dependencies. 

`const functions = require('firebase-functions');`
Now, we get firebase function. 

`import { 
  kuaNumberIntent,
  astroSignIntent,
  defKuaNumber,
  advise,
  defFengshui,
  etymologieFengshuiIntent
} from './fengshui/fengshui.intents';`
To finish in my imports, i get my intents functions. 

Use Everythings
`const app = dialogflow()`
Create the dialogflow app. 

`app.intent('Default Welcome Intent', welcomeIntent)`
Register the _Default Welcome Intent_ intent. You can see as many intents registrations as intents with fullfilment in Dialogflow. The name are the same. Here, we write that for all _Default Welcome Intent_, use _welcomeIntent_ function.

`app.intent('Default Fallback Intent', (conv: DialogflowConversation) => {
  conv.ask(`I didn't understand. Can you tell me something else?`)
})`
If no intent found, let's handle the fallback.

exports.http = functions.https.onRequest(app);
And finally, we export the function through firebase function.
Here, I named the function _http_. You can call it whatever you want. It just has to match the handler name that you put in serverless.xml

Here, we have a set everything to run our intents. Let's see the associated intents functions.

### Intents.

