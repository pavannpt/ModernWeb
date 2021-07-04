db.createCollection("PRIME_STATES", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["StateId", "StateCode", "StateName", "IsActive", "CreatedBy", "CreatedDate"],
            properties: {
                StateId: {
                    bsonType: "int",
                    description: "must be non zero"
                },
                StateCode: {
                    bsonType: "string",
                    description: "must be non empty and 2 character state code",
                    maxLength: 20
                },
                StateName: {
                    bsonType: "string",
                    description: "Can be empty with valid state name",
                    maxLength: 100
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




db.getCollection('Address').update(
    { "_id": ObjectId("603dc8b1f259643fe08e1d02") },
    {
        $set: {
            FullAddr: {
                $concat: ["$NUMBER", "$STREET", "$UNIT", "$CITY", "$DISTRICT", "$REGION", "$POSTCODE"]
            }
        }
    }
)


db.Address.find({
    FullAddr: {
        $in: [/OAK ST/,
            /WESTCHESTER DR/,
            /CHERRY ST/,
            /RIVERVIEW ST/,
            /NASHUA ST/,
            /MARSHALL ST/,
            /FERN CT/,
            /JOHNSON ST/,
            /SAVAGE RD/,
            /SPRUCE ST/,
            /FERN CT/,
            /SPRUCE ST/,
            /UNION ST/,
            /BOXWOOD CIR/,
            /SOUTH ST/,
            /RIVERVIEW ST/,
            /PERRY RD/,
            /WHEELER ST/,
            /NASHUA ST/,
            /NASHUA ST/,
            /WALKER ST/,
            /LAUREL ST/,
            /JOHNSON ST/,
            /SPRUCE ST/,
            /UNION ST/,
            /WESTCHESTER DR/,
            /WESTCHESTER DR/,
            /SOUTH ST/,
            /WEST ST/,
            /BOXWOOD CIR/,
            /BOXWOOD CIR/,
            /RIVERVIEW ST/,
            /WEST ST/,
            /SPAULDING ST/,
            /UNION ST/,
            /NASHUA ST/,
            /SPAULDING ST/,
            /JOHNSON ST/,
            /PROSPECT ST/,
            /SPAULDING ST/,
            /BOXWOOD CIR/,
            /LAUREL ST/,
            /SPAULDING ST/,
            /BROOKVIEW CT/,
            /SPAULDING ST/,
            /SPAULDING ST/,
            /SPAULDING ST/,
            /SPAULDING ST/,
            /RIVERVIEW ST/,
            /WEBSTER ST/,
            /LAUREL ST/,
            /OXBRIDGE WAY/,
            /MARSHALL ST/,
            /RIVERVIEW ST/,
            /WEST ST/,
            /NASHUA ST/,
            /OAK ST/,
            /NASHUA ST/,
            /WESTCHESTER DR/,
            /JOHNSON ST/,
            /NASHUA ST/,
            /PERRY RD/,
            /BROOKVIEW CT/,
            /SAVAGE RD/,
            /FERN CT/,
            /FERN CT/,
            /SPRUCE ST/,
            /OXBRIDGE WAY/,
            /RIVERVIEW ST/,
            /SOUTH ST/,
            /WALKER ST/,
            /PROSPECT ST/,
            /WILLOW ST/,
            /BOXWOOD CIR/,
            /RIVERVIEW ST/,
            /JOHNSON ST/,
            /SAVAGE RD/,
            /NASHUA ST/,
            /WILLOW ST/,
            /NASHUA ST/,
            /LAUREL ST/,
            /SPRUCE ST/,
            /WHITTEN RD/,
            /FERN CT/,
            /OLD RR BED/,
            /UNION ST/,
            /SOUTH ST/,
            /PERRY RD/,
            /OXBRIDGE WAY/,
            /NASHUA ST/,
            /UNION ST/,
            /WESTCHESTER DR/,
            /BOXWOOD CIR/,
            /UNION ST/,
            /NASHUA ST/,
            /MARSHALL ST/,
            /SPRUCE ST/,
            /PROSPECT ST/,
            /OLIVE ST/,
            /WESTCHESTER DR/            
        ]
    }
}).count()