export const typeDefs = `
   
   type Channel {
    id: ID!         # "!" is a required field
    name: String
   }
   
   
   #This type specifies the entry points into the API, in this case the 
   # is only one - "channels" - which returns a list of channels
   
   type Query {
    channels: [Channel]     # "[]" is a list
   }
`;