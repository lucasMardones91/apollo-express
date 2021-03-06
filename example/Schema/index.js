const { SchemaComposer } = require('graphql-compose');

const schemaComposer = new SchemaComposer();

const { UserQuery, UserMutation } = require('./user');
const { TaskQuery, TaskMutation } = require('./task');

schemaComposer.Query.addFields({
    ...UserQuery,
    ...TaskQuery,
});

schemaComposer.Mutation.addFields({
    ...UserMutation,
    ...TaskMutation,
});

module.exports = schemaComposer.buildSchema();