from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd 
import re


from sklearn.feature_extraction.text import TfidfVectorizer
#movies = pd.read_csv(r"C:\Users\Nabeera\Documents\GitHub\476-movie-recs\film-finder\src\python\movie_dataset.csv")
#vectorizer = TfidfVectorizer(ngram_range=(1,2))

#tfidf = vectorizer.fit_transform(movies["cleanedTitle"])
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

#def search(title):
#title = "Resurrection Man"
#title = clean_title(title)
#query_vec = vectorizer.transform([title])
#similarity = cosine_similarity(query_vec, tfidf).flatten()
#indices = np.argpartition(similarity, -5)[-5:]
#results = movies.iloc[indices].iloc[::-1]
#return results
#results 

#results_dict = results.to_dict(orient='records')


app = Flask(__name__)
CORS(app)

# Movies API route
@app.route("/movies2")
def movies():
    
    #return jsonify({"movies": results_dict})
    return {"movies2": ["IT", "Works","YIPEE"]}


if __name__ == "__main__":
    app.run(debug=True)