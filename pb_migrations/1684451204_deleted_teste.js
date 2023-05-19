migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("juh0snm8uqtsv0n");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "juh0snm8uqtsv0n",
    "created": "2023-05-17 03:34:55.047Z",
    "updated": "2023-05-17 03:34:55.047Z",
    "name": "teste",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "asliqxhn",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "sw16g1wm",
        "name": "description",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
