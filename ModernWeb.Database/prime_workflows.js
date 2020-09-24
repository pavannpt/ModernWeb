db.createCollection("PRIME_WORKFLOWS", {
    validator: {
        $jsonScema: {
            bsonType: Object,
            required: ["WorkflowId", "SourceSystemId", "WorkflowDescription", "InputFilePath", "DocumentType", "IsActive"],
            properties: {
                WorkflowId: {
                    bsonType: "int",
                    descrption: "Must be an integer and cannot be null"
                },
                SourceSystemId: {
                    bsonType: "int",
                    descrption: "Must be an integer and cannot be null"
                },
                WorkflowDescription: {
                    bsonType: "string",
                    descrption: "Must be a string and cannot be empty"
                },
                InputFilePath: {
                    bsonType: "string",
                    descrption: "Must be a string and cannot be empty"
                },
                DocumentType: {
                    bsonType: "string",
                    descrption: "Must be a string and cannot be empty"
                },
                StateCode: {
                    bsonType: "string",
                    descrption: "Must be a string and can contain valid 2 digit state code"
                },
                IsSingleRun: {
                    bsonType: "bool",
                    descrption: "Must be a boolean"
                },
                TriggerBatch: {
                    bsonType: "string",
                    descrption: "Must be a string"
                },
                IsActive: {
                    bsonType: "bool",
                    descrption: "Must be a boolean and cannot be null"
                },
                CreatedBy: {
                    bsonType: "string",
                    descrption: "Must be a string"
                },
                CreatedDate: {
                    bsonType: "date",
                    descrption: "Must be an ISODATE"
                },
                UpdatedBy: {
                    bsonType: "string",
                    descrption: "Must be a string"
                },
                UpdatedDate: {
                    bsonType: "date",
                    descrption: "Must be an ISODATE"
                },
            }
        }
    }
});