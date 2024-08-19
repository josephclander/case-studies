const test1 = [
  {
    Values: [],
    TargetType: "MergeField",
    TargetName: "Hostname",
    IsAccountConnectorProperty: true,
    Description:
      'This is your Shopify domain. For example, if you login using "https://example.myshopify.com/admin" you should enter "example.myshopify.com".',
    DisplayName: "Hostname",
    DisplayOrder: 1,
  },
];

const test2 = [
  {
    Values: [],
    TargetType: "MergeField",
    TargetName: "Hostname",
    IsAccountConnectorProperty: true,
    Description:
      'This is your Shopify domain. For example, if you login using "https://example.myshopify.com/admin" you should enter "example.myshopify.com".',
    DisplayName: "Hostname",
    DisplayOrder: 1,
  },
  {
    Values: [],
    TargetType: "MergeField",
    TargetName: "Scopes",
    IsPartnerProperty: true,
    Description: "A list of scopes to be requested during authorization.",
    DisplayName: "Scopes",
    IsOptional: true,
    DefaultValue:
      "write_merchant_managed_fulfillment_orders,read_merchant_managed_fulfillment_orders,write_customers,write_orders,write_products,read_customers,read_products,read_inventory,write_inventory,write_gift_cards,read_gift_cards,read_draft_orders,write_draft_orders,write_order_edits",
    DisplayOrder: 2,
  },
];

const test3 = [
  {
    Values: [],
    TargetType: "MergeField",
    TargetName: "Hostname",
    IsAccountConnectorProperty: true,
    Description:
      'This is your Shopify domain. For example, if you login using "https://example.myshopify.com/admin" you should enter "example.myshopify.com".',
    DisplayName: "Hostname",
    DisplayOrder: 2,
  },
  {
    Values: [],
    TargetType: "MergeField",
    TargetName: "Scopes",
    IsPartnerProperty: true,
    Description: "A list of scopes to be requested during authorization.",
    DisplayName: "Scopes",
    IsOptional: true,
    DefaultValue:
      "write_merchant_managed_fulfillment_orders,read_merchant_managed_fulfillment_orders,write_customers,write_orders,write_products,read_customers,read_products,read_inventory,write_inventory,write_gift_cards,read_gift_cards,read_draft_orders,write_draft_orders,write_order_edits",
    DisplayOrder: 1,
  },
];

const result3 = [
  {
    Values: [],
    TargetType: "MergeField",
    TargetName: "Hostname",
    IsAccountConnectorProperty: true,
    Description:
      'This is your Shopify domain. For example, if you login using "https://example.myshopify.com/admin" you should enter "example.myshopify.com".',
    DisplayName: "Hostname",
    DisplayOrder: 1,
  },
  {
    Values: [],
    TargetType: "MergeField",
    TargetName: "Scopes",
    IsPartnerProperty: true,
    Description: "A list of scopes to be requested during authorization.",
    DisplayName: "Scopes",
    IsOptional: true,
    DefaultValue:
      "write_merchant_managed_fulfillment_orders,read_merchant_managed_fulfillment_orders,write_customers,write_orders,write_products,read_customers,read_products,read_inventory,write_inventory,write_gift_cards,read_gift_cards,read_draft_orders,write_draft_orders,write_order_edits",
    DisplayOrder: 2,
  },
];

const test4 = [];

const test5 = [
  { field1: "hello", DisplayOrder: 3 },
  { field1: "hi", DisplayOrder: 2 },
  {
    field1: "howdy",
    other: [
      { field2: "bye", DisplayOrder: 1 },
      { field2: "so long", DisplayOrder: 2 },
    ],
    DisplayOrder: 1,
  },
];

const result5 = [
  { field1: "hello", DisplayOrder: 1 },
  { field1: "hi", DisplayOrder: 2 },
  {
    field1: "howdy",
    other: [
      { field2: "bye", DisplayOrder: 1 },
      { field2: "so long", DisplayOrder: 2 },
    ],
    DisplayOrder: 3,
  },
];

const test6 = [
  { field1: "hello", DisplayOrder: 3 },
  { field1: "hi", DisplayOrder: 2 },
  {
    field1: "howdy",
    other: [
      { field2: "so long", DisplayOrder: 2 },
      { field2: "bye", DisplayOrder: 1 },
    ],
    DisplayOrder: 1,
  },
];

const result6 = [
  { field1: "hello", DisplayOrder: 1 },
  { field1: "hi", DisplayOrder: 2 },
  {
    field1: "howdy",
    other: [
      { field2: "so long", DisplayOrder: 2 },
      { field2: "bye", DisplayOrder: 1 },
    ],
    DisplayOrder: 3,
  },
];

module.exports = {
  test1,
  test2,
  test3,
  result3,
  test4,
  test5,
  result5,
  test6,
  result6,
};
