module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.33.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type Access {
  id: ID!
  project: Project!
  user: User!
  permissions: Json
  createdAt: DateTime!
  updatedAt: DateTime!
}

type AccessConnection {
  pageInfo: PageInfo!
  edges: [AccessEdge]!
  aggregate: AggregateAccess!
}

input AccessCreateInput {
  id: ID
  project: ProjectCreateOneInput!
  user: UserCreateOneInput!
  permissions: Json
}

type AccessEdge {
  node: Access!
  cursor: String!
}

enum AccessOrderByInput {
  id_ASC
  id_DESC
  permissions_ASC
  permissions_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AccessPreviousValues {
  id: ID!
  permissions: Json
  createdAt: DateTime!
  updatedAt: DateTime!
}

type AccessSubscriptionPayload {
  mutation: MutationType!
  node: Access
  updatedFields: [String!]
  previousValues: AccessPreviousValues
}

input AccessSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AccessWhereInput
  AND: [AccessSubscriptionWhereInput!]
  OR: [AccessSubscriptionWhereInput!]
  NOT: [AccessSubscriptionWhereInput!]
}

input AccessUpdateInput {
  project: ProjectUpdateOneRequiredInput
  user: UserUpdateOneRequiredInput
  permissions: Json
}

input AccessUpdateManyMutationInput {
  permissions: Json
}

input AccessWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  project: ProjectWhereInput
  user: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [AccessWhereInput!]
  OR: [AccessWhereInput!]
  NOT: [AccessWhereInput!]
}

input AccessWhereUniqueInput {
  id: ID
}

type AggregateAccess {
  count: Int!
}

type AggregateBoard {
  count: Int!
}

type AggregateCard {
  count: Int!
}

type AggregateColumn {
  count: Int!
}

