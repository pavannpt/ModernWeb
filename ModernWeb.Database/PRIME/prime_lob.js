db.createCollection("PRIME_LOB", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["LOBID", "SourceSystemId", "LOBName", "IsActive", "CreatedBy", "CreatedDate"],
            properties: {
                LOBId: {
                    bsonType: "int",
                    description: "unique id for each source system"
                },
                SourceSystemId: {
                    bsonType: "int",
                    description: "sourcesystem to which LOB belongs to"
                },
                LOBName: {
                    bsonType: "string",
                    description: "LOB name",
                    maxLength: 20
                },
                LOBDesc: {
                    bsonType: "string",
                    description: "LOB description",
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
});