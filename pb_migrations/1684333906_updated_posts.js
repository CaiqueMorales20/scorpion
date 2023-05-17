migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("59iagae886o33cm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sal8wdxm",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("59iagae886o33cm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sal8wdxm",
    "name": "field",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
