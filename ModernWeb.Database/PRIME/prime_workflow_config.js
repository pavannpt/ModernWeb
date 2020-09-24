db.createCollection("PRIME_WORKFLOW_CONFIG", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [],
            properties: [
                
            ]
        }
    }
})