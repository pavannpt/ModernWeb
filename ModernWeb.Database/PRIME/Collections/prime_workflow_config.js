db.createCollection("PRIME_WORKFLOW_CONFIG", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["WorkflowConfigId", "WorkflowId", "Recipient", "DocumentType", "IsActive", "CreatedBy", "CreatedDate"],
            properties: {
                WorkflowConfigId: {
                    bsonType: "int",
                    description: ""
                },
                WorkflowId: {
                    bsonType: "int",
                    description: ""
                },
                Recipient: {
                    bsonType: "string",
                    description: ""
                },
                LOBID: {
                    bsonType: "int",
                    description: ""
                },
                DocumentType: {
                    bsonType: "string",
                    description: ""
                },
                PrintPreference: {
                    bsonType: "string",
                    description: ""
                },
                PageAsTiff: {
                    bsonType: "bool",
                    description: ""
                },
                Pages: {
                    bsonType: "string",
                    description: ""
                },
                BatchCount: {
                    bsonType: "int",
                    description: ""
                },
                SubBatchCount: {
                    bsonType: "int",
                    description: ""
                },
                Filler1: {
                    bsonType: "string",
                    description: ""
                },
                Filler2: {
                    bsonType: "string",
                    description: ""
                },
                Filler3: {
                    bsonType: "string",
                    description: ""
                },
                Filler4: {
                    bsonType: "string",
                    description: ""
                },
                Filler5: {
                    bsonType: "string",
                    description: ""
                },
                IsActive: {
                    bsonType: "bool",
                    description: ""
                },
                CreatedBy: {
                    bsonType: "string",
                    description: ""
                },
                CreatedDate: {
                    bsonType: "date",
                    description: ""
                },
                UpdatedBy: {
                    bsonType: "string",
                    description: ""
                },
                UpdatedDate: {
                    bsonType: "date",
                    description: ""
                },
                CrawfordConfigs:
                {
                    bsonType: ["array"],
                    description: "",
                    uniqueItems: true,
                    required: ["CrawfordConfigId", "CrawfordStep", "CrawfordConfigPath", "BuildId", "IsActive", "CreatedBy", "CreatedDate"],
                    properties: {
                        CrawfordConfigId: {
                            bsonType: "int",
                            description: ""
                        },
                        CrawfordStep: {
                            bsonType: "string",
                            description: ""
                        },
                        CrawfordConfigPath: {
                            bsonType: "string",
                            description: ""
                        },
                        BuildId: {
                            bsonType: "int",
                            description: ""
                        },
                        IsActive: {
                            bsonType: "bool",
                            description: ""
                        },
                        CreatedBy: {
                            bsonType: "string",
                            description: ""
                        },
                        CreatedDate: {
                            bsonType: "date",
                            description: ""
                        },
                        UpdatedBy: {
                            bsonType: "string",
                            description: ""
                        },
                        UpdatedDate: {
                            bsonType: "date",
                            description: ""
                        }
                    }
                }
                ,
                MainframeFiles:
                {
                    bsonType: ["array"],
                    description: "",
                    uniqueItems: true,
                    required: ["MainframeFileId", "MainframeFilename", "RunNumber", "IsActive", "CreatedBy", "CreatedDate"],
                    properties: {
                        MainframeFileId: {
                            bsonType: "int",
                            description: ""
                        },
                        MainframeFilename: {
                            bsonType: "string",
                            description: ""
                        },
                        RunNumber: {
                            bsonType: "int",
                            description: ""
                        },
                        BatchNumber: {
                            bsonType: "int",
                            description: ""
                        },
                        IsActive: {
                            bsonType: "bool",
                            description: ""
                        },
                        CreatedBy: {
                            bsonType: "string",
                            description: ""
                        },
                        CreatedDate: {
                            bsonType: "date",
                            description: ""
                        },
                        UpdatedBy: {
                            bsonType: "string",
                            description: ""
                        },
                        UpdatedDate: {
                            bsonType: "date",
                            description: ""
                        }
                    }
                }

            }
        }
    }
})