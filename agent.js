// agent.ts
const { createAgent, IIdentityManager, IResolver, IKeyManager, IDataStore, IMessageHandler } = require('daf-core');
const { ICredentialIssuer } = require('daf-w3c');
const { IDIDComm } = require('daf-did-comm');
const { ISelectiveDisclosure } = require('daf-selective-disclosure');
const { IDataStoreORM } = require('daf-typeorm');
const { AgentRestClient } = require('daf-rest');

const agent = createAgent({
  plugins: [
    new AgentRestClient({
      url: 'http://localhost:3002/agent',
      enabledMethods: [
        'keyManagerCreateKey',
        'keyManagerGetKey',
        'keyManagerDeleteKey',
        'keyManagerImportKey',
        'keyManagerEncryptJWE',
        'keyManagerDecryptJWE',
        'keyManagerSignJWT',
        'keyManagerSignEthTX',
      ]
    })
  ]
});

module.exports = {
  agent
}