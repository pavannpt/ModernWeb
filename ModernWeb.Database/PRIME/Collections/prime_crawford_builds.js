db.createCollection("PRIME_CRAWFORD_BUILDS", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["BuildId", "BuildNumber", "BuildPath", "Description", "IsActive", "CreatedBy", "CreatedDate"],
            properties: {
                BuildId: {
                    bsonType: "int",
                    description: "PRIME internal build id"
                },
                BuildNumber: {
                    bsonType: "int",
                    description: "Crawford tool build number"
                },
                BuildPath: {
                    bsonType: "string",
                    description: "path of exe",
                    maxLength: 250
                },
                Description: {
                    bsonType: "int",
                    description: "Build description",
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