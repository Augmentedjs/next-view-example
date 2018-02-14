export const SCHEMA = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "User",
  "description": "A list of users",
  "type": "object",
  "properties": {
    "Name" : {
      "description": "Name of the user",
      "type" : "string"
    },
    "ID" : {
      "description": "The unique identifier for a user",
      "type" : "integer"
    },
    "Email" : {
      "description": "The email of the user",
      "type" : "string"
    }
  },
  "required": ["ID", "Name"]
};

export const DATA = [
  { "Name": "Bob", "ID": 123, "Email": "bob@augmentedjs.org" },
  { "Name": "Jonathan", "ID": 234, "Email": "jonathon@augmentedjs.org" },
  { "Name": "Corey", "ID": 345, "Email": "corey@augmentedjs.org" },
  { "Name": "Seema", "ID": 456, "Email": "seema@augmentedjs.org" },
  { "Name": "Jasmine", "ID": 567, "Email": "jasmine@augmentedjs.org" }
];
