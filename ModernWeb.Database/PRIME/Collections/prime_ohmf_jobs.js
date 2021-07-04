db.createCollection("PRIME_OHMF_JOBS", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["JobId", "JobName"],
            properties:{
                JobId: {
                    bsonType: "int",
                    description: "must be an int and non-zero"
                },
                JobName: {
                    bsonType: "string",
                    description: "must be a string and non empty"
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