const { SchemaComposer } = require('graphql-compose');

const schemaComposer = new SchemaComposer();

const { ProyectQuery, ProyectMutation } = require('./proyects');
const { TaskQuery, TaskMutation } = require('./tasks');

schemaComposer.Query.addFields({
    ...ProyectQuery,
    ...TaskQuery,
});

schemaComposer.Mutation.addFields({
    ...ProyectMutation,
    ...TaskMutation,
});

module.exports = schemaComposer.buildSchema();