type AggregateProject {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Board {
  id: ID!
  project: Project
  name: String!
  description: String
  columns(where: ColumnWhereInput, orderBy: ColumnOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Column!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type BoardConnection {
  pageInfo: PageInfo!
  edges: [BoardEdge]!
  aggregate: AggregateBoard!
}

input BoardCreateInput {
  id: ID
  project: ProjectCreateOneWithoutBoardsInput
  name: String!
  description: String
  columns: ColumnCreateManyWithoutBoardInput
}

input BoardCreateManyWithoutProjectInput {
  create: [BoardCreateWithoutProjectInput!]
  connect: [BoardWhereUniqueInput!]
}

input BoardCreateOneWithoutColumnsInput {
  create: BoardCreateWithoutColumnsInput
  connect: BoardWhereUniqueInput
}

input BoardCreateWithoutColumnsInput {
  id: ID
  project: ProjectCreateOneWithoutBoardsInput
  name: String!
  description: String
}

input BoardCreateWithoutProjectInput {
  id: ID
  name: String!
  description: String
  columns: ColumnCreateManyWithoutBoardInput
}

type BoardEdge {
  node: Board!
  cursor: String!
}

enum BoardOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BoardPreviousValues {
  id: ID!
  name: String!
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

input BoardScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [BoardScalarWhereInput!]
  OR: [BoardScalarWhereInput!]
  NOT: [BoardScalarWhereInput!]
}

type BoardSubscriptionPayload {
  mutation: MutationType!
  node: Board
  updatedFields: [String!]
  previousValues: BoardPreviousValues
}

input BoardSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BoardWhereInput
  AND: [BoardSubscriptionWhereInput!]
  OR: [BoardSubscriptionWhereInput!]
  NOT: [BoardSubscriptionWhereInput!]
}

input BoardUpdateInput {
  project: ProjectUpdateOneWithoutBoardsInput
  name: String
  description: String
  columns: ColumnUpdateManyWithoutBoardInput
}

input BoardUpdateManyDataInput {
  name: String
  description: String
}

input BoardUpdateManyMutationInput {
  name: String
  description: String
}

input BoardUpdateManyWithoutProjectInput {
  create: [BoardCreateWithoutProjectInput!]
  delete: [BoardWhereUniqueInput!]
  connect: [BoardWhereUniqueInput!]
  set: [BoardWhereUniqueInput!]
  disconnect: [BoardWhereUniqueInput!]
  update: [BoardUpdateWithWhereUniqueWithoutProjectInput!]
  upsert: [BoardUpsertWithWhereUniqueWithoutProjectInput!]
  deleteMany: [BoardScalarWhereInput!]
  updateMany: [BoardUpdateManyWithWhereNestedInput!]
}

input BoardUpdateManyWithWhereNestedInput {
  where: BoardScalarWhereInput!
  data: BoardUpdateManyDataInput!
}

input BoardUpdateOneRequiredWithoutColumnsInput {
  create: BoardCreateWithoutColumnsInput
  update: BoardUpdateWithoutColumnsDataInput
  upsert: BoardUpsertWithoutColumnsInput
  connect: BoardWhereUniqueInput
}

input BoardUpdateWithoutColumnsDataInput {
  project: ProjectUpdateOneWithoutBoardsInput
  name: String
  description: String
}

input BoardUpdateWithoutProjectDataInput {
  name: String
  description: String
  columns: ColumnUpdateManyWithoutBoardInput
}

input BoardUpdateWithWhereUniqueWithoutProjectInput {
  where: BoardWhereUniqueInput!
  data: BoardUpdateWithoutProjectDataInput!
}

input BoardUpsertWithoutColumnsInput {
  update: BoardUpdateWithoutColumnsDataInput!
  create: BoardCreateWithoutColumnsInput!
}

input BoardUpsertWithWhereUniqueWithoutProjectInput {
  where: BoardWhereUniqueInput!
  update: BoardUpdateWithoutProjectDataInput!
  create: BoardCreateWithoutProjectInput!
}

input BoardWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  project: ProjectWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  columns_every: ColumnWhereInput
  columns_some: ColumnWhereInput
  columns_none: ColumnWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [BoardWhereInput!]
  OR: [BoardWhereInput!]
  NOT: [BoardWhereInput!]
}

input BoardWhereUniqueInput {
  id: ID
}

type Card {
  id: ID!
  column: Column!
  user: User!
  priority: Priority!
  type: Type!
  name: String!
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CardConnection {
  pageInfo: PageInfo!
  edges: [CardEdge]!
  aggregate: AggregateCard!
}

input CardCreateInput {
  id: ID
  column: ColumnCreateOneWithoutCardsInput!
  user: UserCreateOneInput!
  priority: Priority!
  type: Type!
  name: String!
  description: String
}

input CardCreateManyWithoutColumnInput {
  create: [CardCreateWithoutColumnInput!]
  connect: [CardWhereUniqueInput!]
}

input CardCreateWithoutColumnInput {
  id: ID
  user: UserCreateOneInput!
  priority: Priority!
  type: Type!
  name: String!
  description: String
}

type CardEdge {
  node: Card!
  cursor: String!
}

enum CardOrderByInput {
  id_ASC
  id_DESC
  priority_ASC
  priority_DESC
  type_ASC
  type_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CardPreviousValues {
  id: ID!
  priority: Priority!
  type: Type!
  name: String!
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

input CardScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  priority: Priority
  priority_not: Priority
  priority_in: [Priority!]
  priority_not_in: [Priority!]
  type: Type
  type_not: Type
  type_in: [Type!]
  type_not_in: [Type!]
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CardScalarWhereInput!]
  OR: [CardScalarWhereInput!]
  NOT: [CardScalarWhereInput!]
}

type CardSubscriptionPayload {
  mutation: MutationType!
  node: Card
  updatedFields: [String!]
  previousValues: CardPreviousValues
}

input CardSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CardWhereInput
  AND: [CardSubscriptionWhereInput!]
  OR: [CardSubscriptionWhereInput!]
  NOT: [CardSubscriptionWhereInput!]
}

input CardUpdateInput {
  column: ColumnUpdateOneRequiredWithoutCardsInput
  user: UserUpdateOneRequiredInput
  priority: Priority
  type: Type
  name: String
  description: String
}

input CardUpdateManyDataInput {
  priority: Priority
  type: Type
  name: String
  description: String
}

input CardUpdateManyMutationInput {
  priority: Priority
  type: Type
  name: String
  description: String
}

input CardUpdateManyWithoutColumnInput {
  create: [CardCreateWithoutColumnInput!]
  delete: [CardWhereUniqueInput!]
  connect: [CardWhereUniqueInput!]
  set: [CardWhereUniqueInput!]
  disconnect: [CardWhereUniqueInput!]
  update: [CardUpdateWithWhereUniqueWithoutColumnInput!]
  upsert: [CardUpsertWithWhereUniqueWithoutColumnInput!]
  deleteMany: [CardScalarWhereInput!]
  updateMany: [CardUpdateManyWithWhereNestedInput!]
}

input CardUpdateManyWithWhereNestedInput {
  where: CardScalarWhereInput!
  data: CardUpdateManyDataInput!
}

input CardUpdateWithoutColumnDataInput {
  user: UserUpdateOneRequiredInput
  priority: Priority
  type: Type
  name: String
  description: String
}

input CardUpdateWithWhereUniqueWithoutColumnInput {
  where: CardWhereUniqueInput!
  data: CardUpdateWithoutColumnDataInput!
}

input CardUpsertWithWhereUniqueWithoutColumnInput {
  where: CardWhereUniqueInput!
  update: CardUpdateWithoutColumnDataInput!
  create: CardCreateWithoutColumnInput!
}

input CardWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  column: ColumnWhereInput
  user: UserWhereInput
  priority: Priority
  priority_not: Priority
  priority_in: [Priority!]
  priority_not_in: [Priority!]
  type: Type
  type_not: Type
  type_in: [Type!]
  type_not_in: [Type!]
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CardWhereInput!]
  OR: [CardWhereInput!]
  NOT: [CardWhereInput!]
}

