# Action Fengshui
Let's play with Fengshui through [fengshui-api](https://fengshui-api.com/) on our Google Assistant.

## DialogFlow
The dialogflow part has been exported for your confort in dialogflow folder.

## Test
The tests run with [mochajs](https://mochajs.org/).
There is no mock or stub to keep them _simple_. 
So, all the [DAO](./test/fendshui/fengshui.dao.tests.ts) and [services](./test/fendshui/fengshui.services.tests.ts) call directly the REST [fengshui-api](https://fengshui-api.com/).

To test intents, I'm using the [convMock](/test/fwk/convMock.ts). It's a simple wrapper of conversation to test the responses from intent.