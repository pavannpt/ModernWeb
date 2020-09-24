db.createCollection("PRIME_WORKFLOWS", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["WorkflowId", "SourceSystemId", "WorkflowDescription", "InputFilePath", "DocumentType", "IsActive"],
            properties: {
                WorkflowId: {
                    bsonType: "int",
                    description: "Must be an integer and cannot be null"
                },
                SourceSystemId: {
                    bsonType: "int",
                    description: "Must be an integer and cannot be null"
                },
                WorkflowDescription: {
                    bsonType: "string",
                    description: "Must be a string and cannot be empty",
                    maxLength: 250
                },
                InputFilePath: {
                    bsonType: "string",
                    description: "Must be a string and cannot be empty",
                    maxLength: 250
                },
                DocumentType: {
                    bsonType: "string",
                    description: "Must be a string and cannot be empty",
                    maxLength: 10
                },
                StateCode: {
                    bsonType: "string",
                    description: "Must be a string and can contain valid 2 digit state code",
                    maxLength: 3
                },
                IsSingleRun: {
                    bsonType: "bool",
                    description: "Must be a boolean"
                },
                TriggerBatch: {
                    bsonType: "string",
                    description: "Must be a string",
                    maxLength: 70
                },
                IsActive: {
                    bsonType: "bool",
                    description: "Must be a boolean and cannot be null"
                },
                CreatedBy: {
                    bsonType: "string",
                    description: "Must be a string",
                    maxLength: 100
                },
                CreatedDate: {
                    bsonType: "date",
                    description: "Must be an ISODATE"
                },
                UpdatedBy: {
                    bsonType: "string",
                    description: "Must be a string",
                    maxLength: 100
                },
                UpdatedDate: {
                    bsonType: "date",
                    description: "Must be an ISODATE"
                },
            }
        }
    }
});