input CardWhereUniqueInput {
  id: ID
}

type Column {
  id: ID!
  board: Board!
  name: String!
  settings: Json
  cards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ColumnConnection {
  pageInfo: PageInfo!
  edges: [ColumnEdge]!
  aggregate: AggregateColumn!
}

input ColumnCreateInput {
  id: ID
  board: BoardCreateOneWithoutColumnsInput!
  name: String!
  settings: Json
  cards: CardCreateManyWithoutColumnInput
}

input ColumnCreateManyWithoutBoardInput {
  create: [ColumnCreateWithoutBoardInput!]
  connect: [ColumnWhereUniqueInput!]
}

input ColumnCreateOneWithoutCardsInput {
  create: ColumnCreateWithoutCardsInput
  connect: ColumnWhereUniqueInput
}

input ColumnCreateWithoutBoardInput {
  id: ID
  name: String!
  settings: Json
  cards: CardCreateManyWithoutColumnInput
}

input ColumnCreateWithoutCardsInput {
  id: ID
  board: BoardCreateOneWithoutColumnsInput!
  name: String!
  settings: Json
}

type ColumnEdge {
  node: Column!
  cursor: String!
}

enum ColumnOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  settings_ASC
  settings_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ColumnPreviousValues {
  id: ID!
  name: String!
  settings: Json
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ColumnScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ColumnScalarWhereInput!]
  OR: [ColumnScalarWhereInput!]
  NOT: [ColumnScalarWhereInput!]
}

type ColumnSubscriptionPayload {
  mutation: MutationType!
  node: Column
  updatedFields: [String!]
  previousValues: ColumnPreviousValues
}

input ColumnSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ColumnWhereInput
  AND: [ColumnSubscriptionWhereInput!]
  OR: [ColumnSubscriptionWhereInput!]
  NOT: [ColumnSubscriptionWhereInput!]
}

input ColumnUpdateInput {
  board: BoardUpdateOneRequiredWithoutColumnsInput
  name: String
  settings: Json
  cards: CardUpdateManyWithoutColumnInput
}

input ColumnUpdateManyDataInput {
  name: String
  settings: Json
}

input ColumnUpdateManyMutationInput {
  name: String
  settings: Json
}

input ColumnUpdateManyWithoutBoardInput {
  create: [ColumnCreateWithoutBoardInput!]
  delete: [ColumnWhereUniqueInput!]
  connect: [ColumnWhereUniqueInput!]
  set: [ColumnWhereUniqueInput!]
  disconnect: [ColumnWhereUniqueInput!]
  update: [ColumnUpdateWithWhereUniqueWithoutBoardInput!]
  upsert: [ColumnUpsertWithWhereUniqueWithoutBoardInput!]
  deleteMany: [ColumnScalarWhereInput!]
  updateMany: [ColumnUpdateManyWithWhereNestedInput!]
}

