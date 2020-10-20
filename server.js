const express = require('express');
const { agent } = require('./agent');
const { AgentRouter } = require('daf-express');

const agentRouter = AgentRouter({
    getAgentForRequest: async (req, res) => {
        const agentMethods = await agent.availableMethods();
        const schema = agent.getSchema()
        console.log(schema);
    },
    exposedMethods: agent.availableMethods()
});

const app = express()
app.use('/agent', agentRouter)
app.listen(3002, () => {
    console.log('server is live on port 3002! ')
});