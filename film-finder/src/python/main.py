from flask import Flask, render_template, url_for, request, redirect, jsonify
from pymongo import MongoClient
import pandas as pd 
from sklearn.feature_extraction.text import TfidfVectorizer

movies = pd.read_csv(r"IMDb movies - IMDb movies.csv")

vectorizer = TfidfVectorizer(ngram_range=(1,2))

tfidf = vectorizer.fit_transform(movies["clean_plot"])
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
app = Flask (__name__)

    

client = MongoClient('localhost', '3000')
db = client['film_finder']
collection = db['movies']

@app.route('/search', methods=['GET'])
def search():
    # Get the search query from the request
    query = request.args.get('query')

    data = request.json


    plot = request.args.get('query')
    #plot = clean_plot(plot)
    query_vec = vectorizer.transform(movies[plot])
    similarity = cosine_similarity(query_vec, tfidf).flatten()
    indices = np.argpartition(similarity, -5)[-5:]
    results = movies.iloc[indices].iloc[::-1]
    #return results
   # results 


    return jsonify(results)



if __name__ == '__main__':
    app.run(debug=True)
