db.createCollection("PRIME_SOURCE_SYSTEM", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["SourceSystemId", "SourceSystemName", "IsActive", "CreatedBy", "CreatedDate"],
            properties: {
                SourceSystemId: {
                    bsonType: "int",
                    description: "unique id for each source system"
                },
                SourceSystemName: {
                    bsonType: "string",
                    description: "source system name",
                    maxLength: 20
                },
                SourceSystemDesc: {
                    bsonType: "string",
                    description: "source system description",
                    maxLength: 250
                },
                IsActive: {
                    bsonType: "bool",
                    description: "is record active ?"
                },
                CreatedBy: {
                    bsonType: "string",
                    description: "Creator of the record",
                    maxLength: 20
                },
                CreatedDate: {
                    bsonType: "date",
                    description: "Date when record was created"
                },
                UpdatedBy: {
                    bsonType: "string",
                    description: "Date when record was updated",
                    maxLength: 20
                },
                UpdatedDate: {
                    bsonType: "date",
                    description: "Date when record was updated"
                }
            }
        }
    }
})