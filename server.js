const express = require('express');
const { serverAgent, agent } = require('./agent');
const cors = require('cors');
const { AgentRouter } = require('daf-express');
const bodyParser = require('body-parser');
const basePath = '/agent';
const app = express()

const agentRouter = AgentRouter({
    getAgentForRequest: async req => agent,
    exposedMethods: agent.availableMethods(),
});

app.use(basePath, agentRouter);

app.post(`${basePath}/did`, async (req, res) => {
    try {
        const did = req.body.did;
        console.log(did);
        const importIdentity = await agent.identityManagerImportIdentity({ did: did });
        console.log(importIdentity);
        res.json({ identity: importIdentity });
    } catch (error) {
        console.log(error);
        res.json({ error: error.message });
    }
});

app.listen(3002, () => {
    console.log('app is live on port 3002');
});