migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("59iagae886o33cm")

  // remove
  collection.schema.removeField("hbp0s8q7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ldsqiaet",
    "name": "description",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("59iagae886o33cm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hbp0s8q7",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("ldsqiaet")

  return dao.saveCollection(collection)
})