input ColumnUpdateManyWithWhereNestedInput {
  where: ColumnScalarWhereInput!
  data: ColumnUpdateManyDataInput!
}

input ColumnUpdateOneRequiredWithoutCardsInput {
  create: ColumnCreateWithoutCardsInput
  update: ColumnUpdateWithoutCardsDataInput
  upsert: ColumnUpsertWithoutCardsInput
  connect: ColumnWhereUniqueInput
}

input ColumnUpdateWithoutBoardDataInput {
  name: String
  settings: Json
  cards: CardUpdateManyWithoutColumnInput
}

input ColumnUpdateWithoutCardsDataInput {
  board: BoardUpdateOneRequiredWithoutColumnsInput
  name: String
  settings: Json
}

input ColumnUpdateWithWhereUniqueWithoutBoardInput {
  where: ColumnWhereUniqueInput!
  data: ColumnUpdateWithoutBoardDataInput!
}

input ColumnUpsertWithoutCardsInput {
  update: ColumnUpdateWithoutCardsDataInput!
  create: ColumnCreateWithoutCardsInput!
}

input ColumnUpsertWithWhereUniqueWithoutBoardInput {
  where: ColumnWhereUniqueInput!
  update: ColumnUpdateWithoutBoardDataInput!
  create: ColumnCreateWithoutBoardInput!
}

input ColumnWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  board: BoardWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  cards_every: CardWhereInput
  cards_some: CardWhereInput
  cards_none: CardWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ColumnWhereInput!]
  OR: [ColumnWhereInput!]
  NOT: [ColumnWhereInput!]
}

input ColumnWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Json

scalar Long

