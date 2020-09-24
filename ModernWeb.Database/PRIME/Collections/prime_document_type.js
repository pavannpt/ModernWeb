db.createCollection("PRIME_DOCUMENT_TYPE", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["DocumentTypeId", "DocumentTypeName", "IsActive", "CreatedBy", "CreatedDate"],
            properties: {
                DocumentTypeId: {
                    bsonType: "int",
                    description: "unique id for each source system"
                },
                DocumentTypeName: {
                    bsonType: "string",
                    description: "source system name",
                    maxLength: 20
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