// To use add your input to the variable
// type npm run start in the console
// your json will be returned in the console

// insert contents
// replace the example
const yourInput = {
  required: [
    "AddressNumber",
    "Country",
    "OrganizationName",
    "PartyNumber",
    "PartyNumberKey",
  ],
  type: "object",
  properties: {
    AccountTeam: {
      title: "Account Team",
      type: "array",
      description:
        "The account team resource is used to view the team members and territory team members associated with an account.",
      items: {
        $ref: "#/components/schemas/accounts-AccountTeam-item-post-request",
      },
    },
    PartyNumberKey: {
      title: "Registry ID",
      maxLength: 30,
      type: "string",
      description: "The alternate identifier of the party.",
      nullable: false,
    },
    SiebelLocation: {
      title: "Location",
      maxLength: 50,
      type: "string",
      description: "Location of account - optional part of User Primary Key.",
      nullable: true,
    },
    Address: {
      title: "Addresses",
      type: "array",
      description:
        "The addresses resource is used to view, create, update, and delete addresses of an account. An address contains the detailed location information of an account.",
      items: {
        $ref: "#/components/schemas/accounts-Address-item-post-request",
      },
    },
    YearIncorporated: {
      title: "Year Incorporated",
      type: "integer",
      description: "The year that the business was formally incorporated.",
      format: "int32",
      nullable: true,
      "x-hints": {
        precision: 4,
      },
    },
    NamedFlag: {
      title: "Named Account",
      maxLength: 1,
      type: "boolean",
      description:
        "Indicates if the sales account is a named sales account. If the value is True, then the account is a named account. The default value is False.",
      nullable: true,
      default: false,
      "x-hints": {
        operators: ["=", "<>"],
      },
    },
    ConflictId: {
      type: "integer",
      description:
        "The unique identifier of the conflict. This number is used by mobile or portable applications that consume the web service.",
      format: "int64",
      nullable: false,
      default: 0,
      "x-hints": {
        precision: 18,
      },
    },
    ExportIndicator: {
      title: "Exporter Indicator",
      maxLength: 30,
      type: "string",
      description:
        "Indicates whether the organization is an exporter. If the value is Y, then the organization is an exporter. The default value is N.",
      nullable: true,
    },
    FaxVerificationDate: {
      title: "Fax Verification Date",
      type: "string",
      description:
        "The date when fax number was last verified for the account.",
      format: "date",
      nullable: true,
      "x-queryable": false,
      "x-hints": {
        dependencies: ["FaxStr"],
      },
    },
    YearEstablished: {
      title: "Year Established",
      type: "integer",
      description:
        "The year that the organization started it business operations.",
      format: "int32",
      nullable: true,
      "x-hints": {
        precision: 4,
      },
    },
    CurrencyCode: {
      title: "Currency Code",
      maxLength: 15,
      type: "string",
      description:
        "The currency code. A list of valid values are defined in the lookup ZCA_COMMON_CORPORATE_CURRENCY. Review and update the profile option using the Setup and Maintenance work area, Manage Currency Profile Options task.",
      nullable: true,
      "x-queryable": false,
      "x-hints": {
        controlType: "choice",
      },
    },
    EmployeesAtPrimaryAddressEstimation: {
      title: "Number of Employees at Identifying Address Estimated Qualifier",
      maxLength: 30,
      type: "string",
      description:
        "The estimated minimum number of employees at the primary address. A list of accepted values are defined in the lookup type EMP_AT_PRIMARY_ADR_MIN_IND. Review and update the values using the Setup and Maintenance work area, Manage Trading Community Common Lookups task.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
      },
    },
    Mailstop: {
      title: "Mail Stop",
      maxLength: 60,
      type: "string",
      description:
        "A user-defined code to indicate a mail drop point within their organization.",
      nullable: true,
    },
    ParentDUNSNumber: {
      title: "Parent D-U-N-S Number",
      maxLength: 30,
      type: "string",
      description:
        "The DUNS Number of the organization or the parent entity that owns a majority stake of the organization's capital stock. The parent entity can be a subsidiary of another corporation. If the parent also has branches, then it is regarded as headquarters as well as a parent company.\nA headquarters is a business establishment that has branches or divisions reporting to it, and is financially responsible for those branches or divisions. If the headquarters has more than 50% of capital stock owned by another corporation, it also will be a subsidiary. If it owns more than 50% of capital stock of another corporation, then it is also a parent.",
      nullable: true,
    },
    FaxNumber: {
      title: "Fax",
      maxLength: 40,
      type: "string",
      description:
        "The fax number of the organization in the local format. The number should not include area code, country code, or extension.",
      nullable: true,
      "x-hints": {
        protectionKey: "PhoneEO.PhoneNumber",
        protectionObjectTitle: "Phone",
        protectionState: "TOKENIZED",
        protectionAttributeTitle: "Phone",
      },
    },
    ParentAccountPartyId: {
      title: "Parent Account ID",
      type: "integer",
      description:
        "The party Id of the parent account within the hierarchy. To assign a parent account to a sales account, you must provide the parent account's party ID, party number, or source system reference.",
      nullable: true,
      "x-hints": {
        AltLabel: "Parent Company",
      },
    },
    PrimaryContactPartyId: {
      title: "Primary Contact Party ID",
      type: "integer",
      description:
        "The unique identifier of the primary contact of the account.",
      format: "int64",
      nullable: true,
      "x-hints": {
        precision: 18,
        AltLabel: "Primary Contact",
      },
    },
    PreferredContactMethod: {
      title: "Preferred Contact Method",
      maxLength: 30,
      type: "string",
      description:
        "The preferred contact method of the organization. The accepted values are defined in the lookup type HZ_PREFERRED_CONTACT_METHOD. Review and update the codes using the Setup and Maintenance work area, Manage Trading Community Common Lookups task.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
      },
    },
    DomesticUltimateDatafoxId: {
      title: "Domestic Ultimate DataFox Id",
      maxLength: 30,
      type: "string",
      description:
        "The DataFox Company identifier of the Domestic Ultimate for the account, which is the highest family member in the same country as this business entity. A subject may be its own Domestic Ultimate.",
      nullable: true,
    },
    MinorityOwnedType: {
      title: "Type of Minority-Owned Organization",
      maxLength: 30,
      type: "string",
      description: "The type of minority-owned firm.",
      nullable: true,
    },
    CEOName: {
      title: "Chief Executive Name",
      maxLength: 240,
      type: "string",
      description: "The name of the organization???s chief executive officer.",
      nullable: true,
    },
    AnalysisFiscalYear: {
      title: "Analysis Year",
      maxLength: 5,
      type: "string",
      description:
        "The fiscal year used as the source for financial information.",
      nullable: true,
    },
    MinorityOwnedIndicator: {
      title: "Minority-Owned Indicator",
      maxLength: 30,
      type: "string",
      description:
        "Indicates whether the organization is primarily owned by ethnic or racial minorities. If the value is Y, then the organization is owned by ethnic or racial minorities. company is primarily owned by ethnic or racial minorities. The default value is N.",
      nullable: true,
    },
    BusinessScope: {
      title: "Business Scope",
      maxLength: 20,
      type: "string",
      description:
        "The class of business to which the account belongs, such as local, national, or international.",
      nullable: true,
    },
    DomesticUltimateDUNSNumber: {
      title: "Domestic Ultimate D-U-N-S Number",
      maxLength: 30,
      type: "string",
      description:
        "The DUNS Number for the Domestic Ultimate. A Domestic Ultimate is the highest member of the same country in the organization's hierarchy. An organization can be its own Domestic Ultimate.",
      nullable: true,
    },
    PrincipalName: {
      title: "Principal Name",
      maxLength: 240,
      type: "string",
      description:
        "The name of the highest ranking person in the organization.",
      nullable: true,
    },
    CertificationLevel: {
      title: "Certification Level",
      maxLength: 30,
      type: "string",
      description:
        "The certification level of the organization. A list of valid certification level codes is defined using the lookup HZ_PARTY_CERT_LEVEL. Review and update the codes using the Setup and Maintenance work area, Manage Trading Community Common Lookups task.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
      },
    },
    EmailAddress: {
      title: "Email",
      maxLength: 320,
      type: "string",
      description:
        "The e-mail address of the contact point for the organization.",
      nullable: true,
      "x-hints": {
        protectionKey: "EmailEO.EmailAddress",
        protectionObjectTitle: "Email",
        protectionState: "TOKENIZED",
        protectionAttributeTitle: "Email",
      },
    },
    PhoneExtension: {
      title: "Phone Extension",
      maxLength: 20,
      type: "string",
      description: "The extension to the phone number of the organization.",
      nullable: true,
      "x-hints": {
        protectionKey: "PhoneEO.PhoneExtension",
        protectionObjectTitle: "Phone",
        protectionState: "TOKENIZED",
        protectionAttributeTitle: "Extension",
      },
    },
    AddressLine3: {
      title: "Address Line 3",
      maxLength: 240,
      type: "string",
      description: "The third line for address.",
      nullable: true,
      "x-hints": {
        protectionKey: "PartySiteEO.Address3",
        protectionObjectTitle: "Address",
        protectionState: "TOKENIZED",
        protectionAttributeTitle: "Address Line 3",
        protectionTokenizationScheme: "WORD",
      },
    },
    PrimaryContactPartyNumber: {
      title: "Primary Contact Party Number",
      type: "string",
      description: "The party number of the primary contact of the account.",
      nullable: true,
    },
    RentOrOwnIndicator: {
      title: "Rent or Own Indicator",
      maxLength: 30,
      type: "string",
      description:
        "Indicates if this contact owns or rents his or her residence. A list of valid values for rent, own, and lease are defined in the lookup OWN_RENT_IND. Review and update the codes using the Setup and Maintenance work area, Manage Standard Lookups task.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
      },
    },
    AddressLine2: {
      title: "Address Line 2",
      maxLength: 240,
      type: "string",
      description: "The second line for address.",
      nullable: true,
      "x-hints": {
        protectionKey: "PartySiteEO.Address2",
        protectionObjectTitle: "Address",
        protectionState: "TOKENIZED",
        protectionAttributeTitle: "Address Line 2",
        protectionTokenizationScheme: "WORD",
      },
    },
    AddressLine1: {
      title: "Address Line 1",
      maxLength: 240,
      type: "string",
      description: "The first line for address.",
      nullable: true,
      "x-hints": {
        protectionKey: "PartySiteEO.Address1",
        protectionObjectTitle: "Address",
        protectionState: "TOKENIZED",
        protectionAttributeTitle: "Address Line 1",
        protectionTokenizationScheme: "WORD",
      },
    },
    CustomerClassification: {
      title: "Aux Classifications",
      type: "array",
      description:
        "The aux classifications resource is used to view, create, update, and delete the auxiliary classifications of the customers associated with the accounts. Auxiliary classification enable you to categorize customers into different groups, such as commercial or private.",
      items: {
        $ref: "#/components/schemas/accounts-CustomerClassification-item-post-request",
      },
    },
    OrganizationSize: {
      title: "Organization Size",
      maxLength: 30,
      type: "string",
      description:
        "The size of the organization based on its revenue, number of employees, and so on.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
      },
    },
    ControlYear: {
      title: "Organization Control Year",
      type: "number",
      description:
        "The year when current ownership gained control of the organization.",
      nullable: true,
    },
    LocalActivityCode: {
      title: "Local Activity Code",
      maxLength: 30,
      type: "string",
      description: "The local activity classification code.",
      nullable: true,
    },
    AddressLine4: {
      title: "Address Line 4",
      maxLength: 240,
      type: "string",
      description: "The fourth line for address.",
      nullable: true,
      "x-hints": {
        protectionKey: "PartySiteEO.Address4",
        protectionObjectTitle: "Address",
        protectionState: "TOKENIZED",
        protectionAttributeTitle: "Address Line 4",
        protectionTokenizationScheme: "WORD",
      },
    },
    Note: {
      title: "Notes",
      type: "array",
      description:
        "The notes resource is used to view, create, update, and delete notes associated with an account. A note captures comments, information, or instructions related to an account.",
      items: {
        $ref: "#/components/schemas/accounts-Note-item-post-request",
      },
    },
    AddressNumber: {
      title: "Site Number",
      maxLength: 30,
      type: "string",
      description:
        "The alternate key identifier of the address that is internally generated during create. One of AddressId, AddressNumber or SourceSystem and SourceSystemReferenceValue keys is used to identify the address record during update.",
      nullable: false,
    },
    Country: {
      title: "Country",
      maxLength: 2,
      type: "string",
      description:
        "The country code of the address. This attribute is defined in the TERRITORY_CODE column in the FND_TERRITORY table.",
      nullable: false,
      "x-hints": {
        controlType: "choice",
      },
    },
    EmailVerificationDate: {
      title: "Email Verification Date",
      type: "string",
      description:
        "The date when email address of the account was last verified.",
      format: "date",
      nullable: true,
      "x-queryable": false,
      "x-hints": {
        dependencies: ["EmailStr"],
      },
    },
    LastEnrichmentDate: {
      title: "Last Enrichment Date",
      type: "string",
      description: "The date when the record was last enriched.",
      format: "date",
      nullable: true,
    },
    Building: {
      title: "Building",
      maxLength: 240,
      type: "string",
      description: "The specific building name or number at a given address.",
      nullable: true,
    },
    FloorNumber: {
      title: "Floor Number",
      maxLength: 40,
      type: "string",
      description:
        "The specific floor number at a given address or in a particular building when building number is provided.",
      nullable: true,
    },
    Description: {
      title: "Description",
      maxLength: 2000,
      type: "string",
      description: "Short description for the company.",
      nullable: true,
    },
    CertificationReasonCode: {
      title: "Certification Reason",
      maxLength: 30,
      type: "string",
      description:
        "The code indicating the reason for the contact's current certification level assignment. A list of valid certification reason codes are defined using the lookup HZ_PARTY_CERT_REASON. Review and update the codes using the Setup and Maintenance work area, Manage Trading Community Common Lookups task.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
      },
    },
    AdditionalName: {
      title: "Additional Names",
      type: "array",
      description:
        "The additional name resource is used to view, create, update, and delete additional names associated with an account. The resource allows you to capture other names associated with an account, such as a maiden name, or a brand name.",
      items: {
        $ref: "#/components/schemas/accounts-AdditionalName-item-post-request",
      },
    },
    SalesProfileNumber: {
      title: "Sales Account Number",
      maxLength: 30,
      type: "string",
      description: "The sales profile number.",
      nullable: false,
    },
    FaxVerificationStatus: {
      title: "Fax Verification Status",
      maxLength: 30,
      type: "string",
      description:
        "The status code of the verification of fax number for the account. The values based on lookup are valid and invalid for fax.",
      nullable: true,
      "x-queryable": false,
      "x-hints": {
        controlType: "choice",
        dependencies: ["FaxStr"],
      },
    },
    OrganizationTypeCode: {
      title: "Organization Type Code",
      type: "string",
      description: "The organization type code.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
      },
    },
    BusinessReport: {
      title: "D&B Business Report",
      type: "string",
      description: "The Dun & Bradstreet business information report.",
      format: "byte",
      nullable: true,
      "x-queryable": false,
    },
    URL: {
      title: "URL",
      maxLength: 2000,
      type: "string",
      description:
        "The uniform resource locator or a website containing information about the organization.",
      nullable: true,
      "x-hints": {
        protectionKey: "WebEO.Url",
        AltLabel: "Website",
        protectionObjectTitle: "URL",
        protectionState: "TOKENIZED",
        protectionAttributeTitle: "URL",
      },
    },
    WomanOwnedIndicator: {
      title: "Woman-Owned Indicator",
      maxLength: 30,
      type: "string",
      description:
        "Indicates whether the organization is primarily owned by women. If the value is Y, then the organization is primarily owned by women. The default value is N.",
      nullable: true,
    },
    AdditionalIdentifier: {
      title: "Additional Identifier",
      type: "array",
      description:
        "The additional identifiers resource is used to view, create, update, and delete an additional identifiers such as driver's license number or passport number.",
      items: {
        $ref: "#/components/schemas/accounts-AdditionalIdentifier-item-post-request",
      },
    },
    ContactPoint: {
      title: "Contact Points",
      type: "array",
      description:
        "The contact point resource is used to view, create, update, and delete contact points for an account. Contact points can be geographical addresses, phone numbers, e-mail IDs, URLs, messenger IDs, and so on.",
      items: {
        $ref: "#/components/schemas/accounts-ContactPoint-item-post-request",
      },
    },
    FavoriteAccountFlag: {
      title: "Favorite",
      maxLength: 10,
      type: "boolean",
      description:
        "Indicates if the account is a favorite.  The default value is false.",
      nullable: true,
      default: false,
      "x-hints": {
        controlType: "choice",
      },
    },
    FaxExtension: {
      title: "Fax Extension",
      maxLength: 20,
      type: "string",
      description: "The extension to the fax number of the organization.",
      nullable: true,
      "x-hints": {
        protectionKey: "PhoneEO.PhoneExtension",
        protectionObjectTitle: "Phone",
        protectionState: "TOKENIZED",
        protectionAttributeTitle: "Extension",
      },
    },
    OutOfBusinessIndicator: {
      title: "Out of Business Indicator",
      maxLength: 30,
      type: "string",
      description:
        "Indicates whether the organization is out of business. If the value is Y, then the organization is out of business. The default value is N.",
      nullable: true,
    },
    AddressLinesPhonetic: {
      title: "Address Lines Phonetic",
      maxLength: 560,
      type: "string",
      description:
        "The phonetic or kana representation of the Kanji address lines (used in Japan).",
      nullable: true,
    },
    SmallBusinessIndicator: {
      title: "Small Business Indicator",
      maxLength: 30,
      type: "string",
      description:
        "Indicates whether the organization is considered as a small business. If the value is Y, then the organization is considered as a small business. The default value is N.",
      nullable: true,
    },
    ParentAccountSourceSystemReferenceValue: {
      title: "Parent Account Source System Reference",
      type: "string",
      description:
        "The source system reference of the parent account within the hierarchy.",
      nullable: true,
    },
    GlobalUltimateDUNSNumber: {
      title: "Global Ultimate D-U-N-S Number",
      maxLength: 30,
      type: "string",
      description:
        "The DUNS Number for the Global Ultimate. A Global Ultimate is the highest member in the organization's hierarchy. An organization can be its own Global Ultimate.",
      nullable: true,
    },
    OwnerPartyId: {
      title: "Owner ID",
      type: "integer",
      description:
        "The unique identifier of a valid employee resource who owns and manages the sales account.",
      format: "int64",
      nullable: true,
      "x-hints": {
        precision: 18,
        AltLabel: "Owner",
      },
    },
    EmployeesTotal: {
      title: "Number of Employees",
      type: "number",
      description: "The total number of employees in the organization.",
      nullable: true,
      "x-hints": {
        precision: 18,
      },
    },
    GrowthStrategyDescription: {
      title: "Growth Strategy Description",
      maxLength: 2000,
      type: "string",
      description: "The user-defined description of growth strategy.",
      nullable: true,
    },
    Type: {
      title: "Type",
      maxLength: 30,
      type: "string",
      description:
        "The account type that defines if the account is a sales account or a prospect or any other party type. The accepted values are defined in the lookup type ZCA_ACCOUNT_TYPE. It is defaulted to ZCA_CUSTOMER if no value is provided.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
        operators: ["=", "<>"],
      },
    },
    ParentAccountPartyNumber: {
      title: "Parent Account Registry ID",
      type: "string",
      description:
        "The party number of the parent account within the hierarchy.",
      nullable: true,
    },
    PrimaryContactSourceSystemReferenceValue: {
      title: "Primary Contact Source System Reference",
      type: "string",
      description:
        "The unique identifier for the account's primary contact as specified in the external source system.",
      nullable: true,
      "x-hints": {
        dependencies: ["PrimaryContactPartyId"],
      },
    },
    Relationship: {
      title: "Relationships",
      type: "array",
      description:
        "The relationships resource is used to view, create, and update account relationships. An account relationship is the interconnection between parties, such as between an account and the account's contact person.",
      items: {
        $ref: "#/components/schemas/accounts-Relationship-item-post-request",
      },
    },
    MissionStatement: {
      title: "Mission Statement",
      maxLength: 2000,
      type: "string",
      description:
        "The corporate charter of organization in user-defined text format.",
      nullable: true,
    },
    LineOfBusiness: {
      title: "Line of Business",
      maxLength: 240,
      type: "string",
      description: "The type of business activities performed at this site.",
      nullable: true,
    },
    PhoneNumber: {
      title: "Phone",
      maxLength: 40,
      type: "string",
      description:
        "The phone number of the organization in the local format. The number should not include area code, country code, or extension.",
      nullable: true,
      "x-hints": {
        protectionKey: "PhoneEO.PhoneNumber",
        protectionObjectTitle: "Phone",
        protectionState: "TOKENIZED",
        protectionAttributeTitle: "Phone",
      },
    },
    TotalEmployeesIndicator: {
      title: "Number of Employees Includes Subsidiaries",
      maxLength: 30,
      type: "string",
      description:
        "Indicates if subsidiaries are included in the calculation of total employees. The accepted values are defined in the lookup type TOTAL_EMPLOYEES_INDICATOR.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
      },
    },
    AddressType: {
      title: "Address Type",
      type: "string",
      description:
        "Additional information as type of address like BillTo, ShipTo.",
      nullable: true,
      "x-queryable": false,
    },
    SourceSystem: {
      title: "Party Source System",
      type: "string",
      description:
        "The name of external source system where the account party is imported from. The values configured in setup task Trading Community Source System.",
      nullable: true,
    },
    LocalBusinessIdentifier: {
      title: "Common Business Identifier",
      maxLength: 60,
      type: "string",
      description:
        "The unique identifier assigned to a businesses by a government agency such as Chamber of Commerce, or any other authority. It is often used by countries other than USA.",
      nullable: true,
    },
    FaxCountryCode: {
      title: "Fax Country Code",
      maxLength: 10,
      type: "string",
      description:
        "The international country code for a fax number, such as 33 for France.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
      },
    },
    TaxpayerIdentificationNumber: {
      title: "Taxpayer Identification Number",
      maxLength: 20,
      type: "string",
      description:
        "The taxpayer identification number that is often a unique identifier of the organization, such as income taxpayer Id in USA and fiscal code or NIF in Europe.",
      nullable: true,
    },
    Attachment: {
      title: "Account Attachments",
      type: "array",
      description:
        "The account attachments resource is used to view, create, update, and delete attachments of an account. An attachment includes additional information about an account.",
      items: {
        $ref: "#/components/schemas/accounts-Attachment-item-post-request",
      },
    },
    EmailFormat: {
      title: "Email Format",
      maxLength: 30,
      type: "string",
      description:
        "The preferred format for e-mail addressed to this organization, such as HTML or ASCII.",
      nullable: true,
    },
    LaborSurplusIndicator: {
      title: "Labor Surplus Indicator",
      maxLength: 30,
      type: "string",
      description:
        "Indicates whether the organization operates in an area with a labor surplus. If the value is Y, then the organization operates in an area with a labor surplus. The default value is N.",
      nullable: true,
    },
    smartActions: {
      title: "Smart Actions",
      type: "array",
      description:
        "The smart actions resource is used to view the name, security, context object, REST operation, confirmation message, and other global properties of smart actions. Smart action item or collection links returned in response payloads are valid at the moment the REST request is processed. Any change to the parent object context can invalidate a previously valid smart action.",
      items: {
        $ref: "#/components/schemas/accounts-smartActions-item-post-request",
      },
    },
    AccountHierarchySummary: {
      title: "Account Hierarchy Summary",
      type: "array",
      description:
        "The account hierarchy summaries resource is used to view the account hierarchy information.",
      items: {
        $ref: "#/components/schemas/accounts-AccountHierarchySummary-item-post-request",
      },
      "x-cardinality": "1",
    },
    CorporationClass: {
      title: "Corporation Class",
      maxLength: 60,
      type: "string",
      description:
        "The taxation classification for corporation entities such as Chapter S in the US.",
      nullable: true,
    },
    DatafoxCompanyId: {
      title: "DataFox Company ID",
      maxLength: 30,
      type: "string",
      description: "Datafox Company Identifier.",
      nullable: true,
    },
    AccountRollup: {
      title: "Account Rollups",
      type: "array",
      description:
        "The account rollups resource is used to view, create, update, and delete an account rollup.",
      items: {
        $ref: "#/components/schemas/accounts-AccountRollup-item-post-request",
      },
      "x-cardinality": "1",
    },
    ParentAccountSourceSystem: {
      title: "Parent Source System",
      type: "string",
      description:
        "The source system of the parent account within the hierarchy.",
      nullable: true,
    },
    NextFiscalYearPotentialRevenueAmount: {
      title: "Next Fiscal Year's Potential Revenue",
      type: "number",
      description:
        "The estimated revenue of the organization to be earned during its next fiscal year.",
      nullable: true,
    },
    DisadvantageIndicator: {
      title: "Disadvantaged Indicator",
      maxLength: 30,
      type: "string",
      description:
        "Indicates whether the organization is considered disadvantaged by the US government under Title 8A.  If the value is Yes, the organization is considered disadvantaged under Title 8A. The default value is No.",
      nullable: true,
    },
    LocalActivityCodeType: {
      title: "Local Activity Code Type",
      maxLength: 30,
      type: "string",
      description: "The type of the local activity classification code.",
      nullable: true,
    },
    SalesProfileStatus: {
      title: "Status",
      maxLength: 30,
      type: "string",
      description: "A valid user-defined status of the sales account.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
        operators: ["=", "<>"],
      },
    },
    TotalEmployeesEstimatedIndicator: {
      title: "Number of Employees Estimated Qualifier",
      maxLength: 30,
      type: "string",
      description:
        "Indicates if the employee total is estimated. The accepted values are defined in the lookup type TOTAL_EMP_EST_IND.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
      },
    },
    TotalEmployeesText: {
      title: "Total Number of Employees",
      maxLength: 60,
      type: "string",
      description: "The total number of employees in text format.",
      nullable: true,
    },
    EmailVerificationStatus: {
      title: "Email Verification Status",
      maxLength: 30,
      type: "string",
      description:
        "The status code of the verification of email address for the account. The values based on the lookup are valid, invalid, or partially invalid for email.",
      nullable: true,
      "x-queryable": false,
      "x-hints": {
        controlType: "choice",
        dependencies: ["EmailStr"],
      },
    },
    AccountContact: {
      title: "Organization Contacts",
      type: "array",
      description:
        "The account contacts resource is used to view, create, update, and delete an account contact. It refers to a person who functions as a contact for an account.",
      items: {
        $ref: "#/components/schemas/accounts-AccountContact-item-post-request",
      },
    },
    CreatedByModule: {
      title: "Created by Application",
      type: "string",
      description:
        "The application module that created the account record. Defaulted to value HZ_WS for all web service based creation. A list of valid certification level codes is defined in the lookup HZ_CREATED_BY_MODULES. You can review and update the codes using the Setup and Maintenance task, Manage Trading Community Common Lookups.",
      nullable: true,
      default: "HZ_WS",
      "x-queryable": false,
    },
    CorpCurrencyCode: {
      title: "Corporate Currency Code",
      maxLength: 15,
      type: "string",
      description:
        "The corporate currency code associated with the account. A list of accepted values is defined in the lookup ZCA_COMMON_CORPORATE_CURRENCY. Review and update the profile option using the Setup and Maintenance work area, Manage Trading Community Common Lookups task.",
      nullable: true,
      "x-queryable": false,
    },
    IndustryCode: {
      title: "Industry Code",
      type: "string",
      description:
        "The Industry classification code. The classification codes are defined for every classification category as specified in IndustryCodeType attribute. Review and update the codes using the Setup and Maintenance work area, Manage Classification Categories task.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
        AltLabel: "Industry",
      },
    },
    ParentOrSubsidiaryIndicator: {
      title: "Subsidiary Indicator",
      maxLength: 30,
      type: "string",
      description:
        "Indicates whether the organization is a parent or subsidiary.",
      nullable: true,
    },
    PreferredFunctionalCurrency: {
      title: "Preferred Functional Currency",
      maxLength: 15,
      type: "string",
      description:
        "The code indicating the organization's default currency. A list of valid currency codes are defined during the application setup.",
      nullable: true,
      "x-hints": {
        controlType: "combo_lov",
      },
    },
    City: {
      title: "City",
      maxLength: 60,
      type: "string",
      description: "The city element of the account.",
      nullable: true,
      "x-hints": {
        protectionKey: "PartySiteEO.City",
        protectionObjectTitle: "Address",
        protectionState: "TOKENIZED",
        protectionAttributeTitle: "City",
      },
    },
    EmployeesAtPrimaryAddressText: {
      title: "Employees at Identifying Address",
      maxLength: 12,
      type: "string",
      description:
        "The number of employees at the referenced address in text format.",
      nullable: true,
    },
    AccountScore: {
      title: "Account Score",
      type: "integer",
      description: "Score assigned based on custom criteria by the user.",
      nullable: true,
    },
    Province: {
      title: "Province",
      maxLength: 60,
      type: "string",
      description: "The province of the address.",
      nullable: true,
      "x-hints": {
        protectionKey: "PartySiteEO.Province",
        protectionObjectTitle: "Address",
        protectionState: "TOKENIZED",
        protectionAttributeTitle: "Province",
      },
    },
    EmployeesAtPrimaryAddressMinimum: {
      title: "Number of Employees at Identifying Address Minimum Qualifier",
      maxLength: 30,
      type: "string",
      description:
        "The qualifier to qualify calculation of employees at the primary address as minimum.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
      },
    },
    PhoneVerificationStatus: {
      title: "Phone Verification Status",
      maxLength: 30,
      type: "string",
      description:
        "The status code of the phone number verification for the account. The values based on lookup are valid and invalid for phone.",
      nullable: true,
      "x-queryable": false,
      "x-hints": {
        controlType: "choice",
        dependencies: ["PhoneStr"],
      },
    },
    ImportIndicator: {
      title: "Importer Indicator",
      maxLength: 30,
      type: "string",
      description:
        "Indicates whether the organization is an importer. If the value is Y, then the organization is an importer. The default value is N.",
      nullable: true,
    },
    EmployeesAtPrimaryAddress: {
      title: "Employees at Primary Address",
      maxLength: 10,
      type: "string",
      description:
        "The qualifier to calculate the estimated number of employees at the primary address. A list of valid qualifier codes are defined using the lookup EMP_AT_PRIMARY_ADR_EST_IND. Review and update the codes using the Setup and Maintenance work area, Manage Trading Community Common Lookups task.",
      nullable: true,
    },
    PostalPlus4Code: {
      title: "Postal Plus 4 Code",
      maxLength: 20,
      type: "string",
      description:
        "The four digit extension to the United States Postal ZIP code.",
      nullable: true,
      "x-hints": {
        protectionKey: "PartySiteEO.PostalPlus4Code",
        protectionObjectTitle: "Address",
        protectionState: "TOKENIZED",
        protectionAttributeTitle: "Postal Code Extension",
      },
    },
    GlobalUltimateDatafoxId: {
      title: "Global Ultimate DataFox Id",
      maxLength: 30,
      type: "string",
      description:
        "The DataFox Company identifier of the Global Ultimate for the account, which is the highest family member globally across countries as this business entity as you walk up this branch of the tree. A case may be its own Global Ultimate.",
      nullable: true,
    },
    State: {
      title: "State",
      maxLength: 60,
      type: "string",
      description: "The state element of Address.",
      nullable: true,
      "x-hints": {
        protectionKey: "PartySiteEO.State",
        protectionObjectTitle: "Address",
        protectionState: "TOKENIZED",
        protectionAttributeTitle: "State",
      },
    },
    CEOTitle: {
      title: "Chief Executive Title",
      maxLength: 240,
      type: "string",
      description: "The formal title of the chief executive officer.",
      nullable: true,
    },
    UniqueNameSuffix: {
      title: "Name Suffix",
      maxLength: 540,
      type: "string",
      description:
        "The suffix used to generate the attribute PartyUniqueName. The suffix is concatenated to the OrganizationName attribute to generate the PartyUniqueName. The primary address is defaulted as the suffix.",
      nullable: true,
    },
    AddressElementAttribute1: {
      title: "Additional Address Element 1",
      maxLength: 150,
      type: "string",
      description:
        "The additional address element to support flexible address format.",
      nullable: true,
    },
    AddressElementAttribute2: {
      title: "Additional Address Element 2",
      maxLength: 150,
      type: "string",
      description:
        "The additional address element to support flexible address format.",
      nullable: true,
    },
    AddressElementAttribute3: {
      title: "Additional Address Element 3",
      maxLength: 150,
      type: "string",
      description:
        "The additional address element to support flexible address format.",
      nullable: true,
    },
    SalesTeamMember: {
      title: "Account Resources",
      type: "array",
      description:
        "Account resources is used to view, create, update, and delete the sales team members of an account. The sales team members represent a resource party, and are assigned to a sales account team. A sales account team member has a defined access role for the sales account.",
      items: {
        $ref: "#/components/schemas/accounts-SalesTeamMember-item-post-request",
      },
    },
    RawPhoneNumber: {
      title: "Raw Phone Number",
      maxLength: 60,
      type: "string",
      description: "The unformatted phone number of the organization.",
      nullable: true,
      "x-hints": {
        AltLabel: "Phone",
      },
    },
    CurrentFiscalYearPotentialRevenueAmount: {
      title: "Current Fiscal Year's Potential Revenue",
      type: "number",
      description:
        "The estimated revenues that can be earned by the organization during its current fiscal year.",
      nullable: true,
    },
    OrganizationName: {
      title: "Organization Name",
      maxLength: 360,
      type: "string",
      description: "The name of the account.",
      nullable: false,
    },
    LocalBusinessIdentifierType: {
      title: "Common Business Identifier Type",
      maxLength: 30,
      type: "string",
      description:
        "The lookup that represents most common business identifier in a country such as Chamber of Commerce Number in Italy, Government Registration Number in Taiwan. A list of accepted values are defined in the lookup type LOCAL_BUS_IDEN_TYPE.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
      },
    },
    HQBranchIndicator: {
      title: "HQ Branch Indicator",
      maxLength: 30,
      type: "string",
      description:
        "The status of this site, such as HQ, a branch, or a single location. A list of accepted values are defined in the lookup type HQ_BRANCH_IND.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
      },
    },
    PrimaryAddress: {
      title: "Primary Addresses",
      type: "array",
      description:
        "The primary addresses resource is used to view, create, update, and delete the primary addresses of the accounts. A primary address is the default communication address of an account.",
      items: {
        $ref: "#/components/schemas/accounts-PrimaryAddress-item-post-request",
      },
      "x-cardinality": "1",
    },
    FaxAreaCode: {
      title: "Fax Area Code",
      maxLength: 20,
      type: "string",
      description: "The area code for the fax number.",
      nullable: true,
      "x-hints": {
        protectionKey: "PhoneEO.PhoneAreaCode",
        protectionObjectTitle: "Phone",
        protectionState: "TOKENIZED",
        protectionAttributeTitle: "Area Code",
      },
    },
    Keywords: {
      title: "Keywords",
      maxLength: 2000,
      type: "string",
      description: "List of the top keywords of the company.",
      nullable: true,
    },
    DoNotConfuseWith: {
      title: "Don't Confuse With",
      maxLength: 255,
      type: "string",
      description:
        "Indicates that there is an organization that is similarly named.",
      nullable: true,
    },
    AddressElementAttribute4: {
      title: "Additional Address Element 4",
      maxLength: 150,
      type: "string",
      description:
        "The additional address element to support flexible address format.",
      nullable: true,
    },
    FiscalYearendMonth: {
      title: "Fiscal Year End Month",
      maxLength: 30,
      type: "string",
      description:
        "The last month of a fiscal year for the organization. The list of accepted values is defined in the lookup type MONTH.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
      },
    },
    AddressElementAttribute5: {
      title: "Additional Address Element 5",
      maxLength: 150,
      type: "string",
      description:
        "The additional address element to support flexible address format.",
      nullable: true,
    },
    DUNSNumber: {
      title: "D-U-N-S Number",
      maxLength: 30,
      type: "string",
      description:
        "The DUNS Number in freeform text format. The value not restricted to nine digit number.",
      nullable: true,
    },
    StockSymbol: {
      title: "Stock Symbol",
      maxLength: 20,
      type: "string",
      description:
        "The corporate stock symbol of the organization as listed in stock exchanges.",
      nullable: true,
    },
    CongressionalDistrictCode: {
      title: "Congressional District",
      maxLength: 2,
      type: "string",
      description: "The U.S. Congressional district code for the account.",
      nullable: true,
    },
    PostalCode: {
      title: "Postal Code",
      maxLength: 60,
      type: "string",
      description: "The postal code of the address.",
      nullable: true,
      "x-hints": {
        protectionKey: "PartySiteEO.PostalCode",
        protectionObjectTitle: "Address",
        protectionState: "TOKENIZED",
        protectionAttributeTitle: "Postal Code",
      },
    },
    PrimaryContactSourceSystem: {
      title: "Primary Contact Source System",
      type: "string",
      description:
        "The name of external source system where the primary contact of the account is imported from.",
      nullable: true,
      "x-hints": {
        dependencies: ["PrimaryContactPartyId"],
      },
    },
    PublicPrivateOwnershipFlag: {
      title: "Private Ownership",
      maxLength: 1,
      type: "boolean",
      description:
        "Indicates whether the organization is publically or privately owned. If the value is Y, then the organization is a privately owned organization. The default value is N.",
      nullable: true,
      default: false,
    },
    County: {
      title: "County",
      maxLength: 60,
      type: "string",
      description: "The county of the primary address.",
      nullable: true,
      "x-hints": {
        protectionKey: "PartySiteEO.County",
        protectionObjectTitle: "Address",
        protectionState: "TOKENIZED",
        protectionAttributeTitle: "County",
      },
    },
    GeneralServicesAdministrationFlag: {
      title: "GSA Indicator",
      maxLength: 1,
      type: "boolean",
      description:
        "Indicates whether organization is a US federal agency supported by the General Services Administration (GSA). If the value is Y, then the organization is supported by GSA. The default value is N.",
      nullable: true,
      default: false,
    },
    PhoneCountryCode: {
      title: "Phone Country Code",
      maxLength: 10,
      type: "string",
      description:
        "The international country code for a telephone number, such as 33 for France.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
      },
    },
    PhoneAreaCode: {
      title: "Phone Area Code",
      maxLength: 20,
      type: "string",
      description: "The area code for the telephone number.",
      nullable: true,
      "x-hints": {
        protectionKey: "PhoneEO.PhoneAreaCode",
        protectionObjectTitle: "Phone",
        protectionState: "TOKENIZED",
        protectionAttributeTitle: "Area Code",
      },
    },
    DataCloudStatus: {
      title: "Enrichment Status",
      maxLength: 30,
      type: "string",
      description:
        "The enrichment status of the contact record from Data-as-a-Service. A list of valid values are defined in the lookup DATA_CLOUD_STATUS. Review and update the codes using the Setup and Maintenance work area, Manage Standard Lookups task.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
      },
    },
    SourceSystemReference: {
      title: "Source System References",
      type: "array",
      description:
        "The source system reference resource is used to view, create, update, and delete source systems. A source system is an external system from which you import data.",
      items: {
        $ref: "#/components/schemas/accounts-SourceSystemReference-item-post-request",
      },
    },
    RegistrationType: {
      title: "Registration Type",
      maxLength: 30,
      type: "string",
      description:
        "Indicates the type of registration, such as nonprofit. The accepted values are defined in the lookup type REGISTRATION_TYPE.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
      },
    },
    AccountExtensionBase: {
      title: "Account Extension Bases",
      type: "array",
      description:
        "The account extension bases resource is used to view, create, update, and delete an account extension base. It serves as the base object for all the extension local objects that belong to the same extension type.",
      items: {
        $ref: "#/components/schemas/accounts-AccountExtensionBase-item-post-request",
      },
      "x-cardinality": "1",
    },
    AccountScoringTier: {
      title: "Account Scoring Tier",
      maxLength: 30,
      type: "string",
      description: "Tier assigned based on custom criteria by the user.",
      nullable: true,
    },
    HomeCountry: {
      title: "Home Country",
      maxLength: 2,
      type: "string",
      description: "The home country of the organization.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
      },
    },
    LegalStatus: {
      title: "Legal Status",
      maxLength: 30,
      type: "string",
      description:
        "The legal structure of the organization such as partnership, corporation, and so on.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
      },
    },
    Comments: {
      title: "Comments",
      maxLength: 2000,
      type: "string",
      description: "The corporate charter of the organization.",
      nullable: true,
    },
    OrganizationType: {
      title: "Organization Type",
      maxLength: 30,
      type: "string",
      description: "The type of the organization.",
      nullable: true,
    },
    SourceSystemReferenceValue: {
      title: "Party Source System Reference Value",
      type: "string",
      description:
        "The unique identifier for the account party from the external source system specified in the attribute SourceSystem.",
      nullable: true,
    },
    PartyNumber: {
      title: "Party Number",
      maxLength: 30,
      type: "string",
      description:
        "The unique alternate identifier for the account party. You can update the value if the profile option HZ_GENERATE_PARTY_NUMBER is set to True. The default value is a concatenation of the value specified in the profile option ZCA_PUID_PREFIX and a unique system generated sequence number. Inactive records can't be updated.",
      nullable: false,
    },
    PrincipalTitle: {
      title: "Principal Title",
      maxLength: 240,
      type: "string",
      description:
        "The title of the highest ranking person in the organization.",
      nullable: true,
    },
    DUNSCreditRating: {
      title: "D&B Credit Rating",
      maxLength: 5,
      type: "string",
      description: "The Dun & Bradstreet credit rating.",
      nullable: true,
    },
    TotalEmployeesMinimumIndicator: {
      title: "Number of Employees Minimum Qualifier",
      maxLength: 30,
      type: "string",
      description:
        "Indicates if the number is a minimum, maximum, or average number of total employees. The accepted values are defined in the lookup type TOTAL_EMP_MIN_IND.",
      nullable: true,
      "x-hints": {
        controlType: "choice",
      },
    },
    RawFaxNumber: {
      title: "Raw Fax Number",
      maxLength: 60,
      type: "string",
      description: "The unformatted fax number of the organization.",
      nullable: true,
    },
    PhoneVerificationDate: {
      title: "Phone Verification Date",
      type: "string",
      description: "The date when phone number of account was last verified.",
      format: "date",
      nullable: true,
      "x-queryable": false,
      "x-hints": {
        dependencies: ["PhoneStr"],
      },
    },
  },
};

module.exports = yourInput;