type Mutation {
  createAccess(data: AccessCreateInput!): Access!
  updateAccess(data: AccessUpdateInput!, where: AccessWhereUniqueInput!): Access
  updateManyAccesses(data: AccessUpdateManyMutationInput!, where: AccessWhereInput): BatchPayload!
  upsertAccess(where: AccessWhereUniqueInput!, create: AccessCreateInput!, update: AccessUpdateInput!): Access!
  deleteAccess(where: AccessWhereUniqueInput!): Access
  deleteManyAccesses(where: AccessWhereInput): BatchPayload!
  createBoard(data: BoardCreateInput!): Board!
  updateBoard(data: BoardUpdateInput!, where: BoardWhereUniqueInput!): Board
  updateManyBoards(data: BoardUpdateManyMutationInput!, where: BoardWhereInput): BatchPayload!
  upsertBoard(where: BoardWhereUniqueInput!, create: BoardCreateInput!, update: BoardUpdateInput!): Board!
  deleteBoard(where: BoardWhereUniqueInput!): Board
  deleteManyBoards(where: BoardWhereInput): BatchPayload!
  createCard(data: CardCreateInput!): Card!
  updateCard(data: CardUpdateInput!, where: CardWhereUniqueInput!): Card
  updateManyCards(data: CardUpdateManyMutationInput!, where: CardWhereInput): BatchPayload!
  upsertCard(where: CardWhereUniqueInput!, create: CardCreateInput!, update: CardUpdateInput!): Card!
  deleteCard(where: CardWhereUniqueInput!): Card
  deleteManyCards(where: CardWhereInput): BatchPayload!
  createColumn(data: ColumnCreateInput!): Column!
  updateColumn(data: ColumnUpdateInput!, where: ColumnWhereUniqueInput!): Column
  updateManyColumns(data: ColumnUpdateManyMutationInput!, where: ColumnWhereInput): BatchPayload!
  upsertColumn(where: ColumnWhereUniqueInput!, create: ColumnCreateInput!, update: ColumnUpdateInput!): Column!
  deleteColumn(where: ColumnWhereUniqueInput!): Column
  deleteManyColumns(where: ColumnWhereInput): BatchPayload!
  createProject(data: ProjectCreateInput!): Project!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateManyProjects(data: ProjectUpdateManyMutationInput!, where: ProjectWhereInput): BatchPayload!
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

enum Priority {
  Critical
  High
  Medium
  Low
}

type Project {
  id: ID!
  name: String!
  description: String
  user: User!
  boards(where: BoardWhereInput, orderBy: BoardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Board!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  id: ID
  name: String!
  description: String
  user: UserCreateOneInput!
  boards: BoardCreateManyWithoutProjectInput
}

input ProjectCreateOneInput {
  create: ProjectCreateInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateOneWithoutBoardsInput {
  create: ProjectCreateWithoutBoardsInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateWithoutBoardsInput {
  id: ID
  name: String!
  description: String
  user: UserCreateOneInput!
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProjectPreviousValues {
  id: ID!
  name: String!
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
  AND: [ProjectSubscriptionWhereInput!]
  OR: [ProjectSubscriptionWhereInput!]
  NOT: [ProjectSubscriptionWhereInput!]
}

input ProjectUpdateDataInput {
  name: String
  description: String
  user: UserUpdateOneRequiredInput
  boards: BoardUpdateManyWithoutProjectInput
}

input ProjectUpdateInput {
  name: String
  description: String
  user: UserUpdateOneRequiredInput
  boards: BoardUpdateManyWithoutProjectInput
}

input ProjectUpdateManyMutationInput {
  name: String
  description: String
}

input ProjectUpdateOneRequiredInput {
  create: ProjectCreateInput
  update: ProjectUpdateDataInput
  upsert: ProjectUpsertNestedInput
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateOneWithoutBoardsInput {
  create: ProjectCreateWithoutBoardsInput
  update: ProjectUpdateWithoutBoardsDataInput
  upsert: ProjectUpsertWithoutBoardsInput
  delete: Boolean
  disconnect: Boolean
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateWithoutBoardsDataInput {
  name: String
  description: String
  user: UserUpdateOneRequiredInput
}

input ProjectUpsertNestedInput {
  update: ProjectUpdateDataInput!
  create: ProjectCreateInput!
}

input ProjectUpsertWithoutBoardsInput {
  update: ProjectUpdateWithoutBoardsDataInput!
  create: ProjectCreateWithoutBoardsInput!
}

input ProjectWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  user: UserWhereInput
  boards_every: BoardWhereInput
  boards_some: BoardWhereInput
  boards_none: BoardWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ProjectWhereInput!]
  OR: [ProjectWhereInput!]
  NOT: [ProjectWhereInput!]
}

input ProjectWhereUniqueInput {
  id: ID
}

type Query {
  access(where: AccessWhereUniqueInput!): Access
  accesses(where: AccessWhereInput, orderBy: AccessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Access]!
  accessesConnection(where: AccessWhereInput, orderBy: AccessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AccessConnection!
  board(where: BoardWhereUniqueInput!): Board
  boards(where: BoardWhereInput, orderBy: BoardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Board]!
  boardsConnection(where: BoardWhereInput, orderBy: BoardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BoardConnection!
  card(where: CardWhereUniqueInput!): Card
  cards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card]!
  cardsConnection(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CardConnection!
  column(where: ColumnWhereUniqueInput!): Column
  columns(where: ColumnWhereInput, orderBy: ColumnOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Column]!
  columnsConnection(where: ColumnWhereInput, orderBy: ColumnOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ColumnConnection!
  project(where: ProjectWhereUniqueInput!): Project
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  access(where: AccessSubscriptionWhereInput): AccessSubscriptionPayload
  board(where: BoardSubscriptionWhereInput): BoardSubscriptionPayload
  card(where: CardSubscriptionWhereInput): CardSubscriptionPayload
  column(where: ColumnSubscriptionWhereInput): ColumnSubscriptionPayload
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

enum Type {
  Task
  Bug
  Improvement
}

type User {
  id: ID!
  email: String!
  password: String!
  username: String
  firstName: String
  lastName: String
  avatar: String
  settings: Json
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  password: String!
  username: String
  firstName: String
  lastName: String
  avatar: String
  settings: Json
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  username_ASC
  username_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  avatar_ASC
  avatar_DESC
  settings_ASC
  settings_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  username: String
  firstName: String
  lastName: String
  avatar: String
  settings: Json
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  password: String
  username: String
  firstName: String
  lastName: String
  avatar: String
  settings: Json
}

input UserUpdateInput {
  email: String
  password: String
  username: String
  firstName: String
  lastName: String
  avatar: String
  settings: Json
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  username: String
  firstName: String
  lastName: String
  avatar: String
  settings: Json
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    