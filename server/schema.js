import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString
} from 'graphql';

let count = 0;
let id = 0;


let ChannelType = new GraphQLObjectType({
    name: 'Channel',
    fields: () => ({
        id: {
            type: GraphQLInt,
                description: 'channel id',
                resolve: function () {
                return id;
            }

        },
        name: {
            type: GraphQLString,
                description: 'channel name',
                resolve: function () {
                return name;
            }
        }
    })
});

let ChannelsType = new GraphQLObjectType({
    name: 'Channels',
    fields: () => ({
        channels: {
            type: new GraphQLList(ChannelType)
        }
    })
});


let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            count: {
                type: GraphQLInt,
                description: 'The count!',
                resolve: function () {
                    return count;
                }
            },
            channels: {
                type: ChannelsType
            }
        }
    }),
    mutation: new GraphQLObjectType({
        name: 'RootMutationType',
        fields: {
            updateCount: {
                type: GraphQLInt,
                description: 'Updates the count',
                resolve: function () {
                    count += 1;
                    return count;
                }
            }
        }
    })
});

export default schema;