db.createCollection("PRIME_COUNTERS", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "sequence_value"],
            properties: {
                _id: {
                    bsonType: "string",
                    description: "Collection primary key"
                },
                sequence_value: {
                    bsonType: "int",
                    description: "incremented value"
                }
            }
        }
    }
});