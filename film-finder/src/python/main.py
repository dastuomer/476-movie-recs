from flask import Flask, jsonify, request,session
from flask_cors import CORS
import pandas as pd 
import re
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
from flask_pymongo import PyMongo
from pymongo import MongoClient 
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

#building the app 
app = Flask(__name__)
app.secret_key = 'your_secret_key'
# Set up MongoDB connection 
client = MongoClient('mongodb+srv://476team:FilmFinder!!@filmfinder.sjnushj.mongodb.net/?retryWrites=true&w=majority&appName=FilmFinder') 
db = client['test'] 
collection = db['films']



try:
    db.command('ismaster')
    print("Connected successfully to MongoDB Atlas")
except Exception as e:
    print("Connection failed:", e)

cursor = collection.find()
data_list = list(cursor)

# Convert list of dictionaries to DataFrame
movies22 = pd.DataFrame(data_list)
movies22_dict = movies22.to_dict(orient='records')
##turn id into a string 
for record in movies22_dict:
        record['_id'] = str(record['_id'])

movies = pd.DataFrame(data_list)
print(type(movies["title"]))

vectorizer = TfidfVectorizer(ngram_range=(1,2))
movies['title'] = movies['title'].astype(str)
tfidf = vectorizer.fit_transform(movies["title"])


#plot summary stuff 
movies['plot'] = movies['plot'].fillna('')
vectorizer = TfidfVectorizer(ngram_range=(1,2))

tfidf = vectorizer.fit_transform(movies["plot"])


def plott(plot,movies):
    query_vec = vectorizer.transform([plot])
    similarscore = cosine_similarity(query_vec, tfidf).flatten()
    index = np.argpartition(similarscore, -10)[-10:]
    plot_results = movies.iloc[index].iloc[::-1]
    plot_results_short_dict = plot_results.to_dict(orient='records')
    sel = ['title','plot','poster']
    selected_data = [{column: record[column] for column in sel} for record in plot_results_short_dict]
    return selected_data


#app = Flask(__name__)
CORS(app)



@app.route("/plot_recommend/<search>")
def movies_recommend(search):
    data_str = session.get('data_str', None)
    #rec = enter_movie()
    data_str = search
    sel = plott(data_str, movies)
    print(sel)
    return jsonify({"plot_recommendations": sel}) 



if __name__ == "__main__":
    app.run(debug=True)