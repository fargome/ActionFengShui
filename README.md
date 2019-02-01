# Action Fengshui
Let's play with Fengshui through [fengshui-api](https://fengshui-api.com/) on our Google Assistant.

## DialogFlow
[Dialogflow](www.dialogflow.com) is in charge of Natural Language Processing. 
It's the tool that _understands_ user language, parses data and sends back to fullfilment (this function) everything needed to process message.

The dialogflow part has been exported for your confort in Dialogflow folder.

## Intents / features
### Default
Default features are the intents to make the bot pleasant and helpful.
* Welcome
* Help
* Goodbye
* Fallback

### Feng Shui features
Here we have the _real_ Action functions. 
* Get Chineses astrological sign
* Get Kua Number
* Advises 

## Test
The tests run with [mochajs](https://mochajs.org/).
There is no mock or stub to keep them _simple_. 
So, all the [DAO](./test/fendshui/fengshui.dao.tests.ts) and [services](./test/fendshui/fengshui.services.tests.ts) call directly the REST [fengshui-api](https://fengshui-api.com/).

To test intents, I'm using the [convMock](/test/fwk/convMock.ts). It's a simple wrapper of conversation to test the responses from intent.

To run test:

`npm test`

## Deploy
To deploy this function on [Google Cloud Function](), I'm using [Serverless](www.serverless.com). This framework is really simple, and provides a simple way to deploy on GCP, AWS Lambda, ...

Command to deploy:

`sls deploy`