from rest_framework.response import Response
from rest_framework.decorators import api_view
from pymongo import MongoClient
from bson import ObjectId #provides tools for working with BSON (Binary JSON) data, the native format used in MongoDB.


client = MongoClient('mongodb+srv://shevaitverma:962239@db1.j03ljgt.mongodb.net/')  # Replace with your MongoDB connection details
db = client['visualizer']  # Replace with your database name
dataset = db['dataset']


@api_view(['GET'])
def data(request):
    documents = dataset.find()
    # manually serialize the data... 
    jsonData = []
    for doc in documents:
        serialized_doc = {key: value for key, value in doc.items() if not isinstance(value, ObjectId)}
        jsonData.append(serialized_doc)

    return Response(jsonData)
