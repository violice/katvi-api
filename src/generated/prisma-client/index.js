"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Project",
    embedded: false
  },
  {
    name: "Access",
    embedded: false
  },
  {
    name: "Board",
    embedded: false
  },
  {
    name: "Column",
    embedded: false
  },
  {
    name: "Card",
    embedded: false
  },
  {
    name: "Priority",
    embedded: false
  },
  {
    name: "Type",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/sergey-23fb3b/katvi/dev`
});
exports.prisma = new exports.Prisma();
